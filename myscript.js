var chart = c3.generate({
    bindto: '#chart',
    data: {
        columns: [
            ['Banque', 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000,],
            ['PorteFeuille', 0, 0, 0, 0, 0, 0,0, 0, 0, 0,0]
        ]
    },
    color: {
        pattern: ['#1E90FF', '#aec7e8']
    }
});

function update(data, value, data2, value2){
    chart.flow({
        columns: [
            [data, value],
            [data2, value2]
        ]});
}
