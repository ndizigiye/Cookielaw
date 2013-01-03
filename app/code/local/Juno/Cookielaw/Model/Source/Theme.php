<?php
/**
 *
 *
 *
 */
class Juno_Cookielaw_Model_Source_Theme
{
    public function toOptionArray()
    {
		//TODO the preauth
		 return array(
            array('value' => 'light', 'label' => Mage::helper('core')->__('Light')),
            array('value' => 'dark', 'label' => Mage::helper('core')->__('Dark'))
        );
    }
}