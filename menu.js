(function() {
    const menuHtml = `<nav class="sidebar">
        <a href="index.html" class="sidebar-brand">Care Robot 2026</a>
        <ul class="sidebar-menu">
            <li><a href="index.html">Home</a></li>
            <li><a href="announcements.html" class="bold-item">Announcements</a></li>
            <li class="menu-dropdown">
                <div class="menu-dropdown-title"><span class="arrow">∨</span> Program</div>
                <ul class="submenu">
                    <li><a href="schedule.html">Schedule at a Glance</a></li>
                    <li><a href="presentations.html">Presentations</a></li>
                    <li><a href="keynotes.html">Keynote Talks</a></li>
                    <li><a href="exhibition.html">Exhibition</a></li>
                    <li><a href="tours.html">Industrial Tours & B2B</a></li>
                </ul>
            </li>
            <li class="menu-dropdown">
                <div class="menu-dropdown-title"><span class="arrow">∨</span> Call for Contributions</div>
                <ul class="submenu">
                    <li><a href="call-for-papers.html">Call for Papers (CFP)</a></li>
                    <li><a href="contest.html">Contests</a></li>
                    <li><a href="submission-guidelines.html">Submission Guidelines</a></li>
                </ul>
            </li>
            <li><a href="registration.html">Registration</a></li>
            <li><a href="organizing-committee.html">Organizing Committee</a></li>
            <li><a href="sponsorship.html">Sponsorship & Exhibition</a></li>
            <li><a href="about.html">About KCCR</a></li>
            <li><a href="archive.html">Workshop Archive</a></li>
        </ul>
        <!-- 좌측 사이드바 하단 KCCR 로고 링크 -->
        <div style="margin-top: 25px; padding-top: 18px; border-top: 1px solid #333; text-align: center;">
            <a href="https://www.kccrobot.com/index_en.html" target="_blank" rel="noopener noreferrer" style="display: inline-block; padding: 6px; border-radius: 8px; transition: opacity 0.2s;" title="Go to KCCR Home (ENG)">
                <img id="sidebar-kccr-logo" 
                     src="photos/kccr_logo.png" 
                     alt="KCCR Logo" 
                     onerror="tryFallbackLogos(this)" 
                     style="max-width: 140px; height: auto; display: block; margin: 0 auto; filter: brightness(0.95);">
            </a>
        </div>
    </nav>`;

    window.tryFallbackLogos = function(img) {
        const fallbacks = [
            '/photos/kccr_logo.png',
            'photos/kccr_logo.jpg',
            '/photos/kccr_logo.jpg',
            'photos/kccr_logo.PNG',
            'photos/kccr_logo.JPG',
            'photos/kccr_logo.webp'
        ];
        let idx = parseInt(img.getAttribute('data-fallback-idx') || '0', 10);
        if (idx < fallbacks.length) {
            img.setAttribute('data-fallback-idx', idx + 1);
            img.src = fallbacks[idx];
        } else {
            img.onerror = null;
            img.style.display = 'none';
        }
    };

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