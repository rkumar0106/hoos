
 window.onload=function(){
    document.getElementById('sub').addEventListener('click',function(){
        console.log('submitting link');
        var l=document.getElementById('link').value;
        console.log(l)
        chrome.storage.local.set({link1: l}, function() {
            console.log(l, " link is added");
            a=l+' is added to feature foo';
            alert(a)
          }); });
    
     var linkArray
        chrome.storage.local.get(['link1'], function(result) {
            console.log('Value currently is ' + result.link1);
            linkArray = result.link1;
            document.getElementById("link").value = linkArray;
          });
          
          
          document.getElementById('sub2').addEventListener('click',function(){
            console.log('submitting link');
            var l2=document.getElementById('link2').value;
            console.log(l2)
            chrome.storage.local.set({link2: l2}, function() {
                console.log(l2, " link is added");
                a=l2+' is added to feature hoo';
                alert(a)
              }); });
        
         var linkArray2
            chrome.storage.local.get(['link2'], function(result) {
                console.log('Value currently is ' + result.link2);
                linkArray2 = result.link2;
                document.getElementById("link2").value = linkArray2;
              });

          chrome.storage.local.get('clnk', function (result) {
            console.log(result.clnk)
        });

             
                
                 
  }
