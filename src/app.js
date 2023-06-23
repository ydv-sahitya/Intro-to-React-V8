// this example using props. more flexible way

const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      animal: "Dog",
      name: "Luna",
      breed: "havanese",
    }),
    React.createElement(Pet, {
      animal: "Another dog",
      name: "july",
      breed: "desi breed",
    }),
    React.createElement(Pet, {
      animal: "cat",
      name: "meaow",

      breed: "desi cat",
    }),
  ]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));

// -------------------------------------------------------------------------------------

// this is a first verions. not very flexible.

// const Pet = () => {
//     return React.createElement("div",{}, [
//         React.createElement("h1",{},"Luna"),
//         React.createElement("h2",{}, "Dog"),
//         React.createElement("h2", {}, "Havanese"),
//     ]);
// };

// const App = () => {
//     return React.createElement(
//         "div",
//         {},
//         [
//             React.createElement("h1",{}, "Adopt Me!"),
//             React.createElement(Pet),
//             React.createElement(Pet),
//             React.createElement(Pet),

//         ]

//     )
// };

// const container = document.getElementById("root");
// const root = ReactDOM.createRoot(container);
// root.render(React.createElement(App));
