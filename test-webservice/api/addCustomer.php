<?php
require_once('../libs/config.php');
require_once('../libs/PSWebServiceLibrary.php');

try {
  $webService = new PrestaShopWebservice(PS_SHOP_PATH, PS_WS_AUTH_KEY, DEBUG);

  $existCustomer = $webService->get(array('url' => PS_SHOP_PATH . '/api/customers/?display=[email]&filter[email]=' . $_GET["email"]));

  if (count($existCustomer->customers->customer) > 0) {
    $jsonstring = json_encode(array(
    'message' => 'User with email ' . $_GET["email"] . ' exist'
    ), JSON_PRETTY_PRINT);

    echo $jsonstring;
    exit;
  }

  $xml = $webService->get(array('url' => PS_SHOP_PATH . '/api/customers?schema=blank'));

  // Required
  $xml->customer->passwd = $_GET["passwd"];
  $xml->customer->lastname = $_GET["lastname"];
  $xml->customer->firstname = $_GET["firstname"];
  $xml->customer->email = $_GET["email"];

  // Others
  if (isset($GET["id_lang"])) {
    $xml->customer->id_lang = $GET["id_lang"];
  }
  if (isset($GET["id_shop"])) {
    $xml->customer->id_shop = $GET["id_shop"];
  }
  if (isset($GET["id_shop_group"])) {
    $xml->customer->id_shop_group = $GET["id_shop_group"];
  }
  if (isset($GET["id_group"])) {
    $xml->customer->id_default_group = $_GET["id_group"]; // Customers
  }
  if (isset($GET["id_group"])) {
    $xml->customer->active = 1;
  }
  if (isset($GET["newsletter"])) {
    $xml->customer->newsletter = $_GET["newsletter"];
  }
  if (isset($GET["date_now"])) {
    $xml->customer->newsletter_date_add = $_GET["date_now"];
  }
  if (isset($GET["date_now"])) {
    $xml->customer->last_passwd_gen = $_GET["date_now"];
  }
  if (isset($GET["date_now"])) {
    $xml->customer->date_add = $_GET["date_now"];
  }
  if (isset($GET["date_now"])) {
    $xml->customer->date_upd = $_GET["date_now"];
  }
  if (isset($GET["id_gender"])) {
    $xml->customer->id_gender = $_GET["id_gender"];
  }
  if (isset($GET["id_group"])) {
    $xml->customer->associations->groups->group[0]->id = $_GET["id_group"]; // customers
  }

  // Adding the new customer
  $opt = array('resource' => 'customers');
  $opt['postXml'] = $xml->asXML();
  $xml = $webService->add($opt);
  $id_customer = $xml->customer->id;

  $jsonstring = json_encode(array(
  'id_customer' => (int)$id_customer
  ), JSON_PRETTY_PRINT);

  echo $jsonstring;

} catch (PrestaShopWebserviceException $e) {
  $trace = $e->getTrace();
  if ($trace[0]['args'][0] == 404) echo 'Bad ID';
  else if ($trace[0]['args'][0] == 401) echo 'Bad auth key';
  else echo 'Other error<br />' . $e->getMessage();
}