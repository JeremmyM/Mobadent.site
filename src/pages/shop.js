import React, { useState, useEffect, useMemo } from 'react'
import * as styles from './shop.module.css'
import { useLocation } from '@reach/router'

import Banner from '../components/Banner'
import Breadcrumbs from '../components/Breadcrumbs'
import Container from '../components/Container'
import Chip from '../components/Chip'
import Icon from '../components/Icons/Icon'
import Layout from '../components/Layout'
import LayoutOption from '../components/LayoutOption'
import ProductCardGrid from '../components/ProductCardGrid'
import Button from '../components/Button'
import productsData from '../data/products.json'

// ---- utilidades (sin cambios)
const readCategory = (p) => p?.category || p?.categories?.[0] || p?.type || 'Sin categoría'
const readBrand = (p) => {
  const v = p?.brand ?? p?.marca ?? p?.vendor ?? ''
  return v && typeof v === 'string' ? v.trim() : v || 'Sin marca'
}
const readTags = (p) =>
  Array.isArray(p?.tags)
    ? p.tags
    : typeof p?.tags === 'string'
      ? p.tags.split(',').map((t) => t.trim()).filter(Boolean)
      : []
const readPrice = (p) => {
  const n = typeof p?.price === 'number' ? p.price : Number(p?.price)
  return Number.isFinite(n) ? n : 0
}

const buildAvailableFilters = (items) => {
  const categories = new Map()
  const brands = new Map()
  let minPrice = Number.POSITIVE_INFINITY
  let maxPrice = 0

  (items || []).forEach((p) => {
    const c = readCategory(p)
    const b = readBrand(p)
    const price = readPrice(p)
    categories.set(c, (categories.get(c) || 0) + 1)
    brands.set(b, (brands.get(b) || 0) + 1)
    if (price < minPrice) minPrice = price
    if (price > maxPrice) maxPrice = price
  })

  if (!isFinite(minPrice)) minPrice = 0

  const toSorted = (m) => [...m.keys()].sort((a, b) => a.localeCompare(b, 'es'))
  return {
    categories: toSorted(categories),
    brands: toSorted(brands),
    priceRange: [Math.floor(minPrice), Math.ceil(maxPrice)],
  }
}

const filterAndSort = (items, { category, brand, q, priceMin, priceMax }, sortKey) => {
  const norm = (s) => (s || '').toString().toLowerCase()
  const qn = norm(q)

  let out = (items || []).filter((p) => {
    const c = readCategory(p)
    const b = readBrand(p)
    const price = readPrice(p)

    if (category && c !== category) return false
    if (brand && b !== brand) return false
    if (price < priceMin || price > priceMax) return false

    if (qn) {
      const haystack = [p?.name, p?.title, p?.subtitle, p?.description, c, b, ...readTags(p)]
        .filter(Boolean)
        .map(norm)
        .join(' ')
      if (!haystack.includes(qn)) return false
    }
    return true
  })

  switch (sortKey) {
    case 'price-asc':
      out.sort((a, b) => readPrice(a) - readPrice(b))
      break
    case 'price-desc':
      out.sort((a, b) => readPrice(b) - readPrice(a))
      break
    case 'name-asc':
      out.sort((a, b) =>
        (a?.name || a?.title || '').localeCompare(b?.name || b?.title || '', 'es')
      )
      break
    case 'name-desc':
      out.sort((a, b) =>
        (b?.name || b?.title || '').localeCompare(a?.name || a?.title || '', 'es')
      )
      break
    default:
      break // relevance = sin cambios
  }
  return out
}

const PAGE_SIZE = 24

const ShopPage = () => {
  // datos
  const products = Array.isArray(productsData) ? productsData : []
  const available = useMemo(() => buildAvailableFilters(products), [products])

  // Hook para obtener el estado de la navegación
  const location = useLocation()

  // >>> ESTE ES EL CÓDIGO CLAVE QUE NECESITAS <<<<<<<
  // Se usa el valor del estado de la URL para inicializar el filtro.
  const initialStateCategory = location.state?.category || ''

  // estado filtros/UI
  const [showFilter, setShowFilter] = useState(false)
  const [category, setCategory] = useState(initialStateCategory) // Se inicializa con el estado de la URL.
  const [brand, setBrand] = useState('')
  const [q, setQ] = useState('')
  const [sort, setSort] = useState('relevance')
  const [priceMin, setPriceMin] = useState(available.priceRange[0])
  const [priceMax, setPriceMax] = useState(available.priceRange[1])
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE)

  // si cambia el rango disponible (primera carga), alinear estado
  useEffect(() => {
    setPriceMin(available.priceRange[0])
    setPriceMax(available.priceRange[1])
  }, [available.priceRange[0], available.priceRange[1]])

  // cerrar panel con ESC (sólo en cliente)
  useEffect(() => {
    const handler = (e) => {
      if (e?.key === 'Escape' || e?.keyCode === 27) setShowFilter(false)
    }
    if (typeof window !== 'undefined') {
      window.addEventListener('keydown', handler)
      return () => window.removeEventListener('keydown', handler)
    }
  }, [])

  // productos filtrados
  const filtered = useMemo(() => {
    return filterAndSort(products, { category, brand, q, priceMin, priceMax }, sort)
  }, [products, category, brand, q, priceMin, priceMax, sort])

  // reset de paginación al cambiar filtros u orden
  useEffect(() => setVisibleCount(PAGE_SIZE), [category, brand, q, priceMin, priceMax, sort])

  const total = filtered.length
  const pageItems = filtered.slice(0, visibleCount)
  const canLoadMore = visibleCount < total

  const clearAll = () => {
    setCategory('')
    setBrand('')
    setQ('')
    setSort('relevance')
    setPriceMin(available.priceRange[0])
    setPriceMax(available.priceRange[1])
  }

  // categorías “rápidas” (chips)
  const topCategories = useMemo(() => available.categories.slice(0, 6), [available.categories])

  return (
    <Layout>
      <div className={styles.root}>
        <Container size={'large'} spacing={'min'}>
          <div className={styles.breadcrumbContainer}>
            <Breadcrumbs
              crumbs={[
                { link: '/', label: 'Inicio' },
                { label: 'Productos' },
              ]}
            />
          </div>
        </Container>

        <Banner
          maxWidth={'650px'}
          name={'Materiales y Equipos Dentales'}
          subtitle={'Encuentra resinas, adhesivos, instrumental, endodoncia, profilaxis y más. Productos originales con soporte profesional en Santo Domingo.'}
        />

        <Container size={'large'} spacing={'min'}>
          {/* meta / controles */}
          <div className={styles.metaContainer}>
            <span className={styles.itemCount}>
              {total} {total === 1 ? 'producto' : 'productos'}
            </span>

            <div className={styles.controllerContainer}>
              <div
                className={styles.iconContainer}
                role="presentation"
                onClick={() => setShowFilter(!showFilter)}
              >
                <Icon symbol={'filter'} />
                <span>Filtros</span>
              </div>

              <div className={`${styles.iconContainer} ${styles.sortContainer}`}>
                <label htmlFor="sort" style={{ marginRight: 8 }}>
                  Ordenar por
                </label>
                <select
                  id="sort"
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className={styles.sortSelect || undefined}
                >
                  <option value="relevance">Relevancia</option>
                  <option value="price-asc">Precio: más bajo a más alto</option>
                  <option value="price-desc">Precio: más alto a más bajo</option>
                  <option value="name-asc">Nombre: A-Z</option>
                  <option value="name-desc">Nombre: Z-A</option>
                </select>
                <Icon symbol={'caret'} />
              </div>
            </div>
          </div>

          {/* panel simple de filtros (sin CardController) */}
          {showFilter && (
            <div
              className={styles.filterPanel || undefined}
              style={{ padding: 16, border: '1px solid #eee', borderRadius: 12, marginBottom: 16 }}
            >
              <div
                style={{
                  display: 'grid',
                  gap: 12,
                  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                }}
              >
                <div>
                  <label style={{ display: 'block', marginBottom: 6 }}>Categoría</label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    style={{ width: '100%' }}
                  >
                    <option value="">Todas</option>
                    {available.categories.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: 6 }}>Marca</label>
                  <select
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                    style={{ width: '100%' }}
                  >
                    <option value="">Todas</option>
                    {available.brands.map((b) => (
                      <option key={b} value={b}>
                        {b}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: 6 }}>Buscar</label>
                  <input
                    value={q}
                    onChange={(e) => setQ(e.target.value)}
                    placeholder="resina, adhesivo, etc."
                    style={{ width: '100%' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: 6 }}>Precio mínimo</label>
                  <input
                    type="number"
                    value={priceMin}
                    min={available.priceRange[0]}
                    max={priceMax}
                    onChange={(e) => setPriceMin(Number(e.target.value) || 0)}
                    style={{ width: '100%' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: 6 }}>Precio máximo</label>
                  <input
                    type="number"
                    value={priceMax}
                    min={priceMin}
                    max={available.priceRange[1]}
                    onChange={(e) => setPriceMax(Number(e.target.value) || 0)}
                    style={{ width: '100%' }}
                  />
                </div>
              </div>

              <div style={{ marginTop: 12, display: 'flex', gap: 8 }}>
                <Button level="secondary" onClick={() => setShowFilter(false)}>
                  Aplicar
                </Button>
                <Button level="tertiary" onClick={clearAll}>
                  Limpiar filtros
                </Button>
              </div>
            </div>
          )}

          {/* chips de categorías rápidas */}
          <div className={styles.chipsContainer}>
            {available.categories.map((c) => (
              <Chip
                key={c}
                name={c}
                active={category === c}
                onClick={() => setCategory(category === c ? '' : c)}
              />
            ))}
          </div>

          {/* grilla */}
          <div className={styles.productContainer}>
            <span className={styles.mobileItemCount}>
              {total} {total === 1 ? 'producto' : 'productos'}
            </span>
            <ProductCardGrid data={pageItems} />
          </div>

          {/* cargar más */}
          <div className={styles.loadMoreContainer}>
            <span>
              {Math.min(visibleCount, total)} de {total}
            </span>
            <Button
              fullWidth
              level={'secondary'}
              disabled={!canLoadMore}
              onClick={() => setVisibleCount((v) => Math.min(v + PAGE_SIZE, total))}
            >
              CARGAR MÁS
            </Button>
          </div>
        </Container>
      </div>

      <LayoutOption />
    </Layout>
  )
}

export default ShopPage