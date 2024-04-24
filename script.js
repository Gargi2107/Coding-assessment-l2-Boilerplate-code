function showTab(tabName) {
    // Hide all clothing sections
    document.querySelectorAll('.clothing').forEach(function(el) {
        el.style.display = 'none';
    });
    // Remove active class from all tabs
    document.querySelectorAll('.tab').forEach(function(el) {
        el.classList.remove('active');
    });
    // Show selected clothing section
    document.getElementById(tabName).style.display = 'flex';
    // Add active class to the clicked tab
    document.querySelector(`.tab#${tabName}`).classList.add('active');
}
