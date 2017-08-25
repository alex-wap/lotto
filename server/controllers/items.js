module.exports = {
  index: function(req, res) {
      console.log("index goes here");

      var osmosis = require('osmosis');
      
     osmosis
     .get('http://www.powerball.com/pb_home.asp')
     .find('font')
     .contains('million')
    //  .set('location')
    //  .follow('@href')
    //  .find('header + div + div li > a')
    //  .set('category')
    //  .follow('@href')
    //  .paginate('.totallink + a.button.next:first')
    //  .find('p > a')
    //  .follow('@href')
     .set({
         'title':        'does this even work',
         'description':  'wat',
        //  'subcategory':  'div.breadbox > span[4]',
        //  'date':         'time@datetime',
        //  'latitude':     '#map@data-latitude',
        //  'longitude':    '#map@data-longitude',
        //  'images':       ['img@src']
     })
     .data(function(listing) {
         // do something with listing data 
     })
     .log(console.log)
     .error(console.log)
     .debug(console.log)
     .data(function(results) { //output
        console.log(results);
      });

      res.send("index goes here");
      // res.json();
  },
  refresh: function(req, res) {
      console.log("refresh goes here");
  }
}