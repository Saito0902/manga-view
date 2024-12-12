const svg1 = document.querySelector("#histogramme1");
const svg2 = document.querySelector("#histogramme2");
const info = document.querySelector("div.infobulle");

const axeY = 90; // La nouvelle position de l'axe des abscisses

// Création des barres et des années pour le premier graphique
svg1.innerHTML += `
<rect class="barre" data-value="One piece 8 113 317" x="1" y="-1" width="20" height="19" rx="2" style="fill:#B0313F; transform:translateY(${axeY}px) scale(1,-1)"/>
<rect class="barre" data-value="Demon Slayer 12 057 628" x="36" y="-1" width="20" height="23" rx="2" style="fill:#B0313F; transform:translateY(${axeY}px) scale(1,-1)"/>
<rect class="barre" data-value="Demon Slayer 82 345 447" x="71" y="-1" width="20" height="83" rx="2" style="fill:#B0313F; transform:translateY(${axeY}px) scale(1,-1)"/>
<rect class="barre" data-value="Jujutsu kaisen 30 817 746" x="106" y="-1" width="20" height="41" rx="2" style="fill:#B0313F; transform:translateY(${axeY}px) scale(1,-1)"/>
<rect class="barre" data-value="Jujutsu kaisen 12 282 260" x="141" y="-1" width="20" height="23" rx="2" style="fill:#B0313F; transform:translateY(${axeY}px) scale(1,-1)"/>
<rect class="barre" data-value="Blue Lock 10 527 146" x="176" y="-1" width="20" height="21" rx="2" style="fill:#B0313F; transform:translateY(${axeY}px) scale(1,-1)"/>
<rect class="barre" data-value="Jujutsu kaisen 4 630 685" x="211" y="-1" width="20" height="15" rx="2" style="fill:#B0313F; transform:translateY(${axeY}px) scale(1,-1)"/>


<text class="annee" x="5" y="100" fill="white" font-size="8">2018</text>
<text class="annee" x="40" y="100" fill="white" font-size="8">2019</text>
<text class="annee" x="76" y="100" fill="white" font-size="8">2020</text>
<text class="annee" x="111" y="100" fill="white" font-size="8">2021</text>
<text class="annee" x="146" y="100" fill="white" font-size="8">2022</text>
<text class="annee" x="181" y="100" fill="white" font-size="8">2023</text>
<text class="annee" x="216" y="100" fill="white" font-size="8">2024</text>
`;

// Création des barres et des années pour le deuxième graphique
svg2.innerHTML += `
<rect class="barre" data-value="One Piece 500M" x="1" y="-1" width="20" height="90" rx="2" style="fill:#B0313F; transform:translateY(${axeY}px) scale(1,-1)"/>
<rect class="barre" data-value="One piece 500M" x="36" y="-1" width="20" height="90" rx="2" style="fill:#B0313F; transform:translateY(${axeY}px) scale(1,-1)"/>
<rect class="barre" data-value="Demon Slayer 150M" x="71" y="-1" width="20" height="27" rx="2" style="fill:#B0313F; transform:translateY(${axeY}px) scale(1,-1)"/>
<rect class="barre" data-value="Detective Conan 250M" x="106" y="-1" width="20" height="45" rx="2" style="fill:#B0313F; transform:translateY(${axeY}px) scale(1,-1)"/>
<rect class="barre" data-value="Blue Lock 30M" x="141" y="-1" width="20" height="5" rx="2" style="fill:#B0313F; transform:translateY(${axeY}px) scale(1,-1)"/>
<rect class="barre" data-value="Death Note 30M" x="176" y="-1" width="20" height="5" rx="2" style="fill:#B0313F; transform:translateY(${axeY}px) scale(1,-1)"/>



<text class="annee" x="3" y="100" fill="white" font-size="8">Shonen</text>
<text class="annee" x="36" y="100" fill="white" font-size="8">Aventure</text>
<text class="annee" x="68" y="100" fill="white" font-size="8">Fantastique</text>
<text class="annee" x="108" y="100" fill="white" font-size="8">Mystère</text>
<text class="annee" x="145" y="100" fill="white" font-size="8">Sport</text>
<text class="annee" x="179" y="100" fill="white" font-size="8">Seinen</text>
`;

// Réajustement des axes pour correspondre à la nouvelle position des barres
svg1.innerHTML += `<rect class="axe-horizontal" style="fill:white;" x="0" y="${axeY}" width="250" height="1" />
<rect class="axe-vertical" style="fill:white;" x="0" y="0" width="1" height="${axeY}" />`;

svg2.innerHTML += `<rect class="axe-horizontal" style="fill:white;" x="0" y="${axeY}" width="205" height="1" />
<rect class="axe-vertical" style="fill:white;" x="0" y="0" width="1" height="${axeY}" />`;

// Ajout de la gestion des événements de survol pour les graphiques
const barres1 = svg1.querySelectorAll("rect.barre");
barres1.forEach(barre => {
    barre.addEventListener("mouseover", (e) => {
        const value = e.target.getAttribute("data-value");
        info.style.display = "block";
        info.textContent = value;
    });
    barre.addEventListener("mousemove", (e) => {
        info.style.left = e.pageX + 10 + "px";
        info.style.top = e.pageY + 10 + "px";
    });
    barre.addEventListener("mouseout", () => {
        info.style.display = "none";
    });
});




// Pour le deuxième graphique
const barres2 = svg2.querySelectorAll("rect.barre");
barres2.forEach(barre => {
    barre.addEventListener("mouseover", (e) => {
        const value = e.target.getAttribute("data-value");
        info.style.display = "block";
        info.textContent = value;
    });
    barre.addEventListener("mousemove", (e) => {
        info.style.left = e.pageX + 10 + "px";
        info.style.top = e.pageY + 10 + "px";
    });
    barre.addEventListener("mouseout", () => {
        info.style.display = "none";
    });
});

///////////////////////////////////////////

const barres = document.querySelectorAll("rect.barre");

// Fonction pour ajuster l'opacité et ajouter une ombre
barres.forEach(barre => {
    barre.addEventListener("mouseover", () => {
        barres.forEach(b => {
            if (b !== barre) {
                b.style.opacity = "0.5"; // Réduire l'opacité des autres barres
                b.style.filter = "none"; // Supprimer toute ombre pour les autres
            }
        });
        barre.style.opacity = "1"; // Assurer que la barre survolée est visible
        barre.style.filter = "drop-shadow(0 0 1px #FFA1AC)"; // Ajouter une ombre blanche
    });

    barre.addEventListener("mouseout", () => {
        barres.forEach(b => {
            b.style.opacity = "1"; // Réinitialiser l'opacité de toutes les barres
            b.style.filter = "none"; // Supprimer toute ombre
        });
    });
});




////////////////////////////////////////////



window.onload = function () {
    
    var options = {
        animationEnabled: true,
        backgroundColor: "transparent",
        title: {
            text: "Zoom sur les mangas vendus en 2020",
            fontColor: "white",  // Forcer le titre en blanc
            fontSize: 48,
        },
        legend: {
            fontSize: 16,
            fontColor: "white"   // Forcer la légende en blanc
        },
        data: [{
            type: "doughnut",
            innerRadius: "50%",
            showInLegend: true,
            legendText: "{label}",
            indexLabel: "{label}",
            indexLabelFontColor: "white",
            dataPoints: [
                { label: "Demon Slayer", y: 82345447, color: "#B0313F" },  // Couleur pour Demon Slayer
                { label: "Kingdom", y: 8251058, color: "#3C5265" },         // Couleur pour Kingdom
                { label: "One Piece", y: 7709667, color: "#4C6B88" },       // Couleur pour One Piece
                { label: "Haikyû!!", y: 7212099, color: "#568EB2" },        // Couleur pour Haikyû!!
                { label: "Jujutsu Kaisen", y: 6702736, color: "#72A4E0" }   // Couleur pour Jujutsu Kaisen
            ]
        }]
    };
    $("#chartContainer").CanvasJSChart(options);
};    