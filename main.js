document.getElementById('fetchData').addEventListener('click', function () {
   const username = document.getElementById('username').value;
   const userInfoContainer = document.getElementById('userInfo');
   userInfoContainer.innerHTML = '';

   fetch(`https://api.github.com/users/${username}`)
      .then(response => response.json())
      .then(data => {
         const userHTML = `
            <h2>${data.name}</h2>
            <img src="${data.avatar_url}" alt="Profile Photo" style="max-width: 200px;">
            <p>Login: ${data.login}</p>
            <p>Account URL: <a href="${data.html_url}" target="_blank">${data.html_url}</a></p>
            <p>Blog URL: <a href="${data.blog}" target="_blank">${data.blog}</a></p>
            <p>Location: ${data.location}</p>
            <p>Country: ${data.location}</p>
            <p>Email: ${data.email || 'N/A'}</p>
            <p>Followers: ${data.followers}</p>
            <p>Following: ${data.following}</p>
         `;
         userInfoContainer.innerHTML = userHTML;
      })
      .catch(error => {
         userInfoContainer.innerHTML = `<p>Error: ${error.message}</p>`;
      });
});