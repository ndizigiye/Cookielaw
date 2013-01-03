<?php
/**
 *
 *
 *
 */
class Juno_Cookielaw_Model_Source_Position
{
    public function toOptionArray()
    {
		//TODO the preauth
		 return array(
            array('value' => 'left', 'label' => Mage::helper('core')->__('Left')),
            array('value' => 'right', 'label' => Mage::helper('core')->__('Right'))
        );
    }
}