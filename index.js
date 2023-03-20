function submit(){
    let count = 0;
    let text = document.getElementById("input").value;
    if (text.length === 0){
        document.getElementById("input").placeholder= "Enter number!!";
        return;
    }
    for (let i = 0; i < text.length; i++) {
        if(text.charAt(i)>=0 && text.charAt(i) <=9){
            count++;
        }
        else {
            temp =document.getElementById("input");
            document.getElementById("input").value="";
            document.getElementById("input").placeholder= "is must be numbers!!";
            break;
        }
    }
    if(count === text.length){
        document.getElementById("game").click();

    }
}