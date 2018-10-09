<?php
/**
 * @author Zoltan Szanto <mrbig00@gmail.com>
 */

/**
 * A base controller which is meant to be extended to serve the right pages for the react generated urls
 *
 * Class ReactController
 */
abstract class BaseController extends ModuleFrontController
{
    public function initContent()
    {
        $module_name = 'webservices';
        $link = new Link;
        $base_link = Context::getContext()->shop->getBaseURL(true);

        $module_link_display = $link->getModuleLink($module_name, 'display');
        $api_key = Configuration::get('WEBSERVICES_API_KEY');
        $pwa_module_config = [
            'base_url' => $base_link,
            'api_key' => $api_key,
            'module_link_display' => $module_link_display,
        ];
        self::$smarty->assign('pwa_module_config_json', Tools::jsonEncode($pwa_module_config));
        self::$smarty->assign('base_link', $base_link);
        parent::initContent();

        $this->setTemplate('module:webservices/views/templates/front/display.tpl');
    }
}