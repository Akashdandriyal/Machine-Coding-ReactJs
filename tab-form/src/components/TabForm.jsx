import { useState } from "react";
import Interests from "./Interests";
import Profile from "./Profile";
import Settings from "./Settings";

const TabForm = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [tabData, setTabData] = useState({
    name: "",
    age: "",
    email: "",
    interests: [],
    theme: "",
  });
  const [errors, setErrors] = useState({});

  const tabs = [
    {
      title: "Profile",
      component: Profile,
      validate: () => {
        const { name, age, email } = tabData;
        const errors = {};
        if (!name || name.trim() === "") {
          errors.name = "Name is invalid";
        }
        if (!age || age < 0 || age > 120) {
          errors.age = "Age is invalid";
        }
        if (
          !email ||
          !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email)
        ) {
          errors.email = "Email is invalid";
        }
        setErrors(errors);
        return Object.keys(errors).length === 0;
      },
    },
    {
      title: "Interests",
      component: Interests,
      validate: () => {
        const { interests } = tabData;
        const errors = {};
        if (interests.length === 0) {
          errors.interests = "Select at least one interest";
        }
        setErrors(errors);
        return Object.keys(errors).length === 0;
      },
    },
    {
      title: "Settings",
      component: Settings,
      validate: () => {
        const { theme } = tabData;
        const errors = {};
        if (!theme || theme.trim() === "") {
          errors.theme = "Select a theme";
        }
        setErrors(errors);
        return Object.keys(errors).length === 0;
      },
    },
  ];

  const ActiveTabComponent = tabs[activeTab].component;

  const handleNextClick = () => {
    if (tabs[activeTab].validate()) {
      setActiveTab((prevTab) => prevTab + 1);
    }
  };

  const handleBackClick = () => {
    setActiveTab((prevTab) => prevTab - 1);
  };

  const handleSubmit = () => {
    if (tabs[activeTab].validate()) {
      console.log(tabData);
      alert("Form submitted successfully");
    }
  };

  return (
    <div>
      <div className="tabs-header">
        {tabs.map((tab, index) => (
          <div
            className={`tab-heading ${activeTab === index ? "active" : ""}`}
            key={index}
          >
            {tab.title}
          </div>
        ))}
      </div>
      <div className="tab-content">
        <ActiveTabComponent
          tabData={tabData}
          setTabData={setTabData}
          errors={errors}
        />
      </div>
      <div className="buttons">
        {activeTab > 0 && <button onClick={handleBackClick}>Back</button>}
        {activeTab < tabs.length - 1 && (
          <button onClick={handleNextClick}>Next</button>
        )}
        {activeTab === tabs.length - 1 && (
          <button onClick={handleSubmit}>Submit</button>
        )}
      </div>
    </div>
  );
};

export default TabForm;
