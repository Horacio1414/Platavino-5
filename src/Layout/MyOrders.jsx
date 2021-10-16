import { Heading } from "@chakra-ui/layout";
import axios from "axios";
import React, { useEffect } from "react";

import getToken from "../utils/getToken";
import Orders from "./Orders";

const MyOrders = () => {
  const [ordenes, setOrdenes] = React.useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/ordens", getToken())
      .then(({ data }) => {
        console.log(data);
        setOrdenes(data);
      })
      .catch((e) => console.log("ESTO ", e.response));
  }, []);

  return (
    <div>
      <Heading mb={4} as="h3" size="lg">
        MyOrders
      </Heading>
      <Orders orders={ordenes} />
    </div>
  );
};

export default MyOrders;
