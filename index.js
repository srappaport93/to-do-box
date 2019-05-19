var cardContainer = $('.card-container');
var submit = $('.addtolist');

var item_array = [];
var priority_array=[];


getTodoItems();

///section where local storage stuff is retrieved
function getTodoItems() {
  console.log('i run')
    if (localStorage.length != 0) {
      console.log('i tried')
        for (var i = 0; i < localStorage.length; i++) {
          var key = localStorage.key(0);
          item_arr = JSON.parse(key);
          var priority = localStorage.getItem(key)
          priority_arr = JSON.parse(priority); }

    console.log(item_arr)
    console.log(priority_arr)

    for (var k = 0; k < item_arr.length; k++) {

    var itm = item_arr[k];
    var prio = priority_arr[k];
    var dummy = {itm: itm, prio: prio};
    console.log(dummy)
    cardContainer.append(`
      <p class="list"><button>___</button>
    ${dummy.itm} is ${dummy.prio} priority.
     </p>
  `); }
  var BUTT = $('button');
  BUTT.on("click", deleteItem); }

  else {
      console.log("Error: you don't have localStorage!");
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
   </p>
`);
  var BUTT = $('button');
  BUTT.on("click", deleteItem);

  var store_item = item;
  var store_priority = priority;
  storeList(store_item, store_priority);

  $('.item').val("");
  $('.priority').val("");

}

function deleteItem() {
  event.target.parentNode.remove()
  }

  function storeList (listItem, listPriority) {
    localStorage.clear()
    item_array.push(listItem);
    priority_array.push(listPriority);
    localStorage.setItem(JSON.stringify(item_array), JSON.stringify(priority_array));
    console.log(localStorage)
}
