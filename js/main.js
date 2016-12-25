function toggle(anId)
{
	node = document.getElementById(anId);
	
		// Contenu visible, le cacher
		node.style.visibility = "hidden";
		node.style.height = "0";			// Optionnel libérer l'espace
		
}
