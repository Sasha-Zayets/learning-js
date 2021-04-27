let listProductOrigin = [];
runSendRequest((json) => {
  const changeJson = json.slice(0, 4);
  renderListContainer(changeJson , () => {
    const loadingBlock = document.querySelector('.loading');

    loadingBlock.style.display = 'none';
  });

  listProductOrigin = [...json];
});

// Фільтрування данних
const oneButton = document.querySelector('.one-button-filter');
const twoButton = document.querySelector('.two-button-filter');

oneButton.addEventListener('click', () => {
  const price = getPriceValue();
  const product = filterProducts(listProductOrigin, price);
  renderListContainer(product);
});

twoButton.addEventListener('click', () => {
  const price = getPriceValue();
  const product = filterProducts(listProductOrigin, price, '<');
  renderListContainer(product);
});

// Пошук
const inputSearch = document.getElementById('search');

inputSearch.addEventListener('input', (event) => {
  const value = event.target.value;
  const product = filterSearch(listProductOrigin, value);
  renderListContainer(product);
});


// Підвантаження Продуктів
const loadMoreBtn = document.querySelector('.load-more');

loadMoreBtn.addEventListener('click', (event) => {
  renderListContainer(listProductOrigin);

  event.target.style.display = 'none';
});

function filterSearch(products = [], search = '') {
  const filterProducts = products.filter((el) => {
    const name = el.name.toLowerCase();
    const description = el.description.toLowerCase();
    const changeSearch = search.toLowerCase();

    const result = name.indexOf(changeSearch);
    const resultDesciption = description.indexOf(changeSearch);

    if (result >= 0 || resultDesciption >= 0) {
      return true;
    }

    return false;
  });

  return filterProducts;
}

function getPriceValue() {
  const input = document.querySelector('#filterPrice');
  return Number(input.value);
}

function filterProducts(listProduct = [], price, typeOperator = '>') {
  if (typeOperator === '>') {
    const products = listProduct.filter((element) => {
      const elPrice = Number(element.price);
      if (elPrice > price) {
        return true;
      }
  
      return false;
    });
  
    return products;
  } else if (typeOperator === '<') {
    const products = listProduct.filter((element) => {
      const elPrice = Number(element.price);
      if (elPrice < price) {
        return true;
      }
  
      return false;
    });

    return products;
  }
  
}

// Запит за данними
function runSendRequest(callBack) {
  fetch('http://dressmeinsport.ho.ua/api/goods/')
    .then(data => data.json())
    .then(json => callBack(json))
};

function renderListContainer(products = [], callBack) {
  const container = document.querySelector('.row.list-product');

  if (products.length === 0) {
    container.innerHTML = `
      <h3 style="text-align: center;">
        Продуктів не знайдено
      </h3>
    `;

    callBack();
    return;
  }

  const listCommentHtml = products.map((el) => {
    return `
      <div class="col-sm-6">
        ${renderCard(el.name, el.description)}
      </div>
    `;
  });
  
  
  const generateHTML = listCommentHtml.join('');
  container.innerHTML = generateHTML;
  callBack();
}

// Generate card
function renderCard(name, description) {
  return `
    <div class="card-body">
      <h5 class="card-title">${name}</h5>
      <p class="card-text">${description}</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  `
}
