module.exports = {
  index: function(req, res) {
      console.log("index goes here");

      var osmosis = require('osmosis');
    //   var regex = new RegExp('\$.*');
      var jackpot = "";
      var numbers = [];
     osmosis
     .get('http://www.powerball.com/pb_home.asp')
    //  .match('font',regex)
    //  .find('font')
     .find('td > font > strong')
    //  .contains('million')
     .set('value')
    //  .follow('@href')
    //  .find('header + div + div li > a')
    //  .set('category')
    //  .follow('@href')
    //  .paginate('.totallink + a.button.next:first')
    //  .find('p > a')
    //  .follow('@href')
    //  .set({
    //      'title':        'does this even work',
    //      'description':  'wat',
        //  'subcategory':  'div.breadbox > span[4]',
        //  'date':         'time@datetime',
        //  'latitude':     '#map@data-latitude',
        //  'longitude':    '#map@data-longitude',
        //  'images':       ['img@src']
    //  })
     .data(function(results) {
         if (results.value.length <= 2){
             numbers.push(results.value);
             console.log(numbers);
         }
         if (results.value[0] == "$" && jackpot.length < 1){
             console.log(`${results.value}`);
             jackpot = results.value;
             return;
            };
     })
     .log(console.log)
     .error(console.log)
     .debug(console.log)

     // use mongodb or this to store data: https://stackoverflow.com/a/36856787
    setTimeout(function(){ 
        res.send(`${jackpot} =>
Numbers: ${numbers.join(' - ')}`); 
    }, 100);
  },
  refresh: function(req, res) {
      console.log("refresh goes here");
      res.send("refresh is here soon"); 
  }
}