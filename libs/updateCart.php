<?php

function updateCart(&$webService){
    $opt = array('resource' => 'carts');
  
    if (Tools::isSubmit('update_cart')) {
      $opt['id'] = Tools::getValue('update_cart');
    }
  
    $xml = $webService->get($opt);
  
    if (isset($xml->cart->associations->cart_rows->cart_row)) {
      if(Tools::getValue('quantity') != 0){
        $index = 0;
        foreach ($xml->cart->associations->cart_rows->cart_row as $value) {
          ++$index;
    
          if ($value->id_product == Tools::getValue('id_product') 
              && $value->id_product_attribute == Tools::getValue('id_product_attribute')) {
            updateProductOnCart($value);
            break;
          } else if (count($xml->cart->associations->cart_rows->cart_row) == $index) {
            addProductToCart($xml);
            break;
          }
        }
      }else{
        $index = 0;
        foreach ($xml->cart->associations->cart_rows->cart_row as $value) {
          if ($value->id_product == Tools::getValue('id_product')) {
            unset($xml->cart->associations->cart_rows->cart_row[$index]);
            break;
          }
          ++$index;
        }
      }
  
    } else {
      addProductToCart($xml);
    }
  
    addNoRequiredFields($xml);
  
    $opt = array('resource' => 'carts');
    $opt['putXml'] = $xml->asXML();
    $opt['id'] = Tools::getValue('update_cart');
    $xml = $webService->edit($opt);
  
    return array('id_cart' => Tools::getValue('update_cart'), 'id_product' => Tools::getValue('id_product'));
  
}

function addProductToCart(&$xml)
{
  $row_count = count($xml->cart->associations->cart_rows->cart_row);

  $xml->cart->associations->cart_rows->cart_row[$row_count]->id_product = Tools::getValue('id_product');
  $xml->cart->associations->cart_rows->cart_row[$row_count]->id_product_attribute = Tools::getValue('id_product_attribute');
  $xml->cart->associations->cart_rows->cart_row[$row_count]->id_address_delivery = Tools::getValue('id_address_delivery');
  $xml->cart->associations->cart_rows->cart_row[$row_count]->quantity = Tools::getValue('quantity');
}

function updateProductOnCart(&$row)
{
  $row->id_address_delivery = Tools::getValue('id_address_delivery');
  $row->quantity = Tools::getValue('quantity');
  $row->id_product_attribute = Tools::getValue('id_product_attribute');
}

function addNoRequiredFields(&$xml)
{
  if (Tools::isSubmit('id_address_delivery')) {
    $xml->cart->id_address_delivery =Tools::getValue('id_address_delivery');
  }
  if (Tools::isSubmit('id_address_delivery')) {
    $xml->cart->id_address_invoice =Tools::getValue('id_address_delivery');
  }
  if (Tools::isSubmit('id_customer')) {
    $xml->cart->id_customer =Tools::getValue('id_customer');
  }
  if (Tools::isSubmit('id_carrier')) {
    $xml->cart->carrier =Tools::getValue('id_carrier');
  }
}