import { createContext, useReducer } from "react";
import { TransactionReducer } from "./ExpenseReducer";

type transObject = {
  amount: number;
  desc: string;
};

interface initialState {
  transactions: transObject[];
  addTransaction: (amount: number, desc: string) => void;
  deleteTransaction: (actionId: number) => void;
}

// const initialTransactions: any = {};

const initialTransactions: initialState = {
  transactions: [
    { amount: 300, desc: "deposit" },
    { amount: -140, desc: "chicken meet" },
    { amount: -60, desc: "vegitable" },
  ],
  addTransaction: () => {},
  deleteTransaction: () => {},
};
export const TransactionContext = createContext(initialTransactions);

export const TransactionProvider = ({ children }: { children: any }) => {
  let [transactions, dispatch] = useReducer(
    TransactionReducer,
    initialTransactions.transactions
  );
  //   console.log(state);

  const addTransaction = (amount: number, desc: string) => {
    dispatch({
      type: "add_transaction",
      payload: {
        amount: amount,
        desc: desc,
      },
    });
  };

  function deleteTransaction(actionId: number) {
    dispatch({
      type: "delete_transaction",
      payload: actionId,
    });
  }

  return (
    <TransactionContext.Provider
      value={{
        transactions,
        addTransaction,
        deleteTransaction,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
