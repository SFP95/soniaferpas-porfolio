document.querySelectorAll('.project').forEach(project => {
    project.addEventListener('click', () => {
        alert('Más información sobre ' + project.querySelector('h3').innerText);
    });
});