import { Text, View } from "react-native";

function ExpensesSummary({ expenses, timePeriod }) {
  const expensesSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);

  return (
    <View>
      <Text>{timePeriod}</Text>
      <Text>£{expensesSum.toFixed(2)}</Text>
    </View>
  );
}

export default ExpensesSummary;
