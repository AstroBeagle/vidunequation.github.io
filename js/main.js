let button = document.getElementById('btn');

button.addEventListener('click', () => {
    const women = parseInt(document.getElementById('women').value);
    const dunes = parseInt(document.getElementById('dunes').value);
    const intel = parseFloat(document.getElementById('intel').value);
    const result = document.getElementById('output');
    let women_status = false, dunes_status = false, intel_status = false;

    if (women === '' || isNaN(women) || (women < 0)) {
        document.getElementById('women_error').innerHTML = "Please provide a valid amount of women";
    } else {
        document.getElementById('women_error').innerHTML = '';
        women_status = true;
    }

    if (dunes === '' || isNaN(dunes) || (dunes > 5) || (dunes <= 0)) {
        document.getElementById('dunes_error').innerHTML = "Please provide a valid amount of dunes";
    } else {
        document.getElementById('dunes_error').innerHTML = '';
        dunes_status = true;
    }

    if (intel === '' || isNaN(intel) || (intel < 0)) {
        document.getElementById('intel_error').innerHTML = "Please provide a valid amount of intelligent persons";
    } else {
        document.getElementById('intel_error').innerHTML = '';
        intel_status = true;
    }

    if (women_status && dunes_status && intel_status) {
        const sp = ((((women+intel)*(0.31622776601) / (5*dunes))) * 100).toFixed(2);

        if (sp < 25) {
            result.innerHTML = "He's probably right : " + sp + "%";
        } else if (sp >= 25 && sp < 75) {
            result.innerHTML = "He could be right he could be wrong idk man : " + sp + "%";
        } else {
            result.innerHTML = "What is bro yapping about he is WRONG : " + sp + "%";
        }
    } else {
        alert('The form has errors');
        result.innerHTML = '';
    }
});
