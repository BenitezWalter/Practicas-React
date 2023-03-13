import React from "react";
import ReactDOM from "react-dom/client";
import { Objeto } from "./Objeto";
import Product from "./Product";
import { UserCard } from "./UserCard";
import { Button } from "./Button";
import { TaskCard } from "./TaskCard";
import { Saludarr } from "./Saludarr";
import { Post } from "./Post";

import { Counter } from "./Counter";
import { Form } from "./Form";

const rootElement = document.getElementById("root");

const root = ReactDOM.createRoot(rootElement);

const posts = [
  {
    userId: 1,
    id: 1,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  },
  {
    userId: 1,
    id: 2,
    title: "qui est esse",
    body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
  },
];
//PROPS: PASAR PARAMETROS A UNA FUNCION

function Saludar(props) {
  const name = true;

  function Sumar(x, y) {
    return x + y;
  }

  return <h1>{name ? "HOLAAAAAAAAAAAAA" : Sumar(10, 30)}</h1>;
}

function Saludar2({ title, name = "tontit" }) {
  console.log(title, name);

  return (
    <h1>
      {title}, dice {name}
    </h1>
  );
}



root.render(
  <>
    <Saludar2 title="hello" name="fidle"></Saludar2>
    <Saludar2 title="bye" name="fidle"></Saludar2>
    <Saludar2 title="tucola" name="fidle"></Saludar2>
    <Saludar2 title="tucola2"></Saludar2>
    <Saludar2 title="tucola4"></Saludar2>
    <Saludar></Saludar>
    <Objeto></Objeto>
    <Product></Product>
    <UserCard
      name="Walter White"
      amount={15000}
      married={true}
      points={[99, 100, 200, 500]}
      address={{ street: "repu arg", city: "Fformocity" }}
      greet={() => alert("puto")}
    ></UserCard>

    <UserCard
      name="Jesse Pinkman"
      amount={1500}
      married={true}
      points={[99, 100, 200, 500]}
      address={{ street: "en la cuna de la meta", city: "alburquerque" }}
      greet={() => alert("puto")}
    ></UserCard>

    <Button text="click me" name="jesse"></Button>
    <Button text="pay me"></Button>
    <Button text="xd"></Button>
    <TaskCard ready={false}></TaskCard>

    <Saludarr></Saludarr>

    <input onChange={(e) => console.log(e.target.value)}></input>

    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log("puto");
      }}
    >
      <button>enviar</button>
    </form>

    <Post></Post>
    {posts.map((post, index) => {
      return <h1 key={index}>{" Titulo:"+ post.title}</h1>;
    })}

    <Counter></Counter>
    <Form></Form>
  </>
);
