

document.getElementById("form").addEventListener("submit", function name(event) {
    event.preventDefault()

    const modemId = document.getElementById("modmeId").value;
    const password = document.getElementById("password").value;

    if (modemId === "123456" && password === "78900") {
        alert("Siz ro'yhtingiz otingiz");
        let addQuestionElement = document.createElement("h1")
        addQuestionElement.classList.add("test")
        addQuestionElement.innerHTML = "Savol qo'shish uchun bu tugmani bosing!"
        let btn = document.createElement("button");
        btn.classList.add("question")
        btn.innerHTML = "Add questions";
        document.body.appendChild(btn)
        document.body.appendChild(addQuestionElement);



        function AddQues() {
            let savol = prompt("Savolingizni kiriting!")

            let texts = document.getElementById('texts')
            texts.innerHTML = savol

        }



        btn.addEventListener("click", AddQues)
    } else {

        const newElement = document.createElement("p");
        alert("Hato");

    }
});



// document.getElementById("btn2").addEventListener("click" , function text() {

//     let test = prompt("Savolingizni kiriting");

//     const newElement = document.createElement("p")
//     newElement.innerHTML = test;
//     document.body.appendChild(newElement)
//     })



//     newElement.style.textAlign = 'center';
//     newElement.style.marginTop = '40px';
texts.style.fontSwize = '50px';
addQuestionElement.style.marginLeft = '200px'
btn.style.textAlign = 'center'
