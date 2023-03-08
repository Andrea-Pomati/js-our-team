/*Utilizzando i dati forniti, creare un array di oggetti
 per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni:
 nome, ruolo e foto.
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console, per ogni membro del team, 
le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede
Consigli del giorno:
Ragioniamo come sempre a step.
Prima la logica in italiano e poi traduciamo in codice.
E ricordiamoci che console.log() è nostro amico!
Buon lavoro!*/


/*Vi invio anche la tabella con i dati in un formato selezionabile e copiabile :occhiali_da_sole:
Wayne Barnett	  Founder & CEO	         wayne-barnett-founder-ceo.jpg
Angela Caroll	  Chief Editor	         angela-caroll-chief-editor.jpg
Walter Gordon	  Office Manager	     walter-gordon-office-manager.jpg
Angela Lopez	  Social Media Manager	 angela-lopez-social-media-manager.jpg
Scott Estrada	  Developer	             scott-estrada-developer.jpg
Barbara Ramos	  Graphic Designer	     barbara-ramos-graphic-designer.jpg
*/

//MILESTONE 0:
//Creare l’array di oggetti con le informazioni fornite.

const members = [

    {
        Nome: "Wayne Barnett",
        Ruolo: "Founder & CEO",
        Foto: "wayne-barnett-founder-ceo.jpg"
    },

    {
        Nome: "Angela Caroll",
        Ruolo: "angela-caroll-chief-editor.jpg",
        Foto: "wayne-barnett-founder-ceo.jpg"
    },

    {
        Nome: "Walter Gordon",
        Ruolo: "Office Manager",
        Foto: "walter-gordon-office-manager.jpg",
    },

    {
        Nome: "Angela Lopez",
        Ruolo: "Social Media Manager",
        Foto: "angela-lopez-social-media-manager.jpg"
    },

    {
        Nome: "Scott Estrada",
        Ruolo: "Developer",
        Foto: "scott-estrada-developer.jpg"
    },

    {
        Nome: "Barbara Ramos",
        Ruolo: "Graphic Designer",
        Foto: "barbara-ramos-graphic-designer.jpg"
    }

];

console.log(members)

//MILESTONE 1:
//Stampare su console, per ogni membro del team, 
//le informazioni di nome, ruolo e la stringa della foto

for ( let i=0; i < members.length; i++) {
    let currentElement = members[i];
    console.log(currentElement)
    }


//MILESTONE 2:
//Stampare le stesse informazioni su DOM sottoforma di stringhe


//collego la variabile al documento html in particolare al div con classe row
let container = document.querySelector(".row");

//ciclo for con all'interno for..in
for (let i = 0; i < members.length; i++){

    let onemember = members[i];

    let newEl = createElement();
    
    for(let key in onemember){
        console.log(`${key} ${onemember[key]}`);

        newEl.append(` ${onemember[key]}`);
        container.append(newEl);
    }

}


//funzione che crea degli elementi div

function createElement(){
    let element = document.createElement("div");

    return element;
}