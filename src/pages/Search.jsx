import { DrinkCard } from "../components/DrinkCard"
import { useState, useEffect } from "react"
import axios from "axios";
import { motion } from "framer-motion";
import { DrinkModal } from "../components/DrinkModal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'



export function Search() {

    const [items, setItems] = useState([]);
    const [input, setInput] = useState("");
    const [selectedDrink, setSelectedDrink] = useState(null);

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

          <div className="flex flex-row items-center my-10 w-5/12 mx-auto bg-secondary-color text-white text-lg rounded-xl border-2">
            <FontAwesomeIcon icon={faMagnifyingGlass} fontSize="20" className='pl-5'/>  
            <input
              type="text" 
              placeholder="Search for a drink..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="p-5 bg-secondary-color placeholder-gray-300 grow outline-none rounded-xl"
            />
          </div>

          <div className="flex flex-row flex-wrap justify-around gap-5 p-10">
            {items.map(item => (
              <motion.div
                layoutId={item.idDrink}
                onClick={() => {if(!selectedDrink){setSelectedDrink(item)}}}
                key={item.idDrink}
              >
                <DrinkCard name={item.strDrink} image={item.strDrinkThumb} glass={item.strGlass} category={item.strCategory}/>
              </motion.div>
            ))}
          </div>


          {
            selectedDrink && (  
              <DrinkModal drink={selectedDrink} setDrink={setSelectedDrink}/>
            )
          } 

        </div>
      </div>
    )
  }
  