import {
  Card,
  CardContent,
  Typography,
  Checkbox,
  CardMedia,
} from "@mui/material";

const ProductCard = ({ product, selected, onSelect }) => {
  return (
    <Card
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        width: "100%",
        borderRadius: 2,
        boxShadow: 2,
        backgroundColor: "white",
      }}
    >
      <Checkbox
        checked={selected}
        onChange={() => onSelect(product.id)}
        sx={{
          position: "absolute",
          top: 8,
          right: 8,
          color: selected ? "#17D1B6" : "initial",
          zIndex: 1,
        }}
      />

      <CardMedia
        component="img"
        height="160"
        image={product.image}
        alt={product.title}
        sx={{
          objectFit: "contain",
          width: "100%",
          height: "auto",
          maxHeight: 180,
          marginBottom: 1,
        }}
      />

      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: 1,
          textAlign: "center",
          paddingTop: 1,
        }}
      >
        <Typography
          variant="h6"
          sx={{ fontSize: "14px", marginBottom: 1, lineHeight: 1.2 }}
          noWrap
        >
          {product.title}
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          sx={{ fontSize: "12px" }}
        >
          ${product.price}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
