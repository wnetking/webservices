var pwa_module_config_json = {
  ajax_url: 'http://192.168.9.37/prestashop_audit/en/module/pwa/ajax',
  base_url: 'http://192.168.9.37/prestashop_audit/',
  api_key: '1RHNUJM1HQ7K171Y1PMNDTEG9I2TTCFE',
  module_link_display:
    'http://192.168.9.37/prestashop_audit/index.php?fc=module&module=webservices&controller=display'
};

let getValue = value => {
  let configJson = window.pwa_module_config_json;

  if (!window.pwa_module_config_json) {
    configJson = pwa_module_config_json;
  }

  if (configJson[value]) {
    return configJson[value];
  }

  return null;
};

let hostUrl = new URL(window.location.href);
let productionRoutePath = new URL(getValue('module_link_display'));
export default {
  shopUrl: getValue('base_url'),
  apiUrl: `${getValue('base_url')}api/`,
  apiKey: getValue('api_key'),
  dataType: 'output_format=JSON',
  routeSuffix: '',
  postRequest: {
    url: getValue('ajax_url')
  },
  routePath:
    hostUrl.hostname === 'localhost'
      ? '/'
      : productionRoutePath.pathname + productionRoutePath.search
};
