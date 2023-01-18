const root = ReactDOM.createRoot(document.getElementById("root"));

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

/**
 * Components and Props
 */

// class Welcome extends React.Component {
//   render() {
//     return <h1>Hello, {this.props.name}</h1>;
//   }
// }
/*
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Sarah" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}
const element = <Welcome name="Sarah" />;
// const element = <Welcome name="Sarah" />;

root.render(App());
*/

// Extracting components

/*
function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.autor} />
      <div className="Comment-text">{props.text}</div>
      <div className="Comment-date">{props.date}</div>
    </div>
  );
}

function Avatar(props) {
  return (
    <img className="Avatar" src={props.user.avatarUrl} alt={props.user.name} />
  );
}

function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">{props.user.name}</div>
    </div>
  );
}

const commentData = {
  autor: { avatarUrl: "//unsplash.it/100/100", name: "Andrey" },
  text: "Hello world",
  date: new Date().toISOString,
};

const element = Comment(commentData);

root.render(element);

*/
