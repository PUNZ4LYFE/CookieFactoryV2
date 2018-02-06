window.addEventListener('load', init, false);

function init() {


    document.getElementById('chocolatechip').addEventListener('click', chocolatechip);
    document.getElementById('biscuit').addEventListener('click', biscuit);
    document.getElementById('gingerbread').addEventListener('click', gingerbread);


    document.getElementById('chocolate').addEventListener('click', chocolate);
    document.getElementById('vanilla').addEventListener('click', vanilla);
    document.getElementById('marble').addEventListener('click', marble);

    var botonChocolate = document.getElementById('chocolate');
    var botonVanilla = document.getElementById('vanilla');
    var botonMarble = document.getElementById('marble');

    var cookieFactory = new CookieFactory();

    function chocolatechip() {
        cookieFactory = new ChocolatechipFactory();
    }

   function biscuit() {
        cookieFactory = new BiscuitFactory();
    }

    function gingerbread() {
        cookieFactory = new GingerbreadFactory();
    }
    
   function chocolate() {
        var cookie = cookieFactory.getChocolateCookie();
        cookie.SetPositionAndStyle();

    }

   function vanilla() {
        cookieFactory.getVanillaCookie();
    }

    function marble() {
        cookieFactory.getMarbleCookie();
    }

}