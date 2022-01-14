import React from 'react'
import { useSelector } from 'react-redux'
import { Categories } from '../../components'
import styles from './FilterBarContainer.module.scss'

const FilterBarContainer = () => {
    const { categories, activeCategory } = useSelector(({ filters }) => filters)

    return (
        <div className={styles.filter}>

            <Categories items={categories} activeCategory={activeCategory} />
        </div>
    )
}

export default FilterBarContainer
