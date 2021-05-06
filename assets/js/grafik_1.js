//insialisasi json sort category
//sort by year Ascending
jsonfile.jsonarray.sort(function(a, b){return parseInt(a.tahun)-parseInt(b.tahun)})

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

 //Create grafik
var ctx = document.getElementById('g1');

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

const data = {
    labels: judul,
    datasets: [{
        label: 'Rating ',
        data: rating,
        backgroundColor: "rgba(0, 252, 3, 0.6)",
        borderColor: "rgba(0, 252, 3, 1)",
        borderWidth: 1,
        hidden: true,
        order : 0
    }, {
        label: 'Durasi (menit)',
        data: durasi,
        backgroundColor: "rgba(248, 252, 3, 0.6)",
        borderColor: "rgba(248, 252, 3, 1)",
        borderWidth: 1,
        hidden: true,
        order: 0
    }, {
        label: "Votes ",
        data: votes,
        backgroundColor: "rgba(255, 0, 3, 0.6)",
        borderColor: "rgba(255, 0, 3, 1)",
        borderWidth: 1,
        hidden: true,
        order: 0
    }, {
        type: "line",
        label: 'Tahun ',
        data: tahun,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
        order: 1
    }
    ]
};

var myChart = new Chart(ctx, {
    type: "bar",
    data: data,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            title: {
                display: true,
                text: '10 FILM Terlawas',
                size: 20,
                align: 'start'
            }
        },
        scales: {
            x: {
                display: true,
                title: {
                    display: true,
                    text: 'Judul Film',
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
                    text: 'Value',
                    color: '#191',
                    font: {
                        family: 'Times',
                        size: 20,
                        style: 'normal',
                        lineHeight: 1.2
                    },
                    padding: {top: 0, left: 0, right: 0, bottom: 0}
                },
                beginAtZero: false
            }
        }
    }
});

