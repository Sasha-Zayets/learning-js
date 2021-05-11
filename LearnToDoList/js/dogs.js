const btn = document.querySelector('.get-image');
const img = document.querySelector('img');
const select = document.querySelector('select');

select.addEventListener('change', async (event) => {
  const value = event.target.value;
  const imgUrl = await getImageBreed(value);
  
  img.setAttribute('src', imgUrl);
});

getListBreeds((breeds) => {
  const htmlData = generationOptions(breeds);
  
  select.innerHTML = htmlData;
});

function generationOptions(breedsList = []) {
  const options = breedsList.map((breed) => {
    return `
      <option value="${breed}">${breed}</option>
    `;
  });

  return options.join('');
}

btn.addEventListener('click', () => {
  getData((urlImg) => {
    img.setAttribute('src', urlImg);
  });

  /*
  searchElement('button')
    .then((data) => {
      data.forEach((el) => {
        console.log(el.getAttribute('class'));
      });
    })
    .catch((error) => console.log(error));
  */
});

function searchElement(nameTag) {
  return new Promise((resolve, reject) => {
    const search = document.querySelectorAll(nameTag);

    if (search.length === 0) {
      reject('Not element');
    }

    resolve(search);
  });
}

function customFetch(age = 10) {
  return new Promise((resolve, reject) => {
    if (age >= 10) {
      resolve('Ok');
    }

    reject('Not ok');
  });
}

function getData(callback) {
  fetch('https://dog.ceo/api/breeds/image/random', {
    method: 'GET',
  })
  .then((response) => response.json())
  .then((data) => {
    callback(data.message);
  });
}

function getListBreeds(callback) {
  fetch('https://dog.ceo/api/breeds/list/all', {
    method: 'GET',
  })
  .then((response) => response.json())
  .then((data) => {
    const breeds = Object.keys(data.message);
    callback(breeds);
  })
  .catch(error => console.log(error))
  .finally(() => console.log('final'));
}

async function getImageBreed(nameBreed) {
  try {
    const result = await fetch(`https://dog.ceo/api/breed/${nameBreed}/images/random`, {
      method: 'GET',
    });

    const data = await result.json();
    console.log(data);
    return data.message;
  } catch (error) {
    console.log(error);
  } finally {
    console.log('final')
  }
}
