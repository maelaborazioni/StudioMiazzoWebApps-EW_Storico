/**
 * Ricostruisce e visualizza il riepilogo del certificato padre selezionato
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"43A543A0-2C47-4A1F-ABBA-7D84E75D0B05"}
 */
function confermaSelRiepCert(event)
{
	// Update the main form with the selected certificate
	var _currTabFormName = elements.tab_cont.getTabFormNameAt(1);
	
	if(forms[_currTabFormName].foundset.getSize() >0)
	{
	   var _idStorico = forms[_currTabFormName].foundset['idstoricocertificato'];
	
	   forms.storico_main.inizializzaRiepilogo(_idStorico,false);
	
	   // se arriviamo da una situazione di nuovo certificato, una volta selezionato il
	   // certificato padre da recuperare, annulla la fase di inserimento
	   forms.storico_main.exitEditMode(event);
	
	}
	
	globals.svy_mod_closeForm(event);	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"21C3A6DC-7D72-4154-8679-9B79DD2A94B4"}
 */
function annullaSelRiepCert(event) {
	
    globals.svy_mod_closeForm(event)
}

/** *
 * @param _firstShow
 * @param _event
 *
 * @properties={typeid:24,uuid:"520DBD8B-ACA2-49F2-B69D-6DA384862E73"}
 */
function onShowForm(_firstShow, _event) {
	
	_super.onShowForm(_firstShow, _event);
	
    var _currTabFormName = elements.tab_cont.getTabFormNameAt(1);
	
	if(forms[_currTabFormName].foundset.getSize() >0)
	   elements.btn_conferma_cert.enabled = true;  
	else
	   elements.btn_conferma_cert.enabled = false;	
} 
