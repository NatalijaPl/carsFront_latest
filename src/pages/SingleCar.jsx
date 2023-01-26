import { Link } from "react-router-dom";

export const SingleCar = ({
  brand,
  model,
  year,
  max_speed,
  is_automatic,
  engine,
  numberOfDoors,
  id,
}) => {
  return (
    <div>
      <p>ID: {id}</p>
      <h3>
        <Link to={`/cars/${id}`}>{brand}</Link>
      </h3>
      <p>{model}</p>
      <p>{year}</p>
      <p>{max_speed}</p>
      <p>{is_automatic}</p>
      <p>{engine}</p>
      <p>{numberOfDoors}</p>
    </div>
  );
};
