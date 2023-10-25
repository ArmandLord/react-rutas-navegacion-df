import { Link } from "react-router-dom";

export const data = [
  { id: "1", name: "armando", email: "a@a.com", age: 20 },
  { id: "2", name: "juan", email: "juan@a.com", age: 22 },
  { id: "3", name: "pedro", email: "pe@a.com", age: 19 },
];

const Home = () => {
  return (
    <div>
      {data.map((item) => (
        <Link to={`/detalle/${item.id}`} key={item.id}>
          <div className=" bg-teal-800 p-5 m-2 rounded-xl">
            <h1 className=" text-indigo-50">{item.name}</h1>
            <p className=" text-indigo-50">{item.email}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Home;
