var ctx_2 = document.getElementById('g2');

var ndata = judul.length;

console.log(ndata);

for(var i=0; i<ndata; i++){
    if(i+1>10){
        var j = judul.pop();
        var t = tahun.pop();
        console.log(j+t);
    }
}

var myChart = new Chart(ctx_2, {
    type: 'line',
    data: {
        labels: judul,
        datasets: [{
            label: 'Tahun ',
            data: tahun,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        indexAxis : 'y',
        plugins: {
            title: {
                display: true,
                text: '10 FILM Terbaru Top 1000 IMDB',
                align: 'start'
            }
        },
        maintainAspectRatio: false,
        scales: {
            x: {
                beginAtZero: false
            }
        }
    }
});

