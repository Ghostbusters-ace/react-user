import React from "react";

import "./UserItem.css";

const UserItem = (props, { name }) => {
  const deleteHandler = () => {
    props.onDelete(props.id);
    console.log(props.id);
  };

  return (
    <li className="goal-item" onClick={deleteHandler}>
      {props.name} ({props.age} ans)
    </li>
  );
};

export default UserItem;
