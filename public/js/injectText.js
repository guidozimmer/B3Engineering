// Function to load and parse text file, then inject content
export function loadAndInjectTextFile(url, lang) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            const variables = Object.fromEntries(
                data.split('\n').map(line => line.split(' = ').map(part => part.trim().replace(/"/g, '')))
            );
            ['whoWeAre', 'whatWeDo', 'howWeDoIt', 'whyWeDoIt'].forEach(id => {
                const element = document.getElementById(id);
                element.style.opacity = 0;
                setTimeout(() => {
                    element.textContent = variables[`${id}${lang}`];
                    element.style.transition = 'opacity 0.5s';
                    element.style.opacity = 1;
                }, 300);
            });
        })
        .catch(error => console.error('Error loading text file:', error));
}

// Highlight the selected language and load content
export function switchLanguage(lang) {
    langEN.classList.toggle('highlight', lang === 'EN');
    langDE.classList.toggle('highlight', lang === 'DE');
    loadAndInjectTextFile('websiteText.txt', lang);
}

// Get DOM elements
const langEN = document.getElementById('langEN');
const langDE = document.getElementById('langDE');
const languageSwitch = document.getElementById('languageSwitch');

// Initial content load for English
switchLanguage('EN');

// Add event listener for language switch
languageSwitch.addEventListener('change', function () {
    switchLanguage(this.checked ? 'DE' : 'EN');
    this.blur();
});