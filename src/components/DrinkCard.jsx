export function DrinkCard(props) {
    return (
        <div class="max-w-sm rounded-lg border-black border-8 bg-red-500">

            <div className="basis-3/4">
                <img src={props.image} className="object-contain"/>
            </div>

            <p class="p-2 text-xl text-center bg-secondary-color">{props.name}</p>
               
        </div>
    )
}