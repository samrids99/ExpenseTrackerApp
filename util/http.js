import axios from "axios";

const apiUrl =
  "https://react-native-course-b4077-default-rtdb.europe-west1.firebasedatabase.app";

export function storeExpense(expenseData) {
  axios.post(apiUrl + "/expenses.json", expenseData);
}

export async function fetchExpenses() {
  const response = await axios.get(apiUrl + "/expenses.json");

  const expenses = [];

  for (const key in response.data) {
    const expenseObject = {
      id: key,
      amount: response.data[key].amount,
      date: new Date(response.data[key].date),
      description: response.data[key].description,
    };
    expenses.push(expenseObject);
  }

  return expenses;
}
