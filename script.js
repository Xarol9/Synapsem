// 1. ПЕРШОКЛАСНИЙ КУРСОР
const cursor = document.getElementById('cursor');
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    // Ефект сліду (опціонально)
    const trail = document.createElement('div');
    trail.style.cssText = `
        position: fixed; left: ${e.clientX}px; top: ${e.clientY}px;
        width: 4px; height: 4px; background: var(--neon);
        pointer-events: none; z-index: 9998; border-radius: 50%;
    `;
    document.body.appendChild(trail);
    setTimeout(() => trail.remove(), 500);
});

// 2. 3D ПАРАЛАКС ВСЬОГО ТІЛА (ФЕНОМЕНАЛЬНО)
document.addEventListener('mousemove', (e) => {
    const x = (window.innerWidth / 2 - e.pageX) / 100;
    const y = (window.innerHeight / 2 - e.pageY) / 100;
    document.querySelectorAll('.panel').forEach(p => {
        p.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
    });
    document.getElementById('vortex').style.transform = `rotateX(${60 + y}deg) translateY(${y * 10}px)`;
});

// 3. АВТО-ЛОГИ В КОНСОЛЬ (ДЛЯ ВАЙБУ)
console.log("%c [SYSTEM]: NEURAL LINK ESTABLISHED ", "background: #00f2ff; color: #000; font-weight: bold;");

// 4. ЕФЕКТ ПЕРЕШКОД ПРИ СКРОЛІ
window.addEventListener('scroll', () => {
    document.body.style.filter = `contrast(${100 + window.scrollY/10}%) brightness(${1 - window.scrollY/5000})`;
});