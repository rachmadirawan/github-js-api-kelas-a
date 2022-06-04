
// Title

const title = "Java Script with API DTS FGA Bacth 2 x Progate.";

document.querySelector(".title").innerHTML= title;

// Paragraph

const paragraph = "Belajar GIT menggunakan Github";

document.querySelector(".pragraph").innerHTML= ` Tema: ${paragraph}`;

// Kelas

function namaKelas (kelas) {
    

    let kelasProgat = kelas;

    document.querySelector(".className").innerHTML = kelasProgat;
}

namaKelas ("Kelas A");