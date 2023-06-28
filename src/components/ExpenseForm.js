import React from "react";
import { MdSend } from "react-icons/md";

export const ExpenseForm = ({
  charge,
  amount,
  handleCharge,
  handleAmount,
  handleSubmit,
  edit,
  selects,
  handleSelect,
  selectedValue,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-center">
        <div className="form-group">
          <label htmlFor="expense">Charge</label>
          <input
            type="text"
            className="form-control"
            id="charge"
            name="charge"
            placeholder="e.g rent"
            value={charge}
            onChange={handleCharge}
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">amount</label>
          <input
            type="number"
            className="form-control"
            id="amount"
            name="amount"
            placeholder="e.g 100"
            value={amount}
            onChange={handleAmount}
          />
        </div>

        <div>
          <div className="form-group">
            <select
              value={selects}
              onChange={handleSelect}
              className="form-control"
            >
              <option value="">Select an option</option>
              <option value="გაყიდვა"> გაყიდვა</option>
              <option value="ყიდვა"> ყიდვა</option>
            </select>
          </div>
          {selectedValue && <div>Selected Value: {selectedValue}</div>}
        </div>
      </div>
      <button type="submit" className="btn">
        {edit ? "edit" : "submit"}
        <MdSend className="btn-icon" />
      </button>
    </form>
  );
};
