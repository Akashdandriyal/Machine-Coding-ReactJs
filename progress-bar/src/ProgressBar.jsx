const ProgressBar = ({ progress }) => {
  return (
    <div className="progress-bar">
      <div
        className="inner"
        style={{ transform: `translateX(${progress - 100}%)` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
