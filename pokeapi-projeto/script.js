// POKE-API PROJETO

async function pegarData(){
    try{
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        if(!response.ok){
            throw new Error("Could not fetch resource");
        }
        const data = await response.json();

        const response2 = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonName}`);
        if(!response2.ok){
            throw new Error("Could not fetch response");
        }
        const data2 = await response2.json();

        const imgElement = document.getElementById("pokemonSprite");
        imgElement.src = data.sprites.front_default;
        imgElement.style.display = "block";

        const id = document.getElementById("idLabel");
        id.textContent = `ID: ${data.id}.`;

        const type1 = document.getElementById("type1Label");
        type1.textContent = `Main type: ${data.types[0].type.name}.`;

        const type2 = document.getElementById("type2Label");
        try{
            type2.textContent = `Secondary type: ${data.types[1].type.name}.`;
        }
        catch(error){
            type2.textContent = `Secondary type: none.`
        }

        const ability = document.getElementById("abilityLabel");
        const randAbilityIndex = Math.floor(Math.random() * data.abilities.length);
        ability.textContent = `RandAbility: ${data.abilities[randAbilityIndex].ability.name}.`

        const imgContainer = document.getElementById("imgContainer");
        let color = data2.color.name;
        switch(color){
            case "white":
                color = "lightgrey";
                break;
            case "yellow":
                color = "rgb(236, 196, 94)";
                break;
        }
        imgContainer.style.border = `5px dotted ${color}`;
    }
    catch(error){
        console.error(error)
    }
}

function randomizar(){ // dá um pokémon aleatório
    const pokemonName = document.getElementById("pokemonName");
    pokemonName.value = Math.floor(Math.random() * 1025) + 1;
    pegarData();
}