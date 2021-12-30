alert ('Selamat datang');
var lagi=true;


while(lagi===true){
    var angka= prompt ('Silahkan isi angka untuk mengecek apakah angka tersebut ganjil atau genap');
    if(angka % 2 ==0){
    alert ('Angka genap');
    lagi=confirm('Coba lagi?');
    }else{
        alert ('Angka ganjil');
        lagi=confirm('Coba lagi?');
    }
}

