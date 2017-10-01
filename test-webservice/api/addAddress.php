<?php
require_once('../libs/config.php');
require_once('../libs/PSWebServiceLibrary.php');

try
{
  $webService = new PrestaShopWebservice(PS_SHOP_PATH, PS_WS_AUTH_KEY, DEBUG);

    // Getting the empty XML document to send back completed
    $xml = $webService->get( array( 'url' => PS_SHOP_PATH .'/api/addresses?schema=blank' ) );

    // Adding dinamic and mandatory fields
    // Required
    $xml->address->id_customer  = $id_customer;
    $xml->address->id_country   = $id_country;
    $xml->address->alias        = $firstname.' '.$lastname.'\'alias';
    $xml->address->lastname     = $lastname;
    $xml->address->firstname    = $firstname;
    $xml->address->city         = $city;
    $xml->address->address1     = $address1;
    // Others
    $xml->address->phone_mobile = $phone_mobile;
    $xml->address->postcode     = $ZIP;
    $xml->address->date_add     = $date_now;
    $xml->address->date_upd     = $date_now;

    // Adding the new Customer's Addresss
    $opt = array( 'resource' => 'addresses' );
    $opt['postXml'] = $xml->asXML();
    $xml = $webService->add($opt);
    $id_address = $xml->address->id;   

  $jsonstring = json_encode(array(
    'id_customer' => (int)$id_customer
  ),JSON_PRETTY_PRINT);
  
  echo $jsonstring;
}
catch (PrestaShopWebserviceException $e)
{
	$trace = $e->getTrace();
	if ($trace[0]['args'][0] == 404) echo 'Bad ID';
	else if ($trace[0]['args'][0] == 401) echo 'Bad auth key';
	else echo 'Other error<br />'.$e->getMessage();
}