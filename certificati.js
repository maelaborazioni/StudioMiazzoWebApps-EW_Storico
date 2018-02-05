/**
 * @param {Number} periodo
 * @param {Number} idlavoratore
 * @param {Number} idditta
 * @param {Number} idEventoClasse
 * @param {Number} idStoricoPadre
 *
 * @properties={typeid:24,uuid:"8784268F-E64A-4FF9-B17F-C01E076592AD"}
 * @AllowToRunInFind
 */
function ApriGestioneStorico(periodo, idlavoratore, idditta, idEventoClasse, idStoricoPadre)
{
	forms.storico_main.init(idlavoratore, idditta, periodo, idEventoClasse);
	
    if(forms.storico_main.inizializzaRiepilogo(idStoricoPadre, true))
    {	
    	//nel caso di congedo parentale vanno specificati alcuni dati aggiuntivi relativi al figlio
    	//per il quale si vuole richiedere il periodo di congedo
    	var winLkpSelFiglio = application.createWindow('win_storico_dati_aggiuntivi',JSWindow.MODAL_DIALOG)
		winLkpSelFiglio.setInitialBounds(JSWindow.DEFAULT,JSWindow.DEFAULT,410,300)
		winLkpSelFiglio.title = 'Selezione dati aggiuntivi congedo'
			
    	/** @type {JSFoundset<db:/ma_presenze/storico_datiaggiuntivi>} */
    	var fsDatiAgg = databaseManager.getFoundSet(globals.Server.MA_PRESENZE, 'storico_datiaggiuntivi');
    	if (fsDatiAgg.find())
    	{
    		fsDatiAgg.idlavoratore = idlavoratore;
    		fsDatiAgg.search();
    	}
    	else
    	{
    		globals.ma_utl_showErrorDialog('Dipendente con id ' + idlavoratore + ' non trovato', 'Errore');
    		return;
    	}
    	
		forms.storico_dati_aggiuntivi_tab.foundset.loadRecords(fsDatiAgg);
		
		//se sono già presenti dati aggiuntivi 
		if(forms.storico_dati_aggiuntivi_tab.foundset.getSize() > 0)
			globals.ma_utl_showFormInDialog(forms.storico_dati_aggiuntivi_scelta_tab.controller.getName(), 'Selezione dati aggiuntivi congedo');
		else
		{    		
    		//apri la finestra di selezione dati aggiuntivi in modalità inserimento nuovo figlio
			forms.storico_dati_aggiuntivi_tab.foundset.newRecord();
			forms.storico_dati_aggiuntivi_tab.foundset.idlavoratore = idlavoratore;
			globals.ma_utl_setStatus(globals.Status.EDIT,'storico_dati_aggiuntivi_tab_dtl');    		
			globals.ma_utl_showFormInDialog(forms.storico_dati_aggiuntivi_tab.controller.getName(), 'Inserisci dati aggiuntivi congedo');
		}
    }
    else
       	globals.ma_utl_showFormInDialog(forms.storico_main.controller.getName(),'Gestisci certificato');
}

/**
 * @param {Object} oldValue
 * @param {Object} newValue
 * @param {JSEvent} event
 * 
 * @properties={typeid:24,uuid:"3A3775B7-C505-40BE-8C02-013A2C2C81A7"}
 */
function onDataChangeField$certificato(oldValue, newValue, event)
{
	var success = true;
	
	if(newValue instanceof Date && newValue['getFullYear']() < 1000)
		return false;
	
	var currElemName = event.getElementName();
	var frmName      = event.getFormName();
	/** @type {RuntimeForm}*/
	var mainForm     = forms[frmName].getMainForm();
	var mainFormName = mainForm.controller.getName();
	
	var sqlInfoEL = "SELECT soloMessaggio,tipocontrollo FROM E2InformativiEventiLunghi WHERE idEventoClasse = ? AND CodiceCertificato = ? AND applicasu = ?";
	var dsInfoEL = databaseManager.getDataSetByQuery(globals.Server.MA_PRESENZE, sqlInfoEL, [mainForm['vIdEventoClasse'], mainForm['vCodiceCertificato'], currElemName], -1);

	if (dsInfoEL.getMaxRowIndex()) 
	{
		globals.annotazioni(currElemName, forms[frmName]['idstoricocertificato'], mainFormName);
	
		if(dsInfoEL.getValue(1, 2) == 1)
		{
		    // controllo uscita
			success = globals.controlloCampo(currElemName, forms[frmName]['idstoricocertificato'], mainFormName);
			if(!success)
				return false;
		}
	}
	
	var arrSeqElems = forms[frmName].controller.getTabSequence();
	
	var nextElemSeqIndex = arrSeqElems.indexOf(currElemName);
	if (nextElemSeqIndex == -1 || ++nextElemSeqIndex >= arrSeqElems.length)
		nextElemSeqIndex = null;
	
	if (nextElemSeqIndex) 
	{
		var nextElemName = arrSeqElems[nextElemSeqIndex];

		dsInfoEL = databaseManager.getDataSetByQuery(globals.Server.MA_PRESENZE, sqlInfoEL, [mainForm['vIdEventoClasse'], mainForm['vCodiceCertificato'], nextElemName], -1);
		if(dsInfoEL.getValue(1, 2) == 0)
			success = globals.propostaCampo(nextElemName, forms[frmName]['idstoricocertificato'], mainFormName);
	}
	
	return success;	
}

/**
 * @param idEventoClasse
 *
 * @properties={typeid:24,uuid:"D6B24D53-676B-4B66-A3FB-824EE0C19E82"}
 */
function RichiedeDatiAggiuntivi(idEventoClasse)
{
	switch(idEventoClasse)
	{
		case globals.EventoClasse.MALATTIA:
		case globals.EventoClasse.INFORTUNIO:
		case globals.EventoClasse.MATERNITA:
		case globals.EventoClasse.PARENTALE_PATERNO:
		case globals.EventoClasse.MATRIMONIALE:
			return false;
			
		case globals.EventoClasse.PARENTALE:
			//nel caso di nuovo periodo di congedo parentale va scelto uno tra i figli precedenti 
			//oppure vanno inseriti i dati del nuovo figlio
		    return true;
		
		default: throw new Error('Classe certificato ' + idEventoClasse + ' non riconosciuta');
	}
}