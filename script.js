// Map of who buys for whom
const buysFor = {
    Jim: "Steve",
    Margaret: "Felicity",
    Denis: "Cada",
    Maddy: "Alasdair",
    Maders: "Jim",
    Erick: "Steph",
    Cada: "Margaret",
    Steve: "Maders",
    Felicity: "Denis",
    Waleed: "Erick",
    Steph: "Waleed",
    Alasdair: "Maddy"
};

// Get the grid and heading elements
const grid = document.getElementById("grid");
const heading = document.getElementById("heading");

// Populate the grid with images
Object.keys(buysFor).forEach(name => {
    const img = document.createElement("img");
    img.src = `${name}.jpg`;
    img.alt = name;
    img.dataset.buyer = name;
    img.dataset.receiver = buysFor[name];
    grid.appendChild(img);
});

// Add click event to each image
grid.addEventListener("click", event => {
    if (event.target.tagName === "IMG") {
        const buyer = event.target.dataset.buyer;
        const receiver = event.target.dataset.receiver;

        // Update heading
        heading.textContent = `${buyer} buys for ${receiver}`;

        // Update image to show the receiver
        event.target.src = `${receiver}.jpg`;
        event.target.alt = receiver;

        // Swap buyer and receiver for toggling
        event.target.dataset.buyer = receiver;
        event.target.dataset.receiver = buyer;
    }
});
