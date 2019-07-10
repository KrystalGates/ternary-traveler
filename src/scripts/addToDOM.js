import { API } from "./api";
import {interestComponent, headerComponent} from "./components.js"

function addInterestToDom(){
    let interestContainer =document.querySelector("#interestContainer")
    interestContainer.innerHTML = ""
    interestContainer.appendChild(headerComponent())
    API.getData("interests", "?_expand=place")
    .then(data=>{
        data.forEach(interest => {
            interestContainer.appendChild(interestComponent(interest.name, interest.description, interest.cost, interest.place.name, interest.review))
        });
    })
}

export{addInterestToDom}