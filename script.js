// Select DOM elements
const expenseName = document.getElementById("expense-name");
const expenseAmount = document.getElementById("expense-amount");
const addExpenseBtn = document.getElementById("add-btn"); // Correct ID
const expenseList = document.getElementById("expense-list");
const totalExpenseDisplay = document.getElementById("total-expense");

let totalExpense = 0;

// Add event listener to the "Add Expense" button
addExpenseBtn.addEventListener("click", () => {
  const name = expenseName.value.trim();
  const amount = parseFloat(expenseAmount.value);

  if (!name || isNaN(amount) || amount <= 0) {
    alert("Please enter valid expense details!");
    return;
  }

  addExpense(name, amount);
  updateTotalExpense(amount);
  clearInputs();
});

// Function to add expense to the list
function addExpense(name, amount) {
  const li = document.createElement("li");
  li.innerHTML = `
    ${name} - ₹${amount.toFixed(2)}
    <button class="delete-btn">Delete</button>
  `;

  // Add delete functionality
  li.querySelector(".delete-btn").addEventListener("click", () => {
    // Show a confirmation dialog before deleting
    const confirmDelete = confirm("Are you sure you want to delete this expense?");
    if (confirmDelete) {
      removeExpense(li, amount);
    }
  });

  expenseList.appendChild(li);
}

// Function to update total expense
function updateTotalExpense(amount) {
  totalExpense += amount;
  totalExpenseDisplay.innerText = totalExpense.toFixed(2);
}

// Function to remove expense from the list
function removeExpense(item, amount) {
  item.remove();
  totalExpense -= amount;
  totalExpenseDisplay.innerText = totalExpense.toFixed(2);
}

// Function to clear input fields
function clearInputs() {
  expenseName.value = "";
  expenseAmount.value = "";
}
