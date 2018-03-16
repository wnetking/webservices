{*
* 2007-2018 PrestaShop
*
* NOTICE OF LICENSE
*
* This source file is subject to the Academic Free License (AFL 3.0)
* that is bundled with this package in the file LICENSE.txt.
* It is also available through the world-wide-web at this URL:
* http://opensource.org/licenses/afl-3.0.php
* If you did not receive a copy of the license and are unable to
* obtain it through the world-wide-web, please send an email
* to license@prestashop.com so we can send you a copy immediately.
*
* DISCLAIMER
*
* Do not edit or add to this file if you wish to upgrade PrestaShop to newer
* versions in the future. If you wish to customize PrestaShop for your
* needs please refer to http://www.prestashop.com for more information.
*
*  @author    PrestaShop SA <contact@prestashop.com>
*  @copyright 2007-2018 PrestaShop SA
*  @license   http://opensource.org/licenses/afl-3.0.php  Academic Free License (AFL 3.0)
*  International Registered Trademark & Property of PrestaShop SA
*}

{assign var="module_name" value='webservices'}

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no">
  <meta name="theme-color" content="#000000">
  <script>
        var pwa_module_config_json = JSON.parse({$pwa_module_config_json|@json_encode nofilter})
  </script>
  <link rel="manifest" href="{$base_link}/modules/{$module_name}/views/js/manifest.json">
  <link rel="shortcut icon" href="{$base_link}/modules/{$module_name}/views/img/favicon.ico">
  <title>{$module_name}</title>
  <link href="{$base_link}/modules/{$module_name}/views/css/main.447c1ace.css" rel="stylesheet">
</head>

<body>
  <noscript>You need to enable JavaScript to run this app.</noscript>
  <div id="root"></div>
  <script type="text/javascript" src="{$base_link}/modules/{$module_name}/views/js/main.17d2269b.js"></script>
</body>

</html>