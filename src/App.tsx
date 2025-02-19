import React from "react";
import ExpenseCard from "./Components/ExpenseCard";
import "./App.css";
import { TransactionProvider } from "./Components/ExpenseContext";

function App() {
  return (
    <TransactionProvider>
      <div>
        <ExpenseCard />
      </div>
    </TransactionProvider>
  );
}

export default App;
