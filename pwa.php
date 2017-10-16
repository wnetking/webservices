<?php
if (!defined('_PS_VERSION_'))
{
  exit;
}

class Pwa extends Module
{
  public function __construct()
  {
    $this->name = 'pwa';
    $this->tab = 'front_office_features';
    $this->version = '1.0.0';
    $this->author = 'wnetking';
    $this->need_instance = 0;
    $this->ps_versions_compliancy = array('min' => '1.7', 'max' => _PS_VERSION_);
    $this->bootstrap = true;

    parent::__construct();

    $this->displayName = $this->l('Progressive Web App (PWA)');
    $this->description = $this->l('Make you shop faster with the latest web technologies.');

    $this->confirmUninstall = $this->l('Are you sure you want to uninstall?');

    if (!Configuration::get('PWA'))
      $this->warning = $this->l('No name provided');
  }

  public function install()
  {
    if (Shop::isFeatureActive())
      Shop::setContext(Shop::CONTEXT_ALL);
  
    if (!parent::install() ||
      !$this->registerHook('leftColumn') ||
      !$this->registerHook('header') || !$this->registerHook('footer') ||
      !Configuration::updateValue('PWA', 'my friend')
    )
      return false;
  
    return true;
  }
  public function uninstall()
  {
    if (!parent::uninstall() ||
      !Configuration::deleteByName('PWA')
    )
      return false;
  
    return true;
  }

  public function hookDisplayLeftColumn($params)
  {
    $this->context->smarty->assign(
        array(
            'my_module_name' => Configuration::get('PWA'),
            'my_module_link' => $this->context->link->getModuleLink('pwa', 'display')
        )
    );
    return $this->display(__FILE__, 'pwa.tpl');
  }
  
  public function hookDisplayRightColumn($params)
  {
    return $this->hookDisplayLeftColumn($params);
  }
  
  public function hookDisplayHeader()
  {
    $link_end = '&'; 
    $link = new Link;
    $ajax_link = $link->getModuleLink('pwa','ajax');

    if(Configuration::get('PS_REWRITING_SETTINGS')){
      $link_end = '?';
    }

    Media::addJsDef(array(
        "ajax_url" => $ajax_link . $link_end
    ));
  }

  public function hookFooter($params)
  {      

  }
}