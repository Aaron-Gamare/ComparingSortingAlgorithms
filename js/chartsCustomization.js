Chart.defaults.plugins.legend.display = false;
Chart.defaults.scale.grid.display = false;
Chart.defaults.scale.ticks.display = false;
var timeouts = []
var mergetimeout = 0;
var mergecounter = 0;

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
var radixChart = document.getElementById('radixChart').getContext('2d');
var quickChart = document.getElementById('quickChart').getContext('2d');
var selectionChart = document.getElementById('selectionChart').getContext('2d');

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

var barChart3 = new Chart(radixChart, {
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

var barChart5 = new Chart(selectionChart, {
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
    document.getElementById('bubbletimeoutput').innerHTML = "0";
    document.getElementById('mergetimeoutput').innerHTML = "0";
    document.getElementById('insertiontimeoutput').innerHTML = "0";
    document.getElementById('radixtimeoutput').innerHTML = "0";
    document.getElementById('quicktimeoutput').innerHTML = "0";
    document.getElementById('selectiontimeoutput').innerHTML = "0";

    

    for (var i = 0; i < timeouts.length; i++) {
        clearTimeout(timeouts[i]);
    }
    //timeouts = [];
    mergetimeout = 0;
    mergecounter = 0;
    for(let i = 0; i < 101; i++) {
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
    barChart0.update();
    barChart1.update();
    barChart2.update();
    barChart3.update();
    barChart4.update();
    barChart5.update();
    timer.stop();
    timer.reset();
    resetTimers();
}

//called by all sorting functions to update Chart with a set timeout to show animation of moving columns
function updateChartDelayed(Chart, data, timeout) {
    timeouts.push(setTimeout(() => {
        Chart.data.datasets[0].data = data;
        Chart.update('none');
    }, timeout));
}

function updateGreenColor(Chart, timeout) {
    timeouts.push(setTimeout(() => {
        Chart.data.datasets[0].backgroundColor = '#43cea2';
        Chart.update();
    }, timeout))
}
var bubbleTimer;
var mergeTimer;
var insertionTimer;
var radixTimer;
var quickTimer;
var selectionTimer;

function resetTimers() {
    clearInterval(bubbleTimer);
    clearInterval(mergeTimer);
    clearInterval(insertionTimer);
    clearInterval(radixTimer);
    clearInterval(quickTimer);
    clearInterval(selectionTimer);

    bubbleTimer = setInterval(() => {
        const timeInSeconds = timer.getTime() / 1000;
        document.getElementById('bubbletimeoutput').innerText = timeInSeconds;
    }, 25)
    
    mergeTimer = setInterval(() => {
        const timeInSeconds = timer.getTime() / 1000;
        document.getElementById('mergetimeoutput').innerText = timeInSeconds;
    }, 25)
    
    insertionTimer = setInterval(() => {
        const timeInSeconds = timer.getTime() / 1000;
        document.getElementById('insertiontimeoutput').innerText = timeInSeconds;
    }, 25)
    
    radixTimer = setInterval(() => {
        const timeInSeconds = timer.getTime() / 1000;
        document.getElementById('radixtimeoutput').innerText = timeInSeconds;
    }, 25)
    
    quickTimer = setInterval(() => {
        const timeInSeconds = timer.getTime() / 1000;
        document.getElementById('quicktimeoutput').innerText = timeInSeconds;
    }, 25)
    
    selectionTimer = setInterval(() => {
        const timeInSeconds = timer.getTime() / 1000;
        document.getElementById('selectiontimeoutput').innerText = timeInSeconds;
    }, 25)
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
    timeouts.push(setTimeout(function() {clearInterval(bubbleTimer);}, timeout));
    timeouts.push(setTimeout(() => {
        const lastTime = timer.getTime() / 1000;
        document.getElementById('bubbletimeoutput').innerText = lastTime;
    }, timeout))
}



//mergeSort helper function
function merge(left_subarray, right_subarray) {
    let temparr = []
    let length = barChart1.data.datasets[0].data.length;
    let indexshift = left_subarray.length + right_subarray.length + temparr.length;
    mergecounter++;
    while (left_subarray.length && right_subarray.length) { 
        if (left_subarray[0] < right_subarray[0]) {
            temparr.push(left_subarray.shift())
        } else {
            temparr.push(right_subarray.shift())
        }
        mergetimeout+=10
        
        if(mergecounter < 50) {
            barChart1.data.datasets[0].data = [ ...temparr, ...left_subarray, ...right_subarray, ...barChart1.data.datasets[0].data.slice(indexshift,length)];
            this.updateChartDelayed(barChart1, barChart1.data.datasets[0].data, mergetimeout);
            
        } else if(mergecounter > 99) {
            barChart1.data.datasets[0].data = [ ...temparr, ...left_subarray, ...right_subarray, ...barChart1.data.datasets[0].data.slice(indexshift,length)];
            this.updateChartDelayed(barChart1, barChart1.data.datasets[0].data, mergetimeout);
            
        }
        else {
            barChart1.data.datasets[0].data = [ ...barChart1.data.datasets[0].data.slice(0,49), ...temparr, ...left_subarray, ...right_subarray, ...barChart1.data.datasets[0].data.slice(indexshift+49,length)];
            this.updateChartDelayed(barChart1, barChart1.data.datasets[0].data, mergetimeout);
        }
    }
    if(mergecounter > 99) {
        updateGreenColor(barChart1, mergetimeout);
        timeouts.push(setTimeout(function() {clearInterval(mergeTimer);}, mergetimeout));
        timeouts.push(setTimeout(() => {
            const lastTime = timer.getTime() / 1000;
            document.getElementById('mergetimeoutput').innerText = lastTime;
        }, mergetimeout));
    }
    return [ ...temparr, ...left_subarray, ...right_subarray ]
}


function mergeSort(array) {
    const half_length = array.length/2;
    if(array.length < 2) {
        return array;
    }
    const leftside = array.splice(0,half_length);
    return merge(mergeSort(leftside),mergeSort(array))
}

function insertionSort(timeoutval) {
    let i, key, j;
    let timeout = 0; 
    let n = barChart2.data.datasets[0].data.length;
    for (i = 1; i < n; i++) {  
        key = barChart2.data.datasets[0].data[i];  
        j = i - 1;  

        while (j >= 0 && barChart2.data.datasets[0].data[j] > key) {  
            barChart2.data.datasets[0].data[j + 1] = barChart2.data.datasets[0].data[j];  
            j = j - 1;
            timeout += timeoutval;
            this.updateChartDelayed(barChart2, barChart2.data.datasets[0].data.slice(0), timeout); 
        }  
        barChart2.data.datasets[0].data[j + 1] = key;
        
    }  
    updateGreenColor(barChart2, timeout);
    timeouts.push(setTimeout(function() {clearInterval(insertionTimer);}, timeout));
    timeouts.push(setTimeout(() => {
        const lastTime = timer.getTime() / 1000;
        document.getElementById('insertiontimeoutput').innerText = lastTime;
    }, timeout))
}



var radixtimeout = 0;
function getMax(arr,n) {
    let mx = arr[0];
        for (let i = 1; i < n; i++)
            if (arr[i] > mx)
                mx = arr[i];
        return mx;
}

function countSort(exp, timeoutval) {
    let output = new Array(barChart3.data.datasets[0].data.length); // output array
    let i;
    let count = new Array(10);
    for(let i=0;i<10;i++)
        count[i]=0;

    for (i = 0; i < barChart3.data.datasets[0].data.length; i++) {
        count[Math.floor(barChart3.data.datasets[0].data[i] / exp) % 10]++;
    }
    for (i = 1; i < 10; i++) {
        count[i] += count[i - 1];
    }
    
    for (i = barChart3.data.datasets[0].data.length - 1; i >= 0; i--) {
        output[count[Math.floor(barChart3.data.datasets[0].data[i] / exp) % 10] - 1] = barChart3.data.datasets[0].data[i];
        count[Math.floor(barChart3.data.datasets[0].data[i] / exp) % 10]--;
        radixtimeout += timeoutval;
        this.updateChartDelayed(barChart3, output.slice(0), radixtimeout);
    }
    for (i = 0; i < barChart3.data.datasets[0].data.length; i++) {
        barChart3.data.datasets[0].data[i] = output[i];
    }
}


function radixSort(timeoutval) {   
    let m = getMax(barChart3.data.datasets[0].data, barChart3.data.datasets[0].data.length);

    for (let exp = 1; Math.floor(m / exp) > 0; exp *= 10) {
        countSort(exp, timeoutval);
    }
    this.updateGreenColor(barChart3, radixtimeout);
    timeouts.push(setTimeout(function() {clearInterval(radixTimer);}, radixtimeout));
    timeouts.push(setTimeout(() => {
        const lastTime = timer.getTime() / 1000;
        document.getElementById('radixtimeoutput').innerText = lastTime;
    }, radixtimeout))
}

function partition(arr, start, end, timeout, timeoutval){
    // Taking the last element as the pivot
    const pivotValue = arr[end];
    let pivotIndex = start; 
    for (let i = start; i < end; i++) {
        if (arr[i] < pivotValue) {
            [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
            pivotIndex++;
        }
        timeout += timeoutval;
    }
    [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]] 
    return pivotIndex;
};

function quickSort(timeoutval) {
    stack = [];
    let timeout = 0;
    stack.push(0);
    stack.push(barChart4.data.datasets[0].data.length - 1);
    
    while(stack[stack.length - 1] >= 0){
        timeout += timeoutval;
    	end = stack.pop();
        start = stack.pop();
        
        pivotIndex = partition(barChart4.data.datasets[0].data, start, end, timeout, timeoutval);
        this.updateChartDelayed(barChart4, barChart4.data.datasets[0].data.slice(0), timeout);
        if (pivotIndex - 1 > start){
            timeout +=timeoutval;
        	stack.push(start);
            stack.push(pivotIndex - 1);
		}
        
        if (pivotIndex + 1 < end){
            timeout +=timeoutval;
        	stack.push(pivotIndex + 1);
            stack.push(end);
        }
    }
    
    this.updateGreenColor(barChart4, timeout);
    timeouts.push(setTimeout(function() {clearInterval(quickTimer);}, timeout));
    timeouts.push(setTimeout(() => {
        const lastTime = timer.getTime() / 1000;
        document.getElementById('quicktimeoutput').innerText = lastTime;
    }, timeout))
}

function selectionSort(timeoutval) {
    let i, j, min_idx;
    let timeout = 0;
    for (i = 0; i < barChart5.data.datasets[0].data.length-1; i++) {
        min_idx = i;
        for (j = i + 1; j < barChart5.data.datasets[0].data.length; j++) {
            if (barChart5.data.datasets[0].data[j] < barChart5.data.datasets[0].data[min_idx]) {
                min_idx = j;
                
            }
            
        }
    
        // Swap the found minimum element with the first element
        let temp = barChart5.data.datasets[0].data[min_idx];
        barChart5.data.datasets[0].data[min_idx] = barChart5.data.datasets[0].data[i];
        barChart5.data.datasets[0].data[i] = temp;
        //timeout += timeoutval;
        timeout += timeoutval;
        this.updateChartDelayed(barChart5, barChart5.data.datasets[0].data.slice(0), timeout);
    }
    this.updateGreenColor(barChart5, timeout);
    timeouts.push(setTimeout(function() {clearInterval(selectionTimer);}, timeout));
    timeouts.push(setTimeout(() => {
        const lastTime = timer.getTime() / 1000;
        document.getElementById('selectiontimeoutput').innerText = lastTime;
    }, timeout))
}

class Timer {
    constructor() {
      this.isRunning = false;
      this.startTime = 0;
      this.overallTime = 0;
    }
  
    _getTimeElapsedSinceLastStart() {
      if (!this.startTime) {
        return 0;
      }
    
      return Date.now() - this.startTime;
    }
  
    start() {
      if (this.isRunning) {
        return console.error('Timer is already running');
      }
  
      this.isRunning = true;
  
      this.startTime = Date.now();
    }
  
    stop() {
      if (!this.isRunning) {
        return console.error('Timer is already stopped');
      }
  
      this.isRunning = false;
  
      this.overallTime = this.overallTime + this._getTimeElapsedSinceLastStart();
    }
  
    reset() {
      this.overallTime = 0;
  
      if (this.isRunning) {
        this.startTime = Date.now();
        return;
      }
  
      this.startTime = 0;
    }
  
    getTime() {
      if (!this.startTime) {
        return 0;
      }
  
      if (this.isRunning) {
        return this.overallTime + this._getTimeElapsedSinceLastStart();
      }
  
      return this.overallTime;
    }
}

const timer = new Timer();
  
function sortAllAlgorithms() {
    randomizeDataset();
    document.getElementById('bubbletimeoutput').innerHTML = "0";
    document.getElementById('mergetimeoutput').innerHTML = "0";
    document.getElementById('insertiontimeoutput').innerHTML = "0";
    document.getElementById('radixtimeoutput').innerHTML = "0";
    document.getElementById('quicktimeoutput').innerHTML = "0";
    document.getElementById('selectiontimeoutput').innerHTML = "0";
    

    for (var i = 0; i < timeouts.length; i++) {
        clearTimeout(timeouts[i]);
    }
    timeouts = [];
    mergetimeout = 0;
    mergecounter = 0;
    radixtimeout = 0;
    mergeData = JSON.parse(JSON.stringify(barChart1.data.datasets[0].data));
    
    timer.start();

    setTimeout(() => bubbleSort(10), 0);
    setTimeout(() => mergeSort(mergeData, 10), 0);
    setTimeout(() => insertionSort(10),0);
    setTimeout(() => selectionSort(200),0);
    setTimeout(() => radixSort(10),0);
    setTimeout(() => quickSort(30), 0);

}