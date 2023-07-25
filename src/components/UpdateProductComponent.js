import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProductService from "../ProductService";

const UpdateProductComponent = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState({
    name: "",
    quantity: "",
    price: "",
  });

  useEffect(() => {
    ProductService.getProductById(id).then((res) => {
      setProduct(res.data);
    });
  }, [id]);

  const handleChange = (p) => {
    const { name, value } = p.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value
    }));
  };

  const handleSubmit = (p) => {
    p.preventDefault();
    ProductService.updateProduct(id, product).then(() => {
      navigate("/products");
    });
  };

  return (
    <div>
      <h2 className="text-center">Update Product</h2>
      <form>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={product.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Quantity:</label>
          <input
            type="text"
            className="form-control"
            name="quantity"
            value={product.quantity}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Price:</label>
          <input
            type="text"
            className="form-control"
            name="price"
            value={product.price}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateProductComponent;
