const Settings = ({ tabData, setTabData, errors }) => {
  const { theme } = tabData;
  const handleInputChange = (e) => {
    const { value } = e.target;
    setTabData((prevData) => ({
      ...prevData,
      theme: value,
    }));
  };
  return (
    <div className="settings-tab">
      <div>
        <label htmlFor="light">Light</label>
        <input
          type="radio"
          name="light"
          value="light"
          checked={theme === "light"}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="dark">Dark</label>
        <input
          type="radio"
          name="dark"
          value="dark"
          checked={theme === "dark"}
          onChange={handleInputChange}
        />
      </div>
      {errors.theme && <p className="error">{errors.theme}</p>}
    </div>
  );
};

export default Settings;
