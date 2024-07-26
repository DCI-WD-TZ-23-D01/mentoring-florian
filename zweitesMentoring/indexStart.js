// JavaScript modules
// Was gibt es für zwei Möglichkeiten Funktionen/Code zwischen zwei Dateien aufzurufen?
// EcmaScript(6) import und das require (commonjs)
// require können wir IMMER in einem neues JavaScript Projekt verwenden
// ES6 import kann ich nur NACH dem definieren von einer package.json verwenden
// Hinweis: Nach dem erstellen von einer package.json ist das Projekt immernoch ein Standart JavaScript Projekt mit commonjs (require)
// Merke: Bei dem Fehler "Cannot use import statement outside a module" müssen wir IMMER vom commonjs auf ES6 in der package.json umstellen
// Lösung: Wir müssen in der package.json den Eintrag "type":"module" hinzufügen

// 4 (5) Varianten für den ES6 import/export

// 1. Default import/export
// In der export Datei MÜSSEN wir die Standart Funtion als DEFAULT markieren, damit wir diese danach ohne Klammern importieren können
import banana from "./fruits.js";
import ibanCheck from "./helpers/ibanCheck.js";
import schufaCheck from "./helpers/schufaCheck.js";
import * as check from "./helpers/verwendungszweckCheck.js";
check.verwendungszweckCheck(); // Ruft export verwendungszweckCheck.js und die Funktion auf
banana();
// 2. Named import/export
// Beim named import/export kann ich gleichzeitig mehrere Funktionen übergeben, indem wir jeweils beim export und import die Objekt Klammern verwenden
import {banana,apple,strawberry} from "./fruits.js";
apple()
// 3. Rename import
// Beim rename import können wir die Standart Funktionsnamen umbenennen.
import {banana as yellowFruit} from "./fruits.js";
yellowFruit();
// 4. Rename export
// Beim rename export können können wir die Standart Funktionsnamen umbenennen.
import {greenFruit} from "./fruits.js";
greenFruit()
// 5. Namespace import 
// Beim namespace import können wir auf alle Funktionen aus einer exportierten Datei zugreifen, indem wir uns über ASTERIX (*) die Funktionen laden
import * as fruits from "./fruits.js";
fruits.strawberry();

// Zusätzliche Sonderfälle:
// Kombinationen

// Statt zwei imports kann ich diese zusammenfassen
import banana from "./fruits.js"; // default import
import { apple } from "./fruits.js"; // named import

import banana, {apple} from "./fruits.js";

// Kombiniertes Beispiel
// import banana, {apple}, {strawberry as redFruit}, * as fruits from "./fruits.js";