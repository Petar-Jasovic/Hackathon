// Immediately Invoked Function Expression (IIFE) to keep the code self-contained
(() => {
    // Define the available pages and their paths
    const pages = {
        //towns
        bar: "Bar_old_town/Bar_page.html",
        budva: "Budva_old_town/Budva_page.html",
        herceg: "Herceg_novi_old_town/Herceg_Novi_page.html",
        kotor: "Kotor_old_town/Kotor_page.html",
        ulcinj: "Ulcinj_old_town/Ulcinj_page.html",

        //available landmarks ToT

        perast: "Perast_landmarks/Perast_landmark_page.html",
        tivat: "Tivat_landmarks/Tivat_landmark_page.html",

        //other

        resturants: "resturants/resturants.html",
        tours: "tours/tours_page.html",
        tradition: "traditions_and_customs/traditions_and_customs_page.html",
        customs: "traditions_and_customs/traditions_and_customs_page.html",
        subscription: "../Subscription/pricing.html",
        premium: "../Subscription/pricing.html",
        chatbot: "../ChatBot/chatBot.html",
        tourbot: "../ChatBot/chatBot.html"
    };

    // Define the redirection function
    function redirectToPage() {
        // Get the trimmed search input
        const searchInput = document.getElementById("searchInput").value.trim().toLowerCase();

        // Split the input into words
        const inputWords = searchInput.split(" ");
        
        // Check if the input matches any single page key
        if (pages[inputWords[0]]) {
            window.location.href = pages[inputWords[0]];
            return; // Exit after redirecting to the exact match
        }

        // Create a key by concatenating the input words (for cases like "home something")
        const concatenatedKey = inputWords.join(""); // Concatenate without spaces

        // Check if the concatenated key exists in pages
        if (pages[concatenatedKey]) {
            window.location.href = pages[concatenatedKey];
        } else {
            alert("Page not found! Please enter a valid page name.");
        }
    }

    // Add the event listener to the button after DOM content is loaded
    document.addEventListener("DOMContentLoaded", () => {
        const searchButton = document.getElementById("searchButton");
        searchButton.addEventListener("click", redirectToPage);
    });
})();