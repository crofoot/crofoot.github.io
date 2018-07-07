$(document).ready(function() {

    function d(){
        var l = ['t', 'o', 'o', 'f', 'o', 'r', 'c'];
        var f = ['c', 'i', 'n', 'i', 'm', 'o', 'd'];
        var m = 'gmail';
        var c = 'com';
        function n() {    
            var nm = f.reverse().join('') + String.fromCharCode(46) +  l.reverse().join('') + String.fromCharCode(64) + m + String.fromCharCode(46) + c
            return nm
        }
        return n();    
      }


      $('#contact')
      .popup({
        on: 'click',
        content : d(),
        position : 'bottom center'
      });

    
})