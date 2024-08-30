// Wofür brauchen wir Error Handling?
// Für worst-case Szenarien, wenn unser Code fehlerhaft ist oder fehlschlägt
// Wir fangen mögliche Probleme im Code ab, bevor sie der Kunde/Besucher sieht.

// Im Promise greifen wir auf zwei Zustände zu.
// Der rejected Zustand kann immer über .catch oder tryCatch abgefangen werden

Promise
    .catch((error)=>{  // Zustand rejected
        // Redirect den User zur Startseite
        console.error(error)
    }) 

try {
    Promise
} catch (error) { // Zustand rejected
    // Redirect den User zur Startseite
    console.error(error); 
}

// Normale Reihenfolge von JS wird fortgesetzt...
const a = 1+2;
