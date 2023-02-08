<?php
return array(
  'label' => array('THST-Galerie', 'Beschreibung...'),
  'types' => array('content', 'module'),
  'contentCategory' => 'texts',
  'moduleCategory' => 'miscellaneous',
  'beTemplate' => 'be_wildcard',
  'standardFields' => array(''),
  'wrapper' => array(
    'type' => 'none',
  ),
  'fields' => array(
    'imagesFolder' => array(
      'label' => array('Ordner mit Bildern', ''),
      'inputType' => 'fileTree',
      'eval' => ["isGallery" => true]
    ),
    'URL' => array(
      'label' => array('URL zum Ordner auf Server', ''),
      'inputType' => 'text'
    ),
  ),
);
