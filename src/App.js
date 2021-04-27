import { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Form from "./components/Form";
import FormEditing from "./components/FormEditing";
import Header from "./components/Header";
import Lists from "./components/Lists";
import Search from "./components/SearchBar";

function App() {
  const userDetails = JSON.parse(localStorage.getItem("user"));
  const [data, setData] = useState([]);
  const [editItem, setEditItem] = useState(null);

  return (
    <div className="App">
      <BrowserRouter>
        <div className="fixedHeader">
          <Header />
          <Search />
        </div>

        <Switch>
          <Route exact path="/edit">
            <FormEditing data={data} setData={setData} item={editItem} />
          </Route>
          <Route exact path="/form">
            <Form setData={setData} />
          </Route>
          <Route exact path="/">
            <Lists data={data} setData={setData} setEditItem={setEditItem} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
