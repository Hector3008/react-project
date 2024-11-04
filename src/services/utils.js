import { productos, categories } from "../data"

export function getElements(){
  return productos
}
export function  getElement(id){
  const e = productos.find(e=>e.id==id)
  return e
}

export function getCategories(){
return categories.flat()
}
export function getCategory(id){
  const e = categories.find(e=>e.id===id)
  return e
}
