const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://shopee14.p.rapidapi.com/shopee/product-details/',
  params: {
    token: '<REQUIRED>',
    url: 'https://shopee.vn/Tai-nghe-ch%E1%BB%A5p-tai-kh%C3%B4ng-d%C3%A2y-bluetooth-STN28-m%C3%A0u-s%E1%BA%AFc-cute-%C3%A2m-thanh-%E1%BA%A5m-bass-m%E1%BA%A1nh-Ph%E1%BB%A5-Ki%E1%BB%87n-123-i.304853378.4466113256?sp_atk=d8a772ef-cbd0-45e9-8001-fdb48dbc4a69%26xptdk=d8a772ef-cbd0-45e9-8001-fdb48dbc4a69',
    country: '<REQUIRED>'
  },
  headers: {
    'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
    'X-RapidAPI-Host': 'shopee14.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}