import React from "react";

import "./UserList.css";
import UserItem from "../UserItem/UserItem";

const UserList = (props) => {
  return (
    <ul className="goal-list">
      {props.items.map((goal) => (
        <UserItem
          key={goal.id}
          id={goal.id}
          name={goal.name}
          age={goal.age}
          onDelete={props.onDeleteItem}
        >
          {/* {goal.text} */}
        </UserItem>
      ))}
    </ul>
  );
};

export default UserList;
