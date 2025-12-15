// -----------------------------
// SCRIPT.JS - UPDATED VERSION
// -----------------------------

window.addEventListener("DOMContentLoaded", () => {

    // ======== CLOCK & DATE ========
    const clockContainer = document.getElementById("clock");

    function updateClock() {
        const now = new Date();
        let day = now.getDate();
        let month = now.getMonth() + 1;
        let year = now.getFullYear();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        let seconds = now.getSeconds();

        if (day < 10) day = "0" + day;
        if (month < 10) month = "0" + month;
        if (hours < 10) hours = "0" + hours;
        if (minutes < 10) minutes = "0" + minutes;
        if (seconds < 10) seconds = "0" + seconds;

        const currentTime = `📅 ${day}/${month}/${year} | ⏰ ${hours}:${minutes}:${seconds}`;
        if (clockContainer) clockContainer.innerHTML = currentTime;
    }

    updateClock();
    setInterval(updateClock, 1000);

    // ======== WELCOME ALERT FOR INDEX ========
    if (window.location.pathname.includes("index")) {
        alert("Welcome to my personal website!");
    }

    // ======== SPOTIFY FLOATING PLAYER ========
    function addSpotifyPlayer() {
        const player = document.createElement("div");
        player.id = "spotify-floating";
        player.style.position = "fixed";
        player.style.bottom = "20px";
        player.style.right = "20px";
        player.style.zIndex = "9999";
        player.style.background = "rgba(0,0,0,0.4)";
        player.style.padding = "10px";
        player.style.borderRadius = "15px";
        player.style.backdropFilter = "blur(10px)";
        player.style.boxShadow = "0 5px 20px rgba(0,0,0,0.4)";

        // Insert your exact Spotify iframe
        player.innerHTML = `
            <iframe 
                data-testid="embed-iframe" 
                style="border-radius:12px" 
                src="https://open.spotify.com/embed/track/4tUvalPiIosJVC3iiNICzD?utm_source=generato"" 
                width="300" 
                height="80" 
                frameborder="0" 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy">
            </iframe>
        `;

        document.body.appendChild(player);
    }

    addSpotifyPlayer();

});
