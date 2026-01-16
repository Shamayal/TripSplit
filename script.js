let members = [
  'Member A',
  'Member B'
];

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

const membersForm = document.getElementById('add-member');
const membersTable = document.getElementById('trip-members');
const nameInput = document.getElementById('name');

membersForm.addEventListener("submit", function (event) {
  event.preventDefault();
  
  const memberName = nameInput.value.trim();
  if (memberName === "") return;
  
  const row = membersTable.insertRow();
  const cell = row.insertCell(0);
  cell.textContent = name;

  nameInput.value = "";

});