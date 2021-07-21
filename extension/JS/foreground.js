
 window.onload=function(){
    document.getElementById('sub').addEventListener('click',function(){
        console.log('getting you some help');
        chrome.tabs.create({url: 'https://www.howtogeek.com/127162/how-to-create-custom-keyboard-shortcuts-for-browser-actions-and-extensions-in-google-chrome/'});

     });
     document.getElementById('reopen').addEventListener('click',function(){
      chrome.storage.local.get('clnk', function(result) {
         for(i=0;i<result.clnk.length;i++){
         
         link = result.clnk[i];
         chrome.tabs.create({url: link})
         console.log('adding',link)
         }
       }); 
   });
  }
