Object.implement('setCookie', function (name, value, options) {
  function setTime (date, minutes) {
    if (minutes === -1) {
      date.setTime(0);
      return date.toUTCString();
    } else {
      date.setMinutes(minutes);
      return date.toUTCString();
    }
  }
  
  var date = new Date();
  var cookie = name + '=' + value;
  
  if (typeof options === 'undefined')
    options = {};
  
  if (typeof options.path === 'undefined') {
    cookie += '; path=/';
  } else {
    cookie += '; path=' + options.path;
  }
  
  if (typeof options.domain !== 'undefined')
    cookie += '; domain=' + options.domain;

  if (typeof options.duration !== 'undefined')
    cookie += '; expires=' + setTime(date, options.duration);

  if (typeof options.secure !== 'undefined')
    cookie += '; secure';
    
  return document.cookie = cookie;
});

Object.implement('getCookie', function (name) {
    if (!name) { return false; }
      return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(name).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
});

Object.implement('getCookies', function(){
    var keys = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:\=[^;]*)?;\s*/);
    $.each(keys, function(k){ keys[k] = decodeURIComponent(keys[k]); })
    return keys;
});

Object.implement('hasCookie', function (name) {
    if (!name) { return false; }
    return (new RegExp("(?:^|;\\s*)" + encodeURIComponent(name).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=")).test(document.cookie);
});

Object.implement('removeCookie', function (name, path, domain) {
  if (!$.hasCookie(name)) return false;  
  if (path === 'undefined') path = '/';    
  if (path === 'undefined') domain = false;
     
  $.setCookie(name, '', {'path': path, 'domain': domain, 'duration': -1});
});