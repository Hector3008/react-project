import { productos, categories, keywords, brands, componentes__de__arrancador } from "../data"

export function getElements(){
  return productos
}
export function  getElement(id){
  const e = productos.find(e=>e.id==id)
  return e
}
export function getStarterComponents(){
  return componentes__de__arrancador
}
export function getCategories(){
return categories.flat()
}
export function getCategory(id){
  const e = categories.find(e=>e.id===id)
  return e
}

export function getKeywords(){
  return keywords
}

export function getBrands(){
  return brands
}