function showOutput() {
    var form = document.getElementById("myForm");
    var outputDiv = document.getElementById("outputDiv");
    var miestoOutput = document.getElementById("miestoOutput");
    var casOutput = document.getElementById("casOutput");
    var napadyOutput = document.getElementById("napadyOutput");

    // Získanie hodnôt z formulára
    var miesto = document.getElementById("miesto").value;
    var cas = document.getElementById("cas").value;
    var napady = document.getElementById("napady").value;

    // Skrytie formulára
    form.style.display = "none";
    // Zobrazenie výpisu
    outputDiv.style.display = "block";
    
    // Nastavenie hodnôt výstupu
    miestoOutput.textContent = "Miesto: " + miesto;
    casOutput.textContent = "Kedy: " + cas;
    napadyOutput.textContent = "Nápady: " + napady;
}