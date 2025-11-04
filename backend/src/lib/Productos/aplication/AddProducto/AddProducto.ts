import { Producto } from "../../domain/Producto";
import { ProductoCantidad } from "../../domain/ProductoCantidad";
import { ProductoCategoria } from "../../domain/ProductoCategoria";
import { ProductoDescripcion } from "../../domain/ProductoDescripcion";
import { ProductoId } from "../../domain/ProductoId";
import { ProductoMarca } from "../../domain/ProductoMarca";
import { ProductoNombre } from "../../domain/ProductoName";
import { ProductoPrecio } from "../../domain/ProductoPrecio";
import { ProductoRepository } from "../../domain/ProductoRepository";

export class AddProducto {
    
  constructor(private repository: ProductoRepository) {}

  async run(
    id: string,
    name: string,
    categoria: string,
    marca: string,
    cantidad: number,
    precio: number,
    descripcion: string
  ): Promise<void> {
    const producto = new Producto(
      new ProductoId(id),
      new ProductoNombre(name),
      new ProductoCategoria(categoria),
      new ProductoMarca(marca),
      new ProductoCantidad(cantidad),
      new ProductoPrecio(precio),
      new ProductoDescripcion(descripcion)
    );

    return this.repository.create(producto);
  }
}
