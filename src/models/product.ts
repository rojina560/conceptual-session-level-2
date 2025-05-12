// export class Product{
//  id: number;
//  name: string;
//  price: number;
//  quantity: number;
//  constructor( id:number, name: string, price: number,quantity: number){
//     this.id = id;
//     this.name = name;
//     this.price = price;
//     this.quantity = quantity;
//  }

//  getDetails(){
//     return `product : ${this.id} ${this.name} $${this.price} ${this.quantity}`
//  }
//  getStockValue(){
//     return this.price * this.quantity
//  }
//  sell(unit:number):string{
//    if(unit < this.quantity){
//       return 'product sesh hye gese'
//    } else{
//       this.quantity -= unit
//    }
//    return `this product ${this.name} have been sold ${unit} units`

//  }

// }
// encapculation
export class Product{
  private id: number;
  name: string;
 price: number;
 quantity: number;
 constructor( id:number, name: string, price: number,quantity: number){
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
 }

 getDetails(){
    return `product : ${this.id} ${this.name} $${this.price} ${this.quantity}`
 }
 getStockValue(){
    return this.price * this.quantity
 }
 sell(unit:number):string{
   if(unit < this.quantity){
      return 'product sesh hye gese'
   } else{
      this.quantity -= unit
   }
   return `this product ${this.name} have been sold ${unit} units`

 }

}