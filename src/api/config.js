
let getValue = (value) => {
  if(typeof window.pwa_module_config_json !== "undefined"){
    return typeof window.pwa_module_config_json[value] === undefined ?
      '': window.pwa_module_config_json[value]
  }
}
export default {
  'shopUrl': getValue('base_url'),
  'apiUrl': `${getValue('base_url')}api/`,
  'apiKey': getValue('api_key'),
  'dataType': 'output_format=JSON',
  'routeSuffix': '',
  'postRequest': {
    'url': getValue('ajax_url')
  }
}
