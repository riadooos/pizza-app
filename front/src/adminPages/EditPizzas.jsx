import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPizzaById, updatePizza } from "../redux/actions/pizzasAction";
import Loading from "../components/Loading";
import Error from "../components/Error";
import Success from "../components/Success";

const EditPizzas = ({ match }) => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [small, setSmall] = useState("");
  const [medium, setMedium] = useState("");
  const [large, setLarge] = useState("");

  const getPizzaByIdState = useSelector((state) => state.getPizzaByIdReducer);
  const { pizza, error, loading } = getPizzaByIdState;

  const editPizzaState = useSelector((state) => state.updatePizzaReducer);
  const { updateLoading, updateSuccess, updateError } = editPizzaState;

  useEffect(() => {
    if (pizza) {
      if (pizza._id === match.params.pizzaId) {
        setName(pizza.name);
        setImage(pizza.image);
        setDescription(pizza.description);
        setCategory(pizza.category);
        setSmall(pizza.prices[0]["small"]);
        setMedium(pizza.prices[0]["medium"]);
        setLarge(pizza.prices[0]["large"]);
      } else {
        dispatch(getPizzaById(match.params.pizzaId));
      }
    } else {
      dispatch(getPizzaById(match.params.pizzaId));
    }
  }, [pizza, dispatch]);

  const handelSubmit = (e) => {
    e.preventDefault();
    const updatedPizza = {
      _id: match.params.pizzaId,
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
    dispatch(updatePizza(updatedPizza));
  };
  return (
    <div>
      {loading && <Loading />}
      {error && <Error error="Somethings went error" />}
      {updateSuccess && <Success success="Pizza details edited successfully" />}

      <h3 style={{ textAlign: "center", color: "#1C2331" }}>Edit Pizza</h3>
      <p>PizzaId: {match.params.pizzaId}</p>

      <form onSubmit={handelSubmit} style={{ width: "95%", margin: "auto" }}>
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
        <button className="btn btn-warning">Edit</button>
      </form>
    </div>
  );
};

export default EditPizzas;
