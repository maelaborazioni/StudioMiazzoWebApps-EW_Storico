/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"7BFC8EAE-0BB4-4C61-80A0-5DAD665D4B11"}
 */
function confermaDatiAggiuntivi(event) {
	
	if(validaDatiAggiuntiviFiglio())
	{
       if(!databaseManager.commitTransaction()){
    	
    	  globals.ma_utl_showErrorDialog('Inserimento dati aggiuntivi figlio non riuscito, riprovare','Inserimento dati aggiuntivi figlio');
          databaseManager.revertEditedRecords(foundset);	
          return;
       }
        
       vaiASelezioneFiglioPerCongedo(event);
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"7B1E19EE-9E46-4629-B878-99C9277C60CC"}
 */
function annullaDatiAggiuntivi(event) {

	databaseManager.revertEditedRecords(foundset)
	
	vaiASelezioneFiglioPerCongedo(event);
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
 * @properties={typeid:24,uuid:"0EDD1BA6-08A1-48C9-9BB0-C2331BB3F3F9"}
 */
function onHide(event) {
	
	globals.svy_nav_dc_setStatus('browse','storico_dati_aggiuntivi_tab_dtl',true);
	
	return _super.onHide(event)
   
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"2A8E27BA-FF10-4AEF-B5BE-6D3B0DA2F74A"}
 */
function vaiASelezioneFiglioPerCongedo(event) {
	
	globals.svy_nav_dc_setStatus('browse','storico_dati_aggiuntivi_tab_dtl',true);
	
	globals.svy_mod_closeForm(event);
	
	globals.ma_utl_showFormInDialog(forms.storico_dati_aggiuntivi_scelta_tab.controller.getName(), 'Selezione dati aggiuntivi congedo');
	
}

/**
 * @return {Boolean}
 * 
 * @properties={typeid:24,uuid:"E92E6DAD-47DD-4201-A50C-C1380EBED5B9"}
 */
function validaDatiAggiuntiviFiglio()
{
	if(cognome != null && cognome != ""
		&& nome != null && nome != ""
			&& data != null && data != ""
				&& codicefiscale != null && codicefiscale != "")
	return true;
	
	return false;
}
