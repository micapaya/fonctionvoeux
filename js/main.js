												//fonction défilement

var scrl = " POP School vous Souhaite  ";

function scrlsts() 
{
	 	scrl = scrl.substring(1, scrl.length) + scrl.substring(0, 1);
 		document.title = scrl;
 		setTimeout("scrlsts()", 300);
}


												//fonction disparition first page

function toggle(anId)
{
	node = document.getElementById('Calque_1');
	
															// Contenu visible, le cacher
		node.style.visibility = "hidden";
		node.style.height = "0";					// Optionnel libérer l'espace
		
	node = document.getElementById('Calque_2');
															// Contenu invisible, le montrer
		node.style.visibility = "visible";
		node.style.display = "block"
		node.style.height = "0";
}


