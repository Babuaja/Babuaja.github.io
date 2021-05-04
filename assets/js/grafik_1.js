var ctx = document.getElementById('g1');

var ndata = judul.length;

for(var i=0; i<ndata; i++){
    if(i+1>10){
        var j = judul.pop();
        var t = tahun.pop();
    }
}

var myChart = new Chart(ctx, {
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
                'rgba(155, 150, 14, 0.2)',
                'rgba(255, 198, 74, 0.2)',
                'rgba(23, 109, 64, 0.2)',
                'rgba(225, 109, 64, 0.2)',
                'rgba(205, 10, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(155, 150, 14, 1)',
                'rgba(255, 198, 74, 1)',
                'rgba(23, 109, 64, 1)',
                'rgba(225, 109, 64, 1)',
                'rgba(205, 10, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            title: {
                display: true,
                text: '10 FILM Terlawas Top 1000 IMDB',
                align: 'start'
            }
        },
        scales: {
            y: {
                beginAtZero: false
            }
        }
    }
});

