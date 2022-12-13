import React, { useState } from "react";
import { addToCart } from "../redux/actions/cartAction";
import { useDispatch } from "react-redux";
import { Modal } from "react-bootstrap";

const Pizza = ({ pizza }) => {
  const [quantity, setQuantity] = useState(1);
  const [varient, setVarient] = useState("small");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();

  const addToMyCart = () => {
    dispatch(addToCart(pizza, quantity, varient));
  };
  return (
    <div className="m-5 shadow p-3 mb-5 bg-body rounded w-100">
      <div
        onClick={handleShow}
        className="d-flex flex-column justify-content-center w-100"
      >
        <h1>{pizza.name}</h1>
        <img
          src={pizza.image}
          alt={pizza.name}
          style={{ height: "200px", width: "200px" }}
          className="img-fluid rounded"
        />
      </div>
      <div className="d-flex justify-content-between">
        <div className="w-100">
          <p>Varients</p>
          <select
            className="form-control m-1"
            value={varient}
            onChange={(e) => setVarient(e.target.value)}
          >
            {pizza.varients.map((varient, index) => {
              return (
                <option value={varient} key={index}>
                  {varient}
                </option>
              );
            })}
          </select>
        </div>
        <div className="w-100">
          <p>Quantity</p>
          <select
            className="form-control mx-1"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          >
            {/* iteration dun tableau de 1 a 10 */}
            {[...Array(10).keys()].map((x, i) => {
              return (
                <option value={i + 1} key={x}>
                  {i + 1}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      <div className="d-flex">
        <div className="w-100 m-1">
          {/* calcul du prix d'une pizza */}
          <h1 className="my-1">
            Price: {pizza.prices[0][varient] * quantity} DA/-
          </h1>
        </div>
        <div className="w-100 m-1">
          <button className="btn btn-danger" onClick={addToMyCart}>
            Commander
          </button>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{pizza.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <img
            src={pizza.image}
            alt={pizza.name}
            style={{ height: "400px" }}
            className="img-fluid"
          />
          <p>{pizza.description}</p>
        </Modal.Body>

        <Modal.Footer>
          <button className="btn btn-danger" onClick={handleClose}>
            close
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Pizza;
