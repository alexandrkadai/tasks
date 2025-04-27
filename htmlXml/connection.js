//Fetch connection
// fetch('https://randomuser.me/api/?gender=female&results=10') last time this api wasn`t working
let apiUrl = 'https://dummyjson.com/users?limit=10';
fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    const users = data.users;
    console.log(users);
    const userList = document.getElementById('user-list');

    users.forEach((user) => {
      const li = document.createElement('li');
      li.innerHTML = `<img src="${user.image}" alt="User photo"> ${user.firstName} ${user.lastName} ${user.phone}`;
      userList.appendChild(li);
    });
  })
  .catch((error) => console.error('Error fetching users:', error));

// const apiUrl ="https://randomuser.me/api/?gender=female&results=10";
// fetch(apiUrl)
// .then((response) => response.json())
// .then((data) => {
//   const users = data.results;
//   const userList = document.getElementById('user-list');

//   users.forEach((user) => {
//     const li = document.createElement('li');
//     li.innerHTML = `<img src="${user.picture.thumbnail}" alt="User photo"> ${user.name.title} ${user.name.first} ${user.name.last}`;
//     userList.appendChild(li);
//   });
// })
// .catch((error) => console.error('Error fetching users:', error));

// //Xhr Connection
// const xhr = new XMLHttpRequest();
// xhr.open('GET', 'https://randomuser.me/api/?gender=female&results=10');
// xhr.onload = function () {
//   if (xhr.status === 200) {
//     const data = JSON.parse(xhr.responseText);
//     const users = data.results;
//     const userList = document.getElementById('user-list');

//     users.forEach((user) => {
//       const li = document.createElement('li');
//       li.innerHTML = `<img src="${user.picture.thumbnail}" alt="User photo"> ${user.name.title} ${user.name.first} ${user.name.last}`;
//       userList.appendChild(li);
//     });
//   } else {
//     console.error('Error loading data:', xhr.status);
//   }
// };
// xhr.send();
