import { View } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "Wild Country Helm Elite 1",
    amount: 225.0,
    date: new Date("2026-04-20"),
  },
  {
    id: "e2",
    description: "Norway Home Shirt",
    amount: 82.98,
    date: new Date("2026-06-09"),
  },
  {
    id: "e3",
    description: "Otimos Camping Chair",
    amount: 45.29,
    date: new Date("2026-06-05"),
  },
  {
    id: "e4",
    description: "The Children of Ash & Elm",
    amount: 14.1,
    date: new Date("2026-06-08"),
  },
  {
    id: "e5",
    description: "Penny",
    amount: 14500.0,
    date: new Date("2026-05-02"),
  },
];

function ExpensesOutput({ expenses, timePeriod }) {
  return (
    <View>
      <ExpensesSummary expenses={DUMMY_EXPENSES} timePeriod={timePeriod} />
      <ExpensesList />
    </View>
  );
}

export default ExpensesOutput;
