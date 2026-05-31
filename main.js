// =========================
// LOADING SERVER
// =========================

function loadServer(nama, tipe, discord){

    const clickSound = document.getElementById("clickSound");
    const loadingSound = document.getElementById("loadingSound");

    clickSound.currentTime = 0;
    clickSound.play();

    loadingSound.currentTime = 0;
    loadingSound.play();

    document.getElementById("infoBox").innerHTML = `
        <div class="loader"></div>
        <br>
        <h3>Loading ${nama}...</h3>
    `;

    setTimeout(() => {

        loadingSound.pause();
        loadingSound.currentTime = 0;

        document.getElementById("infoBox").innerHTML = `
            <h2>${nama}</h2>
            <br>
            <p>Tipe Server : ${tipe}</p>
            <br>
            <a href="${discord}" target="_blank"
            style="
            background:#38bdf8;
            color:white;
            text-decoration:none;
            padding:12px 20px;
            border-radius:10px;">
            JOIN DISCORD
            </a>
        `;

    }, 1500);
}

// =========================
// LOADING SCREEN WEBSITE
// =========================

window.onload = function(){

    const bar = document.getElementById("progressBar");
    const text = document.getElementById("loadingText");
    const loadingScreen = document.getElementById("loadingScreen");

    let progress = 0;

    const loading = setInterval(() => {

        if(progress < 80){
            progress += 4;
        }else{
            progress += 2;
        }

        if(progress > 100){
            progress = 100;
        }

        bar.style.width = progress + "%";
        text.innerHTML = "Loading... " + progress + "%";

        if(progress >= 100){

            clearInterval(loading);

            text.innerHTML = "Ready!";

            setTimeout(() => {

                loadingScreen.style.opacity = "0";
                loadingScreen.style.transition = "0.8s";

                setTimeout(() => {
                    loadingScreen.style.display = "none";
                }, 800);

            }, 300);
        }

    }, 100);

};