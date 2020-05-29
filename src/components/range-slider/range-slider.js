var maxOutput = document.querySelector(".rangeslider-output-max");
var minOutput = document.querySelector(".rangeslider-output-min");

(function() {

  function addSeparator(nStr) {
      nStr += '';
      var x = nStr.split('.');
      var x1 = x[0];
      var x2 = x.length > 1 ? '.' + x[1] : '';
      var rgx = /(\d+)(\d{3})/;
      while (rgx.test(x1)) {
          x1 = x1.replace(rgx, '$1' + '.' + '$2');
      }
      return x1 + x2;
  }

  function rangeInputChangeEventHandler(e){
      var rangeGroup = $(this).attr('name'),
          minBtn = $(this).parent().children('.min'),
          maxBtn = $(this).parent().children('.max'),
          range_min = $(this).parent().children('.rangeslider-range-min'),
          range_max = $(this).parent().children('.rangeslider-range-max'),
          minVal = parseInt($(minBtn).val()),
          maxVal = parseInt($(maxBtn).val()),
          origin = $(this).context.className;

      if(origin === 'min' && minVal > maxVal-5){
          $(minBtn).val(maxVal-5);
      }
      var minVal = parseInt($(minBtn).val());
      $(range_min).html(addSeparator(minVal * 133 - 54).replace(".", " ") + ' ₽');
      
      if(origin === 'max' && maxVal-5 < minVal){
          $(maxBtn).val(5+ minVal);
      }
      var maxVal = parseInt($(maxBtn).val());
      
      maxOutput.style.width = maxVal * 2.6
      minOutput.style.width = minVal * 2.6
      maxOutput.style.left = "0px";

      $(range_max).html(addSeparator(maxVal * 133 + 25).replace(".", " ") + ' ₽');
  }

$('input[type="range"]').on( 'input', rangeInputChangeEventHandler);
})();


