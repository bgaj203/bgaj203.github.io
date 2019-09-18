let formDataJSON = {}
"https://script.google.com/macros/s/AKfycbxq48J7WFwfEuElAEGz6t0OO5IPfRDcEDJHVTQ9Bg/exec"

readData = () => {
  const formData = new FormData(document.getElementById('emailMeForm'));
  for (let pair of formData.entries()){
    formDataJSON[pair[0]] = pair[1]
  }
  document.getElementById('emailMeForm').reset()

  if (formDataJSON['senderHoneyPot'] == ""){
    postRequest()
  }
}

postRequest = () => {
  const url = "https://script.google.com/macros/s/AKfycbxq48J7WFwfEuElAEGz6t0OO5IPfRDcEDJHVTQ9Bg/exec"
  const xhr = new XMLHttpRequest()
  xhr.open('POST', url)
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.onload = () => {
    if (xhr.status == 200) {
      document.getElementById('emailMeForm').style = 'display: none'
      document.getElementById('successText').style = 'display: flex'
    }
  }
  xhr.send(JSON.stringify(formDataJSON))
}