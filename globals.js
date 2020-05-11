/**
 * @type {{ BOOL: String, DATETIME: String, TRISTATE: String, INTEGER: String }}
 * @properties={typeid:35,uuid:"298E8C83-8D36-48A3-ACFF-E8C44DF4310A",variableType:-4}
 */
var DataType = { BOOL: 'BOOL', DATETIME: 'DATETIME', TRISTATE: 'BYTE', INTEGER: 'INTEGER' };

/**
 * @type {Array}
 *
 * Array dei parametri della maschera da inserire nella struttura generale
 * ogni elemento è una coppia (codice campo, valore campo)
 * 
 * @param {Array}
 * 
 * @properties={typeid:35,uuid:"3E7358AD-2A79-4C45-BEAE-0F9EA0792B70",variableType:-4}
 */
var _formStatus = new Array

/**
 * @type {Array}
 *
 * Array dei parametri della maschera ritornati dopo la validazione
 * 
 * @param {Array}
 * 
 * @properties={typeid:35,uuid:"50C44162-4951-49DC-BDF1-0B2FC32C0978",variableType:-4}
 */
var _retMaschera = new Array()

/**
 * @param {Array}
 * 
 * @properties={typeid:35,uuid:"39E5965F-46E9-43C2-A394-1800C34832EF",variableType:-4}
 */
var _gainedEvent = null

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"406B31A9-0C6A-4426-9258-DC7DA47CF63C"}
 */
var vFormDettaglioCertificato = 'storico_cert_certif_corr_dtl';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"7E46D983-ADAD-43C9-8D32-7B79F1320CB6"}
 */
var vWinStorico = ''

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"835F9A19-4640-4EF5-8592-2B0210458FEB"}
 */
var vWinStoricoDatiAgg = ''
	
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"CF5FCA07-544D-4F1A-A7CD-4C2661B6C899",variableType:4}
 */
var TIPO_CERT_DETT_MAL_DAL = 10

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"B06034BF-82B1-4DDB-AA9E-E64DA0C5CA65",variableType:4}
 */
var TIPO_CERT_DETT_MAL_AL = 31

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"21488229-EADB-451B-BC6D-B09AB694B141",variableType:4}
 */
var TIPO_CERT_DETT_MAL_DRA = 45

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"98026AAC-7DE9-417C-A005-CEA3A454ED46",variableType:4}
 */
var TIPO_CERT_DETT_INF_DI = 5

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"1B0AB50B-FB41-47DF-8C7A-6F135E86C80F",variableType:4}
 */
var TIPO_CERT_DETT_INF_DAL = 27

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"55016C6F-6C2B-4A72-9589-20F271E7AFE0",variableType:4}
 */
var TIPO_CERT_DETT_INF_RPC = 43

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"889BD555-D11E-4376-9888-F9AFDC7C2572",variableType:4}
 */
var TIPO_CERT_DETT_INF_OLPG = 58

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"E92A378D-4B27-479B-93EE-EBDA1256E4E3",variableType:4}
 */
var TIPO_CERT_DETT_MAT_DPP = 22
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"72FCFFC7-70EB-47B9-A9B9-F9D8F58873EC",variableType:4}
 */
var TIPO_CERT_DETT_MAT_DEP = 42
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"E215DF4F-A9B9-498A-9E5E-FB9D886E1415",variableType:4}
 */
var TIPO_CERT_DETT_MAT_DI = 48
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"37FA6615-75EE-4568-8DCC-80A288F91C72",variableType:4}
 */
var TIPO_CERT_DETT_MAT_DPFA = 54
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"701703D2-ED3F-4E59-B423-959C6316E095",variableType:4}
 */
var TIPO_CERT_DETT_MAT_MI = 71
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"D7D37985-76C0-4072-A4CF-0326B2F53197",variableType:4}
 */
var TIPO_CERT_DETT_MAT_FASM = 79

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"54BABB2A-D12C-4DC4-8F68-DC91C0BD01C2",variableType:4}
 */
var TIPO_CERT_DETT_CM_DM = 2

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"74A941D9-2320-4F37-8436-99AC9947CFC4",variableType:4}
 */
var TIPO_CERT_DETT_CM_DRC = 24

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"46F6F00E-F95F-410C-AE98-84C76CF510A3",variableType:4}
 */
var TIPO_CERT_DETT_CM_OCPG = 56

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"873CC57A-C582-4F1F-A757-15188B6E2629",variableType:4}
 */
var EVENTO_CLASSE_CONGEDO_MATRIMONIALE = 79;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"AE87572C-5821-4069-BA56-BB81BB96F45F",variableType:4}
 */
var EVENTO_CLASSE_MALATTIA = 89;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"C1BA108D-BAA5-43EB-AC2C-56BB4C17DEFD",variableType:4}
 */
var EVENTO_CLASSE_INFORTUNIO = 85;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"E2A4E01C-8F2C-46A7-A285-58A96A49BCBF",variableType:4}
 */
var EVENTO_CLASSE_MATERNITA = 90;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"B98D0CA6-6876-45B0-9AB7-8FF929F027D4",variableType:4}
 */
var EVENTO_CLASSE_CONGEDO_PARENTALE = 91;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"F97224E0-F388-491B-A995-06E649589925",variableType:4}
 */
var EVENTO_CLASSE_CONGEDO_PATERNO = 130;

/**
 * @param {String} codiceCampo
 * @param {Number} idStorico
 * @param {String} [form]
 * 
 * @properties={typeid:24,uuid:"E0A98F69-24FF-418B-8240-75D19409DEE3"}
 */
function annotazioni(codiceCampo, idStorico, form)
{
	form = form || forms.storico_main.controller.getName();
	// Gestisci le annotazioni
	var url = WS_URL + '/Validatore/Annotazioni';	
	var response = validate(codiceCampo, idStorico, url, false, -1, form);	
	if(response && response.returnValue === true)
		forms[form].vAnnotazioni = response.message;
	
}

/**
 * @param {String} codiceCampo
 * @param {Number} idStorico
 * @param {String} [form]
 * 
 * @properties={typeid:24,uuid:"C80398B4-21A3-4F73-AAE6-3EEA632BE8D4"}
 */
function controlloCampo(codiceCampo, idStorico, form)
{
	form = form || forms.storico_main.controller.getName();
	
	// Gestisci il controllo del campo
	var url = WS_URL + '/Validatore/ControlloCampo';	
	var response = validate(codiceCampo, idStorico, url, false, forms[form].vIdStoricoDatiAggiuntivi, form);	
	if(response)
	{
		updateFormStatus(formatNullDate(response.formStatus), vFormDettaglioCertificato);
	
		//la situazione post primo controllo è bloccante : salviamo il messaggio ritornato e ricostruiamo la form
	    var msg = response.message;
	    forms[form].vErrorMessage = msg; //visualizziamo il messaggio precedente nell'area riservata alle comunicazioni di errore
	    msg != '' ?	forms[form].elements.btn_salva_cert.enabled = false : forms[form].elements.btn_salva_cert.enabled = true;
			    
	}
	
	return response.returnValue;
}

/**
 * @param {String} codiceCampo
 * @param {Number} idStorico
 * @param {String} [form]
 *
 * @properties={typeid:24,uuid:"EA87A94A-1A34-421D-ADC1-593D4310EFDA"}
 */
function propostaCampo(codiceCampo,idStorico, form)
{
	form = form || forms.storico_main.controller.getName();
	
	var url = WS_URL + '/Validatore/PropostaCampo';
	var response = validate(codiceCampo, idStorico, url, false, forms[form].vIdStoricoDatiAggiuntivi, form);
	if(response && response.returnValue === true)
	{
		response.success ? forms[form].elements.btn_salva_cert.enabled = true  
				           : forms[form].elements.btn_salva_cert.enabled = false;
		updateFormStatus(formatNullDate(response.formStatus), vFormDettaglioCertificato);
	}
	else
	{
		if(!forms[form].close)
		   forms[form].abilitaBtnSalva(true);
	}
	return response.returnValue && response.success;
}

/**
 * @properties={typeid:24,uuid:"C82E696D-BF27-4D5D-8677-87D976B45981"}
 */
function annotazioniControlloPropostaCampo(codiceCampo, idStorico, form)
{
	// Gestisci il primo controllo del campo ed eventuali proposte
	var url = WS_URL + '/Validatore/ControlloPropostaCampo';
	var response = validate(codiceCampo, idStorico, url, false, forms[form].vIdStoricoDatiAggiuntivi, form);
	if(response && response.returnValue === true)
	{
		//la situazione post primo controllo è bloccante : salviamo il messaggio ritornato e ricostruiamo la form
		var msg = response.message;
		forms[form].vErrorMessage = msg; //visualizziamo il messaggio precedente nell'area riservata alle comunicazioni di errore
		//msg == '' ? forms.storico_main.elements.btn_salva_cert.enabled = true  : forms.storico_main.elements.btn_salva_cert.enabled = false;
		response.success ? forms[form].elements.btn_salva_cert.enabled = true  : forms[form].elements.btn_salva_cert.enabled = false;
		updateFormStatus(formatNullDate(response.formStatus), vFormDettaglioCertificato);
				
	}
	else
	{
		if(!forms[form].close)
		   forms[form].abilitaBtnSalva(true);
	}
	
	forms[form].vAnnotazioni = response.annotazioni;
	
	return response.returnValue && response.success;
}

/**
 * Controlla se il  certificato di infortunio può implicare una ricaduta
 * 
 * @properties={typeid:24,uuid:"FBC32C66-D811-470E-9411-4D8493EC5542"}
 */
function controlloRicaduta(params){
	
	// Gestisci la validazione completa del certificato
	var url = WS_URL + '/Validatore/ControlloRicaduta';	
	
	return getWebServiceResponse(url,params);
}

/**
 * Elimina eventuali valori posti a CDate(0) nella fase precedente
 * 
 * @param {Array<{ Codice: String, Valore: String }>} formArray
 * 
 * @return formArray: Array<{ Codice: String, Valore: String }>
 * 
 * @properties={typeid:24,uuid:"D759629B-B403-4E09-A7AE-910424AAD10E"}
 */
function formatNullDate(formArray)
{
	for(var i=0; i < formArray.length; i++)
	{
	   if(formArray[i] && formArray[i]['Valore'] == "30/12/1899")
		  formArray[i]['Valore'] = "";
       // TODO HLAV intercetta il valore che altrimenti verrebbe esposto
//	   if(formArray[i]['Codice'] == 'HLAV' 
//		   && (formArray[i]['Valore'] == "-1" || formArray[i]['Valore'] == ""))
//       	   formArray[i]['Valore'] = 0,00;
		   
	}
    return formArray;
}

/**
 * @param 			params
 * @param {Boolean} [isRicaduta]
 * @param {Number} [idStoricoDatiAggiuntivi] 
 * 
 * @return {Number} L'id dello storico salvato 
 * 
 * @properties={typeid:24,uuid:"D76FCF7F-9556-4E07-8260-0D54AC53B9B1"}
 */
function validaCertificato(params, isRicaduta, idStoricoDatiAggiuntivi)
{
	// Gestisci la validazione completa del certificato
	var url = WS_URL + '/Validatore/ValidaCertificato';

	var response = validateCertificate(url, params, isRicaduta, idStoricoDatiAggiuntivi);	
	if (response.returnValue === true && response.success === false)
		updateFormStatus(formatNullDate(response.formStatus), vFormDettaglioCertificato);
	
	if(response.message !== '')
		globals.ma_utl_showWarningDialog(response.message,'i18n:hr.msg.attention');
	
	return response.idstorico;
}

/**
 * @param {String} codiceCampo
 * @param {Number} idStoricoCertificato
 * @param {String} url the service's url to call
 * @param {Boolean} [isRicaduta]
 * @param {Number} [idStoricoDatiAggiuntivi]
 * @param {String} [form]
 * 
 * @return {{ returnValue: Boolean, success: Boolean, message: String, annotazioni: String, formStatus: Array<{ Codice: String, Valore: String }>, idstorico: Number }}
 *
 * @properties={typeid:24,uuid:"5AA53751-ADB9-4C11-AB83-3318BAA63FCE"}
 */
function validate(codiceCampo, idStoricoCertificato, url, isRicaduta, idStoricoDatiAggiuntivi, form)
{	
	var params = (forms[form] || forms.storico_main).inizializzaParametriValidatore(codiceCampo, idStoricoCertificato, globals.EU_DATEFORMAT);
	
	params.isricaduta = isRicaduta || false;
	params.idstoricodatiaggiuntivi = idStoricoDatiAggiuntivi || -1;
	
	/** @type {{ returnValue: Boolean, success: Boolean, message: String, annotazioni: String, formStatus: Array<{ Codice: String, Valore: String }>, idstorico: Number }} */
	var response = globals.getWebServiceResponse(url, params);
	
	return response;
}

/**
 * @param 		   params
 * 
 * @return {Boolean} Il codice del certificato da validare
 * 
 * @properties={typeid:24,uuid:"407A742D-BB75-46E4-B554-DE4B7BA5F711"}
 */
function validaTipoCertificato(params)
{
	// Gestisci la validazione completa del certificato
	var url = WS_URL + '/Validatore/ValidaTipoCertificato';	
	var response = getWebServiceResponse(url, params);	
	if (response.message !== '')
	{
		globals.ma_utl_showErrorDialog(globals.formatForHtml(response.message),'i18n:hr.msg.attention');
		return false;
	}
	
	return true;
}

/**
 * @return {{ returnValue: Boolean, message: String, idstorico: Number }}
 * 
 * @properties={typeid:24,uuid:"8A050DB1-A855-4D2B-AB66-59F4A63FD8B8"}
 */
function eliminaCertificato(params)
{
	// Gestisci l'eliminazione del certificato
	var url = WS_URL + '/Storico/EliminaCertificato';	
	/** @type {{ returnValue: Boolean, message: String, idstorico: Number }} */
	var response = globals.getWebServiceResponse(url, params);	
	
	return response;
}

/**
 * Controlla se il certificato che si sta per inserire è compilato
 * in maniera corretta
 * 
 * @return String
 *  
 * @properties={typeid:24,uuid:"418DFF59-A7E1-460B-A884-40F4CF953215"}
 */
function controllaValiditaCampi(params)
{
	var url = WS_URL + '/Validatore/ControlloValiditaCampi';
	var response = globals.getWebServiceResponse(url,params);
	
	return response;
}

/**
 * @param {String}  url the service's url to call
 * @param 			params
 * @param {Boolean} [isRicaduta]
 * @param {Number}  [idStoricoDatiAggiuntivi]
 * 
 * @return {{ returnValue: Boolean, success: Boolean, message: String, annotazioni: String, formStatus: Array<{ Codice: String, Valore: String }>, idstorico: Number }}
 *
 * @properties={typeid:24,uuid:"A1305CF1-C95E-4ABA-9A2D-2B2930A0F8FF"}
 */
function validateCertificate(url, params, isRicaduta, idStoricoDatiAggiuntivi)
{	
	params.isricaduta = isRicaduta || false;
	params.idstoricodatiaggiuntivi = idStoricoDatiAggiuntivi || -1;
	
	/** @type {{ returnValue: Boolean, success: Boolean, message: String, annotazioni: String, formStatus: Array<{ Codice: String, Valore: String }>, idstorico: Number }} */
	var response = globals.getWebServiceResponse(url, params);
	
	return response;
}

/**
 * @param {Number} idStoricoCertificato
 * @param {String} url the service's url to call
 * 
 * @return {{ returnValue: Boolean, success: Boolean, message: String, annotazioni: String, formStatus: Array<{ Codice: String, Valore: String }>, idstorico: Number }}
 *
 * @properties={typeid:24,uuid:"6BB95873-A703-40E2-AEFC-B0BE98553D53"}
 */
function validateTipoCertificato(idStoricoCertificato, url)
{	
	var params = forms.storico_main.inizializzaParametriValidatoreTipoCertificato(idStoricoCertificato);
	/** @type {{ returnValue: Boolean, success: Boolean, message: String, annotazioni: String, formStatus: Array<{ Codice: String, Valore: String }>, idstorico: Number }} */
	var response = globals.getWebServiceResponse(url, params);
	
	return response;
}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"ADBC029A-3D9F-493C-9E32-852980052C45"}
 * @AllowToRunInFind
 */
function onFocusGained(event)
{
	var returnVal = true;
	
	var frmName = event.getFormName();
	var arrSeqElems = forms[frmName].controller.getTabSequence();
	/** @type {RuntimeForm} */
	var mainForm     = forms[frmName].getMainForm();
	var mainFormName = mainForm.controller.getName();
	
	returnVal = globals.propostaCampo(arrSeqElems[0], forms[frmName]['idstoricocertificato'], mainFormName);
		
	return returnVal;
}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"51C118C6-5B44-48B1-8B8E-FE6449312E92"}
 * @AllowToRunInFind
 */
function onFocusLost(event)
{
	//TODO recupera il campo che è stato modificato
	var elemName = event.getElementName();
	
	//TODO recupera dagli informativi eventi lunghi la/le operazione/i da effettuare
	/** @type {JSFoundSet<db:/ma_presenze/e2informativieventilunghi>} */
	var infoFs = databaseManager.getFoundSet(globals.Server.MA_PRESENZE,'e2informativieventilunghi');
	if(infoFs.find())
	{
		infoFs.ideventoclasse = forms.storico_main.ideventoclasse;
		infoFs.applicasu = elemName;
		
		if(infoFs.search())
		{
			if(infoFs.solomessaggio)
				globals.annotazioni(event.getElementName(),forms[event.getFormName()]['idstoricocertificato']);
			
			if(infoFs.tipocontrollo == 1)
				return globals.controlloCampo(event.getElementName(),forms[event.getFormName()]['idstoricocertificato']);
		}
	}
	
	return true;
}

/**
 * @param {Object} oldValue
 * @param {Object} newValue
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"6A22F612-EAE7-433D-9E8E-F5D73ABCDB8F"}
 */
function onFocusGainedLost(oldValue, newValue, event)
{
	var returnVal = true;
	if(newValue instanceof Date && newValue['getFullYear']() < 1000)
			return false;
	
	var currElemName = event.getElementName();
	var frmName = event.getFormName();
	/** @type {RuntimeForm} */
	var mainForm     = forms[frmName].getMainForm();
	var mainFormName = mainForm.controller.getName();
	
	var sqlInfoEL = "SELECT soloMessaggio,tipocontrollo FROM E2InformativiEventiLunghi WHERE idEventoClasse = ?\
	                  AND CodiceCertificato = ? AND applicasu = ?";
	var arrInfoEL = [forms.storico_main.vIdEventoClasse, forms.storico_main.vCodiceCertificato, currElemName];
	var dsInfoEL = databaseManager.getDataSetByQuery(globals.Server.MA_PRESENZE, sqlInfoEL, arrInfoEL, -1);
	if (dsInfoEL.getMaxRowIndex()) {
		// annotazioni
		globals.annotazioni(currElemName, forms[frmName]['idstoricocertificato']);
	    // Ticket 16933
		// controllo uscita
		returnVal = globals.controlloCampo(currElemName, forms[frmName]['idstoricocertificato']);
	    // se il controllo ha dato esito negativo esci dalla routine
		if(!returnVal)
	       return returnVal;	
	}
	var arrSeqElems = forms[frmName].controller.getTabSequence();
	var nextElemSeqIndex = arrSeqElems.indexOf(currElemName) != -1 && arrSeqElems.indexOf(currElemName) + 1 != arrSeqElems.length ? arrSeqElems.indexOf(currElemName) + 1 : null;
	if (nextElemSeqIndex) {
		var nextElemName = arrSeqElems[nextElemSeqIndex];
		arrInfoEL = [forms.storico_main.vIdEventoClasse, forms.storico_main.vCodiceCertificato, nextElemName];
		dsInfoEL = databaseManager.getDataSetByQuery(globals.Server.MA_PRESENZE, sqlInfoEL, arrInfoEL, -1);
		if (dsInfoEL.getValue(1, 2) == 0)
			returnVal = globals.propostaCampo(nextElemName, forms[frmName]['idstoricocertificato'], mainFormName);
	}
	
	return returnVal;
	
}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"FCAD3E64-BB10-482D-8F60-63AD9036466C"}
 */
function onActionFocusGainedLost(event)
{
	application.output(event.getType()); 
}

/**
 * Ricostruisce la form specificata a partire dall'oggetto
 * restituito dal Web Service di validazione
 * 
 * @param {Array<{ Codice: String, Valore: String }>} newFormStatus
 * @param {String} formName
 * 
 * @properties={typeid:24,uuid:"0889481A-E123-41A7-8309-BD9BF3D3E6F5"}
 * @SuppressWarnings(deprecated)
 */
function updateFormStatus(newFormStatus, formName)
{
	// Per ogni elemento della form, assegna il nuovo valore
	var jsForm = solutionModel.getForm(formName);
	for (var i = 0; jsForm && i < newFormStatus.length; i++)
	{	
		var elem = newFormStatus[i];
		if (elem)
		{
			var jsField = jsForm.getField(elem.Codice);
			if (jsField && jsField.dataProviderID && jsForm.getVariable(jsField.dataProviderID))
			{
				switch(jsForm.getVariable(jsField.dataProviderID).variableType)
				{
					case JSVariable.DATETIME:
						if(elem.Valore)
							try
							{
								if(elem.Valore == '00:00:00' || elem.Valore == '00.00.00')
								{
//									application.output('Storico date with unparseable date 00:00:00 [Codice : ' + elem.Codice + ' , Valore : ' + elem.Valore + ']',LOGGINGLEVEL.ERROR);
									elem.Valore = null;
								}
								else
									elem.Valore = utils.parseDate(elem.Valore, globals.EU_DATEFORMAT);
							}
							catch(ex)	// handle exceptional cases (e.g. 00:00:00)
							{
								elem.Valore = null;
							}
						else
						   elem.Valore = null;
																	
						break;
					
					case JSVariable.INTEGER:
						elem.Valore = parseInt(elem.Valore, 10) || 0;
						if(elem.Valore == -1)
							elem.Valore = 0;
						
						break;
						
					case JSVariable.NUMBER:
						var elemStr = elem.Valore;
						elemStr = utils.stringReplace(elemStr,',','.');
//						elem.Valore = parseFloat(elem.Valore) || 0.00;
						elem.Valore = parseFloat(elemStr) || 0.00;
						if(elem.Valore == -1)
							elem.Valore = 0.00;
				}
			}
			
			if(jsForm.getField(elem.Codice) && forms[formName])
				forms[formName][jsForm.getField(elem.Codice).dataProviderID] = elem.Valore;
		}
	}	
}

/**
 * 
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"1A5FCC39-C0A9-4D0C-B575-94086F43CB16"}
 */
function confermaCertificati(params, modificato)
{
	if(modificato)
	{
		var url = WS_MULTI_URL + '/Storico/ConfermaCertificati';
		if(params.sync)
		{
			var    response = globals.getWebServiceResponse(url + 'Sync', params);
			return response.returnValue;
		}
		else
			globals.addJsonWebServiceJob(url,
				                         params,
										 vUpdateOperationStatusFunction);
	}   
    return true;
}

/**
 * Gestisce la visualizzazione dello storico relativamente
 * al certificato selezionato  
 *
 * @param {Number} idEventoClasse
 * @param {Number} giorno
 * @param {Number} idDipendente
 * @param {Number} idDitta
 * @param {Number} [periodo]
 *
 * @properties={typeid:24,uuid:"3B5901A4-5633-4679-B9B8-342E3B632690"}
 * @AllowToRunInFind
 */
function showStorico(idEventoClasse, giorno, idDipendente, idDitta, periodo)
{
	//nel caso di nuovo congedo parentale si deve selezionare il figlio associato
	//oppure si devono inserire i dati del nuovo figlio
	periodo = periodo || globals.getPeriodo();
    
	forms.storico_main.init(idDipendente, idDitta, periodo, idEventoClasse);
	
    if(forms.storico_main.inizializzaRiepilogoStorico(idEventoClasse, giorno, idDipendente))
    {	
    	//nel caso di congedo parentale vanno specificati alcuni dati aggiuntivi relativi al figlio
    	//per il quale si vuole richiedere il periodo di congedo
    	var winLkpSelFiglio = application.createWindow('win_storico_dati_aggiuntivi',JSWindow.MODAL_DIALOG)
		winLkpSelFiglio.setInitialBounds(JSWindow.DEFAULT,JSWindow.DEFAULT,410,300)
		winLkpSelFiglio.title = 'Selezione dati aggiuntivi congedo'
			
    	/** @type {JSFoundSet<db:/ma_presenze/storico_datiaggiuntivi>} */
    	var fsDatiAgg = databaseManager.getFoundSet(globals.Server.MA_PRESENZE, 'storico_datiaggiuntivi');
    	if(fsDatiAgg.find())
    	{
    		fsDatiAgg.idlavoratore = idDipendente;
    		fsDatiAgg.search();
    	}
    	else
    	{
    		globals.ma_utl_showErrorDialog('Dipendente con id ' + idDipendente + ' non trovato', 'Errore');
    		return;
    	}
    	
		forms.storico_dati_aggiuntivi_tab.foundset.loadRecords(fsDatiAgg);
		
		//se sono già presenti dati aggiuntivi 
		if(forms.storico_dati_aggiuntivi_tab.foundset.getSize() > 0)
		{
			vWinStoricoDatiAgg = globals.ma_utl_showFormInDialog(forms.storico_dati_aggiuntivi_scelta_tab.controller.getName(), 'Selezione dati aggiuntivi congedo');
			//apri la finestra di selezione dati aggiuntivi in modalità selezione figli esistenti
//    		forms.storico_dati_aggiuntivi_tab.abilitaPulsanti(false);    		
    	}
		else
		{    		
    		//apri la finestra di selezione dati aggiuntivi in modalità inserimento nuovo figlio
			forms.storico_dati_aggiuntivi_tab.foundset.newRecord();
			forms.storico_dati_aggiuntivi_tab.foundset.idlavoratore = idDipendente;
			globals.ma_utl_setStatus(globals.Status.EDIT,'storico_dati_aggiuntivi_tab_dtl');    		
			vWinStoricoDatiAgg = globals.ma_utl_showFormInDialog(forms.storico_dati_aggiuntivi_tab.controller.getName(), 'Inserisci dati aggiuntivi congedo');
		}
    	
    	
	   
    }
    else
       	vWinStorico = globals.ma_utl_showFormInDialog(forms.storico_main.controller.getName(),'Gestisci certificato'); 		
        
}

/**
 * @AllowToRunInFind
 * 
 * Restituisce l'identificativo dei dati aggiuntivi associato all'identificativo del certificato padre
 * (nel caso di certificati di congedo parentale)
 * 
 * @param {Number} idStoricoPadre
 *
 * @return Number
 * 
 * @properties={typeid:24,uuid:"28F27DEC-F235-459B-8CB0-DCF67BEBA2DA"}
 */
function getIdDatiAggiuntiviFromStoricoPadre(idStoricoPadre)
{
	/** @type{JSFoundSet<db:/ma_presenze/storico_certificatidettaglio>} */
	var fs = databaseManager.getFoundSet(globals.Server.MA_PRESENZE,globals.Table.STORICO_CERTIFICATI_DETTAGLIO);
	if(fs.find())
	{
		fs.idstoricocertificato = idStoricoPadre;
		fs.idstoricotipocertificatodettaglio = 64;
		if(fs.search())
			return parseInt(fs.valore,10);
	}
	
	return -1;
}

/**
 * @AllowToRunInFind
 * 
 * Restituisce il nominativo a partire dai dati inseriti per il figlio
 * 
 * @param {Number} idStoricoDatiAggiuntivi
 * 
 * @return {String}
 * 
 * @properties={typeid:24,uuid:"838113BC-0F1F-4A67-832C-3B5DC97BEC6D"}
 */
function getNominativoFiglioDatiAggiuntivi(idStoricoDatiAggiuntivi)
{
	/** @type {JSFoundSet<db:/ma_presenze/storico_datiaggiuntivi>}*/
	var fs = databaseManager.getFoundSet(globals.Server.MA_PRESENZE,globals.Table.STORICO_DATI_AGGIUNTIVI);
	if(fs.find())
	{
		fs.idstoricodatiaggiuntivi = idStoricoDatiAggiuntivi;
		if(fs.search())
			return fs.cognome + ' ' + fs.nome;
	}
	
	return '';
}

/**
 * @AllowToRunInFind
 * 
 * Restituisce il foundset con i dati aggiuntivi relativi ai figli
 * 
 * @param {Number} idLavoratore
 * @param {Date} dataEffettivaParto
 * 
 * @return {JSFoundset<db:/ma_presenze/storico_datiaggiuntivi>}
 * 
 * @properties={typeid:24,uuid:"E4697D60-D402-424A-BC97-9D382445784E"}
 */
function getDatiAggiuntiviFigli(idLavoratore,dataEffettivaParto)
{
	/** @type {JSFoundSet<db:/ma_presenze/storico_datiaggiuntivi>}*/
	var fs = databaseManager.getFoundSet(globals.Server.MA_PRESENZE,globals.Table.STORICO_DATI_AGGIUNTIVI);
	if(fs.find())
	{
		fs.idlavoratore = idLavoratore;
		fs.data = globals.dateFormat(dataEffettivaParto,globals.ISO_DATEFORMAT) + '|yyyyMMdd';
		if(fs.search())
			return fs;
	}
	
	return null;
}

/**
 * @AllowToRunInFind
 * 
 * Restituisce true se il codice fiscale passato è già stato utilizzato, false altrimenti
 * 
 * @param {String} codiceFiscale
 *
 * @properties={typeid:24,uuid:"4289543C-4345-4815-A758-3DA1C87FCB60"}
 */
function isCodiceFiscaleEsistente(codiceFiscale)
{
	/** @type {JSFoundSet<db:/ma_presenze/storico_datiaggiuntivi>}*/
	var fs = databaseManager.getFoundSet(globals.Server.MA_PRESENZE,globals.Table.STORICO_DATI_AGGIUNTIVI);
	if(fs.find())
	{
		fs.codicefiscale = codiceFiscale;
		if(fs.search())
			return true;
	}	
	return false;
}