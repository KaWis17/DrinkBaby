import { DrinkCard } from "../components/DrinkCard"
import { useState, useEffect } from "react"
import axios from "axios";


export function Search() {

    const [items, setItems] = useState([]);
    const [input, setInput] = useState("");

    useEffect(() => {
      const delayDebounceFn = setTimeout(() => {
        axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${input}`)
          .then(response => {
            if(response.data.drinks != null)
              setItems(response.data.drinks);
            else
              setItems([]);
          })
          .catch(error => {
            console.error(error);
        });
      }, 300)

      return () => clearTimeout(delayDebounceFn)
    }, [input]);
    

    return(
      <div className="bg-background-color">
        <div className="container mx-auto flex flex-col">
          <div className="my-10 w-5/12 mx-auto">
            <input
              type="text" 
              placeholder="Search for a drink..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              class="py-2 px-1 w-full bg-secondary-color rounded-lg border-2 placeholder-gray-300 text-white"
            />
          </div>

          <div className="flex flex-row flex-wrap justify-around gap-3 p-10">
            {items.map(item => (
              <DrinkCard key={item.idDrink} name={item.strDrink} image={item.strDrinkThumb} glass={item.strGlass} category={item.strCategory}/>
            ))}
          </div>
          </div>
      </div>
    )
  }
  