import { DrinkCard } from "../components/DrinkCard"
import { useState, useEffect } from "react"
import axios from "axios";


export function Search() {

    const [items, setItems] = useState([]);

    useEffect(() => {
      axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail')
        .then(response => {
          setItems(response.data.drinks);
        })
        .catch(error => {
          console.error(error);
        });
    }, []);

    return(
      <div className="flex flex-row flex-wrap justify-around gap-3 p-10 bg-background-color">
        {items.map(item => (
          <DrinkCard key={item.idDrink} name={item.strDrink} image={item.strDrinkThumb}/>
        ))}
      </div>
    )
  }
  