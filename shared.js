(function(){

    var popupCenter = function(url, title, width, height){
        var popupWidth = width || 640;
        var popupHeight = height || 320;
        var windowLeft = window.screenLeft || window.screenX;
        var windowTop = window.screenTop || window.screenY;
        var windowWidth = window.innerWidth || document.documentElement.clientWidth;
        var windowHeight = window.innerHeight || document.documentElement.clientHeight;
        var popupLeft = windowLeft + windowWidth / 2 - popupWidth / 2 ;
        var popupTop = windowTop + windowHeight / 2 - popupHeight / 2;
        var popup = window.open(url, title, 'scrollbars=yes, width=' + popupWidth + ', height=' + popupHeight + ', top=' + popupTop + ', left=' + popupLeft);
        popup.focus();
        return true;
    };
    
    document.querySelector('.share_facebook').addEventListener('click', function(e){
        e.preventDefault();
        var url = this.getAttribute('data-url');
        var shareUrl = "//www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(url);
        popupCenter(shareUrl, "Partager sur facebook");
    });

    document.querySelector('.share_twitter').addEventListener('click', function(e){
        e.preventDefault();
        var url = this.getAttribute('data-url');
        var shareUrl = "//twitter.com/intent/tweet?text=" + encodeURIComponent(document.title) +
            "&via=NuggaN85" +
            "&url=" + encodeURIComponent(url);
        popupCenter(shareUrl, "Partager sur Twitter");
    });

    document.querySelector('.share_gplus').addEventListener('click', function(e){
        e.preventDefault();
        var url = this.getAttribute('data-url');
        var shareUrl = "//plus.google.com/share?url=" + encodeURIComponent(url);
        popupCenter(shareUrl, "Partager sur Google+");
    });

    document.querySelector('.share_linkedin').addEventListener('click', function(e){
        e.preventDefault();
        var url = this.getAttribute('data-url');
        var shareUrl = "//www.linkedin.com/shareArticle?url=" + encodeURIComponent(url);
        popupCenter(shareUrl, "Partager sur Linkedin");
    });
    
    document.querySelector('.share_trumblr').addEventListener('click', function(e){
        e.preventDefault();
        var url = this.getAttribute('data-url');
        var shareUrl = "//www.tumblr.com/widgets/share/tool?shareSource=legacy&canonicalUrl=&url=" +encodeURIComponent(url);
        popupCenter(shareUrl, "Partager sur Trumblr");
    });    
    
    document.querySelector('.share_pinterest').addEventListener('click', function(e){
        e.preventDefault();
        var url = this.getAttribute('data-url');
        var shareUrl = "//www.pinterest.com/pin/create/button/?url=" +encodeURIComponent(url);
        popupCenter(shareUrl, "Partager sur pinterest");
    }); 
    
    document.querySelector('.share_reddit').addEventListener('click', function(e){
        e.preventDefault();
        var url = this.getAttribute('data-url');
        var shareUrl = "//www.reddit.com/submit?url=" +encodeURIComponent(url);
        popupCenter(shareUrl, "Partager sur reddit");
    }); 
    
    document.querySelector('.share_stumbleupon').addEventListener('click', function(e){
        e.preventDefault();
        var url = this.getAttribute('data-url');
        var shareUrl = "//www.stumbleupon.com/submit?url=" +encodeURIComponent(url);
        popupCenter(shareUrl, "Partager sur stumbleupon");
    }); 
    
    document.querySelector('.share_vk').addEventListener('click', function(e){
    e.preventDefault();
    var url = this.getAttribute('data-url');
    var shareUrl = "//vk.com/share.php?url=" +encodeURIComponent(url);
    popupCenter(shareUrl, "Partager sur vk");
    }); 
     
})();
