Chart.defaults.plugins.legend.display = false;
Chart.defaults.scale.grid.display = false;
Chart.defaults.scale.ticks.display = false;

var size = [window.width,window.height]

const plugin = {
    id: 'custom_canvas_background_color',
    beforeDraw: (chart) => {
        const ctx = chart.canvas.getContext('2d');
        ctx.save();
        ctx.globalCompositeOperation = 'destination-over';
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, chart.width, chart.height);
        ctx.restore();
    }
};


var bubbleChart = document.getElementById('bubbleChart').getContext('2d');
var mergeChart = document.getElementById('mergeChart').getContext('2d');
var insertionChart = document.getElementById('insertionChart').getContext('2d');
var selectionChart = document.getElementById('selectionChart').getContext('2d');
var quickChart = document.getElementById('quickChart').getContext('2d');
var countingChart = document.getElementById('countingChart').getContext('2d');

var barChart0 = new Chart(bubbleChart, {
    type: 'bar',
    data:{
        labels:['1', '38', '4', '12', '32', '2', '5', '67', '24', '1', '38', '4', '12', '32', '2', '5', '67', '24', '1', '38', '4', '12', '32', '2', '5', '67', '24', '1', '38', '4', '12', '32', '2', '5', '67', '24', '1', '38', '4', '12', '32', '2', '5', '67', '24', '1', '38', '4', '12', '32', '2', '5', '67', '24', '1', '38', '4', '12', '32', '2', '5', '67', '24', '1', '38', '4', '12', '32', '2', '5', '67', '24', '1', '38', '4', '12', '32', '2', '5', '67', '24', ],
        datasets:[{
            data: [
                1, 38, 4, 12, 32, 2, 5, 67, 24, 1, 38, 4, 12, 32, 2, 5, 67, 24, 1, 38, 4, 12, 32, 2, 5, 67, 24, 1, 38, 4, 12, 32, 2, 5, 67, 24, 1, 38, 4, 12, 32, 2, 5, 67, 24, 1, 38, 4, 12, 32, 2, 5, 67, 24, 1, 38, 4, 12, 32, 2, 5, 67, 24, 1, 38, 4, 12, 32, 2, 5, 67, 24, 1, 38, 4, 12, 32, 2, 5, 67, 24
            ],
            backgroundColor: '#ff5252',
            barThickness: 5,
            hoverBackgroundColor: 'black'
        }]
    },
    plugins: [plugin],
    options: {
        tooltips: {
            enabled: false
        },
        scales: {
            yAxes: {
                ticks: {
                    display:true
                }
            }
        }
    }
});

var barChart1 = new Chart(mergeChart, {
    type: 'bar',
    data:{
        labels:[1, 38, 4, 12, 32, 2, 5, 67, 24, 1, 38, 4, 12, 32, 2, 5, 67, 24, 1, 38, 4, 12, 32, 2, 5, 67, 24, 1, 38, 4, 12, 32, 2, 5, 67, 24, 1, 38, 4, 12, 32, 2, 5, 67, 24, 1, 38, 4, 12, 32, 2, 5, 67, 24, 1, 38, 4, 12, 32, 2, 5, 67, 24, 1, 38, 4, 12, 32, 2, 5, 67, 24, 1, 38, 4, 12, 32, 2, 5, 67, 24,  ],
        datasets:[{
            data: [ 1, 38, 4, 12, 32, 2, 5, 67, 24, 1, 38, 4, 12, 32, 2, 5, 67, 24, 1, 38, 4, 12, 32, 2, 5, 67, 24, 1, 38, 4, 12, 32, 2, 5, 67, 24, 1, 38, 4, 12, 32, 2, 5, 67, 24, 1, 38, 4, 12, 32, 2, 5, 67, 24, 1, 38, 4, 12, 32, 2, 5, 67, 24, 1, 38, 4, 12, 32, 2, 5, 67, 24, 1, 38, 4, 12, 32, 2, 5, 67, 24],
            backgroundColor: '#ff5252',
            barThickness: 5,
            hoverBackgroundColor: 'black'
        }]
    },
    plugins: [plugin],
    options: {
        scales: {
            yAxes: {
                ticks: {
                    display:true
                }
            }
        }
    }
});

var barChart2 = new Chart(insertionChart, {
    type: 'bar',
    data:{
        labels:['1', '38', '4', '12', '32', '2', '5', '67', '24', '1', '38', '4', '12', '32', '2', '5', '67', '24', '1', '38', '4', '12', '32', '2', '5', '67', '24', '1', '38', '4', '12', '32', '2', '5', '67', '24', '1', '38', '4', '12', '32', '2', '5', '67', '24', '1', '38', '4', '12', '32', '2', '5', '67', '24', '1', '38', '4', '12', '32', '2', '5', '67', '24', '1', '38', '4', '12', '32', '2', '5', '67', '24', '1', '38', '4', '12', '32', '2', '5', '67', '24', ],
        datasets:[{
            data: [
                1, 38, 4, 12, 32, 2, 5, 67, 24, 1, 38, 4, 12, 32, 2, 5, 67, 24, 1, 38, 4, 12, 32, 2, 5, 67, 24, 1, 38, 4, 12, 32, 2, 5, 67, 24, 1, 38, 4, 12, 32, 2, 5, 67, 24, 1, 38, 4, 12, 32, 2, 5, 67, 24, 1, 38, 4, 12, 32, 2, 5, 67, 24, 1, 38, 4, 12, 32, 2, 5, 67, 24, 1, 38, 4, 12, 32, 2, 5, 67, 24
            ],
            backgroundColor: '#ff5252',
            barThickness: 5,
            hoverBackgroundColor: 'black'
        }]
    },
    plugins: [plugin],
    options: {
        scales: {
            yAxes: {
                ticks: {
                    display:true
                }
            }
        }
    }
});

var barChart3 = new Chart(selectionChart, {
    type: 'bar',
    data:{
        labels:['1', '38', '4', '12', '32', '2', '5', '67', '24', '1', '38', '4', '12', '32', '2', '5', '67', '24', '1', '38', '4', '12', '32', '2', '5', '67', '24', '1', '38', '4', '12', '32', '2', '5', '67', '24', '1', '38', '4', '12', '32', '2', '5', '67', '24', '1', '38', '4', '12', '32', '2', '5', '67', '24', '1', '38', '4', '12', '32', '2', '5', '67', '24', '1', '38', '4', '12', '32', '2', '5', '67', '24', '1', '38', '4', '12', '32', '2', '5', '67', '24', ],
        datasets:[{
            data: [
                1, 38, 4, 12, 32, 2, 5, 67, 24, 1, 38, 4, 12, 32, 2, 5, 67, 24, 1, 38, 4, 12, 32, 2, 5, 67, 24, 1, 38, 4, 12, 32, 2, 5, 67, 24, 1, 38, 4, 12, 32, 2, 5, 67, 24, 1, 38, 4, 12, 32, 2, 5, 67, 24, 1, 38, 4, 12, 32, 2, 5, 67, 24, 1, 38, 4, 12, 32, 2, 5, 67, 24, 1, 38, 4, 12, 32, 2, 5, 67, 24
            ],
            backgroundColor: '#ff5252',
            barThickness: 5,
            hoverBackgroundColor: 'black'
        }]
    },
    plugins: [plugin],
    options: {
        scales: {
            yAxes: {
                ticks: {
                    display:true
                }
            }
        }
    }
});

var barChart4 = new Chart(quickChart, {
    type: 'bar',
    data:{
        labels:['1', '38', '4', '12', '32', '2', '5', '67', '24', '1', '38', '4', '12', '32', '2', '5', '67', '24', '1', '38', '4', '12', '32', '2', '5', '67', '24', '1', '38', '4', '12', '32', '2', '5', '67', '24', '1', '38', '4', '12', '32', '2', '5', '67', '24', '1', '38', '4', '12', '32', '2', '5', '67', '24', '1', '38', '4', '12', '32', '2', '5', '67', '24', '1', '38', '4', '12', '32', '2', '5', '67', '24', '1', '38', '4', '12', '32', '2', '5', '67', '24', ],
        datasets:[{
            data: [
                1, 38, 4, 12, 32, 2, 5, 67, 24, 1, 38, 4, 12, 32, 2, 5, 67, 24, 1, 38, 4, 12, 32, 2, 5, 67, 24, 1, 38, 4, 12, 32, 2, 5, 67, 24, 1, 38, 4, 12, 32, 2, 5, 67, 24, 1, 38, 4, 12, 32, 2, 5, 67, 24, 1, 38, 4, 12, 32, 2, 5, 67, 24, 1, 38, 4, 12, 32, 2, 5, 67, 24, 1, 38, 4, 12, 32, 2, 5, 67, 24
            ],
            backgroundColor: '#ff5252',
            barThickness: 5,
            hoverBackgroundColor: 'black'
        }]
    },
    plugins: [plugin],
    options: {
        scales: {
            yAxes: {
                ticks: {
                    display:true
                }
            }
        }
    }
});

var barChart5 = new Chart(countingChart, {
    type: 'bar',
    data:{
        labels:['1', '38', '4', '12', '32', '2', '5', '67', '24', '1', '38', '4', '12', '32', '2', '5', '67', '24', '1', '38', '4', '12', '32', '2', '5', '67', '24', '1', '38', '4', '12', '32', '2', '5', '67', '24', '1', '38', '4', '12', '32', '2', '5', '67', '24', '1', '38', '4', '12', '32', '2', '5', '67', '24', '1', '38', '4', '12', '32', '2', '5', '67', '24', '1', '38', '4', '12', '32', '2', '5', '67', '24', '1', '38', '4', '12', '32', '2', '5', '67', '24', ],
        datasets:[{
            data: [
                1, 38, 4, 12, 32, 2, 5, 67, 24, 1, 38, 4, 12, 32, 2, 5, 67, 24, 1, 38, 4, 12, 32, 2, 5, 67, 24, 1, 38, 4, 12, 32, 2, 5, 67, 24, 1, 38, 4, 12, 32, 2, 5, 67, 24, 1, 38, 4, 12, 32, 2, 5, 67, 24, 1, 38, 4, 12, 32, 2, 5, 67, 24, 1, 38, 4, 12, 32, 2, 5, 67, 24, 1, 38, 4, 12, 32, 2, 5, 67, 24
            ],
            backgroundColor: '#ff5252',
            barThickness: 5,
            hoverBackgroundColor: 'black'
        }]
    },
    plugins: [plugin],
    options: {
        scales: {
            yAxes: {
                ticks: {
                    display:true
                }
            }
        }
    }
});


document.addEventListener('DOMContentLoaded', function() {
    randomizeDataset();
}, false);

function randomizeDataset() {
    for(let i = 0; i < 250; i++) {
        let x = Math.floor(Math.random()*1000);
        barChart0.data.datasets[0].data[i] = x;
        barChart1.data.datasets[0].data[i] = x;
        barChart2.data.datasets[0].data[i] = x;
        barChart3.data.datasets[0].data[i] = x;
        barChart4.data.datasets[0].data[i] = x;
        barChart5.data.datasets[0].data[i] = x;
        barChart0.data.labels[i] = x;
        barChart1.data.labels[i] = x;
        barChart2.data.labels[i] = x;
        barChart3.data.labels[i] = x;
        barChart4.data.labels[i] = x;
        barChart5.data.labels[i] = x;
    }
    barChart0.update();
    barChart1.update();
    barChart2.update();
    barChart3.update();
    barChart4.update();
    barChart5.update();
}
function uploadDataset() {
    //use map function to 
}