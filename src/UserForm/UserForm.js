import React from "react";
import { useState } from "react";
import Button from "../Button/Button";
import styles from "../UserForm/UserForm.module.css";

const UserForm = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [isValid, setIsValid] = useState(true);

  const submitHandler = (event) => {
    event.preventDefault();

    const data = {
      id: Math.random(),
      name,
      age: +age,
    };
    //console.log(event);
    if (data.name.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddUser(data);
    setName("");
    setAge("");
  };

  const nameChangeHandler = (event) => {
    /*   setState(
          (previousState) => ({
              ...previousState,
              title: event.target.value
          })
      ); */
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    /*  setState(
          (previousState) => ({
              ...previousState,
              montant: event.target.value
          })
      ); */
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setAge(event.target.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <div
        className={`${styles["form-control"]} ${!isValid && styles.invalid}`}
      >
        <div className="new-expense__control">
          <label>Nom : </label>
          <input value={name} onChange={nameChangeHandler} type="text" />
        </div>
        <div className="new-expense__control">
          <label>Age : </label>
          <input
            value={age}
            onChange={ageChangeHandler}
            type="number"
            min={0}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <Button type="submit">Ajouter l'utilisateur</Button>
      </div>
    </form>
  );
};
export default UserForm;
