// navigation.js

const navItems = [
    { name: 'Home', link: './' },
    { name: 'Posts', link: './posts.html' },
    { name: 'Users', link: './users.html' },
    { name: 'Albums', link: './albums.html' }
];

// Function to create navigation
function createNavigation() {
    const navContainer = document.getElementById('nav-container');
    const currentPath = window.location.pathname;

    // Create the <ul> element
    const ulElement = document.createElement('ul');

    // Loop through navItems to create <li> elements with links
    navItems.forEach(item => {
        const liElement = document.createElement('li');
        const aElement = document.createElement('a');
        
        aElement.textContent = item.name;
        aElement.href = item.link;

        // Check if the link matches the current path and add 'active' class
        if (currentPath.includes(item.link)) {
            aElement.classList.add('active');
        }

        liElement.appendChild(aElement);
        ulElement.appendChild(liElement);
    });

    // Append the <ul> to the container
    navContainer.appendChild(ulElement);
}

// Call the function to create the navigation
createNavigation();

