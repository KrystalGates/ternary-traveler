// builds Obj to send to DB
function buildInterestObj(placeId,name,description,cost,review) {
    return {
      placeId,
      name,
      description,
      cost,
      review
    };
  }

//   validates that all fields are filled in form
  function formValidation(nameInterestInput, descriptionInput, costInput){
    if (nameInterestInput.value === "" || descriptionInput.value === "" ||costInput.value === ""){
        alert("Please fill out all fields!")
        return false
    }
else{
    return true
}
  }

  export {buildInterestObj, formValidation}