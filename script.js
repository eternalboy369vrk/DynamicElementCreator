document.getElementById('createButton').addEventListener('click', function() {
    const command = document.getElementById('commandInput').value.trim().toLowerCase();
    const outputDiv = document.getElementById('output');

    if (command === 'create div') {
        const newDiv = document.createElement('div');
        newDiv.textContent = 'This is a new div!';
        newDiv.style.border = '1px solid white';
        newDiv.style.margin = '5px 0';
        newDiv.style.padding = '5px';
        outputDiv.appendChild(newDiv);
    } else if(command==='create textarea'){
        const newarea = document.createElement('textarea');
        newarea.textContent = 'This is a Text Area';
        newarea.style.backgroundColor="rgb(14, 7, 7)";
        newarea.style.textAlign="center";
        newarea.style.color="white";
        outputDiv.appendChild(newarea);
    }else if (command === 'create input field') {
        const newInput = document.createElement('input');
        newInput.type = 'text';
        newInput.placeholder = 'New input field';
        newInput.style.backgroundColor="#312222";
        newInput.style.width="280px";
        newInput.style.textAlign="center";
        newInput.style.color = "white";
        outputDiv.appendChild(newInput);
    } else if (command === 'create table') {
        const newTable = document.createElement('table');
        newTable.style.borderCollapse = 'collapse';
        newTable.style.width = '100%';

        const newRow = newTable.insertRow();
        const cell1 = newRow.insertCell(0);
        const cell2 = newRow.insertCell(1);
        cell1.textContent = 'Cell 1';
        cell2.textContent = 'Cell 2';
        cell1.style.border = '1px solid black';
        cell2.style.border = '1px solid black';
        cell1.style.padding = '5px';
        cell2.style.padding = '5px';

        outputDiv.appendChild(newTable);
    } else if (command.startsWith('create table with')) {
        const dimensions = command.split('with')[1].trim();
        const [rows, cols] = dimensions.split('*').map(Number);

        if (!isNaN(rows) && !isNaN(cols) && rows > 0 && cols > 0) {
            const newTable = document.createElement('table');

            for (let i = 0; i < rows; i++) {
                const newRow = newTable.insertRow();
                for (let j = 0; j < cols; j++) {
                    const newCell = newRow.insertCell();
                    newCell.textContent = `Row ${i + 1}, Cell ${j + 1}`;
                    newCell.setAttribute('contenteditable', 'true');
                }
            }

            outputDiv.appendChild(newTable);
        } else {
            alert('Invalid dimensions. Please use the format "create table with X*Y" where X and Y are positive integers.');
        }
    }else if (command.startsWith('clear')) {
const clearCommands = command.split(',').map(cmd => cmd.trim());

clearCommands.forEach(cmd => {
    if (cmd === 'clear div') {
        const divs = outputDiv.querySelectorAll('div');
        divs.forEach(div => div.remove());
    } else if (cmd === 'clear input field') {
        const inputs = outputDiv.querySelectorAll('input');
        inputs.forEach(input => input.remove());
    } else if (cmd === 'clear table') {
        const tables = outputDiv.querySelectorAll('table');
        tables.forEach(table => table.remove());
    }else if(cmd==='clear textarea'){
        const textarea=outputDiv.querySelectorAll('textarea');
        textarea.forEach(textarea=>textarea.remove());
    } else {
        alert(`Unknown command: ${cmd}`);
    }
});
} else {
        alert('Unknown command. Please try "create div", "create input field", or "create table".');
    }

    // Clear the input field
    document.getElementById('commandInput').value = '';
});