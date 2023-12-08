document.addEventListener('DOMContentLoaded', function() {
    var tbody = document.getElementById('dataTable').getElementsByTagName('tbody')[0];

    tableData.forEach(function(rowData) {
        console.log(rowData);
        var row = document.createElement('tr');

        Object.keys(rowData).forEach(function(key) {
            var cell = document.createElement('td');

            if (key === "Test Name") {
                var link = document.createElement('a');
                link.href = "detail.html?id=" + rowData["TestID"];
                link.textContent = rowData[key];
                cell.appendChild(link);
                console.log(link);
            } else {
                cell.textContent = rowData[key];
            }

            row.appendChild(cell);
        });

        tbody.appendChild(row);
    });
});
