import { motion } from "framer-motion";

export function DrinkCard(props) {
    return (
        <motion.div className={`shadow-lg max-w-sm min-w-sm h-96 w-96 rounded-lg border-transparent border-8 cursor-pointer`}>
            <motion.div className='flex flex-col content-end h-full bg-cover bg-[image:var(--image-url)]'
                 style={{'--image-url': `url(${props.image})`}} >

                <motion.div className="basis-3/4">
                </motion.div>
                <motion.div className="basis-1/4 bg-white/70 p-2 w-full text-xl text-center">

                    <motion.p className="text-3xl mt-2">{props.name}</motion.p>

                    <motion.div className="flex flex-row justify-between">
                        <motion.p className="m-3">{props.category}</motion.p>
                        <motion.p className="m-3">{props.glass}</motion.p>
                    </motion.div>
                   
                </motion.div>
                
            </motion.div>    
        </motion.div>
    )
}