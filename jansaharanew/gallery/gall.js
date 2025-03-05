
        const galleryLinks = document.querySelectorAll('.lightbox-link');
        const lightboxImage = document.getElementById('lightboxImage');
        let currentIndex = 0;

        // Open Lightbox
        galleryLinks.forEach((link, index) => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                currentIndex = index;
                updateLightboxImage();
            });
        });

        // Update Lightbox Image
        function updateLightboxImage() {
            const currentLink = galleryLinks[currentIndex];
            const imageSrc = currentLink.getAttribute('href');
            lightboxImage.setAttribute('src', imageSrc);
        }

        // Next Button
        document.getElementById('nextBtn').addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % galleryLinks.length;
            updateLightboxImage();
        });

        // Previous Button
        document.getElementById('prevBtn').addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + galleryLinks.length) % galleryLinks.length;
            updateLightboxImage();
        });

        // Close Lightbox on Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                const modal = bootstrap.Modal.getInstance(document.getElementById('lightboxModal'));
                modal.hide();
            }
        });
