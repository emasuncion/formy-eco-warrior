$(function() {
  Reveal.addEventListener('fragmentshown', function() {
    if ($(this).text().match(/Office Supplies Reduction -- Mainly on Paper$/)) {
      $('#paper').show();
    }
    if ($(this).text().match(/2-3 months$/)) {
      $('#calendar').show();
    }
  });
  Reveal.addEventListener('fragmenthidden', function() {
    if ($(this).text().match(/Office Supplies Reduction -- Mainly on Paper$/)) {
      $('#paper').hide();
    }
    if ($(this).text().match(/2-3 months$/)) {
      $('#calendar').hide();
    }
  });
})
