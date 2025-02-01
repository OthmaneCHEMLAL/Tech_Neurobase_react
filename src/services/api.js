import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:8000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

// Export the api instance as default
export default api;

// Function to fetch the list of products
export const fetchShowProduct = async () => {
  try {
    const response = await api.get('/products'); // Fetch all products
    return response.data; // Return the response data directly
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

// Function to create a new product
export const createProduct = async (productData) => {
  try {
    const response = await api.post('/product', productData); // Create new product
    return response.data; // Return the response data directly
  } catch (error) {
    console.error("Error creating product:", error);
    throw error;
  }
};

// Function to update an existing product
export const updateProduct = async (id, productData) => {
  try {
    const response = await api.put(`/product/${id}`, productData); // Update product by ID
    return response.data; // Return the response data directly
  } catch (error) {
    console.error("Error updating product:", error);
    throw error;
  }
};

// Function to delete a product
export const deleteProduct = async (id) => {
  try {
    const response = await api.delete(`/product/${id}`); // Delete product by ID
    return response.data; // Return the response data directly
  } catch (error) {
    console.error("Error deleting product:", error);
    throw error;
  }
};
