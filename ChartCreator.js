function createChart() {
    var inputBoxElements = getListOfEditableInpuxBoxElements();
    var visualizationData = [['Category', 'Expenditure']];
    for (var i = 0; i < inputBoxElements.length; i++){
        var inputBox = inputBoxElements[i];
        visualizationData.push([inputBox.textContent, parseInt(inputBox.value)]);
    }

    google.charts.load("current", {packages:["corechart"]});
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
    // var data = google.visualization.arrayToDataTable([
    //     ['Category', 'Expenditure'],
    //     ['Work',     11],
    //     ['Eat',      2],
    //     ['Commute',  2],
    //     ['Watch TV', 2],
    //     ['Sleep',    7]
    // ]);
    var data = google.visualization.arrayToDataTable(visualizationData);

    var options = {
        title: 'Expenditure Distribution',
        pieHole: 0.4,
    };

    var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
    chart.draw(data, options);
    }
}