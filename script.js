const input = document.getElementById("inputbox");
const list = document.querySelector(".list");
const button = document.querySelector(".button");
button.addEventListener("click" , function(){
    if(input.innerHTML === ' '){
        alert("Write some task!");
    }
        else{
            let li = document.createElement("li");
            
    li.addEventListener("click" , function(){
    li.classList.toggle("done");
    
});
            li.innerHTML = input.value ;
            input.value = ' ';
        
            let span = document.createElement("span");
            span.innerHTML = "\u00d7";
            span.addEventListener("click" , function(){
                li.remove();
            })
            
            list.appendChild(li);
            li.appendChild(span);
            
        }
    })

    let btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
    if (btn.innerHTML === "Quote") {
        btn.innerHTML = "COMPLETE YOUR WORK ON TIME";
    } else {
        btn.innerHTML = "Quote";  // Reset the button text when clicked again
    }
});

    
    
    


    