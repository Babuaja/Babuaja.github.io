//insialisasi json sort category
//sort by year Descending
jsonfile.jsonarray.sort(function(a, b){return parseInt(b.tahun)-parseInt(a.tahun)})

//Getter
 var judul = jsonfile.jsonarray.map(function(e) {
    return e.judul;
 });

 var tahun = jsonfile.jsonarray.map(function(e) {
    return e.tahun;
 });;

 var durasi = jsonfile.jsonarray.map(function(e) {
    return e.durasi;
 });;
 
 var genre = jsonfile.jsonarray.map(function(e) {
    return e.genre;
 });;
 
 var rating = jsonfile.jsonarray.map(function(e) {
    return e.rating;
 });;

 var votes = jsonfile.jsonarray.map(function(e) {
    return e.votes;
 });;

 var gross = jsonfile.jsonarray.map(function(e) {
    return e.gross;
 });;
 
 var gambar = jsonfile.jsonarray.map(function(e) {
    return e.gambar;
 });;

 var waktu_scrape = jsonfile.jsonarray.map(function(e) {
    return e.waktu_scrape;
 });;

//Create Grafik
var ctx_2 = document.getElementById('g2');

var ndata = judul.length;

for(var i=0; i<ndata; i++){
    if(i+1>10){
        var j = judul.pop();
        var t = tahun.pop();
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
                'rgba(0, 0, 0, 0.7)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        indexAxis : 'x',
        plugins: {
            title: {
                display: true,
                text: '10 FILM Terbaru',
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

