var showSignUpAlert = document.getElementById("signUpAlert");
var bodyElement = document.getElementById("body");
var inputAreaPlaceholder = document.getElementById("inputArea");
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

    if(localStorage.getItem("loggedIn")){
        if(prompt != ''){
            if(!localStorage.getItem("choosenPlan") == false && freePrompts < 1){
                noPremium.classList.add("show");
                bodyElement.classList.add("noPremium");
            }
            freePrompts--;
            inputAreaPlaceholder.placeholder = "Let's talk! " + freePrompts + "/5";
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
    }
}

var map = L.map('map').setView([42.2247, 19.0712], 10);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Coordinates for Arms Square
var armsSquareCoordinates = [42.42530870196715, 18.76981164173279];

// Kotor Marker
var markerKotor = L.marker([42.4247, 18.7712]).addTo(map);
markerKotor.bindPopup("<b>Kotor</b><br>Picturesque old town with ancient fortifications. <a href='../Main Page/Kotor_old_town/Kotor_page.html'>Learn more</a>");

// Variable to store the route
var routeControl;

markerKotor.on('click', function() {
    // Create Arms Square marker
    var armsSquareMarker = L.marker(armsSquareCoordinates).addTo(map);
    armsSquareMarker.bindPopup("Arms Square, a vibrant heart of Kotor, is surrounded by stunning architecture and rich history, where locals and visitors gather to enjoy the beauty and culture of this enchanting town.");

    // Remove the previous route if it exists
    if (routeControl) {
        map.removeControl(routeControl);
    }

    // Add a new route from Kotor to Arms Square
    routeControl = L.Routing.control({
        waypoints: [
            L.latLng(42.4247, 18.7712), // Kotor coordinates
            L.latLng(armsSquareCoordinates) // Arms Square coordinates
        ],
        routeWhileDragging: false,
        createMarker: function() { return null; } // Hide default markers
    }).addTo(map);
});



// Coordinates for Old Olive
var oldOliveCoordinates = [42.082657012643644, 19.130144944897275];

// Bar Marker
var markerBar = L.marker([42.0931, 19.1000]).addTo(map);
markerBar.bindPopup("<b>Bar</b><br>A coastal town with a rich history. <a href='../Main Page/Bar_old_town/Bar_page.html'>Learn more</a>");

// Variable to store the route
var routeControl;

markerBar.on('click', function() {
    oldOliveMarker = L.marker([42.082657012643644, 19.130144944897275]).addTo(map);
    oldOliveMarker.bindPopup("The Old Olive, a testament to resilience, stands as one of the world’s oldest olive trees, believed to be over 2,000 years old.");
    // Remove the previous route if it exists
    if (routeControl) {
        map.removeControl(routeControl);
    }

    // Add a new route from Kotor to Old Olive
    routeControl = L.Routing.control({
        waypoints: [
            L.latLng(42.0931, 19.1000), // Kotor coordinates
            L.latLng(oldOliveCoordinates) // Old Olive coordinates
        ],
        routeWhileDragging: false,
        createMarker: function() { return null; } // Hide default markers
    }).addTo(map);
});



// Coordinates for Balšić Tower
var balsicTowerCoordinates = [41.92474470160749, 19.201659063662763]; // Update with correct coordinates if needed

// Ulcinj Marker
var markerUlcinj = L.marker([41.9280, 19.2024]).addTo(map); // Update with correct coordinates if needed
markerUlcinj.bindPopup("<b>Ulcinj</b><br>A charming coastal town known for its stunning beaches and rich history. <a href='../Main Page/Ulcinj/Ulcinj_page.html'>Learn more</a>");

// Variable to store the route
var routeControl;

markerUlcinj.on('click', function() {
    // Create Balšić Tower marker
    var balsicTowerMarker = L.marker(balsicTowerCoordinates).addTo(map);
    balsicTowerMarker.bindPopup("Balšić Tower, a historic symbol of Ulcinj, offers breathtaking views and a glimpse into the town's storied past.");

    // Remove the previous route if it exists
    if (routeControl) {
        map.removeControl(routeControl);
    }

    // Add a new route from Ulcinj to Balšić Tower
    routeControl = L.Routing.control({
        waypoints: [
            L.latLng(41.9280, 19.2024), // Ulcinj coordinates
            L.latLng(balsicTowerCoordinates) // Balšić Tower coordinates
        ],
        routeWhileDragging: false,
        createMarker: function() { return null; } // Hide default markers
    }).addTo(map);
});



// Coordinates for the Citadel
var citadelCoordinates = [42.277255430232586, 18.838237903103895]; // Update with correct coordinates if needed

// Budva Marker
var markerBudva = L.marker([42.2868, 18.8414]).addTo(map);
markerBudva.bindPopup("<b>Budva</b><br>Famous for its medieval old town and stunning beaches. <a href='../Main Page/Budva_old_town/Budva_page.html'>Learn more</a>");

// Variable to store the route
var routeControl;

markerBudva.on('click', function() {
    // Create Citadel marker
    var citadelMarker = L.marker(citadelCoordinates).addTo(map);
    citadelMarker.bindPopup("The Citadel, an ancient fortress, offers spectacular views of Budva and a glimpse into its rich history.");

    // Remove the previous route if it exists
    if (routeControl) {
        map.removeControl(routeControl);
    }

    // Add a new route from Budva to the Citadel
    routeControl = L.Routing.control({
        waypoints: [
            L.latLng(42.2868, 18.8414), // Budva coordinates
            L.latLng(citadelCoordinates) // Citadel coordinates
        ],
        routeWhileDragging: false,
        createMarker: function() { return null; } // Hide default markers
    }).addTo(map);
});



// Coordinates for the Island of Flowers
var islandOfFlowersCoordinates = [42.40587993865601, 18.70414861076295]; // Update with correct coordinates if needed

// Tivat Marker
var markerTivat = L.marker([42.4344, 18.7061]).addTo(map);
markerTivat.bindPopup("<b>Tivat</b><br>Known for its luxury marina and beautiful waterfront. <a href='../Main Page/Tivat/Tivat_page.html'>Learn more</a>");

// Variable to store the route
var routeControl;

markerTivat.on('click', function() {
    // Create Island of Flowers marker
    var islandOfFlowersMarker = L.marker(islandOfFlowersCoordinates).addTo(map);
    islandOfFlowersMarker.bindPopup("The Island of Flowers, a serene escape, is renowned for its lush gardens and stunning natural beauty.");

    // Remove the previous route if it exists
    if (routeControl) {
        map.removeControl(routeControl);
    }

    // Add a new route from Tivat to the Island of Flowers
    routeControl = L.Routing.control({
        waypoints: [
            L.latLng(42.4344, 18.7061), // Tivat coordinates
            L.latLng(islandOfFlowersCoordinates) // Island of Flowers coordinates
        ],
        routeWhileDragging: false,
        createMarker: function() { return null; } // Hide default markers
    }).addTo(map);
});



// Coordinates for Kanli Tower
var kanliTowerCoordinates = [42.45266190979035, 18.538686935649558]; // Update with correct coordinates if needed

// Herceg Novi Marker
var markerHercegNovi = L.marker([42.4601, 18.5306]).addTo(map);
markerHercegNovi.bindPopup("<b>Herceg Novi</b><br>A vibrant coastal town known for its beautiful architecture and rich cultural heritage. <a href='../Main Page/Herceg_Novi/Herceg_Novi_page.html'>Learn more</a>");

// Variable to store the route
var routeControl;

markerHercegNovi.on('click', function() {
    // Create Kanli Tower marker
    var kanliTowerMarker = L.marker(kanliTowerCoordinates).addTo(map);
    kanliTowerMarker.bindPopup("Kanli Tower, a historic fortress, offers stunning panoramic views of the Bay of Kotor and a glimpse into the town's past.");

    // Remove the previous route if it exists
    if (routeControl) {
        map.removeControl(routeControl);
    }

    // Add a new route from Herceg Novi to Kanli Tower
    routeControl = L.Routing.control({
        waypoints: [
            L.latLng(42.4601, 18.5306), // Herceg Novi coordinates
            L.latLng(kanliTowerCoordinates) // Kanli Tower coordinates
        ],
        routeWhileDragging: false,
        createMarker: function() { return null; } // Hide default markers
    }).addTo(map);
});




// Coordinates for the Museum of the City of Perast
var museumPerastCoordinates = [42.4880507342293, 18.69602139147089]; // Update with correct coordinates if needed

// Perast Marker
var markerPerast = L.marker([42.48631700458585, 18.699953489096792]).addTo(map);
markerPerast.bindPopup("<b>Perast</b><br>A picturesque town known for its baroque architecture and stunning coastal views. <a href='../Main Page/Perast/Perast_page.html'>Learn more</a>");

// Variable to store the route
var routeControl;

markerPerast.on('click', function() {
    // Create Museum of the City of Perast marker
    var museumPerastMarker = L.marker(museumPerastCoordinates).addTo(map);
    museumPerastMarker.bindPopup("The Museum of the City of Perast showcases the rich history and culture of this charming coastal town.");

    // Remove the previous route if it exists
    if (routeControl) {
        map.removeControl(routeControl);
    }

    // Add a new route from Perast to the Museum of the City of Perast
    routeControl = L.Routing.control({
        waypoints: [
            L.latLng(42.48631700458585, 18.699953489096792), // Perast coordinates
            L.latLng(museumPerastCoordinates) // Museum coordinates
        ],
        routeWhileDragging: false,
        createMarker: function() { return null; } // Hide default markers
    }).addTo(map);
});



// Coordinates for Banja Monastery
var banjaMonasteryCoordinates = [42.50393379280052, 18.69681851290625]; // Update with correct coordinates if needed

// Risan Marker
var markerRisan = L.marker([42.514894668956394, 18.697700551369188]).addTo(map);
markerRisan.bindPopup("<b>Risan</b><br>A historic town known for its ancient Roman mosaics and serene coastal beauty. <a href='../Main Page/Risan/Risan_page.html'>Learn more</a>");

// Variable to store the route
var routeControl;

markerRisan.on('click', function() {
    // Create Banja Monastery marker
    var banjaMonasteryMarker = L.marker(banjaMonasteryCoordinates).addTo(map);
    banjaMonasteryMarker.bindPopup("Banja Monastery, a serene spiritual site, offers a glimpse into Montenegro's rich religious heritage and stunning landscapes.");

    // Remove the previous route if it exists
    if (routeControl) {
        map.removeControl(routeControl);
    }

    // Add a new route from Risan to Banja Monastery
    routeControl = L.Routing.control({
        waypoints: [
            L.latLng(42.514894668956394, 18.697700551369188), // Risan coordinates
            L.latLng(banjaMonasteryCoordinates) // Banja Monastery coordinates
        ],
        routeWhileDragging: false,
        createMarker: function() { return null; } // Hide default markers
    }).addTo(map);
});

