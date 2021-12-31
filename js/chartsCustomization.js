Chart.defaults.plugins.legend.display = false;
Chart.defaults.scale.grid.display = false;
Chart.defaults.scale.ticks.display = false;

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
        labels:[],
        datasets:[{
            data: [],
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

var barChart1 = new Chart(mergeChart, {
    type: 'bar',
    data:{
        labels:[],
        datasets:[{
            data: [],
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
        labels:[],
        datasets:[{
            data: [],
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
        labels:[],
        datasets:[{
            data: [],
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
        labels:[],
        datasets:[{
            data: [],
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
        labels:[],
        datasets:[{
            data: [],
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

//Randomize dataset on reload page
document.addEventListener('DOMContentLoaded', function() {
    randomizeDataset();
}, false);

//randomize dataset with 100 numbers with range 0 - 1000
function randomizeDataset() {
    for(let i = 0; i < 100; i++) {
        let x = Math.floor(Math.random()*1000);
        barChart0.data.datasets[0].data[i] = x;
        barChart1.data.datasets[0].data[i] = x;
        barChart2.data.datasets[0].data[i] = x;
        barChart3.data.datasets[0].data[i] = x;
        barChart4.data.datasets[0].data[i] = x;
        barChart5.data.datasets[0].data[i] = x;
        barChart0.data.labels[i] = i+1;
        barChart1.data.labels[i] = i+1;
        barChart2.data.labels[i] = i+1;
        barChart3.data.labels[i] = i+1;
        barChart4.data.labels[i] = i+1;
        barChart5.data.labels[i] = i+1;
    }
    barChart0.data.datasets[0].backgroundColor='#FF4B2B';
    barChart1.data.datasets[0].backgroundColor='#FF4B2B';
    barChart2.data.datasets[0].backgroundColor='#FF4B2B';
    barChart3.data.datasets[0].backgroundColor='#FF4B2B';
    barChart4.data.datasets[0].backgroundColor='#FF4B2B';
    barChart5.data.datasets[0].backgroundColor='#FF4B2B';
    refreshCharts();
}

function refreshCharts() {
    barChart0.update();
    barChart1.update();
    barChart2.update();
    barChart3.update();
    barChart4.update();
    barChart5.update();
}
//upload dataset
function uploadDataset() {

} 

//called by all sorting functions to update Chart with a set timeout to show animation of moving columns
function updateChartDelayed(Chart, data, timeout) {
    setTimeout(() => {
        Chart.data.datasets[0].data = data;
        Chart.update('none');
    }, timeout);
}

function updateGreenColor(Chart, timeout) {
    setTimeout(() => {
        Chart.data.datasets[0].backgroundColor = '#43cea2';
        Chart.update();
    }, timeout);
}

function bubbleSort(timeoutval) {
    let timeout = 0;
    let barChart0_data = barChart0.data.datasets[0].data;
    for(let i = 0; i < barChart0_data.length; i++) {
        for(let j = 0; j < (barChart0_data.length - i - 1); j++) {
            if(barChart0_data[j] > barChart0_data[j + 1]) {
                let temp = barChart0_data[j];
                barChart0_data[j] = barChart0_data[j + 1];
                barChart0_data[j + 1] = temp;
                timeout += timeoutval;
                this.updateChartDelayed(barChart0, barChart0_data.slice(0), timeout);
            }
        }
    }
    updateGreenColor(barChart0, timeout);
}



//mergeSort helper function
function merge(left, right, timeoutval) {
    let arr = []
    let timeout = 0;
    let indexshift = left.length+right.length;
    // Break out of loop if any one of the array gets empty
    while (left.length && right.length) {
        // Pick the smaller among the smallest element of left and right sub arrays 
        timeout += timeoutval;
        if (left[0] < right[0]) {
            arr.push(left.shift())  
        } else {
            arr.push(right.shift()) 
        }
        barChart1.data.datasets[0].data = [ ...arr, ...left, ...right];
        this.updateChartDelayed(barChart1, barChart1.data.datasets[0].data, timeout);
    }
    updateGreenColor(barChart1, timeoutval)
    return [ ...arr, ...left, ...right ]
}


function mergeSort(array, timeoutval) {
    const half_length = array.length/2;
    //base case
    if(array.length < 2) {
        return array;
    }
    //keep on splitting array in half 
    const leftside = array.splice(0,half_length);
    //updateGreenColor(barChart1, timeout);
    return merge(mergeSort(leftside),mergeSort(array), timeoutval)
    
    //return temparr;
}

function insertionSort() {

}

function selectionSort() {

}

function quickSort() {

}

function countingSort() {

}

function sortAllAlgorithms() {
    document.getElementById('bubbletimeoutput').innerHTML = "04:21";
    document.getElementById('mergetimeoutput').innerHTML = "04:21";
    document.getElementById('insertiontimeoutput').innerHTML = "04:21";
    document.getElementById('selectiontimeoutput').innerHTML = "04:21";
    document.getElementById('quicktimeoutput').innerHTML = "04:21";
    document.getElementById('countingtimeoutput').innerHTML = "04:21";
    setTimeout(() => mergeSort(barChart1.data.datasets[0].data, 100), 0);
    setTimeout(() => bubbleSort(10), 0);
    
}