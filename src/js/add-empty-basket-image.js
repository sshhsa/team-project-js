import mb265 from '../images/empty-shop-list.png';
import mb320 from '../images/empty-shop-list.png';
import mb530 from '../images/empty-shop-list.png';
import mb644 from '../images/empty-shop-list.png';

export default function imageOnEmptyBasket() {
  return `<div class="on-empty-container">
              <p class="empty-bookshelf__text">
                This page is empty, add some books and proceed to order.
              </p>
              <img
                srcset="
                  ${mb265}   265w,
                  ${mb320}   320w,
                  ${mb530}   530w,
                  ${mb644}   644w
                "
                sizes="(max-width: 768px) 265px,
            (max-width: 1440px) 320px,
            644px"
                src="${mb644}"
                alt="Book Illustration"
              />
            </div>`;
}
