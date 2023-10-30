// Script for reusable navbar component
const navbar = document.getElementById('navbar');

let path = window.location.pathname === '/' ? 'pages/' : '';

function toggle_dropdown() {
    const dropdown_content = document.getElementById('dropdown-content');
    const curr_display = dropdown_content.style.display;
    dropdown_content.style.display =
        curr_display === 'block' ? 'none' : 'block';
}

function toggle_hamburger() {
    const main_nav = document.getElementById('main-nav');
    const dropdown_menu = document.getElementById('dropdown-menu');

    main_nav.style.display =
        main_nav.style.display === 'flex' ? 'none' : 'flex';

    dropdown_menu.style.display =
        dropdown_menu.style.display === 'flex' ? 'none' : 'flex';
}

navbar.innerHTML = `
        <div class="hamburger-nav" onClick="toggle_hamburger()">
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
        </div>

        <div id="main-nav" class="main-nav">
            <div id="nav1" class="nav-item">
                <a href="/"> HOME </a>
            </div>
            <div id="nav2" class="nav-item">
                <a href="${path}portfolio.html"> PORTFOLIO </a>
            </div>
            <div id="nav3" class="nav-item">
                <a href="${path}resume.html"> RESUME </a>
            </div>
            <div id="nav4" class="nav-item">
                <a href="${path}contactMe.html"> CONTACT </a>
            </div>
        </div>

        <div id="dropdown-menu" class="dropdown-menu">
            <div class="nav-item"><a onClick="toggle_dropdown()"> CLASS LINKS </a></div>
            <ul id="dropdown-content" class="dropdown-content">
                <li><a href="https://pkamath87.github.io/"> PREV. STUDENT </a></li>
                <li><a href="https://ahilynd.github.io/"> NEXT STUDENT </a></li>
                <li><a href="https://mattm401.github.io/" target="_blank"> COURSE PAGE </a></li>
            </ul>
        </div>
`;
