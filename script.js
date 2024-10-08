document.addEventListener('DOMContentLoaded', () => {
    const noButton = document.getElementById('noButton');
    const yesButton = document.getElementById('yesButton');
    const mainContainer = document.getElementById('mainContainer');
    const congratsContainer = document.getElementById('congratsContainer');

    noButton.addEventListener('mouseover', (event) => {
        const container = document.querySelector('.container');
        const containerRect = container.getBoundingClientRect();
        const buttonRect = noButton.getBoundingClientRect();

        // Calculate a minimum distance the button needs to move to avoid mouse pointer
        const moveDistance = 50; // Minimum movement to avoid pointer overlap

        // Randomize the new position, but ensure it moves at least moveDistance away
        let newTop = Math.random() * (containerRect.height - buttonRect.height);
        let newLeft = Math.random() * (containerRect.width - buttonRect.width);

        // Ensure that the button moves far enough from the current mouse position
        const mouseX = event.clientX;
        const mouseY = event.clientY;

        const distanceX = Math.abs(newLeft - mouseX);
        const distanceY = Math.abs(newTop - mouseY);

        // If the button is too close to the mouse pointer, recalculate its position
        if (distanceX < moveDistance) {
            newLeft = (newLeft + moveDistance) % (containerRect.width - buttonRect.width);
        }
        if (distanceY < moveDistance) {
            newTop = (newTop + moveDistance) % (containerRect.height - buttonRect.height);
        }

        noButton.style.top = `${newTop}px`;
        noButton.style.left = `${newLeft}px`;
    });

    yesButton.addEventListener('click', () => {
        mainContainer.style.display = 'none';
        congratsContainer.style.display = 'block';
    });
});
