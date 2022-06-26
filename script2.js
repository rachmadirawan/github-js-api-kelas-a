function getPeserta() {
    fetch('./data/peserta.json')
    .then(response => response.json())
    .then(data =>{
        renderInstructor(data.instructur[0])
        renderPeserta(data.peserta)
 
    })
}  

getPeserta()

function renderPeserta(persons) {
    persons.forEach(person => {
        const el = makeCard(person)
        const wadah = document.querySelector(".card-wrapper")
        wadah.insertAdjacentHTML("beforeend", el)
    });

}

function makeCard(peserta){
    return `<div class="card">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <div class="card-image">
                        <img src="assets/images/ninja-ken.png" alt="">
                    </div>
                    <div class="card-body">
                        <div class="card-info">
                            <h3>${peserta.nama}</h3>
                            ${peserta.quotes ? `<p>${peserta.quotes}</p>` :  `<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex voluptatem ea fugit voluptatibus repellendus alias adipisci obcaecati quos quidem quasi, rerum impedit nostrum, atque architecto dolor error corrupti incidunt eligendi facilis porro pariatur! Harum ea illo illum reiciendis laboriosam praesentium dolor nesciunt debitis sint fugit. Totam fugit deleniti modi temporibus?</p>`}
                       
                        </div>
                        <div class="card-media">
                            <a href="${peserta.github}" target="blank">
                            <i class="fa-brands fa-github fa-2x"></i></a>
                        </div>
                    </div>
                </div>`
}

const keyword = document.getElementById("nama")
function cariPeserta(nama) {
    const cards = document.querySelectorAll(".card")
    const cari = nama.toLowerCase()
    cards.forEach(card => {
        const info = card.querySelector(".card-info h3")
        let nama = info.textContent.toLowerCase()
        if(nama.indexOf(cari) != -1) {
            card.setAttribute('style', 'display:initial')
        }    
        else{  
            card.setAttribute('style', 'display: none !important')
        }
    });
}

keyword.addEventListener("keyup", function(e) {
    cariPeserta(e.target.value)
})

function renderInstructor(instructor) {
    const card = document.querySelector(".card-instructor")
    const nama = card.querySelector(".card-info h3")
    const quotes = card.querySelector(".card-info p")
    const github = card.querySelector(".card-media a")
    nama.textContent = instructor.nama
    if (instructor.quotes) {
        quotes.textContent = instructor.quotes
    }
    github.href = instructor.github

}