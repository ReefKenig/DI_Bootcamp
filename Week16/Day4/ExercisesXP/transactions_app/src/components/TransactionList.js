import React, { Component } from "react";
import { connect } from "react-redux";
import { Delete, updateIndex } from "../redux/actions";
import TransactionForm from "./TransactionForm";

class TransactionList extends Component {
  handleEdit = (index) => {
    this.props.update(index);
  };

  handleDelete = (index) => {
    this.props.delete(index);
  };

  render() {
    return (
      <div>
        <TransactionForm />
        <hr />
        <table>
          <tbody>
            {this.props.list.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.bAccountNo}</td>
                  <td>{item.bName}</td>
                  <td>{item.amount}</td>
                  <td>
                    <button
                      onClick={() => {
                        this.handleEdit(index);
                      }}
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        this.handleDelete(index);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { list: state.list };
};

const mapDispatchToProps = (dispatch) => {
  return {
    update: (index) => {
      dispatch(updateIndex(index));
    },
    delete: (id) => {
      dispatch(Delete(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TransactionList);
