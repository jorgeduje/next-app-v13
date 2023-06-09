import React, { useMemo, useState } from "react";
import NextLink from "next/link";
import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  Grid,
  Link,
  Typography,
} from "@mui/material";

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const productImage = useMemo(() => {
    return isHovered
      ? `/products/${product.images[1]}`
      : `/products/${product.images[0]}`;
  }, [isHovered, product.images]);

  return (
    <Grid
      item
      xs={6}
      sm={4}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card>
        <NextLink
          href={`/product/${product.slug}`}
          passHref
          legacyBehavior
          prefetch={false}
        >
          <Link>
            <CardActionArea>
              <CardMedia
                component={"img"}
                image={productImage}
                alt={product.title}
                className="fadeIn"
                // onLoad={()=>}
              />
            </CardActionArea>
          </Link>
        </NextLink>
      </Card>
      <Box sx={{ mt: 1 }} className="fadeIn">
        <Typography fontWeight={700}>{product.title}</Typography>
        <Typography fontWeight={500}>${product.price}</Typography>
      </Box>
    </Grid>
  );
};

export default ProductCard;
