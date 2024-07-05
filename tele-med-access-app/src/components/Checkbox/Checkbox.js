export const Checkbox = ({
  onChange,
  id,
  name,
  checked,
  label
}) => {
  const handleLabelClick = () => {
    onChange();
  };

  return (
    <>
      <input
        type="checkbox"
        onClick={handleLabelClick}
        id={id}
        name={name}
        value={id}
        onChange={onChange}
        checked={checked}
      />
      <label>{label}</label>
      <br></br>
    </>
  );
};
