import React from "react";
import Threads from "./Threads";
import Home from "./component/Home"; // Import Home Component
// import ClickSpark from './ClickSpark';

// <ClickSpark
//   sparkColor='#fff'
//   sparkSize={10}
//   sparkRadius={15}
//   sparkCount={8}
//   duration={400}
// >
//   {/* Your content here */}
// </ClickSpark>

function App() {
  return (
    <div style={{ width: "100%", height: "100vh", position: "relative" }}>
      {/* Threads Background */}
      <Threads amplitude={1} distance={0} enableMouseInteraction={true} />

      {/* Home Component */}
      <Home />
    </div>
  );
}

export default App;
