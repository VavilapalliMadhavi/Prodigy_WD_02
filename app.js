let hr = min = sec = ms = "0"+ 0;
let num=0

let startBtn = document.querySelector(".buttons .start");
let stopBtn = document.querySelector(".buttons .stop");
let resetBtn = document.querySelector(".buttons .reset");
let lapBtn = document.querySelector(".buttons .lap");
let timelapsec = document.querySelector(".laps .lap");
let lapsec = document.querySelector(".wrapper .laps");

const start = ()=>{
    startBtn.classList.add("active")
    stopBtn.classList.remove("active")
    
    stopBtn.style.zIndex = 1

    starttimer = setInterval(()=>{
        ms++
        ms = ms < 10? "0" + ms : ms
        if(ms==100){
            sec++;
            sec = sec < 10? "0" + sec : sec;
            ms= 0;
        }
        if(sec==60){
            min++
            min = min < 10? "0" + min : min
            sec=0
        }
        if(min==60){
            hr++
            hr = hr < 10? "0" + hr : hr
            min=0
        }
        putvalue();
    },10)

}

const stop = ()=>{
    stopBtn.classList.add("active")
    startBtn.classList.remove("active")
    startBtn.style.zIndex = 1
    stopBtn.style.zIndex = -1
    clearInterval(starttimer)
}

const reset = ()=>{
    startBtn.classList.remove("active")
    stopBtn.classList.remove("active")
    clearInterval(starttimer)
    let hr = min = sec = ms = "0"+ 0;
    putvalue() 
    while(timelapsec.firstChild){
        timelapsec.removeChild(timelapsec.firstChild);
    }
    num=0
    stopBtn.style.zIndex = -1
    lapsec.classList.add("hide")
}

lapBtn.addEventListener("click", ()=>{
    num++
    lapsec.classList.remove("hide")
    let laptime = document.createElement("p");
    let hrline = document.createElement("hr")
    laptime.innerHTML = `${num}.${" "}${hr}:${min}:${sec}:${ms}`;
    timelapsec.appendChild(laptime);
    timelapsec.appendChild(hrline);
})

startBtn.addEventListener("click", start)
stopBtn.addEventListener("click", stop)
resetBtn.addEventListener("click", reset)

function putvalue(){
    // document.querySelector(".hours").innerHTML = ms;
    document.querySelector(".milliseconds").innerHTML = ms;
    document.querySelector(".seconds").innerHTML = sec;
    document.querySelector(".minutes").innerHTML = min;
    document.querySelector(".hours").innerHTML = hr;

}