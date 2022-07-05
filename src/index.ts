let notaAcudits: any[] = [];
let resposta: any;
let canvi: boolean = true;

async function segAcudit(){
    if(canvi == true){
        let response: any = await fetch('https://icanhazdadjoke.com/slack');
        let comit = await response.json();
        resposta = comit.attachments[0].fallback;
        document.getElementById("textAcudit")!.innerHTML = resposta;
        canvi = !canvi;
    }else{
        let responseChuck: any = await fetch('https://api.chucknorris.io/jokes/random');
        let comit2 = await responseChuck.json();
        resposta = comit2.value;
        document.getElementById("textAcudit")!.innerHTML = resposta;
        canvi = !canvi;
    }
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
    let response: any = await fetch('http://api.openweathermap.org/data/2.5/weather?q=Barcelona,es&appid=bd768209c18b19d3f83a6b1748943738');
    let comit = await response.json();
    let tempsK: number = comit.main.temp;
    let tempsC: number = tempsK -273.15;
    let tempsCelsius: any = tempsC.toFixed(1);
    let weather: string = comit.weather[0].description;
    document.getElementById("temps")!.innerHTML =   weather + " " + tempsCelsius.toString() + "°";
    console.log("Temperatura: ", tempsC.toFixed(1) + weather); 
}