document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
    const header = document.querySelector('header');
    const contactForm = document.getElementById('contactForm');
    const imageModal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const modalClose = document.querySelector('.modal-close');
    const galleryItems = document.querySelectorAll('.gallery-item');

    burger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        burger.classList.toggle('toggle');
    });

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
            burger.classList.remove('toggle');
        });
    });

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);
            alert('留言提交成功！\n\n姓名：' + data.name + '\n邮箱：' + data.email + '\n留言：' + data.message);
            contactForm.reset();
        });
    }

    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const img = this.querySelector('img');
            if (img) {
                modalImage.src = img.src;
                imageModal.classList.add('active');
            }
        });
    });

    if (modalClose) {
        modalClose.addEventListener('click', function() {
            imageModal.classList.remove('active');
        });
    }

    if (imageModal) {
        imageModal.addEventListener('click', function(e) {
            if (e.target === imageModal) {
                imageModal.classList.remove('active');
            }
        });
    }

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && imageModal.classList.contains('active')) {
            imageModal.classList.remove('active');
        }
    });
});