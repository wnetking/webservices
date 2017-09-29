<?php

require_once('../libs/config.php');
require_once('../libs/PSWebServiceLibrary.php');
require_once('../models/Cart.php');

if (isset($_GET['create'])) {
  $cart = new Cart();
}

echo "Hello World <br>";

print_r($_GET);