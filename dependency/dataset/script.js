document.addEventListener('DOMContentLoaded', function () {
    fetch('List of Unicorns in the World.csv')
    .then(response => response.text())
    .then(csvData => {
        const tableContainer = document.getElementById('table-container');
        const lines = csvData.split('\n');
        const headers = lines[0].split(',');

        const table = document.createElement('table');
        const thead = document.createElement('thead');
        const tbody = document.createElement('tbody');

        const headerRow = document.createElement('tr');
        headers.forEach(headerText => {
            const th = document.createElement('th');
            th.textContent = headerText;
            headerRow.appendChild(th);
        });
        thead.appendChild(headerRow);
        table.appendChild(thead);

        for (let i = 1; i < lines.length; i++) {
            const cells = lines[i].split(',');
            if (cells.length === headers.length) {
                const row = document.createElement('tr');
                cells.forEach(cellText => {
                    const td = document.createElement('td');
                    td.textContent = cellText;
                    row.appendChild(td);
                });
                tbody.appendChild(row);
            }
        }
        table.appendChild(tbody);
        tableContainer.appendChild(table);
    });
});
