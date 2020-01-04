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

			function setElementInnerHtml(id, value){
				 var elt = getById(id);
				 elt.innerHTML = value;
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

			// met un switch sur (0:(visible), 1(cachet), 2(cachet et position éliminé)) par l'id.
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


			//---------String traitement-------------------------------
			function strMatcher(str, regex) {
			  var res = str.match(regex);
			  return res != null 
			}

			// liste de mots depuis un paragraph;
			function getListStringFromParagraph(paragraph){
				var regex = /[A-Za-z_]*/g;
				var found = paragraph.match(regex);
				var fList = [];
				for(let i=0; i<found.length; i++){
					if(found[i] != "") fList.push(found[i]);
				}

				return fList;
			}

			// liste d'entier depuis un paragraph;
			function getListIntFromParagraph(paragraph){
				var regex = /[0-9]*/g;
				var found = paragraph.match(regex);
				var fList = [];
				for(let i=0; i<found.length; i++){
					if(found[i] != "") fList.push(found[i]);
				}

				return fList;
			}

			// liste double depuis un paragraph;
			function getListDoubleFromParagraph(paragraph){
				var regex = /[0-9]*\.[0-9]*/g;
				var found = paragraph.match(regex);
				var fList = [];
				for(let i=0; i<found.length; i++){
					if(found[i] != "") fList.push(found[i]);
				}

				return fList;
			}

//-----------effect functions---------------------


//  comme son nom l'indique permet de faire clignoter un objet			
function clignote(id, timing){
	var elt = getById(id);
	
	if(elt.style.visibility==='visible'){
		elt.style.visibility='hidden';
	}else{
		elt.style.visibility='visible';
	}
	setTimeout("clignote('"+id+"', "+timing+")", timing);
}


//  permet de permuter l'opacité de l'objet signe doit etre -1	
function oppacity(id, signe){
	var elt = getById(id);
	
	if(elt.style.opacity >= 0.96) signe = -1;
		
	if(elt.style.opacity <= 0.04) signe = 1;
		
	elt.style.opacity = (elt.style.opacity * 1) + (signe * 0.04);
	
	setTimeout("oppacity('"+id+"',"+signe+")", 85 );
}

//----------- traitement Caractères spéciaux ----------------------------------------  
	
//retourne la chaine de caractère de l'element et remplace la listChars par null('');	
function notAcceptChar(id, listChars){
	var elt = getById(id);
	let str = elt.value;
	let i = 0;
	for(i = 0; i < listChars.length; i++){
		if(str.includes(listChars[i])) str = str.split(listChars[i]).join('');
	}
	return str;
}	

//modifie la valeur de l'element en remplaçon les caracteres de la listChars par '';
function NACOnInputText(id, listChars){
	var elt = getById(id);
	var str = notAcceptChar(id, listChars);
	elt.value = str;
}

//meme chose que NACOnInputText(id, listChars) sauf la réaction onkeyup;
function NACOnKeyUpDo(id, listChars){
	var elt = getById(id);
	let i = 0;
	let str = ""
	for(i=0; i<listChars.length; i++){
		if(listChars[i] === "\"") 
			str = str + "\\\"";
	else if(listChars[i] === "\\") 
			str = str + "\\\\";	
	else
			str = str + listChars[i];
	}
	
	elt.setAttribute("onkeyup", 'NACOnInputText("'+id+'", "'+str+'" )');
}


//-------------------- date et heures ----------------------------
// formatage de la date
function formatDate(date) {
	
  var monthNames = [
    "Janvier", "Fevrier", "Mars",
    "Avril", "Mai", "Juin", "Juillet",
    "Aout", "Septembre", "Octobre",
    "Novembre", "Decembre"
  ];

  var jour = date.getDate();
  var indexMois = date.getMonth();
  var annee = date.getFullYear();

  return jour + ' ' + monthNames[indexMois] + ' ' + annee;
}

// retourne la date d'aujourd'hui formater
function myDate(){
	let dt = new Date();
	return formatDate(dt);
} 

// Retourne l'heure actuel
function myHour(){
	let dt = new Date();
	return  zeroNbr(dt.getHours())+":"+zeroNbr(dt.getMinutes())+":"+zeroNbr(dt.getSeconds());
}

// Retourne la date et l'heure actuel.
function dateAndHour(){
	return myDate()+" "+myHour();
}

// Ecrire la date et l'heure sur un element HTML
function dateAndHourOnEltHTML(id){
	setElementInnerHtml(id, dateAndHour());
	setTimeout("dateAndHourOnEltHTML('"+id+"')");
}

// Ecrire la date et l'heure sur un element qui accepte une valeur.
function dateAndHourOnEltValue(id){
	setElementValue(id, dateAndHour());
	setTimeout("dateAndHourOnEltValue('"+id+"')");
}

//---------------Session---------------------------

// Sauvegarde en session
function saveInSession(idInfo, info){
		if (typeof(Storage) !== "undefined") {
		  sessionStorage.setItem(idInfo, info);
		  return true;
		}
		  return false;
}

// Extraction d'information depuis la session
function getFromSession(idInfo){
	return sessionStorage.getItem(idInfo);
}

//-------------------------------------------------

function zeroNbr(i){
	if(i<9) 
		return "0"+i;
		return i;
}


// Object to test
var person = {
  firstName : "Mahmoudi",
  lastName  : "Mohammed El Amine",
  age     : 33,
  eyeColor  : "brown"
};


