 //Create Items
 document.getElementById("ourForm").addEventListener("submit", function(e){
    e.preventDefault()
    axios.post('/create-item', {text:ourField.value}).then(function(){
        document.getElementById("ourList").insertAdjacentElement("beforeend", "hi")
    }).catch(function () {
        console.log('Some Error')
    })
})


document.addEventListener("click", function(e){ 
    //Delete Items
    if (e.target.classList.contains("delete-me")) {
        if (confirm("Do You Want To Really Delete This Item Permanetly ?")) {
            axios.post('/delete-item', {id:e.target.getAttribute("data-id")}).then(function(){
                e.target.parentElement.parentElement.remove()
            }).catch(function () {
                console.log('Some Error')
            })
        }
    }

    //Update Items
    if (e.target.classList.contains("edit-me")) {
        let userInput =  prompt('Enter new item', e.target.parentElement.parentElement.querySelector(".item-text").innerHTML)
       if (userInput) {
        axios.post('/update-item', {text: userInput, id:e.target.getAttribute("data-id")}).then(function(){
            e.target.parentElement.parentElement.querySelector(".item-text").innerHTML = userInput
        }).catch(function () {
            console.log('Some Error')
        })
       }
    }
})

