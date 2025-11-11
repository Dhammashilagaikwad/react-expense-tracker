import { BrowserRouter, Routes, Route } from "react-router";
import App from "../App";
import AddExpenseForm from "./AddExpenseForm";
import Summary from "./Summary";
import TransactionList from "./TransactionList";
import AddBudget from "./AddBudget";

var projectRoute = (
    <BrowserRouter>
        <Routes>
            <Route path="" element={<App />}>
             <Route index element={<AddExpenseForm />} />
                <Route path="/add-transaction" element={<AddExpenseForm />} />
                <Route path="/add-budget" element={<AddBudget />} />
                <Route path="/budget-management" element={<Summary />} />
                <Route path="/transaction-list" element={<TransactionList />} />
            </Route>
        </Routes>
    </BrowserRouter>
)

export default projectRoute;
