import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Card, CardContent, Grid, TextField } from "@mui/material";

export const Product = () => {
  const [data, setData] = useState([]); //main data
  const [dataCopy, setDataCopy] = useState([]); //ye vala filter ka data
  const [cate, setCate] = useState([]); // ye category ka data
  const [sendcate, setSendCate] = useState([]); // Button vala data

  const getData = async () => {
    const result = await axios.get("http://fakestoreapi.com/products");
    const result1 = await axios.get(
      "http://fakestoreapi.com/products/categories"
    );
    setData(result.data);
    setCate(result1.data);
    setDataCopy(result.data);
  };
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    const filt = dataCopy.filter((item) => item.category == sendcate);
    setData(filt);
  }, [sendcate]);

  return (
    <Grid container spacing={2} sx={{ marginTop: 2 }}>
      {cate.map((item) => {
        return (
          <Grid item xs={3}>
            <Button
              onClick={() => setSendCate(item)}
              variant="contained"
              fullWidth
            >
              {item}
            </Button>
          </Grid>
        );
      })}

      {data.map((item) => (
        <Grid item xs={4}>
          <Card sx={{ bgcolor: "#ff99ff" }}>
            <CardContent>
              <img src={item.image} height={"250px"} width={"200px"} alt="" />
              <h2>{item.title.slice(0, 30)}</h2>
              <h3>{item.description.slice(0, 50)}</h3>

              <h3>
                <Grid item xs={8}>
                  <Button variant="contained" fullWidth>
                    Rs- {item.price}/-
                  </Button>
                </Grid>
              </h3>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
