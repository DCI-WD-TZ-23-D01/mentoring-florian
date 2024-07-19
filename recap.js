// Thema: Higher Order Functions

// Richtige Dokumentation lesen bei MDN
// Datenstruktur.prototype
// Wir können diese vordefinierte Methoden nur auf spezielle Datenstrukturen anwenden

// HOF ( Higher Order Function)
// Was ist eine HOF?
// Ausgangspunkt ist immer ein Array und wir bearbeiten den Originalen Array zu einen veränderten Array indem wir die Methode als Callback aufrufen.
const einkaufeListe = ["milch","eier"];
// Bsp: map, filter, reduce
// 1. map: Durchläuft jeden Index des Arrays und wir können dabei verschiedenen Code ausführen oder z.B. in React darstellen.
einkaufeListe.map((listItems)=>{
    // Das ist der Codeblock des Callbacks von der HOF map
    console.log(listItems);
});
const cars = ["audi", "bmw"];
cars.map(car=>console.log(car)); // Kurzschreibweise eines Callbacks, wenn wir nur ein Argument und eine Anweisung haben
// 2. filter: Durchläuft jeden Index des Arrays und wir können Einschränkungen vornehmen
// Merke: Jede HOF erzeugt automatisch ein return!
// Aufgabe: Gib alle bmw Autos aus
cars.filter((car)=>{
    // Jede Einschränkung die wir hier vornehmen, wird am Ende im Originalarray gespeichert
    car === "bmw";
})
// Ausgabe: ["bmw"];
const persons = [
    {firstName: "florian", lastName: "hahn"},
    {firstName: "max", lastName: "muster"}
]
// Aufgabe: Suche die Person Florian Hahn und gib dessen Nachname aus!
persons.filter(person=>{
    person.firstName === "florian" && person.lastName === "hahn"
    // Zwischenergebnis: [{firstName: "florian", lastName: "hahn"}]
})
persons.map(person=>{
    person.lastName
    // Zwischenergebnis: [{lastName: "hahn"}]
})
persons.join("") // "hahn" 

// Kurze Lösung
const hahn = persons.filter(person=> person.firstName === "florian" && person.lastName === "hahn").map(person=>person.lastName).join("");
console.log(hahn)

// 3. reduce
// Durchläuft jeden Index des Arrays und wir können den Arrays verkleinern, indem wir dessen Werte z.B. verrechnen und das besondere am Reduce ist, dass wir zusätzlich einen optinalen Startwert vergeben können.
const warenkorbPreise = [19.99 ,99.99 ,10 ,3 ,500];
// Aufgabe: Berechne die Gesamtsumme des Warenkorbes
let startWert = 0;
// Zwei Parameter Accumulator und der currentValue
// acc = Der Wert aus der vorherigen Berechnung
// current =  Der aktuelle Wert des Indexelementes
const gesamt = warenkorbPreise.reduce((acc,current)=>{
    return acc+current;
    console.log(acc)     
    // 1. Durchlauf:0      + [0] = 19.99  = 19.99  
    // 2. Durchlauf:19.99  + [1] = 99.99  = 119.98
    // 3. Durchlauf: 119.98+ [2] = 10     = 129.98  
    // 4. Durchlauf:129.98 + [3] = 3      = 132.98
    // 5. Durchlauf 132.98 + [4] = 500    = 632.98
    //startWert           // 0
});
// Beispiel der Durchläufe:
console.log(gesamt); // 632,98

const warenkorb = [{name:"milch", price: 19.99}, {name:"eier", price: 3}];

warenkorb.reduce((acc,current)=>{
    acc + current.price,
    startWert
});

const friends = [{name:"florian", hobbies:["swim","ski"]}]
friends.reduce((acc,current)=>{
    [...acc, ...current.hobbies],
    []
})

// Thema Datenstrukturen und Methoden

// Merke: Aus welcher Datenstruktur kommen wir und in welche wandeln wir um !   
// Aufgabe: Reverse a String!
const vorname = "florian"; 
const satz = "heute ist freitag"
console.log(vorname.split("").reverse().join(""));
const reversedVorname = vorname.split("").reverse().join("");
// Idee: String  >  Array          > Array           > String
//       florian > [f,l,o,r,i,a,n] > [n,a,i,r,o,l,f] > nairolf

// Arbeiten mit Parameter
// Wenn wir mit vordefinierten Methoden arbeiten, müssen wir auf die richtige Reihenfolge eingehen und auf Pflicht- und optionale Parameter achten
const nachname = "hahn";
// Aufgabe: Bitte gebe das a aus
const a = nachname.slice(1,2); // Wir können mit Slice einen String splitten
// Slice hat einen Pflicht und einen optionalen Parameter, in dem Fall Start und End
// Wir erfahren das innerhalb von VSC mit dem Hover der Methode oder in MDN Docs