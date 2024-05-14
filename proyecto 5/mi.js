var descripcion= ""
var monto_total=0
var valorhamb= 0
var indice= 0

function acumularmonto (num){

    if (num==1){

        descripcion = "Hamburguesa Simple"
        monto_total = monto_total + 3000
        valorh = 3000
    }

    if (num==2){

        descripcion = "Hamburguesa Doble"
        monto_total = monto_total + 4000
        valorh = 4000
    }

    if (num==3){

        descripcion = "Hamburguesa Triple"
        monto_total = monto_total + 5000
        valorh = 5000
    }






}
























var detalle = document.getElementById("detalle")
var eltr = document.createElement("tr")
eltr.id= "tr"+ indice