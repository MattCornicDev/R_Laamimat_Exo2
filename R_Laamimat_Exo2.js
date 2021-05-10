var NomEleves = new Array("Dupont", "Durant","Petit","Martin","Legrand","Lacroix","Legros","Lenaim");
var Notes = new Array([10, 12, 18,9,13,16,19],[13,11,14,7,14,16,12,10],[9,14,14,12,8,20,13,13]);
var tableau = document.querySelector('tbody');


function affichageNomEleves() {
    for (let i = 0; i < NomEleves.length; i++) 
    {
        // Insérer une ligne à la dernière position
        let ligne = tableau.insertRow(-1);

        // affichage du numéro de la ligne
        let colonneNomEleves = ligne.insertCell(0);
        colonneNomEleves.innerHTML += NomEleves[i];

        for (let j = 0; j < Notes.length; j++) {

            var colonneNotes = ligne.insertCell(j+1);
            colonneNotes.innerHTML = Notes[j];     
        }   

        
    }
}
affichageNomEleves();

