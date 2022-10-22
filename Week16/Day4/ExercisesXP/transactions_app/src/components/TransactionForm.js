import React, { Component } from "react";
import { connect } from "react-redux";
import { insert, update } from "../redux/actions";

class TransactionForm extends Component {
  state = { ...this.returnStateObject() };

  returnStateObject() {
    if (this.props.currentIndex === -1) {
      return {
        bAccountNo: "",
        FSC: "",
        bName: "",
        amount: "",
      };
    } else return this.props.list[this.props.currentIndex];
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.currentIndex !== this.props.currentIndex ||
      prevProps.list.length !== this.props.list.length
    ) {
      this.setState({ ...this.returnStateObject() });
    }
  }

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.props.currentIndex === -1) {
      this.props.insert(this.state);
    } else {
      this.props.update(this.state);
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} autoComplete="off">
          <input
            name="bAccountNo"
            onChange={this.handleInputChange}
            placeholder="Account Number"
            value={this.state.bAccountNo}
          />
          <br />
          <input
            name="FSC"
            onChange={this.handleInputChange}
            placeholder="FSC"
            value={this.state.FSC}
          />
          <br />
          <input
            name="bName"
            onChange={this.handleInputChange}
            placeholder="A/C Holder Name"
            value={this.state.bName}
          />
          <br />
          <input
            name="amount"
            onChange={this.handleInputChange}
            placeholder="Amount"
            value={this.state.amount}
          />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { list: state.list, currentIndex: state.currentIndex };
};

const mapDispatchToProps = (dispatch) => {
  return {
    insert: (data) => dispatch(insert(data)),
    update: (data) => dispatch(update(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TransactionForm);
