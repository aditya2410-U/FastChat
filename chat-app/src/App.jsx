import React, { useState } from "react";
import ChatComponent from "./components/ChatComponent";
import { UserProvider } from "./context/UserContext.jsx";
// import Profile from "./components/ProfileComp.jsx";

function App() {
  const [clientId] = useState(Math.floor(new Date().getTime() / 1000));

  return (
    <UserProvider>
    <>
    {/* <Profile /> */}
      <ChatComponent clientId={clientId} />
      
    </>
    </UserProvider>
  );
}

export default App;
