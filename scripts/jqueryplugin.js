
$(document).ready(function () {

    createtable();
});

function createtable() {

    var data =
        [
            {
                "id": 1,
                "Kisi": "Gökhan Türkmen",
                "TCNo": "XXXXXXXXXXX",
                "Telefon": "0530 XXX XX XX",
                "DogduguYer": "İstanbul",
                "childrens": [{
                    "id": 2,
                    "Kisi": "Selim Yıldız",
                    "TCNo": "XXXXXXXXXXX",
                    "Telefon": "0530 XXX XX XX",
                    "DogduguYer": "İstanbul",

                }, {
                    "id": 3,
                    "Kisi": "Orhan Işık",
                    "TCNo": "XXXXXXXXXXX",
                    "Telefon": "0530 XXX XX XX",
                    "DogduguYer": "İstanbul"
                }]



            },
            {
                "id": 4,
                "Kisi": "Fatma Görmüş",
                "TCNo": "XXXXXXXXXXX",
                "Telefon": "0530 XXX XX XX",
                "DogduguYer": "İstanbul",


            },
            {
                "id": 5,
                "Kisi": "Ali Duru",
                "TCNo": "XXXXXXXXXXX",
                "Telefon": "0530 XXX XX XX",
                "DogduguYer": "İstanbul",

            }
        ];


    if (data) {
        var len = data.length;
        var txt = "";
        if (len > 0) {
            var sayac = 1;

            for (var i = 0; i < len; i++) {
                //  alert(data[i].Kisi);
                if (data[i].Kisi && data[i].TCNo && data[i].Telefon && data[i].DogduguYer) {

                    txt += "<tr class='treegrid-"+ sayac +"' ><td>" + data[i].Kisi + "</td><td>" + data[i].TCNo + "</td><td>" + data[i].Telefon + "</td><td>" + data[i].DogduguYer + "</td></tr>";
                    sayac++;
                    if (data[i].childrens) {
                        var parentid = (sayac - 1);
                        for (var n = 0; n < data[i].childrens.length; n++){
                          
                        txt += "<tr class='treegrid-"+sayac+" treegrid-parent-"+parentid+" ' ><td>" + data[i].childrens[n].Kisi + "</td><td>" + data[i].childrens[n].TCNo + "</td><td>" + data[i].childrens[n].Telefon + "</td><td>" + data[i].childrens[n].DogduguYer + "</td></tr>";                      
                       sayac++;
                        }
                    }
                }
            }
            if (txt != "") {
                $("#mytable").append(txt);
            }
        }
    }


    $(function () {
       
        $("#mytable").on("click", 'td', function (e) {


            var cellheadername = $('#mytable  tr th').eq($(this).index()).html();

            var cellname = $('#mytable  tr').eq($(this).index()).html();

            // alert(cellname);
            if (cellheadername == "Telefon") {

                //  alert($(e.target).text());
            }

            else if (cellheadername == "T.C No") {

                alert($(e.target).text());
            }


        });
    });

}