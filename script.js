document.addEventListener('DOMContentLoaded', () => {
    const noButton = document.getElementById('noButton');
    const yesButton = document.getElementById('yesButton');
    const mainContainer = document.getElementById('mainContainer');
    const congratsContainer = document.getElementById('congratsContainer');
    const modal = document.getElementById('modal');
    const modalCloseButton = document.getElementById('modalCloseButton');
    modal.style.display = 'none'; // Hide the modal

    // Handle mouseover for noButton to move it away
    noButton.addEventListener('mouseover', (event) => {
        const container = document.querySelector('.container');
        const containerRect = container.getBoundingClientRect();
        const buttonRect = noButton.getBoundingClientRect();

        // Minimum movement distance of 50px
        const moveDistance = 50;

        // Randomize the new position within container bounds
        let newTop = Math.random() * (containerRect.height - buttonRect.height);
        let newLeft = Math.random() * (containerRect.width - buttonRect.width);

        // Get current mouse position
        const mouseX = event.clientX;
        const mouseY = event.clientY;

        const distanceX = Math.abs(newLeft - mouseX);
        const distanceY = Math.abs(newTop - mouseY);

        // Ensure the X or Y position changes by at least 50px
        if (distanceX < moveDistance) {
            newLeft = mouseX > newLeft ? newLeft - moveDistance : newLeft + moveDistance;
        }

        if (distanceY < moveDistance) {
            newTop = mouseY > newTop ? newTop - moveDistance : newTop + moveDistance;
        }

        // Constrain the new position within the container bounds
        newTop = Math.min(Math.max(0, newTop), containerRect.height - buttonRect.height);
        newLeft = Math.min(Math.max(0, newLeft), containerRect.width - buttonRect.width);

        // Apply the new position
        noButton.style.top = `${newTop}px`;
        noButton.style.left = `${newLeft}px`;
    });

    // Show the modal when "No" button is clicked
    noButton.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default behavior
        modal.style.display = 'flex'; // Show the modal (centered)
    });

    // Close the modal when the close button is clicked
    modalCloseButton.addEventListener('click', () => {
        modal.style.display = 'none'; // Hide the modal
    });

    // Handle "Yes" button click to show congratsContainer
    yesButton.addEventListener('click', () => {
        mainContainer.style.display = 'none';
        congratsContainer.style.display = 'block';
    });
});
