// JS Promise-async/await - fetch

// Promise
// Ein Promise ist ein Versprechen gegenüber einem Code, welcher drei Zustände haben kann. Diese Zustände sind: Pending, Fullfilled und Rejected.

// Wie kann ich Promises im JavaScript verwenden?
// Entweder verwende ich vordefinierte Promise-Methoden wie z.B.:
// 1. fetch() - 2. .json()
// oder ich schreibe meinen Promise selber.

// Zugriff auf unsere drei Zustände entweder mit:
// .then().catch() oder async und await

// Reihenfolge spielt dabei eine Rolle, indem wir die richtige .then oder richtige await Reihenfolge einhalten.

// Merke: 
// 1. Verwenden wir einen vordefinierten Promise oder einen selbst-erstellen
// 2. Wie greife ich auf meine Zustände zu

// Wir greifen auf die Zustände mit .then().catch() oder mit async/await zu

// Merke: Im JS können wir nur auf die Zustände Fullfilled und Rejected zugreifen
// 1. .then().catch()
// Zugriff auf Fullfilled durch die .then() Methode und wir können einen weitere Codeblock definieren
// z.B. fetch("API/endpunkt/1").then("FULLFILLED").catch("REJECTED")
// 2. async/await
// z.B. Herstellung von Kuchen
// Jeder Schritt ist eine JavaScript Anweisung! Jede Ausführung von JavaScript kann unterschiedlich lange dauern.
// Problem:
// Schritt 1   - 1 ms
// Schritt 3   - 1 ms
// Schritt 5   - 1 ms
// Schritt 4   - 20 ms
// Schritt 2   - 300 ms
// Lösung: Wir "warten" bis eine Ausführung im JavaSript vollendet/fertig ist

// Vorraussetzung: Der gesamte Codeblock muss asynchron(async) sein

// await Schritt 1   - 1 ms
// await Schritt 2   - 300 ms
// await Schritt 3   - 1 ms
// await Schritt 4   - 20 ms
// await Schritt 5   - 1 ms

// Grundproblem bei .then() ist die .then HELL oder .then Pyramide
// Aus diesem Grund ist die Variante bei der Verwendung von Promises mit async/await effizienter/lesbarer/übersichtlicher als .then().catch()
// Es kann trozdem bei async/await zum tryCatch Hell kommen

// Auf einen Promise( egal oder fetch oder einen selbständigen) könnt ihr BEIDES anwenden, .then().catch() oder async/await

// Wie erkenne ich einen Promise? 
// 1. lesen der Dokumentation auf mdn
// 2. Eure IDE(VSC) gibt euch den Tipp

