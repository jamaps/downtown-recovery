var seasons = '{"Season_1":"Spring: Mar 2020 - May 2020","Season_2":"Summer: June 2020 - Aug 2020","Season_3":"Fall: Sept 2020 - Nov 2020","Season_4":"Winter: Dec 2020 - Feb 2021","Season_5":"Spring: Mar 2021 - May 2021","Season_6":"Summer: June 2021 - Aug 2021","Season_7":"Fall: Sept 2021 - Nov 2021","Season_8":"Winter: Dec 2021 - Feb 2022","Season_9":"Spring: Mar 2022 - May 2022","Season_10":"Summer: June 2022 - Aug 2022","Season_11":"Fall: Sept 2022 - Nov 2022","Season_12":"Winter: Dec 2022 - Feb 2023"}';

var data = JSON.parse(seasons);
var result='';

for (var property in data) {
    if (data.hasOwnProperty(property) && (property != "Season_12")) {
	result+='<option value="'+property+'">'+data[property]+'</option>';
    } else{

        result+='<option selected="selected" value="'+property+'">'+data[property]+'</option>';
    }
}

document.getElementById('select_season').innerHTML=result;
//document.getElementById('select_season').innerHTML=result;


var metrics = '{"downtown":"Downtown","city":"City","relative":"Relative"}'

var metrics_data = JSON.parse(metrics);
var metrics_result='';

for (var metrics_property in metrics_data) {
    if (metrics_data.hasOwnProperty(metrics_property)) {
        metrics_result+='<option value="'+metrics_property+'">'+metrics_data[metrics_property]+'</option>';
    }
}

document.getElementById('select_metric').innerHTML=metrics_result;
//document.getElementById('select_explanatory_metric').innerHTML=metrics_result;
//document.getElementById('select_pattern_metric').innerHTML=metrics_result;