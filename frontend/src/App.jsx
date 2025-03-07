import { useState } from "react";

function App() {
  // eslint-disable-next-line no-unused-vars
  const [message, setMessage] = useState("Hello World");

  return (
    <div className="App">
      <h1 className="text-yellow">First Hello World</h1>
      <p className="text-blue">{message}</p>
      <button onClick={() => {
        // eslint-disable-next-line no-const-assign
        setMessage("changed message");
      }}>Change Message</button>
    </div>
  )
}

export default App;