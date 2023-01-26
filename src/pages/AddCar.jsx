import { useState } from "react";
import { useHistory } from "react-router-dom";
import { carService } from "../services/CarService";

export const AddCar = () => {
  const history = useHistory();

  const [newCar, setNewCar] = useState({
    brand: "",
    model: "",
    year: "",
    max_speed: "",
    is_automatic: "",
    engine: "",
    number_of_doors: "",
  });

  const handleAddCar = async (e) => {
    e.preventDefault();

    if (
      !newCar.brand ||
      !newCar.model ||
      !newCar.year ||
      !newCar.max_speed ||
      !newCar.is_automatic ||
      !newCar.engine ||
      !newCar.number_of_doors
    ) {
      alert("One or more field is blank.");
      return;
    }
    try {
      await carService.add({
        brand: newCar.brand,
        model: newCar.model,
        year: newCar.year,
        max_speed: newCar.max_speed,
        is_automatic: newCar.is_automatic,
        engine: newCar.engine,
        number_of_doors: newCar.number_of_doors,
      });
      history.push("/cars");
    } catch (e) {
      console.log({ e });
    }
  };

  const handleResetForm = () => {
    setNewCar({
      brand: "",
      model: "",
      year: "",
      max_speed: "",
      is_automatic: "",
      engine: "",
      number_of_doors: "",
    });
  };

  const handlePreviewData = (car) => {
    let message;
    for (const key in car) {
      let item = key + ": " + car[key] + "\n";
      message += item;
    }
    alert(message);
  };

  return (
    <div>
      <h1>add car</h1>
      <form onSubmit={handleAddCar}>
        <label>
          brand:
          <input
            id="brand"
            type="text"
            required
            minLength={2}
            value={newCar.brand}
            onChange={(e) => {
              setNewCar({ ...newCar, brand: e.target.value });
            }}
          />
        </label>
        <br />
        <br />
        <label>
          model:
          <input
            id="model"
            type="text"
            value={newCar.model}
            required
            minLength={2}
            onChange={(e) => {
              setNewCar({ ...newCar, model: e.target.value });
            }}
          />
        </label>
        <br />
        <br />
        <label>
          year:
          <input
            id="year"
            type="number"
            required
            minLength={1920}
            maxLength={2023}
            value={newCar.year}
            onChange={(e) => {
              setNewCar({ ...newCar, year: e.target.value });
            }}
          />
        </label>
        <br />
        <br />
        <label>
          max speed:
          <input
            id="max_speed"
            type="number"
            required
            minLength={20}
            maxLength={300}
            value={newCar.max_speed}
            onChange={(e) => {
              setNewCar({ ...newCar, max_speed: e.target.value });
            }}
          />
        </label>
        <br />
        <br />
        <label>
          is automatic:
          <input
            id="is_automatic"
            type="number"
            required
            value={newCar.is_automatic}
            onChange={(e) => {
              setNewCar({ ...newCar, is_automatic: e.target.value });
            }}
          />
        </label>
        <br />
        <br />
        <label>
          engine:
          <input
            id="engine"
            type="text"
            value={newCar.engine}
            required
            onChange={(e) => {
              setNewCar({ ...newCar, engine: e.target.value });
            }}
          />
        </label>
        <br />
        <br />
        <label>
          number of doors:
          <input
            id="number_of_doors"
            type="number"
            value={newCar.number_of_doors}
            required
            minLength={2}
            maxLength={5}
            onChange={(e) => {
              setNewCar({ ...newCar, number_of_doors: e.target.value });
            }}
          />
        </label>

        <br />
        <br />
        <button type="submit">add car</button>
        <br />
        <br />
        <button type="reset" value="Reset" onClick={() => handleResetForm()}>
          reset
        </button>
        <br />
        <br />
        <button onClick={() => handlePreviewData(newCar)}>preview</button>
      </form>
    </div>
  );
};
