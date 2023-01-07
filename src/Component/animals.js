import { animals } from "./animal";
import ocean from '../images/ocean.jpg'

const title = '';

const background = <img className="background" alt="ocean" src={ocean}/>

const images = [];
for(const animal in animals){
    images.push(
        <img key={animal} className="animal" src={animals[animal].image} alt={animal} arial-label={animal} role="button" onClick={displayFact} />
    )
}

function displayFact(e){
    const selectedAnimal = e.target.alt;
    const animalInfo = animals[selectedAnimal];
    const optionIndex = Math.floor(Math.random() * animalInfo.facts.length);
    const funFact = animalInfo.facts[optionIndex];
    document.getElementById('fact').innerHTML = funFact;
}

const animalFact = (
    <div>
        <h1>{title == "" ? 'Click an animal for a fun fact' : title}</h1>
        {background}
        <p id="fact"></p>
        <div className="animals">
            {images}
        </div>
    </div>
)

export default animalFact;