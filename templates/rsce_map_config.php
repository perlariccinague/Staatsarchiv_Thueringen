<?php
return array(
  'label' => array('Karte', 'Beschreibung...'),
  'types' => array('content', 'module'),
  'contentCategory' => 'texts',
  'moduleCategory' => 'miscellaneous',
  'beTemplate' => 'be_wildcard',
  'standardFields' => array(''),
  'wrapper' => array(
    'type' => 'none',
  ),
  'fields' => array(
    'name' => array(
      'label' => array('Name der Karte', ''),
      'inputType' => 'text'
    ),
    'yCoords' => array(
      'label' => array('Y-Koordinaten'),
      'inputType' => 'text',
      'eval' => ['tl_class' => 'w50']
    ),
    'xCoords' => array(
      'label' => array('X-Koordinaten', ''),
      'inputType' => 'text',
      'eval' => ['tl_class'=>'w50']
    ),
  ),
);
