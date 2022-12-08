import stylesApp from "./App.module.css";

import { Banner } from "../Banner/Banner";


function App() {
  return (
    <div className={`${stylesApp.App}`}>
      <Banner />
    </div>
  );
}

export default App;
