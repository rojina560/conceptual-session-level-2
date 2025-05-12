import { Product } from "../models/product";
import { Purchase } from "./PhysicalProduct";

 export class PhysicalProduct extends Product implements Purchase{
    getStockValue(): number {
        return this.price
    }

}
