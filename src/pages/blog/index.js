import React from 'react';
import { navigate } from 'gatsby';

import BlogPreviewGrid from '../../components/BlogPreviewGrid';
import Container from '../../components/Container';
import Hero from '../../components/Hero';
import Layout from '../../components/Layout/Layout';
import ThemeLink from '../../components/ThemeLink';

import { generateMockBlogData } from '../../helpers/mock';
import * as styles from './index.module.css';
import { toOptimizedImage } from '../../helpers/general';

const BlogPage = (props) => {
  const blogData = generateMockBlogData(6);

  return (
    <Layout disablePaddingBottom>
      <div className={styles.root}>
        <Hero
          maxWidth={'400px'}
          image={toOptimizedImage('/blogCover.png')}
          title={`MOBADENT: calidad y confianza dental`}
          ctaLink={'Leer artículo'}
          ctaTo={'/blog/sample'}
          header={'odontología'}
        />

        <div className={styles.navContainer}>
          <ThemeLink
            onClick={() => navigate('/blog/sample')}
            to={'/blog/sample'}
          >
            Todas las publicaciones
          </ThemeLink>
          <ThemeLink
            onClick={() => navigate('/blog/sample')}
            to={'/blog/sample'}
          >
            Productos
          </ThemeLink>
          <ThemeLink
            onClick={() => navigate('/blog/sample')}
            to={'/blog/sample'}
          >
            Casos clínicos
          </ThemeLink>
          <ThemeLink
            onClick={() => navigate('/blog/sample')}
            to={'/blog/sample'}
          >
            Entrevistas
          </ThemeLink>
          <ThemeLink
            onClick={() => navigate('/blog/sample')}
            to={'/blog/sample'}
          >
            Novedades
          </ThemeLink>
        </div>

        {/* Blog Grid */}
        <div className={styles.blogsContainer}>
          <Container size={'large'}>
            <BlogPreviewGrid data={blogData} hideReadMoreOnWeb showExcerpt />
          </Container>
        </div>
      </div>
    </Layout>
  );
};

export default BlogPage;
