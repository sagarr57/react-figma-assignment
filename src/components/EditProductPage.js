import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  TextField,
  Button,
  CardMedia,
  MenuItem,
} from "@mui/material";
import axios from "axios";

const EditProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [updatedProduct, setUpdatedProduct] = useState({
    description: "",
    price: "",
  });

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/${id}`
        );
        setProduct(response.data);
        setUpdatedProduct({
          description: response.data.description || "",
          price: response.data.price || "",
        });
      } catch (error) {
        console.error("Error fetching product", error);
      }
    };

    fetchProduct();
  }, [id]);

  const handleChange = (e) => {
    setUpdatedProduct({ ...updatedProduct, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    console.log("Updated Product:", updatedProduct);
    navigate("/edit-products");
  };

  if (!product) return <Typography>Loading...</Typography>;

  return (
    <Box sx={{ padding: "20px", textAlign: "center" }}>
      <Typography variant="h5" sx={{ marginBottom: "10px" }}>
        Edit Product: {product.title}
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <CardMedia
          component="img"
          sx={{ width: "200px", height: "200px", objectFit: "contain" }}
          image={product.image}
          alt={product.title}
        />
      </Box>

      <TextField
        fullWidth
        label="Price"
        name="price"
        value={updatedProduct.price}
        onChange={handleChange}
        sx={{ marginBottom: "10px" }}
      />

      <TextField
        fullWidth
        label="Available Units"
        name="units"
        type="number"
        value="100"
        InputProps={{ readOnly: true }}
        sx={{ marginBottom: "10px" }}
      />

      <TextField
        fullWidth
        label="Description"
        name="description"
        multiline
        rows={4}
        value={updatedProduct.description}
        onChange={handleChange}
        sx={{ marginBottom: "10px" }}
      />

      <TextField
        select
        fullWidth
        label="Shipping Available"
        name="shippingAvailable"
        value="Yes"
        sx={{ marginBottom: "10px" }}
      >
        <MenuItem value="Yes">Yes</MenuItem>
        <MenuItem value="No">No</MenuItem>
      </TextField>

      <Button
        fullWidth
        sx={{
          background: "linear-gradient(90deg, #194266 8.42%, #17FDCF 86.12%)",
          color: "#fff",
        }}
        onClick={handleSave}
      >
        Save
      </Button>
    </Box>
  );
};

export default EditProductPage;
