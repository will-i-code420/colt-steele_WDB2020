(function () {
    'use strict'
  
    // Fetch all the alerts that need dismissal
    const alerts = document.querySelectorAll('.alert')
  
    // Loop over them and apply bootstrap alert
    Array.from(alerts)
      .forEach(function (alert) {
        new bootstrap.Alert(alert)
    })
})()