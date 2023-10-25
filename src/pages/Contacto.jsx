import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { data } from "./Home";

const Contacto = () => {
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("se mandoooo!");
    data.push({ id: "4", name: "Andrea", email: "andrea@a.com", age: 29 });
    Swal.fire({
      position: "center",
      icon: "error",
      title: "Se mando!!!",
      showConfirmButton: true,
      // timer: 1500,
    });
    navigate("/");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label>Nombre:</label>
        <input type="text" name="" id="" />
        <button className="bg-yellow-300" type="submit">
          Enviar nombre
        </button>
      </form>
    </div>
  );
};

export default Contacto;
