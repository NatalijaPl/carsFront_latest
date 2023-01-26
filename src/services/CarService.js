import ApiService from "./ApiService";
import { authService } from "./AuthService";

class CarService extends ApiService {
  constructor() {
    super();
    this.authService = authService;
  }

  async getAll() {
    return await this.client.get("/cars", {
      headers: this.authService.getHeaders(),
    });
  }

  async show(id) {
    return await this.client.get(`/cars/${id}`, {
      headers: this.authService.getHeaders(),
    });
  }

  async add(car) {
    await this.client.post("/cars", car, {
      headers: this.authService.getHeaders(),
    });
  }

  async update(id, car) {
    await this.client.put(`/cars/${id}`, car, {
      headers: this.authService.getHeaders(),
    });
  }

  async delete(id) {
    await this.client.delete(`/cars/${id}`, {
      headers: this.authService.getHeaders(),
    });
  }
}

export const carService = new CarService();
