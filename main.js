document.getElementById("form").addEventListener("submit", function name(event) {


    const modemId = document.getElementById("modmeId").value;
    const password = document.getElementById("password").value;

    if (modemId === "123456" && password === "78900") {
        alert("Siz ro'yhtingiz otingiz");
    } else {
        const newElement = document.createElement("p");
        alert("Hato");
    }
});

document.getElementById("btn2").addEventListener("click" , function text() {

    let test = prompt("Savolingizni kiriting");

    const newElement = document.createElement("p")
    newElement.innerHTML = test;
    document.body.appendChild(newElement)
    })



    newElement.style.textAlign = 'center';
    newElement.style.marginTop = '40px';
    newElement.style.fontSwize = '50px';