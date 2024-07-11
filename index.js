const body = document.body
let count = 0;



function handleClick() {
    count++;
    const text = document.createElement('p');
        text.style.color = 'green'
        text.classList.add('heavy')
        body.appendChild(text)
        let name = document.getElementsByTagName('input')[0].value
    if(count===1) {
        text.textContent =  `What do you want, ${name}?`
    }
    else if(count===2){
        text.style.color = 'blue'
        text.textContent = `${name}, stop bothering me!`;
    }
    else if(count===3) {
        text.style.color = 'red'
        text.textContent = 'LEAVE ME ALONE!'
    }
    else if(count===4)  {
        text.style.color = 'gray'
        text.textContent = "Ok, that's enough..."
    }
    else {
        const allPs = document.getElementsByTagName('p')
        while(allPs.length>0) {
            allPs[0].parentElement.removeChild(allPs[0])
        }
        count =0 ;
        document.getElementsByTagName('input')[0].value= ''
        console.log(name)
    }
    
    console.log(count)
    console.log(name)
}

