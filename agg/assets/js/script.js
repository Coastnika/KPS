(function (window, document) {
    'use strict';


    var file = './agg/assets/svg-sprite.html',
        revision = 1;

    if (!document.createElementNS || !document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect) {
        console.log('NO ELEMENT!');
        return true;
    }

    var isLocalStorage = 'localStorage3' in window && window['localStorage3'] !== null,
        request,
        data,
        insertIT = function () {
            document.body.insertAdjacentHTML('afterbegin', data);
        },
        insert = function () {
            if (document.body) insertIT();
            else document.addEventListener('DOMContentLoaded', insertIT);
        };


    if (isLocalStorage && localStorage.getItem('kpsSVGstr') == revision) {
        data = localStorage.getItem('kpsSVGspr');
        if (data) {
            insert();
            return true;
        }
    }

    try {
        request = new XMLHttpRequest();
        request.open('GET', file, true);
        request.onload = function () {
            if (request.status >= 200 && request.status < 400) {
                data = request.responseText;
                insert();
                if (isLocalStorage) {
                    localStorage.setItem('kpsSVGspr', data);
                    localStorage.setItem('kpsSVGstr', revision);
                }
            }
        };
        request.send();
    }
    catch (e) { }

}(window, document));