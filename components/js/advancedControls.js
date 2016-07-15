+function() {
  var Controls = require('../coffeescript/controls');
  function advancedControlsHandler() {
    var $overlay = $('.modal-overlay');

    $overlay.hide();

    // Enable the 'add' button only when text is present
    $('.advanced-controls-textbox').bind('input propertychange', function(e) {
      var inputText = $(this).val();
      var $addButton = $('.advanced-controls-update-button')
      if (inputText.length) {
        $addButton.prop('disabled', false);
      } else {
        $addButton.prop('disabled', true);
      }
    });

    $('.excluded-values-button').on('click', function(e) {
      $overlay.show();
    });

    $('.advanced-controls-cancel-button').on('click', function(e) {
      $overlay.hide();
    });

    $('.advanced-controls-update-button').on('click', function(e) {
      // Get values from list & run query
      var textInput = $('.advanced-controls-textbox').val();
      if (textInput.length) {
        var excluded = textInput.split(/\s*,\s*/g);
        Controls.runQueryWithExcludedValues(excluded);
      } else {
        Controls.runQueryWithExcludedValues(null);
      }
      $overlay.hide();
    });
  }
    
  module.exports = {
    advancedControlsHandler: advancedControlsHandler
  }
}()
