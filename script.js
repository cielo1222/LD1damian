document.addEventListener('DOMContentLoaded', function () {
    // Function to close all dropdowns
    function closeAllDropdowns() {
        document.querySelectorAll('.dropdown-content').forEach(menu => {
            menu.style.display = "none";
        });
    }

    // Function to toggle a specific dropdown
    function toggleDropdown(menu) {
        closeAllDropdowns(); // Close other dropdowns first
        if (menu) {
            menu.style.display = menu.style.display === "block" ? "none" : "block";
        }
    }

    // Function to add event listeners for each dropdown
    function addClickListener(linkId, menuId) {
        let link = document.getElementById(linkId);
        let menu = document.getElementById(menuId);
        if (link && menu) {
            link.addEventListener("click", function (event) {
                event.preventDefault();
                toggleDropdown(menu);
            });

            // Keep dropdown open when hovering
            menu.addEventListener("mouseenter", function () {
                menu.style.display = "block";
            });

            menu.addEventListener("mouseleave", function () {
                menu.style.display = "none";
            });
        }
    }

    // Add event listeners for dropdowns
    addClickListener("calendarLink", "dropdownMenu");
    addClickListener("holidaysLink", "holidaysMenu");
    addClickListener("eventsLink", "eventsMenu");
    addClickListener("importantDatesLink", "importantDatesMenu");
    addClickListener("contactLink", "contactDropdown");

    // Close dropdowns when clicking outside
    document.addEventListener("click", function (event) {
        let isClickInsideDropdown = event.target.closest(".dropdown-content, .dropdown a");
        if (!isClickInsideDropdown) {
            closeAllDropdowns();
        }
    });

    // Function to hide all content sections
    function hideAllSections() {
        document.querySelectorAll('.main-content > div').forEach(section => {
            section.style.display = "none";
        });
    }

    // Function to show a specific section
    function showSection(sectionId) {
        hideAllSections();
        let section = document.getElementById(sectionId);
        if (section) {
            section.style.display = "block";
        }
    }

    // Add event listeners to navigation links
    document.getElementById("homeLink").addEventListener("click", function (event) {
        event.preventDefault();
        showSection("homePage");
    });

    document.getElementById("calendarDropdown").addEventListener("click", function (event) {
        event.preventDefault();
        showSection("calendarPage");
    });

    document.getElementById("holidaysDropdown").addEventListener("click", function (event) {
        event.preventDefault();
        showSection("holidaysPage");
    });

    document.getElementById("eventsDropdown").addEventListener("click", function (event) {
        event.preventDefault();
        showSection("eventsPage");
    });

    document.getElementById("importantDatesDropdown").addEventListener("click", function (event) {
        event.preventDefault();
        showSection("importantDatesPage");
    });

    document.getElementById("contactLink").addEventListener("click", function (event) {
        event.preventDefault();
        showSection("contactPage");
    });

    // Set the homepage as the default visible section
    showSection("homePage");

    // Academic events data for the calendar
    const eventsData = [
        { title: 'Christmas Break', start: '2024-12-20', end: '2024-12-25', description: 'Christmas holidays', color: '#ff4d4d' },
        { title: 'Chinese New Year', start: '2025-02-17', end: '2025-02-17', description: 'Chinese New Year celebration', color: '#f29c11' },
        { title: 'Midterm Exam', start: '2025-03-10', end: '2025-03-12', description: 'Midterm Exam period', color: '#4caf50' },
        { title: 'Final Exam', start: '2025-05-15', end: '2025-05-18', description: 'Final Exam period', color: '#ff9800' }
    ];

    // Display FullCalendar when "View Calendar" is clicked
    let viewCalendarBtn = document.getElementById('viewCalendarBtn');
    let calendarContainer = document.getElementById('calendar-container');
    let calendarEl = document.getElementById('calendar');

    if (viewCalendarBtn && calendarEl) {
        viewCalendarBtn.addEventListener('click', function () {
            calendarContainer.style.display = 'block'; // Show calendar container

            let calendar = new FullCalendar.Calendar(calendarEl, {
                initialView: 'dayGridMonth',
                events: eventsData
            });
            calendar.render();
        });
    }
});
