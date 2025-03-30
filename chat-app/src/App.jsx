import React, { useState } from "react";
import ChatComponent from "./components/ChatComponent";

function App() {
  const [clientId] = useState(Math.floor(new Date().getTime() / 1000));

  return (
    <div>
      <ChatComponent clientId={clientId} />
    </div>
  );
}

export default App;
