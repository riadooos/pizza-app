import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { filterPizzas } from "../redux/actions/pizzasAction";

const Filter = () => {
  const [searchKey, setSearchKey] = useState("");
  const [category, setCategory] = useState("all");
  const dispatch = useDispatch();
  return (
    <div>
      <div className="row justify-content-center shadow p-3 mb-5 bg-white rounded">
        <div className="col-md-3">
          <input
            type="text"
            className="form-control w-100"
            placeholder="search pizzas"
            value={searchKey}
            onChange={(e) => setSearchKey(e.target.value)}
          />
        </div>
        <div className="col-md-3">
          <select
            className="form-control w-100"
            style={{ marginTop: "10px" }}
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="all">All</option>
            <option value="veg">Veg</option>
            <option value="nonveg">Non-Veg</option>
          </select>
        </div>
        <div className="col-md-3">
          <button
            className="btn btn-danger w-100"
            style={{ marginTop: "10px" }}
            onClick={() => dispatch(filterPizzas(searchKey, category))}
          >
            Filter
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
