<?php
return array(
  'label' => array('PDF', 'Beschreibung...'),
  'types' => array('content', 'module'),
  'contentCategory' => 'texts',
  'moduleCategory' => 'miscellaneous',
  'beTemplate' => 'be_wildcard',
  'standardFields' => array(''),
  'wrapper' => array(
    'type' => 'none',
  ),
  'fields' => array(
    'pdf' => array(
      'label' => array('Die PDF-Datei', ''),
      'inputType' => 'fileTree',
      'eval' => ["filesOnly" => true]
    ),
  ),
);
