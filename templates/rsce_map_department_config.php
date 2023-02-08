<?php
return array(
  'label' => array('Abteilung', ''),
  'types' => array('content', 'module'),
  'contentCategory' => 'texts',
  'moduleCategory' => 'miscellaneous',
  'beTemplate' => 'be_wildcard',
  'standardFields' => array(''),
  'wrapper' => array(
    'type' => 'none',
  ),
  'fields' => array(
    'department' => array(
      'label' => array('Der Ort der Abteilung'),
      'inputType' => 'text',
      'eval' => array('tl_class' => 'w50')
    ),
      'titel' => array(
          'label' => array('Abteilung'),
          'inputType' => 'text',
          'eval' => array('tl_class' => 'w50')
      ),
    'address_street' => array(
      'label' => array('Straße', ''),
      'inputType' => 'text',
      'eval' => array('tl_class' => 'clr w50')
    ),
    'address_number' => array(
      'label' => array('Hausnummer', ''),
      'inputType' => 'text',
      'eval' => array('tl_class' => 'w50')
    ),
    'address_zip' => array(
      'label' => array('PLZ', ''),
      'inputType' => 'text',
      'eval' => array('tl_class' => 'w50')
    ),
    'description' => array(
      'label' => array('Beschreibung', ''),
      'inputType' => 'text',
      'eval' => array('tl_class' => 'clr')
    ),
    'image' => array(
      'label' => array('Bild', ''),
      'inputType' => 'fileTree',
      'eval' => array('tl_class' => 'clr', 'filesOnly' => true)
    )
  ),
);
