
// Title

const title = "Java Script with API DTS FGA Bacth 2 x Progate";

document.querySelector(".title").innerHTML= title;


// Class
function namaKelas (kelas) {
    
    
    let kelasProgat = kelas;
    
    document.querySelector(".className").innerHTML = kelasProgat;
}

namaKelas ("Kelas A");


// Theme
const paragraph = ["Belajar GIT menggunakan Github","Belajar JavaScript","Belajar API"];

let text = "";

for (let p = 0; p <= 2; p++) {

    text += ` &#x270F; ${paragraph[p]} ${"<br>"}`;

    document.querySelector(".pragraph").innerHTML= text;
    //console.table(paragraph[p]);

}

