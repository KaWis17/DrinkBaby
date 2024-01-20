export function DrinkCard(props) {
    return (
        <div className={`shadow-lg max-w-sm min-w-sm h-96 w-96 rounded-lg border-transparent border-8`}>
            <div className='flex flex-col content-end h-full bg-cover bg-[image:var(--image-url)]'
                 style={{'--image-url': `url(${props.image})`}} >

                <div className="basis-3/4">
                </div>
                <div className="basis-1/4 backdrop-blur-lg bg-white/70 p-2 w-full text-xl text-center">

                    <p className="text-3xl mt-2">{props.name}</p>

                    <div className="flex flex-row justify-between">
                        <p className="m-3">{props.category}</p>
                        <p className="m-3">{props.glass}</p>
                    </div>
                   
                </div>
                
            </div>    
        </div>
    )
}