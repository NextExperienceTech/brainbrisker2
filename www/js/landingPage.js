var val, val1;

function stored() {
    //Get Username,email-id and age from localhost
    localStorage.name = document.getElementById("username").value;
    val = localStorage.getItem("name");
    console.log(val);
    document.getElementById("result").innerHTML = "Welcome" + ":" + localStorage.name;
    localStorage.mail = document.getElementById("email").value;
    val1 = localStorage.getItem("mail");
    console.log(val1);
    localStorage.age1 = document.getElementById("ageimg1").value;
    val2 = localStorage.getItem("age1");
    console.log(val2);
    alert("your data will be stored");
    modal.style.display = "none";
}

function loading() {
    document.getElementById("username").value = localStorage.getItem("name");
    document.getElementById("result").innerHTML = "Welcome" + ":" + localStorage.name;
    document.getElementById("email").value = localStorage.getItem("mail");

    if (val = "") {
        document.getElementById("myModal").style.display = "block";
    } else {
        document.getElementById("myModal").style.display = "none";
    }
}

function resett() {
    document.getElementById("username").value = "";
    document.getElementById("result").innerHTML = "";
    document.getElementById("email").value = "";
}