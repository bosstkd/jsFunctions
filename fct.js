
//---------- Retourne un tableau des elements appeler par leurs tagName ex: "LI"
function getByElementsTagName(elementsTagName){
 return document.getElementsByTagName(elementsTagName);;
}

//---------- Ajout d'identifiants aux element appeler par leurs tagName forme d'id: tagName_i 
//---------- Ex: "LI" => LI_0, LI_1 ... LI_N; 
function setElementsIdAsName(tags){
	var elt = getByElementsTagName(tags);
	for(var i = 0; i<elt.length; i++){
		  elt[i].setAttribute("id", tags+"_"+i);
	}
}

//---------- Ajout data-value aux element appeler par leurs tagName forme de data-value: tagName_i 
//---------- Ex: "LI" => LI_0, LI_1 ... LI_N; 
function setElementsDataValue(tags){
	var elt = getByElementsTagName(tags);
	for(var i = 0; i<elt.length; i++){
		  elt[i].setAttribute("data-value", tags+"_"+i);
	}
}


//-----------Identification---------------

//---retourn l'element par l'id---
function getById(i){
 return document.getElementById(i);
}

//---retourn la data-value par l'id---
function getDataValue(id) {
   return document.getElementById(id).getAttribute('data-value');
}

//---retourn le nom d'element par l'id---
function getElementName(id){
   return getById(id).name;
}

//---retourn la valeur d'element par l'id---
function getElementValue(id){
   return getById(id).value;
}


//--------------CSS------------------------

//----Change la couleur de l'element par l'id
function changeElementColor(id, color){
   var elt = getById(id);
   elt.style.color = color;
}

//----Change la couleur, la borderColor, et la backgroundColor de l'element par l'id
function changeElementCSSColors(id, color, borderColor, backgroundColor){
   var elt = getById(id);
   elt.style.color = color;
   elt.style.borderColor = borderColor;
   elt.style.backgroundColor = backgroundColor;
}

// fontSize in pixel ex: '15px' fontFamily ex: 'Monospace' fontStyle ex: 'italic', fontWeight ex: 'bold'
function changeElementFont(id, fontSize, fontFamily, fontStyle, fontWeight){
   var elt = getById(id);
   elt.style.fontSize = fontSize;
   elt.style.fontFamily = fontFamily;
   elt.style.fontWeight = fontWeight;
}

//---- Change le style de la bordure de l'element par l'id
function changeElementBorderStyle(id, borderStyle, borderWidth, borderRadius){
      var elt = getById(id);
	   elt.style.borderStyle = borderStyle;
	   elt.style.borderWidth = borderWidth;
	   elt.style.borderRadius = borderRadius;
}

//------------Formel-------------------

// Modifie la valeur de l'element appeler par l'id
function setElementValue(id, value){
     var elt = getById(id);
	 elt.value = value;
}

// change l'etat de l'element entre enable/disable;
function setElementStatus(id, state){
	var elt = getById(id);
	elt.disabled = state;
}

// met un switch sur l'etat de l'element enable/disable.
function setElementStatuSwitch(id){
	var elt = getById(id);
	elt.disabled = !elt.disabled;
}

// met un switch sur (0:(visible), 1(cachet), 2(cachet et position eleminé)) par l'id.
function setElementVisibility(id, entier){
	var x = document.getElementById(id);
	
	console.log(id+" "+entier);
	
		 if (entier === '0'){
				x.style.visibility = 'visible';
			  } else 
		 if (entier === '1'){
				x.style.visibility = 'hidden';
			  }else{
				x.style.visibility = 'collapse';
			  }
}

 