function toggleCollapsible(contentId) {
    var content = document.getElementById(contentId);
    if (content.style.display === 'block') {
      content.style.display = 'none';
    } else {
        content.style.display = 'block';
        // Hide all other dropdowns
        var allCollapsibles = document.querySelectorAll('.collapsible-content');
        allCollapsibles.forEach(collapsible => {
            if (collapsible.id !== contentId) {
                collapsible.style.display = 'none';
            }
        });
    }
  }

function setRiskPresent(selectElement) {
    const selectedValue = selectElement.value;
    const collapsibleHeader = selectElement.closest('.collapsible').querySelector('.collapsible-header');

    // Change background color based on the selected option
    if (selectedValue === 'Yes') {
        collapsibleHeader.style.backgroundColor = 'red';
    } else if (selectedValue === 'No') {
        collapsibleHeader.style.backgroundColor = 'green';
    }
}

function setRiskLevel(selectElement) {
    const selectedValue = selectElement.value;
    const collapsibleHeader = selectElement.closest('.collapsible').querySelector('.collapsible-header');

    if (selectedValue === "High") {
        collapsibleHeader.style.backgroundColor = "red";
    } else if (selectedValue === "Low") {
        collapsibleHeader.style.backgroundColor = "green";
    } else if (selectedValue === "Medium") {
        collapsibleHeader.style.backgroundColor = "yellow";
    }
}



const formData = [
    {
        mainHeader: 'General',
        sections: [
            {
                subHeader: '1.1 Resistance to wanton destruction',
                riskPresentOptions: [
                    { value: '', text: 'Select' },
                    { value: 'Yes', text: 'Yes' },
                    { value: 'No', text: 'No' }
                ],
                riskLevelOptions: [
                    { value: '', text: 'Select' },
                    { value: 'High', text: 'High' },
                    { value: 'Medium', text: 'Medium' },
                    { value: 'Low', text: 'Low' }
                ]
            },
            {
                subHeader: '1.2 Behavior of the elevator in the event of fire',
                riskPresentOptions: [
                    { value: '', text: 'Select' },
                    { value: 'Yes', text: 'Yes' },
                    { value: 'No', text: 'No' }
                ],
                riskLevelOptions: [
                    { value: '', text: 'Select' },
                    { value: 'High', text: 'High' },
                    { value: 'Medium', text: 'Medium' },
                    { value: 'Low', text: 'Low' }
                ]
            },
            {
                subHeader: '1.3 Seismic safety',
                riskPresentOptions: [
                    { value: '', text: 'Select' },
                    { value: 'Yes', text: 'Yes' },
                    { value: 'No', text: 'No' }
                ],
                riskLevelOptions: [
                    { value: '', text: 'Select' },
                    { value: 'High', text: 'High' },
                    { value: 'Medium', text: 'Medium' },
                    { value: 'Low', text: 'Low' }
                ]
            }
        ]
    },
    {
        mainHeader: 'Sharf',
        sections: [
            {
                subHeader: '1.1 Resistance to Rain destruction',
                riskPresentOptions: [
                    { value: '', text: 'Select' },
                    { value: 'Yes', text: 'Yes' },
                    { value: 'No', text: 'No' }
                ],
                riskLevelOptions: [
                    { value: '', text: 'Select' },
                    { value: 'High', text: 'High' },
                    { value: 'Medium', text: 'Medium' },
                    { value: 'Low', text: 'Low' }
                ]
            },
            {
                subHeader: '1.2 Behavior of the elevator in the event of Water',
                riskPresentOptions: [
                    { value: '', text: 'Select' },
                    { value: 'Yes', text: 'Yes' },
                    { value: 'No', text: 'No' }
                ],
                riskLevelOptions: [
                    { value: '', text: 'Select' },
                    { value: 'High', text: 'High' },
                    { value: 'Medium', text: 'Medium' },
                    { value: 'Low', text: 'Low' }
                ]
            }
        ]
    }
    // Add more main headers with their sections as needed
];


// Function to create collapsible sections dynamically
function createCollapsibleSections(data) {
    const container = document.getElementById('collapsibleContainer');
    
    // Loop through data to create each collapsible section
    data.forEach((mainHeaderData, index) => {
        const sectionDiv = document.createElement('div');
        sectionDiv.classList.add('collapsible');

        const headerDiv = document.createElement('div');
        headerDiv.classList.add('collapsible-header');
        headerDiv.textContent = mainHeaderData.mainHeader;
        headerDiv.setAttribute('onclick', `toggleCollapsible('content${index + 1}')`);

        const contentDiv = document.createElement('div');
        contentDiv.classList.add('collapsible-content');
        contentDiv.setAttribute('id', `content${index + 1}`);

        mainHeaderData.sections.forEach((section, subIndex) => {
            const subHeader = document.createElement('h4');
            subHeader.textContent = section.subHeader;

            const collapsible1 = createCollapsible('Risk Present', section.riskPresentOptions, setRiskPresent);
            const collapsible2 = createCollapsible('Risk Level', section.riskLevelOptions, setRiskLevel);

            contentDiv.appendChild(subHeader);
            contentDiv.appendChild(collapsible1);
            contentDiv.appendChild(collapsible2);
        });

        sectionDiv.appendChild(headerDiv);
        sectionDiv.appendChild(contentDiv);
        container.appendChild(sectionDiv);
    });
}

// Helper function to create collapsibles for Risk Present and Risk Level
function createCollapsible(headerText, options, setRiskFunction) {
    const collapsible = document.createElement('div');
    collapsible.classList.add('collapsible', 'test');

    const header = document.createElement('div');
    header.classList.add('collapsible-header');
    header.textContent = headerText;

    collapsible.appendChild(header);

    // Create the dropdown content
    const content = document.createElement('div');
    content.classList.add('collapsible-dropdown');

    const select = document.createElement('select');
    select.classList.add('risk-select');
    select.onchange = function() {
        setRiskFunction(this);
        content.style.display = 'none'; // Hide dropdown after selection
    };

    options.forEach(option => {
        const optionElement = document.createElement('option');
        optionElement.value = option.value;
        optionElement.textContent = option.text;
        select.appendChild(optionElement);
    });

    content.appendChild(select);
    collapsible.appendChild(content);

    // Hide the dropdown by default
    content.style.display = 'none';

    // Toggle visibility of the dropdown when header is clicked
    header.addEventListener('click', function() {
        if (content.style.display === 'none' || content.style.display === '') {
            content.style.display = 'block';
        } else {
            content.style.display = 'none';
        }
    });

    return collapsible;
}


// Call the function with example data
createCollapsibleSections(formData);
