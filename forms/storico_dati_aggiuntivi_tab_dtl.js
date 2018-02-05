/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"01A9212B-21DE-42E5-BF07-332F41F3895B"}
 */
var _luogoNascita = '';
	
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"AB79D235-A09B-4D03-B924-4A9C77D9D74B"}
 */
var _codLuogoNascita = '';

	
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"E313A769-ABBF-4EA9-A372-4D0DE845E75D"}
 */
function confermaDatiAggiuntivi(event) {
	
	if (validaDatiAggiuntiviFiglio()) {

		if (foundset.idlavoratore === null)
			foundset.idlavoratore = forms['giorn_header']['idlavoratore'];
        foundset.ideventoclasse = globals.EventoClasse.PARENTALE;
        
		if (!databaseManager.commitTransaction()) {

			globals.svy_mod_dialogs_global_showErrorDialog('Errore durante l\'inserimento dei dati', 'Inserimento non riuscito, si prega di riprovare', 'OK');
			databaseManager.revertEditedRecords(foundset);
		    return;
		}

		globals.ma_utl_setStatus('browse', controller.getName());

		globals.svy_mod_closeForm(event);

//		globals.ma_utl_showFormInDialog(forms.storico_dati_aggiuntivi_scelta_tab.controller.getName(),
//			'Dati aggiuntivi congedo parentale');
	} else
		globals.ma_utl_showWarningDialog('Controllare i valori inseriti', 'Dati aggiuntivi congedo parentale');
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"82F22617-1F92-4771-B2FA-3BAFAFBD9146"}
 */
function annullaDatiAggiuntivi(event) {

	databaseManager.revertEditedRecords(foundset);
	
	globals.ma_utl_setStatus('browse',controller.getName());
	
    globals.svy_mod_closeForm(event);
    
//    globals.ma_utl_showFormInDialog(forms.storico_dati_aggiuntivi_scelta_tab.controller.getName(),
//    	                            'Dati aggiuntivi congedo parentale');
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @private
 *
 * @properties={typeid:24,uuid:"1D8FAF7C-B678-48C4-81CB-896ECABAEBC0"}
 */
function onHide(event) {
	
	globals.svy_nav_dc_setStatus('browse','storico_dati_aggiuntivi_tab_dtl',true);
	
	return _super.onHide(event)
   
}

/**
 * @return {Boolean}
 * 
 * @properties={typeid:24,uuid:"22A846B5-9F7D-49E1-9BFD-4FB7CF19490A"}
 */
function validaDatiAggiuntiviFiglio()
{
	// TODO valida i dati inseriti (occhio al codice fiscale)
	return true;
}
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 * 
 * @private
 *
 * @properties={typeid:24,uuid:"1CF25DB4-831E-41F0-9FE7-0C04D79B2454"}
 */
function calcolaCodiceFiscale(event) 
{	
	if(!showLookupComune(event))
		return;
	
	if (validaDatiInseriti())
	{
		var msg = 'L\'algoritmo non può tenere conto di casi di omocodia.<br/>Il solo codice fiscale corretto  \
	           è quello fornito dal Ministero delle Entrate';
		
		globals.ma_utl_showInfoDialog(msg, 'Calcolo codice fiscale');

		var message = calcolaCF();
		if (message && message.length > 16)
			globals.ma_utl_showErrorDialog(message);
		else
		if (message)
			codicefiscale = message;
	} 
	else
		globals.ma_utl_showWarningDialog('Controllare i dati inseriti!', 'Calcolo codice fiscale');
}

/**
 * @properties={typeid:24,uuid:"48001AC3-50EB-4654-9180-700E3A780C04"}
 */
function calcolaCF()
{
	var url = "http://webservices.dotnethell.it/codicefiscale.asmx/CalcolaCodiceFiscale";
	var httpPlugin = plugins.http.createNewHttpClient();

	var httpReq = httpPlugin.createPostRequest(url);
		httpReq.addParameter('Nome', nome);
		httpReq.addParameter('Cognome', cognome);
		httpReq.addParameter('ComuneNascita', _luogoNascita);
		httpReq.addParameter('DataNascita', utils.dateFormat(data, globals.EU_DATEFORMAT));
		httpReq.addParameter('Sesso', sesso);
	
	var response = httpReq.executeRequest();
	var xml = plugins.XmlReader.readXmlDocumentFromString(response.getResponseBody());
	
	return xml[0].getTextValue();
}

/**
 * @param event
 *
 * @properties={typeid:24,uuid:"370524C7-8476-466E-8359-8304AFD40738"}
 */
function showLookupComune(event)
{
	return globals.ma_utl_showLkpWindow(
	{
		event: event,
		lookup: 'AG_Lkp_Comune',
		methodToExecuteAfterSelection: 'AggiornaComune',
		allowInBrowse: true
	});
}

/**
 * Aggiorna i campi dopo la selezione del comune
 * 
 * @param {JSRecord} _rec
 *
 * @properties={typeid:24,uuid:"38693285-A02C-4020-8E25-C88B29366D71"}
 */
function AggiornaComune(_rec)
{
	_luogoNascita = _rec['descrizione'];
	_codLuogoNascita = _rec['codcomune'];
}

/**
 * @return {Boolean}
 * 
 * @properties={typeid:24,uuid:"A2CFDA6A-ED49-4139-AD30-646EC7337D47"}
 */
function validaDatiInseriti()
{
	if(nome != null && nome != ""
		&& cognome != null && cognome != ""
			&& data != null && data != ""
			&& _luogoNascita != null && _luogoNascita != "")
	return true;
	
	return false;
}

