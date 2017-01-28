var url = "http://localhost/graficas/pruebas.php";
var datos = { };
function reporte(){
  $.post(url, datos,
  function(data){
    var reporte = JSON.parse(data);
    console.log(reporte);
    if(reporte.status == "ok"){
      var perfil = reporte.profile;
      var edades = perfil.age;
      var dispositivos = perfil.device;
      var genero = perfil.gender;
      var nse = perfil.nse;
      var localizacion = perfil.state;
      // Sacando la información de cada atributo
      var rangosEdad = new Array();
      for(clave in edades){
        rangosEdad.push({"name": clave, "y": edades[clave]});
      }
      var tiposDispositivos = new Array();
      for(clave in dispositivos){
        tiposDispositivos.push({"name": clave, "y": dispositivos[clave]});
      }
      var generos = new Array();
      for(clave in genero){
        generos.push({"name": clave, "y": genero[clave]});
      }
      var nses = new Array();
      for(clave in nse){
        nses.push({"name": clave, "y": nse[clave]})
      }
      var deptos = new Array();
      for(clave in localizacion){
        deptos.push({"name": clave, "y": localizacion[clave]})
      }
      dibujarEdades(rangosEdad);
      dibujarDispositivos(tiposDispositivos);
      dibujarGeneros(generos);
      dibujarNSE(nses);
      dibujarLocalizacion(deptos);
    } else {
      console.log('Imposible obtener la data de respuesta');
    }
  });
}

function dibujarLocalizacion(datos){
  Highcharts.chart('graficaLocalizacion', {
      chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie'
      },
      title: {
          text: 'Localización'
      },
      tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
          pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: {
                  enabled: false
              },
              showInLegend: true
          }
      },
      series: [{
          name: 'Departamento',
          colorByPoint: true,
          data: datos
      }]
  });
}

function dibujarNSE(datos){
  Highcharts.chart('graficaNSE', {
      chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie'
      },
      title: {
          text: 'Nivel Socio-econónico'
      },
      tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
          pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: {
                  enabled: false
              },
              showInLegend: true
          }
      },
      series: [{
          name: 'NSE',
          colorByPoint: true,
          data: datos
      }]
  });
}

function dibujarGeneros(datos){
  Highcharts.chart('graficaGenero', {
      chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie'
      },
      title: {
          text: 'Género'
      },
      tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
          pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: {
                  enabled: false
              },
              showInLegend: true
          }
      },
      series: [{
          name: 'Género',
          colorByPoint: true,
          data: datos
      }]
  });
}

function dibujarDispositivos(datos){
  Highcharts.chart('graficaDispositivos', {
      chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie'
      },
      title: {
          text: 'Dispositivos Utilizados'
      },
      tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
          pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: {
                  enabled: false
              },
              showInLegend: true
          }
      },
      series: [{
          name: 'Dispositivo',
          colorByPoint: true,
          data: datos
      }]
  });
}

function dibujarEdades(datos){
  Highcharts.chart('graficaEdades', {
      chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie'
      },
      title: {
          text: 'Rangos de Edades'
      },
      tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
          pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: {
                  enabled: false
              },
              showInLegend: true
          }
      },
      series: [{
          name: 'Edades',
          colorByPoint: true,
          data: datos
      }]
  });
}

$(function () {
  reporte();
});
