const spanTxt = document.querySelector('.exploreTxtSpan')

const spanTxtData = ["Culture","Nature"]
let idx = 0;

function changeSpan(){
  spanTxt.innerHTML = spanTxtData[idx]
  idx++
  if(idx === spanTxtData.length) idx = 0;
}

setInterval(changeSpan, 3000)