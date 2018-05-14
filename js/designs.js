const grid = $('#pixelCanvas');
const gridHeight = $('#inputHeight').val();
const gridWidth =  $('#inputWidth').val();
$('form').on('submit', function (event) {
  event.preventDefault();
  let gridHeight = $('#inputHeight').val();
  let gridWidth =  $('#inputWidth').val();
  makeGrid();
function makeGrid() {
  $('table tr').remove();
   for (let x=1; x<=gridHeight; ++x)  {
    $(grid.append('<tr></tr>'));
}
      for (let y=1; y<=gridWidth; ++y){
        $('tr').append('<td></td>');
}
}
});
$('table').on('click','td',function () {
  let drawColor=$('#colorPicker').val();
  $( this ).css('background-color', drawColor);
});
/*working on a drag and draw function*/
// $(( 'table' ).on('mousedown', 'td') && $('table').on('hover', 'td'), function(event) {
//   event.preventDefault();
//   let drawColor=$('#colorPicker').val();
//   $( this ).css('background-color', drawColor);
// });
{
$('#addColumn').on('click', function() {
  let gridWidth = Number($('#inputWidth').val()) + 1;
  $('#inputWidth').val(gridWidth);
  $('tr').append('<td></td>');
  console.log(gridWidth);
  // return gridWidth;
});
$('#addRow').on('click', function() {
  let gridHeight = Number($('#inputHeight').val()) + 1;
  $('#inputHeight').val(gridHeight);
  $(grid.append('<tr></tr>'));
  let gridWidth = ($('#inputWidth').val());
  for (x=1; x<=(gridWidth); ++x){
    $('tr').last('tr').append('<td></td>');
}})
};
