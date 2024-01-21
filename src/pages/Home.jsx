import { TextWithTitle } from "../components/TextWithTitle"

export function Home() {
  return(
    <>
        <section className="container mx-auto relative">

          <div className="flex flex-row items-center gap-12 my-28">
            <div className="flex flex-1 flex-col items-start px-3 md:px-0 ">
              <h1 className="text-5xl text-left pb-5">Drink baby!</h1>
              <p className="text-justify text-xl md:text-left">Welcome to DrinkBaby, your go-to online destination for a world of delightful and creative alcoholic cocktails! Dive into a realm of flavor exploration and cocktail craftsmanship as we present an enticing array of expertly curated libations to elevate your drinking experience.</p>
            </div>
            <div className="hidden md:flex justify-center flex-1">
              <img src="https://cdn.pixabay.com/photo/2014/06/26/16/33/cocktail-377960_1280.png"
                  className="animate-pulse object-contain h-96"
              />
            </div>
          </div>

        </section>


        <section className="container mx-auto relative">

          <div className="flex flex-col md:flex-row items-center gap-12 my-28 px-3 md:px-0 ">

            <div className="flex justify-center flex-1 ">
              <img src="https://cdn.pixabay.com/photo/2015/06/22/23/20/cocktail-818197_1280.jpg"
                  className="object-contain"
              />
            </div>

            <div className="flex flex-col flex-1">
              <TextWithTitle 
                title="🍹 Savor Our Mixology Masterpieces:" 
                text="Immerse yourself in a diverse menu of meticulously crafted cocktails, ranging from timeless classics to innovative blends. Our collection caters to all tastes, ensuring that every cocktail enthusiast finds their perfect match." 
              />
              <TextWithTitle 
                title="🌟 Crafted with Precision:" 
                text="At DrinkBaby, we take the art of mixology seriously. Our team of skilled bartenders and mixologists has carefully composed each cocktail, blending premium spirits with handpicked ingredients to create a symphony of flavors that will delight your palate." 
              />
              <TextWithTitle 
                title="🍸 Discover New Tastes:" 
                text="Whether you're a seasoned cocktail aficionado or a casual imbiber, our website is designed to help you discover new favorites. Navigate our user-friendly interface to find recipes, delve into the history of your preferred drinks, and even share your own concoctions with the vibrant DrinkBaby community." 
              />
              <TextWithTitle 
                title="🎉 Celebrate with Style:" 
                text="From intimate gatherings to festive occasions, DrinkBaby adds a touch of sophistication to your celebrations. Impress your guests with visually stunning cocktails that not only look impressive but also taste extraordinary." 
              />
              <TextWithTitle 
                title="🖥️ Explore Our Virtual Bar:" 
                text="Embark on a virtual journey through our extensive cocktail library from the comfort of your browser. Uncover new recipes, experiment with ingredients, and become your own home mixologist—all through the DrinkBaby website." 
              />
              <TextWithTitle 
                title="🥂 Raise Your Glass to Exceptional Taste:" 
                text="Elevate your drinking experience with DrinkBaby. Navigate our website today and indulge in the art of mixology. Here's to memorable moments and discovering the perfect cocktail for every occasion!" 
              />
            </div>
          </div>
         
        </section>
    </>
  )
}