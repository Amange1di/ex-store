

import axios from "../axios";

class StoreService {
  getAllCategories() {
    return axios.get("/categories");
  }

  getCategoryById(id) {
    return axios.get(`/categories/${id}/products`);
  }

  getAllProducts() {
    return axios.get(`/products`);
  }
  getProductById(id) {
    return axios.get(`/products/${id}`);
  }
  getAllUsers() {
    return axios.get("/users"); 
  }
  // Другие методы для работы с данными, если необходимо
}

export default new StoreService();
