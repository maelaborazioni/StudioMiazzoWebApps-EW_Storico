/**
 * @type {String}
 * 
 * @properties={typeid:35,uuid:"F985A394-4908-4497-826B-B34E9A12A653"}
 */
var _descCert = null;

/**
 * @type {Number}
 * 
 * @properties={typeid:35,uuid:"EAB9D3AE-20C1-44FC-9ABD-EA1AD2D87D75",variableType:8}
 */
var _idEventoClasse = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"3931E615-BB9E-48BE-997B-114570FACD51"}
 */
var _tipoCert = null;

/**
 * 
 * @param {JSFoundset} _fs
 *
 * @properties={typeid:24,uuid:"681CF0E6-02FF-4A8F-A96B-99685F3F9602"}
 */
function FiltraCertificati(_fs){
	
	_fs.addFoundSetFilterParam('ideventoclasse','=',_idEventoClasse)
	_fs.addFoundSetFilterParam('ordinecertificato','IS NOT NULL',null)
	
	_fs.loadAllRecords()
	
	_fs.sort('ordinecertificato asc',false)
	
	return _fs

}

/**
 * @AllowToRunInFind
 * 
 * @param {JSRecord} _rec
 *
 * @properties={typeid:24,uuid:"6C862018-3F1B-4F93-9705-2D93820A046C"}
 */
function AggiornaCertificati(_rec){
	
	if(_tipoCert != null){
		_descCert = _rec['descrizione'];
		_tipoCert = _rec['codicecertificato'];
	}
	
	forms.storico_main.costruisciDettaglioCertificato(_tipoCert,_rec['ideventoclasse']);
	
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Boolean} abilita
 *
 * @properties={typeid:24,uuid:"E1AF7EF2-88EB-474B-AD6B-B474E9A54631"}
 */
function abilitaPulsanti(abilita){
	
	elements.btn_cert.enabled = abilita
	
}


/**
 * Handle changed data.
 *
 * @param oldValue old value
 * @param newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @private
 *
 * @properties={typeid:24,uuid:"10F75D32-0C62-40D1-B954-AF607117BDC7"}
 */
function onDataChangeCertificato(oldValue, newValue, event) {
	
	_descCert = ''
	var _foundset = databaseManager.getFoundSet(globals.nav.program['LEAF_Lkp_Certificati'].server_name,
												globals.nav.program['LEAF_Lkp_Certificati'].table_name)
												
	_foundset.addFoundSetFilterParam('codicecertificato', '=', newValue)
	_foundset.addFoundSetFilterParam('ideventoclasse','=',_idEventoClasse)
	_foundset.loadAllRecords()
	
	if (_foundset.getSize() == 1) {
		
		AggiornaCertificati(_foundset.getSelectedRecord());
		
	} else {
		
		globals.svy_nav_showLookupWindow(event, '_tipoCert', 'LEAF_Lkp_Certificati', 'AggiornaCertificati', '', null, null, 'codicecertificato', true)
	
	}
	
	return true
}

/**
 * @param {String} tipoCert
 * 
 * @properties={typeid:24,uuid:"FC9FAC52-FB5A-471E-B6C1-C328E653E96C"}
 */
function AggiornaDescrCertificato(tipoCert){
	
	_tipoCert = tipoCert
	_descCert = ''
	var _foundset = databaseManager.getFoundSet(globals.nav.program['LEAF_Lkp_Certificati'].server_name,
												globals.nav.program['LEAF_Lkp_Certificati'].table_name)
												
	_foundset.removeFoundSetFilterParam('ftr_tipoCertificato')											
	_foundset.removeFoundSetFilterParam('ftr_classeCertificato')
	_foundset.addFoundSetFilterParam('codicecertificato', '=', _tipoCert,'ftr_tipoCertificato')
	_foundset.addFoundSetFilterParam('ideventoclasse', '=', _idEventoClasse,'ftr_classeCertificato')
	_foundset.loadAllRecords()
	
	if (_foundset.getSize() == 1) 
		_descCert = _foundset['descrizione']
		
}