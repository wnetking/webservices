<?php
require_once('../libs/config.php');
require_once('../libs/PSWebServiceLibrary.php');

try
{
  $webService = new PrestaShopWebservice(PS_SHOP_PATH, PS_WS_AUTH_KEY, DEBUG);

  $existCustomer = $webService->get( array( 'url' => PS_SHOP_PATH .'/api/customers/?display=[id,email,passwd]&filter[email]='.$_GET["email"]));
  
  if(count($existCustomer->customers->customer) > 0){
    if( password_verify($_GET["passwd"], $existCustomer->customers->customer[0]->passwd)){
      $jsonstring = json_encode(array(
        'id_customer' => (int) $existCustomer->customers->customer[0]->id
      ),JSON_PRETTY_PRINT);

      echo $jsonstring;
    }else{
      $jsonstring = json_encode(array(
        'message' => 'Sorry! Password do not correct.'
      ),JSON_PRETTY_PRINT);
    
      echo $jsonstring;
    }
  }else{
    $jsonstring = json_encode(array(
      'message' => 'Sorry, not register user with email ' .$_GET["email"] . '.'
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