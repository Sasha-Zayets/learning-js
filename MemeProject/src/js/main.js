/*
const user = {
  name: '123123',
};
*/

// const result = JSON.stringify(user);

// localStorage.setItem('user', result);
// const users = localStorage.getItem('user');
// localStorage.removeItem('user');
// const products = JSON.parse(users);

// Знайшов елементи по селекторах
const sendButton = document.querySelector('.generate-btn');
const topText = document.getElementById('topText');
const image = document.getElementById('generateImg');
const bottomText = document.getElementById('bottomText');

sendButton.addEventListener('click', () => {
  const valueTopText = topText.value;
  const valueBottomText = bottomText.value;

  generateUrl(valueTopText, valueBottomText);
});

function generateUrl(top = '', bottom = '') {
  // http://apimeme.com/meme?meme=10-Guy&top=Top+text223+33&bottom=Bottom+text
  image.setAttribute('src', `http://apimeme.com/meme?meme=10-Guy&top=${top}&bottom=${bottom}`);
  
  /* axios.get('http://apimeme.com/meme', {
    params: {
      meme: '10-Guy',
      top',
      bottom: bottom,
    }
  });
  */
  // fetch(`http://apimeme.com/meme?meme=10-Guy&top=${top}&bottom=${bottom}`);

}