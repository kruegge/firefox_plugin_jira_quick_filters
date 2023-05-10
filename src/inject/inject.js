chrome.runtime.sendMessage({}, function(response) {
  var refresher = setInterval(function() {
    if (document.readyState == "complete") {
      var quickfiltersButton = Array.from(document.querySelectorAll('#ghx-quick-filters button span'))
        .find(span => span.innerText.includes('Quick filters') || span.innerText.includes('Schnellfilter'));
      
      if (quickfiltersButton) { 
        quickfiltersButton.click();
      } else {
        var filterList = Array.from(document.querySelectorAll('div#quickFilterList ul li[id^=filter-element-]'));
        
        var list = document.createElement('ul');
        list.classList.add('sc-16agb5g-0');
        
        filterList.forEach(function(current) {
          var li = document.createElement('li');
          li.classList.add('sc-1gvv0kj-0');
          
          var button = document.createElement('button');
          button.type = 'button';
          button.classList.add('css-1f7f0z2');
          button.style.paddingRight = '10px';
          
          var span = document.createElement('span');
          span.classList.add('css-178ag6o');
          span.innerText = current.textContent;
          
          button.appendChild(span);
          li.appendChild(button);
          li.addEventListener('click', function(){
            document.querySelector('#quickFilterList li[id="'+current.getAttribute('id')+'"] label').click();
          });
          
          list.appendChild(li);
        });
        
        var quickFilters = document.querySelector('#ghx-quick-filters');
        quickFilters.appendChild(list);
      }
      
      clearInterval(refresher);
    }
  }, 1000);
});

