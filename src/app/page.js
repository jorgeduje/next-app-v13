"use client";

import ShopLayout from "@/components/layouts/ShopLayout";
import ProductList from "@/components/products/ProductList";
import { Typography } from "@mui/material";
import { initialData } from "../../database/products";

export default function Home() {
  return (
    <ShopLayout
      title="ecommerce"
      pageDescription={"los mejores productos del ecommerce"}
    >
      <Typography color={"secondary"}>Los productos</Typography>
      <ProductList products={initialData.products} />
    </ShopLayout>
  );
}
