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

// Members
const membersTable = document.getElementById('trip-members');
const addMembersForm = document.getElementById('add-member');
const nameInput = document.getElementById('name');

function renderMembers() {
  // Clear table
  membersTable.innerHTML = "";

  // Add to members table
  tripData.members.forEach(member => {
    const row = membersTable.insertRow();
    const cell = row.insertCell();
    cell.textContent = member;
  });

  // Add member to dropdown
  tripData.members.forEach(member => {
    // const paidOption = document.createElement("option");
    // paidOption.value = memberName;
    // paidOption.textContent = memberName;
    // expensesInputPaidBy.appendChild(paidOption);

    // const owedOption = document.createElement("option");
    // owedOption.value = memberName;
    // owedOption.textContent = memberName;
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
// const expenseTypeSelect = document.getElementById("expenseType");

function renderCategories() {
  // Clear dropdown
  categoryTypeSelect.innerHTML = "";

  // Add to categories dropdown
  tripData.categories.forEach(category => {
    const option = document.createElement("option");
    option.value = category.toLowerCase().replace(/\s+/g, "-");
    option.textContent = category;
    categoryTypeSelect.appendChild(option);
    // expenseTypeSelect.appendChild(option.cloneNode(true)); // maybe make it the same id
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

/*
// Adding New Expenses to the Trip Expenses Table
const addExpenseForm = document.getElementById('add-expense');
const expensesTable = document.getElementById('trip-expenses');
const expensesInputDate = document.getElementById('date');
const expenseInputExpense = document.getElementById('expense');
const expensesInputAmount = document.getElementById('amount');
const expenseInputType = document.getElementById('expenseType');
const expensesInputPaidBy = document.getElementById('paidBy');
const expenseInputOwedBy = document.getElementById('owedBy');

const today = new Date().toISOString().split("T")[0];
expensesInputDate.value = today;

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

  // replace this with function to populate tables
  row.insertCell(0).textContent = date;
  row.insertCell(1).textContent = expense;
  row.insertCell(2).textContent = `$${amount}`;
  row.insertCell(3).textContent = type;
  row.insertCell(4).textContent = paidBy;
  row.insertCell(5).textContent = owedBy;

  // Reset form
  addExpenseForm.reset();
  expensesInputDate.value = new Date().toISOString().split("T")[0];
  console.log(expenses)
});

// function to add to expenses array
function addExpense() {
  
}

function renderExpenseCategories() {
  
}
// create functions to delete items from tables


// create function to delete member - would it delete calculations?

// create function to add or delete trips

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
  });
}

function renderExpenses() {
  // Clear existing rows (except header)
  expensesTable.innerHTML = `
    <tr>
      <th>Date</th>
      <th>Expense</th>
      <th>Amount</th>
      <th>Type</th>
      <th>Paid By</th>
      ${members.map(m => `<th>${m}</th>`).join('')}
    </tr>
  `;

  expenses.forEach(exp => {
    const row = expensesTable.insertRow();
    row.insertCell(0).textContent = formatDate(exp.Date);
    row.insertCell(1).textContent = exp.Expense;
    row.insertCell(2).textContent = `$${exp.Amount}`;
    row.insertCell(3).textContent = exp.Type;
    row.insertCell(4).textContent = exp.PaidBy;

    members.forEach(member => {
      const splitAmount = exp.Split?.[member.replace(/\s+/g, "")] || "$0";
      row.insertCell().textContent = splitAmount;
    });
  });
}

function calculateSummary() {
  const summary = [];
  return summary;
}
*/