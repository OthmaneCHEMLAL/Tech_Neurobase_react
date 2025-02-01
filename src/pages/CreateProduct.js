import React, { useState } from 'react';

function CreateProduct() {
  const [productName, setProductName] = useState('');
  const [category, setCategory] = useState('');
  const [status, setStatus] = useState(false);
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form data to the API to create the product
  };

  return (
    <div className="form-container">
      <h1>Create New Product</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Product Name</label>
          <input 
            type="text" 
            value={productName} 
            onChange={(e) => setProductName(e.target.value)} 
          />
        </div>
        <div className="form-group">
          <label>Category</label>
          <input 
            type="text" 
            value={category} 
            onChange={(e) => setCategory(e.target.value)} 
          />
        </div>
        <div className="form-group">
          <label>Status</label>
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value={true}>Active</option>
            <option value={false}>Inactive</option>
          </select>
        </div>
        <div className="form-group">
          <label>Price</label>
          <input 
            type="number" 
            value={price} 
            onChange={(e) => setPrice(e.target.value)} 
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
          />
        </div>
        <button type="submit">Create Product</button>
      </form>
    </div>
  );
}

export default CreateProduct;
