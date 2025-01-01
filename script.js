// DOM elements
const userContainer = document.getElementById('user-container');
const loadMoreButton = document.getElementById('load-more');

// Fetch random user data
async function fetchRandomUser() {
    try {
        const response = await fetch('https://randomuser.me/api/');
        if (!response.ok) {
            throw new Error('Failed to fetch user data');
        }
        const data = await response.json();
        displayUser(data.results[0]);
    } catch (error) {
        console.error('Error:', error);
        alert('Failed to fetch user data. Please try again later.');
    }
}

// Display user data
function displayUser(user) {
    const userDiv = document.createElement('div');
    userDiv.className = 'user';
    userDiv.innerHTML = `
        <img src="${user.picture.large}" alt="User Picture" width="80" height="80">
        <div class="user-info">
            <p><strong>Name:</strong> ${user.name.first} ${user.name.last}</p>
            <p><strong>Email:</strong> ${user.email}</p>
        </div>
    `;
    userContainer.appendChild(userDiv);
}

// Event listener for "Load More" button
loadMoreButton.addEventListener('click', fetchRandomUser);

// Initial load
fetchRandomUser();
