import React from "react";

export const Message = (props) => {
  return (
    <h3>{ props.messageText }, {props.name}</h3>
  )
}

export default Message;