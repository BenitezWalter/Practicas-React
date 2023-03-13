export function Objeto() {
  const user = {
    firstName: "ryan",
    lastName: "ray",
  };

  return (
    <div>
      <h1>{user.firstName}</h1>
      <h1>{user.lastName}</h1>
    </div>
  );
}
