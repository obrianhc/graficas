var url = "http://localhost/datareporte2.php";
var datos = { };

function reporte(){
  $.post(url, datos,
  function(data){
    var reporte = JSON.parse(data);
    if(reporte.Status == "ok"){
      var campanias = reporte.campaigns;
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

      //Sacando datos de las campanias
      //Fechas
      var prints = new Array();
      var fechas = new Array();
      var fechas2 = new Array();
      for(var x in campanias){
        console.log(campanias[x]);
        fechas.push(campanias[x].date);
        fechas2.push([campanias[x].name, campanias[x].date]);
      }
      // Datos a ser enviados de los clicks
      for(var x in campanias){
        var flag = false;
        var fecha = campanias[x].date;
        var stats = campanias[x].stats;
        for(var y in fechas){
          if(campanias[x] == fechas[y]){
            flag = true;
            break;
          }
        }
        if(flag == true){

        } else {

        }
      }
      var clics = new Array();
      dibujarCampanias(fechas, clics);
    } else {
      console.log('Imposible obtener de vuelta la información del reporte.');
    }
  });
}

function dibujarCampanias(fechas, datos){
  Highcharts.chart('graficaCampanias', {
       title: {
           text: 'Clics por Campañas',
           x: -20 //center
       },
       xAxis: {
           categories: fechas
       },
       yAxis: {
           title: {
               text: 'Clics por campaña'
           },
           plotLines: [{
               value: 0,
               width: 1,
               color: '#808080'
           }]
       },
       tooltip: {
           valueSuffix: 'Clics'
       },
       legend: {
           layout: 'vertical',
           align: 'right',
           verticalAlign: 'middle',
           borderWidth: 0
       },
       series: datos
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

$(function(){
  reporte();
});
