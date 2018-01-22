import * as React from "react";
import "./style.scss";

import Cards from "./components/Card";

interface AppProps {}

export default class App extends React.Component<AppProps, any> {
  render() {
    return (
      <div className="App">
        <Cards />
      </div>
    );
  }
}
