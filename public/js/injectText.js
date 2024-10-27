 // Function to load the text file
 export function loadTextFile(url, callback) {
    fetch(url)
        .then(response => response.text())
        .then(data => callback(data))
        .catch(error => console.error('Error loading text file:', error));
}

// Function to parse the text file content and inject into the HTML
export function injectContent(data) {
    const lines = data.split('\n');
    const variables = {};

    lines.forEach(line => {
        const [key, value] = line.split(' = ');
        if (key && value) {
            variables[key.trim()] = value.trim().replace(/"/g, '');
        }
    });


    // Injecting the content into the HTML


    document.getElementById('whoWeAreHeading').textContent = variables.whoWeAreHeadingEN;
    document.getElementById('whoWeArePt1').textContent = variables.whoWeArePt1EN;
    document.getElementById('whoWeArePt2').textContent = variables.whoWeArePt2EN;
    document.getElementById('whoWeArePt3').textContent = variables.whoWeArePt3EN;
    document.getElementById('whoWeArePt4').textContent = variables.whoWeArePt4EN;
    document.getElementById('whoWeArePt5').textContent = variables.whoWeArePt5EN;

    document.getElementById('whatWeDoHeading').textContent = variables.whatWeDoHeadingEN;
    document.getElementById('whatWeDoPt1').textContent = variables.whatWeDoPt1EN;
    document.getElementById('whatWeDoPt2').textContent = variables.whatWeDoPt2EN;
    document.getElementById('whatWeDoPt3').textContent = variables.whatWeDoPt3EN;
    document.getElementById('whatWeDoPt4').textContent = variables.whatWeDoPt4EN;
    document.getElementById('whatWeDoPt5').textContent = variables.whatWeDoPt5EN;
    document.getElementById('whatWeDoPt6').textContent = variables.whatWeDoPt6EN;
    document.getElementById('whatWeDoPt7').textContent = variables.whatWeDoPt7EN;
    document.getElementById('whatWeDoPt8').textContent = variables.whatWeDoPt8EN;


    document.getElementById('howWeDoItHeading').textContent = variables.howWeDoItHeadingEN;
    document.getElementById('howWeDoItPt1').textContent = variables.howWeDoItPt1EN;
    document.getElementById('howWeDoItPt2').textContent = variables.howWeDoItPt2EN;
    document.getElementById('howWeDoItPt3').textContent = variables.howWeDoItPt3EN;
    document.getElementById('howWeDoItPt4').textContent = variables.howWeDoItPt4EN;
    document.getElementById('howWeDoItPt5').textContent = variables.howWeDoItPt5EN;


}










// LANGUAGE SWITCH
/*
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
});*/