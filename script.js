// 2. Kode Lengkap: script.js
document.addEventListener('DOMContentLoaded', () => {
    // Loading Screen
    setTimeout(() => {
        const loading = document.getElementById('loading-screen');
        loading.style.opacity = '0';
        setTimeout(() => {
            loading.style.display = 'none';
            const main = document.getElementById('main-content');
            main.classList.remove('hidden');
            main.classList.add('fade-in');
        }, 500);
    }, 2500); // 2.5 detik

    // Mode Toggle
    const toggleBtn = document.getElementById('mode-toggle');
    toggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        toggleBtn.textContent = document.body.classList.contains('light-mode') ? 'Switch to Dark Mode' : 'Switch to Light Mode';
    });

    // Card Clicks
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const section = card.dataset.section;
            const main = document.getElementById('main-content');
            const detail = document.getElementById('detail-content');
            const targetSection = document.getElementById(section);

            main.classList.add('fade-out');
            setTimeout(() => {
                main.classList.add('hidden');
                detail.classList.remove('hidden');
                detail.classList.add('fade-in');
                targetSection.classList.remove('hidden');
                targetSection.classList.add('fade-in');
            }, 500);
        });
    });

    // Back Button
    const backBtn = document.getElementById('back-btn');
    backBtn.addEventListener('click', () => {
        const detail = document.getElementById('detail-content');
        const sections = document.querySelectorAll('.detail-section');
        sections.forEach(sec => sec.classList.add('hidden'));
        detail.classList.add('fade-out');
        setTimeout(() => {
            detail.classList.add('hidden');
            const main = document.getElementById('main-content');
            main.classList.remove('hidden');
            main.classList.add('fade-in');
        }, 500);
    });

    // Copy Buttons
    const copyBtns = document.querySelectorAll('.copy-btn');
    copyBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const text = btn.dataset.copy;
            navigator.clipboard.writeText(text).then(() => {
                const toast = document.getElementById('toast');
                toast.classList.add('show');
                setTimeout(() => {
                    toast.classList.remove('show');
                }, 2000);
            });
        });
    });
});