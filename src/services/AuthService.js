import ApiService from "./ApiService";

class AuthService extends ApiService {
  async login(data) {
    const response = await this.client.post("/auth/login", data);
    this.setLoginTokenAndredirectToAuthPage(response.data.access_token);

    return response;
  }

  async logout() {
    await this.client.post("/auth/logout", {}, { headers: this.getHeaders() });
    window.localStorage.removeItem("loginToken");
    window.location.replace("/login");
  }

  async register(data) {
    const response = await this.client.post("/auth/register", data);
    this.setLoginTokenAndredirectToAuthPage(response.data.access_token);

    return response;
  }

  getHeaders() {
    return {
      Authorization: `Bearer ${window.localStorage.getItem("loginToken")}`,
    };
  }

  setLoginTokenAndredirectToAuthPage(token) {
    window.localStorage.setItem("loginToken", token);
    window.location.replace("/cars");
  }
}

export const authService = new AuthService();
