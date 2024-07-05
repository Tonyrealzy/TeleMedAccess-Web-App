const Radio = ({
  value,
  onChecked,
  label,
  name,
  checked,
}) => (
  <>
    <input
      id={`${name}-${value}`}
      type="radio"
      name={name}
      value={value}
      onChange={onChecked}
      checked={checked}
    />
    <label htmlFor={`${name}-${value}`}>
      <span>{label}</span>
    </label>
  </>
);

const Radios = ({
  choices = [],
  onChange,
  name,
  selectedRadio,
}) => (
  <>
    {Array.isArray(choices) &&
      choices.length > 0 &&
      choices.map((choice) => {
        const { id, text = "", label = "" } = choice;
        return (
          <Radio
            key={id}
            value={id}
            onChecked={() => onChange(choice)}
            label={label || text}
            name={name}
            checked={selectedRadio === id}
          />
        );
      })}
  </>
);

export default Radios;
