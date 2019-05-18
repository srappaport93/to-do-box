var cardContainer = $('.card-container');
var submit = $('.addtolist');

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

  $('.item').val("");
  $('.priority').val("");
}

function deleteItem() {
  event.target.parentNode.remove()
  }
