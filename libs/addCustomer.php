<?php

function addCustomer(&$webService){   
     
    $existCustomer = $webService->get(array('url' => PS_WS_SHOP_PATH . 
      '/api/customers/?display=[email]&filter[email]=' .  Tools::getValue('email')));
  
    if (count($existCustomer->customers->customer) > 0) {
      return array(
      'isLogin' => false,
      'message' => 'User with email ' . Tools::getValue('email') . ' exist');  
    }
  
    $xml = $webService->get(array('url' => PS_WS_SHOP_PATH . '/api/customers?schema=blank'));
  
    // Required
    $xml->customer->passwd = Tools::getValue('passwd');
    $xml->customer->lastname = Tools::getValue('lastname');
    $xml->customer->firstname = Tools::getValue('firstname');
    $xml->customer->email = Tools::getValue('email');
  
    // Others
  
    if (Tools::isSubmit('birthday')) {
      $xml->customer->birthday = Tools::getValue('birthday');
    }
  
    if (Tools::isSubmit('id_lang')) {
      $xml->customer->id_lang = Tools::getValue('id_lang');
    }
    if (Tools::isSubmit('id_shop')) {
      $xml->customer->id_shop = Tools::getValue('id_shop');
    }
    if (Tools::isSubmit('id_shop_group')) {
      $xml->customer->id_shop_group = Tools::getValue('id_shop_group');
    }
    if (Tools::isSubmit('id_group')) {
      $xml->customer->id_default_group = Tools::getValue('id_group'); // Customers
    }
    if (Tools::isSubmit('optin')) {
      $xml->customer->optin = Tools::getValue('optin');
    }
    
    $xml->customer->active = 1;
  
    if (Tools::isSubmit('newsletter')) {
      $xml->customer->newsletter = Tools::getValue('newsletter');
    }
 
    if (Tools::isSubmit('id_gender')) {
      $xml->customer->id_gender = Tools::getValue('id_gender');
    }
    if (Tools::isSubmit('id_group')) {
      $xml->customer->associations->groups->group[0]->id = Tools::getValue('id_group'); // customers
    }
  
    // Adding the new customer
    $opt = array('resource' => 'customers');
    $opt['postXml'] = $xml->asXML();
    $xml = $webService->add($opt);
    $id_customer = $xml->customer->id;
  
    return array('isLogin' => true, 'user_id' => (int)$id_customer);  
}