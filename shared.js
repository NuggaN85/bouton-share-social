(function () {
  var popupCenter = function (url, title, width, height) {
    var popupWidth = width || 640;
    var popupHeight = height || 320;
    var windowLeft = window.screenLeft || window.screenX;
    var windowTop = window.screenTop || window.screenY;
    var windowWidth = window.innerWidth || document.documentElement.clientWidth;
    var windowHeight = window.innerHeight || document.documentElement.clientHeight;
    var popupLeft = windowLeft + windowWidth / 2 - popupWidth / 2;
    var popupTop = windowTop + windowHeight / 2 - popupHeight / 2;
    var popup = window.open(
      url,
      title,
      'scrollbars=yes, width=' +
        popupWidth +
        ', height=' +
        popupHeight +
        ', top=' +
        popupTop +
        ', left=' +
        popupLeft
    );
    popup.focus();
    return true;
  };

  var shareOnSocialMedia = function (selector, shareUrl, shareTitle) {
    document.querySelector(selector).addEventListener('click', function (e) {
      e.preventDefault();
      var url = this.getAttribute('data-url');
      popupCenter(shareUrl + encodeURIComponent(url), shareTitle);
    });
  };

  shareOnSocialMedia('.share_facebook', '//www.facebook.com/sharer/sharer.php?u=', 'Partager sur Facebook');
  shareOnSocialMedia('.share_twitter', '//twitter.com/intent/tweet?text=' + encodeURIComponent(document.title) + '&via=NuggaN85&url=', 'Partager sur Twitter');
  shareOnSocialMedia('.share_gplus', '//plus.google.com/share?url=', 'Partager sur Google+');
  shareOnSocialMedia('.share_linkedin', '//www.linkedin.com/shareArticle?url=', 'Partager sur Linkedin');
  shareOnSocialMedia('.share_tumblr', '//www.tumblr.com/widgets/share/tool?shareSource=legacy&canonicalUrl=&url=', 'Partager sur Tumblr');
  shareOnSocialMedia('.share_pinterest', '//www.pinterest.com/pin/create/button/?url=', 'Partager sur Pinterest');
  shareOnSocialMedia('.share_reddit', '//www.reddit.com/submit?url=', 'Partager sur Reddit');
  shareOnSocialMedia('.share_stumbleupon', '//www.stumbleupon.com/submit?url=', 'Partager sur StumbleUpon');
  shareOnSocialMedia('.share_vk', '//vk.com/share.php?url=', 'Partager sur VK');
  shareOnSocialMedia('.share_xing', '//www.xing.com/spi/shares/new?sc_p=b7910_cb&url=', 'Partager sur Xing');
})();
