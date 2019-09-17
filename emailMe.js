//const formData = []

// document.getElementById('emailMeForm').addEventListener('submit', (event) => {
//   console.log('here')
//   formData = new FormData(event.target)
//   event.preventDefault()
//   event.currentTarget.reset()
//   readData()
// })

// document.querySelector('form').addEventListener('submit', (e) => {
//   const formData = new FormData(e.target);
//   e.preventDefault();
// });

readData = () => {
  console.log("hi")
  let formData = new FormData();
  formData = document.getElementById('emailMeForm')
  console.log(formData.senderName.value)
  document.getElementById('emailMeForm').reset()
}
