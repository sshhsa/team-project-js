function n(n,e,o,s){Object.defineProperty(n,e,{get:o,set:s,enumerable:!0,configurable:!0})}function e(n){return n&&n.__esModule?n.default:n}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},s={},i={},t=o.parcelRequired7c6;null==t&&((t=function(n){if(n in s)return s[n].exports;if(n in i){var e=i[n];delete i[n];var o={id:n,exports:{}};return s[n]=o,e.call(o.exports,o,o.exports),o.exports}var t=new Error("Cannot find module '"+n+"'");throw t.code="MODULE_NOT_FOUND",t}).register=function(n,e){i[n]=e},o.parcelRequired7c6=t),t.register("kyEFX",(function(e,o){var s,i;n(e.exports,"register",(function(){return s}),(function(n){return s=n})),n(e.exports,"resolve",(function(){return i}),(function(n){return i=n}));var t={};s=function(n){for(var e=Object.keys(n),o=0;o<e.length;o++)t[e[o]]=n[e[o]]},i=function(n){var e=t[n];if(null==e)throw new Error("Could not resolve bundle with id "+n);return e}})),t("kyEFX").register(JSON.parse('{"cYJPg":"shop-list.ee76e780.js","5EBN1":"amazon-shop-1x.d33dc585.png","gpYer":"amazon-shop-2x.01f59d3f.png","57kdw":"apple-shop-1x.aeb5cfd2.png","7J0mh":"apple-shop-2x.df06fe16.png","9D8Wc":"bookshop-1x.d3877644.png","eYjm2":"bookshop-2x.bc4a3396.png","37BJJ":"symbol-defs.c191696b.svg","fY5NC":"shop-list.b5a2d954.css","8y6Oc":"shop-list.b16e3cbb.js"}')),t("fA1we"),t("bUb57"),t("bPyuM"),t("gZ6M0"),t("75VGX");var r,a=t("2nhTy"),l=t("5uEKZ");r=new URL(t("kyEFX").resolve("5EBN1"),import.meta.url).toString();var p;p=new URL(t("kyEFX").resolve("gpYer"),import.meta.url).toString();var h;h=new URL(t("kyEFX").resolve("57kdw"),import.meta.url).toString();var c;c=new URL(t("kyEFX").resolve("7J0mh"),import.meta.url).toString();var g;g=new URL(t("kyEFX").resolve("9D8Wc"),import.meta.url).toString();var _;_=new URL(t("kyEFX").resolve("eYjm2"),import.meta.url).toString();var d;d=new URL(t("kyEFX").resolve("37BJJ"),import.meta.url).toString();const u={navlinks:document.querySelectorAll(".active"),shoppingListEl:document.querySelector(".shopping__cards"),notificationContainerEl:document.querySelector(".shopping__storage"),shoppingHeadingEl:document.querySelector(".shopping__heading"),logoTrashPath:new URL(d),SHOP_LIST_KEY:"selected-books",paginationEl:document.querySelector("#tui-pagination-container")};u.navlinks.forEach(((n,e)=>{const o=n.getAttribute("href").match(/\/[a-z-]*.html/g),s=window.location.href.match(/team-proj-js-book-app\/$/g),i=window.location.href.match(/team-proj-js-book-app\/#$/g),t=window.location.href.match(/1234\/#$/g);(window.location.href.includes(o)||window.location.href.includes(s)&&0===e||window.location.href.includes(i)&&0===e||window.location.href.includes(t)&&0===e)&&n.classList.add("is-activ")}));let m=(0,l.loadLS)(u.SHOP_LIST_KEY);const b=JSON.parse(localStorage.getItem("user-shop-list"))||[];let f=1,k=m.length,v=(0,a.getPagination)(k,3);function w(n,o=1){const s=3*(o-1),i=s+3;if(n.slice(s,i).length){u.notificationContainerEl.classList.remove("empty-js"),u.shoppingHeadingEl.style.marginBottom="",removeEventListener("click",E),u.paginationEl.style.display="block";const n=b.map((({_id:n,book_image:o,author:s,book_image_width:i,book_image_height:t,title:a,list_name:l,description:d,buy_links:[m,b,,,f]})=>`<li class="shopping__card" data-id="${n}">\n  <div class="shopping__block">\n    <div>\n      <div class="shopping__thumb">\n        <img src="${o}" alt="${l}" class="shopping__book-img" width="${i}" height="${t}"/>\n      </div>\n      <p class="shopping__book-author">${s}</p>\n    </div>\n    <div class="shopping__wrap">\n      <h2 class="shopping__title">${a}</h2>\n      <p class="shopping__category">${function(n){if(window.innerWidth<=768)return n.length>20?n.substring(0,20)+"...":n;return n}(l)}</p>\n      <p class="shopping__book-description--tablet">${d}</p>\n      <ul class="shopping__shops">\n        <li class="shopping__shop">\n          <a href="${m.url}" class="shopping__shop-link" target="_blank" crossorigin="anonymous"  rel="noopener noreferrer" aria-label="Amazon-book site">\n            <img srcset="${e(r)} 1x, ${e(p)} 2x" src="${e(r)}" alt="${m.name}" class="shopping__shop-img" width="48" height="15"/>\n          </a>\n        </li>\n        <li class="shopping__shop">\n          <a href="${b.url}" class="shopping__shop-link" target="_blank" crossorigin="anonymous"  rel="noopener noreferrer" aria-label="Apple-book site">\n            <img srcset="${e(h)} 1x, ${e(c)} 2x" src="${e(h)}" alt="${b.name}" class="shopping__shop-img" width="28" height="27"/>\n          </a>\n        </li>\n        <li class="shopping__shop">\n          <a href="${f.url}" class="shopping__shop-link" target="_blank" crossorigin="anonymous"  rel="noopener noreferrer" aria-label="Book-shop site">\n            <img srcset="${e(g)} 1x, ${e(_)} 2x" src="${e(g)}" alt="${f.name}" class="shopping__shop-img" width="32" height="30"/>\n          </a>\n        </li>\n      </ul>\n      <div class="shopping__wrap-shops--tablet">\n      <p class="shopping__book-author--tablet">${s}</p>\n      <ul class="shopping__shops--tablet">\n        <li class="shopping__shop">\n          <a href="${m.url}" class="shopping__shop-link" target="_blank" crossorigin="anonymous"  rel="noopener noreferrer" aria-label="Amazon-book site">\n            <img srcset="${e(r)} 1x, ${e(p)} 2x" src="${e(r)}" alt="${m.name}" class="shopping__shop-img" width="48" height="15"/>\n          </a>\n        </li>\n        <li class="shopping__shop">\n          <a href="${b.url}" class="shopping__shop-link" target="_blank" crossorigin="anonymous"  rel="noopener noreferrer" aria-label="Apple-book site">\n            <img srcset="${e(h)} 1x, ${e(c)} 2x" src="${e(h)}" alt="${b.name}" class="shopping__shop-img" width="28" height="27"/>\n          </a>\n        </li>\n        <li class="shopping__shop">\n          <a href="${f.url}" class="shopping__shop-link" target="_blank" crossorigin="anonymous"  rel="noopener noreferrer" aria-label="Book-shop site">\n            <img srcset="${e(g)} 1x, ${e(_)} 2x" src="${e(g)}" alt="${f.name}" class="shopping__shop-img" width="32" height="30"/>\n          </a>\n        </li>\n      </ul>\n      </div>\n      </div>\n  </div>\n  <button type="button" class="shopping__btn" aria-label="Delete the book from shopping list">\n    <svg class="shopping__btn-icon" width="18" height="18">\n      <use href="${u.logoTrashPath}#icon-trash"></use>\n    </svg>\n  </button>\n  <p class="shopping__book-description">${d}</p>\n</li>`)).join("");u.shoppingListEl.innerHTML=n,u.shoppingListEl.addEventListener("click",E)}else u.shoppingListEl.innerHTML="",u.notificationContainerEl.classList.add("empty-js"),u.shoppingHeadingEl.style.marginBottom="140px",u.paginationEl.style.display="none"}function E(n){const e=n.target.closest(".shopping__btn"),o=v.getCurrentPage();if(!e)return;const s=e.closest(".shopping__btn").closest(".shopping__card").dataset.id.trim(),i=m.findIndex((n=>n._id===s));m.splice(i,1),localStoragemethod.save(u.SHOP_LIST_KEY,m),k=m.length,v.setTotalItems(k),v.movePageTo(o),0===u.shoppingListEl.childNodes.length&&(v.movePageTo(f-1),m.length||(u.paginationEl.style.display="none"))}v.on("beforeMove",(n=>{f=n.page,w(b,n.page)})),w(b,f),t("5uEKZ"),t("2nhTy"),t("epHO8"),t("dmQj5"),window.addEventListener("load",(function(){const n=document.querySelector(".animation");setTimeout((()=>{n.style.display="none"}),500)}));
//# sourceMappingURL=shop-list.ee76e780.js.map
