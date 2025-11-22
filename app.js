const heading = React.createElement("h1", { id: "heading" }, "hello world from react");

const parent = React.createElement("div", {}, "parent", 
  React.createElement("div", { id: "child1" }, 
    React.createElement("h1", {}, "I'm an h1 tag"),
    React.createElement("h2", {}, "I'm an h2 tag")
  ),
  React.createElement("div", { id: "child2" }, 
    React.createElement("h1", {}, "I'm an h1 tag"),
    React.createElement("h2", {}, "I'm an h2 tag")
  )
);

// Wrap both in a single root container
const container = React.createElement("div", {}, heading, parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);

const heading1 =React.createElement("h2",{id:"heading"},"hello React");
const root1 =ReactDOM.createRoot(document.getElementById("root1"));
root1.render(heading1)

