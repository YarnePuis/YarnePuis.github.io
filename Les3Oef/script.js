;
(function () {
    'use strict';

    window.addEventListener('load', function () {
        // code wordt uitgevoerd na het laden van de pagina

        document.getElementById('btnLogin').addEventListener('click',
            function () {
                // Toon de loginmodal
                document.getElementById('loginmodal').classList.remove('loginmodal--verborgen');
            });

        //add toegevoegd, btnCancel
        document.getElementById('btnCancel').addEventListener('click',
            function () {
                // Toon de loginmodal
                document.getElementById('loginmodal').classList.add('loginmodal--verborgen');
            });

        //valideren of email klopt
        document.getElementById('btnSubmit').addEventListener('click',
            function () {
                //wanneer er een fout is, toon de errortext in console

                if (document.getElementById('inpUname') = '') {
                    console.log('fout!!!');
                }
            });
    });
})();