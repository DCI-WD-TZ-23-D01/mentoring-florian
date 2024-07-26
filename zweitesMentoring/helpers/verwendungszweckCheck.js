import checkBlacklistWords from "./blacklist.js"

const verwendungszweckCheck = () =>{
    // Block Scope vom Aufruf aus der indexStart.js
    checkBlacklistWords(); // Ruft export aus checkBlacklistWords und dessen Funktion auf
    console.log("this is a verwendungszweckCheck");
};

const numberCheck = () =>{
    console.log("number check");
}

export default verwendungszweckCheck
export {verwendungszweckCheck, numberCheck}

