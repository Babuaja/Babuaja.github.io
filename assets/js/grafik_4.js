//insialisasi json sort category
//sort by Rating Descending
//jsonfile.jsonarray.sort(function(a, b){return parseFloat(b.rating)-parseFloat(a.rating)})

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
var ctx_4 = document.getElementById('g4');

var ndata = judul.length;

var getJmlhGenre = (function(){
    var temp = [];
    var temp2 =[];
    var ngenre = 0;

    for(var i = 0; i<ndata; i++){
        temp = genre[i].split(", ");
        ngenre = temp.length;
        for(var j = 0; j<ngenre; j++){
            temp2.push(temp[j]);
        }
    }
    temp = [];
    temp2.sort();
    ngenre = temp2.length;
    var temgenre = "";
    var n = 0;
    for(var i = 0; i <ngenre-1; i++){
        temgenre = temp2[i];
        
        if(temgenre!=temp2[i+1]){
            temp.push({"genre" : temgenre, "jumlah" : n});
            n = 0;
        } else {
            n++;
        }
    }

    return temp;
 }());

// console.log(pecah);

var nama_genre = getJmlhGenre.map(function(e) {
    return e.genre;
 });;

 var jmlh_genre = getJmlhGenre.map(function(e) {
    return e.jumlah;
 });;

 var getBackgroundColor = (function(){
    var temp = [];
    var tempstr1 ="", tempstr = "";
    var red = 0,
     green = 0,
     blue = 0;
     for(var i=0; i<getJmlhGenre.length; i++){
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

//console.log(getBackgroundColor);
// for(var i=0; i<ndata; i++){
//     if(i+1>10){
//         var j = judul.pop();
//         var t = tahun.pop();
//     }
// }

var myChart = new Chart(ctx_4, {
    type: 'pie',
    data: {
        labels: nama_genre,
        datasets: [{
            label: 'Jumlah ',
            data: jmlh_genre,
            backgroundColor : getColor,
            borderColor: getBorder,
            // backgroundColor: [
            //     'rgba(255, 99, 132, 0.2)',
            //     'rgba(54, 162, 235, 0.2)',
            //     'rgba(255, 206, 86, 0.2)',
            //     'rgba(75, 192, 192, 0.2)',
            //     'rgba(153, 102, 255, 0.2)',
            //     'rgba(155, 150, 14, 0.2)',
            //     'rgba(255, 198, 74, 0.2)',
            //     'rgba(23, 109, 64, 0.2)',
            //     'rgba(225, 109, 64, 0.2)',
            //     'rgba(205, 10, 64, 0.2)'
            // ],
            
            hoverOffset : 4
        }]
    },
     options: {
         responsive: true,
    //     indexAxis : 'x',
         plugins: {
             title: {
                 display: true,
                 text: 'Jumlah Genre Film',
                 align: 'start'
             }
         },
         maintainAspectRatio: false
    //     scales: {
    //         x: {
    //             beginAtZero: false
    //         }
    //     }
     }
});

