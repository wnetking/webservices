<?php
class pwadisplayModuleFrontController extends ModuleFrontController
{
  public function initContent()
  {
    $link_end = '&'; 
    $link = new Link;
    $ajax_link = $link->getModuleLink('pwa','ajax');

    if(Configuration::get('PS_REWRITING_SETTINGS')){
      $link_end = '?';
    }

    self::$smarty->assign('ajax_url', $ajax_link . $link_end);
    
    parent::initContent();
    $this->setTemplate('module:pwa/views/templates/front/display.tpl');
  }
}