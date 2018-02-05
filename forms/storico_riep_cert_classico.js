/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"7C8E1358-2E26-4DA9-9282-B698D89BEDDF",variableType:4}
 */
var dx = 5;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"F7FB843F-7D6D-4E83-B871-377F71EBBE71",variableType:4}
 */
var dy = 30;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"05FF4477-4A81-4E9E-A51C-DCD2058F72DE",variableType:4}
 */
var fldHeight = 20;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"F18E3FED-AE37-47C6-8B9E-9E69B9774B28",variableType:4}
 */
var fldLength = 85;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"91F5AB94-92EB-4C33-A666-98997EBFC380",variableType:4}
 */
var lblHeight = 17;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"147C3B0E-065E-4CFC-BC1F-17EFEE8EDDDE",variableType:4}
 */
var lblLength = 155;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"062B27D7-D1A7-4C56-A455-D9C87AF51780",variableType:4}
 */
var xLLeft = 5;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"FF0C1EFD-A6C9-4239-81C9-A84AD70AC799",variableType:4}
 */
var xLRight = 255;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"E63BCCD4-C0CE-4608-82D8-A6194840ADDA",variableType:4}
 */
var y = 5;

/**
 * @properties={typeid:35,uuid:"0F2CE3E8-AEA0-4692-903D-3CC5A3925422",variableType:-4}
 */
var _dataRiepilogo = null


/**
 * Handle record selected.
 *
 * @param {JSEvent} event the event that triggered the action
 * @param {String} _form
 *
 * @private
 *
 * @properties={typeid:24,uuid:"A3283210-5066-416D-8BE4-61C72EAB7F73"}
 */
function onRecordSelection(event, _form)
{
	//se il foundset non è vuoto costruisci e popola la form di dettaglio
	if(foundset.getSize() > 0)
	{	
		// Annulla se in inserimento
		if(getMainForm().vNuovoCertificato)
			return;
		
		// Gestione certificato telematico o riepilogo con certificati figli telematici
		var isTelematico = false;
		if(foundset.getSelectedIndex() == 1)
		{
			var fsCertificatiFigli = scopes.telematici.getCertificatiFigli(foundset['idstorico']);
			if(fsCertificatiFigli 
					&& fsCertificatiFigli.getSize() > 0)
			{
				/** @type {Array<Number>}*/
				var arrCertFigli = globals.foundsetToArray(fsCertificatiFigli,'idstoricocertificato');
				scopes.telematici.getNumeroCertificatiTelematici(arrCertFigli);
				isTelematico = true;
			}
		}
		else
			isTelematico = scopes.telematici.isCertificatoTelematico(foundset['idstorico']); 
		
		getMainForm().elements.lbl_certificato_telematico.visible = isTelematico && foundset.getSelectedIndex() != 1;
		getMainForm().elements.btn_canc_cert.enabled = !isTelematico || foundset.getSelectedIndex() == 1;
		
		getMainForm().updateDettaglioCertificato(foundset['codice'], foundset['idstorico']);	
	}
    
}

/**
 * @properties={typeid:24,uuid:"4D0D80D1-06EA-450F-93F9-00AC04E24B95"}
 */
function getMainForm()
{
	return forms.storico_main;
}

/**
 * @properties={typeid:24,uuid:"35A77395-C182-497B-9831-D0BF9B3A7A99"}
 */
function svuotaRiepilogoCertificati()
{
	// versione originale
//	if(foundset)
//		foundset.clear();
	
	var _fs = forms['storico_riep_cert_classico_temp'].foundset
	if(_fs)
		_fs.clear()
	
	forms.storico_cert_annotazioni.vAnnotazioni = ''	
		
}
