"use client";

import { AuthLayout } from "@/components/layouts/AuthLayout";
import NextLink from "next/link";
import { Box, Button, Grid, Link, TextField, Typography } from "@mui/material";

export default function LoginPage() {
  return (
    <AuthLayout title="Ingresar">
      <Box sx={{ width: 350, padding: "10px 20px" }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h1" component="h1">
              Iniciar Sesión
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <TextField
              color="secondary"
              label="Correo"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Contraseña"
              type="password"
              variant="outlined"
              fullWidth
              color="secondary"
            />
          </Grid>

          <Grid item xs={12}>
            <Button
              color="secondary"
              className="circular-btn"
              size="large"
              fullWidth
            >
              Ingresar
            </Button>
          </Grid>

          <Grid item xs={12} display="flex" justifyContent="end">
            <NextLink href="/register" passHref legacyBehavior>
              <Link underline="always">¿No tienes cuenta?</Link>
            </NextLink>
          </Grid>
        </Grid>
      </Box>
    </AuthLayout>
  );
}
