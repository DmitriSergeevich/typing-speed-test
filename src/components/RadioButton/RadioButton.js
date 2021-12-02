const RadioButton = ({id, lable, name, callback, isDefault}) => {
  return (
    <div className="form-check">
      <input
        className="form-check-input"
        type="radio"
        name={name}
        id={id}
        onClick={callback}
        defaultChecked={isDefault === id ? true : false}
      />
      <label className="form-check-label" htmlFor={id}>
        {lable}
      </label>
    </div>
  );
};

export default RadioButton;