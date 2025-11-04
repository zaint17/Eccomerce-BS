import { Producto } from "../domain/Producto";
import { ProductoId } from "../domain/ProductoId";

export class ProductosInMemory {
  private producto: Producto[] = [];

  async create(producto: Producto): Promise<void> {
    this.producto.push(producto);
  }

  async getAll(): Promise<Producto[]> {
    return this.producto;
  }

  async getOneById(id: ProductoId): Promise<Producto | null> {
    return this.producto.find((p) => p.id.value === id.value) || null;
  }

  async edit(producto: Producto): Promise<void> {
    const index = this.producto.findIndex(
      (p) => p.id.value === producto.id.value
    );

    if (index === -1) {
      throw new Error("Producto no encontrado");
    }

    this.producto[index] = producto;
  }

  async delete(id: ProductoId): Promise<void> {
    this.producto = this.producto.filter((p) => p.id.value !== id.value);
  }
}
