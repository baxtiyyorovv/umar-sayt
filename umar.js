document.querySelector('a[href="#about"]').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('about').classList.toggle('hidden');
});

document.getElementById('showImage').addEventListener('click', function() {
    document.getElementById('imageContainer').classList.toggle('hidden');
});