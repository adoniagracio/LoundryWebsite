var dropdown = document.getElementById('dropdownNavbar');
var dropdownButton = document.getElementById('dropdownNavbarLink');

dropdownButton.addEventListener('click', function() {
    dropdown.classList.toggle('hidden');
});

dropdownButton.addEventListener('mouseenter', () => {
    dropdown.classList.remove('hidden');
});

dropdownButton.addEventListener('mouseleave', () => {
    // Check if the mouse is not over the dropdown before hiding it
    if (!isMouseOverDropdown()) {
        dropdown.classList.add('hidden');
    }
});

dropdown.addEventListener('mouseenter', () => {
    // Ensure the dropdown remains visible when the mouse is over it
    dropdown.classList.remove('hidden');
});

dropdown.addEventListener('mouseleave', () => {
    dropdown.classList.add('hidden');
});

// Helper function to check if the mouse is over the dropdown
function isMouseOverDropdown() {
    const rect = dropdown.getBoundingClientRect();
    return (
        event.clientX >= rect.left &&
        event.clientX <= rect.right &&
        event.clientY >= rect.top &&
        event.clientY <= rect.bottom
    );
}

// Hide dropdown on document click
document.addEventListener('click', (event) => {
    if (!dropdownButton.contains(event.target) && !dropdown.contains(event.target)) {
        dropdown.classList.add('hidden');
    }
});

document.getElementById('mobileMenuButton').addEventListener('click', function () {
    document.getElementById('mobileMenu').classList.toggle('hidden');
  });
