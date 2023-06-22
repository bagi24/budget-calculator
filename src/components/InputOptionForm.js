import React, { useState } from "react";

const InputOptionForm = () => {
  const [selects, setSelects] = useState();
  const [selectedValue, setSelectedValue] = useState("");

  const handleSelect = (e) => {
    setSelects(e.target.value);
    setSelectedValue(e.target.value);
  };

  return (
    <div>
      <div className="form-group">
        <select
          value={selects}
          onChange={handleSelect}
          className="form-control"
        >
          <option> ბიუჯეტი</option>
          <option> დანახარჯი</option>
        </select>
      </div>
      {selectedValue && <div>Selected Value: {selectedValue}</div>}
    </div>
  );
};

export default InputOptionForm;
