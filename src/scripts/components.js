import { buildInterestObj, formValidation } from "./helpers";
import { submitNewInterestListener, addFormBtnListener, editCostReviewListener, deleteBtnListener } from "./events";

// component that creates header and Add interest button
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
    addFormBtnListener(addInterestBtn, headerDiv)
  });
  headerDiv.appendChild(interestHeader);
  headerDiv.appendChild(addInterestBtn);
  return headerDiv;
}

// component that formats each interest
function interestComponent(name, description, cost, place, review, id) {
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
  let editCostReviewBtn = document.createElement("button")
  editCostReviewBtn.setAttribute("id", `editCostReviewBtn--${id}`)
  editCostReviewBtn.textContent = "Edit"
  editCostReviewBtn.addEventListener("click", event => {
    costInterest.style.display = "none"
    editCostReviewBtn.style.display = "none"
    reviewInterest.style.display = "none"
      editCostReviewListener(interestDiv)
  })
  let deleteBtn = document.createElement("button")
  deleteBtn.setAttribute("id", `deleteBtn--${id}`)
  deleteBtn.textContent = "Delete"
  deleteBtn.addEventListener("click", event =>{
   deleteBtnListener()
})
  interestDiv.appendChild(nameInterest);
  interestDiv.appendChild(placeInterest);
  interestDiv.appendChild(descriptionInterest);
  interestDiv.appendChild(costInterest);
  if(review !== ""){
      interestDiv.appendChild(reviewInterest)
  }
  interestDiv.appendChild(editCostReviewBtn)
  interestDiv.appendChild(deleteBtn)
  return interestDiv;
}

// form to add interest
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
  let submitBtn = document.createElement("button")
  submitBtn.setAttribute("id", "submitBtn")
  submitBtn.textContent = "Save New Interest"
  submitBtn.addEventListener("click", event =>{
    event.preventDefault()
    if ( formValidation(nameInterestInput, descriptionInput, costInput) ===true) {
      let newInterestObj = buildInterestObj(dropDownPlace.value, nameInterestInput.value, descriptionInput.value, costInput.value, "")
     submitNewInterestListener(newInterestObj, interestForm)
    }
  })
  let hideFormBtn = document.createElement("button")
  hideFormBtn.setAttribute("id", "hideFormBtn")
  hideFormBtn.textContent = "Hide Form"
  interestForm.appendChild(addInterestHeader)
  interestForm.appendChild(nameInterestInput)
  interestForm.appendChild(descriptionInput)
  interestForm.appendChild(costInput)
  interestForm.appendChild(dropDownPlace);
  interestForm.appendChild(submitBtn)
  interestForm.appendChild(hideFormBtn)

  return interestForm
}

// form to edit cost and review on interest card
function editFormComponent(editButtonId){
    let editForm = document.createElement("form")
    editForm.setAttribute("id", `editForm--${editButtonId}`)
    let editCostLabel = document.createElement("label")
    editCostLabel.textContent = "Cost:"
    let editCostInterest = document.createElement("input")
    editCostInterest.setAttribute("id", `editCostInterest--${editButtonId}`)
    let editReviewLabel = document.createElement("label")
    editReviewLabel.textContent = "Review:"
    let editReviewInterest = document.createElement("input")
    editReviewInterest.setAttribute("placeholder", "Add Review")
    editReviewInterest.setAttribute("id", `editReviewInterest--${editButtonId}`)
    editForm.appendChild(editCostLabel)
    editForm.appendChild(editCostInterest)
    editForm.appendChild(editReviewLabel)
    editForm.appendChild(editReviewInterest)
    return editForm
}
export { interestComponent, headerComponent, addInterestComponent, editFormComponent};
