// Popup menu stuff
export function showPopup() {
    const popupContainer = document.getElementById('popup-container');
    popupContainer.style.display = 'block';

    // Apply blur filter to background elements
    const backgroundElements = document.querySelectorAll('body > :not(.popup-container)');
    backgroundElements.forEach(element => {
        element.classList.add('blur-background');
    });
}

// Function to close the pop-up window
export function closePopup() {
    const popupContainer = document.getElementById('popup-container');
    popupContainer.style.display = 'none';

    // Remove blur filter from background elements
    const backgroundElements = document.querySelectorAll('body > :not(.popup-container)');
    backgroundElements.forEach(element => {
        element.classList.remove('blur-background');
    });
}

// Function to add event listener for closing the pop-up if clicked anywhere outside it
export function initializePopup() {
    if (typeof window !== 'undefined') {
        window.addEventListener('click', event => {
            const popupContainer = document.getElementById('popup-container');
            if (event.target === popupContainer) {
                closePopup();
            }
        });
    }
}

// Groningen function stuff
const endpoint = 'https://meow.leeuwz.pet/';

export const getUsers = async () => {
    const userIds = await (await fetch(endpoint)).text();
    if (!userIds || !userIds.match(/^\d+(,\d+)*$/)) return Promise.reject('the api is broken');

    const users = userIds.split(',').map(async id => {
        const user = await fetch(endpoint + id);
        return await user.json();
    });

    return Promise.allSettled(users);
};

// Additional helper function for formatting user data
export function formatUsers(users) {
    return users
        .filter(user => user.status === 'fulfilled')
        .map(user => user.value)
        .sort((a, b) => {
            if (!a.statistics || a.statistics.global_rank == null) return 1;
            if (!b.statistics || b.statistics.global_rank == null) return -1;
            return a.statistics.global_rank - b.statistics.global_rank;
        });
}