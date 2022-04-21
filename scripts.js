function triangle() {

    // alert("Hello welcome to The Triangle checker!!")
    let A = document.getElementById("a").value;
    let B = document.getElementById("b").value;
    let C = document.getElementById("c").value;
    let image = document.getElementById("triimage")
    let output = document.querySelector('.output')

    if ((A == "") || (B == "") || (C == "")) {
        // window.alert("These values could form a triangle")
        output.textContent = "INPUT ALL VALUES !";
        image.src = "./images/load.gif"
    } else if (A === B && B === C) {
        output.textContent = "This is an equilateral triangle";
        image.src = "./images/Equilateral.png"
        console.log(A)
    } else if ((A === B && B !== C) || (A === C && C !== B) || (B === C && C !== A)) {
        output.textContent = "This is an isosceles triangle";
        image.src = "./images/Isoscles.png"
        console.log("Isoscles")

    } else if (A !== B && A !== C && B !== C) {
        output.textContent = "This is a scalene triangle";
        image.src = "./images/Scalene.png"
        console.log("Scalene")

    }
    window.scroll({
        top: 1000,
        behavior: "smooth" // 👈 
    });



}