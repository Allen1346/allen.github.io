document.addEventListener('DOMContentLoaded', function() {
    var params = new URLSearchParams(window.location.search);
    var testId = params.get('id'); // 获取URL参数中的id值

    console.log(typeof testId, testId)

    var detailsTableBody = document.getElementById('detailsTable').getElementsByTagName('tbody')[0];

    console.log(tableData)

    var rowData = tableData.find(function(data) {

        console.log(typeof data.TestID, data.TestID);

        return String(data.TestID) === testId;
    });

    console.log(rowData)

    if (rowData) {
        Object.keys(rowData).forEach(function(key) {
            var row = document.createElement('tr');

            var headerCell = document.createElement('th');
            headerCell.textContent = key; // 填充标签（如 "TestID", "Test Name" 等）
            headerCell.style.width = '130px'; // 设置第一列的宽度
            headerCell.style.textAlign = 'center'; // 设置文本居中
            row.appendChild(headerCell);

            var valueCell = document.createElement('td');
            valueCell.textContent = rowData[key]; // 填充对应的值
            row.appendChild(valueCell);

            detailsTableBody.appendChild(row);

//            var cell = document.createElement('td');
//            cell.textContent = rowData[key];
//            row.appendChild(cell);
        });

//        detailsTableBody.appendChild(row);
    }
});
