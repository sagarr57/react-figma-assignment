import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Container,
  Box,
  Button,
  Grid,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import ProgressBar from "./ProgressBar";

const Schedule = () => {
  const navigate = useNavigate();
  const [scheduleName, setScheduleName] = useState("");
  const [preOrderDate, setPreOrderDate] = useState("");
  const [duration, setDuration] = useState("");

  const handlePreview = () => {
    console.log("Previewing the schedule", {
      scheduleName,
      preOrderDate,
      duration,
    });
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
            SCHEDULE
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

      <Box sx={{ padding: "20px 0" }}>
        <ProgressBar selected={0} total={100} />

        <Typography variant="h6" sx={{ mt: 2 }}>
          SCHEDULE FORM
        </Typography>

        <Grid container spacing={2} sx={{ mt: 2 }}>
          <Grid item xs={12}>
            <label htmlFor="scheduleName">DROP NAME</label>
            <input
              type="text"
              id="scheduleName"
              value={scheduleName}
              onChange={(e) => setScheduleName(e.target.value)}
              placeholder="Enter Schedule Name"
              style={{ width: "100%", padding: "10px", marginTop: "8px" }}
            />
          </Grid>

          <Grid item xs={12}>
            <label htmlFor="preOrderDate">DROP PRE-ORDER DATE</label>
            <input
              type="date"
              id="preOrderDate"
              value={preOrderDate}
              onChange={(e) => setPreOrderDate(e.target.value)}
              style={{ width: "100%", padding: "10px", marginTop: "8px" }}
            />
          </Grid>

          <Grid item xs={12}>
            <label htmlFor="duration">DROP DURATION</label>
            <select
              id="duration"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                marginTop: "8px",
                borderRadius: "4px",
              }}
            >
              <option value="1 week">1 week</option>
              <option value="2 weeks">2 weeks</option>
              <option value="3 weeks">3 weeks</option>
              <option value="4 weeks">4 weeks</option>
              <option value="5 weeks">5 weeks</option>
            </select>
          </Grid>
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
            marginBottom: "10px",
          }}
          onClick={() => navigate("/schedule-confirmation")}
        >
          Confirm
        </Button>

        <Button
          fullWidth
          sx={{
            backgroundColor: "#D3D3D3",
            color: "#000",
          }}
          onClick={handlePreview}
        >
          Preview
        </Button>
      </Box>
    </Container>
  );
};

export default Schedule;
