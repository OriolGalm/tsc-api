let notaAcudits: any[] = [];
let resposta: any;

async function segAcudit(){
    let response: any = await fetch('https://icanhazdadjoke.com/slack');
    let comit = await response.json();
    resposta = comit.attachments[0].fallback;
    document.getElementById("textAcudit")!.innerHTML = resposta;

    console.log(comit.attachments[0].fallback);
}

function nota(nota: number){
    const acuditsObj = {
        joke: resposta,
        score: nota,
        date: new Date().toISOString()
    };
    notaAcudits.push(acuditsObj);
    console.log("Array: ",  notaAcudits);
}

elTemps();
async function elTemps(){
  /*  let response: any = await fetch('https://www.visualcrossing.com/weather/weather-data-services');
    let comit = await response.json();
    let temps = comit.temp;
    console.log("Temperatura: ", temps); */
}