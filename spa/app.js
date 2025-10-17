document.addEventListener('DOMContentLoaded', () => {
    const contentDiv = document.getElementById('content');
    const navLinks = document.querySelectorAll('nav a');

    const pages = {
        home: `<h1>Home Page</h1><p>Welcome to the home page!</p>`,
        about: `<h1>About Page</h1><p>This is the about page.</p>`
    };

    const loadPage = (page) => {
        contentDiv.innerHTML = pages[page];
    };

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const page = link.getAttribute('data-page');
            loadPage(page);
        });
    });

    // Load the home page by default
    loadPage('home');
});
