const Interests = ({ tabData, setTabData, errors }) => {
  const { interests } = tabData;
  const handleInputChange = (e) => {
    const { name, checked } = e.target;
    setTabData((prevData) => {
      let newInterests = [...prevData.interests];
      if (checked) {
        newInterests.push(name);
      } else {
        newInterests = newInterests.filter((interest) => interest !== name);
      }
      return {
        ...prevData,
        interests: newInterests,
      };
    });
  };
  return (
    <div className="interests-tab">
      <div>
        <label htmlFor="coding">Coding: </label>
        <input
          type="checkbox"
          name="coding"
          checked={interests.includes("coding")}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="reading">Reading: </label>
        <input
          type="checkbox"
          name="reading"
          checked={interests.includes("reading")}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="gaming">Gaming: </label>
        <input
          type="checkbox"
          name="gaming"
          checked={interests.includes("gaming")}
          onChange={handleInputChange}
        />
      </div>
      {errors.interests && <p className="error">{errors.interests}</p>}
    </div>
  );
};

export default Interests;
