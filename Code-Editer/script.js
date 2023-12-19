
function displayResult(){
 let html = document.getElementById('html').value;
 let css = document.getElementById('css').value;
 let js = document.getElementById('js').value;
 let resultEl = document.getElementById('result')

 resultEl.contentDocument.body.innerHTML = `${html}<style>${css}<style/>`
 resultEl.contentWindow.eval(js)
}