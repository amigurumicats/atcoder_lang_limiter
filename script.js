
chrome.storage.local.get(["disables"], function(data){
  let disables = data.disables;
  if(disables == undefined) disables = [];

  let options = document.getElementById("select-lang").children[0].children;
  let len = options.length
  let i = 0;
  for(let i_dummy=0; i_dummy < len; i_dummy++){
    if(disables.includes(options[i].textContent)){
      options[i].remove();
    }
    else{
      i++;
    }
  }

});
