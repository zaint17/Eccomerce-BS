import { Producto } from "./Producto";
import { ProductoId } from "./ProductoId";

export interface ProductoRepository{
    create (Producto:Producto): Promise <void>
    getAll() :Promise<Producto[]>;
    getOneById(id: ProductoId): Promise <Producto|null>
    edit(Producto:Producto):Promise<void>
    delete(id:ProductoId):Promise<void>
}