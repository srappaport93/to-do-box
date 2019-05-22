var cardContainer = $('.card-container');
var submit = $('.addtolist');
var item_array = [];
var priority_array=[];


getTodoItems();

///section where local storage stuff is retrieved
function getTodoItems() { //pulls key/value arrays out of local storage
    if (localStorage.length != 0) {
        for (var i = 0; i < localStorage.length; i++) {
          var key = localStorage.key(0);
          item_arr = JSON.parse(key);
          var priority = localStorage.getItem(key)
          priority_arr = JSON.parse(priority); }

    //pulls each to-do out of respective arrays and adds to the list upon refresh
    for (var k = 0; k < item_arr.length; k++) {
    var itm = item_arr[k];
    var prio = priority_arr[k];
    item_array.push(itm);
    priority_array.push(prio);
    var dummy = {itm: itm, prio: prio};
    cardContainer.append(`
      <p class="list"><button>___</button>
    ${dummy.itm} is ${dummy.prio} priority.
     </p>
  `); }

  //enables deletion for newly-added items
  var BUTT = $('button');
  BUTT.on("click", deleteItem); }

  else {
      console.log("No local storage");
  }
}



///

submit.on("click", appendToDo);


function appendToDo() {
  var item = $('.item').val();
  var priority = $('.priority').val();
  var list = {item: item, priority: priority};

  cardContainer.append(`
    <p class="list"><button>___</button>
  ${list.item} is ${list.priority} priority.
   </p>`);
  var BUTT = $('button');
  BUTT.on("click", deleteItem);

  var store_item = item;
  var store_priority = priority;
  storeList(store_item, store_priority);

  $('.item').val("");
  $('.priority').val("");
  }

function deleteItem() {
  event.target.parentNode.remove();
  var htmlstring = event.target.parentNode.innerText;
  deleteFromStorage(htmlstring)
  }

  function deleteFromStorage(htmlstring){
    htmlstring=htmlstring.substring(4)
    var isindex = htmlstring.indexOf(' is');
    htmlstring = htmlstring.substring(0, isindex)
    htmlstring = htmlstring.trim()

//open localStorage
  for (var i = 0; i < localStorage.length; i++) {
  var key = localStorage.key(0);
  item_arr = JSON.parse(key);
  var priority = localStorage.getItem(key)
  priority_arr = JSON.parse(priority);
  }
  htmlisat = item_arr.indexOf(htmlstring)
  //delete item in first array and second array pair key/value
  item_arr.splice(htmlisat, 1);
  priority_arr.splice(htmlisat, 1);
//push item_array and priority_array back into localStorage
  localStorage.clear()
localStorage.setItem(JSON.stringify(item_arr), JSON.stringify(priority_arr));
  }

function storeList (listItem, listPriority) {
    localStorage.clear()
    item_array.push(listItem);
    priority_array.push(listPriority);
    localStorage.setItem(JSON.stringify(item_array), JSON.stringify(priority_array));
    console.log(localStorage)
    }
