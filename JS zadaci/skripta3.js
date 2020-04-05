function Funkcija1() {
    var ime = prompt("Molimo, unesite svoje ime", "Sven");
    if (ime != null){
        document.getElementById("da").innerHTML= "Pozdrav " + ime + "! Dobrodošli na moju stranicu!";
    }

}