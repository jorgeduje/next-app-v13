"use client";

import ShopLayout from "@/components/layouts/ShopLayout";
import {
  Card,
  CardActionArea,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { initialData } from "../../database/products";

export default function Home() {
  return (
    <ShopLayout
      title="ecommerce"
      pageDescription={"los mejores productos del ecommerce"}
    >
      <Typography color={"secondary"}>Los productos</Typography>
      <Grid container spacing={4}>
        {initialData.products.map((product) => (
          <Grid item xs={6} sm={4} key={product.slug}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component={"img"}
                  image={`/products/${product.images[0]}`}
                  alt={product.title}
                />
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </ShopLayout>
  );
}
