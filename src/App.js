import React from 'react';
import './App.css';
import Buttom from './Buttom';

function App() {
  const name = "hello";
  const employees = [
    { name: "AAA", email: "aaaa@gmail.com", age: 20},
    { name: "BBB", email: "bbbb@gmail.com", age: 20},
    { name: "CCC", email: "cccc@gmail.com", age: 20}
  ];
  
  console.log(employees);
  
  return (
    <>
    <div className="App">
      <h1>{name}</h1> {/* Display the name variable */}
      {employees.map((em, index) => (
        <li key={index}>
          ชื่อพนักงาน: {em.name} | อีเมล์: {em.email} | อายุ: {em.age}
        </li>
      ))}
      <h1>ดีจ้า Satayu</h1>
      <Buttom text="ja" />
      <Buttom text="mai" />
    </div>
    </>
  );
}

export default App; // Ensure this line is included
