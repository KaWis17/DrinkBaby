export function TextWithTitle(props) {
    return (
        <div className="flex flex-1 flex-col items-start pb-8">
              <h2 className="text-2xl text-left pb-2">{props.title}</h2>
              <p className="pl-0 md:pl-12 text-xl text-justify">{props.text}</p>
            </div>
    )
}