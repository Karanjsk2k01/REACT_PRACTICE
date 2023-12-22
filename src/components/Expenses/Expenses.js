import ExpenseItem from "./ExpenseItem";
import Card from "../UI/card";
import "./expenses.css";

var Expense = (props) => {

  // const expenses = [
  //   {
  //     id: 'e1',
  //     title: 'Toilet Paper',
  //     amount: 94.12,
  //     date: new Date(2020, 7, 14),
  //     locationOfExpenditure: "HouseHoldItems"
  //   },
  //   {
  //     id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12),
  //     locationOfExpenditure: "Electronics"
  //   },
  //   {
  //     id: 'e3',
  //     title: 'Car Insurance',
  //     amount: 294.67,
  //     date: new Date(2021, 2, 28),
  //     locationOfExpenditure: "Vehicle Related"
  //   },
  //   {
  //     id: 'e4',
  //     title: 'New Desk (Wooden)',
  //     amount: 450,
  //     date: new Date(2021, 5, 12),
  //     locationOfExpenditure: "Stationeries"
  //   },
  // ];

  const expenseData = props.expenseData || [];


  return (
    <Card className="expenses">
      {expenseData.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.Title}
          amount={expense.Amount}
          date={expense.Date}
        // locationOfExpenditure={expense.locationOfExpenditure}
        />
      ))}
    </Card>
  );
}

export default Expense;