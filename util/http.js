import axios from "axios";

const apiUrl =
  "https://react-native-course-b4077-default-rtdb.europe-west1.firebasedatabase.app";

export async function storeExpense(expenseData) {
  const response = await axios.post(apiUrl + "/expenses.json", expenseData);
  // auto generated id is called name
  const id = response.data.name;
  return id;
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

export function updateExpense(id, expenseData) {
  return axios.put(apiUrl + `/expenses/${id}.json`, expenseData);
}

export function deleteExpense(id) {
  return axios.delete(apiUrl + `/expenses/${id}.json`);
}
