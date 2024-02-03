// Simple promise stored in a variable and applied .then callback separately
const promiseOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async Task is Completed");
    resolve();
  }, 1000);
});

promiseOne.then(() => console.log("Promise Consumed"));

// Promise not stored in variable and directly using the .then() callback
new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Task two completed");
    resolve();
  }, 2000);
}).then(() => console.log("promise two is consumed!"));

// lets we have some data and want to consume it
new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ name: "Aniket", age: 22 });
  }, 3000);
}).then((user) => console.log(user));

// lets have some data and consume it if there isn't error otherwise show the error
const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let err = false;
    if (err) {
      reject("Err: Something went wrong!");
    } else {
      resolve({ role: "Employee", isAdmin: false });
    }
  }, 4000);
});

promiseFour
  .then((user) => user.role)
  .then((role) => console.log(role))
  .catch((err) => console.log(err)) //we have to apply catch block to catch the error otherwise code will not work
  .finally(() =>
    console.log("finally the promise is either resolved or rejected!")
  ); //it optional here

// lets now extract the data using async await (with try catch blocks)
const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (error) {
      reject("Err: Js went wrong!");
    } else {
      resolve({ name: "Javascript", role: "web language" });
    }
  }, 6000);
});

async function consumePromiseFive() {
  // in this case it means it will wait until data comes(asynchronous task done)
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("finally js executed!");
  }
}

consumePromiseFive();

// finally lets now fetch some real world data from jsonPlaceholder dummy data

async function getAllUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
  } catch {
    console.log("Something went wrong!");
  }
}

getAllUsers();

// if you want to fetch data using fetch api in react.js we can use an useEffect hook

// first of all we have to create a state to store the fetched data
// const [users, setUsers] = useState([]);

// useEffect(() => {
//   // fetch the data using fetch api
//   async function getUsers() {
//     try {
//       const response = await fetch(
//         "https://jsonplaceholder.typicode.com/users"
//       );
//       const data = await response.json();
//       setUsers(data);
//     } catch {
//       console.log("Something went wrong!");
//     }
//   }

//   getUsers();
// }, []);

// console.log(users)


// The complete react component which fetch the data from api and map that data 
// import React from "react";

// export default function App() {
//   const [users, setUsers] = React.useState([]);

//   React.useEffect(() => {
//     // fetch the data using fetch api
//     async function getUsers() {
//       try {
//         const response = await fetch(
//           "https://jsonplaceholder.typicode.com/users"
//         );
//         const data = await response.json();
//         setUsers(data);
//       } catch (error) {
//         console.log("Something went wrong!", error);
//       }
//     }

//     getUsers();
//   }, []);

//   return (
//     <>
//       {users.map((user, index) => (
//         <h3 key={index}>
//           {index + 1}. {user.name}
//         </h3>
//       ))}
//     </>
//   );
// }

