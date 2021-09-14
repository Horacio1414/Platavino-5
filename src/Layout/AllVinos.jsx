import React from "react";
import { Grid } from "@material-ui/core";
import { VinoProduct } from "./VinoProduct";


export const AllVinos = ({ products }) => {
  return (
    <div>
      <Grid container spacing={2}>
        {products.map((wine, i) => (
          <Grid key={i} item xs={12} md={3} lg={3}>
            <VinoProduct wine={wine} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
