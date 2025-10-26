import { IProduct } from "../../types";

/*
`getProducts(): IProduct[]` - возвращает список товаров, находящихся в корзине.
`addProduct(product: IProduct): void` - добавляет товар, переданный в параметре, в корзину.
`removeProduct(product: IProduct): void` - удаляет переданный товар из корзины.
`getTotalPrice(): number` - возвращает общую стоимость всех товаров в корзине.
`clearCart(): void` - удаляет все товары из корзины.
`getCount(): number` - возвращает количество товаров в корзине.
`hasProduct(id: string): boolean` - проверяет, находится ли товар с данным id в корзине.
*/

export class Cart {
  private products: IProduct[] = [];

  public getProducts(): IProduct[] {
    return this.products;
  }

  public addProduct(product: IProduct): void{
    this.products.push(product);
  }

  public removeProduct(product: IProduct): void {
    this.products = this.products.filter(pr => pr.id !== product.id);
  }

  public getTotalPrice(): number {
    let acc: number = 0;
    this.products.forEach(pr => acc += (pr.price || 0));
    return acc;
  }

  public clearCart(): void {
    this.products = [];
  }

  public getCount(): number {
    return this.products.length;
  }

  public hasProduct(id: string): boolean {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id === id) return true;
    }
    return false;
  }
}