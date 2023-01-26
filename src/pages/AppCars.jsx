import React from "react";
import { carService } from "../services/CarService";
import { useState, useEffect } from "react";
import { SingleCar } from "./SingleCar";

export const AppCars = () => {
  const [carList, setCarList] = useState([]);

  const getHandler = async () => {
    const response = await carService.getAll();
    setCarList(response.data);
  };
  useEffect(() => {
    getHandler();
  }, []);

  return (
    <div>
      <ul>
        {carList.map((car) => (
          <li key={car.id}>
            <SingleCar
              id={car.id}
              brand={car.brand}
              model={car.model}
              year={car.year}
              director={car.director}
              max_speed={car.max_speed}
              is_automatic={car.is_automatic}
              engine={car.engine}
              number_of_doors={car.number_of_doors}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
