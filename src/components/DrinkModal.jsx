import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons'
import { faChevronRight, faHouse } from '@fortawesome/free-solid-svg-icons'
import { AnimatePresence, motion } from "framer-motion";


export function DrinkModal(props) {

    const tags = (props.drink.strTags) ? props.drink.strTags.split(",") : null;

    const ingList = Array.from({ length: 15 }, (_, index) => props.drink[`strIngredient${index + 1}`]);
    const measList = Array.from({ length: 15 }, (_, index) => props.drink[`strMeasure${index + 1}`]);

    const ingredients = [];
    
    for(let i=0; i<16; i++){
        if(ingList[i]) {
            if(measList[i]){
                ingredients.push(
                    <li className='text-lg'>{ingList[i]} - {measList[i]}</li>
                );
            } else {
                ingredients.push(
                    <li className='text-lg'>{ingList[i]}</li>
                );
            }
        }
      
    }

    return(

        <div className="fixed left-0 w-full h-full bg-black/75">
            <AnimatePresence>        
                <motion.div 
                layoutId={props.drink.idDrink} 
                className="h-2/3 w-2/3 fixed inset-0 top-0 m-auto"
                >
                    <div className="w-full h-full flex flex-col bg-white rounded-xl">
                
                        <div className='px-5 py-3 flex flex-row justify-between border-b-4'>
                            <div className='flex flex-row items-center'>
                                <p>
                                    <FontAwesomeIcon icon={faHouse} className='pr-2'/>  
                                    DrinkBaby
                                </p>
                                <FontAwesomeIcon icon={faChevronRight} fontSize={20} className='px-2'/>
                                <p>
                                    Search
                                </p>
                                <FontAwesomeIcon icon={faChevronRight} fontSize={20} className='px-2'/>
                                <p>
                                    {props.drink.strDrink}
                                </p>

                            </div>
                            <button 
                                onClick={() => props.setDrink(null)} 
                                className=""
                            >
                                <FontAwesomeIcon icon={faCircleXmark} fontSize='25' />
                            </button>
                        </div>

                        <div className='flex flex-row h-full w-full'>

                            <div className='flex-1 bg-white overflow-y-scroll p-5'>
                                <h1 className='text-5xl pb-1'>{props.drink.strDrink}</h1>

                                <h2 className='text-xl pb-2'>{props.drink.strCategory}</h2>
                            

                                <div className='flex flex-row pb-5'>
                                    <div className='mr-5 px-3 py-1 rounded-full bg-accent-color text-white'>
                                        <p className='text-justify text-lg'>{props.drink.strAlcoholic}</p>
                                    </div>

                                    {
                                        tags && (
                                        <>
                                                {tags.map(item => (
                                                    <div className='mr-5 px-3 py-1 rounded-full bg-secondary-color text-white'>
                                                        <p className='text-justify text-lg'>{item}</p>
                                                    </div>
                                                ))}
                                        </>
                                        )
                                    }
                                </div>

                                <p className='text-justify text-lg pb-5'>
                                    {props.drink.strInstructions}
                                </p>

                                <div>
                                    {ingredients}
                                </div>

                                <div className='self-end border-b-4 mt-12'>
                                    <p className='text-center text-lg pb-2'>{props.drink.strGlass}</p>
                                </div>
                                
                            </div>

                            <div 
                                className='flex-1  bg-[image:var(--image-url)] bg-cover'
                                style={{'--image-url': `url(${props.drink.strDrinkThumb})`}}>
                            </div>

                        </div>
                        
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    )
}