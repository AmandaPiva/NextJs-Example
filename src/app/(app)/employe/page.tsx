import { getEmployes } from "../getEmployes";

export default function Employe() {
  const result = getEmployes;

  return (
    <>
      <h1 className="text-lg">Ola</h1>
      <div>
        {result.map((employe) => (
          <div key={employe.id}>
            <h2>{employe.name}</h2>
            <p>{employe.age}</p>
            <p>{employe.salary}</p>
          </div>
        ))}
      </div>
    </>
  );
}
