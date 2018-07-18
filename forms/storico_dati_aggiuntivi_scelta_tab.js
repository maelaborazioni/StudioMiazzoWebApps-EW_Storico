/**
 * @properties={typeid:35,uuid:"1F878F87-3846-4766-838A-24A2413AB1D7",variableType:-4}
 */
var vStoricoForm = forms.storico_main.controller.getName();

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"4A491000-4860-4481-8424-0ED5FE57B07A",variableType:8}
 */
var vIdEventoClasse;

/**
 * @param idEventoClasse
 * @param storicoFormName
 * @param _continuation
 *
 * @return {RuntimeForm<storico_dati_aggiuntivi_scelta_tab>}
 *
 * @properties={typeid:24,uuid:"BE4270CE-03FF-4677-A957-240D29E1712B"}
 */
function initParams(idEventoClasse, storicoFormName, _continuation)
{
	vIdEventoClasse = idEventoClasse;
	vStoricoForm = storicoFormName;
	continuation = _continuation;
	
	/** @type {RuntimeForm<storico_dati_aggiuntivi_scelta_tab>} */
	var retForm = forms[controller.getName()];
	
	return retForm;
}

/**
 * Seleziona il figlio ed entra nella gestione del relativo 
 * periodo di congedo associato
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"96095A43-D008-4578-99EF-9C852BB156A0"}
 * @AllowToRunInFind
 */
function confermaSelezioneFiglio(event) 
{
	/** @type {RuntimeForm<storico_main>} */
	var storicoForm = forms[vStoricoForm];
	var vIdStoricoDatiAggiuntivi = foundset.getSelectedRecord().idstoricodatiaggiuntivi;
	
	if(vIdStoricoDatiAggiuntivi)
		storicoForm.vIdStoricoDatiAggiuntivi = vIdStoricoDatiAggiuntivi;
	else
	{
		globals.ma_utl_showInfoDialog('Controllare nel database l\'inserimento del figlio','Selezione dati figlio')
	    return;
	}
	
	var sqlStoricoCertificati    = "SELECT [dbo].[F_Sto_IdStoricoDaDatiAggiuntivi](?,?)";
	var paramsStoricoCertificati = [vIdEventoClasse, vIdStoricoDatiAggiuntivi ];
	
	var dsStoricoCertificati = databaseManager.getDataSetByQuery(globals.Server.MA_PRESENZE,sqlStoricoCertificati,paramsStoricoCertificati,-1);
	var idStoricoCertificati = dsStoricoCertificati.getValue(1,1);
	if (idStoricoCertificati != null)
	{
		/** @type {JSFoundSet<db:/ma_presenze/storico_certificati>} */
		var fsStoricoCertificati = databaseManager.getFoundSet(globals.Server.MA_PRESENZE, globals.Table.STORICO);
		if (fsStoricoCertificati.find())
		{
			fsStoricoCertificati.idstoricocertificato = idStoricoCertificati;
			if(fsStoricoCertificati.search() > 0)
			{
				// se è già esistente un certificato padre di congedo parentale mostralo
				closeAndContinue(event, idStoricoCertificati);
			}	
			else
//				forzaInserimentoCertificatoPadreCongedo(event,strIntestazione);
				closeAndContinue(event, -1);
		}
	}
	else
//		forzaInserimentoCertificatoPadreCongedo(event,strIntestazione);
		closeAndContinue(event, -1);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"15D52A17-D79F-41BA-B126-40591DD3620F"}
 */
function vaiAGestioneFigli(event)
{
	globals.svy_mod_closeForm(event)
	
	databaseManager.setAutoSave(false);
	databaseManager.startTransaction();
	
	globals.ma_utl_setStatus(globals.Status.EDIT,'storico_dati_aggiuntivi_tab_dtl');
	globals.ma_utl_showFormInDialog(forms.storico_dati_aggiuntivi_tab.controller.getName(), 'Inserisci i dati del figlio');
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"DB885996-D6B8-45BE-B1B2-3C68DA4A92A3"}
 */
function annullaSelezioneFiglio(event)
{
	globals.svy_mod_closeForm(event);
    //closeAndContinue(event, null);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"48846D1A-68C4-4D5E-81B1-E845A2239A93"}
 */
function eliminaFiglio(event) {

	var response = globals.ma_utl_showYesNoQuestion('Vuoi davvero eliminare i dati del figlio selezionato?','Elimina i dati del figlio');
	var frm = forms.storico_dati_aggiuntivi_tab_tbl;
	var fs = frm.foundset;

	if (response) {
		if (fs.getSize() > 0) {
			if (!fs.deleteRecord(fs.getSelectedIndex()))
				globals.ma_utl_showErrorDialog('Eliminazione non riuscita, riprovare', 'Elimina i dati del figlio');
		} else
			globals.ma_utl_showErrorDialog('Nessun record presente', 'Elimina i dati del figlio');
	}
}


/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"4B62B094-3443-4801-BED0-6295D0376191"}
 */
function modificaDatiFiglio(event) {
	
	var frm = forms.storico_dati_aggiuntivi_tab_dtl;
	var frmName = frm.controller.getName();
	
	if(frm.foundset.getSize() > 0)
	{
		globals.ma_utl_showFormInDialog(frmName,'Modifica i dati del figlio');
		globals.ma_utl_setStatus('edit',frmName);
		databaseManager.startTransaction();
	}
	else
	    globals.ma_utl_showWarningDialog('Nessun record presente','Elimina i dati del figlio');
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"DE325592-E428-4F78-8794-B4412EDA63ED"}
 */
function aggiungiFiglio(event) {
	
	var frmName = forms.storico_dati_aggiuntivi_tab_dtl.controller.getName();
	var fs = forms.storico_dati_aggiuntivi_tab_dtl.foundset;
	
	if(fs.newRecord(false) > -1)
	{	
	   globals.ma_utl_showFormInDialog(frmName,'Inserisci i dati del nuovo figlio');
	   globals.ma_utl_setStatus('edit',frmName);
	   databaseManager.startTransaction();
	}
	else
		globals.ma_utl_showErrorDialog('Errore nella creazione del nuovo record, si prega di riprovare','Inserimento dati nuovo figlio')
}

/**
 * @type {Continuation}
 * 
 * @properties={typeid:35,uuid:"D8C65E98-2CDF-4D48-84F0-440ED326A42E",variableType:-4}
 */
var continuation = null;

/**
 * @properties={typeid:24,uuid:"10811C3F-06FA-4A52-844F-53CF987217D9"}
 */
function closeAndContinue(event, returnValue)
{
	globals.svy_mod_closeForm(event);

	if(continuation && application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT)
		continuation(returnValue);
	
}