//hoe om 00:00 herladen?
//hoe klok laten lopen?
//animatie in box hoe? invloed op de rest stijl?
//wisslen maan zon hoe? tot 60 uur en na 6uur anders

var date = new Date();

function toonTijd() {
	var uren = date.getHours();
	// als het uur uit 1 getal bestaat voeg er dan een '0' aan toe
	if (uren <=9){
		uren = '0'+uren;
	}
	var minuten = date.getMinutes();
	if (minuten <=9){
		minuten = '0'+minuten;
	}
	var seconden = date.getSeconds();
	if (seconden <=9){
		seconden = '0'+seconden;
	}
	// in de HTML
	document.getElementById('tijd').innerHTML=uren+":"+minuten+":"+seconden;
	//setTimeout(toonTijd,1000);
}

function toonDatum() {
	var dag = date.getDate();
	var maand = date.getMonth();
	// de naam van de maand in plaats van een cijfer
	switch(maand) {
		case 0:
		maand = "Januari";
		break;
		case 1:
		maand = "Februari";
		break;
		case 2:
		maand = "Maart";
		break;
		case 3:
		maand = "April";
		break;
		case 4:
		maand = "Mei";
		break;
		case 5:
		maand = "Juni";
		break;
		case 6:
		maand = "Juli";
		break;
		case 7:
		maand = "Augustus";
		break;
		case 8:
		maand = "September";
		break;
		case 9:
		maand = "Oktober";
		break;
		case 10:
		maand = "November";
		break;
		case 11:
		maand = "December";
		break;
	}
	var jaar = date.getFullYear();
	// in de HTML
	document.getElementById('datum').innerHTML=dag+' '+maand+' '+jaar;
}

function toonSeizoen() {
	var seizoen = date.getMonth();
		if (seizoen == 2,3,4)
			seizoen = "Lente";
		else if (maand == 5,6,7)
			maand = "Zomer";
		else if (maand == 8,9,10)
			maand = "Herfst";
		else if (maand == 11,0,1)
			maand = "Winter";
	// in de HTML
	document.getElementById('seizoen').innerHTML=seizoen;
}

function toonWeer() {
	var graden=9;
	var weerbericht='Bewolkt';
	// in de HTML
	document.getElementById('weer').innerHTML=graden+'°C '+weerbericht;

	//setTimeout("toonWeerbericht()",bij 000 uurs);
}

/*function wisselDagIcoon() {
	var zon = document.getElementById('zon');
	if (zon.style.display === "none") {
	zon.style.display = "block";
	} else {
	zon.style.display = "none";
	}
	var maan = document.getElementById('maan');
	if (maan.style.display === "none") {
	maan.style.display = "block";
	} else {
	maan.style.display = "none";
	}
	//als tijd is na 6uur - maan zichtbaar tot 6uur- maan weg
}*/

// alle functies activeren
toonTijd();
toonDatum();
toonSeizoen();
toonWeer();
//wisselDagIcoon()