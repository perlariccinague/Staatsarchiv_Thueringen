<?php
return array(
  'label' => array('Timer', 'Stellt die Dauer des Timers ein, der nach dieser eingestellten Zeit auf die Startseite zurückspringt...'),
  'types' => array('content', 'module'),
  'contentCategory' => 'texts',
  'moduleCategory' => 'miscellaneous',
  'beTemplate' => 'be_wildcard',
  'standardFields' => array(''),
  'wrapper' => array(
    'type' => 'none',
  ),
  'fields' => array(
    'time' => array(
      'label' => array('Dauer in Minuten', 'z.B. 2 oder 10'),
      'inputType' => 'text',
      'eval' => array('tl_class' => 'w50')
    ),
    'targetPage' => array(
      'label' => array('Die Seite, auf die nach der angegebenen Zeit zurückgesprungen werden soll', ''),
      'inputType' => 'pageTree',
      'eval' => array('tl_class' => 'clr')
    )
  ),
);
