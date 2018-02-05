/**
 * @properties={typeid:35,uuid:"1B1D4B30-B513-4B1F-814F-AFE99CCED20C",variableType:-4}
 */
var vDescrizioneCampo = null;

/**
 * @type {Date}
 * 
 * @properties={typeid:35,uuid:"85D4A8DD-30FE-41D7-BDAE-50BFB5DDFFE8",variableType:93}
 */
var vDataPadre = new Date();

/**
 * @type {Continuation}
 * 
 * @properties={typeid:35,uuid:"8A9D5A36-5F2D-4F31-82E5-C0FF4CB8A971",variableType:-4}
 */
var vDialogContinuation = null;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"692518B3-8A07-43D5-A338-3C7A3B28C92A"}
 */
function okAndClose(event) 
{
	if(vDataPadre)
	{
		globals.svy_mod_closeForm(event);
		dialogContinuation(vDataPadre);
	}
}

/** *
 * @param _firstShow
 * @param _event
 *
 * @properties={typeid:24,uuid:"B050D4A6-0C72-4F50-9CD8-EA98462C0A1D"}
 */
function onShowForm(_firstShow, _event) {
	
	_super.onShowForm(_firstShow, _event);
	vDataPadre = null;
	elements.btn_datapadre.enabled = true;
	elements.fld_data_padre.enabled = true;
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"B955A89A-FD97-46CE-8277-B9802CD76167"}
 */
function onActionData(event) 
{
	okAndClose(event);
}
