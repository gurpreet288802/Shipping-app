import { HttpClient } from "@angular/common/http";
import { Order } from "../models/order";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private apiUrl = environment.apiUrl + '/api/Orders';
  constructor(private http: HttpClient) { }

  getOrders() {
    return this.http.get<Order[]>(this.apiUrl);
  }

  getOrder(id: number) {
    return this.http.get<Order>(`${this.apiUrl}/${id}`);
  }

  createOrder(order: Order) {
    return this.http.post(this.apiUrl, order);
  }

  updateOrder(order: Order) {
    return this.http.put(`${this.apiUrl}/${order.id}`, order);
  }

  deleteOrder(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
