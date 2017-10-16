<?php

require_once _PS_MODULE_DIR_.'pwa/pwa.php';
require_once _PS_MODULE_DIR_.'pwa/libs/config.php';
require_once _PS_MODULE_DIR_.'pwa/libs/PSWebServiceLibrary.php';
require_once _PS_MODULE_DIR_.'pwa/libs/login.php';
require_once _PS_MODULE_DIR_.'pwa/libs/addCustomer.php';
require_once _PS_MODULE_DIR_.'pwa/libs/addCart.php';
require_once _PS_MODULE_DIR_.'pwa/libs/updateCart.php';


class PwaAjaxModuleFrontController extends ModuleFrontController
{
    public function initContent()
    {
    
        $module = new Pwa;

        try {
            $webService = new PrestaShopWebservice(PS_WS_SHOP_PATH, PS_WS_AUTH_KEY, WS_DEBUG);
        
            if (Tools::isSubmit('action')) {

                // Usefull vars derivated from getContext
                $context = Context::getContext();
                $cart = $context->cart;
                $customer = $context->customer;
                $cookie = $context->cookie;
                $id_lang = $cookie->id_lang;
                
                // Default response with translation from the module
                $response = array('status' => false, "message" => $module->l('Nothing here.'));

                switch (Tools::getValue('action')) {
                    case 'login':

                        $response = loginUser($webService);
                        break;

                    case 'add_customer':

                        $response = addCustomer($webService);
                        break;

                    case 'add_cart':
                    
                        $response = addCart($webService);
                        break;
                 
                    case 'update_cart':
                        $response = updateCart($webService);
                        break;
                
                    case 'add_address':
                        $response = array('status' => true, "message" => $module->l('add_address'));
                        break;    
                    
                    default:
                        break;

                }
            }
        }catch (PrestaShopWebserviceException $e) {
            $response = array('status' => false, "message" => $e->getMessage());
        }

        $json = Tools::jsonEncode($response);
        echo $json;
        die;
    }
}