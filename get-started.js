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
