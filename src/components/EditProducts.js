import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Container,
  Box,
  Button,
  Chip,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import { useProductContext } from "../context/ProductContext";
import axios from "axios";
import ProgressBar from "./ProgressBar";

const EditProducts = () => {
  const navigate = useNavigate();
  const { selectedProducts } = useProductContext();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchSelectedProducts = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products`);
        const filteredProducts = response.data.filter((product) =>
          selectedProducts.includes(product.id)
        );
        setProducts(filteredProducts);
      } catch (error) {
        console.error("Error fetching products", error);
      }
    };

    fetchSelectedProducts();
  }, [selectedProducts]);

  return (
    <Container
      sx={{
        position: "relative",
        minHeight: "100vh",
        paddingBottom: "80px",
        overflowX: "hidden",
      }}
    >
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
            onClick={() => navigate("/select-products")}
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
            onClick={() => navigate("/select-products")}
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
          YOUR PRODUCT SELECTION
        </Typography>

        <Box sx={{ mt: 3 }}>
          {products.map((product) => (
            <Card
              key={product.id}
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginBottom: "15px",
                padding: "10px",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                borderRadius: "8px",
              }}
            >
              <CardMedia
                component="img"
                sx={{
                  width: 120,
                  height: 120,
                  objectFit: "contain",
                  borderRadius: "8px",
                }}
                image={product.image}
                alt={product.title}
              />
              <CardContent sx={{ flex: 1, paddingLeft: "15px" }}>
                <Typography variant="h6">{product.title}</Typography>
                <Typography variant="body1" color="text.secondary">
                  ${product.price} <span style={{ margin: "0 8px" }}>•</span>{" "}
                  {product.units} UNITS
                </Typography>

                <Box
                  sx={{
                    marginTop: "10px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                    }}
                  >
                    {product.price ? (
                      <Chip
                        label="READY"
                        color="success"
                        sx={{
                          borderRadius: 0,
                          padding: "5px 10px",
                        }}
                      />
                    ) : (
                      <Chip
                        label={`MISSING PRICE (${product.units} UNITS)`}
                        color="warning"
                        sx={{ marginBottom: "5px" }}
                      />
                    )}

                    <Typography
                      variant="body2"
                      sx={{
                        color: "#17D1B6",
                        cursor: "pointer",
                        marginTop: "8px",
                      }}
                      onClick={() => navigate(`/edit-product/${product.id}`)}
                    >
                      Edit
                    </Typography>
                  </Box>

                  <IconButton
                    sx={{
                      color: "#194266",
                      fontSize: "24px",
                      fontWeight: "bold",
                    }}
                    onClick={() => navigate(`/edit-product/${product.id}`)}
                  >
                    &gt;
                  </IconButton>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>

        <Box
          sx={{
            position: "fixed",
            bottom: "0",
            left: "0",
            width: "100%",
            padding: "10px 0",
          }}
        >
          <Button
            fullWidth
            sx={{
              background:
                "linear-gradient(90deg, #194266 8.42%, #17FDCF 86.12%)",
              color: "#fff",
            }}
            onClick={() => navigate("/schedule")}
          >
            Next
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default EditProducts;
