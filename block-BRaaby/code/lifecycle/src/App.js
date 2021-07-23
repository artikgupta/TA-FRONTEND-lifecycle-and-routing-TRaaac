import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
      isLoading: false,
      title: "My name is",
      value: "",
    };
  }

  getUser = () => {
    this.setState({
      isLoading: true,
    });
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          user: data.results[0],
          isLoading: false,
          value: data.results[0].name?.first + " " + data.results[0].name?.last,
        })
      );
  };

  componentDidMount() {
    this.getUser();
  }

  handleClick = (val) => {
    switch (true) {
      case val === "Email":
        console.log(val);
        this.setState((preState) => {
          return {
            title: "My Email is",
            value: preState.user.email,
          };
        });
        break;
      case val == "Age":
        this.setState((preState) => {
          return {
            title: "My Age is",
            value: preState.user.dob.age,
          };
        });
        break;
        case val == "PhoneNumber":
            this.setState((preState) => {
                return {
                  title: "My PhoneNumber is",
                  value: preState.user.phone,
                };
              });
              break;
              case val == "Address":
                this.setState((preState) => {
                    return {
                      title: "My Address is",
                      value: preState.user.location.city,
                    };
                  });
                  break;
                  case val == "Password":
                    this.setState((preState) => {
                        return {
                          title: "My Password is",
                          value: preState.user.login.password,
                        };
                      });
                      break;
      default:
        break;
    }
  };

  render() {
    let { user, isLoading, title, handleClick, value } = this.state;
    return (
      <div>
        <img src={user.picture?.large} />
        <p>
          {title} {value}
        </p>
        {/* <p>Email:{user.email}</p> */}
        {/* <p>Age:{user.dob?.age}</p> */}
        <button onClick={() => this.handleClick("Email")}>Email</button>
        <button onClick={() => this.handleClick("Age")}>Age</button>
        <button onClick={() => this.handleClick("PhoneNumber")}>
          PhoneNumber
        </button>
        <button onClick={() => this.handleClick("Address")}>Address</button>
        <button onClick={() => this.handleClick("Password")}>Password</button>
        <button onClick={this.getUser}>
          {isLoading ? "Loading..." : "Random User"}{" "}
        </button>
      </div>
    );
  }
}

export default App;
