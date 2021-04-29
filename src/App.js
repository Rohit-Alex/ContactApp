import { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Form from "./components/Form";
import Header from "./components/Header";
import Lists from "./components/Lists";
import Search from "./components/SearchBar";

function App() {
  const userDetails = JSON.parse(localStorage.getItem("user"));
  const [data, setData] = useState([]);
  const [editItem, setEditItem] = useState({});
  const [searchVal, setSearchVal] = useState("");
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
  });

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(data));
  }, [data]);

  useEffect(() => {
    console.log(userDetails);
    userDetails && setData(userDetails);
  }, []);

  var filteredArray =
    data &&
    data.filter((item) => {
      if (searchVal === "") return item;
      else if (item.firstName.toLowerCase().includes(searchVal?.toLowerCase()))
        return item;
    });
  return (
    <div className="App">
      <BrowserRouter>
        <div className="fixedHeader">
          <Header setSearchVal={setSearchVal} />
          <div className="mobileSearch">
            <Search setSearchVal={setSearchVal} />
          </div>
        </div>

        <Switch>
          <Route exact path="/form">
            <Form
              user={user}
              setUser={setUser}
              data={data}
              setData={setData}
              item={editItem}
            />
          </Route>
          <Route exact path="/">
            <Lists
              filteredArray={filteredArray}
              data={data}
              setData={setData}
              setEditItem={setEditItem}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
