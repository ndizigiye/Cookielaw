<?php
/**
 *
 *
 */
 
class Juno_Cookielaw_Helper_Data extends Mage_Core_Helper_Abstract
{	

	public function getSettings()
	{
		return Mage::getStoreConfig('cookielaw');
	}
	
}