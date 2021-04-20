runSendRequest((json) => {
  renderListContainer(json);
});

function runSendRequest(callBack) {
  fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(json => callBack(json))
};

function renderListContainer(comments = []) {
  const listCommentHtml = comments.map((item) => {
    return `
      <div class="col-sm">
        ${renderCard(item.email, item.body)}
      </div>
    `;
  });
  
  const container = document.querySelector('.row');
  const generateHTML = listCommentHtml.join('');

  container.innerHTML = generateHTML;
}

// Generate card
function renderCard(email, body) {
  return `
    <div class="card-body">
      <h5 class="card-title">${email}</h5>
      <p class="card-text">${body}</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  `
}
