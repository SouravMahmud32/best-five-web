/* Player list part */ 

const playerListArray = [];

function displayPlayerName(AllPlayerName){
    console.log(AllPlayerName);
    const tableBody = document.getElementById('name-display-table');
    tableBody.innerHTML = '';
    for(i = 0; i < AllPlayerName.length; i++){
        const name = playerListArray[i].playerName;

        const tr = document.createElement('tr');
        tr.innerHTML = `
        <th>${i + 1}</th>
        <td>${name}</td>
        `;
        tableBody.appendChild(tr);
    }
}

function addToList(player){
    if(playerListArray.length < 5 ){
    player.setAttribute("disabled", true);

    const playerName = player.parentNode.parentNode.children[0].innerText;

    const playerObject = {
        playerName: playerName
    }
    playerListArray.push(playerObject);
    displayPlayerName(playerListArray);
    }
    else{
        alert('SORRY! You can not select more than Five')
    }
}

/* Calculate Part */ 

document.getElementById('btn-calculate').addEventListener('click', function(){
    const budgetField = document.getElementById('budget-field');
    const budgetAmountString = budgetField.value;
    budgetAmount = parseFloat(budgetAmountString);
    let totalPlayerExpenses = budgetAmount * playerListArray.length;
    

    const playerExpenseTotalElement = document.getElementById('player-expense');
    const previousPlayerExpenseTotalString = playerExpenseTotalElement.innerText;
    const newTotalPlayerExpense = parseFloat(previousPlayerExpenseTotalString);
    playerExpenseTotalElement.innerText = totalPlayerExpenses;
    budgetField.value ='';
});

document.getElementById('btn-total').addEventListener('click', function(){
    const managerField = document.getElementById('manager-field');
    const managerAmountString = managerField.value;
    managerAmount = parseFloat(managerAmountString);

    const coachField = document.getElementById('coach-field');
    const coachAmountString = coachField.value;
    coachAmount = parseFloat(coachAmountString);

    let totalPlayerExpenses = budgetAmount * playerListArray.length;

    let totalCost = totalPlayerExpenses + managerAmount + coachAmount;
    

    const allExpenseTotalElement = document.getElementById('expense-total');
    const previousAllExpenseTotalString = allExpenseTotalElement.value;
    const newAllExpenseTotal = parseFloat(previousAllExpenseTotalString);
    allExpenseTotalElement.innerText = totalCost;
});