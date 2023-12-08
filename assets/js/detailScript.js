document.addEventListener('DOMContentLoaded', function() {
    var params = new URLSearchParams(window.location.search);
    var testId = params.get('id'); // 获取URL参数中的id值

    console.log(typeof testId, testId)

    var detailsTableBody = document.getElementById('detailsTable').getElementsByTagName('tbody')[0];

    console.log(detailsData)

    var rowData = detailsData.find(function(data) {

        console.log(typeof data.TestID, data.TestID);

        return String(data.TestID) === testId;
    });

    console.log(rowData)

    if (rowData) {
        var row = document.createElement('tr');

        Object.keys(rowData).forEach(function(key) {
            var cell = document.createElement('td');
            cell.textContent = rowData[key];
            row.appendChild(cell);
        });

        detailsTableBody.appendChild(row);
    }
});
