         function redirectWithAnimation() {
            const container = document.getElementById('container');
            const body = document.body;
            container.style.opacity = '0';
            container.style.transform = 'scale(0.95)';
            body.style.opacity = '0';

            setTimeout(() => {
                window.location.href = 'https://perdonus.github.io/Test/';
            }, 500); // Match the duration of the animation
        }