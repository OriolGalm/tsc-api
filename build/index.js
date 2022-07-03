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
function segAcudit() {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield fetch('https://icanhazdadjoke.com/slack');
        let comit = yield response.json();
        resposta = comit.attachments[0].fallback;
        document.getElementById("textAcudit").innerHTML = resposta;
        console.log(comit.attachments[0].fallback);
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
        /*  let response: any = await fetch('https://www.visualcrossing.com/weather/weather-data-services');
         let comit = await response.json();
         let temps = comit.temp;
         console.log("Temperatura: ", temps); */
    });
}
