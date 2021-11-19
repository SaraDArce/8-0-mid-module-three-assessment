import { Component } from "react";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      creditCard: "",
      zipCode: "",
    };
  }

  handleCustomerInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    return (
      <form
        id="checkout"
        onSubmit={(e) =>
          this.props.handleSubmit(
            e,
            this.state.firstName,
            this.state.lastName,
            this.state.email,
            this.state.zipCode
          )
        }
      >
        <label htmlFor="firstName">First Name</label>
        <input
          onInput={this.handleCustomerInput}
          value={this.state.firstName}
          type="text"
          name="firstName"
          id="first-name"
        />

        <br />
        <label htmlFor="last-name">Last Name</label>
        <input
          onInput={this.handleCustomerInput}
          value={this.state.lastName}
          type="text"
          name="lastName"
          id="last-name"
        />

        <br />
        <label htmlFor="email">Email</label>
        <input
          onInput={this.handleCustomerInput}
          value={this.state.email}
          type="email"
          name="email"
          id="email"
        />

        <br />
        <label htmlFor="credit-card">Credit Card</label>
        <input
          onInput={this.handleCustomerInput}
          value={this.state.creditCard}
          type="number"
          name="creditCard"
          id="credit-card"
        />

        <br />
        <label htmlFor="zip-code">Zip Code</label>
        <input
          onInput={this.handleCustomerInput}
          value={this.state.zipCode}
          type="zip-code"
          name="zip-code"
          id="zip-code"
        />
        <br />
        <button type="text">Buy Now</button>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
