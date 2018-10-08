<?php
/**
* 2007-2018 PrestaShop
*
* NOTICE OF LICENSE
*
* This source file is subject to the Academic Free License (AFL 3.0)
* that is bundled with this package in the file LICENSE.txt.
* It is also available through the world-wide-web at this URL:
* http://opensource.org/licenses/afl-3.0.php
* If you did not receive a copy of the license and are unable to
* obtain it through the world-wide-web, please send an email
* to license@prestashop.com so we can send you a copy immediately.
*
* DISCLAIMER
*
* Do not edit or add to this file if you wish to upgrade PrestaShop to newer
* versions in the future. If you wish to customize PrestaShop for your
* needs please refer to http://www.prestashop.com for more information.
*
*  @author    PrestaShop SA <contact@prestashop.com>
*  @copyright 2007-2018 PrestaShop SA
*  @license   http://opensource.org/licenses/afl-3.0.php  Academic Free License (AFL 3.0)
*  International Registered Trademark & Property of PrestaShop SA
*/

class webservicesdisplayModuleFrontController extends ModuleFrontController
{
  public function initContent()
  {
    $module_name = 'webservices';
    $link = new Link;
    $base_link = Context::getContext()->shop->getBaseURL(true);

    $module_link_display = $link->getModuleLink($module_name,'display');
    $api_key = Configuration::get('WEBSERVICES_API_KEY');
    $pwa_module_config = array(
      'base_url' => $base_link,
      'api_key' => $api_key,
      'module_link_display' => $module_link_display
    );
    self::$smarty->assign('pwa_module_config_json', Tools::jsonEncode($pwa_module_config));
    self::$smarty->assign('base_link', $base_link);
    parent::initContent();

    $this->setTemplate('module:webservices/views/templates/front/display.tpl');
  }
}