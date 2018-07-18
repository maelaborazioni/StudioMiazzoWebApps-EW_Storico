/**
 * @type {Number}
 * 
 * @properties={typeid:35,uuid:"BED80653-B165-461C-85FD-24742C7884DD",variableType:8}
 */
var vIdEventoClasse = null;

/**
 * @type {String}
 * 
 * @properties={typeid:35,uuid:"2121F4D6-B8E9-41ED-9B36-8C7D94A66CD9"}
 */
var vDescrizioneCertificato = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"078D83D0-A29C-4FAA-B71B-BEF9F3F6FB76"}
 */
var vTipoCertificato = '';

/**
 * Specifica se in modalità nuovo certificato. Vero se se in aggiunta, falso altrimenti.
 * 
 * @type {Boolean}
 *
 * @properties={typeid:35,uuid:"6574F9F6-6874-469A-A7A6-7C667FA92FF7",variableType:-4}
 */
var vNuovoCertificato = false;

/**
 * @type {Boolean}
 *
 * @properties={typeid:35,uuid:"4E26E383-C8F4-4F9F-96F0-EA60A1ECD951",variableType:-4}
 */
var isCertificatoPadre = false;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"DD05A20E-66E6-4666-945A-D17F69280132",variableType:4}
 */
var vIdStoricoPadre = -1;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"7BBB786E-8AE4-43AC-91B6-BD57E6B354E3"}
 */
function confermaGestioneCertificato(event) {
	
	globals.svy_nav_dc_setStatus('browse','storico_cert_certif',true)
    globals.svy_nav_dc_setStatus('browse','storico_cert_certif_corr',true)
	globals.svy_nav_dc_setStatus('edit','storico_riep_cert',true)
	
	databaseManager.revertEditedRecords(foundset)
	
	abilitaPulsanti(false)
	forms.storico_main.abilitaBtnOperazioni(true)
    forms.storico_cert_certif_corr.abilitaPulsanti(false)
	
	forms.storico_main.elements.tab_storico_riep.enabled = true;
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"A9459AC5-B363-475C-8638-A995CB910298"}
 */
function annullaGestioneCertificato(event) 
{
	if(forms.storico_main.foundset.getSize() == 0)
	   forms.storico_main.svuotaDettaglioCertificato();
	
	databaseManager.revertEditedRecords();
	
	globals.svy_nav_dc_setStatus('browse','storico_cert_certif',true)
    globals.svy_nav_dc_setStatus('browse','storico_cert_certif_corr',true)
	globals.svy_nav_dc_setStatus('browse','storico_riep_cert',true)
	
	abilitaPulsanti(false)
	forms.storico_main.abilitaBtnOperazioni(true)
    forms.storico_cert_certif_corr.abilitaPulsanti(false)
	
	forms.storico_main.elements.tab_storico_riep.enabled = true;
	
	costruisciDettaglioCertificato(forms['storico_riep_cert_classico_temp']['idstorico'],
        forms['storico_riep_cert_classico_temp']['codice'],forms.storico_main.vIdEventoClasse)
}

/**
 * 
 * @param {JSFoundset} _fs
 *
 * @properties={typeid:24,uuid:"5344FE3E-9182-4A58-AF3E-8956AEBC3377"}
 */
function FiltraCertificati(_fs)
{
	_fs.addFoundSetFilterParam('ideventoclasse', '=', vIdEventoClasse);
	_fs.addFoundSetFilterParam('ordinecertificato', 'IS NOT NULL', null);
	_fs.addFoundSetFilterParam('calcolo', '=', 0);
	_fs.sort('ordinecertificato asc', false);
	
	// Controlla che esista un riepilogo in caso di infortunio o matrimoniale
	if(globals.EventoClasse.INFORTUNIO === forms.storico_main.vIdEventoClasse 
			|| globals.EventoClasse.MATRIMONIALE === forms.storico_main.vIdEventoClasse)
	{
		var riepilogoFoundset = forms.storico_riep_cert_classico.foundset;
		if(!riepilogoFoundset || riepilogoFoundset.getSize() === 0)
		{
			_fs.addFoundSetFilterParam('sceltawizard', '=', 1);
		}
		else
		{
			_fs.addFoundSetFilterParam('sceltawizard', '=', 0);
		}
	}
	
	return _fs;

}

/**
 * @param {JSRecord<db:/ma_presenze/storico_tipicertificato>} rec
 * @properties={typeid:24,uuid:"019FA8EA-DD27-4D69-A378-0371D7BC8BC1"}
 */
function updateTipoCertificato(rec)
{
	if(rec)
	{
		vDescrizioneCertificato = rec.descrizione;
		vTipoCertificato = rec.codcertificato;
		forms.storico_main.vCodiceCertificato = vTipoCertificato;
		
		if(vNuovoCertificato)
		  updateDettaglioCertificato(vTipoCertificato, null, true);
		else
		  updateDettaglioCertificato(vTipoCertificato, idstoricocertificato, true);
		
	}
}

/**
 * Aggiorna la maschera di dettaglio per il certificato specificato.
 * 
 * @AllowToRunInFind
 * 
 * @param {String} tipoCertificato
 * @param {Number} [idStoricoCertificato]
 * @param {Boolean} [validaCertificato]
 * 
 * @return {String} il nome della form di dettaglio creata
 * 
 * @properties={typeid:24,uuid:"6ADF90AD-0EA8-4AB6-BAD3-B072CD1E102B"}
 */
function updateDettaglioCertificato(tipoCertificato, idStoricoCertificato, validaCertificato)
{
	var formName = null;
	var response = true;
	
	if(validaCertificato)
	{
		var params = forms.storico_main.inizializzaParametriValidatoreTipoCertificato(idStoricoCertificato);
		response = globals.validaTipoCertificato(params);
	}
	    
	if(response === true)
	{
		/** @type {JSFoundSet<db:/ma_presenze/storico_tipicertificato>} */
		var tipiCertificatoFs = databaseManager.getFoundSet(globals.Server.MA_PRESENZE, 'storico_tipicertificato');
		if(tipiCertificatoFs && tipiCertificatoFs.find())
		{
			tipiCertificatoFs.codcertificato = tipoCertificato;
			if(tipiCertificatoFs.search() > 0)
				vDescrizioneCertificato = tipiCertificatoFs.descrizione;
			else
				throw 'Tipo di certificato non riconosciuto';
		}
		
		vTipoCertificato = tipoCertificato;
		formName = costruisciDettaglioCertificato(tipoCertificato, vIdEventoClasse, idStoricoCertificato);
		
		// If adding a new certificate, go to edit after selecting its type
		if(vNuovoCertificato)
	       globals.ma_utl_setStatus(globals.Status.EDIT,formName);
	}
	else
	{
		vDescrizioneCertificato = '';
		vTipoCertificato = '';
	}
	
	return formName;
}

/**
 * 
 * @param {Boolean} abilita
 *
 * @properties={typeid:24,uuid:"FF08E50E-BEC2-424E-983B-E51F1DCD319F"}
 */
function abilitaPulsanti(abilita)
{
	elements.btn_cert.enabled = abilita
}


///**
// * Handle changed data.
// *
// * @param oldValue old value
// * @param newValue new value
// * @param {JSEvent} event the event that triggered the action
// *
// * @returns {Boolean}
// *
// * @private
// *
// * @properties={typeid:24,uuid:"DCCA0600-35C4-4747-A593-253407B6D8B2"}
// */
//function onDataChangeCertificato(oldValue, newValue, event) {
//	
//	vDescrizioneCertificato = ''
//	var _numrec = 0
//	/** @type {JSFoundSet<db:/ma_presenze/storico_tipicertificato>} */
//	var _foundset = databaseManager.getFoundSet(globals.nav.program['LEAF_Lkp_Certificati'].server_name,
//												globals.nav.program['LEAF_Lkp_Certificati'].table_name)
//												
//	_foundset.addFoundSetFilterParam('codicecertificato', '=', newValue)
//	_foundset.addFoundSetFilterParam('ideventoclasse','=',foundset.ideventoclasse)
//	
//	// Controlla che esista un riepilogo in caso di infortunio o matrimoniale
//	if(globals.EVENTO_CLASSE.infortunio === foundset.ideventoclasse || globals.EVENTO_CLASSE.matrimoniale === foundset.ideventoclasse)
//	{
//		var riepilogoFoundset = forms.storico_riep_cert_classico.foundset;
//		if(!riepilogoFoundset || riepilogoFoundset.getSize() === 0)
//		{
//			_foundset.addFoundSetFilterParam('sceltawizard', '=', 1);
//		}
//		else
//		{
//			_foundset.addFoundSetFilterParam('sceltawizard', '=', 0);
//		}
//	}
//	
//	_foundset.loadAllRecords()
//	
//	if (_foundset.getSize() === 1) 
//	{		
//		if(vNuovoCertificato)
//		{
//			updateDettaglioCertificato(idstoricocertificato,undefined,-);
//			globals.annotazioniControlloPropostaCampo('',-1);
//			
//			// Set the detail form in edit mode
//			forms.storico_main.enterEditMode();
//		}
//		else
//		{
//			updateDettaglioCertificato(undefined,undefined,-);
//		}
//        
//		
//	} else {
//		
//		globals.svy_nav_showLookupWindow(event, '_tipoCert', 'LEAF_Lkp_Certificati', 'AggiornaCertificati', 'FiltraCertificati', null, null, 'codicecertificato', true)
//	
//	}
//	
//	return true
//}

///**
// * @param {String} tipoCert
// * @param {Number} idEventoClasse
// * 
// * @properties={typeid:24,uuid:"C6BE8011-EC15-4056-A061-2AE05E849FEE"}
// */
//function AggiornaDescrCertificato(tipoCert, idEventoClasse){
//	
//	vTipoCertificato = tipoCert
//	vDescrizioneCertificato = ''
//	var _numrec = 0
//	var _foundset = databaseManager.getFoundSet(globals.nav.program['LEAF_Lkp_Certificati'].server_name,
//												globals.nav.program['LEAF_Lkp_Certificati'].table_name)
//												
//	_foundset.removeFoundSetFilterParam('ftr_tipoCertificato')											
//	_foundset.removeFoundSetFilterParam('ftr_classeCertificato')
//	_foundset.addFoundSetFilterParam('codcertificato', '=', vTipoCertificato,'ftr_tipoCertificato')
//	_foundset.addFoundSetFilterParam('ideventoclasse', '=', idEventoClasse,'ftr_classeCertificato')
//	_foundset.loadAllRecords()
//	
//	if (_foundset.getSize() == 1) {
//		
//		vTipoCertificato = _foundset['codcertificato']
//		vDescrizioneCertificato = _foundset['descrizione']
//		
//		updateDettaglioCertificato(foundset.idstoricocertificato,undefined,-);
//
//		if(vNuovoCertificato)
//			   globals.annotazioniControlloPropostaCampo('',-1);
//		
//	}
//}

/**
 * Costruisce la form di dettaglio del certificato, in base al tipo specificato.
 * 
 * @param {String} tipoCertificato
 * @param {Number} idEventoClasse
 * @param {Number} [idStoricoCertificato]
 * 
 * @return {String} il nome della form creata
 *
 * @properties={typeid:24,uuid:"E3CFBB0F-18FA-453E-979B-A923615DCC99"}
 * @AllowToRunInFind
 */
function costruisciDettaglioCertificato(tipoCertificato, idEventoClasse, idStoricoCertificato) 
{
	var formName = forms.storico_main.vFormDettaglioCertificato;

	forms.storico_main.vCodiceCertificato = tipoCertificato;
	elements.tab_storico_cert_certif_corr_dyn.removeAllTabs();

	//	rimuovi eventuali form/tab omonimi già aperti */
	if (forms[formName]) 
	{
		if (history.removeForm(formName))
			solutionModel.removeForm(formName);
	}
	
	// Crea la form di dettaglio secondo il tipo di certificato specificato
	var formDettaglio = getFormDettaglioCertificato(formName, tipoCertificato, idEventoClasse);	
	
	// Se in browse/edit, popola i campi della form
	if(idStoricoCertificato)
	{
		/** @type {JSFoundSet<db:/ma_presenze/storico_certificati>} */
		var fsCertificato = databaseManager.getFoundSet(globals.Server.MA_PRESENZE, globals.Table.STORICO);
			fsCertificato.loadRecords(idStoricoCertificato);
			
		var fsDettaglioCertificato = fsCertificato.storico_certificati_to_storico_certificatidettaglio;
		if(fsDettaglioCertificato)
		{
			for(var r = 1; r <= fsDettaglioCertificato.getSize(); r++)
			{
				var currRec = fsDettaglioCertificato.getRecord(r);
				var dataType = currRec.storico_certificatidettaglio_to_storico_tipicertificatodettaglio.storico_tipicertificatodettaglio_to_storico_tipicampo.tipodidato;
				
				var value;
				switch (dataType) {
					case 'BOOL':
						value = "'" + currRec.valore_integer + "'";
						break;
					case 'DATETIME':
						var dateValue = currRec.valore_datetime;
						value = dateValue && 'new Date(' + dateValue.getFullYear() + ', ' + dateValue.getMonth() + ', ' + dateValue.getDate() + ')';
						break;
					case 'BYTE':
						value = "'" + currRec.valore_integer + "'";
						break;
					case 'INTEGER':
						value = "'" + currRec.valore_integer + "'";
						break;
					default:
						value = '';
				}
				
				// Assegna il valore alla variabile corrispondente
				formDettaglio.getVariable('v' + currRec.storico_certificatidettaglio_to_storico_tipicertificatodettaglio.codice).defaultValue = value;
			}			
		}
	}
		
	elements.tab_storico_cert_certif_corr_dyn.addTab(formDettaglio.name);
	
	return formDettaglio.name;
}

/**
 * Crea la form di dettaglio per il certificato in base al tipo specificto
 * 
 * @param {String} formName the name of the detail form
 * @param {String} tipoCertificato
 * @param {Number} idEventoClasse
 * 
 * @return {JSForm} the newly created form
 *
 * @properties={typeid:24,uuid:"7265ED56-3A5F-4CB4-B6A5-28BEDDA41AB9"}
 * @AllowToRunInFind
 * @SuppressWarnings(unused)
 */
function getFormDettaglioCertificato(formName, tipoCertificato, idEventoClasse)
{
	// Recupera le informazioni relative ai campi del certificato
	/** @type {JSFoundSet<db:/ma_presenze/storico_tipicertificatodettaglio>} */
	var fsTipoCertificati = databaseManager.getFoundSet(globals.Server.MA_PRESENZE, 'storico_tipicertificatodettaglio');
	if(fsTipoCertificati && fsTipoCertificati.find())
	{
		fsTipoCertificati.codcertificato = tipoCertificato;
		fsTipoCertificati.ideventoclasse = idEventoClasse;
		if(fsTipoCertificati.search() === 0)
			throw 'Certificato non riconosciuto';
	}
	
	fsTipoCertificati.sort('ordinemaschera asc');
	
	/** @type JSForm */
	var tForm = solutionModel.newForm(formName, globals.Server.MA_PRESENZE, globals.Table.STORICO, 'leaf_style', false, 360, 150);
		tForm.extendsForm = solutionModel.getForm(forms.svy_nav_base.controller.getName());
		tForm.navigator = SM_DEFAULTS.NONE;
		tForm.view = JSForm.RECORD_VIEW;
		tForm.scrollbars = SM_SCROLLBAR.HORIZONTAL_SCROLLBAR_NEVER | SM_SCROLLBAR.VERTICAL_SCROLLBAR_NEVER;
		tForm.transparent = true;
    
	/** @type JSLabel */
	var tLabel
	/** @type JSField */
	var tField
	/** @type {JSVariable} */
	var tVariable;
	/** @type Number */
	var topMargin = 0;
	var sideMargin = 10;//Math.floor(1/4 * tForm.width - 1/2 * fldLength);
	
	var fldHeight = 20;
	var fldLength = 80;
	var lblHeight = 20;
	var lblLength = 160;
	
	var xLLeft = sideMargin;
	var xLRight = tForm.width - sideMargin - lblLength;//Math.floor(tForm.width / 2) + xLLeft;
	
	var dy = lblHeight + fldHeight;	

	var fieldType;
	var variableType;
	var fieldBorder = '';
	var fieldStyle = 'default';
	var fieldFormat = '';
	var fieldAlignment = SM_ALIGNMENT.CENTER;
	var transparent;
	var visible;
	var valueList;

//	var checkNullAndValidate = tForm.newMethod("\
//		function checkNullAndValidate(event, value)\
//		{\
//			if(value)\
//			{\
//				globals.onFocusGainedLost(oldValue, newValue, event);\
//			}\
//			else\
//			{\
//				elements['lbl_' + event.getElementName()].fgcolor = '#FF0000';\
//				controller.focusField(event.getElementName(), true);\
//			}\
//		}\
//	");
//
//	var onActionFocusLost = tForm.newMethod("\
//		function onActionField(event)\
//		{\
//			checkNullAndValidate(event, foundset[event.getSource().getDataProviderID()]);\
//		}\
//	");

	// TODO
	var checkNullAndValidate = tForm.newMethod("\
		function checkNullAndValidate(event, value)\
		{\
			elements['lbl_' + event.getElementName()].fgcolor = '#FF0000';\
			controller.focusField(event.getElementName(), true);\
		}\
	");

	var onActionField = tForm.newMethod("\
		function onActionField(event)\
		{\
			checkNullAndValidate(event, foundset[event.getSource().getDataProviderID()]);\
		}\
	");
	
	tForm.onElementFocusGained = tForm.getMethod("globals.onFocusGained")
	tForm.onElementFocusLost = tForm.getMethod("globals.onFocusLost");
	
	var length = fsTipoCertificati.getSize();	
	for (var i = 1; i <= length; i++) 
	{
		var currRec = fsTipoCertificati.getRecord(i);
		
		//determina il tipo di dato del campo
		var dataType;
		dataType = currRec.storico_tipicertificatodettaglio_to_storico_tipicampo.tipodidato;
		
		switch (dataType) {
			case 'BOOL':
				fieldType = JSField.CHECKS;
				fieldFormat = '';
				fieldBorder = 'empty';
				fieldAlignment = SM_ALIGNMENT.LEFT;
				transparent = true;
				variableType = JSVariable.INTEGER;
				break;
			case 'DATETIME':
				fieldType = JSField.TEXT_FIELD;
			    fieldBorder = '';
			    fieldAlignment = SM_ALIGNMENT.CENTER;
				transparent = false;
				variableType = JSVariable.DATETIME;
				break;
			case 'BYTE':
				fieldType = JSField.COMBOBOX;
				fieldFormat = '';
				fieldBorder = '';
				fieldAlignment = SM_ALIGNMENT.CENTER;
				transparent = false;
				valueList = 'triple_state';
				variableType = JSVariable.INTEGER;
				break;
			case 'INTEGER':
				fieldType = JSField.TEXT_FIELD;
				fieldFormat = '';
				fieldBorder = '';
				fieldAlignment = SM_ALIGNMENT.CENTER;
				transparent = false;
				variableType = JSVariable.INTEGER;
				break;
			default:
				fieldType = JSField.TEXT_FIELD;
				fieldFormat = '';
				fieldBorder = '';
				fieldAlignment = SM_ALIGNMENT.CENTER;
				transparent = true;
				variableType = JSVariable.MEDIA;
		}

		// Determina la riga della maschera
		var row = Math.floor((i - 1) / 2);

		// Crea la variabile associata al campo che sarà creato
		tVariable = tForm.newVariable('v' + currRec.codice, variableType);
		
		// Posiziona i campi su due colonne e associa la variabile appena definita come data provider
		if (i % 2 != 0) 
		{
			// Colonna di sx
			tLabel = tForm.newLabel(currRec.descrizione, xLLeft, topMargin + (row * dy), lblLength, lblHeight);
			tLabel.transparent = true;
			
			tField = tForm.newField(tVariable.name, fieldType, xLLeft + Math.floor(tLabel.width / 2), tLabel.y + lblHeight, fldLength, fldHeight);
		}
		else
		{
			// Colonna di dx
			tLabel = tForm.newLabel(currRec.descrizione, xLRight, topMargin + (row * dy), lblLength, lblHeight);
			tLabel.transparent = true;
			
			tField = tForm.newField(tVariable.name, fieldType, xLRight + Math.floor(tLabel.width / 2), tLabel.y + lblHeight, fldLength, fldHeight);
		}

		switch (currRec.tipovisualizzazione)
		{
			// Determina il modo di visualizzazione del campo
			case 2:
				tField.enabled = false;
				tField.editable = false;
				break;
			case 3:
				tLabel.visible = false;
				tField.visible = false;
				break;
		}

		tField.styleClass = fieldStyle;
		tField.borderType = fieldBorder || null;

		//setta altre proprietà per label
		tLabel.name = 'lbl_' + currRec.codice//_gDataSetStoCert[i-1][2]
		//setta altre proprietà per campi
		//il  nome del field si ottiene dal codice relativo al campo in tabella utilizzato per
		//gestire le validazioni/proposte/etc
		//precedente gestione : _tF.name = 'fld_' + i.toString(10)
		tField.name =  currRec.codice //_gDataSetStoCert[i-1][2]
		tLabel.toolTipText = tLabel.text;

		tField.format = fieldFormat;
		tField.horizontalAlignment = fieldAlignment;
		tField.transparent = transparent;
		tField.tabSeq = i;
		if (i == 1)
			tField.selectOnEnter = true;
		
	}
	
	return tForm;
}

