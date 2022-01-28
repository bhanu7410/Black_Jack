const dealer=document.querySelector(".dealerVal")
const player=document.querySelector(".playerVal")
const start = document.querySelector(".start")
const divB= document.querySelector(".divButtons")
const hit = document.createElement('button')
const stand = document.createElement('button')
const playA = document.createElement('button')
const div = document.createElement('div');
const log =document.querySelector('.log')

const mainCards={
    1:[1,2,3,4,5,6,7,8,9,10,10,10],
    2:[1,2,3,4,5,6,7,8,9,10,10,10],
    3:[1,2,3,4,5,6,7,8,9,10,10,10],
    4:[1,2,3,4,5,6,7,8,9,10,10,10]
}

let logNum=1
let t=0
let p_val=0
let d_val=0
let cards=null
let set=0
// cards[set].splice(Math.floor(Math.random()*cards[set].length),1)

hit.innerText="HIT"
hit.classList.add("iii")
stand.innerText="STAND"
stand.classList.add("iii")
playA.innerText="Play Again"
playA.classList.add("playAgain")


start.onclick = ()=>{
    var card=0
    cards = JSON.parse(JSON.stringify(mainCards));
    set=Math.round(Math.random() * 3)+1
    card = cards[set].splice(Math.floor(Math.random()*cards[set].length),1)[0]
    p_val+=card
    printD(card,"player")
    console.log(p_val)
    set=Math.round(Math.random() * 3)+1
    card = cards[set].splice(Math.floor(Math.random()*cards[set].length),1)[0]
    p_val+=card
    printD(card,"player")
    console.log(p_val)
    set=Math.round(Math.random() * 3)+1
    card = cards[set].splice(Math.floor(Math.random()*cards[set].length),1)[0]
    d_val+=card
    printD(card,"computer")
    console.log(d_val)
    set=Math.round(Math.random() * 3)+1
    card = cards[set].splice(Math.floor(Math.random()*cards[set].length),1)[0]
    d_val+=card
    printD(card,"computer")
    console.log(d_val)

    dealer.innerText=`${d_val}`
    player.innerText=`${p_val}`
    start.remove()

    divB.append(hit)
    divB.append(stand)
    setTimeout(()=>{
        // console.log("HOW ARE YOU ARE YOU ALIVE")
        hit.classList.remove("iii")
        hit.classList.add("ani")
        stand.classList.remove("iii")
        stand.classList.add("ani")
    
    },300)
    // hit.classList.add("ani")
}


hit.onclick =()=>{
    var card=0
    set=Math.round(Math.random() * 3)+1
    card = cards[set].splice(Math.floor(Math.random()*cards[set].length),1)[0]
    p_val+=card
    printP(card)
    console.log(p_val)
    player.innerText=`${p_val}`
    hit.classList.add("ani")
    if (p_val>21){
        lost()
        winD()
        var temp = document.createElement('div')
        temp.classList.add("trip")
        temp.innerText=`You Exceeded the limit`
        log.prepend(temp)
        // break;
    }
    else if (p_val==21){
        var temp = document.createElement('div')
        temp.classList.add("trip")
        temp.innerText=`You HIT BLACK JACK`
        log.prepend(temp)
        standFunc()
    }
}

const standFunc=()=>{
    var temp = document.createElement('div')
    temp.classList.add("trip")
    while (p_val>d_val){
        var card=0
        set=Math.round(Math.random() * 3)+1
        card = cards[set].splice(Math.floor(Math.random()*cards[set].length),1)[0]
        d_val+=card
        printDeal(card)
        console.log(d_val)
        dealer.innerText=`${d_val}`
        
        if (d_val>21){
            lost()
            winP()
            temp.innerText=`Dealer exceeded the limit`
            log.prepend(temp)
            temp = document.createElement('div')
            temp.classList.add("trip")
            temp.innerText = "YOU WON....."
            log.prepend(temp)
        }
        else if(d_val>p_val){
            lost()
            winD()
            temp.innerText=`Dealer WON`
            log.prepend(temp)
        }
        else if(d_val==p_val){
            lost()
            drawD()
            temp.innerText=`The result is a draw`
            log.prepend(temp)
        }
    }
    if(d_val>=p_val && d_val<=21){
        lost()
        winD()
        if (d_val==p_val){
            temp.innerText=`Dealer decided to leave it at Draw`
            log.prepend(temp)    
            breakß
        }
        temp.innerText=`Dealer exceeded the limit`
        log.prepend(temp)
    }
}

const lost = ()=>{
    setTimeout(()=>{
        // console.log("HOW ARE YOU ARE YOU ALIVE")
        hit.classList.remove("ani")
        hit.classList.add("iii")
        stand.classList.remove("ani")
        stand.classList.add("iii")
    
    },300)
    setTimeout(()=>{
        hit.remove()
        stand.remove()
        
    },500)
    // playA.innerText="Play Again"
    divB.append(playA)
    playA.classList.add("iii")
    playA.classList.add("ii")

    setTimeout(()=>{
        playA.classList.remove("iii")
        playA.classList.remove("ii")
        playA.classList.add("ani")
    },1000)   

}

playA.onclick = () =>{
    p_val=0
    d_val=0

    var temp = document.createElement('div')
    temp.classList.add('trip')
    temp.innerText="Let's Play Again"
    log.prepend(temp)

    const t = setInterval(()=>{
        
        op=Number(window.getComputedStyle(div).getPropertyValue("opacity"));
        if (op>0){
            op-=2;
            div.style.opacity=op;
        }
        else{
            clearInterval(t);
        }
        console.log(t)
    },1000)

    
    setTimeout(()=>{
        // console.log("HOW ARE YOU ARE YOU ALIVE")
        playA.classList.remove("playAgain")
        playA.classList.add("iii")
    },300)
    setTimeout(()=>{
        playA.remove()
        
    },200)

    divB.append(start)
    start.classList.add("iii")
    start.classList.add("ii")

    setTimeout(()=>{
        start.classList.remove("iii")
        start.classList.remove("ii")
        start.classList.add("ani")
    },1000)  

    setTimeout(()=>{
        dealer.innerText=`${d_val}`
        player.innerText=`${p_val}`
    },1000)

    setTimeout(()=>{
        div.style.opacity=0
        div.remove()
        div.classList.remove("resultWin")
        div.classList.remove("resultLose")
        div.classList.remove("resultDraw")
    },2000)
}

const winP = () =>{
    div.classList.add("resultWin")

    document.querySelector(".cards").append(div)
    const t = setInterval(()=>{
        op=Number(window.getComputedStyle(div).getPropertyValue("opacity"));
        if (op<1){
            op+=1;
            div.style.opacity=op;
        }
        else{
            clearInterval(t);
        }
        console.log(t)
    },1000)

}

const winD = () =>{
    div.classList.add("resultLose")
    document.querySelector(".cards").append(div)
    const t = setInterval(()=>{
        op=Number(window.getComputedStyle(div).getPropertyValue("opacity"));
        if (op<1){
            op+=1;
            div.style.opacity=op;
        }
        else if (op>=1){
            clearInterval(t);
        }
        console.log(t)
    },200)
}

const drawD = () =>{
    div.classList.add("resultDraw")
    document.querySelector(".cards").append(div)
    const t = setInterval(()=>{
        op=Number(window.getComputedStyle(div).getPropertyValue("opacity"));
        if (op<1){
            op+=3;
            div.style.opacity=op;
        }
        else{
            clearInterval(t);
        }
        console.log(t)
    },1000)
}

const printD = (val,player)=>{
    var temp = document.createElement('div')
    if (player =="computer"){
        temp.innerText = `${logNum}. Computer has taken card ${val} `
    }
    else{
    temp.innerText = `${logNum}. Player has recieved card ${val} `
    }
    log.prepend(temp)
    logNum++
}

const printP = val =>{
    var temp = document.createElement('div')
    temp.innerText=`${logNum}. Dealer responded to player HIT and Dealt ${val}`
    log.prepend(temp)
    logNum++
}
const printDeal = val =>{
    var temp = document.createElement('div')
    temp.innerText=`${logNum}. Dealer took card ${val}`
    log.prepend(temp)
    logNum++
}
// console.log(Math.floor(Math.random()*cards[3].length)+1)
// while (cards[set].length>0){
//     console.log(cards[set])
// }
stand.onclick = standFunc
