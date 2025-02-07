import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Button,
  CardMedia,
  TextField,
  MenuItem,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
import ProgressBar from "./ProgressBar";

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
      <AppBar
        position="static"
        sx={{ backgroundColor: "transparent", boxShadow: "none" }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            sx={{
              backgroundColor: "#fff",
              borderRadius: "4px",
              padding: "8px",
              marginRight: "8px",
            }}
            onClick={() => navigate("/edit-products")}
          >
            <ArrowBackIcon sx={{ color: "#000" }} />
          </IconButton>
          <Typography
            variant="h6"
            sx={{
              textAlign: "center",
              flexGrow: 1,
              color: "#111111",
              fontFamily: "'Roboto Serif', sans-serif",
              fontWeight: 100,
            }}
          >
            EDIT PRODUCTS
          </Typography>
          <IconButton
            sx={{
              backgroundColor: "#fff",
              borderRadius: "4px",
              padding: "8px",
              marginLeft: "8px",
            }}
            onClick={() => navigate("/edit-products")}
          >
            <CloseIcon sx={{ color: "#000" }} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box sx={{ marginBottom: "20px" }}>
        <ProgressBar value={50} /> {/* Set value or state here */}
      </Box>
      <Box sx={{ padding: "20px 0" }}>
        <Typography variant="h6" sx={{ marginBottom: "20px" }}>
          PRODUCT IMAGES
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
          label="TITLE"
          name="price"
          value={product.title}
          onChange={handleChange}
          sx={{ marginBottom: "10px" }}
        />

        <TextField
          fullWidth
          label="PRICE"
          name="price"
          value={updatedProduct.price}
          onChange={handleChange}
          sx={{ marginBottom: "10px" }}
        />

        <TextField
          fullWidth
          label="UNITS"
          name="units"
          type="number"
          value="100"
          InputProps={{ readOnly: true }}
          sx={{ marginBottom: "10px" }}
        />

        <TextField
          fullWidth
          label="DESCRIPTION"
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
          label="SHIPPING"
          name="shippingAvailable"
          value="Yes"
          sx={{ marginBottom: "10px" }}
        >
          <MenuItem value="Yes">Yes</MenuItem>
          <MenuItem value="No">No</MenuItem>
        </TextField>

        <TextField
          fullWidth
          label="CONTACT"
          name="units"
          type="number"
          value=" "
          InputProps={{ readOnly: true }}
          sx={{ marginBottom: "10px" }}
        />

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
    </Box>
  );
};

export default EditProductPage;
