import "./Switch.css";

const Switch = ({ isOn, onToggle = () => {}, label, name }) => {
  return (
    <div className="switch">
      <label>
        <input
          type="checkbox"
          role="switch"
          name={name}
          checked={isOn}
          onChange={onToggle}
          aria-checked={isOn}
        />
        <span className="slider"></span>
        {label && <span className="switch-label">{label}</span>}
      </label>
    </div>
  );
};

export default Switch;
