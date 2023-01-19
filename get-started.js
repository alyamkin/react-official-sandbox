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

/**
 * State and lifecycle
 */

/*
function FormattedDate(props) {
  return <h2>It is {props.date.toLocaleTimeString()}</h2>;
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
    console.log("component was mounted");
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
    console.log("component was unmounted");
  }

  tick() {
    this.setState({ date: new Date() });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <FormattedDate date={this.state.date} />
      </div>
    );
  }
}

root.render(<Clock />);
*/

/**
 * Handling events
 */
/*
function Form() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("Form submitted");
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  );
}

root.render(<Form />);
*/

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    this.toggleHandler = this.toggleHandler.bind(this);
  }

  toggleHandler(id, e) {
    console.log(e);
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  }

  componentDidMount() {
    this.toggleHandler();
  }

  render() {
    return (
      <button onClick={(e) => this.toggleHandler(89, e)}>
        {this.state.isToggleOn ? "ON" : "OFF"}
      </button>
    );
  }
}

root.render(<Toggle />);
