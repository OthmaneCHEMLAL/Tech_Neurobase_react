import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProduct, updateProduct } from '../services/api';

function EditProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const getProduct = async () => {
      const productData = await fetchProduct(id);
      setProduct(productData);
    };
    getProduct();
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProduct(id, product);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div className="form-container">
      <h1>Edit Product: {product.product_name}</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Product Name</label>
          <input 
            type="text" 
            name="product_name" 
            value={product.product_name} 
            onChange={handleChange} 
          />
        </div>
        <div className="form-group">
          <label>Category</label>
          <input 
            type="text" 
            name="category_name" 
            value={product.category_name} 
            onChange={handleChange} 
          />
        </div>
        <div className="form-group">
          <label>Status</label>
          <select 
            name="status" 
            value={product.status} 
            onChange={handleChange}
          >
            <option value={true}>Active</option>
            <option value={false}>Inactive</option>
          </select>
        </div>
        <div className="form-group">
          <label>Price</label>
          <input 
            type="number" 
            name="price" 
            value={product.price} 
            onChange={handleChange} 
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea 
            name="product_description" 
            value={product.product_description} 
            onChange={handleChange} 
          />
        </div>
        <button type="submit">Update Product</button>
      </form>
    </div>
  );
}

export default EditProduct;
