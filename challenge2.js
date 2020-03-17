function toonTijd() {
	var date = new Date();
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
}

function toonDatum() {
	var date = new Date();
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
	var date = new Date();
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
}

function wisselDagIcoon() {
	var date = new Date();
	var uren = date.getHours();
	var zon = document.getElementById('zon');
	var maan = document.getElementById('maan');
	switch(uren) {
		case 6:
		zon.style.display = "inline-block";
		maan.style.display = "none";
		break;
		case 7:
		zon.style.display = "inline-block";
		maan.style.display = "none";
		break;
		case 8:
		zon.style.display = "inline-block";
		maan.style.display = "none";
		break;
		case 9:
		zon.style.display = "inline-block";
		maan.style.display = "none";
		break;
		case 10:
		zon.style.display = "inline-block";
		maan.style.display = "none";
		break;
		case 11:
		zon.style.display = "inline-block";
		maan.style.display = "none";
		break;
		case 12:
		zon.style.display = "inline-block";
		maan.style.display = "none";
		break;
		case 13:
		zon.style.display = "inline-block";
		maan.style.display = "none";
		break;
		case 14:
		zon.style.display = "inline-block";
		maan.style.display = "none";
		break;
		case 15:
		zon.style.display = "inline-block";
		maan.style.display = "none";
		break;
		case 11:
		zon.style.display = "inline-block";
		maan.style.display = "none";
		break;
		case 16:
		zon.style.display = "inline-block";
		maan.style.display = "none";
		break;
		case 17:
		zon.style.display = "inline-block";
		maan.style.display = "none";
		break;
		default:
		zon.style.display = "none";
		maan.style.display = "inline-block";
	}
}

function herlaadPagina(){
	var date = new Date();
	var minuten = date.getMinutes();
	var uren = date.getHours();
	if ((minuten==0) && (uren==0)){
		location.reload();
	}
}

// alle functies activeren
setInterval(toonTijd, 500);
toonDatum();
toonSeizoen();
toonWeer();
setInterval(wisselDagIcoon, 500);
// om de minuut checken
setInterval(herlaadPagina, 60000);