import { ProductoId } from "../../domain/ProductoId";
import { ProductoRepository } from "../../domain/ProductoRepository";


export class DeleteProducto {

    constructor (private repository: ProductoRepository) {}

    async run (id: string):Promise<void>{
        await this.repository.delete(new ProductoId(id))
    }


}