    var yearnac, edad;
    var clasifi
	
	yearnac = prompt("Digite año de nacimiento:");

	edad = 2017-parseInt(yearnac);

	if (edad>=0 && edad<=3){
	 clasifi="Infante";
	 }
	 
	if (edad>=4 && edad<=12){
	 clasifi="Nino";
	 }
	 
	if (edad>=13 && edad<=19){
	 clasifi="Adolecente";
	 }
	if (edad>=20 && edad<=30){
	 clasifi="Joven";
	 }
	if (edad>=31 && edad<=50){
	 clasifi="Adulto";
	 }
	 
	if (edad > 50){
	 clasifi="Senior";
	 }
	 
	 
	document.write("---------------------------------");
	document.write("<br>");
	document.write("   Edad         : "+edad);
	document.write("<br>");
	document.write("   Clasificacion: "+clasifi);
	document.write("<br>");
	document.write("---------------------------------");
	