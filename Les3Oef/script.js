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
        
        //doet de validatie weg
        document.getElementById('login__form').setAttribute('novalidate','novalidate');

        document.getElementById('login__form').addEventListener('submit', function(e) {
            // halt event
            e.preventDefault();
            e.stopPropagation();

            let isValid = true;

            //shortcuts message
            let errUname = document.getElementById('errUname');
            let errPass = document.getElementById('errPass');

            //shortcuts
            let inpUname = document.getElementById('inpUname');
            let inpPass = document.getElementById('inpPass');

            //check email
            if(inpUname.value == ''){
                isValid = false;
                errUname.innerHTML = 'gelieve een email adres in te vullen';
                errUname.style.display = 'block';
            } else if (!inpUname.value.includes('@')){
                errUname.innerHTML = 'gelieve een geldig email adres in te vullen';
            }
            
            

            //check password
            if(inpPass.value == ''){
                isValid = false;
                errPass.innerHTML = 'gelieve een paswoord in te vullen';
                errPass.style.display = 'block';
            }

            //console check
            if(isValid == true){
                console.log('all ok');
            } else {
                console.log('form contains errors!')
            }
        });

        let thumbs = document.querySelectorAll('.main__thumbs>figure');
        let big = document.querySelector('.main__large');
        let photo = big.querySelector('img');

        for (let i = 0; i < thumbs.length; i++) {
            let thumb = thumbs[i];
            let link = thumb.querySelector('a');
            let img = thumb.querySelector('img');
            let description = document.querySelector('.large__title');
            link.addEventListener('click', function(e) {
                // prevent default link action
                e.preventDefault();
                // show image
                photo.src = link.href;
                photo.alt = img.alt;
                description.innerHTML = img.alt;
                // change active state
                document.querySelector('.main__thumbs .active').classList.remove('active');
                thumb.classList.add('active');
            });
        }    
    });
})();