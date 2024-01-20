import { DrinkCard } from "../components/DrinkCard"
import { useState, useEffect } from "react"
import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";


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

          <div className="my-10 w-5/12 mx-auto">
            <input
              type="text" 
              placeholder="Search for a drink..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="py-2 px-1 w-full bg-secondary-color rounded-lg border-2 placeholder-gray-300 text-white"
            />
          </div>

          <div className="flex flex-row flex-wrap justify-around gap-3 p-10">
            {items.map(item => (
              <motion.div
                layoutId={item.idDrink}
                onClick={() => setSelectedDrink(item)}
                key={item.idDrink}
              >
                <DrinkCard name={item.strDrink} image={item.strDrinkThumb} glass={item.strGlass} category={item.strCategory}/>
              </motion.div>
            ))}
          </div>

          <AnimatePresence>
            {
              selectedDrink && (
                <motion.div 
                  layoutId={selectedDrink.idDrink}
                  className="h-1/2 w-1/2 z-50 fixed bg-red-500 inset-x-0 inset-y-0 m-auto"
                  
                >
                  <motion.h5>{selectedDrink.strDrink}</motion.h5>
                  <motion.h2>Test</motion.h2>
                  <motion.button 
                    onClick={() => setSelectedDrink(null)} 
                    className="bg-blue-500 h-16 w-16"
                  />
                </motion.div>
              )
            }
          </AnimatePresence>

        </div>
      </div>
    )
  }
  