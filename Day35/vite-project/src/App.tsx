// interface
import { useState } from "react";
import type React from "react";
import "./App.css";

interface ButtonProps {
  text: string;
  color: string;
  fontSize: number;
  handleClick?: () => void; // Optional event handler
}

function Button(props: ButtonProps) {
  const buttonStyle = {
    color: props.color,
    fontSize: props.fontSize + "px",
  };
  return <button style={buttonStyle}> {props.text}</button>;
}
// Destructuring props
function Button2({ text, color, fontSize }: ButtonProps): React.JSX.Element {
  const buttonStyle = {
    color: color,
    fontSize: fontSize + "px",
  };
  return <button style={buttonStyle}>{text}</button>;
}
// function with event handler
function Button3({ text, color, fontSize, handleClick }: ButtonProps) {
  const buttonStyle = {
    color: color,
    fontSize: fontSize + "px",
  };
  return (
    <button style={buttonStyle} onClick={handleClick}>
      {text}
    </button>
  );
}

function Avatar({ person, size }): React.JSX.Element {
  return (
    <img
      className="avatar"
      alt={person.name}
      src="https://react.dev/images/docs/scientists/1bX5QH6.jpg"
      width={100}
      height={size}
    ></img>
  );
}

function Profile() {
  return (
    <div>
      <Avatar
        person={{ name: "Suzune", imageId: "Midori" }}
        size={100}
      ></Avatar>
      <Avatar
        person={{ name: "Suzune", imageId: "Midori" }}
        size={100}
      ></Avatar>
      <Avatar
        person={{ name: "Suzune", imageId: "Midori" }}
        size={100}
      ></Avatar>
    </div>
  );
}

// render list of elements in JSX

function AnimalList({ animals }: { animals: string }) {
  return <li>{animals}</li>;
}

function renderAnimalist(animalsArr: string[]) {
  const item = animalsArr.map((value) => {
    return <AnimalList key={value} animals={value} />;
  });
  return item;
}

// Passing JSX as children

function Card({ children }: { children: React.ReactNode }) {
  return <div className="card">{children}</div>;
}

// How props change over time
function Option({ name, content, value }: { name: string; content: string; value : string }) {
  return <option className={name} value={value}>{content}</option>;
}
function PickColor() {
  const arrayColor: string[] = ["yellow", "orange", "violet"];
  const [selectedColor, setSelectedColor] = useState('yellow');
  function handleChange(event : React.ChangeEvent<HTMLSelectElement>) {
    setSelectedColor(event.target.value);
  }
  return (
    <div>
      <Clock color={selectedColor} time="10"></Clock>
      <select value={selectedColor} onChange={handleChange}>
        {arrayColor.map((color) => {
          return (
            <Option key={color} name={"id"} value={color} content={color}></Option>            
          );
        })}        
      </select>
    </div>
  );
}
function Clock({ color, time }: { color: string; time: string }) {
  return (
    <div>
      <h1 style={{ color : color}}>{time}</h1>
    </div>
  );
}

function Item({ name, isPacked }) {
  return <li className="item">{name}</li>;
}
function ShowItem() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item isPacked={true} name="Space Suit"></Item>
        <Item isPacked={true} name="Helmet with a golden leaf"></Item>
        <Item isPacked={true} name="Photo of Tam"></Item>
      </ul>
    </section>
  );
}

export default function App() {
  const handleClick = () => {
    alert("Button clicked!");
  };
  const animals: string[] = ["Dog", "Cat", "Elephant", "Lion", "Tiger"]; // Type annotation for array of strings
  const value = renderAnimalist(animals);
  return (
    <div>
      <Button text="Click me" color="red" fontSize={20}></Button>
      <Button2 text="Click me" color="blue" fontSize={20}></Button2>
      <Button3
        text="Click me"
        color="green"
        fontSize={20}
        handleClick={handleClick}
      ></Button3>
      <AnimalList animals={animals[0]}></AnimalList>
      <AnimalList animals={animals[1]}></AnimalList>
      <AnimalList animals={animals[2]}></AnimalList>
      <AnimalList animals={animals[3]}></AnimalList>
      <AnimalList animals={animals[4]}></AnimalList>
      <hr />
      {value} adsđs
      <hr />
      {renderAnimalist(animals)}
      <hr></hr>
      <ShowItem></ShowItem>
      <hr></hr>
      <Profile></Profile>
      <hr></hr>
      <Card>
        <Avatar size={100} person={{ name: "hih", imageId: "hih" }} />
      </Card>
      <hr></hr>
      <PickColor></PickColor>
    </div>
  );
}
