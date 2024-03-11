// utils/dataUtils.js

const fs = require('fs-extra');
const path = require('path');

// Chemin du fichier JSON
const filePath = path.resolve(__dirname, '../static/data.json');

// Fonction pour ajouter un objet au fichier JSON
async function addObjectToObjectList(newObject) {
    try {
        // Lire le contenu du fichier JSON
        const data = await fs.readFile(filePath, 'utf8');

        // Analyser le contenu JSON en tant qu'array
        const dataArray = JSON.parse(data);

        // Ajouter le nouvel objet au tableau
        dataArray.push(newObject);

        // Convertir le tableau mis à jour en format JSON
        const updatedData = JSON.stringify(dataArray, null, 2);

        // Réécrire le fichier avec le contenu mis à jour
        await fs.writeFile(filePath, updatedData);

        console.log('Objet ajouté avec succès au fichier.');
    } catch (error) {
        console.error('Erreur lors de l\'ajout de l\'objet au fichier:', error);
    }
}

module.exports = {
    addObjectToObjectList
};
