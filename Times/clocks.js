function updateClocks() {
  const options = {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  };

  // Define IANA time zones for the required locations
  const zones = {
    'jp-time': 'Asia/Tokyo',
    'hk-time': 'Asia/Hong_Kong',
    'india-time': 'Asia/Kolkata',
    'israel-time': 'Asia/Jerusalem',
    'ukraine-time': 'Europe/Kiev',
    'uk-time': 'Europe/London',
	  'ny-time': 'America/New_York',
	  'chicago-time': 'America/Chicago',
	  'sf-time': 'America/Los_Angeles'
  };

  const now = new Date();

  for (const [id, zone] of Object.entries(zones)) {
    options.timeZone = zone;
    document.getElementById(id).textContent = new Intl.DateTimeFormat('en-GB', options).format(now);
  }

  // Highlight the current local time row
  document.querySelectorAll('.clock-item').forEach(item => item.classList.remove('current'));
  const localOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
  const localTime = new Intl.DateTimeFormat('en-GB', localOptions).format(now);
  const timeSpans = document.querySelectorAll('.time');
  timeSpans.forEach(span => {
    if (span.textContent === localTime) {
      span.closest('.clock-item').classList.add('current');
    }
  });
}

// Update the clocks immediately and then every second
updateClocks();
setInterval(updateClocks, 1000);