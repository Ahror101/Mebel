import React, { useEffect } from "react";
import ShopProducts from "./components/ShopProducts/ShopProducts";
import { getProducts } from "../../store/features/filterSlice";
import { useDispatch } from "react-redux";
import { api } from "../../api";

const get = async () => {
  const res = await api.get("/records", {
    params: {
      offset: 0,
      limit: 25,
      where: "",
      viewId: "vwmpnpy875whpfha",
    },
  });
  return res.data.list;
};

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    get().then((data) => {
      dispatch(getProducts(data));
    });
  }, [dispatch]);

  return (
    <div className="shop page-container">
      <ShopProducts />
    </div>
  );
};

export default Shop;
