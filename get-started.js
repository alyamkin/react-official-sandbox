/**
 * Introducing JSX
 */
/*
function formatName(user) {
  return `${user.firstName} ${user.lastName}`;
}

const user = {
  firstName: "Harper",
  lastName: "Perez",
  avatarUrl: "//unsplash.it/100/100",
  scriptTag: <script></script>,
};

const element = (
  <h1>
    <img src={user.avatarUrl} />
    Hello, {formatName(user)}! {user.scriptTag}
  </h1>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(element);
*/

/**
 * Rendering Elements
 */
/*
const root = ReactDOM.createRoot(document.querySelector("#root"));

function tick() {
  const element = (
    <div>
      <h1>Hello, world</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );

  root.render(element);
}

setInterval(tick, 1000);
*/
