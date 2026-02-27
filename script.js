let tripData = {
  members: ['Member A', 'Member B'],
  categories: [
    'Food 🌯',
    'Transportation ✈️',
    'Souvenirs',
    'Entertainment',
    'Miscellaneous'
  ],
  expenses: [
    {
      Date: 'Feb 24, 2025',
      Expense: 'Pistachio Croissant',
      Amount: 5,
      Type: 'Food 🌯',
      PaidBy: 'Member A'
    }
  ]
};

const expensesInputPaidBy = document.getElementById('paidBy');
// const expensesInputOwedBy = document.getElementById('owedBy');

// Members
const membersTable = document.getElementById('trip-members');
const addMembersForm = document.getElementById('add-member');
const nameInput = document.getElementById('name');

function renderMembers() {
  // Clear table
  membersTable.innerHTML = "";
  expensesInputPaidBy.innerHTML = "";
  // expensesInputOwedBy.innerHTML = "";

  // Add to members table
  tripData.members.forEach(member => {
    const row = membersTable.insertRow();
    const cell = row.insertCell();
    cell.textContent = member;
  });

  // Add member to dropdowns
  tripData.members.forEach(member => {
    const paidOption = document.createElement("option");
    paidOption.value = member;
    paidOption.textContent = member;
    expensesInputPaidBy.appendChild(paidOption);

    // const owedOption = document.createElement("option");
    // owedOption.value = member;
    // owedOption.textContent = member;
    // expensesInputOwedBy.appendChild(owedOption);
  });
}

addMembersForm.addEventListener("submit", function (event) {
  event.preventDefault();
  
  const memberName = nameInput.value.trim();
  // empty input
  if (!memberName) return;

  // check for duplicates (case-insensitive)
  const duplicateName = tripData.members.find(
    member => member.toLowerCase() === memberName.toLowerCase()
  );

  if (duplicateName) {
    alert(`${duplicateName} is already a member!`);
    return;
  }

  // Add to members array in trip data 
  tripData.members.push(memberName);

  // Clear input
  nameInput.value = "";

  // Re-render table and dropdowns
  renderMembers();
});

renderMembers();

// Categories
const addCategoryForm = document.getElementById("add-category");
const categoryTypeSelect = document.getElementById("categoryType");
const categoryNameInput = document.getElementById("categoryName");
// Dropdown in the Add Expense form
const expenseTypeSelect = document.getElementById("expenseType");

function renderCategories() {
  // Clear dropdown
  categoryTypeSelect.innerHTML = "";
  expenseTypeSelect.innerHTML = "";

  // Add to categories dropdown
  tripData.categories.forEach(category => {
    const option = document.createElement("option");
    option.value = category.toLowerCase().replace(/\s+/g, "-");
    option.textContent = category;
    categoryTypeSelect.appendChild(option);
    expenseTypeSelect.appendChild(option.cloneNode(true)); // maybe make it the same id
  })
}

addCategoryForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const categoryName = categoryNameInput.value.trim();
  if (!categoryName) return;

  // Add to categories array in trip data
  tripData.categories.push(categoryName);

  // Clear input
  categoryNameInput.value = "";

  // Re-render dropdown
  renderCategories();
  addCategoryForm.reset();
});

renderCategories();

// Expenses
const addExpenseForm = document.getElementById("add-expense");
const expensesInputDate = document.getElementById('date');
const expensesInputExpense = document.getElementById('expense');
const expensesInputAmount = document.getElementById('amount');
const expenseInputCategory = document.getElementById('expenseType');

const today = new Date().toISOString().split("T")[0];

// Set default date to current date
expensesInputDate.value = today;

addExpenseForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const date = expensesInputDate.value;
  const expense = expensesInputExpense.value.trim();
  const amount = expensesInputAmount.value;
  const type = expenseInputCategory.value;
  const paidBy = expensesInputPaidBy.value;
  // const owedBy = expensesInputOwedBy.value;

  // if (!date || !expense || !amount || !type || !paidBy || !owedBy) return;
  if (!date || !expense || !amount || !type || !paidBy) return;

  // Create new expense object
  const newExpense = {
    Date: date,
    Expense: expense,
    Amount: amount,
    Type: type,
    PaidBy: paidBy,
    // OwedBy: owedBy
  };

  // Push into expenses array
  tripData.expenses.push(newExpense);

  console.log("New expense added:", newExpense);
  console.log("Updated expenses array:", tripData.expenses);

  // Reset form
  addExpenseForm.reset();
  expensesInputDate.value = today;
});

const expensesTable = document.getElementById('trip-expenses');

function renderExpenses() {
  // Clear table
  expensesTable.innerHTML = `
    <tr>
      <th>Date</th>
      <th>Expense</th>
      <th>Amount</th>
      <th>Type</th>
      <th>Paid By</th>
      <th>Owed By</th>
    </tr>
  `;

  // Add to expenses table
  tripData.expenses.forEach(expense => {
    const row = expensesTable.insertRow();
    row.insertCell(0).textContent = expense.Date;
    row.insertCell(1).textContent = expense.Expense;
    row.insertCell(2).textContent = `$${expense.Amount.toFixed(2)}`;
    row.insertCell(3).textContent = expense.Type;
    row.insertCell(4).textContent = expense.PaidBy;
    row.insertCell(5).textContent = expense.OwedBy;
  });
}

renderExpenses();
/*

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
  });
}

/*
function calculateSummary() {
  const summary = [];
  return summary;
}
*/