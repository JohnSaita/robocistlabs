var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.osm.org/{z}/{x}/{y}.png'
            })
        });
var format_VirtualDrive_1 = new ol.format.GeoJSON();
var features_VirtualDrive_1 = format_VirtualDrive_1.readFeatures(json_VirtualDrive_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VirtualDrive_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VirtualDrive_1.addFeatures(features_VirtualDrive_1);
var lyr_VirtualDrive_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VirtualDrive_1, 
                style: style_VirtualDrive_1,
                interactive: true,
                title: '<img src="styles/legend/VirtualDrive_1.png" /> Virtual Drive'
            });
var format_RaleighNCPavementAssessmentMonthly_2 = new ol.format.GeoJSON();
var features_RaleighNCPavementAssessmentMonthly_2 = format_RaleighNCPavementAssessmentMonthly_2.readFeatures(json_RaleighNCPavementAssessmentMonthly_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RaleighNCPavementAssessmentMonthly_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RaleighNCPavementAssessmentMonthly_2.addFeatures(features_RaleighNCPavementAssessmentMonthly_2);
var lyr_RaleighNCPavementAssessmentMonthly_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RaleighNCPavementAssessmentMonthly_2, 
                style: style_RaleighNCPavementAssessmentMonthly_2,
                interactive: true,
    title: 'Raleigh,NC Pavement Assessment Monthly<br />\
    <img src="styles/legend/RaleighNCPavementAssessmentMonthly_2_0.png" /> Good<br />\
    <img src="styles/legend/RaleighNCPavementAssessmentMonthly_2_1.png" /> Light<br />\
    <img src="styles/legend/RaleighNCPavementAssessmentMonthly_2_2.png" /> Moderate<br />\
    <img src="styles/legend/RaleighNCPavementAssessmentMonthly_2_3.png" /> Servere<br />'
        });
var format_RaleighNCPavementAssessmentQuarterly_3 = new ol.format.GeoJSON();
var features_RaleighNCPavementAssessmentQuarterly_3 = format_RaleighNCPavementAssessmentQuarterly_3.readFeatures(json_RaleighNCPavementAssessmentQuarterly_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RaleighNCPavementAssessmentQuarterly_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RaleighNCPavementAssessmentQuarterly_3.addFeatures(features_RaleighNCPavementAssessmentQuarterly_3);
var lyr_RaleighNCPavementAssessmentQuarterly_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RaleighNCPavementAssessmentQuarterly_3, 
                style: style_RaleighNCPavementAssessmentQuarterly_3,
                interactive: true,
    title: 'Raleigh,NC Pavement Assessment Quarterly<br />\
    <img src="styles/legend/RaleighNCPavementAssessmentQuarterly_3_0.png" /> Good<br />\
    <img src="styles/legend/RaleighNCPavementAssessmentQuarterly_3_1.png" /> Light<br />\
    <img src="styles/legend/RaleighNCPavementAssessmentQuarterly_3_2.png" /> Moderate<br />\
    <img src="styles/legend/RaleighNCPavementAssessmentQuarterly_3_3.png" /> Servere<br />'
        });
var format_raleigh_nc_region_4 = new ol.format.GeoJSON();
var features_raleigh_nc_region_4 = format_raleigh_nc_region_4.readFeatures(json_raleigh_nc_region_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_raleigh_nc_region_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_raleigh_nc_region_4.addFeatures(features_raleigh_nc_region_4);
var lyr_raleigh_nc_region_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_raleigh_nc_region_4, 
                style: style_raleigh_nc_region_4,
                interactive: false,
                title: '<img src="styles/legend/raleigh_nc_region_4.png" /> raleigh_nc_region'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_VirtualDrive_1.setVisible(false);lyr_RaleighNCPavementAssessmentMonthly_2.setVisible(false);lyr_RaleighNCPavementAssessmentQuarterly_3.setVisible(true);lyr_raleigh_nc_region_4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_VirtualDrive_1,lyr_RaleighNCPavementAssessmentMonthly_2,lyr_RaleighNCPavementAssessmentQuarterly_3,lyr_raleigh_nc_region_4];
lyr_VirtualDrive_1.set('fieldAliases', {'phoneid': 'phoneid', 'logid': 'logid', 'timestamp': 'timestamp', 'lat': 'lat', 'lon': 'lon', 'roadclusterid': 'roadclusterid', 'imagelink': 'Image', 'imagedate': 'imagedate', 'recordtimestamp': 'recordtimestamp', 'bump': 'bump', 'bumplimit': 'bumplimit', 'roughness': 'roughness', 'roughnesslimit': 'roughnesslimit', 'diplift': 'diplift', 'dipliftlimit': 'dipliftlimit', 'alarmcode': 'alarmcode', 'segmentid': 'segmentid', 'hwytype': 'hwytype', 'seglat': 'seglat', 'seglon': 'seglon', });
lyr_RaleighNCPavementAssessmentMonthly_2.set('fieldAliases', {'assessmentsegmentid': 'assessmentsegmentid', 'segmentid': 'segmentid', 'points': 'points', 'streetname': 'Street Name', 'wayid': 'Way ID', 'segmentlength': 'segmentlength', 'segmentpasses': 'segmentpasses', 'overalscore': 'overalscore', 'overallrating': 'Pavement Rating', 'pavementdistressscore': 'pavementdistressscore', 'pavementdistressrating': 'pavementdistressrating', 'ridequalityscore': 'ridequalityscore', 'ridequaliyrating': 'ridequaliyrating', 'longitudinalcracks': 'longitudinalcracks', 'lateralcracks': 'lateralcracks', 'fatiguecracks': 'fatiguecracks', 'potholes': 'potholes', 'repairs': 'repairs', 'edgedropoff': 'edgedropoff', 'sealedcracks': 'sealedcracks', 'bumps': 'bumps', 'dipslifts': 'dipslifts', 'roughness': 'roughness', 'troublespots': 'troublespots', 'concetration': 'concetration', 'lanelines': 'lanelines', 'popupimages': 'popupimages', 'assessmentdatestampstart': 'assessmentdatestampstart', 'assessmentdatestampend': 'assessmentdatestampend', });
lyr_RaleighNCPavementAssessmentQuarterly_3.set('fieldAliases', {'assessmentsegmentid': 'assessmentsegmentid', 'segmentid': 'segmentid', 'points': 'points', 'streetname': 'Street Name', 'wayid': 'Way ID', 'segmentlength': 'segmentlength', 'segmentpasses': 'segmentpasses', 'overalscore': 'overalscore', 'overallrating': 'Pavement Rating', 'pavementdistressscore': 'pavementdistressscore', 'pavementdistressrating': 'pavementdistressrating', 'ridequalityscore': 'ridequalityscore', 'ridequaliyrating': 'ridequaliyrating', 'longitudinalcracks': 'longitudinalcracks', 'lateralcracks': 'lateralcracks', 'fatiguecracks': 'fatiguecracks', 'potholes': 'potholes', 'repairs': 'repairs', 'edgedropoff': 'edgedropoff', 'sealedcracks': 'sealedcracks', 'bumps': 'bumps', 'dipslifts': 'dipslifts', 'roughness': 'roughness', 'troublespots': 'troublespots', 'concetration': 'concetration', 'lanelines': 'lanelines', 'popupimages': 'popupimages', 'assessmentdatestampstart': 'assessmentdatestampstart', 'assessmentdatestampend': 'assessmentdatestampend', });
lyr_raleigh_nc_region_4.set('fieldAliases', {'id': 'id', 'createddat': 'createddat', 'createdbyi': 'createdbyi', 'isactive': 'isactive', 'name': 'name', 'isdeleted': 'isdeleted', 'parentid': 'parentid', 'level': 'level', 'startdate': 'startdate', 'enddate': 'enddate', 'clientid': 'clientid', 'allowafter': 'allowafter', 'releasedat': 'releasedat', });
lyr_VirtualDrive_1.set('fieldImages', {'phoneid': 'Hidden', 'logid': 'Hidden', 'timestamp': 'Hidden', 'lat': 'Hidden', 'lon': 'Hidden', 'roadclusterid': 'Hidden', 'imagelink': 'ExternalResource', 'imagedate': 'Hidden', 'recordtimestamp': 'Hidden', 'bump': 'Hidden', 'bumplimit': 'Hidden', 'roughness': 'Hidden', 'roughnesslimit': 'Hidden', 'diplift': 'Hidden', 'dipliftlimit': 'Hidden', 'alarmcode': 'Hidden', 'segmentid': 'Hidden', 'hwytype': 'Hidden', 'seglat': 'Hidden', 'seglon': 'Hidden', });
lyr_RaleighNCPavementAssessmentMonthly_2.set('fieldImages', {'assessmentsegmentid': 'Hidden', 'segmentid': 'Hidden', 'points': 'Hidden', 'streetname': 'TextEdit', 'wayid': 'Range', 'segmentlength': 'Hidden', 'segmentpasses': 'Hidden', 'overalscore': 'Hidden', 'overallrating': 'TextEdit', 'pavementdistressscore': 'Hidden', 'pavementdistressrating': 'Hidden', 'ridequalityscore': 'Hidden', 'ridequaliyrating': 'Hidden', 'longitudinalcracks': 'Hidden', 'lateralcracks': 'Hidden', 'fatiguecracks': 'Hidden', 'potholes': 'Hidden', 'repairs': 'Hidden', 'edgedropoff': 'Hidden', 'sealedcracks': 'Hidden', 'bumps': 'Hidden', 'dipslifts': 'Hidden', 'roughness': 'Hidden', 'troublespots': 'Hidden', 'concetration': 'Hidden', 'lanelines': 'Hidden', 'popupimages': 'Hidden', 'assessmentdatestampstart': 'Hidden', 'assessmentdatestampend': 'Hidden', });
lyr_RaleighNCPavementAssessmentQuarterly_3.set('fieldImages', {'assessmentsegmentid': 'Hidden', 'segmentid': 'Hidden', 'points': 'Hidden', 'streetname': 'TextEdit', 'wayid': 'Range', 'segmentlength': 'Hidden', 'segmentpasses': 'Hidden', 'overalscore': 'Hidden', 'overallrating': 'TextEdit', 'pavementdistressscore': 'Hidden', 'pavementdistressrating': 'Hidden', 'ridequalityscore': 'Hidden', 'ridequaliyrating': 'Hidden', 'longitudinalcracks': 'Hidden', 'lateralcracks': 'Hidden', 'fatiguecracks': 'Hidden', 'potholes': 'Hidden', 'repairs': 'Hidden', 'edgedropoff': 'Hidden', 'sealedcracks': 'Hidden', 'bumps': 'Hidden', 'dipslifts': 'Hidden', 'roughness': 'Hidden', 'troublespots': 'Hidden', 'concetration': 'Hidden', 'lanelines': 'Hidden', 'popupimages': 'Hidden', 'assessmentdatestampstart': 'Hidden', 'assessmentdatestampend': 'Hidden', });
lyr_raleigh_nc_region_4.set('fieldImages', {'id': 'TextEdit', 'createddat': 'TextEdit', 'createdbyi': 'TextEdit', 'isactive': 'Range', 'name': 'TextEdit', 'isdeleted': 'Range', 'parentid': 'TextEdit', 'level': 'TextEdit', 'startdate': 'TextEdit', 'enddate': 'TextEdit', 'clientid': 'TextEdit', 'allowafter': 'TextEdit', 'releasedat': 'TextEdit', });
lyr_VirtualDrive_1.set('fieldLabels', {'imagelink': 'inline label', });
lyr_RaleighNCPavementAssessmentMonthly_2.set('fieldLabels', {'streetname': 'inline label', 'wayid': 'inline label', 'overallrating': 'inline label', });
lyr_RaleighNCPavementAssessmentQuarterly_3.set('fieldLabels', {'streetname': 'inline label', 'wayid': 'inline label', 'overallrating': 'inline label', });
lyr_raleigh_nc_region_4.set('fieldLabels', {'id': 'no label', 'createddat': 'no label', 'createdbyi': 'no label', 'isactive': 'no label', 'name': 'no label', 'isdeleted': 'no label', 'parentid': 'no label', 'level': 'no label', 'startdate': 'no label', 'enddate': 'no label', 'clientid': 'no label', 'allowafter': 'no label', 'releasedat': 'no label', });
lyr_raleigh_nc_region_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});