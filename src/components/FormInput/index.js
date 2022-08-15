import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

const FormInput = ({ label, value, handleOnChange, type = "text" }) => {
  return (
    <Row>
      <Col>
        {" "}
        <Form.Label htmlFor="inputPassword5">{label}</Form.Label>
      </Col>
      <Col>
        {" "}
        <Form.Control type={type} value={value} onChange={handleOnChange} />
      </Col>
    </Row>
  );
};
export default FormInput;
