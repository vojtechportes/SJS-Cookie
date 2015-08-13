# SJS-Cookie

<small>version 1.1.10</small>

## setCookie

Return cookie or null if cookie was not created

arguments:

* name - name of cookie
* value - value of cookie
* options - object
* options.path - path from where cookie will be readable, default "/"
* options.domain - domain from where cookie will be readable (is not set by default)
* options.duration - time after which cookie will expire in minutes (session lifetime is set by default)
* options.secure - true/false (default)

```javascript
$.setCookie('lorem', 'ipsum');

// create cookie lorem with value ipsum
``` 

## getCookie

Return cookie value.

arguments:

* name - name of the cookie

```javascript
$.getCookie('lorem');

// return value of cookie "lorem"
``` 

## getCookies

Return names of all cookies as array.

```javascript
$.getCookies();

// return eg ["lorem", "PHPSSID", "show_modal",...]
``` 

## hasCookie

Checks if cookie exist or not. Return true if cookie exist, false if not.

arguments:

* name - name of the cookie

```javascript
$.hasCookie('lorem');

// return true
``` 

## removeCookie

Return content of deleted cookie

arguments:

* name - name of the cookie
* path - path from where cookie will be readable, default "/"
* domain - domain from where cookie will be readable (is not set by default)

```javascript
$.removeCookie('lorem');

// return eg "lorem=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT"
``` 