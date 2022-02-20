$('document').ready(function () {
  $('h2[data-type=vitamin]').css({ background: 'green' });
  $('h2[data-type=mineralwater]').css({ background: 'blue', color: 'gold' });
  $('h2[data-type=proteinbar]').css({ background: 'purple', color: 'gold' });
  // part 2
  document
    .querySelector('#cbVitamins')
    .addEventListener('change', function (evt) {
      updateProductView('vitamins', evt.target.checked);
    });
  document
    .querySelector('#cbMineralWater')
    .addEventListener('change', function (evt) {
      updateProductView('mineralwater', evt.target.checked);
    });
  document
    .querySelector('#cbProtein')
    .addEventListener('change', function (evt) {
      updateProductView('proteinbar', evt.target.checked);
    });

  $('.product-item').each(function () {
    let prodName = encodeURIComponent($(this).children('h2').text());
    let prodID = encodeURIComponent($(this).data('prod_id'));

    let link = $(
      "<a href='product.html?prodName=" + prodName + '&prodID=' + prodID + "'/>"
    );
    $(this).children('img').wrap(link);
  });
});

function updateProductView(categoryName, bVisible) {
  let dataSelectorVal = '';
  switch (categoryName) {
    case 'vitamins':
      dataSelectorVal = "h2[data-type='vitamin']";
      break;
    case 'mineralwater':
      dataSelectorVal = "h2[data-type='mineralwater']";
      break;
    case 'proteinbar':
      dataSelectorVal = "h2[data-type='proteinbar']";
      break;
  }
  $('.product-item')
    .has(dataSelectorVal)
    .css('display', bVisible ? '' : 'none');
}
