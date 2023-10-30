// Script for reusable navbar component

let path = window.location.pathname === '/' ? 'pages/' : '';

function toggle_dropdown() {
    const dropdown = document.getElementById('dropdown');
    const curr_display = dropdown.style.display;
    dropdown.style.display = curr_display === 'block' ? 'none' : 'block';
}

navbar.innerHTML = `
<div class="main-nav">
    <div id="nav1" class="nav-item">
        <a href="/"> HOME </a>
    </div>
    <div id="nav2" class="nav-item">
        <a href="${path}aboutMe.html"> ABOUT </a>
    </div>
    <div id="nav3" class="nav-item">
        <a href="${path}contactMe.html"> CONTACT </a>
    </div>
</div>

<div class="dropdown-menu">
    <div class="nav-item"><a onClick="toggle_dropdown()"> CLASS LINKS </a></div>
    <ul id="dropdown" class="dropdown-content">
        <li><a href="https://pkamath87.github.io/"> PREV. STUDENT </a></li>
        <li><a href="https://ahilynd.github.io/"> NEXT STUDENT </a></li>
        <li><a href="https://mattm401.github.io/" target="_blank"> COURSE PAGE </a></li>
    </ul>
</div>
`;
