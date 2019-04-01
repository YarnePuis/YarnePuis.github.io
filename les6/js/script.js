;(function(){
    "use strict";

    function handleError(err) {
        console.log('Request failed', err)
    }
    function handleResponse(resp) {
      console.log('response status: ', resp.status);
      return resp.json();
    }
    function handleSuccess(data) {
      console.log('data received: ', data);
    }
    let url = 'http://www.songsterr.com/a/ra/songs/byartists.xml?';
    fetch(url)
        .then(handleResponse)
        .then(handleSuccess)
        .catch(handleError);

})();