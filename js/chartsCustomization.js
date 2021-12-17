Chart.defaults.plugins.legend.display = false;
Chart.defaults.scale.grid.display = false;

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

let bubbleChart = document.getElementById('bubbleChart').getContext('2d');
let mergeChart = document.getElementById('mergeChart').getContext('2d');
let insertionChart = document.getElementById('insertionChart').getContext('2d');
let selectionChart = document.getElementById('selectionChart').getContext('2d');
let quickChart = document.getElementById('quickChart').getContext('2d');
let radixChart = document.getElementById('radixChart').getContext('2d');

let barChart = new Chart(bubbleChart, {
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
            xAxes: {
                ticks: {
                    display:false
                }
            }
        }
    }
});