!function(){function n(n,o,e,t){Object.defineProperty(n,o,{get:e,set:t,enumerable:!0,configurable:!0})}function o(n){return n&&n.__esModule?n.default:n}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},i=e.parcelRequired7c6;null==i&&((i=function(n){if(n in t)return t[n].exports;if(n in a){var o=a[n];delete a[n];var e={id:n,exports:{}};return t[n]=e,o.call(e.exports,e,e.exports),e.exports}var i=new Error("Cannot find module '"+n+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(n,o){a[n]=o},e.parcelRequired7c6=i),i.register("iE7OH",(function(o,e){var t,a;n(o.exports,"register",(function(){return t}),(function(n){return t=n})),n(o.exports,"resolve",(function(){return a}),(function(n){return a=n}));var i={};t=function(n){for(var o=Object.keys(n),e=0;e<o.length;e++)i[o[e]]=n[o[e]]},a=function(n){var o=i[n];if(null==o)throw new Error("Could not resolve bundle with id "+n);return o}})),i.register("aNJCr",(function(o,e){var t;n(o.exports,"getBundleURL",(function(){return t}),(function(n){return t=n}));var a={};function i(n){return(""+n).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}t=function(n){var o=a[n];return o||(o=function(){try{throw new Error}catch(o){var n=(""+o.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(n)return i(n[2])}return"/"}(),a[n]=o),o}})),i("iE7OH").register(JSON.parse('{"ljo6a":"shop-list.2531827e.js","85Y7O":"amazon-shop-1x.d33dc585.png","jw74O":"amazon-shop-2x.01f59d3f.png","j0S7s":"apple-shop-1x.aeb5cfd2.png","4zNsm":"apple-shop-2x.df06fe16.png","7wvI0":"bookshop-1x.d3877644.png","1GuMW":"bookshop-2x.bc4a3396.png","f8sQi":"symbol-defs.c191696b.svg","5UbS1":"index.8ac3003d.css","ffK11":"index.0492cb15.js"}')),i("6JpON"),i("i8Q71"),i("do8zY"),i("cfOGF"),i("18VO4");var s,r=i("1t1Wn"),c=i("jcFG7"),l=i("4op18");s=i("aNJCr").getBundleURL("ljo6a")+i("iE7OH").resolve("85Y7O");var p;p=i("aNJCr").getBundleURL("ljo6a")+i("iE7OH").resolve("jw74O");var h;h=i("aNJCr").getBundleURL("ljo6a")+i("iE7OH").resolve("j0S7s");var g;g=i("aNJCr").getBundleURL("ljo6a")+i("iE7OH").resolve("4zNsm");var _;_=i("aNJCr").getBundleURL("ljo6a")+i("iE7OH").resolve("7wvI0");var d;d=i("aNJCr").getBundleURL("ljo6a")+i("iE7OH").resolve("1GuMW");var u;u=i("aNJCr").getBundleURL("ljo6a")+i("iE7OH").resolve("f8sQi");var f={navlinks:document.querySelectorAll(".active"),shoppingListEl:document.querySelector(".shopping__cards"),notificationContainerEl:document.querySelector(".shopping__storage"),shoppingHeadingEl:document.querySelector(".shopping__heading"),logoTrashPath:new URL(u),SHOP_LIST_KEY:"selected-books",paginationEl:document.querySelector("#tui-pagination-container")};f.navlinks.forEach((function(n,o){var e=n.getAttribute("href").match(/\/[a-z-]*.html/g),t=window.location.href.match(/team-proj-js-book-app\/$/g),a=window.location.href.match(/team-proj-js-book-app\/#$/g),i=window.location.href.match(/1234\/#$/g);(window.location.href.includes(e)||window.location.href.includes(t)&&0===o||window.location.href.includes(a)&&0===o||window.location.href.includes(i)&&0===o)&&n.classList.add("is-activ")}));var m=l.default.load(f.SHOP_LIST_KEY),b=JSON.parse(localStorage.getItem("user-shop-list"))||[],v=1,w=m.length,E=(0,c.getPagination)(w,3);function k(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,t=3*(e-1),a=t+3,i=n.slice(t,a);if(i.length){x();var c=b.map((function(n){var e=n._id,t=n.book_image,a=n.author,i=n.book_image_width,c=n.book_image_height,l=n.title,u=n.list_name,m=n.description,b=o(r)(n.buy_links,5),v=b[0],w=b[1],E=b[4];return'<li class="shopping__card" data-id="'.concat(e,'">\n  <div class="shopping__block">\n    <div>\n      <div class="shopping__thumb">\n        <img src="').concat(t,'" alt="').concat(u,'" class="shopping__book-img" width="').concat(i,'" height="').concat(c,'"/>\n      </div>\n      <p class="shopping__book-author">').concat(a,'</p>\n    </div>\n    <div class="shopping__wrap">\n      <h2 class="shopping__title">').concat(l,'</h2>\n      <p class="shopping__category">').concat(y(u),'</p>\n      <p class="shopping__book-description--tablet">').concat(m,'</p>\n      <ul class="shopping__shops">\n        <li class="shopping__shop">\n          <a href="').concat(v.url,'" class="shopping__shop-link" target="_blank" crossorigin="anonymous"  rel="noopener noreferrer" aria-label="Amazon-book site">\n            <img srcset="').concat(o(s)," 1x, ").concat(o(p),' 2x" src="').concat(o(s),'" alt="').concat(v.name,'" class="shopping__shop-img" width="48" height="15"/>\n          </a>\n        </li>\n        <li class="shopping__shop">\n          <a href="').concat(w.url,'" class="shopping__shop-link" target="_blank" crossorigin="anonymous"  rel="noopener noreferrer" aria-label="Apple-book site">\n            <img srcset="').concat(o(h)," 1x, ").concat(o(g),' 2x" src="').concat(o(h),'" alt="').concat(w.name,'" class="shopping__shop-img" width="28" height="27"/>\n          </a>\n        </li>\n        <li class="shopping__shop">\n          <a href="').concat(E.url,'" class="shopping__shop-link" target="_blank" crossorigin="anonymous"  rel="noopener noreferrer" aria-label="Book-shop site">\n            <img srcset="').concat(o(_)," 1x, ").concat(o(d),' 2x" src="').concat(o(_),'" alt="').concat(E.name,'" class="shopping__shop-img" width="32" height="30"/>\n          </a>\n        </li>\n      </ul>\n      <div class="shopping__wrap-shops--tablet">\n      <p class="shopping__book-author--tablet">').concat(a,'</p>\n      <ul class="shopping__shops--tablet">\n        <li class="shopping__shop">\n          <a href="').concat(v.url,'" class="shopping__shop-link" target="_blank" crossorigin="anonymous"  rel="noopener noreferrer" aria-label="Amazon-book site">\n            <img srcset="').concat(o(s)," 1x, ").concat(o(p),' 2x" src="').concat(o(s),'" alt="').concat(v.name,'" class="shopping__shop-img" width="48" height="15"/>\n          </a>\n        </li>\n        <li class="shopping__shop">\n          <a href="').concat(w.url,'" class="shopping__shop-link" target="_blank" crossorigin="anonymous"  rel="noopener noreferrer" aria-label="Apple-book site">\n            <img srcset="').concat(o(h)," 1x, ").concat(o(g),' 2x" src="').concat(o(h),'" alt="').concat(w.name,'" class="shopping__shop-img" width="28" height="27"/>\n          </a>\n        </li>\n        <li class="shopping__shop">\n          <a href="').concat(E.url,'" class="shopping__shop-link" target="_blank" crossorigin="anonymous"  rel="noopener noreferrer" aria-label="Book-shop site">\n            <img srcset="').concat(o(_)," 1x, ").concat(o(d),' 2x" src="').concat(o(_),'" alt="').concat(E.name,'" class="shopping__shop-img" width="32" height="30"/>\n          </a>\n        </li>\n      </ul>\n      </div>\n      </div>\n  </div>\n  <button type="button" class="shopping__btn" aria-label="Delete the book from shopping list">\n    <svg class="shopping__btn-icon" width="18" height="18">\n      <use href="').concat(f.logoTrashPath,'#icon-trash"></use>\n    </svg>\n  </button>\n  <p class="shopping__book-description">').concat(m,"</p>\n</li>")})).join("");f.shoppingListEl.innerHTML=c,f.shoppingListEl.addEventListener("click",S)}else H()}function H(){f.shoppingListEl.innerHTML="",f.notificationContainerEl.classList.add("empty-js"),f.shoppingHeadingEl.style.marginBottom="140px",f.paginationEl.style.display="none"}function x(){f.notificationContainerEl.classList.remove("empty-js"),f.shoppingHeadingEl.style.marginBottom="",removeEventListener("click",S),f.paginationEl.style.display="block"}function y(n){return window.innerWidth<=768&&n.length>20?n.substring(0,20)+"...":n}function S(n){var o=n.target.closest(".shopping__btn"),e=E.getCurrentPage();if(o){var t=o.closest(".shopping__btn").closest(".shopping__card").dataset.id.trim(),a=m.findIndex((function(n){return n._id===t}));m.splice(a,1),l.default.save(f.SHOP_LIST_KEY,m),w=m.length,E.setTotalItems(w),E.movePageTo(e),0===f.shoppingListEl.childNodes.length&&(E.movePageTo(v-1),m.length||(f.paginationEl.style.display="none"))}}E.on("beforeMove",(function(n){v=n.page,k(b,n.page)})),k(b,v),i("lw1f2"),i("925RR"),i("7hKzD"),i("jcFG7"),i("4op18")}();
//# sourceMappingURL=shop-list.2531827e.js.map
