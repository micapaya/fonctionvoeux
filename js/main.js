function toggle(anId)
{
	node = document.getElementById('Calque_1');
	
		// Contenu visible, le cacher
		node.style.visibility = "hidden";
		node.style.height = "0";			// Optionnel libérer l'espace
		
	node = document.getElementById('Calque_2');
	
		node.style.visibility = "visible";
		node.style.display = "block"
		node.style.height = "0";
}
