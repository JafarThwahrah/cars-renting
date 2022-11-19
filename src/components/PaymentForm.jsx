import React from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";

export default class PaymentForm extends React.Component {
  state = {
    cvc: "",
    expiry: "",
    focus: "",
    name: "",
    number: "",
  };

  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div id="PaymentForm">
        <Cards
          cvc={this.state.cvc}
          expiry={this.state.expiry}
          focused={this.state.focus}
          name={this.state.name}
          number={this.state.number}
        />
        <form>
          <input
            className="inputField inputFieldNumber"
            type="tel"
            name="number"
            placeholder="Card Number"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />

          <input
            className="inputField"
            type="tel"
            name="name"
            placeholder="Cardholder name"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />

          <input
            className="inputField"
            type="tel"
            name="expiry"
            placeholder="Expiry date"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
          <input
            className="inputField"
            type="tel"
            name="cvc"
            placeholder="cvc"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
          {/* <div>
            <Button
              style={{ margin: "1rem" }}
              type="submit"
              className="btnCheckout"
              variant="contained">
              Check Out
            </Button>
          </div> */}
        </form>
      </div>
    );
  }
}
