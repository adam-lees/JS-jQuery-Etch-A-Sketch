//default grid size
var gridSize = 50;

$(document).ready(function() {
  createGrid(gridSize);
});

$('#normal').click(function() {
  newGrid('normal');
});

$('#trail').click(function() {
  newGrid('trail');
})

//clears the current grid
$('#clear').click(function() {
  $('.grid').css('background-color', '#e8e8e8');
});

function createGrid(gridNum, type) {
  for (var i = 0; i < gridNum * gridNum; i++) {
    $('#container').append('<div class="grid"></div>')
  }
  
  var width = ($('#container').width()) / gridSize;
  $('.grid').css({'width': width, 'height': width});
  
  if (type === 'trail') {
    $('.grid').hover(function() {
      $(this).css('opacity', 0);
    }, function() {
      $(this).fadeTo('slow', 1);
    });
  }
  else {
    $('.grid').mouseenter(function() {
      $(this).css('background-color', 'black');
    });
  }
}

function newGrid(type) {
  $('.grid').remove();
  
  gridSize = parseInt(prompt("Enter number of squares (1-64)", 50));
  
  if (gridSize > 0 && gridSize <= 64) {
    createGrid(gridSize, type);
  }
  else {
    alert("Sorry that is not a valid input.");
  }
}