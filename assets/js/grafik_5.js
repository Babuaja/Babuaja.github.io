//insialisasi json sort category
//sort by Rating Descending
jsonfile.jsonarray.sort(function(a, b){return parseInt(b.durasi)-parseInt(a.durasi)})

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
    return parseFloat(e.votes);
 });;

 var gross = jsonfile.jsonarray.map(function(e) {
    return parseFloat(e.gross);
 });;
 
 var gambar = jsonfile.jsonarray.map(function(e) {
    return e.gambar;
 });;

 var waktu_scrape = jsonfile.jsonarray.map(function(e) {
    return e.waktu_scrape;
 });;

//Create Grafik
var ctx_5 = document.getElementById('g5');

var ndata = judul.length;

for(var i=0; i<ndata; i++){
    if(i+1>10){
        judul.pop();
        tahun.pop();
        rating.pop();
        durasi.pop();
        votes.pop();
    }
}

var getBackgroundColor =  myFunc();
function myFunc(){
    var temp = [];
    var tempstr1 ="", tempstr = "";
    var red = 0,
     green = 0,
     blue = 0;
     for(var i=0; i<1; i++){
         red =Math.floor(Math.random() * 255);
         green = Math.floor(Math.random() * 255);
         blue = Math.floor(Math.random() * 255);
         tempstr = "rgba(" + red + ", " + green + ", " + blue + ", 0.6)";
         tempstr1 = "rgba(" + red + ", " + green + ", " + blue + ", 1)";
        temp.push({"color": tempstr, "border": tempstr1});
     }
     return temp;
};

var getColor = getBackgroundColor.map(function(e) {
    return e.color;
 });;

 var getBorder= getBackgroundColor.map(function(e) {
    return e.border;
 });;

var myChart = new Chart(ctx_5, {
    type: 'bar',
    data: {
        labels: judul,
        datasets: [{
            label: 'Durasi (menit)',
            data: durasi,
            backgroundColor: getColor,
            borderColor: getBorder,
            borderWidth: 1
        }, {
            label: "Rating ",
            data: rating,
            backgroundColor: "rgba(248, 252, 3, 0.6)",
            borderColor: "rgba(248, 252, 3, 1)",
            borderWidth: 1
        }, {
            label: "Votes ",
            data: votes,
            backgroundColor: "rgba(255, 0, 3, 0.6)",
            borderColor: "rgba(255, 0, 3, 1)",
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        indexAxis : 'y',
        plugins: {
            title: {
                display: true,
                text: '10 FILM Durasi Terlama',
                align: 'start'
            }
        },
        maintainAspectRatio: false,
        scales: {
            x: {
                display: true,
                title: {
                    display: true,
                    text: 'Value',
                    color: '#191',
                    font: {
                        family: 'Times',
                        size: 20,
                        style: 'normal',
                        lineHeight: 1.2
                    },
                    padding: {top: 10, left: 0, right: 0, bottom: 0}
                }
                // suggestedMax : 500000
            },
            y: {
                display :true,
                title : {
                    display: true,
                    text: 'Judul',
                    color: '#191',
                    font: {
                        family: 'Times',
                        size: 20,
                        style: 'normal',
                        lineHeight: 1.2
                    },
                    padding: {top: 0, left: 0, right: 0, bottom: 0}
                },
            }
        }
    }
});

