import { useParams } from "react-router-dom";
import { data } from "./Home";

const Detalle = () => {
  const { id } = useParams();

  return (
    <div>
      {data.map((item) => {
        if (item.id === id) {
          return (
            <div key={item.id} className=" bg-teal-800 p-5 m-2 rounded-xl">
              <h1 className=" text-indigo-50">
                {" "}
                <b>Nombre:</b> {item.name}
              </h1>
              <p className=" text-indigo-50">
                {" "}
                <b>Email:</b> {item.email}
              </p>
              <p className=" text-indigo-50">
                {" "}
                <b>Edad:</b> {item.age}
              </p>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Detalle;
