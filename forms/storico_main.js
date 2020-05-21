/**
 * @properties={typeid:35,uuid:"13167F43-1FBC-4456-B078-37493363582C",variableType:-4}
 */
var disabled = false;

/**
 * 
 * @type {Boolean}
 *
 * @properties={typeid:35,uuid:"857A2287-5471-42A0-8077-6C10CDDF222B",variableType:-4}
 */
var close = true;

/** 
 * @type {String}
 *
 * @properties={typeid:35,uuid:"E942297F-9765-4B59-9A6E-D7A453661028"}
 */
var vFormDettaglioCertificato = 'storico_cert_certif_corr_dtl';

/**
 * @type {Number}
 * 
 * @properties={typeid:35,uuid:"A7C878FA-C18F-4406-9EAF-EA2AD17B7136",variableType:8}
 */
var vIdEventoClasse = null;

/**
 * @Array<Date>
 * 
 * @properties={typeid:35,uuid:"49017D55-79D4-423D-AA33-250EED0AC1F9",variableType:-4}
 */
var vElencoGiorniRicalcolo = [];

/**
 * @properties={typeid:35,uuid:"926575A2-0BCC-4BC3-8620-B88DE2E3DE57",variableType:-4}
 */
var vChiuso = false;

/**
 * @type {String}
 * 
 * @properties={typeid:35,uuid:"64DB8B34-AFA1-49B2-9488-A8F085E2811B"}
 */
var vDescrizioneCertificato = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"6DC7A116-B118-46EC-8E81-E7B4CBB6AAE3"}
 */
var vTipoCertificato = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"842EFE54-CCB8-4A1B-9FBC-4C50773E307B"}
 */
var vTipoGiornaliera = globals.TipoGiornaliera.NORMALE;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"A7D40993-6573-40F2-B360-9E25452ABC6C"}
 */
var lkpWinCertTitle = '';

/**
 * @type {{
 *		idDipendenti: Array<Number>,
 *		idEventoClasse: Number,
 *		codCertitificato: String,
 *		codCampo: String,
 *		formStatus: Array<{Codice: String, Valore: String}>
 *  }}
 * 
 * @properties={typeid:35,uuid:"D6AA8F77-E583-4747-8010-2EBD46F0AB4B",variableType:-4}
 */
var vParametriCertificato = new Object()

/**
 * @properties={typeid:35,uuid:"F259A968-D77B-4FC2-9055-F7AE84916ECC",variableType:-4}
 */
var strutturaRiepilogo = new Object()

/**
 * @type {Array}
 * 
 * @properties={typeid:35,uuid:"FFEB55D5-929A-458C-BD75-44309E66165B",variableType:-4}
 */
var vParentRecord = [];

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"4D751BA9-9912-4541-9E7E-A86D9B1D9BEF",variableType:4}
 */
var vIdLavoratore = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"DE86130C-816D-4532-888C-A6ECC08F66E2",variableType:4}
 */
var vIdDitta = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"0A134B2F-2C1A-45E1-AA34-6301F48A5671",variableType:4}
 */
var vPeriodo = 0;

/**
 * @type {String}
 * 
 * @properties={typeid:35,uuid:"C13143D9-46C9-4C0F-9CA1-669A040A62F3"}
 */
var vCodiceCertificato = null;

/**
 * @type {Boolean}
 *
 * @properties={typeid:35,uuid:"6B255F05-61F3-4AAA-A899-97DA1827E521",variableType:-4}
 */
var vOriginaleModificato = false;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"53C1CEE5-B1AE-4C34-B664-3CF58E039E39",variableType:4}
 */
var vIdStoricoPadre = -1;

/**
 * @type {Boolean}
 *
 * @properties={typeid:35,uuid:"F45279C3-64EC-49B0-9967-8F4310D3CCF0",variableType:-4}
 */
var vNuovoCertificato = false;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"ACFB9C8D-E7F9-409B-9935-C5CBFD39F16E",variableType:4}
 */
var vIdStoricoDatiAggiuntivi = -1;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"9804A427-A7F5-483D-AC5A-2099734CBDDA"}
 */
var vErrorMessage = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"4C995488-4C85-4367-B29A-D910CF77EB77"}
 */
var vAnnotazioni = '';

/**
 * @type {Boolean}
 *
 * @properties={typeid:35,uuid:"A25ED657-8736-4C53-9D5D-AA919F66D720",variableType:-4}
 */
var vRiepilogoDaData = false;

/**
 * @properties={typeid:24,uuid:"E09701F4-16C2-424B-92DE-8C5DF3378795"}
 */
function getStyle()
{
	return 'leaf_style';
}

/**
 * @param {String} _frmName
 * @param {Array} _arrElems
 * @param {Boolean} _abilita
 *
 * @properties={typeid:24,uuid:"73C91610-BE4C-416B-94DD-1518D99147C0"}
 */
function abilitaElementi(_frmName,_arrElems,_abilita){

	for (var i=0;i<_arrElems.length;i++){
		
		/** type {Object} */
		var currObj = forms[_frmName].elements[_arrElems[i]]
		currObj.enabled = _abilita
				
	}
	
}

/**
 * Abilita o disabilita i pulsanti di aggiungi/modifica/elimina certificato
 * 
 * @param {Boolean} abilita
 *
 * @properties={typeid:24,uuid:"59BCC655-F59B-41A6-B6CB-FE551AB43D73"}
 */
function abilitaBtnOperazioni(abilita)
{
	elements.btn_nuovo_cert.enabled = abilita;
    elements.btn_modif_cert.enabled = abilita && forms[elements.tab_storico_riep.getTabFormNameAt(1)].foundset.getSize() > 0;
    elements.btn_canc_cert.enabled = abilita && forms[elements.tab_storico_riep.getTabFormNameAt(1)].foundset.getSize() > 0;
    elements.btn_find_cert.enabled = abilita;
}

/**
 * @properties={typeid:24,uuid:"7166699C-4CEF-4015-A9C2-EA8795C1C2B3"}
 */
function abilitaBtnOperazioniNessunCertificato()
{
	elements.btn_nuovo_cert.enabled = true;
	elements.btn_modif_cert.enabled = false;
	elements.btn_canc_cert.enabled = false;
}

/**
 * @properties={typeid:24,uuid:"12F3491C-7B7A-4B45-B922-DFB7E3388571"}
 */
function abilitaBtnOperazioniConCertificato()
{
	elements.btn_nuovo_cert.enabled = true;
	elements.btn_modif_cert.enabled = true;
	elements.btn_canc_cert.enabled = true;
}

/**
 * Abilita o disabilita il pulsante di scelta del tipo certificato
 * 
 * @param {Boolean} abilita
 *
 * @properties={typeid:24,uuid:"0F820919-1E63-42C1-A275-D461B8854C07"}
 */
function abilitaBtnTipoCertificato(abilita)
{
	controller.readOnly = !abilita;
	elements.fld_tipoCert.editable = abilita;
	elements.btn_cert.enabled = abilita;
	
	var status = abilita ? globals.Status.EDIT : globals.Status.BROWSE;
	
	globals.svy_nav_setFieldsColor(controller.getName(),status);
	controller.focusField('fld_tipoCert',false);
}

/**
 * Abilita o disabilita i pulsanti della form.
 *  
 * @param {Boolean} abilitaOperazioni per abilitare i pulsanti di creazione/modifica/eliminazione certificato
 * @param {Boolean} abilitaTipoCertificato per abilitare il pulsante di scelta del tipo certificato
 * @param {Boolean} abilitaSalvaAnnulla per abilitare i pulsanti di salvataggio/annullamento certificato
 *
 * @properties={typeid:24,uuid:"51BDD17A-85AE-4BE0-AC6A-C70681CA4913"}
 */
function abilitaPulsanti(abilitaOperazioni, abilitaTipoCertificato, abilitaSalvaAnnulla)
{	
	abilitaBtnOperazioni(abilitaOperazioni);
	abilitaBtnSalvaAnnulla(abilitaSalvaAnnulla);
    abilitaBtnTipoCertificato(abilitaTipoCertificato);
}

/**
 * @properties={typeid:24,uuid:"2BFE5EE7-6175-4C90-A222-1E7C05C3A30E"}
 */
function getFormRiepilogo()
{
	return forms[elements.tab_storico_riep.getTabFormNameAt(1)];
}

/**
 * @param {String} [tipoGiornaliera]
 * 
 * @properties={typeid:24,uuid:"5E4F6DD8-A33D-4063-9FFC-6E00F533A486"}
 * @AllowToRunInFind
 */
function confermaGestioneCertificato(tipoGiornaliera)
{
	vOriginaleModificato = true;
	// recuperiamo i valori immessi per i parametri
	var params = inizializzaParametriValidatore('', -1);
	
	if(tipoGiornaliera)
		params.tipogiornaliera = tipoGiornaliera || vTipoGiornaliera;
	
	// verifichiamo la validità dei valori immessi : se non validi segnaliamo a video
	var response = globals.controllaValiditaCampi(params);
	if (response) 
	{	
		vChiuso = response['chiuso'];
					
		var idStoricoCertificato = vNuovoCertificato ? -1 : getFormRiepilogo().foundset['idstorico'];

		params   = inizializzaParametriValidatore('', idStoricoCertificato);
		
		// controlla eventuale ricaduta infortunio
		if(params.idEventoClasse === globals.EventoClasse.INFORTUNIO)
		{
			var ricaduta = globals.controlloRicaduta(params);
			var answer = false;
			if(ricaduta && response['message'])
				answer = globals.ma_utl_showYesNoQuestion(response['message'], 'Informazioni certificato');
		}
		response = globals.validaCertificato(params, answer, vIdStoricoDatiAggiuntivi);
		
		var newIdStoricoCertificato = response;
		if (newIdStoricoCertificato && newIdStoricoCertificato != -1) 
		{
			vElencoGiorniRicalcolo = response['elencogiorniricalcolo'];
				
			/** @type {JSFoundSet<db:/ma_presenze/storico_certificatidettaglio>} */
			var fs = databaseManager.getFoundSet(globals.Server.MA_PRESENZE,globals.Table.STORICO_CERTIFICATI_DETTAGLIO);
		    if (fs && fs.find())
		    {
		    	fs.idstoricocertificato = newIdStoricoCertificato;
		    	fs.search();
		    	
		    	databaseManager.refreshRecordFromDatabase(fs,-1);
		    }
		    
			inizializzaRiepilogo(newIdStoricoCertificato);
			exitEditMode();
			
			// prova per gestione certificati DI/CM che rimangono in edit...
			if (forms[vFormDettaglioCertificato])
				globals.ma_utl_setStatus(globals.Status.BROWSE,vFormDettaglioCertificato);
				
		}
		else 
		if (newIdStoricoCertificato == 0)
		{
			globals.ma_utl_showErrorDialog('Costruzione riepilogo certificati non riuscita, riprovare', 'Conferma certificati')
			exitEditMode();
		} 
		else
			globals.ma_utl_showErrorDialog('Errore durante il salvataggio del certificato, controllare che non ne sia presente uno avente gli stessi parametri tra quelli esistenti', 'Conferma certificati');
		
	} 
	else
		globals.ma_utl_showWarningDialog(response['message'], 'Conferma certificati');
	
	return response && response.success;
}



/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @protected 
 *
 * @properties={typeid:24,uuid:"CC372938-0EFF-4263-84CC-49C970925C13"}
 */
function annullaGestioneCertificato(event)
{
	vNuovoCertificato = false;
	exitEditMode(event);
}

/**
 * @param {JSEvent} [event]
 * 
 * @properties={typeid:24,uuid:"38ABAA86-5DAF-4733-85BD-B2B04A7E34AE"}
 */
function exitEditMode(event)
{	
	//abilita la chiusura della dialog con la x
	close = true;
	
	// Enable cud, disable lookup, disable save/cancel
	abilitaPulsanti(true,false,false);
		
	// Riabilita il riepilogo
	elements.tab_storico_riep.enabled = true;
	elements.btn_ricalcola_giornaliera.enabled = true;
	elements.btn_annulla_cert.enabled = false;
	
	// Cancella eventuali annotazioni od errori presenti
	vAnnotazioni = '';
	vErrorMessage = '';
	elements.btn_salva_cert.enabled = true;
	
	var riepilogoFs = forms[elements.tab_storico_riep.getTabFormNameAt(1)].foundset;
	if(riepilogoFs && riepilogoFs.getSize() > 0)
	{
		// Annulla l'eventuale inserimento in corso e ripristina l'ultimo dettaglio mostrato
		vNuovoCertificato = false;
		updateDettaglioCertificato(riepilogoFs['codice'], riepilogoFs['idstorico']);
	}
	else if(riepilogoFs && riepilogoFs.getSize() === 0)
		svuotaDettaglioCertificato();
	
	if(forms[vFormDettaglioCertificato])
		globals.ma_utl_setStatus(globals.Status.BROWSE, vFormDettaglioCertificato);
	
	abilitaBtnSalva(false);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 * @private
 *
 * @properties={typeid:24,uuid:"DF4BD0DB-7728-4E1F-A766-BB2979183B4A"}
 * @AllowToRunInFind
 * @SuppressWarnings(unused)
 */
function apriRiepilogoStorico(event)
{
	var _sqlIdSto = 'SELECT * FROM [dbo].[F_Sto_IDPadre_Riepilogo](?,?) \
	                 ORDER BY DataPartenza DESC';
	var _arrPar = [vIdLavoratore, vIdEventoClasse];
	var _dsRiepSto = databaseManager.getDataSetByQuery(globals.Server.MA_PRESENZE, _sqlIdSto, _arrPar, 100);
	var _dSourceRiepSto = _dsRiepSto.createDataSource('_dSourceRiepSto');

	var _frmRiepSize = 500;
	var _frmRiepTitle = '';

	var _tabFormName = '';
	/** @type JSForm */
	var _tabForm;

	forms.storico_riepilogo_tab.elements.tab_cont.removeAllTabs();

	switch (vIdEventoClasse) {

	case globals.EventoClasse.MATRIMONIALE:
		_tabFormName = 'storico_riepilogo_congedo_matrimoniale_tbl_temp';
		if (forms[_tabFormName] != null) {
			history.removeForm(_tabFormName);
			solutionModel.removeForm(_tabFormName);
		}
		_tabForm = solutionModel.cloneForm(_tabFormName, solutionModel.getForm('storico_riepilogo_congedo_matrimoniale_tbl'));
		_frmRiepTitle = 'Seleziona periodo di congedo matrimoniale';

		break;
	case globals.EventoClasse.INFORTUNIO:
		_tabFormName = 'storico_riepilogo_infortunio_tbl_temp';
		if (forms[_tabFormName] != null) {
			history.removeForm(_tabFormName);
			solutionModel.removeForm(_tabFormName);
		}
		
		_tabForm = solutionModel.cloneForm(_tabFormName, solutionModel.getForm('storico_riepilogo_infortunio_tbl'));
		_frmRiepTitle = 'Seleziona periodo di infortunio';
		_frmRiepSize = 660;
		
		break;
	case globals.EventoClasse.MALATTIA:
		_tabFormName = 'storico_riepilogo_malattia_tbl_temp';
		if (forms[_tabFormName] != null) {
			history.removeForm(_tabFormName);
			solutionModel.removeForm(_tabFormName);
		}
		
		_tabForm = solutionModel.cloneForm(_tabFormName, solutionModel.getForm('storico_riepilogo_malattia_tbl'));
		_frmRiepTitle = 'Seleziona periodo di malattia';
		
		break;
	case globals.EventoClasse.MATERNITA:
		_tabFormName = 'storico_riepilogo_maternita_tbl_temp';
		if (forms[_tabFormName] != null) {
			history.removeForm(_tabFormName);
			solutionModel.removeForm(_tabFormName);
		}
		
		_tabForm = solutionModel.cloneForm(_tabFormName, solutionModel.getForm('storico_riepilogo_maternita_tbl'));
		_frmRiepTitle = 'Seleziona periodo di maternità';
		_frmRiepSize = 2000;
		
		break;
	case globals.EventoClasse.PARENTALE:
		break;
	case globals.EventoClasse.PARENTALE_PATERNO:
	    break;
	default:
		application.output('Error in getting idEventoClasse on apriRiepilogoStorico');
	}

	if (vIdEventoClasse != globals.EventoClasse.PARENTALE
			&& vIdEventoClasse != globals.EventoClasse.PARENTALE_PATERNO)
	{
		var jsForm = solutionModel.getForm(_tabFormName);
		jsForm.dataSource = _dSourceRiepSto;

		forms.storico_riepilogo_tab.elements.tab_cont.addTab(_tabFormName, 'tabRiepilogoQualcosa', 'TABBBB', '', null, '', '', null, 1);

		globals.ma_utl_showFormInDialog(forms.storico_riepilogo_tab.controller.getName(), _frmRiepTitle,null,null,_frmRiepSize);

	}else
	{
		var frmDatiAgg = forms.storico_dati_aggiuntivi_scelta_tab;
		var fsDatiAgg = frmDatiAgg.foundset;
		if(fsDatiAgg.find())
		{
			fsDatiAgg.idlavoratore = vIdLavoratore;
			fsDatiAgg.search();
		}
		frmDatiAgg.vIdEventoClasse = vIdEventoClasse;
		globals.ma_utl_showFormInDialog(frmDatiAgg.controller.getName(), 'Dati aggiuntivi figlio');
    }
}

/**
 * @properties={typeid:24,uuid:"8AA1ADFF-33E6-487D-A2D5-DA4F4770260F"}
 */
function init(idDipendente, idDitta, periodo, idEventoClasse)
{
	if(vIdLavoratore == idDipendente && vIdDitta == idDitta && vPeriodo == periodo && vIdEventoClasse == idEventoClasse)
		return false;
	
	vIdLavoratore = idDipendente;
	vIdDitta = idDitta;
	vPeriodo = periodo;
	vIdEventoClasse = idEventoClasse;
	
	return true;
}

/**
 * @param {Number} idEventoClasse
 * @param {Number} giorno
 * @param {Number} idLavoratore
 * 
 * @return {Boolean} true se è necessario gestire i figli per il congedo parentale
 * 
 * @properties={typeid:24,uuid:"BF4E2A62-9039-471E-AE9C-210C97C56E6E"}
 */
function inizializzaRiepilogoStorico(idEventoClasse, giorno, idLavoratore)
{
	vIdEventoClasse = idEventoClasse;
	
	/** type {Number} */
	var anno = globals.getAnno();
	/** type {Number} */
	var mese = globals.getMese();
	
	var dataSelezionata = new Date(anno ,mese - 1, giorno);
	var sql = "SELECT * FROM [dbo].[F_Sto_IDPadre] (?,?,?)";
	
    /** type {Number} */
	var idStoricoPadre = databaseManager.getDataSetByQuery(globals.Server.MA_PRESENZE, sql, [idLavoratore, globals.dateFormat(dataSelezionata,globals.ISO_DATEFORMAT), idEventoClasse], -1).getValue(1, 1);
	
	return inizializzaRiepilogo(idStoricoPadre, true);
}

/**
 * @param {Number} idStoricoPadre l'id del certificato padre dal quale inizializzare il riepilogo
 * @param {Boolean} [addCertificato] true se si vuole abilitare l'inserimento automatico nel caso non esista un padre
 * @return {Boolean} <code>true</code> se è necessario aprire la finestre di selezione figlio
 * 
 * @properties={typeid:24,uuid:"46C12B08-8494-4FA8-9986-FE73C0453606"}
 * @SuppressWarnings(unused)
 */
function inizializzaRiepilogo(idStoricoPadre, addCertificato)
{
	// Annulla l'eventuale inserimento in corso
	vNuovoCertificato = false;
	
	// Memorizza l'id del certificato padre
	vIdStoricoPadre = idStoricoPadre;
	
	// TODO caso congedo parentale : recuperare i dati aggiuntivi del figlio
	if(vIdEventoClasse == globals.EventoClasse.PARENTALE)
	   vIdStoricoDatiAggiuntivi = globals.getIdDatiAggiuntiviFromStoricoPadre(idStoricoPadre);
	
	var apriSelezioneFiglio;
	if(idStoricoPadre)
	{
		// Se è presente un padre, costruisci la form di riepilogo
		var url =  globals.WS_URL + "/Storico/CostruisciRiepilogo";
		strutturaRiepilogo =
		{
			idditta         :   vIdDitta,
			iddipendenti	:	[vIdLavoratore],
			idstorico		:	idStoricoPadre,
			periodo			:	vPeriodo,
			ideventoclasse	:	vIdEventoClasse,
			tipoconnessione :   globals._tipoConnessione
		};
		
		var response = globals.getWebServiceResponse(url,strutturaRiepilogo);
		if (response && response.returnValue === true)
		{
			var formName = getRiepilogoFormName();
			var tempFormName = [formName, application.getUUID()].join('_');
			
			elements.tab_storico_riep.removeAllTabs();
			
			var tempForm = solutionModel.cloneForm(tempFormName, solutionModel.getForm(formName));
			var columns = ['IdStorico', 'Codice', 'InizioCopertura', 'FineCopertura', 'Ricaduta', 'Chiuso'];
			var columnsType = [JSColumn.NUMBER, JSColumn.TEXT, JSColumn.DATETIME, JSColumn.DATETIME, JSColumn.INTEGER, JSColumn.INTEGER];
			
			var dsRiepilogo = databaseManager.createEmptyDataSet(0, columns);
			
			// Ciclo for per popolare il dataset dall'array che è stato ritornato
            /** @type Array */
			var riepilogo = response['riepilogo']
			for(var r = 0; riepilogo['Certificati'] && r < riepilogo['Certificati'].length; r++)
			{				
				var certificato = riepilogo['Certificati'][r];
				if(certificato && certificato.Padre)
				{
					vParentRecord = certificato['FormStatus'];
				}
				
               	var isRicaduta = certificato['Ricaduta'] ? 1 : 0;
				var isChiuso = certificato['Chiuso'] ? 1 : 0;
				
				dsRiepilogo.addRow(
					[
					 certificato['IdStorico'],
					 certificato['Codice'],
					 certificato['InizioCopertura'] ? utils.dateFormat(certificato['InizioCopertura'], globals.ISO_DATEFORMAT) : null,
					 certificato['FineCopertura']   ? utils.dateFormat(certificato['FineCopertura'], globals.ISO_DATEFORMAT)   : null,
					 isRicaduta,
					 isChiuso
					 ]);		
			}
			
		    var datasourceRiepilogo = dsRiepilogo.createDataSource('_dataSourceRiepCert', columnsType);
			var jsForm = solutionModel.getForm(tempFormName)
				jsForm.dataSource = datasourceRiepilogo;
			    jsForm.getField('fld_idstorico').dataProviderID = 'IdStorico'
				jsForm.getField('fld_codice').dataProviderID = 'Codice'
				jsForm.getField('fld_inizio_copertura').dataProviderID = 'InizioCopertura'
				jsForm.getField('fld_fine_copertura').dataProviderID = 'FineCopertura'	
				//TODO rimuovere i due campi seguenti nel caso di congedo parentale o matrimoniale
				jsForm.getField('fld_ricaduta').dataProviderID = 'Ricaduta'
				jsForm.getField('fld_chiuso').dataProviderID = 'Chiuso'	
			
			elements.tab_storico_riep.addTab(tempFormName);
		}
	} // if (idStoricoPadre)
	
	var formRiepilogo = forms[elements.tab_storico_riep.getTabFormNameAt(1)];
//		formRiepilogo.foundset.loadAllRecords();
		
	if(!disabled)
	{	
		// in caso vi sia solamente il certificato padre
		if(dsRiepilogo && dsRiepilogo.getMaxRowIndex() == 1)
		{
			abilitaBtnOperazioniConCertificato();
			exitEditMode();
		}
		else if(!idStoricoPadre || (dsRiepilogo && dsRiepilogo.getMaxRowIndex() === 0))
		{
			// Il padre non esiste o non è stato trovato
			vIdStoricoPadre = -1;
			
			// Rimuovi il certificato padre memorizzato precedentemente
			vParentRecord = [];
	
			// GESTIONE INSERIMENTO DI NUOVO CERTIFICATO
			if(formRiepilogo.foundset.getSize() > 0)
				formRiepilogo.foundset.clear();
			
			switch(vIdEventoClasse){
				case globals.EventoClasse.MALATTIA:
					lkpWinCertTitle = 'Dip. ' + forms['giorn_header']['nominativo'] + ' - Malattia' 
					break
				case globals.EventoClasse.INFORTUNIO:
				    lkpWinCertTitle = 'Dip. ' + forms['giorn_header']['nominativo'] + ' - Infortunio'
					break
				case globals.EventoClasse.MATERNITA:
				    lkpWinCertTitle = 'Dip. ' + forms['giorn_header']['nominativo'] +  ' - Maternità'
					break
				case globals.EventoClasse.PARENTALE:
				    lkpWinCertTitle = 'Richiesta di congedo parentale'
					//nel caso di nuovo periodo di congedo parentale va scelto uno tra i figli precedenti 
					//oppure vanno inseriti i dati del nuovo figlio
				    apriSelezioneFiglio = true
				    break
				case globals.EventoClasse.PARENTALE_PATERNO:
			        lkpWinCertTitle = 'Dip. ' + forms['giorn_header']['nominativo'] +  ' - Congedo paterno'
				    break	
				case globals.EventoClasse.MATRIMONIALE:
				    lkpWinCertTitle += 'Dip. ' + forms['giorn_header']['nominativo'] + ' - Congedo matrimoniale'
					break
			}
			
 			svuotaDettaglioCertificato();
			
			if(addCertificato)
				aggiungiCertificato();
			else
				exitEditMode();
		}
		else
			abilitaPulsanti(true,false,false)
	}
	
	return apriSelezioneFiglio;
}

/**
 * @properties={typeid:24,uuid:"9A86FC11-B121-48F9-A4A8-48599E03421E"}
 */
function getRiepilogoFormName()
{
	return  'storico_riep_cert_classico';
}

/**
 * Aggiunge un nuovo certificato
 * 
 * @properties={typeid:24,uuid:"E909EC68-9351-4F2A-9709-69CB1D9F314F"}
 * @AllowToRunInFind
 */
function aggiungiCertificato() 
{	
	vNuovoCertificato = true;
	vErrorMessage = "";
	elements.btn_salva_cert.enabled = true;
	vIdStoricoPadre = vIdEventoClasse === globals.EventoClasse.MALATTIA ? -1 : vIdStoricoPadre;
	
	enterAddMode();
}

/**
 * @properties={typeid:24,uuid:"37F6B1F4-B8E1-4884-B668-30F491C55530"}
 * @AllowToRunInFind
 */
function enterAddMode() {
	var formName = vFormDettaglioCertificato;
	/** @type {JSFoundSet<db:/ma_presenze/storico_tipicertificato>} */
	var tipiCertificatoFs = databaseManager.getFoundSet(globals.Server.MA_PRESENZE, globals.Table.STORICO_TIPICERTIFICATO);
	
	// La richiesta della data padre è necessaria solamente qualora non sia visualizzato alcun riepilogo
	var riepilogoFs = forms[elements.tab_storico_riep.getTabFormNameAt(1)].foundset;
	if ( (!riepilogoFs || riepilogoFs.getSize() === 0)) 
	{
		if (vIdEventoClasse === globals.EventoClasse.INFORTUNIO 
				|| vIdEventoClasse === globals.EventoClasse.MATRIMONIALE 
				|| vIdEventoClasse === globals.EventoClasse.PARENTALE_PATERNO) 
		{
			var sql = 'SELECT [dbo].[F_Sto_CampoVincolo](?)';
			var ds = databaseManager.getDataSetByQuery(globals.Server.MA_PRESENZE, sql, [vIdEventoClasse], -1);

			if (!ds.getValue(1, 1))
				return;

			var codiceCampo = ds.getValue(1, 1);
			var descrizioneCampo = ds.getValue(1, 2);

			var dataPadre = scegliDataPadre(descrizioneCampo);

			// Cerca il certificato padre nella tabella dello storico, se presente
			/** @type {JSFoundSet<db:/ma_presenze/storico_certificati>} */
			var storicoFs = databaseManager.getFoundSet(globals.Server.MA_PRESENZE, globals.Table.STORICO);
			if (storicoFs && storicoFs.find()) {
				storicoFs.idlavoratore = vIdLavoratore;
				storicoFs.ideventoclasse = vIdEventoClasse;
				storicoFs.datapartenza = globals.dateFormat(new Date(dataPadre), globals.ISO_DATEFORMAT) + '|yyyyMMdd';
				storicoFs.storico_certificati_to_storico_tipicertificato.ideventoclasse = vIdEventoClasse;
				storicoFs.storico_certificati_to_storico_tipicertificato.wizard = 1;
				storicoFs.storico_certificati_to_storico_tipicertificato.sceltawizard = 1;

				if (storicoFs.search() > 0) {
					// Se il padre esiste ricalcola il riepilogo
					inizializzaRiepilogo(storicoFs.idstoricocertificato, false);

					// svuota il dettaglio e passa alla visualizzazione
					svuotaDettaglioCertificato();
					exitEditMode();
					return;
				} else {
					// Altrimenti forza l'inserimento del certificato padre
					if (tipiCertificatoFs && tipiCertificatoFs.find()) {
						tipiCertificatoFs.ideventoclasse = vIdEventoClasse;
						tipiCertificatoFs.wizard = 1;
						tipiCertificatoFs.sceltawizard = 1;

						if (tipiCertificatoFs.search() === 0)
							throw 'Certificato non riconosciuto';
					}

					updateTipoCertificato(tipiCertificatoFs.getSelectedRecord());

					forms[formName]['v' + codiceCampo] = dataPadre;

					enterEditMode(true, formName);

					return;
				}
			} // find
			else {
				// Annulla se non in find mode
				return;
			}
		}
		else if ( (vIdEventoClasse === globals.EventoClasse.PARENTALE)) 
		{
			// Altrimenti forza l'inserimento del certificato padre
			if (tipiCertificatoFs && tipiCertificatoFs.find()) {
				tipiCertificatoFs.ideventoclasse = vIdEventoClasse;
				tipiCertificatoFs.wizard = 1;
				tipiCertificatoFs.sceltawizard = 1;

				if (tipiCertificatoFs.search() === 0)
					throw 'Certificato non riconosciuto';
			}

			updateTipoCertificato(tipiCertificatoFs.getSelectedRecord());

			enterEditMode(true, formName);

			return;
		}
		else
		{
			// svuota l'eventuale dettaglio e passa alla visualizzazione della nuova situazione
			svuotaDettaglioCertificato();
			enterEditMode(false, controller.getName());
		}
	} else {
		// svuota l'eventuale dettaglio e passa alla visualizzazione della nuova situazione
		svuotaDettaglioCertificato();
		enterEditMode(false, controller.getName());
	}
}



/**
 * @param {Boolean} [disableTypeSelection] true per disabilitare la selezione del tipo del certificato, false altrimenti
 * @param {String} [formName] il nome della form da porre in edit
 * 
 * @properties={typeid:24,uuid:"12CBDC4E-5C8A-4EC1-BA55-DC3E8305269F"}
 */
function enterEditMode(disableTypeSelection, formName)
{
	formName = formName || vFormDettaglioCertificato;
	
	//inibisci la chiusura della dialog con la x
	close = false;
	
	// Disabilita la tabella del riepilogo e il pulsante di ricalcolo giornaliera
	elements.tab_storico_riep.enabled = false;
	elements.btn_ricalcola_giornaliera.enabled = false;
	
	// Disabilita cud e Abilita salva/annulla. Gestisci tipo certificato secondo quanto richiesto
	abilitaPulsanti(false, !disableTypeSelection, true);
	
	if(formName && forms[formName])
		globals.ma_utl_setStatus(globals.Status.EDIT,formName);
		
	return formName;
}

/**
 * Modifica un certificato esistente
 * 
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"396B99A6-8E22-4573-9835-73E162174F82"}
 * @AllowToRunInFind
 */
function modificaCertificato(event)
{	
	if(isAutoGenerato())
	{
		globals.ma_utl_showWarningDialog('Certificato autogenerato, impossibile modificare/eliminare', 'i18n:svy.fr.lbl.excuse_me');
		return;
	}
	
	/** @type{JSFoundSet<db:/ma_presenze/storico_certificati>} */
	var certificatiFs = databaseManager.getFoundSet(globals.Server.MA_PRESENZE, 'storico_certificati');
	if(certificatiFs && certificatiFs.find())
	{
		certificatiFs.idstoricocertificato = forms[elements.tab_storico_riep.getTabFormNameAt(1)].foundset['idstoricocertificato'];
		if(certificatiFs.search() === 0)
			throw 'Certificato non trovato';
	}
	
	var disableTypeSelection = isCertificatoPadre(certificatiFs.getSelectedRecord());
	enterEditMode(disableTypeSelection, vFormDettaglioCertificato);
}

/**
 * Elimina un certificato esistente
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @protected 
 *
 * @properties={typeid:24,uuid:"C800D7B0-B2D7-4111-850B-C08E79FA5863"}
 */
function eliminaCertificato(event) 
{
	if(isAutoGenerato())
	{
		globals.ma_utl_showWarningDialog('Certificato autogenerato, impossibile modificare/eliminare', 'i18n:svy.fr.lbl.excuse_me');
		return;
	}
	
	var answer = false;
	if(forms[elements.tab_storico_riep.getTabFormNameAt(1)].foundset.getSelectedIndex() === 1)
		answer = globals.ma_utl_showYesNoQuestion('Eliminare il certificato di riepilogo e tutti i certificati ad esso associati?','i18n:hr.msg.attention');
    else	
	    answer = globals.ma_utl_showYesNoQuestion('i18n:svy.fr.dlg.delete', 'i18n:hr.msg.attention');
	
	if(!answer)
		return;
		
	vOriginaleModificato = true;
	
	var idStoricoCertificato = forms[elements.tab_storico_riep.getTabFormNameAt(1)].foundset['idstorico'];

	var params =
	{
		iddipendenti	:	[vIdLavoratore],
		idditta			:	vIdDitta,
		periodo			:	vPeriodo,
		idstorico		:	idStoricoCertificato,
		ideventoclasse	:	vIdEventoClasse,
		tipoconnessione :   globals._tipoConnessione
	}
	
	var response = globals.eliminaCertificato(params);
	if(response.returnValue === false || 
			response.idstorico && response.idstorico === -1)
	{
		svuotaDettaglioCertificato();
		globals.svy_mod_closeForm(event);
		globals.ma_utl_showErrorDialog(response.message,'Errore durante l\'eliminazione del certificato');
		return;
	}
	if(response.idstorico > -1)
    {
    	svuotaDettaglioCertificato();
    	
    	if(!response.idstorico)
            inizializzaRiepilogo(-1,false);
		else
			inizializzaRiepilogo(response.idstorico,false);
    }
	
}

/**
 * @param {Boolean} abilita
 *
 * @properties={typeid:24,uuid:"1277A758-B670-460F-BCA0-8F5064AC11F7"}
 */
function abilitaBtnSalvaAnnulla(abilita)
{
	elements.btn_salva_cert.enabled = abilita;
	elements.btn_annulla_cert.enabled = abilita;
}

/**
 * @param {Boolean} abilita
 *
 * @properties={typeid:24,uuid:"6EDE982E-4441-46D4-A398-1065CA425E5A"}
 */
function abilitaBtnSalva(abilita)
{
	elements.btn_salva_cert.enabled = abilita;
}

/**
 * @AllowToRunInFind
 * 
 * @param {Object} idStoricoCertificato
 *
 * @properties={typeid:24,uuid:"F64ECBBD-307D-4B4F-AAA9-889754C2D8FE"}
 */
function inizializzaParametriValidatoreTipoCertificato(idStoricoCertificato)
{
	/** @type {JSFoundSet<db:/ma_presenze/storico_certificati>} */
	var storicoFs = databaseManager.getFoundSet(globals.Server.MA_PRESENZE, globals.Table.STORICO);
	if (idstoricocertificato != null && storicoFs.find())
	{		
		storicoFs.idstoricocertificato = idStoricoCertificato;
		// New record
		if(storicoFs.search() === 0)
			idStoricoCertificato = -1;
	}
	
	vParametriCertificato =
	{
		formstatus				:	[],
		parentrecord			:	vParentRecord,//[],
		iddipendenti			:	[vIdLavoratore],
		ideventoclasse			:	vIdEventoClasse,
		codcertificato			: 	vTipoCertificato,
		periodo					:	vPeriodo,
		iddip					:	vIdLavoratore,
		idditta					:	vIdDitta,
		idstorico				:	idStoricoCertificato || -1,
		idstoricopadre			:	vIdEventoClasse === globals.EventoClasse.MALATTIA ? -1 : storicoFs.idstoricolegato || vIdStoricoPadre,
		idstoricodatiaggiuntivi	:	vIdStoricoDatiAggiuntivi || -1,
		chiuso  				:   storicoFs.chiuso || vChiuso
	};
	
	return vParametriCertificato;
}

/**
 * @param {String} codiceCampo
 * @param {Number} idStoricoCertificato
 * @param {String} [dFormat]
 * 
 * @properties={typeid:24,uuid:"5C457570-32A6-432B-9CB4-AC3D8618E881"}
 * @AllowToRunInFind
 */
function inizializzaParametriValidatore(codiceCampo, idStoricoCertificato, dFormat){

	var formStatus = [];
	var parentRecord = vParentRecord;
	
	var form = forms[vFormDettaglioCertificato];
	var jsForm = solutionModel.getForm(vFormDettaglioCertificato);
	var elems = jsForm.getFields();
	
	var storicoFs = forms.storico_cert_certif.foundset.duplicateFoundSet();
	if(idStoricoCertificato > -1 && storicoFs.find())
	{		
		storicoFs.idstoricocertificato = idStoricoCertificato || -1;
		// New record
		if(storicoFs.search() === 0)
		{
//			parentRecord = [];
			idStoricoCertificato = -1;
		}
	}			
	
	for (var e = 0; e < elems.length; e++)
	{
		var dataProvider = elems[e].dataProviderID;
		var valore = form[dataProvider];
		
	    var dataType = jsForm.getVariable(dataProvider).variableType;
		if(dataType === JSVariable.DATETIME)		
		{
			/** @type {Date}*/
			var valoreDate = valore;
			valore = globals.dateFormat(valoreDate, dFormat || globals.ISO_DATEFORMAT ) || "";
		}
		
	    formStatus.push(
    	{	    		
    		dataprovider	:	dataProvider,
			codice			:	elems[e].name, 
	    	valore			:	valore
    	});
	}
		
	vParametriCertificato =
	{		
		iddipendenti			:	[vIdLavoratore],
		ideventoclasse			:	vIdEventoClasse || -1,
		codcertificato			: 	vCodiceCertificato,
		codcampo				:	codiceCampo || '',
		formstatus				:	formStatus,
		parentrecord			:	parentRecord,
		periodo					:	vPeriodo,
		tipogiornaliera 		:   forms['giorn_vista_mensile']._tipoGiornaliera || globals.TipoGiornaliera.NORMALE,
		iddip					:	vIdLavoratore,
		idditta					:	vIdDitta,
		idstorico				:	idStoricoCertificato || -1,
		idstoricopadre			:	vIdEventoClasse === globals.EventoClasse.MALATTIA ? -1 : storicoFs.idstoricolegato || vIdStoricoPadre,
		chiuso					: 	storicoFs.chiuso || vChiuso,
		elggripresa				: 	vElencoGiorniRicalcolo,
		idstoricodatiaggiuntivi : 	vIdStoricoDatiAggiuntivi || -1
	};
	
	return vParametriCertificato;
}


/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"C956F738-E4F7-4FE0-819C-CB96D8557F22"}
 * @AllowToRunInFind
 */
function confermaCertificati(event)
{	
	var params = {
		user_id                 : security.getUserName(), 
		client_id               : security.getClientID(),
		iddipendenti            : [vIdLavoratore],
		idditta                 : vIdDitta,
		periodo                 : vPeriodo,
		tipogiornaliera         : forms['giorn_vista_mensile']._tipoGiornaliera || globals.TipoGiornaliera.NORMALE,
		tipoconnessione         : globals.TipoConnessione.CLIENTE,
		ideventoclasse          : vIdEventoClasse,
		elencogiorniricalcolo   : vElencoGiorniRicalcolo
	}

	//se non è stata effettuata alcuna variazione su di un certificato, verifichiamo che non vi 
	//siano certificati risultanti variati, altrimenti verrà lanciata la creazione della certificazione
	var sqlVar = "SELECT COUNT(Variato) FROM Storico_Calcolo WHERE idLavoratore = ? AND ideventoClasse = ? AND Variato = ?";
	var arrVar = [vIdLavoratore,vIdEventoClasse,1];
	var dsVar = databaseManager.getDataSetByQuery(globals.Server.MA_PRESENZE,sqlVar,arrVar,-1);
	var variati = dsVar.getValue(1,1); 
	
	globals.confermaCertificati(params, vOriginaleModificato || variati);
	
	globals.ma_utl_setStatus(globals.Status.BROWSE,controller.getName());
	vOriginaleModificato = false;
}

/**
 * @properties={typeid:24,uuid:"E5798BE6-BB3B-48B7-809F-144218F0F517"}
 */
function exitStorico(event)
{
	var params = {
        processFunction: process_storico,
        message: '', 
        opacity: 0.5,
        paneColor: '#434343',
        textColor: '#EC1C24',
        showCancelButton: false,
        cancelButtonText: '',
        dialogName : 'This is the dialog',
        fontType: 'Arial,4,25',
        processArgs: [event]
    };
	plugins.busy.block(params);
	
}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"59F6F545-7A7A-46CE-8CEF-C935570F6C77"}
 */
function process_certificato(event)
{
	try
	{
		confermaGestioneCertificato();
	}
	catch(ex)
	{
		var msg = 'Metodo process_certificato : ' + ex.message;
		globals.ma_utl_showErrorDialog(msg)
		globals.ma_utl_logError(msg,LOGGINGLEVEL.ERROR);
	}
	finally
	{
		plugins.busy.unblock();
	}
}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"24D4D413-004D-439A-ACBF-0677D151FB35"}
 */
function process_storico(event)
{
	close = true;
	globals.svy_mod_closeForm(event);
	
	plugins.busy.unblock();
}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"87C0ABE8-F3C2-45A8-AD62-C734ECBE3F0C"}
 */
function onHide(event)
{
	if(forms[vFormDettaglioCertificato])
	   globals.ma_utl_setStatus(globals.Status.BROWSE,vFormDettaglioCertificato);
	
	vNuovoCertificato = false;
	vAnnotazioni = '';
	vErrorMessage = '';
	elements.btn_salva_cert.enabled = true;
		
	confermaCertificati(event);
		
	return close;
}


/**
 * @properties={typeid:24,uuid:"1EF1BB32-4706-4547-B378-43231127EA3E"}
 * @AllowToRunInFind
 */
function isAutoGenerato()
{
	/** @type {JSFoundSet<db:/ma_presenze/storico_certificati>} */
	var storicoFs = databaseManager.getFoundSet(globals.Server.MA_PRESENZE, globals.Table.STORICO);
	if(storicoFs && storicoFs.find())
	{
		storicoFs.idstoricocertificato = forms[elements.tab_storico_riep.getTabFormNameAt(1)].foundset['idstorico'];
		if(storicoFs.search() > 0)
			return storicoFs.storico_certificati_to_storico_tipicertificato.sceltaricerca === 0;
	}
	
	return false;
}

/**
 * @properties={typeid:24,uuid:"0500821C-D78B-4B3A-A396-92B4269DD8DE"}
 */
function svuotaDettaglioCertificato()
{
	vTipoCertificato = null
	vDescrizioneCertificato = null
	               
	elements.tab_dettaglio_certificato.removeAllTabs()	

	var editForm = vFormDettaglioCertificato;
	
	/** rimuovi eventuali form/tab omonimi già aperti */
	if (forms[editForm])
	{
	    if(history.removeForm(editForm))
		   solutionModel.removeForm(editForm)
	}
}

/**
 * @properties={typeid:24,uuid:"5278B002-AEEE-419A-9223-D3D5E332A17C"}
 */
function scegliDataPadre(descrizioneCampo)
{
	var form = forms.storico_datapadre;
		form.vDescrizioneCampo = descrizioneCampo;

	globals.ma_utl_setStatus(globals.Status.EDIT,form.controller.getName());
	
	return globals.ma_utl_showFormInDialog(form.controller.getName(), 'Data inizio', null, true);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @protected 
 *
 * @properties={typeid:24,uuid:"ACB77224-0E8F-4665-9EEC-63249C7AE60E"}
 */
function addCertificate(event)
{
	aggiungiCertificato();
}

/**
 * 
 * @param {JSFoundset} fs
 *
 * @properties={typeid:24,uuid:"97A9AF1C-EE71-4BBE-B549-C9A791869139"}
 */
function FiltraCertificati(fs)
{
	fs.addFoundSetFilterParam('ideventoclasse', '=', vIdEventoClasse);
	fs.addFoundSetFilterParam('ordinecertificato', 'IS NOT NULL', null);
	fs.addFoundSetFilterParam('calcolo', '=', 0);
	fs.sort('ordinecertificato asc', false);
	
	// Controlla che esista un riepilogo in caso di infortunio o matrimoniale
	if(globals.EventoClasse.PARENTALE === vIdEventoClasse
			|| globals.EventoClasse.PARENTALE_PATERNO === vIdEventoClasse)
		fs.addFoundSetFilterParam('sceltawizard', '=', 0);
	else if(globals.EventoClasse.INFORTUNIO === vIdEventoClasse 
			|| globals.EventoClasse.MATRIMONIALE === vIdEventoClasse)
	{
		var riepilogoFs = forms[elements.tab_storico_riep.getTabFormNameAt(1)].foundset;
		if(!riepilogoFs || riepilogoFs.getSize() === 0)
		   fs.addFoundSetFilterParam('sceltawizard', '=', 1);
		else
		   fs.addFoundSetFilterParam('sceltawizard', '=', 0);
	}
	return fs;
}

/**
 * @param {JSRecord<db:/ma_presenze/storico_tipicertificato>} rec
 * @properties={typeid:24,uuid:"396FF3D8-2936-4493-B5D0-CBCB711BCAF2"}
 */
function updateTipoCertificato(rec)
{
	if(!rec)
		return null;

	//sono presenti certificati di ricovero ospedaliero non ancora chiusi?
	if(rec.ideventoclasse == globals.EventoClasse.MALATTIA)
	{
		// query per verificare che non esistano certificati di ricovero ospedaliero aperti
		var _sqlRo = "SELECT DataPartenza FROM (" +
		                "SELECT DataPartenza, dbo.F_Sto_ValoreCampo(idStoricoCertificato, 'DB') AS AncoraAperto " + 
                        "FROM Storico_Certificati " +  
                        "WHERE idLavoratore = ? " +
                        "AND idEventoClasse = 89 " + 
                        "AND CodCertificato = 'RO' " + 
                        "AND idStoricoCertificato <> ? " +
                        ") AS Result " +
                     "WHERE AncoraAperto <> 0 ORDER BY DataPartenza DESC"
		var _arrRo = new Array();
		    _arrRo.push(vIdLavoratore);
		    _arrRo.push(-1); //TODO in caso di modifica l'idStoricoEscluso è l'id storico del certificato selezionato
		var _dsRo = databaseManager.getDataSetByQuery(globals.Server.MA_PRESENZE,_sqlRo,_arrRo,1);
		
		if(_dsRo.getValue(1,1) != null)
		{
			//Esiste ancora un ricovero ospedaliero aperto precedente alla malattia che si sta inserendo.
			globals.ma_utl_showInfoDialog('<html>Impossibile completare l\'operazione, esiste ancora un ricovero ospedaliero <br/> aperto precedente alla malattia che si sta inserendo.</html>','Inserimento certificati')
		    return null;
		}
		
	}
	
	vDescrizioneCertificato = rec.descrizione;
	vTipoCertificato = rec.codcertificato;
	
	if(vNuovoCertificato)
	{
		var formName = updateDettaglioCertificato(vTipoCertificato, -1, true);
		// Go to edit after selecting its type
		globals.ma_utl_setStatus(globals.Status.EDIT, formName);
		return formName;
	}
	else
		return updateDettaglioCertificato(vTipoCertificato, idstoricocertificato, true);
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
 * @properties={typeid:24,uuid:"52709226-CBFC-41F9-9C27-10A6BC09E663"}
 */
function updateDettaglioCertificato(tipoCertificato, idStoricoCertificato, validaCertificato)
{		
	var formName = null;
	var response = true;
	
	if(validaCertificato)
	{
		var params = inizializzaParametriValidatoreTipoCertificato(idStoricoCertificato);
		response = globals.validaTipoCertificato(params);
	}
	
	if(response === true)
	{
		/** @type {JSFoundSet<db:/ma_presenze/storico_tipicertificato>} */
		var tipiCertificatoFs = databaseManager.getFoundSet(globals.Server.MA_PRESENZE, 'storico_tipicertificato');
		if(tipiCertificatoFs && tipiCertificatoFs.find())
		{
			tipiCertificatoFs.codcertificato = tipoCertificato;
			if(tipiCertificatoFs.search() === 0)
				throw 'Certificato non riconosciuto';
			
			vTipoCertificato = tipiCertificatoFs.codcertificato;
			vDescrizioneCertificato = tipiCertificatoFs.descrizione;
		}
		
		formName = costruisciDettaglioCertificato(tipoCertificato, vIdEventoClasse, idStoricoCertificato);
		elements.tab_dettaglio_certificato.addTab(formName);
		
		globals.ma_utl_setStatus(globals.Status.BROWSE, formName);
	}
	else
	{
		vDescrizioneCertificato = '';
		vTipoCertificato = '';
	}
	
	return formName;
}

/**
 * Costruisce la form di dettaglio del certificato, in base al tipo specificato.
 * 
 * @param {String} tipoCertificato
 * @param {Number} idEventoClasse
 * @param {Number} [idStoricoCertificato]
 * 
 * @return {String} il nome della form creata
 *
 * @properties={typeid:24,uuid:"04B1A344-E179-48A5-9EE4-178A62AD1AC5"}
 * @AllowToRunInFind
 */
function costruisciDettaglioCertificato(tipoCertificato, idEventoClasse, idStoricoCertificato) 
{
	var formName = vFormDettaglioCertificato;

	vCodiceCertificato = tipoCertificato;
	elements.tab_dettaglio_certificato.removeAllTabs();

	// Rimuovi eventuali form/tab omonimi già aperti
	if (forms[formName]) 
	{
		if (history.removeForm(formName))
			solutionModel.removeForm(formName);
	}
	
	// Crea la form di dettaglio secondo il tipo di certificato specificato
	var formDettaglio = getFormDettaglioCertificato(formName, tipoCertificato, idEventoClasse, elements.tab_dettaglio_certificato.getWidth());
		formDettaglio.width = elements.tab_dettaglio_certificato.getWidth();
	
	// Se in browse/edit, popola i campi della form
	if(idStoricoCertificato)
	{
		var fsCertificato = foundset;//databaseManager.getFoundSet(globals.Server.MA_PRESENZE, globals.Table.STORICO);
			fsCertificato.loadRecords(idStoricoCertificato);
			
		var fsDettaglioCertificato = fsCertificato.storico_certificati_to_storico_certificatidettaglio;
		if (fsDettaglioCertificato)
		{
			for(var r = 1; r <= fsDettaglioCertificato.getSize(); r++)
			{
				var currRec = fsDettaglioCertificato.getRecord(r);
				var dataType = currRec.storico_certificatidettaglio_to_storico_tipicertificatodettaglio.storico_tipicertificatodettaglio_to_storico_tipicampo.tipodidato;
				
				var value;
				switch (dataType) {
					case globals.DataType.BOOL:
						value = "'" + currRec.valore_integer + "'";
						break;
					case globals.DataType.DATETIME:
						var dateValue = currRec.valore_datetime;
						value = dateValue && 'new Date(' + dateValue.getFullYear() + ', ' + dateValue.getMonth() + ', ' + dateValue.getDate() + ')';
						break;
					case globals.DataType.TRISTATE:
						value = "'" + currRec.valore_integer + "'";
						break;
					case globals.DataType.INTEGER:
					    // TODO gestione caso ore lavorate = -1 
					    if(currRec.valore_number == -1)
					    	currRec.valore_number = 0;
					    value = currRec.valore_number;
						break;
					default:
						value = null;
				}
				
				// Assegna il valore alla variabile corrispondente
				if(formDettaglio.getVariable('v' + currRec.storico_certificatidettaglio_to_storico_tipicertificatodettaglio.codice))
					formDettaglio.getVariable('v' + currRec.storico_certificatidettaglio_to_storico_tipicertificatodettaglio.codice).defaultValue = value;
			}			
		}
	}
		
	return formDettaglio.name;
}

/**
 * Crea la form di dettaglio per il certificato in base al tipo specificato.<br/>
 * Il certificato è identificato da <code>tipoCertificato</code> e <code>idEventoClasse</code>.
 * 
 * @param {String} formName il nome da assegnare alla form di dettaglio
 * @param {String} tipoCertificato il codice del certificato (MA, DI, etc.)
 * @param {Number} idEventoClasse l'id della classe evento del certificato
 * @param {Number} [width]
 * 
 * @return {JSForm} the newly created form
 *
 * @properties={typeid:24,uuid:"979433E6-0B7D-4BA3-B89D-BBB9F924CECD"}
 * @AllowToRunInFind
 * @SuppressWarnings(unused)
 */
function getFormDettaglioCertificato(formName, tipoCertificato, idEventoClasse, width)
{
	width = width || 360;
	
	// Recupera le informazioni relative ai campi del certificato
	/** @type {JSFoundSet<db:/ma_presenze/storico_tipicertificatodettaglio>} */
	var fsTipoCertificati = databaseManager.getFoundSet(globals.Server.MA_PRESENZE, 'storico_tipicertificatodettaglio');
	if(fsTipoCertificati && fsTipoCertificati.find())
	{
		fsTipoCertificati.codcertificato = tipoCertificato;
		fsTipoCertificati.ideventoclasse = idEventoClasse;
		if(fsTipoCertificati.search() === 0)
			throw new Error('Certificato non riconosciuto');
	}
	
	fsTipoCertificati.sort('ordinemaschera asc');
	
	var tForm = solutionModel.getForm(formName);
	if(!tForm)
		tForm = solutionModel.newForm(formName, globals.Server.MA_PRESENZE, globals.Table.STORICO, getStyle(), false, width, 150);
	
	tForm.navigator = SM_DEFAULTS.NONE;
	tForm.view = JSForm.RECORD_VIEW;
	tForm.scrollbars = SM_SCROLLBAR.HORIZONTAL_SCROLLBAR_NEVER | SM_SCROLLBAR.VERTICAL_SCROLLBAR_NEVER;
	tForm.transparent = true;
	tForm.newMethod("function getMainForm(){ return forms." + controller.getName() + "; }");
    
	/** @type JSLabel */
	var tLabel
	/** @type JSField */
	var tField
	/** @type {JSVariable} */
	var tVariable;
	
	var fldHeight = 20;
	var fldLength = 80;
	var lblHeight = 20;
	var lblLength = 170;
	
	var topMargin = 0;
//	var sideMargin = 10;//Math.floor(1/4 * tForm.width - 1/2 * fldLength);
	var sideMargin = Math.floor(tForm.width - 2 * lblLength - 10);
	
	var xLLeft = sideMargin;
	var xLRight = tForm.width - sideMargin - lblLength;//Math.floor(tForm.width / 2) + xLLeft;
	
	if(xLLeft > xLRight)
	{
		var switchxL = xLLeft;
		xLLeft = xLRight;
		xLRight = switchxL;
	}
		
	var dy = lblHeight + fldHeight;	

	var fieldType;
	var fieldStyle = 'default';
	var fieldFormat = '';
	var fieldAlignment = SM_ALIGNMENT.CENTER;
	var fieldAnchors = null;
	var variableType;	
	var variableDefaultValue;
	var transparent;
	var valueList;    
	
	var fieldsNo = fsTipoCertificati.getSize();	
	
	for (var i = 1; i <= fieldsNo; i++) 
	{
		var currField = fsTipoCertificati.getRecord(i);
		
		// Determina il tipo di dato del campo
		var dataType;
		dataType = currField.storico_tipicertificatodettaglio_to_storico_tipicampo.tipodidato;
		
		switch (dataType) {
			case globals.DataType.BOOL:
				fieldType = JSField.CHECKS;
				fieldFormat = '';
				fieldStyle = 'check';
				fieldAlignment = SM_ALIGNMENT.CENTER;
				transparent = true;
				variableType = JSVariable.INTEGER;
				variableDefaultValue = 0;
				break;
			case globals.DataType.DATETIME:
				fieldType = JSField.TEXT_FIELD;
				fieldFormat = 'dd/MM/yyyy|mask'
				fieldStyle = 'default';
			    fieldAlignment = SM_ALIGNMENT.CENTER;
				transparent = false;
				variableType = JSVariable.DATETIME;
				variableDefaultValue = '';
				break;
			case globals.DataType.TRISTATE:
				fieldType = JSField.COMBOBOX;
				fieldFormat = '';
				fieldStyle = 'default';
				fieldAlignment = SM_ALIGNMENT.CENTER;
				transparent = false;
				valueList = 'vls_tristate';
				variableType = JSVariable.INTEGER;
				variableDefaultValue = 2;
				break;
			case globals.DataType.INTEGER:
				fieldType = JSField.TEXT_FIELD;
				//il formato del field dipende dalla classe dell'evento e dal codice : in base al caso di giorno
				//od ore il formato è intero o con virgola
				switch (currField.ideventoclasse)
				{
					case globals.EVENTO_CLASSE_INFORTUNIO :
					    if(currField.codice  === 'HLAV')
					       fieldFormat = '#0.00|#0.00|#(4)';
					    else
					       fieldFormat = '';
					    break;
					case globals.EVENTO_CLASSE_MATERNITA,globals.EVENTO_CLASSE_CONGEDO_PARENTALE :
						fieldFormat = '0';
						break;
					default:
			            fieldFormat = '#0.00|#0.00|#(4)';    	
				}
				
				fieldStyle = 'default';
				fieldAlignment = SM_ALIGNMENT.CENTER;
				transparent = false;
				variableType = JSVariable.NUMBER;
				variableDefaultValue = '0.00';
				break;
			default:
				fieldType = JSField.TEXT_FIELD;
				fieldFormat = '';
				fieldAlignment = SM_ALIGNMENT.CENTER;
				transparent = true;
				variableType = JSVariable.MEDIA;
				variableDefaultValue = '';
		}

		// Crea la variabile associata al campo che sarà creato
		tVariable = tForm.newVariable('v' + currField.codice, variableType);
		
		// Determina la riga della maschera
		var row = Math.floor((i - 1) / 2);
		
		// Posiziona i campi su due colonne e associa la variabile appena definita come data provider
		if (i % 2 != 0) 
		{
			// Colonna di sx. Spostati verso il basso dell'altezza di una riga moltiplicata per il numero di righe
			tLabel = tForm.newLabel(currField.descrizione, xLLeft, topMargin + (row * dy), lblLength, lblHeight);
			fieldAnchors = SM_ANCHOR.NORTH | SM_ANCHOR.WEST;
		}
		else
		{
			// Colonna di dx
			tLabel = tForm.newLabel(currField.descrizione, xLRight, topMargin + (row * dy), lblLength, lblHeight);
			fieldAnchors = SM_ANCHOR.NORTH | SM_ANCHOR.EAST;
		}
		
		// Centra il campo orizzontalmente rispetto alla label
		tField = tForm.newField(tVariable.name, fieldType, tLabel.x + Math.floor((lblLength - fldLength) / 2), tLabel.y + lblHeight, fldLength, fldHeight);

		switch (currField.tipovisualizzazione)
		{
			// Determina il modo di visualizzazione del campo
			case globals.TipoVisualizzazione.DISABLED:
				tField.enabled = false;
				tField.editable = false;
				break;
			case globals.TipoVisualizzazione.INVISIBLE:
				tLabel.visible = false;
				tField.visible = false;
				break;
		}

		// Imposta altre proprietà per la label
		tLabel.name = 'lbl_' + currField.codice;
		tLabel.horizontalAlignment = SM_ALIGNMENT.CENTER;
		tLabel.transparent = true;
		tLabel.anchors = fieldAnchors;
		tLabel.toolTipText = tLabel.text;
		
		// Imposta altre proprietà per il campo
		tField.name =  currField.codice;
		tField.styleClass = fieldStyle;
		tField.format = fieldFormat;
		tField.horizontalAlignment = fieldAlignment;
		tField.transparent = transparent;
		tField.tabSeq = i;
		tField.anchors = fieldAnchors;
		
		// Simula l'onFocusGained per la proposta del primo campo
		if (i == 1)
			tField.onFocusGained = getFieldOnFocusGainedMethod();

		// Simula l'onFocusLost e l'onFocusGained con l'onDataChange
		tField.onDataChange = getFieldOnDataChangeMethod();
	}
	
	return tForm;
}

/**
 * @properties={typeid:24,uuid:"62DDC655-8CC0-4022-BE3F-7990B0EA1F3A"}
 */
function getFieldOnDataChangeMethod()
{
	return solutionModel.getGlobalMethod('globals','onFocusGainedLost');
}

/**
 * @properties={typeid:24,uuid:"9BCAEBD2-92A9-472E-9737-4E3BBF63B2C5"}
 */
function getFieldOnFocusGainedMethod()
{
	return solutionModel.getGlobalMethod('globals','onFocusGained');
}

/**
 * Gestisce la visualizzazione dello storico relativamente
 * al certificato selezionato  
 *
 * @param {Number} idEventoClasse
 * @param {Number} giorno
 * @param {Number} idLavoratore
 * @param {Number} idDitta
 *
 * @properties={typeid:24,uuid:"1072930A-93F8-4818-AD46-3309FB642175"}
 * @AllowToRunInFind
 */
function showStorico(idEventoClasse, giorno, idLavoratore, idDitta)
{
	var periodo = globals.getPeriodo();
    var strIntestazione = 'Gestisci certificato ';
	
	init(idLavoratore, idDitta, periodo, idEventoClasse);
	
	var fs = datasources.db.ma_presenze.storico_datiaggiuntivi.getFoundSet();
		
	var apriDatiAggiuntivi = inizializzaRiepilogoStorico(idEventoClasse, giorno, idLavoratore);
	//nel caso di nuovo congedo parentale (materno) si deve selezionare il figlio associato
	if (apriDatiAggiuntivi)
	{
		var idStoricoPadre = showDatiAggiuntivi(idLavoratore, idEventoClasse);
		if (idStoricoPadre == null)	// selezione annullata
			return;
		else
		if (idStoricoPadre > 0)		// certificato padre già esistente
		{
			inizializzaRiepilogo(idStoricoPadre);
			exitEditMode();
		}
		else	
		if (idStoricoPadre == -1)	// certificato padre non esistente
		{
			forzaInserimentoCertificatoPadreCongedo();
			
			if(!fs.loadRecords(vIdStoricoDatiAggiuntivi))
				throw new Error('Nessun dato aggiuntivo trovato con id: ' + vIdStoricoDatiAggiuntivi);
				
			strIntestazione += fs.nome + ' ' + fs.cognome;
		}
	}
//	else if(idEventoClasse == globals.EventoClasse.PARENTALE)
//	{
//		
//		if(!fs.loadRecords(vIdStoricoDatiAggiuntivi))
//			throw new Error('Nessun dato aggiuntivo trovato con id: ' + vIdStoricoDatiAggiuntivi);
//			
//		strIntestazione += (' per ' + fs.nome + ' ' + fs.cognome);
//	}

	globals.ma_utl_showFormInDialog(controller.getName(), strIntestazione, null, true);
}

/**
 * @AllowToRunInFind
 * 
 * @properties={typeid:24,uuid:"5851C61B-62F3-4EBE-BFC2-27186DD5277E"}
 */
function forzaInserimentoCertificatoPadreCongedo()
{
	// Forza l'inserimento del certificato padre		
	/** @type {JSFoundSet<db:/ma_presenze/storico_tipicertificato>} */
	var tipiCertificatoFs = databaseManager.getFoundSet(globals.Server.MA_PRESENZE, globals.Table.STORICO_TIPICERTIFICATO);
	if (tipiCertificatoFs && tipiCertificatoFs.find())
	{
		tipiCertificatoFs.ideventoclasse = vIdEventoClasse;
		tipiCertificatoFs.wizard         = 1;
		tipiCertificatoFs.sceltawizard   = 1;
		
		if(tipiCertificatoFs.search() === 0)
			throw new Error('Certificato non riconosciuto');
	}

	updateTipoCertificato(tipiCertificatoFs.getSelectedRecord());
	enterAddMode();
	//enterEditMode(true,controller.getName());
}


/**
 * @AllowToRunInFind
 * 
 * @param idLavoratore
 * @param idEventoClasse
 *
 * @properties={typeid:24,uuid:"BC6C4F8E-E2D6-47E1-A995-F60D38251285"}
 */
function showDatiAggiuntivi(idLavoratore, idEventoClasse)
{
	var continuation = new Continuation();

	/**
	 * In caso di congedo parentale vanno specificati alcuni dati aggiuntivi relativi al figlio per il quale si vuole richiedere il periodo di congedo
	 */
	/** @type {JSFoundSet<db:/ma_presenze/storico_datiaggiuntivi>} */
	var fsDatiAgg = databaseManager.getFoundSet(globals.Server.MA_PRESENZE, 'storico_datiaggiuntivi');
	if(!fsDatiAgg.find())
		throw new Error(i18n.getI18NMessage('ma.err.findmode', ['showDatiAggiuntivi']));
		
	fsDatiAgg.idlavoratore = idLavoratore;
    var datiAgg = fsDatiAgg.search();
    
	if(datiAgg == 0)
  	   globals.ma_utl_showWarningDialog('Nessuna maternità trovata nello storico per il lavoratore.<br/> Verrà visualizzata la form per gestire l\'inserimento dei dati aggiuntivi del figlio', 'Dati aggiuntivi congedo');
	
	var datiAggiuntivi = getDatiAggiuntiviForm().initParams(idEventoClasse, controller.getName(), continuation);
	
	// ticket #14602 : ricaricare sempre la situazione dei dati aggiuntivi di un dipendente
	if(datiAgg)
	   datiAggiuntivi.foundset.loadRecords(fsDatiAgg);
	
	globals.ma_utl_showFormInDialog(datiAggiuntivi.controller.getName(), 'Selezione dati aggiuntivi congedo');
	globals.terminator();
}

/**
 * @return {RuntimeForm<storico_dati_aggiuntivi_scelta_tab>}
 * @properties={typeid:24,uuid:"482FAAED-0207-4BE0-904F-E88D937784B7"}
 */
function getDatiAggiuntiviForm()
{
	return forms.storico_dati_aggiuntivi_scelta_tab;
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
 * @properties={typeid:24,uuid:"7824A3D7-C4C9-4773-BBE9-9328EDC567CD"}
 * @AllowToRunInFind
 */
function onDataChangeTipoCertificato(oldValue, newValue, event)
{
	// Cerca il tipo certificato specificato, e ripristina i dati precedenti se non esistente
	/** @type {JSFoundSet<db:/ma_presenze/storico_tipicertificato>} */
	var tipiCertificatoFs = databaseManager.getFoundSet(globals.Server.MA_PRESENZE, 'storico_tipicertificato');
		tipiCertificatoFs = FiltraCertificati(tipiCertificatoFs);
		
	if(tipiCertificatoFs && tipiCertificatoFs.loadAllRecords() && tipiCertificatoFs.find())
	{
		tipiCertificatoFs.codcertificato = newValue;
		if(tipiCertificatoFs.search() === 0)
		{
			globals.ma_utl_showLkpWindow(
				{
					  event:							event
					, lookup:							'LEAF_Lkp_Certificati'
					, methodToAddFoundsetFilter:		'FiltraCertificati'
					, methodToExecuteAfterSelection:	'updateTipoCertificato'
					, returnField:						'vTipoCertificato'
					, allowInBrowse:                    true 	
				}
			);		
		}
		else
		{
			updateTipoCertificato(tipiCertificatoFs.getSelectedRecord());
		}
	}
	
	return true;
}

/**
 * Controlla se il record passato è un certificato padre
 * 
 * @param {JSRecord<db:/ma_presenze/storico_certificati>} rec
 *
 * @properties={typeid:24,uuid:"8A450E3C-A545-42BE-8E21-F3281C2651FF"}
 */
function isCertificatoPadre(rec)
{
	if(rec && rec.storico_certificati_to_storico_tipicertificato)
	{
		return rec.storico_certificati_to_storico_tipicertificato.wizard === 1 && rec.storico_certificati_to_storico_tipicertificato.sceltawizard === 1;
	}
	
	return false;
}



/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"76E8B9C9-1D65-46ED-87C3-728383A5937A"}
 */
function onAction$confermaCertificato(event) 
{
	var params = {
        processFunction: process_certificato,
        message: '', 
        opacity: 0.5,
        paneColor: '#434343',
        textColor: '#EC1C24',
        showCancelButton: false,
        cancelButtonText: '',
        dialogName : 'This is the dialog',
        fontType: 'Arial,4,25',
        processArgs: [event]
    };
	plugins.busy.block(params);
		
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"E8696A77-7BA5-4EE1-9D92-194317AD83D5"}
 */
function onActionInfoCertTelematico(event) 
{
	// recupero delle informazioni necessarie
	var idStoricoCertificatoTelematico = scopes.telematici.getCertificatoTelematico(foundset.getSelectedRecord().idstoricocertificato).idtelematicocertificato;
	var strInfo = '';
	
	// descrizione generale certificato
	var sqlDesc = "SELECT TTTC.Descrizione AS TipoCertificato, TTTL.Descrizione AS TipoLegame"
            + ", TTTR.Descrizione AS TipoRicovero, DataRilascio, DataInizio, DataFine"
            + " FROM Telematici_Certificati TC INNER JOIN Tab_Telematici_TipiCertificati TTTC"
            + " ON TC.CodTipoCertificato = TTTC.Codice"
            + " INNER JOIN Tab_Telematici_TipiLegami TTTL ON TC.CodTipoLegame = TTTL.Codice"
            + " INNER JOIN Tab_Telematici_TipiRicoveri TTTR ON TC.CodTipoRicovero = TTTR.Codice"
            + " WHERE idTelematicoCertificato = ?";
    var arrDesc = [idStoricoCertificatoTelematico];
    var dsDesc = databaseManager.getDataSetByQuery(globals.Server.MA_PRESENZE,sqlDesc,arrDesc,-1);
    if(dsDesc.getMaxRowIndex() > 0)
    {
    	// compilazione informazioni base
    	strInfo += "<b>Tipo certificato</b> : " + dsDesc.getValue(1,1) + "<br/>";
    	strInfo += "<br/>";
	    strInfo += "<b>Tipo legame</b> : " + dsDesc.getValue(1,2) + "<br/>";
	    strInfo += "<b>Tipo ricovero</b> : " + dsDesc.getValue(1,3) + "<br/>";
	    strInfo += "<b>Data rilascio</b> : " + globals.dateFormat(dsDesc.getValue(1,4),globals.EU_DATEFORMAT) + "<br/>";
	    strInfo += "<b>Data inizio</b> : " + globals.dateFormat(dsDesc.getValue(1,5),globals.EU_DATEFORMAT) + "<br/>";
	    strInfo += "<b>Data fine</b> : " + globals.dateFormat(dsDesc.getValue(1,6),globals.EU_DATEFORMAT) + "<br/>";
    }
    else
    	strInfo = "Nessun dato disponibile per l'identificativo " + idStoricoCertificatoTelematico + ".<br/>";
   
    // descrizione eventuale reperibilità
    strInfo += "<br/>";
	strInfo += "<b>Reperibilità</b> : " + "<br/>";
    var sqlRep = "SELECT TCR.Cognome, TCR.Indirizzo + ' ' + TCR.Civico AS Indirizzo"
               + ", TCR.CAP + ' ' + TCI.Descrizione + ' (' + TCR.Provincia + ')' AS Comune"
               + " FROM Telematici_Certificati_Reperibilita TCR"
               + " LEFT OUTER JOIN Tab_ComuniItalia TCI ON TCR.CodComune = TCI.CodComune"
               + " WHERE idTelematicoCertificato = ?"
    var arrRep = [idStoricoCertificatoTelematico];
    var dsRep = databaseManager.getDataSetByQuery(globals.Server.MA_PRESENZE,sqlRep,arrRep,-1);
    if(dsRep.getMaxRowIndex() > 0)
    {
    	// compilazione informazioni reperibilità
    	strInfo += "<b>C/o</b> : " + dsRep.getValue(1,1) + "<br/>";
        strInfo += "<b>Indirizzo</b> : " + dsRep.getValue(1,2) + "<br/>";
        strInfo += "<b>Comune</b> : " + dsRep.getValue(1,3) + "<br/>";
    }
    else	
       strInfo += "Nessuna reperibilità indicata.<br/>";
     
    // descrizione eventuali file xml associati
    strInfo += "<br/>";
	strInfo += "<b>Files XML associati</b> : <br/>";
    var sqlXml = "SELECT FileXML + '  (Mat.INPS ' + MatricolaINPS + ')' AS FileXML"
    	       + " FROM Telematici_Certificati_MatricoleINPS TCMI"
               + " WHERE TCMI.idTelematicoCertificato = ?";
    var arrXml = [idStoricoCertificatoTelematico];
    var dsXml = databaseManager.getDataSetByQuery(globals.Server.MA_PRESENZE,sqlXml,arrXml,-1);
    
    if(dsXml.getMaxRowIndex() > 0)
    {
    	// TODO compilazione informazioni certificati xml
    	for(var x = 1; x <= dsXml.getMaxRowIndex(); x++)
    	{
    		strInfo += "<b>" + dsXml.getValue(x,1) + '</b><br/>';
    	}
    }
    else
    	strInfo += "Nessun file associato.";
    
    var frmTel = forms.storico_riepilogo_certificato_telematico;
    frmTel._strInfo = strInfo;
    globals.ma_utl_showFormInDialog(frmTel.controller.getName(),'Storico certificati telematici');  
    
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"C4E09115-7174-451C-A4D9-1C29CFECC0EA"}
 */
function onActionInfoNumCertTelematici(event)
{
	/** @type {Array<Number>}*/
	var arrIdStorico = globals.foundsetToArray(getFormRiepilogo().foundset,'idstorico');
	var numCertTelematici = scopes.telematici.getNumeroCertificatiTelematici(arrIdStorico);
	if(numCertTelematici > 0)
		globals.ma_utl_showInfoDialog("Numero di certificati telematici presenti : " + numCertTelematici.toString(),'Elenco certificazioni telematiche');
	else
		globals.ma_utl_showInfoDialog("Nessun certificato telematico presente",'Elenco certificazioni telematiche');
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"DCA5D685-8EF3-4C46-862C-AD59EE221A6F"}
 */
function onShow(firstShow, event) 
{
    plugins.busy.prepare();
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"BC98010E-FF1C-4C26-8C75-C4BEC46BA14B"}
 */
function onActionInfo(event) 
{
	var selRec = foundset.getSelectedRecord();
	switch(selRec.ideventoclasse)
	{
		case globals.EventoClasse.MALATTIA:
			/** @type {Array<Number>}*/
			var arrIdStorico = globals.foundsetToArray(getFormRiepilogo().foundset,'idstorico');
			var numCertTelematici = scopes.telematici.getNumeroCertificatiTelematici(arrIdStorico);
			if(numCertTelematici > 0)
				globals.ma_utl_showInfoDialog("Numero di certificati telematici presenti : " + numCertTelematici.toString(),'Elenco certificazioni telematiche');
			else
				globals.ma_utl_showInfoDialog("Nessun certificato telematico presente",'Elenco certificazioni telematiche');
			break;
		case globals.EventoClasse.PARENTALE:
		var msg = 'Figlio associato ai periodo di congedo visualizzati : ';
		var idStorico = selRec.idstoricolegato == 0 ? selRec.idstoricocertificato : selRec.idstoricolegato;
		msg += globals.getNominativoFiglioDatiAggiuntivi(globals.getIdDatiAggiuntiviFromStoricoPadre(idStorico));
		globals.ma_utl_showInfoDialog(msg,'Dati aggiuntivi congedo parentale');
		break;
		default:
			break;
				
			
	}
}
