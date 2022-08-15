import { useDispatch, useSelector } from "react-redux";
import { deposit, withdraw, reset } from "./store/balance/slice";
import { selectBalance } from "./store/balance/selectors";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ButtonComponent from "./components/ButtonComponent";
import FormInput from "./components/FormInput";
import { useState } from "react";
import { Row, Col } from "react-bootstrap";

function App() {
  const dispatch = useDispatch();
  const balance = useSelector(selectBalance);
  const [customDeposit, setCustomDeposit] = useState(null);

  return (
    <div className=" container page-container shadow-sm p-3 mb-5 bg-body rounded ">
      <h1> Balance : {balance} </h1>
      <Row className="button-container">
        <Col>
          <ButtonComponent
            label="Deposit 10$"
            handleOnClick={() => dispatch(deposit(10))}
          />
        </Col>
        <Col>
          <ButtonComponent
            label="Withdrow 10$"
            handleOnClick={() => dispatch(withdraw(10))}
          />
        </Col>
        <Col>
          <ButtonComponent
            label="Reset"
            handleOnClick={() => {
              dispatch(reset());
            }}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <FormInput
            label="Custom Deposit :"
            value={customDeposit}
            handleOnChange={(event) => {
              setCustomDeposit(parseInt(event.target.value));
            }}
            type="number"
          />
        </Col>
        <Col>
          <ButtonComponent
            label="Deposit"
            handleOnClick={() => {
              dispatch(deposit(customDeposit));
              setCustomDeposit(null);
            }}
          />
        </Col>
      </Row>
    </div>
  );
}

export default App;
