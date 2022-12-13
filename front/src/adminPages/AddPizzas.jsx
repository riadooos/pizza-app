import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewPizza } from "../redux/actions/pizzasAction";
import Loading from "../components/Loading";
import Error from "../components/Error";
import Success from "../components/Success";

const AddPizzas = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [small, setSmall] = useState("");
  const [medium, setMedium] = useState("");
  const [large, setLarge] = useState("");

  const addPizzaState = useSelector((state) => state.addPizzaReducer);
  const { loading, success, error } = addPizzaState;

  const handelSubmit = (e) => {
    e.preventDefault();
    const pizza = {
      name,
      image,
      description,
      category,
      prices: {
        small,
        medium,
        large,
      },
    };
    console.log(pizza);
    dispatch(addNewPizza(pizza));
  };

  return (
    <div>
      {loading && <Loading />}
      {error && <Error error="Somethings went error" />}
      {success && <Success success="New Pizza Added successfully" />}
      <form onSubmit={handelSubmit} style={{ width: "95%", margin: "auto" }}>
        <h3 style={{ textAlign: "center", color: "#1C2331" }}>AddPizzas</h3>
        <input
          className="form-control"
          type="text"
          placeholder="pizza name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="form-control"
          type="text"
          placeholder="pizza image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <input
          className="form-control"
          type="text"
          placeholder="pizza description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          className="form-control"
          type="text"
          placeholder="pizza category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <input
          className="form-control"
          type="text"
          placeholder="small price"
          value={small}
          onChange={(e) => setSmall(e.target.value)}
        />
        <input
          className="form-control"
          type="text"
          placeholder="medium price"
          value={medium}
          onChange={(e) => setMedium(e.target.value)}
        />
        <input
          className="form-control"
          type="text"
          placeholder="large price"
          value={large}
          onChange={(e) => setLarge(e.target.value)}
        />
        <br />
        <button className="btn btn-warning">Ajouter</button>
      </form>
    </div>
  );
};

export default AddPizzas;
