import React, { useEffect } from "react";
import Layout from "../components/Layout";
import { useDispatch, useSelector } from "react-redux";
import { getUserOrders } from "../redux/actions/orderActions";
import Loading from "../components/Loading";
import Error from "../components/Error";

const OrdersPage = () => {
  const dispatch = useDispatch();
  const ordersState = useSelector((state) => state.getUserOrdersReducer);
  const { orders, error, loading } = ordersState;
  useEffect(() => {
    dispatch(getUserOrders());
  }, [dispatch]);
  return (
    <Layout>
      <div>
        <h2 style={{ fontSize: "35px" }}>My Orders</h2>
        <hr />
        <div className="row justify-content-center">
          {loading && <Loading />}
          {error && <Error error="Something went wrong" />}
          {orders &&
            orders.map((order) => {
              return (
                <div
                  className="col-md-8 my-2"
                  style={{ backgroundColor: "red", color: "white" }}
                >
                  <div className="d-flex">
                    <div className="text-left w-100 m-1">
                      <h2 style={{ fontSize: "25px" }}>Items</h2>
                      <hr />
                      {order.orderItems.map((item) => {
                        return (
                          <div>
                            <h6>
                              {item.name}[{item.varient}] * {item.quantity} ={" "}
                              {item.price}
                            </h6>
                          </div>
                        );
                      })}
                    </div>
                    <div className="text-left w-100 m-1">
                      <h2 style={{ fontSize: "25px" }}>Address</h2>
                      <hr />
                      <h6>Street: {order.shippingAddress.street}</h6>
                      <h6>City: {order.shippingAddress.city}</h6>
                      <h6>Country: {order.shippingAddress.country}</h6>
                      <h6>Pincode: {order.shippingAddress.pincode}</h6>
                    </div>
                    <div className="text-left w-100 m-1">
                      <h2 style={{ fontSize: "25px" }}>Order Info</h2>
                      <hr />
                      <h6>Order Amount: {order.orderAmount}</h6>
                      <h6>Date: {order.createdAt.substring(0, 10)}</h6>
                      <h6>Transaction Id: {order.transactionId}</h6>
                      <h6>Order Id: {order._id}</h6>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </Layout>
  );
};

export default OrdersPage;
