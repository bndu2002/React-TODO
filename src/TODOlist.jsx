import React from "react";

export default function TODO(props) {
  return (
    <div className="todo_style">
      <i
        className="fa fa-times-circle"
        aria-hidden="true"
        onClick={() => {
          props.onSelect(props.id);
        }}
      ></i>
      <li>
        {" "}
        {props.text}
        {props.id}
      </li>
    </div>
  );
}
