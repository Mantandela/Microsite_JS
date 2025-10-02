// public/script.js

// 1. Personalized Greeting (Run on Page Load)
function personalizedGreeting() {
    // Prompt for the student's name
    const studentName = prompt("Welcome to USIU! What's your first name?");
    
    // Fallback for no name entered
    const nameToUse = studentName ? studentName : "New Student";

    // Show an alert to the user
    alert("Karibu, " + nameToUse + "!");

    // Log the name to the console for debugging
    console.log("Student entered name:", nameToUse);

    // Update the greeting element on the page
    const greetingElement = document.getElementById("greeting");
    if (greetingElement) {
        greetingElement.textContent = "Hello, " + nameToUse + "!";
    }

}

// 2. Cost Estimator to be Triggered on Button Click
function runEstimator() {
    // Get input from from user and covert to numbers
    const days = Number(prompt("How many days per week do you come to campus? (e.g., 3)"));
    const costPerTrip = Number(prompt("Average transport cost per trip in KSh? (e.g., 120)"));
    const snacksPerDay = Number(prompt("Snacks per day? (e.g., 2)"));
    const snackPrice = Number(prompt("Average price per snack in KSh? (e.g., 80)"));

    // Basic Arithmetic Calculations
    // Transport: days * costPerTrip * 2 (to and from)
    const transportWeekly = days * costPerTrip * 2; 

    // Snacks: days * snacksPerDay * snackPrice
    const snacksWeekly = days * snacksPerDay * snackPrice;

    // Total Weekly
    const totalWeekly = transportWeekly + snacksWeekly;
    
    // Save 10% Tip (simple % math)
    const save10 = totalWeekly * 0.10;
    const totalWithSavings = totalWeekly - save10;

    // Log all key values for traceability (Debugging Checklist)
    console.log({ 
        days: days, 
        costPerTrip: costPerTrip, 
        snacksPerDay: snacksPerDay, 
        snackPrice: snackPrice,
        transportWeekly: transportWeekly, 
        snacksWeekly: snacksWeekly, 
        totalWeekly: totalWeekly, 
        totalWithSavings: totalWithSavings
    });

    // Create a neat summary string
    // Use Math.round for currency-like display
    const summary = 
`Weekly Transport: KSh ${Math.round(transportWeekly)}
Weekly Snacks:    KSh ${Math.round(snacksWeekly)}
--------------------------------
Weekly Total:     KSh ${Math.round(totalWeekly)}

**Saving Tip**
If you manage to carpool one day a week or cut one snack per day, 
you could save 10% (KSh ${Math.round(save10)}) for a new weekly total of:
KSh ${Math.round(totalWithSavings)}`;

    // Display the summary on the page using innerText
    document.getElementById("summary").innerText = summary;
    
    // Alert the user to check the summary and console
    alert("Check your summary on the page. All details logged to console for debugging.");
}


// 3. Theme Toggle (Triggered on Button Click)
function toggleTheme() {
    // Check the current background color (defaults to 'white' or empty string if not set by JS)
    const current = document.body.style.backgroundColor;

    // Theme logic: If currently light (white or empty), switch to dark (#111), otherwise switch to light (white)
    if (current === "white" || current === "") {
        // Switch to Dark Theme
        document.body.style.backgroundColor = "#1f1f1f"; // Dark background
        document.body.style.color = "white"; // Light text
        
        // Optional: Update CSS variable for coherent card background change
        document.documentElement.style.setProperty('--card-bg', '#333'); 
        document.documentElement.style.setProperty('--accent', '#ffc72c'); // Switch accent color for dark mode

    } else {
        // Switch to Light Theme
        document.body.style.backgroundColor = "white"; 
        document.body.style.color = "#1f1f1f"; // Dark text
        
        // Optional: Reset CSS variable
        document.documentElement.style.setProperty('--card-bg', '#f5f5f5');
        document.documentElement.style.setProperty('--accent', '#004d9c'); 
    }
    
    // Log the change
    console.log("Theme toggled. Background now:", document.body.style.backgroundColor);
}

// Note: The personalizedGreeting() function is called via the <script> block in index.html
// to ensure it runs immediately upon page load.