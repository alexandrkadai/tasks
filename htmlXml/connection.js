// fetch('https://randomuser.me/api/?gender=female&results=10') last time this api wasn`t working

let fetchMethod = document.querySelector('input[name="fetchMethod"]:checked').value;
console.log(fetchMethod);
const xhr = new XMLHttpRequest();

const userList = document.getElementById('user-list');
const loadButton = document.getElementById('loadMethod');
const filtersButton = document.getElementById('filters');

let createElement = function (user) {
  const li = document.createElement('li');
  li.innerHTML = `<img src="${user.image}" alt="User photo"> ${user.firstName} ${user.lastName} ${user.phone}`;
  userList.appendChild(li);
};

function fetchMethodChange() {
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const quantity = document.getElementById('runnerQuantity').value || 30;
  let apiUrl = `https://dummyjson.com/users/filter?limit=${quantity}&key=gender&value=${gender}`;

  //Fetch connection
  if (fetchMethod === 'fetch') {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        const users = data.users;
        console.log(users);

        users.forEach((user) => {
          createElement(user);
        });
      })
      .catch((error) => console.error('Error fetching users:', error));
  } else {
    // //Xhr Connection
    xhr.open('GET', apiUrl);
    xhr.onload = function () {
      if (xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
        const users = data.users;

        users.forEach((user) => {
          createElement(user);
        });
      } else {
        console.error('Error loading data:', xhr.status);
      }
    };
    xhr.send();
  }
}

loadButton.addEventListener('click', fetchMethodChange);
filtersButton.addEventListener('click', fetchMethodChange);
