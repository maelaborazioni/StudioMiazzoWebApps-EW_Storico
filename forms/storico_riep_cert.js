/**
 * @type {String}
 * 
 * @properties={typeid:35,uuid:"600FF374-44D1-4207-95E9-5B9152582CC6"}
 */
var _codCertificato = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"56CEC4FA-86F1-49C7-AAA6-F8A24BFB6203",variableType:4}
 */
var _idEventoClasse = -1;

/**
 * @param {Boolean} _tipoTab
 * 
 * @properties={typeid:24,uuid:"05451D8F-3A9D-4A4D-BC56-65644455E1A2"}
 */
function settaTabDaVisualizzare(_tipoTab) {

	if (_tipoTab) {

		forms['storico_riep_cert'].elements['tab_storico_cert_riep'].visible = true
		forms['storico_riep_cert'].elements['tab_storico_cert_cong'].visible = false
	
	} else {
		
		forms['storico_riep_cert'].elements['tab_storico_cert_riep'].visible = false
		forms['storico_riep_cert'].elements['tab_storico_cert_cong'].visible = true
	
	}
}
