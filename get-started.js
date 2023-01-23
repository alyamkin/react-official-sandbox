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

/**
 * List and Keys
 */
/*
function ListItem(props) {
  const value = props.value;

  return <li>{value}</li>;
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) => (
    <ListItem key={number} value={number} />
  ));

  return <ul>{listItems}</ul>;
}

const numbers = [1, 2, 3, 4, 5];
root.render(<NumberList numbers={numbers} />);


//Keys Must Only Be Unique Among Siblings

function Blog(props) {
  const posts = props.posts;

  const sidebar = (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
  const content = posts.map((post) => (
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  ));

  return (
    <div>
      {sidebar}
      <hr />
      {content}
    </div>
  );
}

const posts = [
  { id: 1, title: "Hello World", content: "Welcome to learning React!" },
  { id: 2, title: "Installation", content: "You can install React from npm." },
];

root.render(<Blog posts={posts} />);

*/

/**
 * Forms
 */

/*
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handlerChange = this.handlerChange.bind(this);
    this.handlerSubmit = this.handlerSubmit.bind(this);
  }

  handlerSubmit(event) {
    console.log("A name was submitted: " + this.state.value);
    event.preventDefault();
    this.setState({ value: "" });
  }

  handlerChange(event) {
    const value = event.target.value;

    this.setState({ value: value });
  }

  render() {
    return (
      <form onSubmit={this.handlerSubmit}>
        <label>name:</label>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handlerChange}
        />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

root.render(<NameForm />);


class EssayForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "Please write an essay about your favorite DOM element.",
    };

    this.handlerChange = this.handlerChange.bind(this);
    this.handlerSubmit = this.handlerSubmit.bind(this);
  }

  handlerSubmit(event) {
    console.log("An essay was submitted: " + this.state.value);
    event.preventDefault();
    this.setState({ value: "" });
  }

  handlerChange(event) {
    const value = event.target.value;

    this.setState({ value: value });
  }

  render() {
    return (
      <form onSubmit={this.handlerSubmit}>
        <label>name:</label>
        <textarea
          type="text"
          value={this.state.value}
          onChange={this.handlerChange}
        />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

root.render(<EssayForm />);


class FlavorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "lime",
    };

    this.handlerChange = this.handlerChange.bind(this);
    this.handlerSubmit = this.handlerSubmit.bind(this);
  }

  handlerSubmit(event) {
    console.log("An essay was submitted: " + this.state.value);
    event.preventDefault();
  }

  handlerChange(event) {
    const value = event.target.value;

    this.setState({ value: value });
  }

  render() {
    return (
      <form onSubmit={this.handlerSubmit}>
        <label>
          Pick your favorite flavor:
          <select value={this.state.value} onChange={this.handlerChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>

        <input type="submit" value="Submit" />
      </form>
    );
  }
}

root.render(<FlavorForm />);


class ReservationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: false,
      numberOfGuests: 0,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(
      `is going : ${this.state.isGoing} - number of guests : ${this.state.numberOfGuests}`
    );
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Is going:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          Number of guests:
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

root.render(<ReservationForm />);

*/

/**
 * Lifting State Up
 */
/*
function BoilingVerdict(props) {
  const celsius = props.celsius;

  return celsius >= 100 ? (
    <p>The water would boil.</p>
  ) : (
    <p>The water would not boil.</p>
  );
}

function toCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

function tryConvert(temperature, converter) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return "";
  }

  const output = converter(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

const scaleNames = {
  c: "Celsius",
  f: "Fahrenheit",
};

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    // this.state = { temperature: "" };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const value = e.target.value;
    // this.setState({ temperature: value });
    this.props.onTemperatureChange(value);
    console.log(value);
  }

  render() {
    // const temperature = this.state.temperature;
    const temperature = this.props.temperature;
    const scale = this.props.scale;

    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input type="text" value={temperature} onChange={this.handleChange} />
      </fieldset>
    );
  }
}
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    this.state = { temperature: "", scale: "c" };
  }

  handleCelsiusChange(temperature) {
    this.setState({ scale: "c", temperature });
  }

  handleFahrenheitChange(temperature) {
    this.setState({ scale: "f", temperature });
  }

  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius =
      scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit =
      scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;
    return (
      <div>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange}
        />
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange}
        />
        <BoilingVerdict celsius={parseFloat(celsius)} />
      </div>
    );
  }
}

root.render(<Calculator />);
*/

/**
 * Composition vs Inheritance
 */

/*
function FancyBorder(props) {
  return (
    <div className={"FancyBorder FancyBorder-" + props.color}>
      {props.children}
    </div>
  );
}

function Dialog(props) {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">{props.title}</h1>
      <p className="Dialog-message">{props.message}</p>
      {props.children}
    </FancyBorder>
  );
}

function WelcomeDialog() {
  return (
    <Dialog title="Welcome" message="Thank you for visiting our spacecraft!" />
  );
}

class SingUpDialog extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.state = { login: "" };
  }

  handleChange(e) {
    this.setState({ login: e.target.value });
  }

  handleSignUp() {
    console.log(`Welcome abroad, ${this.state.login}`);
  }

  render() {
    return (
      <Dialog
        title="Mars Exploration Program"
        message="How should we refer to you?"
      >
        <input value={this.state.login} onChange={this.handleChange} />
        <button onClick={this.handleSignUp}>Sign Me Up</button>
      </Dialog>
    );
  }
}

root.render(<SingUpDialog />);
*/

/**
 * Thinking in React
 */

const PRODUCTS = [
  {
    category: "Sporting Goods",
    price: "$49.99",
    stocked: true,
    name: "Football",
  },
  {
    category: "Sporting Goods",
    price: "$9.99",
    stocked: true,
    name: "Baseball",
  },
  {
    category: "Sporting Goods",
    price: "$29.99",
    stocked: false,
    name: "Basketball",
  },
  {
    category: "Electronics",
    price: "$99.99",
    stocked: true,
    name: "iPod Touch",
  },
  {
    category: "Electronics",
    price: "$399.99",
    stocked: false,
    name: "iPhone 5",
  },
  { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" },
];

class ProductRow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { price, name, stocked } = this.props.product;

    const outOfStockClass = stocked ? "" : "outOfStock";
    return (
      <tr>
        <td className={outOfStockClass}>{name}</td>
        <td>{price}</td>
      </tr>
    );
  }
}

class ProductCategoryRow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <tr>
        <th colSpan="2">{this.props.category}</th>
      </tr>
    );
  }
}

class ProductTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const products = this.props.products;
    const filterText = this.props.filterText;
    const inStockOnly = this.props.inStockOnly;
    const rows = [];
    let lastCategory = null;

    products.forEach((product) => {
      const category = product.category;

      if (product.name.toLowerCase().indexOf(filterText) === -1) {
        return;
      }

      if (inStockOnly && !product.stocked) {
        return;
      }

      if (lastCategory !== category) {
        rows.push(
          <ProductCategoryRow
            key={product.category}
            category={product.category}
          />
        );
        lastCategory = category;
      }

      rows.push(<ProductRow key={product.name} product={product} />);
    });

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
  }

  handleInputChange(e) {
    const value = e.target.value;
    this.props.onHandleInputChange(value);
  }

  handleCheckboxChange(e) {
    const value = e.target.checked;
    this.props.onHandleCheckboxChange(value);
  }

  render() {
    const filterText = this.props.filterText;

    return (
      <div>
        <input
          type="text"
          placeholder="Search..."
          onChange={this.handleInputChange}
          value={filterText}
        />
        <p>
          <input
            type="checkbox"
            onChange={this.handleCheckboxChange}
            checked={this.props.inStockOnly}
          />
          Only show products in stock
        </p>
      </div>
    );
  }
}

class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.onHandleInputChange = this.onHandleInputChange.bind(this);
    this.onHandleCheckboxChange = this.onHandleCheckboxChange.bind(this);
    this.state = { filterText: "", inStockOnly: false };
  }

  onHandleInputChange(value) {
    this.setState({ filterText: value });
  }

  onHandleCheckboxChange(value) {
    this.setState({ inStockOnly: value });
  }

  render() {
    return (
      <div>
        <SearchBar
          onHandleInputChange={this.onHandleInputChange}
          onHandleCheckboxChange={this.onHandleCheckboxChange}
          filterText={this.state.filterText}
        />
        <ProductTable
          products={this.props.products}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
        />
      </div>
    );
  }
}

root.render(<FilterableProductTable products={PRODUCTS} />);
