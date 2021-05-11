document.addEventListener('DOMContentLoaded', async () => {
  const category = await getCategory('key');
  const result = await loadingNews();

  renderListCategory(category);
  initEventCategory(async (event) => {
    const target = event.target;
    const id = target.getAttribute('data-id');

    const newsList = await loadingNewsFromCategory(id);
    renderListNews(newsList);
  });

  renderListNews(result);

});

// Функція ініціалізації події для категорій
function initEventCategory(callback) {
  const categories = document.querySelectorAll('span.badge');

  categories.forEach((el) => {
    el.addEventListener('click', (event) => callback(event));
  });
}

async function loadingNews() {
  try {
    const result = await fetch('https://newsapi.org/v2/top-headlines?country=us&category=business', {
      headers: {
        Authorization: 'd38891e5f6fc4ec2885615900859eb4a'
      }
    });
    const data = await result.json();

    return data.articles;
    // return await result.json();
  } catch (e) {
    console.log(e);
  }

  /*
  return fetch('https://newsapi.org/v2/top-headlines?country=us&category=business', {
    headers: {
      Authorization: 'd38891e5f6fc4ec2885615900859eb4a'
    }
  })
    .then((response) => response.json())
    .then(data => console.log(data))
    .catch((err) => console.log(err));

  console.log('123123');
  */
}

async function loadingNewsFromCategory(category = '') {
  const result = await fetch(`https://newsapi.org/v2/top-headlines?category=${category}&language=en`, {
    headers: {
      Authorization: 'd38891e5f6fc4ec2885615900859eb4a',
    }
  });
  const data = await result.json();
  return data.articles;
}

function renderListNews(news = [], selector = '#news') {
  // const htmlArray = news.map(el => renderNewsCard(el.urlToImage, el.title, el.description));
  
  const htmlArray = news.map((el) => {
    return `
      <div class="col-4 mb-3">
        ${renderNewsCard(el.urlToImage, el.title, el.description, el.url)}
      </div>
    `;
  });

  const wrapperNews = document.querySelector(selector);

  if (wrapperNews) {
    wrapperNews.innerHTML = htmlArray.join('');
  } else {
    console.error('Not found element with selector ', selector);
  }
}

function renderListCategory(category = [], selector = '#category') {
  const html = category.map(el => renderCategoryItem(el));
  const wrapperCategory = document.querySelector(selector);

  if (wrapperCategory) {
    wrapperCategory.innerHTML = html.join('');
  } else {
    console.error('Not found element with selector ', selector);
  }
}

function renderNewsCard(imgUrl = '', title = '', description = '', url = '') {
  return `
    <div class="card" style="width: 18rem;">
      <img src="${imgUrl}" class="card-img-top">
      <div class="card-body">
        <h5 class="card-title">${title}</h5>
        <p class="card-text">
          ${description}
        </p>
        <a href="${url}" target="__blank" class="btn btn-primary">Open news</a>
      </div>
    </div>
  `;
}

function renderCategoryItem(category) {
  return `
    <span data-id="${category.id}" class="badge bg-primary mb-4 mt-2">
      ${category.label}
    </span>
  `
}

// Власна функція отримання категорій
function getCategory(key) {
  // business entertainment general health science sports technology
  const category = [
    { id: 'business', label: 'Business'},
    { id: 'entertainment', label: 'Entertainment'},
    { id: 'general', label: 'General'},
    { id: 'health', label: 'Health'},
    { id: 'science', label: 'Science'},
    { id: 'sports', label: 'Sports'},
    { id: 'technology', label: 'Technology'},
  ];

  return new Promise((resolve, reject) => {
    if (key === 'key') {
      resolve(category);
    } else {
      reject('Key not valid');
    }
  });
}
