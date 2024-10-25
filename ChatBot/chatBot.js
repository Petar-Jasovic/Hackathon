var showSignUpAlert = document.getElementById("signUpAlert");
var bodyElement = document.getElementById("body");
var freePrompts = 5;

if (!localStorage.getItem("loggedIn")) {
    showSignUpAlert.classList.add("show");
    bodyElement.classList.add("blurEffect");
}

async function generateText() {
    const prompt = document.getElementById('inputArea').value;
    const responseDiv = document.getElementById('response');
    const errorPromptVoid = document.getElementById('errorPrompt');

    document.getElementById('inputArea').value = '';

    errorPromptVoid.innerText = "";
    errorPromptVoid.style.color = "";
    inputArea.style.borderColor = "";

    if(localStorage.getItem("loggedIn") && freePrompts > 0){
        if(prompt != ''){
            freePrompts--;
            responseDiv.innerText += 'You: ' + prompt + '\n\n';
            try {
                const response = await fetch('http://localhost:5000/api/generate', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ prompt })
                });

                const data = await response.json();
                const newText = "TourBot: " + (data.text || 'Error generating text: ' + data.error) + '\n';
                responseDiv.innerText += newText + '\n';
            } catch (error) {
                console.error('Fetch error:', error);
                responseDiv.innerText += 'Error generating text\n\n';
            }
        }else{
            errorPromptVoid.innerText = "Prompt cannot be empty.";
            errorPromptVoid.style.color = "rgb(156, 0, 0)";
            inputArea.style.border = "0.2rem solid rgb(156, 0, 0)";
        }
    } else if(freePrompts <= 0) {
        
    }
}

var map = L.map('map').setView([42.2247, 19.0712], 10);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Kotor Marker
// var kotorIcon = L.icon({
//     iconUrl: '',
//     iconSize: [32, 32], // size of the icon
//     iconAnchor: [16, 32], // point of the icon which will correspond to marker's location
//     popupAnchor: [0, -32] // point from which the popup should open relative to the iconAnchor
// });

var markerKotor = L.marker([42.4247, 18.7712]).addTo(map);
markerKotor.bindPopup("<b>Kotor</b><br>Picturesque old town with ancient fortifications. <a href='../Main Page/Kotor_old_town/Kotor_page.html'>Learn more</a>");

// Ulcinj Marker
var markerUlcinj = L.marker([41.9231, 19.2031]).addTo(map);
markerUlcinj.bindPopup("<b>Ulcinj</b><br>Known for its long sandy beaches. <a href='../Main Page/Ulcinj_old_town/Ulcinj_page.html'>Learn more</a>");

// Bar Marker
var markerBar = L.marker([42.0931, 19.1000]).addTo(map);
markerBar.bindPopup("<b>Bar</b><br>A coastal town with a rich history. <a href='../Main Page/Bar_old_town/Bar_page.html'>Learn more</a>");

// Budva Marker
var markerBudva = L.marker([42.2868, 18.8414]).addTo(map);
markerBudva.bindPopup("<b>Budva</b><br>Famous for its medieval old town and beaches. <a href='../Main Page/Budva_old_town/Budva_page.html'>Learn more</a>");

// Tivat Marker
var markerTivat = L.marker([42.4344, 18.7061]).addTo(map);
markerTivat.bindPopup("<b>Tivat</b><br>Known for the luxury Porto Montenegro marina. <a href=''>Learn more</a>");

// Herceg Novi Marker
var markerHercegNovi = L.marker([42.4531, 18.5375]).addTo(map);
markerHercegNovi.bindPopup("<b>Herceg Novi</b><br>A charming town at the entrance to the Bay of Kotor. <a href='../Main Page/Herceg_Novi_old_town/Herceg_Novi_page.html'>Learn more</a>");

// var tourStops = [
//     {
//       name: "Old Town Kotor",
//       coords: [42.4246, 18.7712],
//       description: "A medieval town with UNESCO heritage status."
//     },
//     {
//       name: "Perast",
//       coords: [42.4861, 18.6976],
//       description: "A beautiful town with stunning views of the bay."
//     },
//     {
//       name: "Budva Old Town",
//       coords: [42.2770, 18.8377],
//       description: "A historic town with beautiful architecture and beaches."
//     }
//   ];

//   tourStops.forEach(function(stop) {
//     L.marker(stop.coords).addTo(map)
//       .bindPopup("<b>" + stop.name + "</b><br>" + stop.description);
//   });

//   var routeCoords = [
//     [42.4246, 18.7712],  // Kotor
//     [42.4861, 18.6976],  // Perast
//     [42.2770, 18.8377]   // Budva
//   ];

//   var polyline = L.polyline(routeCoords, {color: 'blue'}).addTo(map);

//   // Fit map to the polyline bounds
//   map.fitBounds(polyline.getBounds());