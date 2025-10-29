

document.getElementById("addBtn").onclick = function() 
{

  
  let name = document.getElementById("expenseName").value;
  let amount = document.getElementById("expenseAmount").value;
  let category = document.getElementById("expenseCategory").value;
  let date = document.getElementById("expenseDate").value;

  
  let newExpense = document.createElement("div");
  newExpense.className = "expense-box";
  newExpense.innerHTML = name + " - ₹" + amount + "Category:" + category + " Date: " + date;

  
  let delButton = document.createElement("button");
  delButton.innerText = "X";
  delButton.className = "delete-btn";

  
  delButton.onclick = function() {
    newExpense.remove();
  }

  
  newExpense.appendChild(delButton);
 document.getElementById("expenseContainer").appendChild(newExpense);
  document.getElementById("expenseName").value = "";
  document.getElementById("expenseAmount").value = "";
  document.getElementById("expenseCategory").value = "";
  document.getElementById("expenseDate").value = "";
}


