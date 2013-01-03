<?php
/**
 *
 *
 *
 */
class Juno_Cookielaw_Model_Source_Iconshape
{
    public function toOptionArray()
    {
		//TODO the preauth
		 return array(
            array('value' => 'triangle', 'label' => Mage::helper('core')->__('Triangle')),
            array('value' => 'diamond', 'label' => Mage::helper('core')->__('Diamond'))
        );
    }
}