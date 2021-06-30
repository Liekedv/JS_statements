

const age = 19;
const isFemale = true;

if (age > 18) {
   // console.log("Welkom bij de club!");
    if (isFemale) {
        console.log("Welkom bij de ladiesnight");
    }
    else {
        console.log("Volgende keer beter. Het is nu uitsluitend voor dames.")
    }
} else {
    if (age < 18) {
        console.log("U bent nog te jong. U wordt vriendelijk verzocht buiten te blijven.");
    }
}

//deel 3 - veilig thuiskomen
const driverStatus = "bob";

if (driverStatus === "bob") {
    console.log("U bent de bob. Veilige terugreis");
} else {
    console.log("U was geen bob en mag niet rijden.");
}