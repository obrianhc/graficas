<?php
	/*$anio = date('Y');
	echo $anio;
	echo date_parse('2015-03-01')['year'];
	$response = file_get_contents('https://www.mediamanagers.click/client/modules/api/public/locations/');
	$response = json_decode($response);
	$temas = $response->topics;
	$localizacion = $response->geo;
	foreach($localizacion as $depto){
		echo($depto->state.','.$depto->n.'<br>');
	}
	$arreglo = array();
	$arreglo[15] = 1;
	$arreglo[16] = 23;
	echo(json_encode($arreglo));
	echo('<br>');
	echo($arreglo[15]);
	<script>
	/*		var datos = new Object();
			var filters = new Object();
			var campaignList = new Array(1, 2, 3, 4);
			var interestList = new Array('Adult', 'Education', 'Business', 'Pets');
			var daterange = new Object();
			daterange['initial_date'] = '01/01/2017';
			daterange['ending_date'] = '30/01/2017';
			var locationList = new Array('GUATEMALA', 'CHIMALTENANGO', 'HUEHUETENANGO', 'QUETZALTENANGO', 'ALTA VERAPAZ');
			filters['locationlist'] = locationList;
			filters['interestlist'] = interestList;
			filters['daterange'] = daterange;
			filters['agerange'] = '18-23';
			datos['companyid'] = [1];
			datos['campaignlist'] = campaignList;
			datos['filters'] = filters;
			console.log(datos);
	</script>
	*/
?>

<?php
	echo('{
"status":"ok",
"profile": {
    "age": {
      "45-49": 0.09597624775009672,
      "0-17": 0.0011522869110299932,
      "35-39": 0.15270745369825223,
      "18-24": 0.10906353558632059,
      "25-29": 0.16978148602957255,
      "30-34": 0.15154675593385705,
      "60+": 0.06226554746244554,
      "50-54": 0.07036519925311623,
      "40-44": 0.1371557858260299,
      "55-59": 0.04998570154927919
    },
    "state": {
      "": 0.000016110712818488653,
      "BAJA VERAPAZ": 0.01070556866788571,
      "PETEN": 0.024858829878927992,
      "ESCUINTLA": 0.019928951756470466,
      "CHIMALTENANGO": 0.019445630371915806,
      "SOLOLA": 0.011422495388308456,
      "GUATEMALA": 0.5507124962743977,
      "SUCHITEPEQUEZ": 0.00878839384248556,
      "IZABAL": 0.016408761005630695,
      "SAN MARCOS": 0.053608396903521,
      "CHIQUIMULA": 0.013460500559847271,
      "JALAPA": 0.013130230947068253,
      "SANTA ROSA": 0.013452445203438025,
      "RETALHULEU": 0.008208408181019968,
      "ALTA VERAPAZ": 0.03185087924215207,
      "SACATEPEQUEZ": 0.0067664993837652345,
      "EL PROGRESO": 0.0064362297709862175,
      "QUICHE": 0.04499722090203881,
      "TOTONICAPAN": 0.01738345913114926,
      "ZACAPA": 0.008595065288663696,
      "JUTIAPA": 0.01963895892573767,
      "QUETZALTENANGO": 0.02807291708621648,
      "HUEHUETENANGO": 0.07211155057555521
    },
    "device": {
      "SMARTPHONE IOS": 0.03984198645598194,
      "LOW END": 0.04966139954853273,
      "FEATURE PHONE": 0.13569816188326347,
      "SMARTPHONE OTROS": 0.03608513382779749,
      "SMARTPHONE ANDROID": 0.7387133182844243
    },
    "nse": {
      "D": 0.3054388545331914,
      "E": 0.05100805304772507,
      "AB": 0.004217489171860652,
      "CC": 0.2781186260249149,
      "C+": 0.1109549078084496,
      "C-": 0.25026206941385837
    },
    "gender": {
      "F": 0.44185696487252596,
      "M": 0.558143035127474
    }
  }

}
');
?>
