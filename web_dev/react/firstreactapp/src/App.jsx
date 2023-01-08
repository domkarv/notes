import React from "react";
import Card from "./components/card";
// import Heading from "./components/heading";
// import List from "./components/list";
import contacts from "./contacts";

// directly exporting 'App()'
export default function App() {
  return (
    <div>
      {/* <h1>{fName + " " + lName}</h1>
    <h1 style={customeStyles} className="heading">
      {greet}
    </h1> */}

      {/* <Heading /> */}

      {/* <ul>
      <li>React</li>
      <li>JavaScript</li>
      <li>Java</li>
    </ul> */}

      {/* <List /> */}
      {/* <List /> */}

      {/* <h3>My random number: {Math.floor(Math.random() * 10)}</h3> */}

      {/* passing parameters to custome elements */}
      {/* <Card
        name={contacts[0].name}
        imageSource={contacts[0].imageSource}
        mob={contacts[0].mob}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        imageSource={contacts[1].imageSource}
        mob={contacts[1].mob}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        imageSource={contacts[2].imageSource}
        mob={contacts[2].mob}
        email={contacts[2].email}
      /> */}
      {/* instead of passing each value we can map the data as shown below */}
      {contacts.map(createCard)}
    </div>
  );
}

function createCard(contact) {
  return (
    <Card
      key={contact.id}
      // when we are mapping data, each component should have a unique "key" (this is mendatory)
      name={contact.name}
      imageSource={contact.imageSource}
      mob={contact.mob}
      email={contact.email}
    />
  );
}
