import React, { Fragment } from "react";
import { useState } from "react"
import Message from './components/Message/Message'

function App() {
  const [text, setText] = useState('Привет');
  const [name, setName] = useState('Юзер');

  return (
    <Fragment>
      <Message messageText={text} name={name} />
    </Fragment>
  );
}

export default App;
