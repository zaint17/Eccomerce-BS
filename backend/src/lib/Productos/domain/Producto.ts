import { ProductoCantidad } from "./ProductoCantidad"
import { ProductoCategoria } from "./ProductoCategoria"
import { ProductoDescripcion } from "./ProductoDescripcion"
import { ProductoId } from "./ProductoId"
import { ProductoMarca } from "./ProductoMarca"
import { ProductoNombre } from "./ProductoName"
import { ProductoPrecio } from "./ProductoPrecio"

export class Producto{
    id:ProductoId
    name:ProductoNombre
    categoria:ProductoCategoria
    marca:ProductoMarca
    cantidad:ProductoCantidad
    precio:ProductoPrecio
    descripcion:ProductoDescripcion

    constructor(id:ProductoId, name:ProductoNombre, categoria:ProductoCategoria, marca:ProductoMarca, cantidad:ProductoCantidad, precio:ProductoPrecio, descripcion:ProductoDescripcion){
        this.id = id
        this.name = name
        this.categoria = categoria
        this.marca = marca
        this.cantidad = cantidad
        this.precio = precio
        this.descripcion = descripcion
    }

    public datosCompletos(){
        return `${this.id} - ${this.name} - ${this.categoria} - ${this.marca} - ${this.cantidad} - ${this.precio} - ${this.descripcion}`
    }
}