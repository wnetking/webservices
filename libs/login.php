<?php

function loginUser(&$webService){
  $existCustomer = $webService->get(array('url' => PS_WS_SHOP_PATH . 
  '/api/customers/?display=[id,email,passwd]&filter[email]=' . Tools::getValue('email')));
  if (count($existCustomer->customers->customer) > 0) {
    if (password_verify(Tools::getValue('passwd'), $existCustomer->customers->customer[0]->passwd)) {
      
      return array(
        'isLogin' => true, 
        'user_id' => (int)$existCustomer->customers->customer[0]->id
      );

    } else {

      return array(
        'isLogin' => false, 
        'message' => 'Sorry! Password do not correct.'
      );   
    }
  } else {
    
    return array(
      'isLogin' => false,
      'message'=> 'Sorry, not register user with email ' . Tools::getValue('email') . '.'
    );
  
  }
}