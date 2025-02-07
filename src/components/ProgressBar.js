import React from "react";
import { Box } from "@mui/material";

const ProgressBar = ({ selected, total }) => {
  // Determine how many of the 4 parts should be filled
  const progress = Math.min((selected / total) * 4, 4); // This will calculate how many parts should be filled

  // Function to render progress sections with a gap
  const renderProgress = () => {
    const sections = [];
    for (let i = 0; i < 4; i++) {
      // If the section is filled
      const isFilled = i < progress;
      sections.push(
        <Box
          key={i}
          sx={{
            width: "25%", // 4 equal parts
            height: "10px",
            background: isFilled
              ? "linear-gradient(90deg, #194266 8.42%, #17FDCF 86.12%)" // Apply the same gradient as the Next button
              : "#e0e0e0", // Light gray for empty parts
            borderRadius: "5px", // Rounded corners
            marginRight: i !== 3 ? "5px" : "0", // Space between parts except the last one
          }}
        />
      );
    }
    return sections;
  };

  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      {renderProgress()}
    </Box>
  );
};

export default ProgressBar;
