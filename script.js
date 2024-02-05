document.getElementById("submmitButton").onclick = function showDetails(){

    const showInput = document.querySelector(".txtFromform")
    showInput.style.display = 'block'

    const closForm = document.querySelector(".form")
    closForm.style.display = 'none'

    let username = document.getElementById("userName").value;
    let userAge = document.getElementById("userAge").value;
    let birthDate = document.getElementById("birthDate").value;
    let userComment = document.getElementById("commentSomthing").value;

    document.querySelector(".userCommentedsomeThing").innerHTML = userComment;
    document.querySelector(".userNameinput").innerHTML = username;
    document.querySelector(".myAge").innerHTML = userAge;
    document.querySelector(".birthDate").innerHTML = birthDate;

    

}