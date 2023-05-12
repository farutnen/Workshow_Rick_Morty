/*


* declaramops la baseURL
* 
*/

const baseURL = "https://rickandmortyapi.com/api";

/*

*Función asincrona para traer unn solo personaje
*@param id = numero de personaje a solicitar
*/

const getCharacter = async () => {
    
    const res = await(`${baseURL}/character/${id}`)
    const data = await rest.json();
    
    console.log(data);
    
}

/*

*Función asincrona para traer unn solo personaje
*@param page = numero de página a solicitar
*/

const getCharacters => async (page) => {
    const res = await fetch (`${baseURL}/character/?page=${page}`);


}
/*ESModules = ECMAScript*/ 
export {
    getCharacter
    getCharacters

};