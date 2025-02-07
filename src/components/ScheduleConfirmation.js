import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Container,
  Button,
  Box,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import Image from "../assets/image.png";

const ScheduleConfirmation = () => {
  const navigate = useNavigate();

  const handleDone = () => {
    navigate("/schedule");
  };

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
        overflow: "auto",
        paddingBottom: "80px",
      }}
    >
      <AppBar
        position="static"
        sx={{ backgroundColor: "transparent", boxShadow: "none" }}
      >
        <Toolbar>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <IconButton
              edge="start"
              sx={{
                backgroundColor: "#fff",
                borderRadius: "4px",
                padding: "8px",
              }}
              onClick={() => navigate("/schedule")}
            >
              <ArrowBackIcon sx={{ color: "#000" }} />
            </IconButton>
            <Button
              sx={{
                backgroundColor: "#fff",
                borderRadius: "4px",
                padding: "8px",
              }}
              onClick={handleDone}
            >
              Done
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          textAlign: "center",
          flexGrow: 1,
          padding: "20px",
          paddingBottom: "60px",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            textAlign: "center",
            color: "#187482",
            fontFamily: "'Roboto Serif', sans-serif",
            fontWeight: 200,
            marginBottom: "20px",
          }}
        >
          YOUR DROP HAS BEEN SCHEDULED!
        </Typography>

        <img
          src={Image}
          alt="Drop Scheduled"
          style={{ width: "100%", maxWidth: "100px", borderRadius: "4px" }}
        />

        <Typography sx={{ color: "#777", fontSize: "14px" }}>
          Don't forget to announce the drop to your community!
        </Typography>
      </Box>
    </Container>
  );
};

export default ScheduleConfirmation;
