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
        judul.pop();
        tahun.pop();
        rating.pop();
        durasi.pop();
        votes.pop();
    }
}

const data2 = {
    labels: judul,
    datasets: [{
        label: 'Rating ',
        data: rating,
        backgroundColor: "rgba(0, 252, 3, 0.6)",
        borderColor: "rgba(0, 252, 3, 1)",
        borderWidth: 1,
        order : 0
    }, {
        label: 'Durasi (menit)',
        data: durasi,
        backgroundColor: "rgba(248, 252, 3, 0.6)",
        borderColor: "rgba(248, 252, 3, 1)",
        borderWidth: 1,
        order: 0
    }, {
        label: "Votes ",
        data: votes,
        backgroundColor: "rgba(255, 0, 3, 0.6)",
        borderColor: "rgba(255, 0, 3, 1)",
        borderWidth: 1,
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

var myChart = new Chart(ctx_2, {
    type: "bar",
    data: data2,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            title: {
                display: true,
                text: '10 FILM Terbaru',
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
                },
                
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
                    padding: {top: 0, left: 0, right: 0, bottom: 0},

                },
                beginAtZero: false
            }
        }
    }

});

