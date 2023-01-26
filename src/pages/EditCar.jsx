import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { carService } from "../services/CarService";

export const EditCar = ({ car }) => {
  const history = useHistory();

  const [carData, setCarData] = useState({
    brand: "",
    model: "",
    year: "",
    max_speed: "",
    is_automatic: "",
    engine: "",
    number_of_doors: "",
  });

  useEffect(() => {
    setCarData(car);
  }, []);

  const handleUpdateCar = async (e) => {
    e.preventDefault();
    if (
      !carData.brand ||
      !carData.model ||
      !carData.year ||
      !carData.max_speed ||
      !carData.is_automatic ||
      !carData.engine ||
      !carData.number_of_doors
    ) {
      alert("One or more field is blank.");
      return;
    }
    try {
      await carService.update(carData.id, {
        brand: carData.brand,
        model: carData.model,
        year: carData.year,
        max_speed: carData.max_speed,
        is_automatic: carData.is_automatic,
        engine: carData.engine,
        number_of_doors: carData.number_of_doors,
      });
      history.push("/cars");
    } catch (e) {
      console.log({ e });
    }
  };

  return (
    <div>
      <form onSubmit={handleUpdateCar}>
        <label>
          brand:
          <input
            id="brand"
            type="text"
            required
            minLength={2}
            value={carData.brand}
            onChange={(e) => {
              setCarData({ ...carData, brand: e.target.value });
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
            value={carData.model}
            required
            minLength={2}
            onChange={(e) => {
              setCarData({ ...carData, model: e.target.value });
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
            value={carData.year}
            onChange={(e) => {
              setCarData({ ...carData, year: e.target.value });
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
            value={carData.max_speed}
            onChange={(e) => {
              setCarData({ ...carData, max_speed: e.target.value });
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
            value={carData.is_automatic}
            onChange={(e) => {
              setCarData({ ...carData, is_automatic: e.target.value });
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
            value={carData.engine}
            required
            onChange={(e) => {
              setCarData({ ...carData, engine: e.target.value });
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
            value={carData.number_of_doors}
            required
            minLength={2}
            maxLength={5}
            onChange={(e) => {
              setCarData({ ...carData, number_of_doors: e.target.value });
            }}
          />
        </label>

        <br />
        <br />
        <br />
        <button type="submit">edit car</button>
      </form>
      <br />
    </div>
  );
};
