import { GET, IApi, POST, POST_response } from "../../types";

export class CommunicationAPI {
  private api: IApi;
  public constructor(api: IApi) {
    this.api = api;
  }

  public get(): Promise<GET> {
    return this.api.get("/product/");
  }

  public post(data: POST): Promise<POST_response> {
    return this.api.post("/order/", data, "POST")
  }
}