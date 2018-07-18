/**
 * Restituisce true se il certificato avente l'identificativo passato è di tipo telematico,
 * false altrimenti
 * 
 * @param {Number} idStoricoCertificato
 *
 * @properties={typeid:24,uuid:"DC1634F5-B072-410A-A078-2DDA27750C4B"}
 * @AllowToRunInFind
 */
function isCertificatoTelematico(idStoricoCertificato)
{
	/** @type {JSFoundSet<db:/ma_presenze/storico_certificati_legamitelematici>} */
	var fsLegami = databaseManager.getFoundSet(globals.Server.MA_PRESENZE,globals.Table.STORICO_LEGAMI_TELEMATICI);
	if(fsLegami.find())
	{
		fsLegami.idstoricocertificato = idStoricoCertificato;
		if(fsLegami.search())
			return true;
	}
	
	return false;
}

/**
 * @AllowToRunInFind
 * 
 * Restituisce il record con le informazioni relative al certificato telematico
 * avente l'identificativo passato
 * 
 * @param {Number} idStoricoCertificato
 *
 * @return {JSRecord<db:/ma_presenze/telematici_certificati>}
 *  
 * @properties={typeid:24,uuid:"993D7D93-1A11-4097-BBDC-A723E5E491A1"}
 */
function getCertificatoTelematico(idStoricoCertificato)
{
	/** @type {JSFoundSet<db:/ma_presenze/storico_certificati_legamitelematici>} */
	var fsLegami = databaseManager.getFoundSet(globals.Server.MA_PRESENZE,globals.Table.STORICO_LEGAMI_TELEMATICI);
	if(fsLegami.find())
	{
		fsLegami.idstoricocertificato = idStoricoCertificato;
		if(fsLegami.search())
			return fsLegami.storico_certificati_legamitelematici_to_telematici_certificati.getSelectedRecord();
	}
	
	return null;
}

/**
 * @AllowToRunInFind
 * 
 * Restituisce il numero dei certificati telematici tra tutti quelli associati al riepilogo
 * 
 * @param {Array<Number>} arrIdStoricoCertificato
 *
 * @properties={typeid:24,uuid:"7277CB84-118F-4B76-93D6-0C5F6531F3B5"}
 */
function getNumeroCertificatiTelematici(arrIdStoricoCertificato)
{
	/** @type {JSFoundSet<db:/ma_presenze/storico_certificati_legamitelematici>} */
	var fsLegami = databaseManager.getFoundSet(globals.Server.MA_PRESENZE,globals.Table.STORICO_LEGAMI_TELEMATICI);
	if(fsLegami.find())
	{
		fsLegami.idstoricocertificato = arrIdStoricoCertificato;
		return fsLegami.search();
    }
	
	return 0;
}

/**
 * @AllowToRunInFind
 * 
 * Ottiene il foundset con i certificati figli del certificato di riepilogo avente l'identificativo indicato
 * come parametro
 * 
 * @param {Number} idStoricoCertificatoPadre
 *
 * @return {JSFoundSet<db:/ma_presenze/storico_certificati>}
 * 
 * @properties={typeid:24,uuid:"5E8A4CFE-31A5-490B-8700-E416775D75A8"}
 */
function getCertificatiFigli(idStoricoCertificatoPadre)
{
	/** @type {JSFoundSet<db:/ma_presenze/storico_certificati>} */
	var fsCertificati = databaseManager.getFoundSet(globals.Server.MA_PRESENZE,globals.Table.STORICO);
	if(fsCertificati.find())
	{
		fsCertificati.idstoricolegato = idStoricoCertificatoPadre;
		if(fsCertificati.search())
		   return fsCertificati;	
	}
	
	return null;
}