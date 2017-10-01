<?php
require_once('../libs/config.php');
require_once('../libs/PSWebServiceLibrary.php');

try
{
	$webService = new PrestaShopWebservice(PS_SHOP_PATH, PS_WS_AUTH_KEY, DEBUG);
	if (isset($_GET['create'])){
      $xml = $webService->get(array('url' => PS_SHOP_PATH.'/api/carts?schema=blank'));
    
      $xml->cart->id_currency         = $_GET["id_currency"];
      $xml->cart->id_lang             = $_GET["id_lang"];
      $xml->cart->associations->cart_rows->cart_row[0]->id_product            = $_GET["id_product"];
      $xml->cart->associations->cart_rows->cart_row[0]->id_product_attribute  = $_GET["id_product_attribute"];
      $xml->cart->associations->cart_rows->cart_row[0]->id_address_delivery   = $_GET["id_address_delivery"];
      $xml->cart->associations->cart_rows->cart_row[0]->quantity              = $_GET["quantity"]; 
      
      // Adding the new customer's cart        
      $opt = array( 'resource' => 'carts' );
      $opt['postXml'] = $xml->asXML();
      $xml = $webService->add( $opt );
      $id_cart = $xml->cart->id;
      
      $jsonstring = json_encode(array(
        'id_cart' => (int)$id_cart
      ),JSON_PRETTY_PRINT);

      echo $jsonstring;
  }
}

catch (PrestaShopWebserviceException $e)
{
	$trace = $e->getTrace();
	if ($trace[0]['args'][0] == 404) echo 'Bad ID';
	else if ($trace[0]['args'][0] == 401) echo 'Bad auth key';
	else echo 'Other error<br />'.$e->getMessage();
}
