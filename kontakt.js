//VALIDERING FÖRNAMN & EFTERNAMN
function validateNamn(förefternamn) {
  const förefternamnRegex = /^[a-zA-ZåäöÅÄÖ]+$/;
  return förefternamnRegex.test(förefternamn);
}

//KOD FÖR FÖRNAMN
const förnamn = document.getElementById("fnamn");
const förnamnresultat = document.getElementById("resultatfnamn");

förnamn.addEventListener("input", function () {
  if (!validateNamn(fnamn.value)) {
    förnamnresultat.textContent = "Förnamn får bara innehålla bokstäver";
  } else if (fnamn.value.length < 3) {
    förnamnresultat.textContent = "Fyll i fler än 2 bokstäver";
  } else if (fnamn.value.length > 15) {
    förnamnresultat.textContent = "Fyll inte i fler än 15 bokstäver";
  } else {
    förnamnresultat.textContent = "";
  }
});

//KOD FÖR EFTERNAMN
const efternamn = document.getElementById("enamn");
const efternamnresultat = document.getElementById("resultatenamn");

efternamn.addEventListener("input", function () {
  if (!validateNamn(enamn.value)) {
    efternamnresultat.textContent = "Efternamn får bara innehålla bokstäver";
  } else if (enamn.value.length < 3) {
    resultatenamn.textContent = "Fyll i fler än 2 bokstäver";
  } else if (enamn.value.length > 20) {
    resultatenamn.textContent = "Fyll inte i fler än 20 bokstäver";
  } else {
    resultatenamn.textContent = "";
  }
});

//KOD FÖR TELEFON
function validateTelefon(telefonnr) {
  const telefonnrRegex = /^\d+$/;
  return telefonnrRegex.test(telefonnr);
}

const telefonnummer = document.getElementById("telefonnr");
const telefonresultat = document.getElementById("resultattelnr");

telefonnummer.addEventListener("input", function () {
  if (!validateTelefon(telefonnr.value)) {
    telefonresultat.textContent = "Telefonnummer får bara innehålla nummer";
  } else if (telefonnr.value.length < 5) {
    telefonresultat.textContent = "Fyll i minst 5 siffror";
  } else if (telefonnr.value.length > 15) {
    telefonresultat.textContent = "Fyll inte i fler än 15 siffror";
  } else {
    telefonresultat.textContent = "";
  }
});

//KOD FÖR MAIL
function validateMail(epost) {
  const epostRegex =
    /^([a-zA-ZåäöÅÄÖ0-9_.+-])+\@(([a-zA-ZåäöÅÄÖ0-9-])+\.)+([a-zA-ZåäöÅÄÖ0-9]{2,4})+$/;
  return epostRegex.test(epost);
}

const epostadress = document.getElementById("epost");
const epostresultat = document.getElementById("resultatmail");

epostadress.addEventListener("input", function () {
  if (epost === "") {
    epostresultat.textContent = "Skriv in E-postadress";
  } else if (!validateMail(epost.value)) {
    epostresultat.textContent = "fel E-postadress";
  } else {
    epostresultat.textContent = "";
  }
});

