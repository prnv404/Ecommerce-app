var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  let products =[{
    name :"IPHONE 11",
    category:"mobile",
    description:'Apple iPhone 11 is powered by the Apple A13 Bionic processor. The smartphone comes with a 6.1 inches Liquid Retina IPS LCD capacitive touchscreen and 828 x 1792 pixels resolution. The screen of the device is protected by Scratch-resistant glass and oleophobic coating.',
    image:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone11-select-2019-family_GEO_EMEA?wid=882&hei=1058&fmt=jpeg&qlt=90&.v=1567022219953"
  },{
    name :"IPHONE 11 PRO",
    category:"mobile",
    description:' iPhone 11 Pro is powered by a hexa-core Apple A13 Bionic processor. It comes with 4GB of RAM. The iPhone 11 Pro runs iOS 13 and is powered by a 3046mAh non-removable battery. The iPhone 11 Pro supports wireless charging, as well as proprietary fast charging.',
    image:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MWYK2?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1567304928359"
  },{
    name :"IPHONE 12",
    category:"mobile",
    description:'The iPhone 12 costs more than its predecessors but has a crisp new HDR OLED screen. It offers nearly all the feaures of the iPhone 12 Pro, minus some camera capabilities, but should be a good enough package for most users. Apple has returned to a flat aluminium frame but the iPhone 12 promises to be more durable thanks to its Ceramic Shield material on the front and IP68 rating.',
    image:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-purple-select-2021?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1617130317000"
  },{
    name :"IPHONE 12 PRO",
    category:"mobile",
    description:' iPhone 12 Pro is powered by a hexa-core Apple A14 Bionic processor. The iPhone 12 Pro supports wireless charging, as well as proprietary fast charging.',
    image:"https://static.toiimg.com/thumb/resizemode-4,msid-78671027,imgsize-200,width-1200/78671027.jpg"
  }]
  res.render('admin/view-products',{admin:true,products})
});

module.exports = router;

