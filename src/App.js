import "./App.css";
import UserForm from "./UserForm/UserForm";
import UserList from "./UserList/UserList";
import { useState } from "react";

function App() {
  const [user, setUser] = useState([
    { id: 1, name: "dsd", age: 65 },
    { id: 2, name: "silver", age: 25 },
  ]);

  const addGoalHandler = (data) => {
    console.log(data);
    setUser((previousState) => {
      //const updatedGoals = [...previousState];
      //updatedGoals.unshift({ text: enteredText, id: "goal1" });
      return [data, ...previousState];
    });
  };

  const deleteItemHandler = (goalId) => {
    setUser((previousState) => {
      const updatedGoals = previousState.filter((goal) => goal.id !== goalId);
      return updatedGoals;
    });
  };

  let content = (
    <p style={{ textAlign: "center" }}>Pas encore de User ? Ajoutez-en un</p>
  );

  if (user.length > 0) {
    content = <UserList items={user} onDeleteItem={deleteItemHandler} />;
  }
  return (
    <div className="goal-form">
      <UserForm onAddUser={addGoalHandler}></UserForm>
      <section id={user.id}>{content}</section>
    </div>
  );
}

export default App;
