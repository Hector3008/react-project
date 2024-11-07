import React from 'react'
import { getBrands, getCategories, getKeywords } from '../../../../services/utils'
import { Link } from 'react-router-dom'
import "./filters.css"
const Filters = () => {
  const categories = getCategories()
  const keywords = getKeywords()
  const brands = getBrands()
  return (
    <>
      <h3>filters by category</h3>
      {categories.map((category) => (
        <Link key={`Tab-${category.id}`} to={`/catalog/category/${category.id}`}>
          <li>{category.title}</li>
        </Link>
      ))}
      <h3>filters by brand</h3>
      {brands.map((brand) => (
        <Link key={`tab-${brand}`} to={`/catalog/brand/${brand}`}>
          <li>{brand}</li>
        </Link>
      ))}
      <h3>filters by keyword</h3>
      {keywords.map((keyword) => (
        <Link key={`Tab-${keyword}`} to={`/catalog/keyword/${keyword}`}>
          <li>{keyword}</li>
        </Link>
      ))}
    </>
  );
}

export default Filters