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


<text class="annee" x="1" y="110" fill="white" font-size="8">2018</text>
<text class="annee" x="36" y="110" fill="white" font-size="8">2019</text>
<text class="annee" x="71" y="110" fill="white" font-size="8">2020</text>
<text class="annee" x="106" y="110" fill="white" font-size="8">2021</text>
<text class="annee" x="141" y="110" fill="white" font-size="8">2022</text>
<text class="annee" x="176" y="110" fill="white" font-size="8">2023</text>
<text class="annee" x="211" y="110" fill="white" font-size="8">2024</text>
`;

// Création des barres et des années pour le deuxième graphique
svg2.innerHTML += `
<rect class="barre" data-value="Demon Slayer 90" x="1" y="-1" width="20" height="91" rx="2" style="fill:#B0313F; transform:translateY(${axeY}px) scale(1,-1)"/>
<rect class="barre" data-value="Demon Slayer 70" x="36" y="-1" width="20" height="70" rx="2" style="fill:#B0313F; transform:translateY(${axeY}px) scale(1,-1)"/>
<rect class="barre" data-value="Demon Slayer 80" x="71" y="-1" width="20" height="80" rx="2" style="fill:#B0313F; transform:translateY(${axeY}px) scale(1,-1)"/>
<rect class="barre" data-value="Demon Slayer 60" x="106" y="-1" width="20" height="60" rx="2" style="fill:#B0313F; transform:translateY(${axeY}px) scale(1,-1)"/>
<rect class="barre" data-value="Demon Slayer 50" x="141" y="-1" width="20" height="50" rx="2" style="fill:#B0313F; transform:translateY(${axeY}px) scale(1,-1)"/>
<rect class="barre" data-value="Demon Slayer 40" x="176" y="-1" width="20" height="40" rx="2" style="fill:#B0313F; transform:translateY(${axeY}px) scale(1,-1)"/>
<rect class="barre" data-value="Demon Slayer 30" x="211" y="-1" width="20" height="30" rx="2" style="fill:#B0313F; transform:translateY(${axeY}px) scale(1,-1)"/>


<text class="annee" x="1" y="110" fill="white" font-size="8">2018</text>
<text class="annee" x="36" y="110" fill="white" font-size="8">2019</text>
<text class="annee" x="71" y="110" fill="white" font-size="8">2020</text>
<text class="annee" x="106" y="110" fill="white" font-size="8">2021</text>
<text class="annee" x="141" y="110" fill="white" font-size="8">2022</text>
<text class="annee" x="176" y="110" fill="white" font-size="8">2023</text>
<text class="annee" x="211" y="110" fill="white" font-size="8">2024</text>
`;

// Réajustement des axes pour correspondre à la nouvelle position des barres
svg1.innerHTML += `<rect class="axe-horizontal" style="fill:white;" x="0" y="${axeY}" width="235" height="1" />
<rect class="axe-vertical" style="fill:white;" x="0" y="0" width="1" height="${axeY}" />`;

svg2.innerHTML += `<rect class="axe-horizontal" style="fill:white;" x="0" y="${axeY}" width="235" height="1" />
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




window.onload = function () {
    
    var options = {
        animationEnabled: true,
        backgroundColor: "transparent",
        title: {
            text: "Année 2020",
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
            indexLabel: "{label}: #percent%",
            indexLabelFontColor: "white",
            dataPoints: [
                { label: "Demon Slayer", y: 82345447, color: "#B0313F" },  // Couleur pour Demon Slayer
                { label: "Kingdom", y: 8251058, color: "#3C5265" },         // Couleur pour Kingdom
                { label: "One Piece", y: 7709667, color: "#7395B4" },       // Couleur pour One Piece
                { label: "Haikyû!!", y: 7212099, color: "#B2D3E9" },        // Couleur pour Haikyû!!
                { label: "Jujutsu Kaisen", y: 6702736, color: "#E0EEFF" }   // Couleur pour Jujutsu Kaisen
            ]
        }]
    };
    $("#chartContainer").CanvasJSChart(options);
};    