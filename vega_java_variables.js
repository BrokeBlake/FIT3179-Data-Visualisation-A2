var vg_1 = "https://raw.githubusercontent.com/BrokeBlake/FIT3179-Data-Visualisation-A2/main/vega-lite/test.json";
var vg_2 = "https://raw.githubusercontent.com/BrokeBlake/FIT3179-Data-Visualisation-A2/main/vega-lite/chloropleth_suburbs.json";
var vg_3 = "https://raw.githubusercontent.com/BrokeBlake/FIT3179-Data-Visualisation-A2/main/vega-lite/density_area_chart.json";
var vg_4 = "https://raw.githubusercontent.com/BrokeBlake/FIT3179-Data-Visualisation-A2/main/vega-lite/suburb_change.json";

vegaEmbed(
    "#point_map", vg_1, { renderer: 'svg' }

).then(function(result){}).catch(console.error);


let mapView;

vegaEmbed("#chloropleth_map", vg_2, { renderer: 'svg' }

).then(function(result)
    {
        mapView = result.view;

        const slider = document.getElementById("year-slider");
        const label = document.getElementById("year-value");

        slider.addEventListener("input", function() {
            const val = +this.value;
            label.textContent = val;
            mapView.signal("selectedyear", val).run();
        });
    }).catch(console.error);

vegaEmbed(
    "#area_chart", vg_3, { renderer: 'svg' }

).then(function(result){}).catch(console.error);


vegaEmbed(
    "#scatter_plot", vg_4, { renderer: 'svg' }

).then(function(result){}).catch(console.error);
