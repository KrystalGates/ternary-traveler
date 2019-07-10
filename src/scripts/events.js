import{addInterestComponent, editFormComponent} from "./components.js";
import{addInterestToDom} from "./addToDOM.js"
import {API} from "./api"

// adds for to the DOM
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

// adds new interest to data and updates DOM
function submitNewInterestListener(newInterestObj, interestForm){
    API.addData("interests", newInterestObj )
    .then (data =>{
        addInterestToDom()
        interestForm.reset()
    })
  }

//   puts form to edit cost and review into given interest on DOM
  function editCostReviewListener(interestDiv){
    let editButtonId = event.target.id.split("--")[1]
    interestDiv.appendChild(editFormComponent(editButtonId))
    let editCostInterest = document.querySelector(`#editCostInterest--${editButtonId}`)
    let editReviewInterest = document.querySelector(`#editReviewInterest--${editButtonId}`)
    let editForm = document.querySelector(`#editForm--${editButtonId}`)
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

//   deletes interest after confirmation and updates DOM
  function deleteBtnListener(){
    if(confirm("Are you sure you want to delete this?")){
        let deleteBtnId = event.target.id.split("--")[1]
        API.deleteData("interests", deleteBtnId).then(data =>{
            addInterestToDom()
        })
      }
  }

export{addFormBtnListener, submitNewInterestListener,editCostReviewListener, deleteBtnListener}