import { Producto } from "../../domain/Producto";
import { ProductoErrorValue } from "../../domain/ProductoErrorValue";
import { ProductoId } from "../../domain/ProductoId";
import { ProductoRepository } from "../../domain/ProductoRepository";

export class GetOneByIdProducto {

    constructor (private repository: ProductoRepository) {}

    async run (id:string):Promise<Producto>{
        
        const user = await this.repository.getOneById( new ProductoId(id));
        if(!user) throw new ProductoErrorValue("Producto no encontrado");
        return user
        
    }


}