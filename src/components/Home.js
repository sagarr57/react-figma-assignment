import { Container, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Container sx={{ textAlign: "center", mt: 5 }}>
      <Typography variant="h5" gutterBottom>
        Welcome to Vendor Dashboard
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => navigate("/select-products")}
      >
        Go to Products
      </Button>
    </Container>
  );
};

export default Home;
