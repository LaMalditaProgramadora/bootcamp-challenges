import Button from "react-bootstrap/Button";

const OperatorKey = ({ operatorKey, handleClickOperatorKey }) => {
  const handleClick = () => {
    handleClickOperatorKey(operatorKey);
  };

  return (
    <Button variant="outline-danger" className="button" onClick={handleClick}>
      {operatorKey}
    </Button>
  );
};

export default OperatorKey;
