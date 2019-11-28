google.charts.load('current', {'packages':['corechart','geochart'],'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
});

      // Set a callback to run when the Google Visualization API is loaded.
      google.charts.setOnLoadCallback(function(){
        drawChart1();
        drawRegionMap();

      });

      function drawRegionMap(){
        var data = google.visualization.arrayToDataTable([
          ['Pais', 'Visitantes'],
          ['Spain', 87900000],
          ['France', 85800000],
          ['United States', 75900000],
          ['China', 60700000],
          ['Italy', 58200000],
          ['Mexico', 39300000],
          ['GB', 37700000],
          ['Turkey', 37600000],
          ['Germany', 37500000],
          ['Thailand', 35400000],
        ]);
        var options = {'title':'Paises más visitados 2017',
                       'width':800,
                       'height':400};
        let chart = new google.visualization.GeoChart(document.getElementById('regions_div'));
        chart.draw(data, options);

      }
      function drawChart1() {

        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Partido');
        data.addColumn('number', 'Diputados');
        data.addRows([
          ['PSOE', 123],
          ['PP', 66],
          ['Ciudadanos', 57],
          ['UP', 42],
          ['VOX', 24],
          ['ERC', 15],
          ['JxCat', 7],
          ['PNV', 6],
          ['Bildu', 4],
          ['CC', 2]
        ]);
        // Set chart options
        var options = {'title':'Resultados Elecciones 2019',
                       'width':800,
                       'height':400,
                       animation:{
                        duration: 2000,
                      },
                       colors: ['#ff0000', '#0487c4', '#2fc404', '#8826b9', '#f9d352','#f99352','#1b1e70','#174413','#7dfd00','#00fdcf'],
                      'is3D': true};

        // Instantiate and draw our chart, passing in some options.
        let chart = new google.visualization.ColumnChart(document.getElementById('chart1'))
        let chart2 = new google.visualization.PieChart(document.getElementById('chart2'));
        chart.draw(data, options);
        chart2.draw(data, options);
        setTimeout(function(){
          data.setValue(0, 1,20);
          chart.draw(data,options);
          chart2.draw(data,options);
        },5000);
      }
      
