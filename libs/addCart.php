<?php

function addCart(&$webService){
  
  $xml = $webService->get(array('url' => PS_WS_SHOP_PATH . '/api/carts?schema=blank'));
  
  $xml->cart->id_currency = Tools::getValue('id_currency');
  $xml->cart->id_lang = Tools::getValue('id_lang');
  $xml->cart->associations->cart_rows->cart_row[0]->id_product = Tools::getValue('id_product');
  $xml->cart->associations->cart_rows->cart_row[0]->id_product_attribute = Tools::getValue('id_product_attribute');
  $xml->cart->associations->cart_rows->cart_row[0]->id_address_delivery = Tools::getValue('id_address_delivery');
  $xml->cart->associations->cart_rows->cart_row[0]->quantity = Tools::getValue('quantity');
  
  if (Tools::isSubmit('id_customer')) {
    $xml->cart->id_customer = Tools::getValue('id_customer');
  }
  if (Tools::isSubmit('id_address_delivery')) {
    $xml->cart->id_address_delivery = Tools::getValue('id_address_delivery');
  }
  
    // Adding the new customer's cart
  $opt = array('resource' => 'carts');
  $opt['postXml'] = $xml->asXML();
  $xml = $webService->add($opt);
  $id_cart = $xml->cart->id;
  
  return array(
    'id_cart' => (int)$id_cart,
    'id_product' => Tools::getValue('id_product')
  ); 
}
