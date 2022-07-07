"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let notaAcudits = [];
let resposta;
let canvi = true;
function segAcudit() {
    return __awaiter(this, void 0, void 0, function* () {
        if (canvi == true) {
            let response = yield fetch('https://icanhazdadjoke.com/slack');
            let comit = yield response.json();
            resposta = comit.attachments[0].fallback;
            document.getElementById("textAcudit").innerHTML = resposta;
            document.getElementById("svg1").style.display = "block";
            document.getElementById("svg2").style.display = "none";
            canvi = !canvi;
        }
        else {
            let responseChuck = yield fetch('https://api.chucknorris.io/jokes/random');
            let comit2 = yield responseChuck.json();
            resposta = comit2.value;
            document.getElementById("textAcudit").innerHTML = resposta;
            document.getElementById("svg1").style.display = "none";
            document.getElementById("svg2").style.display = "block";
            canvi = !canvi;
        }
    });
}
function nota(nota) {
    const acuditsObj = {
        joke: resposta,
        score: nota,
        date: new Date().toISOString()
    };
    notaAcudits.push(acuditsObj);
    console.log("Array: ", notaAcudits);
}
elTemps();
function elTemps() {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield fetch('http://api.openweathermap.org/data/2.5/weather?q=Barcelona,es&appid=bd768209c18b19d3f83a6b1748943738');
        let comit = yield response.json();
        let tempsK = comit.main.temp;
        let tempsC = tempsK - 273.15;
        let tempsCelsius = tempsC.toFixed(1);
        //let weather: string = comit.weather[0].icon;
        let responseIcon = yield fetch(`http://openweathermap.org/img/wn/10d@2x.png`);
        let responseJson = JSON.stringify(responseIcon);
        let comitIcon = yield { responseJson };
        document.getElementById("temps").innerHTML = comitIcon + " " + tempsCelsius.toString() + " °C";
        console.log("Temperatura: ", tempsC.toFixed(1) + responseIcon);
    });
}
