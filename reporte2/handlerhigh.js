var url = "http://localhost/graficas/datareporte2.php";
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
      var porFechas = new Object();
      var lCampanias = new Object();
      for(x in campanias){
        lCampanias[campanias[x].name] = true;
      }
      // Ya obtuvimos la lista completa de
      var lista = new Array();
      for(x in lCampanias){
        lista.push(x);
      }
      // Ya obtuvimos las campañas por fecha
      for(x in campanias){
        var arreglo = porFechas[campanias[x].date];
        if(Array.isArray(arreglo)){
          arreglo.push([ campanias[x].name, campanias[x].stats ]);
        } else {
          arreglo = new Array();
          arreglo.push([ campanias[x].name, campanias[x].stats ]);
        }
        porFechas[campanias[x].date] = arreglo;
      }
      // Ahora vamos a rellenar las campañas que hagan falta por fecha y rellenar con cero las estadísticas
      for(x in lista){
        for(y in porFechas){
          var atributo = porFechas[y];
          var flag = false;
          for(z in atributo){
            var arreglo = atributo[z];
            if(lista[x] == arreglo[0]){
              flag = true;
              break;
            }
          }
          if(flag == false){
            atributo.push([lista[x], {"clicks": 0, "print": 0}]);
            porFechas[y] = atributo;
          }
        }
      }
      // Ahora organizamos la data para graficar
      var filas = new Array();
      var encabezado = new Array();
      encabezado.push(null);
      for(x in porFechas){
        encabezado.push(x);
      }
      filas.push(encabezado);
      var auxiliar = new Object();
      for(x in porFechas){
        var atributo = porFechas[x];
        for(y in atributo){
          var arreglo = atributo[y];
          if(Array.isArray(auxiliar[arreglo[0]])){
            auxiliar[arreglo[0]].push(arreglo[1].clicks)
          } else {
            auxiliar[arreglo[0]] = new Array();
            auxiliar[arreglo[0]].push(arreglo[1].clicks);
          }
        }
      }
      for(x in auxiliar){
        var fila = new Array();
        var arreglo = auxiliar[x];
        fila.push(x)
        for(y in arreglo){
          fila.push(arreglo[y]);
        }
        filas.push(fila);
      }
      filas = filas.sort();
      dibujarCampanias(filas);
    } else {
      console.log('Imposible obtener de vuelta la información del reporte.');
    }
  });
}

function dibujarCampanias(columnas){
  Highcharts.chart('graficaCampanias', {
      chart: {
        type: 'line'
      },
      title: {
         text: 'Clics por Campañas',
         x: -20 //center
      },
      data:{
       columns: columnas
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

$(function(){
  reporte();
});
