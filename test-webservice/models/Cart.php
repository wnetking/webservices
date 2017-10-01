<?php

class Cart
{
  public $id_currency;
  public $id_lang;
  public $products;
  public $id_address;
  public $id_customer;
  public $id_carrier;
  public $date_now;
  public $xml;
  public $id_cart;
  protected $webService;

  function __construct($webService, $id_currency, $id_lang,$products,
                       $id_address,$id_customer,$id_carrier,$date_now)
  {
    if (!extension_loaded('curl'))
      throw new PrestaShopWebserviceException('Please activate the PHP extension \'curl\' to allow use of PrestaShop webservice library');
     $this->id_currency = $id_currency;
     $this->id_lang = $id_lang;
     $this->products = $products;
     $this->id_address = $id_address;
     $this->id_customer = $id_customer;
     $this->id_carrier = $id_carrier;
     $this->date_now = $date_now;
     $this->webService = $webService;
  }


  public function createNewCart()
  {
      $xml = $this->webService->get(array('url' => PS_SHOP_PATH . 'api/carts?schema=blank'));

      // Adding dinamic and mandatory fields
      // Required
      $xml->cart->id_currency = $this->id_currency;
      $xml->cart->id_lang = $this->id_lang;
      $xml->cart->associations->cart_rows->cart_row[0]->id_product = $this->products[0]['id_product'];
      $xml->cart->associations->cart_rows->cart_row[0]->id_product_attribute = $this->products[0]['id_product_attribute'];
      $xml->cart->associations->cart_rows->cart_row[0]->id_address_delivery = $this->id_address;
      $xml->cart->associations->cart_rows->cart_row[0]->quantity = $this->products[0]['quantity'];
      // Others
      // $this->xml->cart->id_address_delivery = $this->id_address;
      // $this->xml->cart->id_address_invoice = $this->id_address;
      // $this->xml->cart->id_customer = $this->id_customer;
      // $this->xml->cart->carrier = $this->id_carrier;
      // $this->xml->cart->date_add = $this->date_now;
      // $this->xml->cart->date_upd = $this->date_now;
      
      var_dump($xml);

      // Adding the new customer's cart
      // $opt = array('resource' => 'carts');
      // $opt['postXml'] = $this->xml->asXML();
      // $this->xml = $this->webService->add($opt);
      // $this->id_cart = $this->xml->cart->id;

      echo "Cart with id=" . $this->id_cart . " succusesful added";
  }
}
