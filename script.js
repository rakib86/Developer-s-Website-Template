var developerInfo;

fetch('developer-info.txt')
    .then(response => response.json())
    .then(data => {
        developerInfo = data;
        initializeProfile();
    })
    .catch(error => console.error('Error loading developer info:', error));

function initializeProfile() {
    document.title = developerInfo.developerName;
    document.getElementById("developerName").innerText = developerInfo.developerName;
    document.getElementById("developerIntro").innerText = developerInfo.developerIntro;
}

function openLink(url) {
    window.open(url, '_blank');
}
