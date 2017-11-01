<?php
class pwadisplayModuleFrontController extends ModuleFrontController
{
  public function initContent()
  {
    $link = new Link;
    $base_link = Context::getContext()->shop->getBaseURL(true);
    $ajax_link = $link->getModuleLink('pwa','ajax');
    $module_link_display = $link->getModuleLink('pwa','display');
    $api_key = Configuration::get('PWA');

    $pwa_module_config = array(
      'ajax_url' => $ajax_link,
      'base_url' => $base_link,
      'api_key' => $api_key,
      'module_link_display' => $module_link_display
    );

    self::$smarty->assign('pwa_module_config_json', Tools::jsonEncode($pwa_module_config));
    self::$smarty->assign('base_link', $base_link);

    parent::initContent();

    $this->setTemplate('module:pwa/views/templates/front/display.tpl');
  }
}