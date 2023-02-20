import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "./components/store/Store";
import "./App.css";

function App() {
  const counter = useSelector((state) => state);
  const dispatch = useDispatch();
  function onclick(e) {
    if (e.target.role == "increase") {
      dispatch(actions.increment());
    }
    if (e.target.role == "decrease") {
      dispatch(actions.decrease());
    }
    if (e.target.role == "add10") {
      dispatch(actions.onclick(10));
    }
  }
  return (
    <>
      <div className="mt-4">
        <div
          className="d-flex justify-content-center  w-50 m-auto "
          onClick={onclick}
        >
          <Button
            role="increase"
            className="btn btn-dark px-5 py-3 "
            variant="dark"
          >
            ADD
          </Button>
          <h1 className="mx-3 text-secondary d-flex align-items-center">
            Counter:{" "}
            <span className="text-danger mx-1 align-self-end">{counter}</span>
          </h1>
          <Button
            role="decrease"
            className="btn btn-dark"
            variant="secondary"
            size="lg"
          >
            SUBTRACT
          </Button>
          <Button
            role="add10"
            className="btn btn-dark mx-3"
            variant="secondary"
            size="lg"
          >
            ADD 10
          </Button>
        </div>
      </div>
    </>
  );
}

export default App;
