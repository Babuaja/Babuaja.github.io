//insialisasi json sort category
//sort by Rating Descending
jsonfile.jsonarray.sort(function(a, b){return parseFloat(b.rating)-parseFloat(a.rating)})

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
var ctx_3 = document.getElementById('g3');

var ndata = judul.length;

for(var i=0; i<ndata; i++){
    if(i+1>10){
        var j = judul.pop();
        var t = rating.pop();
    }
}

var getBackgroundColor = (function(){
    var temp = [];
    var tempstr1 ="", tempstr = "";
    var red = 0,
     green = 0,
     blue = 0;
     for(var i=0; i<1; i++){
         red =Math.floor(Math.random() * 255);
         green = Math.floor(Math.random() * 255);
         blue = Math.floor(Math.random() * 255);
         tempstr = "rgba(" + red + ", " + green + ", " + blue + ", 1)";
         tempstr1 = "rgba(" + red + ", " + green + ", " + blue + ", 1)";
        temp.push({"color": tempstr, "border": tempstr1});
     }
     return temp;
}());

var getColor = getBackgroundColor.map(function(e) {
    return e.color;
 });;

 var getBorder= getBackgroundColor.map(function(e) {
    return e.border;
 });;

var myChart = new Chart(ctx_3, {
    type: 'bar',
    data: {
        labels: judul,
        datasets: [{
            label: 'Rating ',
            data: rating,
            backgroundColor: getColor,
            borderColor: getBorder,
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        indexAxis : 'x',
        plugins: {
            title: {
                display: true,
                text: '10 FILM Rating Tertinggi',
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

