import React from "react";
import Example1Block from "./components/example1/block";
import Example2Block from "./components/example2/block";
import Example3Block from "./components/example3/block";
import Footer from "./components/footer";
import Hello from "./components/hello";
import NavBar from "./components/navbar";
import Usage from "./components/usage";
import "codemirror/keymap/sublime";
import "codemirror/theme/monokai.css";
import "./index.css";
import Methods from "./components/methods";
import Props from "./components/props";

function App() {
  return (
    <>
      <NavBar />
      <Hello />
      <Example1Block />
      <Example2Block />
      <Example3Block />
      <Usage />
      <Props />
      <Methods />
      <Footer />
    </>
  );
}

export default App;
