import React, { useState, useEffect, useCallback } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Container,
  Grid,
  Button,
  Box,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useProductContext } from "../context/ProductContext";
import ProductCard from "./ProductCard";
import ProgressBar from "./ProgressBar";

const SelectProducts = () => {
  const navigate = useNavigate();
  const { selectedProducts, setSelectedProducts } = useProductContext();
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    fetchProducts();
    // eslint-disable-next-line
  }, [page]);

  const fetchProducts = useCallback(async () => {
    if (loading || !hasMore) return;
    setLoading(true);
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products?limit=8&page=${page}`
      );
      if (response.data.length < 8) {
        setHasMore(false);
      }
      setProducts((prevProducts) => [...prevProducts, ...response.data]);
    } catch (error) {
      console.error("Error fetching products", error);
    } finally {
      setLoading(false);
    }
  }, [page, loading, hasMore]);

  const handleSelect = (productId) => {
    setSelectedProducts((prevSelected) =>
      prevSelected.includes(productId)
        ? prevSelected.filter((id) => id !== productId)
        : [...prevSelected, productId]
    );
  };

  const handleScroll = (event) => {
    const bottom =
      event.target.scrollHeight ===
      event.target.scrollTop + event.target.clientHeight;
    if (bottom && !loading && hasMore) {
      setPage((prev) => prev + 1);
    }
  };

  return (
    <Container
      sx={{
        position: "relative",
        minHeight: "100vh",
        paddingBottom: "80px",
        overflowX: "hidden",
        backgroundColor: "#f5f5f5",
      }}
      onScroll={handleScroll}
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
            onClick={() => navigate("/")}
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
            SELECT PRODUCTS
          </Typography>
          <IconButton
            sx={{
              backgroundColor: "#fff",
              borderRadius: "4px",
              padding: "8px",
              marginLeft: "8px",
            }}
            onClick={() => navigate("/")}
          >
            <CloseIcon sx={{ color: "#000" }} />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Box sx={{ padding: "20px 0" }}>
        <ProgressBar
          selected={selectedProducts.length}
          total={products.length}
        />

        <Typography variant="h6" sx={{ mt: 2 }}>
          {products.length} PRODUCTS • {selectedProducts.length} SELECTED
        </Typography>

        <Grid container spacing={2} sx={{ mt: 2 }}>
          {products.map((product) => (
            <Grid
              item
              xs={6}
              sm={6}
              md={3}
              key={product.id}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <ProductCard
                product={product}
                selected={selectedProducts.includes(product.id)}
                onSelect={() => handleSelect(product.id)}
                sx={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  borderRadius: "10px",
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                  padding: "10px",
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box
        sx={{
          position: "fixed",
          bottom: "0",
          left: "0",
          width: "100%",
          zIndex: 10,
          padding: "10px 0",
          backgroundColor: "#fff",
        }}
      >
        <Button
          fullWidth
          sx={{
            background: "linear-gradient(90deg, #194266 8.42%, #17FDCF 86.12%)",
            color: "#fff",
          }}
          onClick={() => navigate("/edit-products")}
        >
          Next
        </Button>
      </Box>
    </Container>
  );
};

export default SelectProducts;
