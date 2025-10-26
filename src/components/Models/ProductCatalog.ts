import { IProduct } from "../../types";

/*
`saveProducts(products: IProduct[]): void` - сохраняет массив товаров полученный в параметре метода.
`getProducts(): IProduct[]` - возвращает массив всех товаров из каталога.
`getProductById(id: string): IProduct | undefined` - возвращает товар по его id. Если товар с переданным id не найден, возвращает undefined.
`saveFocusedProduct(product: IProduct): void` - сохраняет товар для подробного отображения.
`getFocusedProduct(): IProduct | null` - возвращает товар, выбранный для подробного отображения.
*/

export class ProductCatalog {
  private products: IProduct[] = [];
  private productFocus: IProduct | null = null;

  public saveProducts(products: IProduct[]): void {
    this.products = products;
  }

  public getProducts(): IProduct[] {
    return this.products;
  }

  public getProductById(id: string): IProduct | undefined {
    return this.products.find(product => product.id === id);
  }

  public saveFocusedProduct(product: IProduct): void {
    this.productFocus = product;
  }

  public getFocusedProduct(): IProduct | null {
    return this.productFocus;
  }
}