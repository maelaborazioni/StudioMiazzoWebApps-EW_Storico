/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"E4E4EFCB-D083-4D44-8600-1B112455E1B1",variableType:8}
 */
var idEventoLungo;

/**
 * Handle changed data.
 *
 * @param oldValue old value
 * @param newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"04D01487-9081-4264-8D76-EDA8463E1BD7"}
 * @AllowToRunInFind
 */
function onDataChangeEventoLungo(oldValue, newValue, event) {
	
	var fs = foundset.lavoratori_to_storico_certificati;
	fs.loadAllRecords();
	if(fs.find())
	{
		fs.ideventoclasse = newValue;
		fs.search();
		switch(newValue)
		{
			case 90:
			case 91:
				elements.tab_dati_aggiuntivi.visible = true; //setSize(elements.tab_dati_aggiuntivi.getWidth(),80);
				elements.lbl_dati_aggiuntivi.visible = true;
				break;
			default:
			    elements.tab_dati_aggiuntivi.visible = false; //setSize(elements.tab_dati_aggiuntivi.getWidth(),0);
			    elements.lbl_dati_aggiuntivi.visible = false;
			    break;
		}
	}
	else
		globals.ma_utl_showErrorDialog('Cannot go to find mode','Gestione storico filtro evento lungo');
	return true;
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
 * @properties={typeid:24,uuid:"5666B9E5-6E74-47C4-B508-33810AF9A035"}
 */
function onHide(event)
{
	globals.ma_utl_setStatus(globals.Status.BROWSE,controller.getName());
	return _super.onHide(event);
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"589EB0BB-3EFF-4B4B-8AF5-23E969628394"}
 */
function onShow(firstShow, event) 
{
	globals.ma_utl_setStatus(globals.Status.EDIT,controller.getName());
}
