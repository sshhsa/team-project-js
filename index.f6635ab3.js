var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var s={id:e,exports:{}};return o[e]=s,n.call(s.exports,s,s.exports),s.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,o){t[e]=o},e.parcelRequired7c6=n),n("7Y9D8"),n("bUb57"),n("bPyuM"),n("gZ6M0");var s=n("fA1we"),l=n("iQIUW"),r=(s=n("fA1we"),l=n("iQIUW"),n("gZ6M0")),a=n("5uEKZ");const i=document.querySelector(".backdrop"),c=JSON.parse(localStorage.getItem("user-shop-list"))||[];let d,u,m,_;d=(0,a.loadLS)("books")?(0,a.loadLS)("books"):[];let g=!0;function p(e){(0,s.getBooksId)(e).then((o=>{if(!o)return void l.Notify.failure("Sorry, an error has occurred");u=e,m=o;const t=document.querySelector(".js-modal-body");t.innerHTML="",t.insertAdjacentHTML("beforeend",function({author:e,book_image:o,title:t,description:n,buy_links:s}){o||(o="../images/book_plug.jpg");n||(n="There is no description");let l,r,a;return s.forEach((e=>{"Amazon"===e.name&&(l=e.url),"Apple Books"===e.name&&(r=e.url),"Bookshop"===e.name&&(a=e.url)})),`<div class="modal__body">\n      <img src="${o}" alt="${t}" class="modal__img">\n      <div class="modal__box">\n        <h2 class="modal__title">${t}</h2>\n        <h3 class="modal__subtitle">${e}</h3>\n        <p class="modal__text">${n}</p>\n        <ul class="modal__social-list">\n          <li class="modal__social-amazon">\n            <a class="modal__link-social-amazon" href="${l}" target="_blank"></a>\n          </li>\n          <li class="modal__social-open-book">\n            <a\n              class="modal__link-social-open-book"\n              href="${r}"\n              target="_blank"\n            ></a>\n          </li>\n          <li class="modal__social-book-shop">\n            <a\n              class="modal__link-social-book-shop"\n              href="${a}"\n              target="_blank"\n            ></a>\n          </li>\n        </ul>\n      </div>\n      </div>`}(o));g&&t.insertAdjacentHTML("afterend",'<div class = "js-btn-container"></div>'),_=document.querySelector(".js-btn-container"),(0,r.isUserSet)()&&(user=(0,r.getUserFromLS)()),_.innerHTML=function({booksArr:e}=user,o){return(0,r.isUserSet)()?-1===d.indexOf(o)?'<button class="modal__button">add to shopping list</button>':'<button class="modal__button-remove">\n  remove from the shopping list\n</button>':'<p class="modal__congratulation">\n    Sign in to add the book to your shopping list.\n        </p>'}(user,e),function(){i.classList.add("is-block"),document.body.classList.add("disable-scroll"),document.addEventListener("keydown",b);const e=document.querySelector(".backdrop");function o(t){t.target.classList.contains("backdrop")&&(k(),e.removeEventListener("click",o))}e.addEventListener("click",o)}();const n=document.querySelector(".modal__button");n&&n.addEventListener("click",f);const s=document.querySelector(".modal__button-remove");s&&s.addEventListener("click",y);document.querySelector(".js-close").addEventListener("click",k)}))}function b(e){"Escape"===e.code&&(k(),document.removeEventListener("keydown",b))}function k(){g=!1,i.classList.remove("is-block"),document.body.classList.remove("disable-scroll")}function f(){user.booksArr.push(u),(0,r.setUserInLS)(user),(0,r.updateUserDatabase)(user),d.push(u),(0,a.saveLS)("books",d),c.push(m),localStorage.setItem("user-shop-list",JSON.stringify(c)),_.innerHTML='<div class="button__wrapper-remove">\n  <button class="modal__button-remove">\n    remove from the shopping list\n  </button>\n</div>\n<p class="modal__congratulation">\n  Сongratulations! You have added the book to the shopping list. To\n  delete, press the button “Remove from the shopping list”.\n</p>';document.querySelector(".modal__button-remove").addEventListener("click",y)}function y(){user.booksArr.splice(user.booksArr.indexOf(u),1),(0,r.setUserInLS)(user),(0,r.updateUserDatabase)(user),d.splice(user.booksArr.indexOf(u),1),(0,a.saveLS)("books",d),_.innerHTML='<div class="button__wrapper-remove">\n  <button class="modal__button">add to shopping list</button>\n</div>\n<p class="modal__congratulation">\n  Сongratulations! You have removed the book from the shopping list. To\n  add, press the button “Add to shopping list”.\n</p>';document.querySelector(".modal__button").addEventListener("click",f)}const v=document.querySelector(".filter__list");let h=document.querySelector(".filter__item--active");const L=document.querySelector(".js-gallery-best-books"),S=document.querySelector(".gallery-title"),$=document.querySelector(".filter__item");let T="ALL CATEGORIES";(0,s.getCategoryList)();function q(e){p(e.currentTarget.id)}(0,s.getCategoryList)().then((e=>{e.length?v.insertAdjacentHTML("beforeend",e.map((e=>`<li class="filter__item" data-mark-active="${e.list_name}">${e.list_name}</li>`)).join("")):l.Notify.failure("Oops something going wrong.")})),$.addEventListener("click",(e=>{"All categories"!==e.target.textContent||location.reload()})),v.addEventListener("click",(e=>{e.target.outerText.toLowerCase()!==T.toLowerCase()&&(T=e.target.outerText,function(){const e=document.querySelector(`[data-mark-active="${T}"]`),o=document.querySelector(".filter__item--active");o&&o.classList.remove("filter__item--active");h.classList.remove("filter__item--active"),e.classList.add("filter__item--active"),h=e}(),"All categories"!==e.target.textContent?function(){const e=h.innerHTML;console.log(e),(0,s.getBooksCategory)(e).then((o=>{o.length?(S.innerHTML=e,L.innerHTML=function(e){return e.map((({_id:e,book_image:o,title:t,author:n})=>{o||(o="../images/book_plug.jpg");return`<li id="${e}" class="books-gallery__card">\n     <div class="card-container">\n     <img class="books-gallery__card-img" src="${o}" alt="${t}" loading="lazy">\n     <div class="port-overlay"><p>quick view</p></div>\n     </div>\n     <h2 class="books-gallery__card-title">${t}</h2>\n     <p class="books-gallery__card-author">${n}</p>\n     </li>`})).join("")}(o),function(){let e=h.innerHTML.split(" "),o=e.pop(),t=e.join(" ");S.innerHTML=`${t} <span class="books-gallery__title-accent">${o}</span>`}(),document.querySelectorAll(".books-gallery__card").forEach((e=>{e.addEventListener("click",q)}))):l.Notify.failure(`Sorry, there are no ${e} books. Please choose another category.`)}))}():location.reload())})),console.log(h);s=n("fA1we"),l=n("iQIUW");const E=document.querySelector(".js-gallery-best-books"),A=document.querySelector(".gallery-title");function j(e){p(e.currentTarget.id)}(0,s.getTopBooks)().then((e=>{if(!e.length)return void l.Notify.failure("Sorry, there are no best sellers books. Please choose a category.");A.insertAdjacentHTML("beforeend",'Best Sellers <span class="gallery-title-span">Books</span>'),E.insertAdjacentHTML("beforeend",function(e){const o=[];return e.forEach(((t,n)=>{const s=e[n].books,l=[];s.forEach((({_id:e,book_image:o,title:t,author:n})=>{o||(o="../images/book_plug.jpg");const s=`<li id="${e}" class = "book-cards">\n              <div class = "card-container">\n                <img src="${o}" alt="${t}" loading="lazy">\n                  <div class="port-overlay">\n                    <p>quick view</p>\n                  </div>\n              </div>\n                <h2>${t}</h2>\n                <p>${n}</p>\n                </li>`;l.push(s)}));const r=`<button type="button" id="${e[n].list_name}" class="book-class-more">\n        see more\n      </button>`;o.push(`<li class = "category-block">\n            <p class = "gallery-category-title">${e[n].list_name}</p>\n            <ul class = "category-block-list">${l.join("")}</ul>\n            ${r}\n            </li>`)})),o.join("")}(e));document.querySelectorAll(".book-cards").forEach((e=>{e.addEventListener("click",j)}))}));const M=document.querySelector(".books-gallery");let w="ALL CATEGORIES";M.addEventListener("click",(function(e){"button"===e.target.localName&&(w=e.target.getAttribute("id"),(0,s.getBooksCategory)(w).then((e=>{e.length?(A.innerHTML=w,E.innerHTML=function(e){return e.map((({_id:e,book_image:o,title:t,author:n})=>(o||(o="../images/book_plug.jpg"),`<li id="${e}" class="books-gallery__card">\n        <div class="card-container">\n        <img class="books-gallery__card-img" src="${o}" alt="${t}" loading="lazy">\n        <div class="port-overlay"><p>quick view</p></div>\n        </div>\n        <h2 class="books-gallery__card-title">${t}</h2>\n        <p class="books-gallery__card-author">${n}</p>\n        </li>`))).join("")}(e),function(){A.innerHTML;let e=w.split(" "),o=e.pop(),t=e.join(" ");A.innerHTML=`${t} <span class="books-gallery__title-accent">${o}</span>`}(),document.querySelectorAll(".books-gallery__card").forEach((e=>{e.addEventListener("click",j)}))):l.Notify.failure(`Sorry, there are no ${w} books. Please choose another category.`)})),function(e){const o=document.querySelectorAll(".filter__item");document.querySelector(".filter__item--active").classList.remove("filter__item--active");const t=[...o].find((({textContent:o})=>o===e));console.log(t),t.classList.add("filter__item--active")}(w))})),n("75VGX"),n("fA1we"),n("dmQj5"),n("epHO8"),n("4PVUM"),n("2nhTy");
//# sourceMappingURL=index.f6635ab3.js.map
