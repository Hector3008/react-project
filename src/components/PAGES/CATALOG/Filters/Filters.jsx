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
        <h3 className='title'>CATEGORIAS</h3>
        {categories.map((category) => (
          <Link
            key={`Tab-${category.id}`}
            to={`/catalog/category/${category.id}`}
          >
            <li className="filter-tab">{category.title}</li>
          </Link>
        ))}



      <h3 className='title'>MARCA</h3>
      {brands.map((brand) => (
        <Link key={`tab-${brand}`} to={`/catalog/brand/${brand}`}>
          <li className="filter-tab">{brand}</li>
        </Link>
      ))}

      <h3 className='title'>CLAVE</h3>
      {keywords.map((keyword) => (
        <Link key={`Tab-${keyword}`} to={`/catalog/keyword/${keyword}`}>
          <li className="filter-tab">{keyword}</li>
        </Link>
      ))}
    </>
  );
}

export default Filters