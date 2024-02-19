let name = "Web";
console.log(name);

function add(){
    /*window.alert("Hi");*/
    val1 = document.getElementById("num1").value;
    val2 = document.getElementById("num2").value;
    //window.alert("The addition is "+(val1+val2));
    n1 = parseInt(val1)
    n2 = parseInt(val2)

    document.getElementById("result").innerHTML="The Addition is " + (n1+n2);
}