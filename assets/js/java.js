

document.addEventListener("DOMContentLoaded", function() {
    const pera = document.getElementById('pera');
    const text = "Hello, I'm Subhash Kumar, a B.Tech Computer Science Engineering student. This portfolio is a showcase of my journey, projects, and experiences in the world of technology. I'm passionate about exploring the ever-evolving field of computer science and innovation. Join me as I share my discoveries and contributions to this exciting realm."


    function typeText(index) {
        if (index < text.length) {
            pera.textContent += text.charAt(index);
            setTimeout(() => typeText(index + 1), 25);
        }
    }

    typeText(0);
});