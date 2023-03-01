animations();

function displayNav(){
    let nav = document.querySelector("nav.mobile");
    if(this.displayed == true){
        nav.style.display = "none";
        this.displayed = false;
    }
    else{
        nav.style.display = "flex";
        this.displayed = true;
    }
}

function animations(){
    writeAnimation();
    descendingLineAnimation();
}

function writeAnimation(){
    let query = document.querySelectorAll("[write-animation]");
    query.forEach((element) => {
        let text = element.innerText;
        element.innerText = "";
        element.style.setProperty('--blink', '');
        let speed = element.getAttribute("write-animation") != "" ? element.getAttribute("write-animation") : 50;
        for(let i = 0; i<text.length; i++){
            setTimeout(() => {
                element.innerText+=(text[i]);
            }, speed * i);
        }
        setTimeout(() => {
            element.style.setProperty('--blink', '|');
        }, speed * (text.length + 1));
        
    });
}

function descendingLineAnimation(){
    let query = document.querySelectorAll("[descending-line-animation]");
    query.forEach((element) => {
        let text = element.innerText;
        element.innerText = "";
        let speed, duration;
        if(element.getAttribute("descending-line-animation") != ""){
            speed = Number(element.getAttribute("descending-line-animation").split(' ')[0]);
            duration = Number(element.getAttribute("descending-line-animation").split(' ')[1])/1000;
        }
        else{
            speed = 50;
            duration = 1000 / 1000;
        }
        

        for(let i = 0; i<text.length; i++){
            element.innerHTML+=(`<span>${text[i]}</span>\n`);
            element.children[i].style.setProperty('--animation-delay', (((i+1) * speed) / 1000) + "s");
            element.children[i].style.setProperty('--animation-duration', duration + "s");
        }

        setTimeout(() => {
            element.innerHTML = "";
            element.innerText = text;
        }, speed * (text.length + 4));
    });
}

