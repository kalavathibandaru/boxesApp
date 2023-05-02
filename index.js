const Box = (props) => {
  const { className, text } = props;
  return (
    <div className={className}>
      <p className="paragraph">{text}</p>
    </div>
  );
};

const element = (
  <div className="bg-container">
    <h1 className="heading"> Boxes </h1>
    <div className="flex-container">
      <Box className="yellow-container" text="Small" />
      <Box className="blue-container" text="Medium" />
      <Box className="pink-container" text="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
