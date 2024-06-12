           //nav bar
           function showSidebar(){
            const sidebar = document.querySelector('.sidebar')
            sidebar.style.display = 'flex'
          }
          function hideSidebar(){
            const sidebar = document.querySelector('.sidebar')
            sidebar.style.display = 'none'
          };
          
        // Function to toggle between light and dark themes
        function toggleTheme() {
            const body = document.body;
            const currentTheme = body.getAttribute('data-theme');
        
            if (currentTheme === 'dark') {
                body.removeAttribute('data-theme');
                localStorage.setItem('themes', 'light');
            } else {
                body.setAttribute('data-theme', 'dark');
                localStorage.setItem('themes', 'dark');
            }
        }
        // Function to load the saved theme from local storage
        function loadTheme() {
            const savedTheme = localStorage.getItem('themes');
            if (savedTheme === 'dark') {
                document.body.setAttribute('data-theme', 'dark');
            }
        }
        // Call the loadTheme function when the page loads
        window.onload = loadTheme;
        // Attach the toggleTheme function to a button click event
        document.getElementById('theme-toggle-button').addEventListener('click', toggleTheme);
        
        // Aos animation
        AOS.init();