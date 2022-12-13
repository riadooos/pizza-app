import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPizzas } from "../redux/actions/pizzasAction";
import Layout from "../components/Layout";
import Pizza from "../components/Pizza";
import Loading from "../components/Loading";
import Error from "../components/Error";
import Filter from "../components/Filter";

const IndexPage = () => {
  const dispatch = useDispatch();
  const pizzasState = useSelector((state) => state.getAllPizzasReducer);
  const { pizzas, error, loading } = pizzasState;
  useEffect(() => {
    dispatch(getAllPizzas());
  }, [dispatch]);
  return (
    <Layout>
      <Filter />
      <div className="row">
        {loading ? (
          <div style={{ width: "100%", marginLeft: "450px" }}>
            <Loading />
          </div>
        ) : error ? (
          <div>
            <Error error="something went wrong!" style={{}} />
          </div>
        ) : (
          pizzas.map((pizza, index) => {
            return (
              <div className="col-md-4" key={index}>
                <div>
                  <Pizza pizza={pizza} />
                </div>
              </div>
            );
          })
        )}
      </div>
    </Layout>
  );
};

export default IndexPage;
