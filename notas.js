	var parcial1,parcial2,final;

	var nombre;
    var promedio;
	var categoria; 
	nombre = prompt("Digite su nombre:");

	parcial1 = prompt("Digite Parcial 1: ");
	parcial2 = prompt("Digite Parcial 2: ");
	final    = prompt("Digite Parcial F: ");

	 promedio = (parseInt(parcial1)+parseInt(parcial2)+parseInt(final))/3;
	 
	 
	 if (promedio<60){nota = "F"}
	 if (promedio>=60 && promedio<=69 ){nota = "D"}
	 if (promedio>=70 && promedio<=79 ){nota = "C"}
	 if (promedio>=80 && promedio<=89 ){nota = "B"}
	 if (promedio>89){nota = "A"}
	 
	 
	 if (nota=="A"){categoria = "Excelente"}
	 if (nota=="B"){categoria = "Bueno"}
	 if (nota=="C"){categoria = "Regular"}
	 if (nota=="D"){categoria = "Deficiente"}
	 if (nota=="F"){categoria = "Repite"}
	 
	 
	document.write("---------------------------------");
	document.write("<br>");
	document.write("   Su nombre es : "+nombre);
	document.write("<br>");
	document.write("   Sus notas son: "+parcial1+","+ parcial2+", "+ final);
	document.write("<br>");
    document.write("   Promedio     : "+promedio);
	document.write("<br>");
	document.write("   En letra     : "+nota);
	document.write("<br>");
	document.write("   Categoria    : "+categoria);
	document.write("<br>");
	
    document.write("---------------------------------");
	