import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { carService } from "../services/CarService";
import { EditCar } from "./EditCar";
import { SingleCar } from "./SingleCar";

function CarShow() {
  const params = useParams();
  const history = useHistory();

  const [newCar, setNewCar] = useState();
  const [isEditing, setIsEditing] = useState(false);

  const getCar = async (carId) => {
    const { data } = await carService.show(carId);
    setNewCar(data);
  };

  useEffect(() => {
    getCar(params.carId);
  }, []);

  const handleDelete = async () => {
    try {
      await carService.delete(newCar.id);
      history.push("/cars");
    } catch (e) {}
  };

  if (!newCar) return <p>car does not exist!</p>;

  return (
    newCar && (
      <>
        {!isEditing && (
          <>
            <button onClick={() => setIsEditing(true)}>edit</button>
            <SingleCar
              key={newCar.id}
              id={newCar.id}
              brand={newCar.brand}
              model={newCar.model}
              year={newCar.year}
              max_speed={newCar.max_speed}
              is_automatic={newCar.is_automatic}
              engine={newCar.engine}
              number_of_doors={newCar.number_of_doors}
            />
          </>
        )}
        {isEditing && <EditCar car={newCar} />}
        <button onClick={handleDelete} type="submit">
          delete
        </button>
      </>
    )
  );
}
export default CarShow;
