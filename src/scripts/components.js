import { API } from "./api";
import { buildInterestObj } from "./helpers";
import { addInterestToDom } from "./addToDOM";

function headerComponent() {
  let headerDiv = document.createElement("div");
  headerDiv.setAttribute("id", "headerDiv");
  let interestHeader = document.createElement("h2");
  interestHeader.setAttribute("class", "interestHeader");
  interestHeader.textContent = "Places and Interests";
  let addInterestBtn = document.createElement("button");
  addInterestBtn.setAttribute("id", "addInterestBtn");
  addInterestBtn.textContent = "Add Interest";
  addInterestBtn.addEventListener("click", event => {
    addInterestBtn.style.display = "none";
    headerDiv.appendChild(addInterestComponent())
    if(addInterestBtn.style.display = "none"){
        document.querySelector("#hideFormBtn").addEventListener("click", event => {
            event.preventDefault()
            document.querySelector("#interestForm").style.display = "none"
            addInterestBtn.style.display = "block"
        })
    }
  });
  headerDiv.appendChild(interestHeader);
  headerDiv.appendChild(addInterestBtn);
  return headerDiv;
}

function interestComponent(name, description, cost, place, review) {
  let interestDiv = document.createElement("div");
  interestDiv.setAttribute("id", "interestDiv");
  let nameInterest = document.createElement("h2");
  nameInterest.setAttribute("id", "name-interest");
  nameInterest.textContent = `${name}`;
  let placeInterest = document.createElement("h4");
  placeInterest.setAttribute("id", "placeInterest");
  placeInterest.textContent = `Country: ${place}`;
  let descriptionInterest = document.createElement("p");
  descriptionInterest.setAttribute("id", "descriptionInterest");
  descriptionInterest.textContent = `Description: ${description}`;
  let costInterest = document.createElement("p");
  costInterest.setAttribute("id", "costInterest");
  costInterest.textContent = `Cost: ${cost}`;
  let reviewInterest = document.createElement("p")
  reviewInterest.setAttribute("id", "reviewInterest")
  reviewInterest.textContent = `Review: ${review}`
  interestDiv.appendChild(nameInterest);
  interestDiv.appendChild(placeInterest);
  interestDiv.appendChild(descriptionInterest);
  interestDiv.appendChild(costInterest);
  interestDiv.appendChild(reviewInterest)
  return interestDiv;
}

function addInterestComponent() {
  let interestForm = document.createElement("form");
  interestForm.setAttribute("id", "interestForm")
  let addInterestHeader = document.createElement("h5")
  addInterestHeader.textContent = "New Interest"
  let nameInterestInput = document.createElement("input");
  nameInterestInput.setAttribute("placeholder", "Name")
  let descriptionInput = document.createElement("input");
  descriptionInput.setAttribute("placeholder", "Description")
  let costInput = document.createElement("input");
  costInput.setAttribute("placeholder", "Price")
  let dropDownPlace = document.createElement("select");
  dropDownPlace.setAttribute("id", "places");
  let dropDownValue1 = document.createElement("option");
  dropDownValue1.setAttribute("value", "1");
  dropDownValue1.textContent = "Italy"
  let dropDownValue2 = document.createElement("option");
  dropDownValue2.setAttribute("value", "2");
  dropDownValue2.textContent = "Switzerland"
  let dropDownValue3 = document.createElement("option");
  dropDownValue3.setAttribute("value", "3");
  dropDownValue3.textContent = "France"
  dropDownPlace.appendChild(dropDownValue1);
  dropDownPlace.appendChild(dropDownValue2);
  dropDownPlace.appendChild(dropDownValue3);
  let reviewInput = document.createElement("textarea")
  reviewInput.setAttribute("id", "reviewInput")
  reviewInput.setAttribute("placeholder", "Review Here!")
  let submitBtn = document.createElement("button")
  submitBtn.setAttribute("id", "submitBtn")
  submitBtn.textContent = "Save New Interest"
  submitBtn.addEventListener("click", event =>{
    event.preventDefault()
    API.addData("interests", buildInterestObj(dropDownPlace.value, nameInterestInput.value, descriptionInput.value, costInput.value, reviewInput.value) )
    .then (data =>{
        addInterestToDom()
        interestForm.reset()
    })
  })
  let hideFormBtn = document.createElement("button")
  hideFormBtn.setAttribute("id", "hideFormBtn")
  hideFormBtn.textContent = "Hide Form"
  interestForm.appendChild(addInterestHeader)
  interestForm.appendChild(nameInterestInput)
  interestForm.appendChild(descriptionInput)
  interestForm.appendChild(costInput)
  interestForm.appendChild(dropDownPlace);
  interestForm.appendChild(reviewInput)
  interestForm.appendChild(submitBtn)
  interestForm.appendChild(hideFormBtn)

  return interestForm
}

export { interestComponent, headerComponent };
