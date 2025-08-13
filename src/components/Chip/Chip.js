import React from 'react';
import * as styles from './Chip.module.css';
import Icon from '../Icons/Icon';

const Chip = (props) => {
    const { name, active, onClick } = props;

    return (
        <div 
            className={`${styles.root} ${active ? styles.active : ''}`} 
            role={'presentation'} 
            onClick={onClick}
        >
            <span>{name}</span>
            {/* Solo muestra la 'X' si el chip está activo */}
            {active && <Icon symbol={'cross'}></Icon>}
        </div>
    );
};

export default Chip;