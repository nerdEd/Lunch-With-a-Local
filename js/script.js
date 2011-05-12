var renderTweets = function(data) {
  var tweetBox = $('#tweets');
  _.each(data.results, function(tweet) {
    tweetBox.append("<p>" + tweet.text + "<p>");
  });
};

var loadTweets = function() {
  $.ajax({
    url: 'http://search.twitter.com/search.json', 
    dataType: 'jsonp',
    data: {q: 'nerded'},
    success: renderTweets
  });
};

$(function(){
  var list = $('ul.restaurants');
  var sourceData = list.clone();

  $('a.filter').bind('click', function(){
    var dinner = $(sourceData).find(this.getAttribute('data-selector'));
    list.quicksand(dinner);
  });
});
