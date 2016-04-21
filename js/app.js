// document.domain='k2.com';

$(document).ready(function() {
    $('#menu-icon').on('click', function() {
        console.log('click went through');
        $('.bne').addClass('open');        
    });

    $('#menu-close').on('click', function() {
        console.log('click went through');        
        $('.bne').removeClass('open');    
    });

    $('.download__button').on('click', function() {
        console.log('download button click went through'); 
        $('#firstDownload').removeClass('hideOnLoad');
    });

    switch (window.location.pathname) {
        case '/':
            $('.it-menu-item').addClass('active-green');
            break;
        case '/it.html':
            $('.it-menu-item').addClass('active-green');
            break;
        case '/purchasing.html':
            $('.purchasing-menu-item').addClass('active-blue');
            break;
        case '/hr.html':
            $('.hr-menu-item').addClass('active-green');
            break;
        case '/finance.html':
            $('.finance-menu-item').addClass('active-blue');
            break;
        case '/operations.html':
            $('.operations-menu-item').addClass('active-green');
            break;
        case '/salesmarketing.html':
            $('.salesmarketing-menu-item').addClass('active-blue');
            break;    
    }

    switch(window.location.pathname) {
        case '/':
            $('#firstDownload').addClass('hideOnLoad');
            console.log('this went through')
            break;
        case '/it.html':
            $('#firstDownload').addClass('hideOnLoad');
            break;
        case '/purchasing.html':
            $('#firstDownload').addClass('hideOnLoad');
            break;
        case '/hr.html':
            $('#firstDownload').addClass('hideOnLoad');
            break;
        case '/finance.html':
            $('#firstDownload').addClass('hideOnLoad');
            break;
        case '/operations.html':
            $('#firstDownload').addClass('hideOnLoad');
            break;
        case '/sales-marketing.html':
            $('#firstDownload').addClass('hideOnLoad');
            break;    
        default:
            $('#firstDownload').addClass('activeIframe');
            console.log('default case');
            break;
    }
    
});