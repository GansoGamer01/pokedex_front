async function pokemons()
{
   const api_fetch = await fetch("https://pokeapi.co/api/v2/pokemon")

   const api_response = await api_fetch.json()

   const colors ={
        normal:   "white",
        fire:     "red",
        fighting: "orange",
        water:    "blue",
        flying:   "cyan",
        grass:    "green",
        poison:   "purple",
        eletric:  "yellow",
        ground:   "brown",
        psychic:  "pink",
        rock:     "lightbrown",
        ice:      "lightblue",
        bug:      "deepgreen",
        dragon:   "lightblue",
        ghost:    "lightpurple",
        dark:     "black",
        steel:    "gray",
        fairy:    "lightpink",
        stellar:  "lightgray"
   }

   console.log(api_response)

   const ul = document.querySelector("ul")
   api_response.results.forEach(async(item)=>{
        ul.insertAdjacentHTML("beforeend",`
            <li id="${item.name}li">
            <img id=${item.name}>
             <p>${item.name}</p>
            </li>
            `)

        const api_infos = await fetch(item.url)

        const poke_infos = await api_infos.json()

        console.log(poke_infos)

        const img = document.getElementById(item.name)

        img.src = poke_infos.sprites.front_default

        const li = document.getElementById(`${item.name}li`)
            li.setAttribute("style",`background-color: ${colors[poke_infos.types[0].type.name]};`)
        console.log(li)

        li.addEventListener("click",()=>{
            console.log(poke_infos)
        })
   })   
}
pokemons()
