(function() {
    const menuHtml = `<nav class="sidebar">
        <a href="index.html" class="sidebar-brand">Care Robot 2026</a>
        <ul class="sidebar-menu">
            <li><a href="index.html">Home</a></li>
            <li><a href="announcements.html" class="bold-item">Announcements</a></li>
            <li class="menu-dropdown">
                <div class="menu-dropdown-title"><span class="arrow">∨</span> Program</div>
                <ul class="submenu">
                    <li><a href="schedule.html">Schedule</a></li>
                    <li><a href="presentations.html">Presentations</a></li>
                    <li><a href="keynotes.html">Keynote Speakers</a></li>
                    <li><a href="exhibition.html">Exhibition</a></li>
                    <li><a href="tours.html">Site Visit</a></li>
                </ul>
            </li>
            <li class="menu-dropdown">
                <div class="menu-dropdown-title"><span class="arrow">∨</span> Call for Contributions</div>
                <ul class="submenu">
                    <li><a href="call-for-papers.html">Call for Papers</a></li>
                    <li><a href="submission-guidelines.html">Submission Guidelines</a></li>
                </ul>
            </li>
            <li><a href="registration.html">Registration</a></li>
            <li><a href="organizing-committee.html">Organizing Committee</a></li>
            <li><a href="sponsorship.html">Sponsorship & Exhibition</a></li>
            <li><a href="about.html">About KCCR</a></li>
            <li><a href="care-robot-2025.html">Care Robot Archive</a></li>
        </ul>
    </nav>`;

    document.addEventListener('DOMContentLoaded', () => {
        const container = document.getElementById('sidebar-container');
        if (!container) return;
        container.innerHTML = menuHtml;
        const currentPath = window.location.pathname.split('/').pop() || 'index.html';
        const links = container.querySelectorAll('.sidebar-menu a');
        links.forEach(link => {
            if (link.getAttribute('href') === currentPath) {
                link.classList.add('active');
                const parentDropdown = link.closest('.menu-dropdown');
                if (parentDropdown) {
                    parentDropdown.classList.add('open');
                    const arrow = parentDropdown.querySelector('.arrow');
                    if (arrow) arrow.textContent = '∧';
                }
            }
        });
        container.querySelectorAll('.menu-dropdown').forEach(item => {
            const title = item.querySelector('.menu-dropdown-title');
            if (title) {
                title.addEventListener('click', () => {
                    item.classList.toggle('open');
                    const arrow = item.querySelector('.arrow');
                    if (arrow) arrow.textContent = item.classList.contains('open') ? '∧' : '∨';
                });
            }
        });
    });
})();