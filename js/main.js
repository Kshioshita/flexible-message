window.setInterval(changeQuote, 9900);
window.setInterval(changebg, 100);
document.getElementById('breathe').classList.add('hide');
window.setTimeout(changeCenter, 9900);
window.setTimeout(addBreathe,10000);
var isFirst=0;
var quoteNumber=1;
var maxQuotes=9;
var opa=.9;
var fadeOut=false;
var shad;
if(window.innerWidth<920){
	console.log("small");
	maxQuotes=4;
}

function changeQuote(){
	isFirst++;
	if(isFirst>1){
		document.getElementById('quote'+[quoteNumber]).classList.remove('hide');
		document.getElementById('quote'+[quoteNumber]).classList.add('noVis');
		quoteNumber++;
		if(quoteNumber>maxQuotes-1){
			quoteNumber=1;
		}
		document.getElementById('quote'+[quoteNumber]).classList.add('hide');
		document.getElementById('quote'+[quoteNumber]).classList.remove('noVis');
	}
}

function changebg(){
	if(!fadeOut){
		opa=opa-.01;
		// console.log(opa);
		if(opa<0){
			opa=0;
			fadeOut=true;
		}
		// console.log("inset 0 0 0 1000px rgba(255,255,255,"+opa+")");
		document.getElementById("bod").style.boxShadow="inset 0 0 0 1000px rgba(255,255,255,"+opa+")";
	}
	else{
		opa=opa+.01;
		if(opa>.8){
			opa=.8;
			fadeOut=false;
		}
		document.getElementById("bod").style.boxShadow="inset 0 0 0 1000px rgba(255,255,255,"+opa+")";
	}
	
}

function hideme(){
	document.getElementById('quote'+[quoteNumber]).classList.remove('vis');
	document.getElementById('quote'+[quoteNumber]).classList.add('noVis');
}

function showme(){
	document.getElementById('quote'+[quoteNumber]).classList.add('vis');
	document.getElementById('quote'+[quoteNumber]).classList.remove('noVis');
}

function changeCenter(){
	// document.getElementById('quote'+[quoteNumber]).classList.add('hide');
	document.getElementById('breathe').classList.remove('hide');
	document.getElementById('breathe').classList.add('noVis');
}

function addBreathe(){
	document.getElementById('breathe').innerHTML="Breathe";
	document.getElementById('breathe').style.fontSize="5em";
	document.getElementById('breathe').classList.add('active');
	document.getElementById('breathe').classList.remove('noVis');
}