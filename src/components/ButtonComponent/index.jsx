import Button from "react-bootstrap/Button";

const ButtonComponent = ({ label, handleOnClick }) => {
  return (
    <div>
      <Button variant="primary" onClick={handleOnClick}>
        {label}
      </Button>
    </div>
  );
};
export default ButtonComponent;
