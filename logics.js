function initCountdown(t,e){if(!t)return void 
console.error("Must have element to populate the clock!");
const s={day:0,hour:0,min:0,sec:0,color:"#ff00ff",showMs:!1,glow:!1,goldOutline:!1,font:"Roboto, sans-serif",fontWeight:600,showAllNumbers:!1,freezeTime:!1,onlyShowTime:!1,onlySec:!1,id:(()=>{let t=(new Date).getTime(),e="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){let s=(t+16*Math.random())%16|0;
return t=Math.floor(t/16),("x"==e?s:3&s|8).toString(16)}));
return e})()},a=Object.assign(s,e);
if(a.totalSeconds=parseInt(3600*a.hour+60*a.min+a.sec),a.totalSeconds<=0)
return void console.error("What are you some kind of wiseguy?");!a.dotColor&&(a.dotColor=s.color);
let o=-110;o=a.totalSeconds>=10?-90:o,o=a.totalSeconds>=60?-65:o,o=a.totalSeconds>=600?-45:o,o=a.totalSeconds>=3600?-20:o,o=a.totalSeconds>=36e3?0:o,o=a.onlySec?-45:o;
let r=a.showMs?175+o:130+o,n=a.showAllNumbers?300:30,i=a.showAllNumbers?-300:0,d=a.showAllNumbers?2:1,l=a.showAllNumbers?` mask="url(#mask${a.id})"`:"",c=a.glow?`<use href="#fullClock${a.id}" filter="url(#glow${a.id})"/>`:"",f=a.glow?`<filter id="glow${a.id}" x="-200%" y="-200%" width="1000%" height="1000%"><feGaussianBlur in="SourceGraphic" stdDeviation="1.4"><animate attributeName="stdDeviation" values="1.4; 4; 1.4" dur="0.3s" begin="placeholderAnimation${a.id}.end" repeatCount="indefinite" /></feGaussianBlur></filter>`:"",m="0 -270; 0 -240; 0 -210; 0 -180; 0 -150; 0 -120; 0 -90; 0 -60; 0 -30; 0 0",$="0 -150; 0 -120; 0 -90; 0 -60; 0 -30; 0 0",u=a.showMs?"M 132.5 10 v0 m0 10 v0":"",p=a.showMs?`<g class="ms10"><use href="#nums${a.id}" transform="translate(135)" /><animateTransform id="ms10${a.id}" attributeName="transform" type="translate" values="${m}" dur="1s" begin="0s" repeatCount="${parseInt(a.totalSeconds)}" calcMode="discrete" /></g><g class="ms"><use href="#nums${a.id}" transform="translate(155)" /><animateTransform id="ms${a.id}" attributeName="transform" type="translate" values="${m}" dur=".1s" begin="0s" repeatCount="${parseInt(10*a.totalSeconds)}" calcMode="discrete" /></g>`:"";a.sec1Passed=parseInt(a.totalSeconds%10),a.sec10Passed=parseInt(a.totalSeconds%60),a.min1Passed=parseInt(a.totalSeconds/60%10),a.min10Passed=parseInt(a.totalSeconds/60%60%100/10),a.hr1Passed=parseInt(a.totalSeconds/3600%10),a.hr10Passed=parseInt(a.totalSeconds/36e3);
let g=a.totalSeconds>=36e3?`<animateTransform id="hr10${a.id}" attributeName="transform" type="translate" values="${m}" dur="360000s" begin="-${36e4-(36e3*a.hr10Passed+3600*a.hr1Passed+600*a.min10Passed+60*a.min1Passed+a.sec10Passed)}s" repeatCount="${Math.ceil(a.totalSeconds/36e4)}" calcMode="discrete" />`:"",h=a.totalSeconds>=3600?`<animateTransform id="hr${a.id}" attributeName="transform" type="translate" values="${m}" dur="36000s" begin="-${36e3-(3600*a.hr1Passed+600*a.min10Passed+60*a.min1Passed+a.sec10Passed)}s" repeatCount="${Math.ceil(a.totalSeconds/36e3)}" calcMode="discrete" />`:"",x=a.totalSeconds>=600?`<animateTransform id="min10${a.id}" attributeName="transform" type="translate" values="${$}" dur="3600s" begin="-${3600-(600*a.min10Passed+60*a.min1Passed+a.sec10Passed)}s" repeatCount="${Math.ceil(a.totalSeconds/3600)}" calcMode="discrete" />`:"",S=a.totalSeconds>=60?`<animateTransform id="min${a.id}" attributeName="transform" type="translate" values="${m}" dur="600s" begin="-${600-(60*a.min1Passed+a.sec10Passed)}s" repeatCount="${Math.ceil(a.totalSeconds/600)}" calcMode="discrete" />`:"",b=a.totalSeconds>=10?`<animateTransform id="sec10${a.id}" attributeName="transform" type="translate" values="${$}" dur="60s" begin="-${60-a.sec10Passed}s" repeatCount="${Math.ceil(a.totalSeconds/60)}" calcMode="discrete" />`:"",y=a.totalSeconds>=36e3?1:.2,w=a.totalSeconds>=3600?1:.2,M=a.totalSeconds>=600?1:.2,v=a.totalSeconds>=60?1:.2,k=a.totalSeconds>=10?1:.2,P="",C="",T="",G="";
if(a.goldOutline){T=' visibility="hidden"',P=`<linearGradient id="goldGrad${a.id}" gradientTransform="rotate(5)" x1="0%" y1="0%" x2="42%" y2="0%" spreadMethod="repeat"><stop offset="0%" stop-color="#ffb338" /><stop offset="50%" stop-color="#3e2904" /><stop offset="100%" stop-color="#ffb338" /></linearGradient><linearGradient id="goldGrad2${a.id}" gradientTransform="rotate(5)" x1="0%" y1="5%" x2="0%" y2="61%" spreadMethod="repeat"><stop offset="0%" stop-color="#ffb338" /><stop offset="50%" stop-color="#77571d" /><stop offset="100%" stop-color="#ffb338" /></linearGradient>`;for(let t=0;t<10;t++){G+=`<use href="#t${t}${a.id}" />`;for(let e=0;e<10;e++)C+=`<use href="#t${t}${a.id}" transform="translate(0 ${.1+.1*e})" />`}}else T=` fill=${a.color}`;let N=`<svg id="clockItToMe${a.id}" xmlns="http://www.w3.org/2000/svg" viewBox="0 ${i} ${r} ${n*d}" height="100%" class="clockCountdown"><defs>${P}${f}<g id="nums${a.id}" font-weight="${a.fontWeight}" font-size="25" font-family="${a.font}"><g${T}><text id="t0${a.id}" transform="translate(3 24)">0</text><text id="t1${a.id}" transform="translate(3 54)">1</text><text id="t2${a.id}" transform="translate(3 84)">2</text><text id="t3${a.id}" transform="translate(3 114)">3</text><text id="t4${a.id}" transform="translate(3 144)">4</text><text id="t5${a.id}" transform="translate(3 174)">5</text><text id="t6${a.id}" transform="translate(3 204)">6</text><text id="t7${a.id}" transform="translate(3 234)">7</text><text id="t8${a.id}" transform="translate(3 264)">8</text><text id="t9${a.id}" transform="translate(3 294)">9</text></g><g fill="url(#goldGrad${a.id})" stroke="url(#goldGrad${a.id})" stroke-width="0.5">${C}</g><g fill="${a.color}" stroke="url(#goldGrad2${a.id})" stroke-width="0.5" stroke-linejoin="round" stroke-linecap="round">${G}</g></g><linearGradient id="grad${a.id}" gradientTransform="rotate(90)"><stop offset="20%" stop-color="#000" /><stop offset="50%" stop-color="#fff" /><stop offset="80%" stop-color="#000" /></linearGradient><linearGradient id="grad2${a.id}" gradientTransform="rotate(90)"><stop offset="40%" stop-color="#000" /><stop offset="50%" stop-color="#fff" /><stop offset="60%" stop-color="#000" /></linearGradient></defs><g transform="translate(${o} 0)"><g id="fullClock${a.id}"${l}><g class="hr10" opacity="${y}"><use href="#nums${a.id}" />${g}</g><g class="hr" opacity="${w}"><use href="#nums${a.id}" transform="translate(20)" />${h}</g><g class="min10" opacity="${M}"><use href="#nums${a.id}" transform="translate(45)" />${x}</g><g class="min" opacity="${v}"><use href="#nums${a.id}" transform="translate(65)" />${S}</g><g class="sec10" opacity="${k}"><use href="#nums${a.id}" transform="translate(90)" />${b}</g><g class="sec"><use href="#nums${a.id}" transform="translate(110)" /><animateTransform id="sec${a.id}" attributeName="transform" type="translate" values="${m}" dur="10s" begin="-${(10-a.sec1Passed)%10}s" repeatCount="${Math.ceil(a.totalSeconds/10)}" calcMode="discrete" /></g>${p}<path d="M42.5 10 v0 m0 10 v0" stroke="${a.dotColor}" stroke-width="3" stroke-linecap="square" opacity="${w/2}" /><path d="M 87.5 10 v0 m0 10 v0" stroke="${a.dotColor}" stroke-width="3" stroke-linecap="square" opacity="${v/2}" /><path d="${u}" stroke="${a.dotColor}" stroke-width="3" stroke-linecap="square" opacity="1" /></g>${c}<g><animate id="placeholderAnimation${a.id}" attributeName="opacity" values="0; 0" dur="${a.totalSeconds}s" begin="0s" repeatCount="1" /></g></g></svg>`;
const I=document.createElement("div");I.innerHTML=N;const A=I.firstChild;return t.appendChild(A),a.id}
initCountdown(document.querySelector('#clock'), {color: '#ccccff', dotColor: '#fff', showMs: true, goldOutline: true, sec: 30});
document.querySelector('.s100').addEventListener('click', () => {
document.querySelector('#clock').innerHTML = '';
initCountdown(document.querySelector('#clock'), {color: '#345', dotColor: '#fff', showMs: true, goldOutline: true, sec: 100});
});
