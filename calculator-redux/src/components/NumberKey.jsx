import Button from "react-bootstrap/Button";

const NumberKey = ({ numberKey, handleClickNumberKey }) => {
  const handleClick = () => {
    handleClickNumberKey(numberKey);
  };

  return (
    <Button variant="outline-primary" className="button" onClick={handleClick}>
      {numberKey}
    </Button>
  );
};

export default NumberKey;
