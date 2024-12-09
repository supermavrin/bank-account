import { useReducer } from "react";
import "./index.css";

/* 
INSTRUCTIONS
All operations (expect for opening account) can only be performed if isActive is true. If it's not, just return the original state object. 
You can check this right at the beginning of the reducer. When the account is opened, isActive is set to true. 
There is also a minimum deposit amount of 500 to open an account (which means that the balance will start at 500). 
Customer can only request a loan if there is no loan yet. 
If that condition is met, the requested amount will be registered in the 'loan' state, and it will be added to the balance. 
If the condition is not met, just return the current state. 
When the customer pays the loan, the opposite happens: the money is taken from the balance, and the 'loan' will get back to 0. 
This can lead to negative balances, but that's no problem, because the customer can't close their account now (see next point). 
Customer can only close an account if there is no loan, AND if the balance is zero. 
If this condition is not met, just return the state. 
If the condition is met, the account is deactivated and all money is withdrawn. The account basically gets back to the initial state. 
*/

const initialState = {
  balance: 0,
  loan: 0,
  isActive: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "openAccount":
      return {
        ...state,
        balance: 500,
        isActive: true,
      };
    case "deposit":
      if (state.isActive) {
      } else {
        return state;
      }
    case "withdraw":
      if (state.isActive) {
      } else {
        return state;
      }
    case "requestLoan":
      if (state.isActive) {
      } else {
        return state;
      }
    case "payLoan":
      if (state.isActive) {
      } else {
        return state;
      }
    case "closeAccount":
      if (state.isActive) {
      } else {
        return state;
      }
    default:
      throw new Error("Unknown action");
  }
}

export default function App() {
  const [{ balance, loan, isActive }, dispatch] = useReducer(
    reducer,
    initialState
  );

  return (
    <div className="App">
      <h1>useReducer Bank Account</h1>
      <p>Balance: {balance}</p>
      <p>Loan: {loan}</p>

      <p>
        <button onClick={() => dispatch({ type: "openAccount" })}>
          Open account
        </button>
      </p>
      <p>
        <button onClick={() => {}} disabled={false}>
          Deposit 150
        </button>
      </p>
      <p>
        <button onClick={() => {}} disabled={false}>
          Withdraw 50
        </button>
      </p>
      <p>
        <button onClick={() => {}} disabled={false}>
          Request a loan of 5000
        </button>
      </p>
      <p>
        <button onClick={() => {}} disabled={false}>
          Pay loan
        </button>
      </p>
      <p>
        <button onClick={() => {}} disabled={false}>
          Close account
        </button>
      </p>
    </div>
  );
}
