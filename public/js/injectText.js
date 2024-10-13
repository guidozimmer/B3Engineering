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


    document.getElementById('whoWeAre').textContent = variables.whoWeAre;
    document.getElementById('whatWeDo').textContent = variables.whoWeAre;
    document.getElementById('howWeDoIt').textContent = variables.whoWeAre;
    document.getElementById('whyWeDoIt').textContent = variables.whoWeAre;

}


