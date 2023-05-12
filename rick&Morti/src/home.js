import { getCharacter} from `./service/getData.js`;

const container = document.querySelector(`#characters`);
const loader = document.querySelector(`#lds-ring`);

const listCharacters = (page = 1) => {
    const { result } = await getCharacters(page);

    loader.style.display ="none";
    results.forEach(character => {
        const article = document.createElement(`article`);
        article.innerHTML = 
            `<img src= ${character.image} alt="Imagen del personaje" ${character.name}
            <h2>${character.name} </h2>
            <div>
                <p>${character.species}</p>
                <p class= "${character.status.toLowerCase()}"></p>
            </div>
            <a href= "/#/"${character.species}
            `
            /*sin terminar*/
    });
}

listCharacters();

window.addEventListener('hashchange', ())