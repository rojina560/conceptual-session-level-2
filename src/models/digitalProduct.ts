import { Product } from "./product";

export class DigitalProduct extends Product{
    constructor( id:number, name: string, price: number,quantity: number , public downloadSize:number){
        super(id,name,price,quantity)
    }
    getDownloadInfo(){
        return `product ${this.name} is downloading size ${this.downloadSize}`
    }

}