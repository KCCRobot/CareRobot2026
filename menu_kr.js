(function() {
    const menuHtml = `<nav class="sidebar">
        <a href="index_kr.html" class="sidebar-brand">Care Robot 2026</a>
        <ul class="sidebar-menu">
            <li><a href="index_kr.html">홈</a></li>
            <li><a href="announcements_kr.html" class="bold-item">공지사항</a></li>
            <li class="menu-dropdown">
                <div class="menu-dropdown-title"><span class="arrow">∨</span> 프로그램</div>
                <ul class="submenu">
                    <li><a href="schedule_kr.html">전체 일정표</a></li>
                    <li><a href="presentations_kr.html">발표 세션</a></li>
                    <li><a href="keynotes_kr.html">초청 강연</a></li>
                    <li><a href="exhibition_kr.html">전시회</a></li>
                </ul>
            </li>
            <li class="menu-dropdown">
                <div class="menu-dropdown-title"><span class="arrow">∨</span> 논문 제출</div>
                <ul class="submenu">
                    <li><a href="call-for-papers_kr.html">논문 모집 안내</a></li>
                    <li><a href="submission-guidelines_kr.html">제출 지침</a></li>
                </ul>
            </li>
            <li><a href="registration_kr.html">사전 등록</a></li>
            <li><a href="organizing-committee_kr.html">조직위원회</a></li>
            <li><a href="sponsorship_kr.html">후원 전시</a></li>
            <li><a href="about_kr.html">협동조합 소개</a></li>
            <li><a href="archive_kr.html">이전 행사</a></li>
        </ul>
    </nav>`;

    document.addEventListener('DOMContentLoaded', () => {
        const container = document.getElementById('sidebar-container');
        if (!container) return;
        container.innerHTML = menuHtml;
        const currentPath = window.location.pathname.split('/').pop() || 'index_kr.html';
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