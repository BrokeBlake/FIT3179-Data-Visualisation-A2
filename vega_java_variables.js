var vg_1 = "https://raw.githubusercontent.com/BrokeBlake/FIT3179-Data-Visualisation-A2/main/vega-lite/test.json";
vegaEmbed(
    "#point_map", vg_1

).then(function(result){}).catch(console.error);

var vg_2 = "https://raw.githubusercontent.com/BrokeBlake/FIT3179-Data-Visualisation-A2/main/vega-lite/chloropleth_suburbs.json";
vegaEmbed(
    "#chloropleth_map", vg_2

).then(function(result){}).catch(console.error);

var vg_3 = "https://raw.githubusercontent.com/BrokeBlake/FIT3179-Data-Visualisation-A2/main/vega-lite/density_area_chart.json";
vegaEmbed(
    "#area_chart", vg_3

).then(function(result){}).catch(console.error);

var vg_4 = "https://raw.githubusercontent.com/BrokeBlake/FIT3179-Data-Visualisation-A2/main/vega-lite/city_densities.json";
vegaEmbed(
    "#scatter_plot", vg_4

).then(function(result){}).catch(console.error);
