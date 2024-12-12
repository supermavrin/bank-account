import { useReducer } from "react";
import "./index.css";

/* 
INSTRUCTIONS
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
        return { ...state, balance: state.balance + 150 };
      } else {
        return state;
      }
    case "withdraw":
      if (state.isActive) {
        return { ...state, balance: state.balance - 50 };
      } else {
        return state;
      }
    case "requestLoan":
      if (state.isActive && state.loan === 0) {
        return { ...state, loan: 5000, balance: state.balance + 5000 };
      } else {
        return state;
      }
    case "payLoan":
      if (state.isActive && state.loan > 0) {
        return { ...state, loan: 0, balance: state.balance - 5000 };
      } else {
        return state;
      }
    case "closeAccount":
      if (state.isActive && state.balance === 0) {
        return { ...initialState };
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
        <button
          onClick={() => dispatch({ type: "openAccount" })}
          disabled={isActive}
        >
          Open account
        </button>
      </p>
      <p>
        <button
          onClick={() => dispatch({ type: "deposit" })}
          disabled={!isActive}
        >
          Deposit 150
        </button>
      </p>
      <p>
        <button
          onClick={() => dispatch({ type: "withdraw" })}
          disabled={!isActive}
        >
          Withdraw 50
        </button>
      </p>
      <p>
        <button
          onClick={() => dispatch({ type: "requestLoan" })}
          disabled={!isActive || loan !== 0}
        >
          Request a loan of 5000
        </button>
      </p>
      <p>
        <button
          onClick={() => dispatch({ type: "payLoan" })}
          disabled={!isActive || loan === 0}
        >
          Pay loan
        </button>
      </p>
      <p>
        <button
          onClick={() => dispatch({ type: "closeAccount" })}
          disabled={!isActive || balance !== 0}
        >
          Close account
        </button>
      </p>
    </div>
  );
}
