"use client";
import React from "react";
import { initialData } from "../../../../database/products";
import { Box, Button, Chip, Grid, Typography } from "@mui/material";
import { useParams } from "next/navigation";
import ProductSlideshow from "@/components/products/ProductSlideshow";
import ShopLayout from "@/components/layouts/ShopLayout";
import ItemCounter from "@/components/ui/ItemCounter";
import SizeSelector from "@/components/products/SizeSelector";

const product = initialData.products[0];

export default function ProductDetail() {
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
            <Typography variant="h1">{product.title}</Typography>
            <Typography variant="subtitle1">${product.price}</Typography>
            <Box sx={{ my: 2 }}>
              <Typography variant="subtitle2">Cantidad</Typography>
              <ItemCounter />
              <SizeSelector
                sizes={product.sizes}
                // selectedSize={product.sizes[3]}
              />
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
}
