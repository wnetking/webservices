<?php
require_once('../libs/config.php');
require_once('../libs/PSWebServiceLibrary.php');

// update_cart=19&id_product=2&id_product_attribute=2&id_address_delivery=1&quantity=12

try
{
	$webService = new PrestaShopWebservice(PS_SHOP_PATH, PS_WS_AUTH_KEY, DEBUG);
	$opt = array('resource' => 'carts');
	if (isset($_GET['update_cart']))
		$opt['id'] = $_GET['update_cart'];
  $xml = $webService->get($opt);
  
  $index = 0;

  if(isset($xml->cart->associations->cart_rows->cart_row)){
    foreach ($xml->cart->associations->cart_rows->cart_row as $value){
      ++$index;

      if($value->id_product ==  $_GET["id_product"] && $value->id_product_attribute == $_GET["id_product_attribute"]){
        $xml->cart->associations->cart_rows->cart_row[$index-1]->id_address_delivery = $_GET["id_address_delivery"];
        $xml->cart->associations->cart_rows->cart_row[$index-1]->quantity = $xml->cart->associations->cart_rows->cart_row[$index-1]->quantity + $_GET["quantity"];
      }else{       
        if($index == count($xml->cart->associations->cart_rows->cart_row)){
          
          $row_count = count($xml->cart->associations->cart_rows->cart_row);

          $xml->cart->associations->cart_rows->cart_row[$row_count]->id_product            = $_GET["id_product"];
          $xml->cart->associations->cart_rows->cart_row[$row_count]->id_product_attribute  = $_GET["id_product_attribute"];
          $xml->cart->associations->cart_rows->cart_row[$row_count]->id_address_delivery   = $_GET["id_address_delivery"];
          $xml->cart->associations->cart_rows->cart_row[$row_count]->quantity              = $_GET["quantity"];
        }
      } 
     
  }
  }else{
    $row_count = count($xml->cart->associations->cart_rows->cart_row);
    
              $xml->cart->associations->cart_rows->cart_row[$row_count]->id_product            = $_GET["id_product"];
              $xml->cart->associations->cart_rows->cart_row[$row_count]->id_product_attribute  = $_GET["id_product_attribute"];
              $xml->cart->associations->cart_rows->cart_row[$row_count]->id_address_delivery   = $_GET["id_address_delivery"];
              $xml->cart->associations->cart_rows->cart_row[$row_count]->quantity              = $_GET["quantity"];
  }
 
  // $xml->cart->id_address_delivery = $_GET["id_address"];
  // $xml->cart->id_address_invoice  = $_GET["id_address"];
  // $xml->cart->id_customer         = $_GET["id_customer"];
  // $xml->cart->carrier             = $_GET["id_carrier"];
  // $xml->cart->date_add            = $_GET["date_now"];
  // $xml->cart->date_upd            = $_GET["date_now"];
  
  $opt = array('resource' => 'carts');
  $opt['putXml'] = $xml->asXML();
  $opt['id'] = $_GET['update_cart'];
  $xml = $webService->edit($opt);

  $jsonstring = json_encode(array(
    'added_product_id' => $_GET["id_product"]
  ),JSON_PRETTY_PRINT);

  echo $jsonstring;
}
catch (PrestaShopWebserviceException $e)
{
	// Here we are dealing with errors
	$trace = $e->getTrace();
	if ($trace[0]['args'][0] == 404) echo 'Bad ID';
	else if ($trace[0]['args'][0] == 401) echo 'Bad auth key';
	else echo 'Other error<br />'.$e->getMessage();
}