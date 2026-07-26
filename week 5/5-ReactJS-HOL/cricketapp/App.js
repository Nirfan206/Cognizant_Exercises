import React from "react";
import ListofPlayers from "./components/IndianPlayers";
import IndianPlayers from "./components/ListofPlayers";

function App() {

    const flag = false;

    if (flag) {
        return <ListofPlayers />;
    } else {
        return <IndianPlayers />;
    }

}

export default App;