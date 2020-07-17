
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
                "Telefon": "0530 333 33 33",
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

                    txt += "<tr class='treegrid-" + sayac + "' id='id_" + sayac + "' ><td>" + data[i].Kisi + "</td><td>" + data[i].TCNo + "</td><td>" + data[i].Telefon + "</td><td>" + data[i].DogduguYer + "</td></tr>";
                    sayac++;
                    if (data[i].childrens) {
                        var parentid = (sayac - 1);
                        for (var n = 0; n < data[i].childrens.length; n++) {

                            txt += "<tr class='treegrid-" + sayac + " treegrid-parent-" + parentid + " ' id='id_" + sayac + "'><td>" + data[i].childrens[n].Kisi + "</td><td>" + data[i].childrens[n].TCNo + "</td><td>" + data[i].childrens[n].Telefon + "</td><td>" + data[i].childrens[n].DogduguYer + "</td></tr>";
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

              $("<div data-role='controlgroup' data-type='horizontal'><a href='"+$(e.target).text()+"' data-icon='phone' data-role='button'>"+$(e.target).text()+"</a></div>").dialog();

            }

            else if (cellheadername == "T.C. No") {
                var element = $(this).parent();
                var id = element[0].id;
                var row = document.getElementById(id);
                var ad, tcno, telefon, dogumyeri;

                // for (var m = 0; m < row.childNodes.length; m++)
                if (row.childNodes.length > 3) {
                    ad = document.getElementById(id).cells[0].innerText;
                    tcno = document.getElementById(id).cells[1].innerText;
                    telefon = document.getElementById(id).cells[2].innerText;
                    dogumyeri = document.getElementById(id).cells[3].innerText;

                }

                $("<p>Adı Soyadı:" + ad + "<br/>T.C. No:" + tcno + "<br/>Telefon:" + telefon + "<br/>Doğum Yeri:" + dogumyeri + "</p>").dialog();

            }


        });
    });

}