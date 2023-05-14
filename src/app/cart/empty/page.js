"use client";

import ShopLayout from "@/components/layouts/ShopLayout";
import { Link, Typography } from "@mui/material";
import NextLink from "next/link";

export default function CartEmptyPage() {
  return (
    <ShopLayout
      title="Carrito vacío"
      pageDescription={"No hay articulos en el carrito"}
    >
      <Typography variant="h1">Carrito vacio</Typography>
      <NextLink href={"/"} passHref legacyBehavior>
        <Link color={"secondary"}>Regresar</Link>
      </NextLink>
    </ShopLayout>
  );
}
