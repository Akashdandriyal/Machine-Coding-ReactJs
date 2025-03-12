const Profile = ({ tabData, setTabData, errors }) => {
  const { name, age, email } = tabData;
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTabData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <div className="profile-tab">
      <div>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleInputChange}
        />
        {errors.name && <p className="error">{errors.name}</p>}
      </div>
      <div>
        <label htmlFor="age">Age: </label>
        <input
          type="number"
          name="age"
          value={age}
          onChange={handleInputChange}
        />
        {errors.age && <p className="error">{errors.age}</p>}
      </div>
      <div>
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleInputChange}
        />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>
    </div>
  );
};

export default Profile;
