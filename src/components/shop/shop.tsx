import React, { useCallback, useEffect, useState } from "react";
import { TypographyHeadStyled } from "../main/mainPage.styled";
import {
  ContainerShopStyled,
  ItemNameStyled,
  ItemPriceStyled,
  PaginationStyled,
  ShopBoxStyled,
  ShopImgStyled,
  ShopItemStyled,
  ShopNameStyled,
} from "./shop.styled";
import { collection, DocumentData, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase.config";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks/reduxHooks";
import { chooseItem } from "../redux/store/reducers/chosenItem";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Grid } from "react-loader-spinner";
import { setShopItems } from "../redux/store/reducers/shopSlice";

export const Shop = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [page, setPage] = useState(1);
  const [category, setCategory] = useState<any>("");

  const items = useAppSelector((state) => state.shop.value);

  const getData = useCallback(async (todosCollectionRef: any) => {
    const data1 = await getDocs(todosCollectionRef);

    dispatch(
      setShopItems(
        data1.docs.map((doc: DocumentData) => ({
          ...doc.data(),
          id: doc.id,
        }))
      )
    );
  }, []);

  const handleOnClickItem = (el: any) => {
    dispatch(chooseItem(el));
    navigate("/item");
  };

  const sortedData = category
    ? items.filter((item: any) => item.type == category)
    : items;

  useEffect(() => {
    const todosCollectionRef = collection(db, "goods");
    getData(todosCollectionRef);
  }, []);

  return (
    <ContainerShopStyled>
      <TypographyHeadStyled>Products</TypographyHeadStyled>

      {items.length === 0 ? (
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid
            height="80"
            width="80"
            color="grey"
            ariaLabel="grid-loading"
            wrapperStyle={{ margin: "8% auto" }}
          />
        </Box>
      ) : (
        <>
          <Box>
            <Box>
              <FormControl sx={{ width: 250, marginTop: 3 }}>
                <InputLabel id="demo-simple-select-label">Products</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  name="Categories"
                  label="All Products"
                  onChange={(e: any) => setCategory(e.target.value)}
                >
                  <MenuItem value="">All Products</MenuItem>
                  <MenuItem value="lamp">Lamps</MenuItem>
                  <MenuItem value="planter">Planters</MenuItem>
                  <MenuItem value="bowl">Bowls</MenuItem>
                  <MenuItem value="mug">Mugs</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
          <ShopBoxStyled>
            {sortedData
              .slice(
                page - 1 === 0 ? page - 1 : (page - 1) * 8,
                page - 1 === 0 ? page + 7 : (page - 1) * 8 + 8
              )
              .map((el: any) => (
                <ShopItemStyled key={el.id + el.name}>
                  <ShopImgStyled
                    src={"data:image/jpeg;base64," + el.image}
                    alt="/"
                    onClick={() => handleOnClickItem(el)}
                  />
                  <ShopNameStyled onClick={() => navigate("/")}>
                    Parceline
                  </ShopNameStyled>
                  <ItemNameStyled onClick={() => handleOnClickItem(el)}>
                    {el.name}
                  </ItemNameStyled>
                  <ItemPriceStyled>${el.price}.00</ItemPriceStyled>
                </ShopItemStyled>
              ))}
          </ShopBoxStyled>

          <PaginationStyled
            count={Math.ceil(sortedData.length / 8)}
            variant="outlined"
            shape="rounded"
            onChange={(_, value: number) => {
              setPage(value);
            }}
          />
        </>
      )}
    </ContainerShopStyled>
  );
};
