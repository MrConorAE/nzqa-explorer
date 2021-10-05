function goToStandard() {
    // Get the standard number entered.
    var standard = document.getElementById("standard").value;
    if (standard == "") {
        alert("Please enter a standard.");
        return;
    } else if (standard.length != 5) {
        alert("Please enter a valid standard number.");
        return;
    } else {
        window.location.href = "https://www.nzqa.govt.nz/ncea/assessment/view-detailed.do?standardNumber=" + standard;
    }
}

function goToSubject() {
    // Get the standard number entered.
    var subject = document.getElementById("subject").value;
    var level = document.getElementById("level").value;
    if (subject == "") {
        alert("Please choose a subject.");
        return;
    } else if (level < 1 || level > 3) {
        alert("Please enter a valid level (1-3).");
        return;
    } else {
        window.location.href = "https://www.nzqa.govt.nz/ncea/assessment/search.do?query=" + subject + "&view=all&level=0" + level;
    }
}