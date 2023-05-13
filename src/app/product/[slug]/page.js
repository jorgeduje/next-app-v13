"use client";
import React from "react";
import { initialData } from "../../../../database/products";
import { Box, Button, Chip, Grid, Typography } from "@mui/material";
import { useParams } from "next/navigation";
import ProductSlideshow from "@/components/products/ProductSlideshow";
import ShopLayout from "@/components/layouts/ShopLayout";

const product = initialData.products[0];

const ProductDetail = () => {
  const { slug } = useParams();
  console.log(slug);
  return (
    <ShopLayout
      title="ecommerce"
      pageDescription={"los mejores productos del ecommerce"}
    >
      <Grid container spacing={3}>
        <Grid item xs={12} sm={7}>
          <ProductSlideshow images={product.images} />
        </Grid>
        <Grid item xs={12} sm={5}>
          <Box display={"flex"} flexDirection={"column"}>
            {/* Title */}
            <Typography variant="h1">{product.title}</Typography>
            {/* Price */}
            <Typography variant="subtitle1">${product.title}</Typography>
            <Box sx={{ my: 2 }}>
              <Typography variant="subtitle2">Cantidad</Typography>
            </Box>

            <Button color="secondary" className="circular-btn">
              Agregar al carrito
            </Button>

            {/* <Chip label="No hay disponible" color="error" variant="outlined" /> */}

            <Box sx={{ mt: 3 }}>
              <Typography variant="subtitle2">Descripcion</Typography>
              <Typography variant="body2">{product.description}</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ShopLayout>
  );
};

export default ProductDetail;
