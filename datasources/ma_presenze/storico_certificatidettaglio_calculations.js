/**
 * @properties={type:8,typeid:36,uuid:"8233E94D-3FF2-47A1-BD4E-2C15C8D494F4"}
 */
function valore_number()
{
	return parseFloat(valore.replace(',','.'));
}

/**
 * @properties={type:93,typeid:36,uuid:"02F039A0-A2D3-4D30-A4F6-79ABAD8433DF"}
 * @SuppressWarnings(deprecated)
 */
function valore_datetime()
{
	try
	{
		if(valore == '00:00:00' || valore == '00.00.00' || valore == '0:00:00' || valore == '0.00.00')
			return null;
		
		return utils.parseDate(valore, globals.EU_DATEFORMAT);
	}
	catch(ex)
	{
		globals.ma_utl_logError(ex);
		return null;
	}
}

/**
 * @properties={type:4,typeid:36,uuid:"F7C22A7C-06BE-4CD3-823C-1E876325233C"}
 */
function valore_integer()
{
	return parseInt(valore, 10);
	
}
