let members = [
  'Member A',
  'Member B'
];

let expenseCategories = {
  food: "Food",
  transportation: "Transportation",
  souvenirs: "Souvenirs",
  entertainment: "Entertainment",
  miscellaneous: "Miscellaneous"
};

let expenses = [
  {
    Date: 'Dec 28, 2025',
    Expense: 'Pistachio Croissant',
    Amount: '$5',
    Type: 'Food',
    PaidBy: 'Member A',
    Split: {
      MemberA: '$2.50',
      MemberB: '$2.50',
    }
  }
];

// Adding New Members to the Members Table
const addMembersForm = document.getElementById('add-member');
const membersTable = document.getElementById('trip-members');
const nameInput = document.getElementById('name');

addMembersForm.addEventListener("submit", function (event) {
  event.preventDefault();
  
  const memberName = nameInput.value.trim();
  if (memberName === "") return;
  
  const row = membersTable.insertRow();
  const cell = row.insertCell(0);
  cell.textContent = memberName;

  nameInput.value = "";

});
// Need to add member to add expense drop down and also main tables

// Adding New Expenses to the Trip Expenses Table
const addExpenseForm = document.getElementById('add-expense');
const expensesTable = document.getElementById('trip-expenses');
const expensesInputDate = document.getElementById('date');
const expenseInputExpense = document.getElementById('expense');
const expensesInputAmount = document.getElementById('amount');
const expenseInputType = document.getElementById('expenseType');
const expensesInputPaidBy = document.getElementById('paidBy');
const expenseInputOwedBy = document.getElementById('owedBy');

addExpenseForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const date = expensesInputDate.value;
  const expense = expenseInputExpense.value.trim();
  const amount = expensesInputAmount.value;
  const type = expenseInputType.value;
  const paidBy = expensesInputPaidBy.value;
  const owedBy = expenseInputOwedBy.value;

  if (!date || !expense || !amount || !type || !paidBy || !owedBy) return;

  // Add to array
  expenses.push({
    Date: date,
    Expense: expense,
    Amount: amount,
    Type: type,
    PaidBy: paidBy,
    OwedBy: owedBy
  });

  // Add row to expenses table
  const row = expensesTable.insertRow();

  row.insertCell(0).textContent = date;
  row.insertCell(1).textContent = expense;
  row.insertCell(2).textContent = `$${amount}`;
  row.insertCell(3).textContent = type;
  row.insertCell(4).textContent = paidBy;
  row.insertCell(5).textContent = owedBy;

  // Reset form
  addExpenseForm.reset();
  console.log(expenses)
});