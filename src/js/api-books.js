export { getCategoryList, getBooksCategory, getTopBooks, getBooksId };

import axios from 'axios';

const BASE_URL = 'https://books-backend.p.goit.global';
const CATEGORY_LIST = '/books/category-list';
const TOP_BOOKS = '/books/top-books';
const BOOKS_CATEGORY = '/books/category';
const BOOKS_ID = '/books';

axios.defaults.baseURL = BASE_URL;

async function getCategoryList() {
  const { data } = await axios.get(CATEGORY_LIST);
  return data;
}

async function getTopBooks() {
  const { data } = await axios.get(TOP_BOOKS);
  return data;
}

async function getBooksCategory(category) {
  const { data } = await axios.get(BOOKS_CATEGORY, {
    params: {
      category,
    },
  });
  return data;
}

async function getBooksId(id) {
  const { data } = await axios.get(`${BOOKS_ID}/${id}`);
  return data;
}
