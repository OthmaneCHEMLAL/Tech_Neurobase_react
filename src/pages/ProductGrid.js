import React, { useState, useEffect } from 'react';
import { fetchShowProduct } from '../services/api'; // Fetch API function
import api from '../services/api';  // Import the api instance for delete

function ProductGrid() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Function to fetch products
  const fetchProducts = async () => {
    try {
      const productList = await fetchShowProduct();
      setProducts(productList);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
      setLoading(false);
    }
  };

  // Function to handle product deletion
  const handleDelete = async (id) => {
    try {
      // Call delete API
      await api.delete(`/product/${id}`);
      // Update the product list after deletion
      setProducts(products.filter(product => product.id !== id));
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <main>
      <div className="head-title">
        <div className="left">
          <h1>Product List</h1>
          <ul className="breadcrumb">
            <li><a href="#">Dashboard</a></li>
            <li><i className='bx bx-chevron-right'></i></li>
            <li><a className="active" href="#">Products</a></li>
          </ul>
        </div>
        <a href="/create" className="btn-download">
          <i className='bx bx-plus bx-fade-down-hover'></i>
          <span className="text">Add New Product</span>
        </a>
      </div>

      <div className="table-data">
        <div className="order">
          <div className="head">
            <h3>All Products</h3>
            <i className='bx bx-search'></i>
            <i className='bx bx-filter'></i>
          </div>
          {loading ? (
            <p>Loading products...</p>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>Product Name</th>
                  <th>Category</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id}>
                    <td>{product.product_name}</td>
                    <td>{product.category ? product.category.name : 'N/A'}</td>
                    <td>
                      <span className={`status ${product.status ? 'completed' : 'pending'}`}>
                        {product.status ? 'Active' : 'Inactive'}
                      </span>
                    </td>
                    <td>
                      <a href={`/edit/${product.id}`} className="btn btn-primary">
                        <i className='bx bx-edit'></i>
                      </a>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDelete(product.id)}
                      >
                        <i className='bx bx-trash'></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </main>
  );
}

export default ProductGrid;
