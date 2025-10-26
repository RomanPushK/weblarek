import { TPayment, IBuyer } from "../../types";

/*
`saveCustomer(data: Partial<IBuyer>): void` - сохраняет данные покупателя. Перадается объект IByuer, в котором поля необязательны для заполнения.
`getCustomer(): IBuyer` - возвращает объект с данными покупателя.
`clearCustomer(): void` - очищает данные покупателя.
`validate(): Record<string, string>` - проверяет данные покупателя на заполненность. Возвращает объект с ошибками.
*/

export class Customer {
  private payment: TPayment = "";
  private email: string = "";
  private phone: string = "";
  private address: string = "";

  public saveCustomer(data: Partial<IBuyer>): void {
    if (data.payment !== undefined) this.payment = data.payment;
    if (data.email !== undefined) this.email = data.email;
    if (data.phone !== undefined) this.phone = data.phone;
    if (data.address !== undefined) this.address = data.address;
  }

  public getCustomer(): IBuyer {
    return {
      payment: this.payment,
      email: this.email,
      phone: this.phone,
      address: this.address
    }
  }

  public clearCustomer(): void {
    this.payment = "";
    this.email = "";
    this.phone = "";
    this.address = "";
  }

  public validate(): Record<string, string> {
    const valid: Record<string, string> = {};
    if (this.payment === "") valid.payment = "Укажите способ оплаты.";
    if (this.email === "") valid.email = "Укажите емэйл.";
    if (this.phone === "") valid.phone = "Укажите телефон.";
    if (this.address === "") valid.address = "Укажите адрес.";
    return valid;
  }
}