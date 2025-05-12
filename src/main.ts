import { PhysicalProduct } from "./interface/polymorphismInterface";
import { DigitalProduct } from "./models/digitalProduct";
import { Product } from "./models/product";


const sampleProduct = new Product( 1,'demo product', 2,10)
const sampleProduct2 = new PhysicalProduct( 1,'demo product', 2,10)
console.log(sampleProduct.getDetails());
console.log(sampleProduct.getStockValue());
console.log(sampleProduct2.getStockValue());
// console.log(sampleProduct);
// const downloadSize = new DigitalProduct( 1,'demo product', 2,10, 100)

// console.log(downloadSize.getDownloadInfo());

// console.log(sampleProduct.sell(30));
// console.log(sampleProduct);
