document.addEventListener('DOMContentLoaded', function () {
    const divs = document.querySelectorAll('.mae');

    divs.forEach(div => {
        div.addEventListener('mouseover', function () {
            const tooltipText = div.getAttribute('data-tooltip');
            if (tooltipText) {
                let tooltip = div.querySelector('.tooltip');
                if (!tooltip) {
                    tooltip = document.createElement('div');
                    tooltip.classList.add('tooltip');
                    tooltip.innerText = tooltipText;
                    div.appendChild(tooltip);
                }

                const rect = div.getBoundingClientRect();
                tooltip.style.left = '50%';
                tooltip.style.bottom = `${rect.height + 10}px`;
            }
        });

        div.addEventListener('mouseleave', function () {
            const tooltip = div.querySelector('.tooltip');
            if (tooltip) {
                tooltip.remove();
            }
        });
    });
});
