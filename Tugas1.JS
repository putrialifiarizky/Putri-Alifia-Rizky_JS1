var data = 18; 

//Ini adalah contoh program IF ELSE
if (data == 19){
    console.log("angka ini nilainya sama");
} else {
    console.log("angka ini nilainya tidak sama");
}

//Ini adalah contoh program NESTED IF
if (data < 10) {
   console.log("Angka ini kurang dari 10") 
} 
else if(data == 18){
    console.log("Angka ini sama dengan 18")
}
else {
    console.log("Angka ini kurang dari 18")  
}

//Ini adalah contoh program SWITCH CASE
switch(true){
    case data<18:
        console.log("Data ini kurang dari 18")
        break;
    case data>18:
        console.log("Data ini lebih dari 18")
        break;
    default:
        console.log("Ini adalah nilai default")    
}

//Ini adalah contoh program FOR STATEMENT 
for(var angka=1; angka<=10; angka++){
    console.log("Tulisan ini berulang")
}

//Ini adalah contoh program WHILE
var angka=6
while (angka<10) {
    console.log("Tulisan ini akan berulang")
    angka++
}

//Ini adalah contoh program DO WHILE
var angka=8
do {
    console.log("Tulisan yang berulang");
    angka++
} while (angka<=12);

//Ini adalah contoh program FUNCTION
function cobafungsi(nama,tanggal) {
    console.log("Nama saya adalah "+nama+ ", Saya lahir tanggal" + tanggal)
}
cobafungsi("Putri Alifia Rizky", " 18 Agustus 2002")