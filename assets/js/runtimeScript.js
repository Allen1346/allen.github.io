document.addEventListener('DOMContentLoaded', function() {
    var tbody = document.getElementById('runtimeDatas').getElementsByTagName('tbody')[0];

    runtimeDatas.forEach(function(rowData) {
        console.log(rowData);
        var row = document.createElement('tr');

        Object.keys(rowData).forEach(function(key) {
            var cell = document.createElement('td');

            if (key === "Overhead"){
                var percentage = (rowData[key] * 100).toFixed(2) + '%'; // 将小数转换为百分数
                cell.textContent = percentage;
            } else{
                cell.textContent = rowData[key];
            }
            row.appendChild(cell);
        });

        tbody.appendChild(row);
    });
});
