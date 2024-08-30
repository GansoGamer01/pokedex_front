

async function pokemons()
{
   const api_fetch = await fetch("https://pokeapi.co/api/v2/pokemon")
   const api_response = await api_fetch.json()
   console.log(api_response)
   const ul = document.querySelector("ul")
   api_response.results.forEach(async(item)=>{
        ul.insertAdjacentHTML("beforeend",`
            <li id="${item.name}li">
            <p>${item.name}</p>
            <img id=${item.name}>
            </li>
            `)
        const api_infos = await fetch(item.url)
        const poke_infos = await api_infos.json()
        console.log(poke_infos)
        const img = document.getElementById(item.name)
        img.src = poke_infos.sprites.front_default
        const li = document.getElementById(`${item.name}li`)
        console.log(li)
        li.addEventListener("click",()=>{
            console.log(poke_infos)
        })
   })   
}
pokemons()
