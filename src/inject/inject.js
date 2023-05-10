chrome.runtime.sendMessage({}, function(response) {
var refresher = setInterval(function() {

	if (document.readyState == "complete") {
	      var $ = jQuery;

	      var quickfiltersButton = $('#ghx-quick-filters').find('button span:contains(Quick filters), button span:contains(Schnellfilter)');

	      if (quickfiltersButton.length) { 
		$(quickfiltersButton).click();
	      } else {
	      	// too much quickfilters - create new new and show below
	      	var filterList = $('div#quickFilterList ul li[id^=filter-element-]');
	      	
	      	var list = $("<ul class='sc-16agb5g-0'>");
	      	
	      	filterList.each(function() {
	      		var current = $(this);
	      		
	      		var li = $("<li class='sc-1gvv0kj-0'>").append($("<button type='button' class='css-1f7f0z2' style='padding-right:10px;'>").append($("<span class='css-178ag6o'>").text(current.text()))) 
	      		li.click(function(){$('#quickFilterList li[id="'+current.attr('id')+'"] label').click();});
	      		
	      		list.append(li);
	      	});
	      	
	      	
	      	var quickFilters = $('#ghx-quick-filters').append(list);
	      }
	      
	      clearInterval(refresher);
      }
    }, 1000);
});
