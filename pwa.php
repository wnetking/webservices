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
      !$this->registerHook('backOfficeHeader') ||
      !$this->registerHook('header') || !$this->registerHook('footer') ||
      !Configuration::updateValue('PWA', ' ')
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

  public function getContent()
  {
      $output = null;
  
      if (Tools::isSubmit('submit'.$this->name))
      {
          $pwa = strval(Tools::getValue('PWA'));
          if (!$pwa
            || empty($pwa)
            || !Validate::isGenericName($pwa))
              $output .= $this->displayError($this->l('Invalid Configuration value'));
          else {
            Configuration::updateValue('PWA', $pwa);
            $output .= $this->displayConfirmation($this->l('Settings updated'));
          }
      }
      return $output.$this->displayForm();
  }

  public function displayForm()
  {
      // Get default language
      $default_lang = (int)Configuration::get('PS_LANG_DEFAULT');
  
      // Init Fields form array
      $fields_form[0]['form'] = array(
        'tabs' => array(

        ),
        'buttons' => array(
            array(
                'class' => 'btn btn-primary',
                'title' => $this->l('Configurations'),
                'type' => 'button',
                'name' => 'pwa_conf',
                'id' => 'pwa_config'
            ),
            array(
                'class' => 'btn btn-primary',
                'title' => $this->l('Layout'),
                'type' => 'button',
                'name' => 'pwa_layout',
            ),
            array(
                'class' => 'btn btn-primary',
                'title' => $this->l('Themes'),
                'type' => 'button',
                'name' => 'pwa_themes',
            ),
        )
      );

      $fields_form[1]['form'] = array(
        
        'legend' => array(
            'title' => $this->l('Configurations'),
        ),
        'input' => array(
            array(
                'type' => 'text',
                'label' => $this->l('Api key from Prestashop Webservice'),
                'name' => 'PWA',
                'size' => 20,
                'required' => true
            )
        ),
        'submit' => array(
            'title' => $this->l('Save'),
            'class' => 'btn btn-default pull-right'
        )
    );

    $fields_form[2]['form'] = array(
        'legend' => array(
            'title' => $this->l('Layout'),
        ),
        'submit' => array(
            'title' => $this->l('Save'),
            'class' => 'btn btn-default pull-right'
        )
    );
    
    $fields_form[3]['form'] = array(
        'legend' => array(
            'title' => $this->l('Themes'),
        ),
        'submit' => array(
            'title' => $this->l('Save'),
            'class' => 'btn btn-default pull-right'
        )
    );
  
      $helper = new HelperForm();
  
      // Module, token and currentIndex
      $helper->module = $this;
      $helper->name_controller = $this->name;
      $helper->token = Tools::getAdminTokenLite('AdminModules');
      $helper->currentIndex = AdminController::$currentIndex.'&configure='.$this->name;
  
      // Language
      $helper->default_form_language = $default_lang;
      $helper->allow_employee_form_lang = $default_lang;
  
      // Title and toolbar
      $helper->title = $this->displayName;
      $helper->show_toolbar = true;        // false -> remove toolbar
      $helper->toolbar_scroll = true;      // yes - > Toolbar is always visible on the top of the screen.
      $helper->submit_action = 'submit'.$this->name;
      $helper->toolbar_btn = array(
          'save' =>
          array(
              'desc' => $this->l('Save'),
              'href' => AdminController::$currentIndex.'&configure='.$this->name.'&save'.$this->name.
              '&token='.Tools::getAdminTokenLite('AdminModules'),
          ),
          'back' => array(
              'href' => AdminController::$currentIndex.'&token='.Tools::getAdminTokenLite('AdminModules'),
              'desc' => $this->l('Back to list')
          )
      );
  
      // Load current value
      $helper->fields_value['PWA'] = Configuration::get('PWA');
  
      return $helper->generateForm($fields_form);
  }

  public function hookBackOfficeHeader()
  {
      $this->context->controller->addJquery();
    //   $this->context->controller->addJqueryUI('ui.sortable');
    //   $this->context->controller->addJqueryUi('ui.widget');
    //   $this->context->controller->addJqueryPlugin('tagify');
    //   $this->context->controller->addJqueryPlugin('colorpicker');
      $this->context->controller->addJS($this->_path.'views/js/admin.js');
      $this->context->controller->addCSS($this->_path.'views/css/admin.css');
  }
}