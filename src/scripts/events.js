import{addInterestComponent, editFormComponent} from "./components.js";
import{addInterestToDom} from "./addToDOM.js"
import {API} from "./api"

function addFormBtnListener(addInterestBtn, headerDiv){
    addInterestBtn.style.display = "none";
    headerDiv.appendChild(addInterestComponent())
    if(addInterestBtn.style.display = "none"){
        document.querySelector("#hideFormBtn").addEventListener("click", event => {
            event.preventDefault()
            document.querySelector("#interestForm").style.display = "none"
            addInterestBtn.style.display = "block"
        })
    }
}

function submitNewInterestListener(newInterestObj, interestForm){
    API.addData("interests", newInterestObj )
    .then (data =>{
        addInterestToDom()
        interestForm.reset()
    })
  }

  function editCostReviewListener(interestDiv){
    let editButtonId = event.target.id.split("--")[1]
    interestDiv.appendChild(editFormComponent(editButtonId))
    API.getData("interests", editButtonId)
    .then(interestEdit => {
        editCostInterest.value = interestEdit.cost
        editReviewInterest.value = interestEdit.review
        editForm.addEventListener("keypress", event => {
            if (event.keyCode === 13){
                interestEdit.cost = document.querySelector(`#editCostInterest--${editButtonId}`).value
                interestEdit.review = document.querySelector(`#editReviewInterest--${editButtonId}`).value
                API.editData("interests", interestEdit).then(data => {
                    addInterestToDom()
                })
            }
        })
    })
  }

export{addFormBtnListener, submitNewInterestListener,editCostReviewListener}