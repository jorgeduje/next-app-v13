"use client";

import ShopLayout from "@/components/layouts/ShopLayout";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";

export default function CheckoutPage() {
  return (
    <ShopLayout title="checkout" pageDescription={"formulario de compra"}>
      <Typography variant="h5">Formulario de compra</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField label="nombre" variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="apellido" variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="direccion" variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="direccion 2 (opcional)"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="codigo postal" variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="ciudad" variant="outlined" fullWidth />
        </Grid>
      </Grid>
      <Box sx={{ mt: 5 }} display={"flex"} justifyContent={"center"}>
        <Button
          color="secondary"
          className="circular-btn"
          size="large"
          sx={{ width: { xs: "100%", sm: "40%" } }}
        >
          Comprar
        </Button>
      </Box>
    </ShopLayout>
  );
}
