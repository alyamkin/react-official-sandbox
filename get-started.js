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
/*
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
*/

/**
 * Conditional rendering
 */
/*
function UserGreeting() {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting() {
  return <h1>Please sign up.</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;

  return isLoggedIn ? <UserGreeting /> : <GuestGreeting />;
}

function LoginButton(props) {
  return <button onClick={props.onClick}>Login</button>;
}

function LogoutButton(props) {
  return <button onClick={props.onClick}>Logout</button>;
}

function Button(props) {
  const isLoggedIn = props.isLoggedIn;
  const { loginHandler, logoutHandler } = props.onClickHandlers;

  return isLoggedIn ? (
    <LogoutButton onClick={logoutHandler} />
  ) : (
    <LoginButton onClick={loginHandler} />
  );
}

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false };

    this.loginHandler = this.loginHandler.bind(this);
    this.logoutHandler = this.logoutHandler.bind(this);
  }

  loginHandler() {
    console.log("login");
    this.setState({ isLoggedIn: true });
  }

  logoutHandler() {
    this.setState({ isLoggedIn: false });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    return (
      <div>
        <Greeting isLoggedIn={this.state.isLoggedIn} />
        <Button
          isLoggedIn={this.state.isLoggedIn}
          onClickHandlers={{
            loginHandler: this.loginHandler,
            logoutHandler: this.logoutHandler,
          }}
        />
      </div>
    );
  }
}
*/
/*
function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }

  return <div className="warning">Warning!</div>;
}

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showWarning: true };
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState((state) => ({
      showWarning: !state.showWarning,
    }));
  }

  render() {
    return (
      <div>
        <WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? "NO" : "YES"}
        </button>
      </div>
    );
  }
}
root.render(<Page />);
*/
