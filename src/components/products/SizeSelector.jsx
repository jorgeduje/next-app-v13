import { Box, Button } from "@mui/material";

export default function SizeSelector({ selectedSize, sizes }) {
  return (
    <Box>
      {sizes.map((size) => (
        <Button
          size="small"
          key={size}
          color={selectedSize === size ? "primary" : "info"}
        >
          {size}
        </Button>
      ))}
    </Box>
  );
}
