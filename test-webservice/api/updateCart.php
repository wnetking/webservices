<?php
require_once('../libs/config.php');
require_once('../libs/PSWebServiceLibrary.php');

// update_cart=19&id_product=2&id_product_attribute=2&id_address_delivery=1&quantity=12

try {
  $webService = new PrestaShopWebservice(PS_SHOP_PATH, PS_WS_AUTH_KEY, DEBUG);
  $opt = array('resource' => 'carts');

  if (isset($_GET['update_cart'])) {
    $opt['id'] = $_GET['update_cart'];
  }

  $xml = $webService->get($opt);

  if (isset($xml->cart->associations->cart_rows->cart_row)) {
    if($_GET['quantity'] != 0){
      $index = 0;
      foreach ($xml->cart->associations->cart_rows->cart_row as $value) {
        ++$index;
  
        if ($value->id_product == $_GET["id_product"] && $value->id_product_attribute == $_GET["id_product_attribute"]) {
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
        if ($value->id_product == $_GET["id_product"]) {
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
  $opt['id'] = $_GET['update_cart'];
  $xml = $webService->edit($opt);

  $jsonstring = json_encode(array(
  'id' => $_GET["id_product"]
  ), JSON_PRETTY_PRINT);

  echo $jsonstring;

} catch (PrestaShopWebserviceException $e) {
  // Here we are dealing with errors
  $trace = $e->getTrace();
  if ($trace[0]['args'][0] == 404) echo 'Bad ID';
  else if ($trace[0]['args'][0] == 401) echo 'Bad auth key';
  else echo 'Other error<br />' . $e->getMessage();
}

function addProductToCart(&$xml)
{
  $row_count = count($xml->cart->associations->cart_rows->cart_row);

  $xml->cart->associations->cart_rows->cart_row[$row_count]->id_product = $_GET["id_product"];
  $xml->cart->associations->cart_rows->cart_row[$row_count]->id_product_attribute = $_GET["id_product_attribute"];
  $xml->cart->associations->cart_rows->cart_row[$row_count]->id_address_delivery = $_GET["id_address_delivery"];
  $xml->cart->associations->cart_rows->cart_row[$row_count]->quantity = $_GET["quantity"];
}

function updateProductOnCart(&$row)
{
  $row->id_address_delivery = $_GET["id_address_delivery"];
  $row->quantity = $_GET["quantity"];
  $row->id_product_attribute = $_GET["id_product_attribute"];
}

function addNoRequiredFields(&$xml)
{
  if (isset($_GET["id_address_delivery"])) {
    $xml->cart->id_address_delivery = $_GET["id_address_delivery"];
  }
  if (isset($_GET["id_address_delivery"])) {
    $xml->cart->id_address_invoice = $_GET["id_address_delivery"];
  }
  if (isset($_GET["id_customer"])) {
    $xml->cart->id_customer = $_GET["id_customer"];
  }
  if (isset($_GET["id_carrier"])) {
    $xml->cart->carrier = $_GET["id_carrier"];
  }
}