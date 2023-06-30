import React from "react";
import { MdEdit, MdDelete } from "react-icons/md";
import { FaDollarSign } from "react-icons/fa";

export const ExpenseItem = ({ expense, handleEdit, handleDelete }) => {
  const { id, charge, amount, backgroundColor } = expense;

  return (
    <li className="item">
      <div className="info">
        <span className="expense">{charge}</span>
        <span className="amount" style={{ backgroundColor }}>
          {amount}
          <FaDollarSign />
        </span>
      </div>

      <div>
        <button
          className="edit-btn"
          aria-label="edit button"
          onClick={() => handleEdit(id)}
        >
          <MdEdit color="rgb(255, 81, 0)" />
        </button>
        <button
          className="clear-btn"
          aria-label="delete button"
          onClick={() => handleDelete(id)}
        >
          <MdDelete color="black" />
        </button>
      </div>
    </li>
  );
};
