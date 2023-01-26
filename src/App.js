import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Switch } from "react-router-dom";
import { AppCars } from "./pages/AppCars";
import { NavBar } from "./components/common/NavBar";
import GuardedRoute from "./components/common/GuardedRoute";
import { AppLogin } from "./components/auth/AppLogin";
import { AppRegister } from "./components/auth/AppRegister";
import GuestRoute from "./components/common/GuestRoute";
import { AddCar } from "./pages/AddCar";
import CarShow from "./pages/CarShow";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <NavBar />
        </header>
        <Switch>
          <GuardedRoute component={AppCars} exact path="/cars" />
          <GuardedRoute component={CarShow} path="/cars/:carId" />
          <GuardedRoute component={AddCar} path="/add" />
          <GuestRoute component={AppLogin} path="/login" />
          <GuestRoute component={AppRegister} path="/register" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
