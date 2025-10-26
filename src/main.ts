import './scss/styles.scss';

import { apiProducts } from './utils/data';
import { Customer } from './components/Models/Customer';
import { Cart } from './components/Models/Cart';
import { ProductCatalog } from './components/Models/ProductCatalog';
import { IBuyer } from './types';
import { Api } from './components/base/Api';
import { API_URL } from './utils/constants';
import { CommunicationAPI } from './components/base/CommunicationAPI';

const products = new ProductCatalog();
products.saveProducts(apiProducts.items);

console.log("Массив товаров из каталога: ", products.getProducts());
console.log("Товар по id: ", products.getProductById("b06cde61-912f-4663-9751-09956c0eed67"));
console.log("Неправильный товар по id: ", products.getProductById("100"));
console.log("Получение товара для подробного отображения:", products.getFocusedProduct());
console.log("Сохранение товара для подробного отображения", products.saveFocusedProduct(apiProducts.items[0]));
console.log("Получение товара для подробного отображения:", products.getFocusedProduct());
console.log("");
console.log("");
console.log("");


const cart = new Cart();
cart.addProduct(apiProducts.items[0]);
cart.addProduct(apiProducts.items[1]);
cart.addProduct(apiProducts.items[2]);

console.log("Массив товаров из корзины: ", cart.getProducts());
console.log("Товар по id: ", cart.hasProduct("c101ab44-ed99-4a54-990d-47aa2bb4e7d9"));
console.log("Неправильный товар по id: ", cart.hasProduct("100"));
console.log("Удаление элемента.");
cart.removeProduct(apiProducts.items[1]);
console.log("Массив товаров из корзины: ", cart.getProducts());
console.log("Цена всех товаров из корзины: ", cart.getTotalPrice());
console.log("Количество всех товаров из корзины: ", cart.getCount());
console.log("Очистка корзины");
cart.clearCart();
console.log("Массив товаров из корзины: ", cart.getProducts());
console.log("");
console.log("");
console.log("");

let buyer: Partial<IBuyer> = {};

buyer.payment = "card";
const customer = new Customer();
customer.saveCustomer(buyer);
console.log("Данные покупателя: ", customer.getCustomer());
buyer.email = "123";
customer.saveCustomer(buyer);
console.log("Данные покупателя: ", customer.getCustomer());
console.log("Валидация покупателя: ", customer.validate());
customer.clearCustomer();
console.log("Данные покупателя: ", customer.getCustomer());
console.log("");
console.log("");
console.log("");

const api = new Api(API_URL);
const communication = new CommunicationAPI(api);
const productCatalog = new ProductCatalog();

communication.get()
  .then(products => {
    productCatalog.saveProducts(products.items);
    console.log(productCatalog.getProducts());
  })
  .catch(err => console.error("Ошибка загрузки каталога:", err));
