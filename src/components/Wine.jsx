import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import styles from "./Wine.module.css";
import { IconButton } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

function Wine({ wineId }) {
  const defaultProps = {
    bgcolor: "background.paper",
    border: 1,
    m: 1,
    borderColor: "text.primary",
    style: { width: "5rem", height: "5rem" },
  };
  const classes = useStyles();
  return (
    <>
      <div className={styles.detailsContainer}>
        <img
          className={`${styles.col} ${styles.movieImage}`}
          src="https://cepadevinos.com/wp-content/uploads/2017/07/Luigi_Bosca_Malbec_vludvq.jpg"
          alt="foto vino"
        ></img>

        <div className={`${styles.col} ${styles.movieDetails}`}>
          <h1 className={styles.firstItem}> Nombre vino</h1>
          <p>
            <strong>Bodega:</strong>
          </p>
          <p>
            <strong>Color:</strong>
          </p>
          <p>
            <strong>Description:</strong>
          </p>

          <p>
            <strong>Variedad:</strong>
          </p>

          <p>
            <strong>Año:</strong>
          </p>
          <p>
            <strong>Pais:</strong>
          </p>
          <p>
            <strong>Ml: </strong>
          </p>

          <p> Precio: </p>

          <Button variant="contained" color="secondary">
            Comprar
          </Button>
        </div>
      </div>
    </>
  );
}

export default Wine;
