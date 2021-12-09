/** NESJS */
(function(){
    var scr;
  
    function setup() {
        scr = dcl.setupScreen(window.innerWidth ,window.innerHeight );
        scr.setBgColor('black');
        document.body.style.backgroundColor = 'black';      
    }

    setup();
})();