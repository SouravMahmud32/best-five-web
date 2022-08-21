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
    const playerName = player.parentNode.parentNode.children[0].innerText;

    const playerObject = {
        playerName: playerName
    }
    playerListArray.push(playerObject);
    displayPlayerName(playerListArray);
}