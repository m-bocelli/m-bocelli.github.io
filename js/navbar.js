const navbar = document.getElementById('navbar');
navbar.insertAdjacentHTML(
    'afterend',
    `
    <div hidden id="class-links" class="class-links">
        <div class="class-link">
            <a href="https://pkamath87.github.io/"> PREV. STUDENT </a>
        </div>
        <div class="class-link">
            <a href="https://ahilynd.github.io/"> NEXT STUDENT </a>
        </div>
    </div>
    `
);

let path = window.location.pathname === '/' ? 'pages/' : '';

function test() {
    const class_links = document.getElementById('class-links');
    class_links.hidden = !class_links.hidden;
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
    <div id="nav4" class="nav-item">
        <a href="https://mattm401.github.io/" target="_blank"> COURSE PAGE </a>
    </div>
</div>

<div class="student-nav">
    <label class="class-links-label" onClick="test()">Class Links</label>
</div>
`;
