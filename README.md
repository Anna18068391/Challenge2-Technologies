# Challenge2-Technologies
_Website van Anna  
CMD jaar 2  
IxD & Technology 2  
2030_

> Binnen de nieuwe Mars Domeszijn er klachten over het ontbreken van een centrale klok op hun devices en andere schermen. 

Dit is een website met een geanimeerde klok. Er is visueel verschil te zien tussen dag en nacht, zodat de 104 mensen op Mars weten wanneers ze moeten opstaan en gaan slapen. De wesite is ook responsive dus de mensen kunnen de klok makkelijk op elk scherm bekijken.

## Schetsen
Voordat ik de website ben gaan coderen heb ik eerst gebrainstormd en schetsen gemaakt. Ik heb ook inspiratie op gedaan door te kijken wat voor sooten klokken er zijn. Mijn notities zijn hier te vinden: [schetsen](schetsen.png).

## Tijd
Door het gebruik van het JavaScript datumobject is de huidige aardse tijd te zien op de klok. Door gebruik van het datumobject word ook de datum en het seizoen getoond. Om duidelijk te maken wanneer het dag of nacht is veranderd de stijl van de pagina met de functie `wisselDagStijl()`.

#### Dag
Van 6 tot 18 uur is het dag. De lucht is licht blauw (de achtergrond). De tekst is zwart op een lichte achtergond. Op een mobiel of tablet is een geanimeerd zonnetje te zien.

#### Nacht
Van 18 tot 6 uur is het nacht. De lucht is donker en er zijn sterren te zien (de achtergrond). De tekst is wit op een donkere achtergond. Op een mobiel of tablet is een grote geanimeerde maan te zien.

## Responsive
De website is responsive gemaakt met onder andere drie CSS media queries en CSS grid. Er is mobile-first gewerkt.

Op kleine schermen staat de inhoud van de site onder elkaar. Als de site groter word, worden de letters groter en komt de afbeeling van een zon of maan naast de tijd te staan. Als het scherm nog groter word komt de inhoud van de site in twee regels naast elkaar te staan. Het plaatje van een zon of maan verdwijnt en inplaats daarvan verschijnen er twee grote plaatjes van de aarde en Mars en hun manen. Bij de grootste schermen bestaat de site uit drie rijen met ruimte aan de linker en rechterkant, zo kan je alle informatie in een oogopslag blijven zien.

## Animatie
Om de mensen op Mars op te vrolijken is er gebruik gemaakt van CSS 3 animaties. Ik heb animatie op verschillende manieren toegepast. Alle geanimeerde afbeedingen heb ik zelf getekend op mijn laptop met een digitale pen.

#### Zon en maan
De zon en maan zijn te te zien op kleinere schemen. De zon overdag en de maan 's nachts. De zon draait rond en de maan zweeft op en neer.

#### De aarde en Mars
Op grotere schemen zijn de planeten de aarde en Mars te zien met hun manen. De planeten draaien rond (mars iets langzamer dan de aarde) en hun manen zweven op en neer.

#### Het ruimteschip
Het ruimteschip is een absoluut gepositoneerde afbeeding van SpaceX's Starship, waarin de mensen naar Mars zijn gereisd. Het schip vliegt heen en weer over de website, ook buiten de website. Deze animatie heb ik gemaakt door de `left` en `bottom` waardes in keyframes te veranderen en het schip te draaien zodat het schip de goede kant op wijst met `transform: rotate;`.