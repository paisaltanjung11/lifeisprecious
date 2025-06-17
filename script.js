/**
 * Life is Precious - Daily Gratitude Journal
 * JavaScript functionality for journal web app
 */

// DOM Elements
const authSection = document.getElementById("auth-section");
const appSection = document.getElementById("app-section");
const usernameInput = document.getElementById("username-input");
const loginBtn = document.getElementById("login-btn");
const logoutBtn = document.getElementById("logout-btn");
const userGreeting = document.getElementById("user-greeting");
const currentDateElement = document.getElementById("current-date");
const journalEntry = document.getElementById("journal-entry");
const charCounter = document.getElementById("char-counter");
const moodOptions = document.querySelectorAll(".mood-option");
const motivationBox = document.getElementById("motivation-box");
const motivationText = document.getElementById("motivation-text");
const saveEntryBtn = document.getElementById("save-entry-btn");
const journalTab = document.getElementById("journal-tab");
const historyTab = document.getElementById("history-tab");
const journalSection = document.getElementById("journal-section");
const historySection = document.getElementById("history-section");
const historyList = document.getElementById("history-list");
const noEntriesMessage = document.getElementById("no-entries-message");
const themeToggle = document.getElementById("theme-toggle");
const toast = document.getElementById("toast");
const toastMessage = document.getElementById("toast-message");
const toastEmoji = document.getElementById("toast-emoji");
const entryModal = document.getElementById("entry-modal");
const modalClose = document.getElementById("modal-close");
const modalDate = document.getElementById("modal-date");
const modalMoodEmoji = document.getElementById("modal-mood-emoji");
const modalMoodText = document.getElementById("modal-mood-text");
const modalEntry = document.getElementById("modal-entry");
const viewCalendarBtn = document.getElementById("view-calendar-btn");
const moodCalendarCard = document.getElementById("mood-calendar-card");
const prevMonthBtn = document.getElementById("prev-month-btn");
const nextMonthBtn = document.getElementById("next-month-btn");
const calendarMonthYear = document.getElementById("calendar-month-year");
const calendarDays = document.getElementById("calendar-days");
const calendarEntryPreview = document.getElementById("calendar-entry-preview");
const exportJournalBtn = document.getElementById("export-journal-btn");
const exportModal = document.getElementById("export-modal");
const exportModalClose = document.getElementById("export-modal-close");
const exportFileList = document.getElementById("export-file-list");
const includeMoodCheckbox = document.getElementById("include-mood-checkbox");
const exportCancelBtn = document.getElementById("export-cancel-btn");
const exportDownloadBtn = document.getElementById("export-download-btn");

// Application State
let currentUser = null;
let selectedMood = null;
let journalEntries = [];
let darkMode = false;
let calendarCurrentMonth = new Date().getMonth();
let calendarCurrentYear = new Date().getFullYear();

/**
 * Initialize the application
 */
function init() {
  // Check if dark mode was previously enabled
  checkDarkModePreference();

  // Check if user is already logged in
  checkUserLogin();

  // Set current date
  updateCurrentDate();

  // Setup event listeners
  setupEventListeners();

  // Load journal entries from localStorage
  loadJournalEntries();

  // Check if already journaled today
  checkForTodayEntry();

  // Set focus on username input for better UX
  usernameInput.focus();

  // Restore the last active tab from localStorage
  restoreLastActiveTab();
}

/**
 * Check if dark mode was previously enabled
 */
function checkDarkModePreference() {
  const savedDarkMode = localStorage.getItem("darkMode");

  if (savedDarkMode === "true") {
    enableDarkMode();
  }
}

/**
 * Enable dark mode
 */
function enableDarkMode() {
  document.body.classList.add("dark-mode");
  darkMode = true;
  localStorage.setItem("darkMode", "true");
}

/**
 * Disable dark mode
 */
function disableDarkMode() {
  document.body.classList.remove("dark-mode");
  darkMode = false;
  localStorage.setItem("darkMode", "false");
}

/**
 * Toggle dark mode
 */
function toggleDarkMode() {
  if (darkMode) {
    disableDarkMode();
  } else {
    enableDarkMode();
  }
}

/**
 * Check if user is already logged in
 */
function checkUserLogin() {
  const savedUsername = localStorage.getItem("username");

  if (savedUsername) {
    loginUser(savedUsername);
  }
}

/**
 * Get greeting based on time of day
 */
function getTimeBasedGreeting() {
  const hour = new Date().getHours();

  if (hour < 12) {
    return "Good morning";
  } else if (hour < 18) {
    return "Good afternoon";
  } else {
    return "Good evening";
  }
}

/**
 * Format the current date in English format
 */
function updateCurrentDate() {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const now = new Date();
  const day = days[now.getDay()];
  const date = now.getDate();
  const month = months[now.getMonth()];
  const year = now.getFullYear();

  currentDateElement.innerHTML = `<span class="date-month-day">${month} ${date}</span> <span class="date-weekday">${day}</span><span class="date-year">, ${year}</span>`;
}

/**
 * Setup all event listeners
 */
function setupEventListeners() {
  // Login button
  loginBtn.addEventListener("click", handleLogin);

  // Login on Enter key
  usernameInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  });

  // Logout button
  logoutBtn.addEventListener("click", handleLogout);

  // Character counter for journal entry
  journalEntry.addEventListener("input", () => {
    charCounter.textContent = journalEntry.value.length;
  });

  // Mood selection
  moodOptions.forEach((option) => {
    option.addEventListener("click", () => {
      // Clear previously selected mood
      moodOptions.forEach((opt) => opt.classList.remove("selected"));

      // Select new mood
      option.classList.add("selected");
      selectedMood = option.dataset.mood;

      // Set mood-based theme
      setMoodTheme(selectedMood);

      // Show motivation based on mood
      showMotivation(selectedMood);
    });
  });

  // Save journal entry
  saveEntryBtn.addEventListener("click", saveJournalEntry);

  // Tab navigation
  journalTab.addEventListener("click", () => switchTab("journal"));
  historyTab.addEventListener("click", () => switchTab("history"));

  // Dark mode toggle
  themeToggle.addEventListener("click", toggleDarkMode);

  // Modal close button
  modalClose.addEventListener("click", closeEntryModal);

  // Close modal when clicking outside
  entryModal.addEventListener("click", (e) => {
    if (e.target === entryModal) {
      closeEntryModal();
    }
  });

  // Close modal with Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && entryModal.classList.contains("visible")) {
      closeEntryModal();
    }

    // Also close export modal with Escape
    if (e.key === "Escape" && exportModal.classList.contains("visible")) {
      closeExportModal();
    }
  });

  // View Calendar button
  viewCalendarBtn.addEventListener("click", toggleCalendarView);

  // Calendar navigation
  prevMonthBtn.addEventListener("click", goToPrevMonth);
  nextMonthBtn.addEventListener("click", goToNextMonth);

  // Export Journal functionality
  exportJournalBtn.addEventListener("click", openExportModal);
  exportModalClose.addEventListener("click", closeExportModal);
  exportCancelBtn.addEventListener("click", closeExportModal);
  exportDownloadBtn.addEventListener("click", downloadJournalZip);

  // Close export modal when clicking outside
  exportModal.addEventListener("click", (e) => {
    if (e.target === exportModal) {
      closeExportModal();
    }
  });

  // Update export file list when checkbox changes
  includeMoodCheckbox.addEventListener("change", updateExportPreview);
}

/**
 * Handle login functionality
 */
function handleLogin() {
  const username = usernameInput.value.trim();

  if (username.length < 3) {
    showToast("Username must be at least 3 characters!", "⚠️");
    usernameInput.focus();
    return;
  }

  // Save username to localStorage
  localStorage.setItem("username", username);

  // Login the user
  loginUser(username);
}

/**
 * Handle logout functionality
 */
function handleLogout() {
  // Remove username from localStorage
  localStorage.removeItem("username");

  // Reset state
  currentUser = null;
  selectedMood = null;
  journalEntries = [];

  // Reset UI
  usernameInput.value = "";
  journalEntry.value = "";
  charCounter.textContent = "0";
  moodOptions.forEach((opt) => opt.classList.remove("selected"));
  motivationBox.classList.add("hidden");

  // Show login section, hide app section
  appSection.classList.add("hidden");
  authSection.classList.remove("hidden");

  // Hide logout button
  logoutBtn.classList.add("hidden");

  // Remove mood theme
  document.body.classList.remove(
    "theme--happy",
    "theme--neutral",
    "theme--sad",
    "theme--angry",
    "theme--tired"
  );

  showToast("You have been logged out successfully!", "👋");

  // Focus on username input for better UX
  setTimeout(() => {
    usernameInput.focus();
  }, 300);
}

/**
 * Login user and show the app interface
 */
function loginUser(username) {
  currentUser = username;

  // Set greeting with time of day
  const greeting = getTimeBasedGreeting();
  userGreeting.textContent = `${username}`;

  // Hide auth section and show app section
  authSection.classList.add("hidden");
  appSection.classList.remove("hidden");

  // Show logout button
  logoutBtn.classList.remove("hidden");

  // Welcome toast with time-based greeting
  showToast(`${greeting}, ${username}! Ready to reflect on your day?`, "✨");

  // Focus on journal entry for better UX
  setTimeout(() => {
    journalEntry.focus();
  }, 300);
}

/**
 * Save current tab state to localStorage
 */
function saveTabState(tab) {
  if (currentUser) {
    localStorage.setItem(`${currentUser}_lastTab`, tab);
  }
}

/**
 * Restore the last active tab from localStorage
 */
function restoreLastActiveTab() {
  if (currentUser) {
    const lastTab = localStorage.getItem(`${currentUser}_lastTab`);
    if (lastTab) {
      switchTab(lastTab);
    }
  }
}

/**
 * Switch between journal and history tabs
 */
function switchTab(tab) {
  if (tab === "journal") {
    journalTab.classList.add("active");
    historyTab.classList.remove("active");
    journalSection.classList.remove("hidden");
    historySection.classList.add("hidden");

    // Hide calendar card if visible
    if (!moodCalendarCard.classList.contains("hidden")) {
      toggleCalendarView();
    }

    // Focus on journal entry when switching to journal tab
    setTimeout(() => {
      journalEntry.focus();
    }, 100);

    // Apply the selected mood theme if one is selected
    if (selectedMood) {
      setMoodTheme(selectedMood);
    }
  } else {
    journalTab.classList.remove("active");
    historyTab.classList.add("active");
    journalSection.classList.add("hidden");
    historySection.classList.remove("hidden");

    // Refresh history list when switching to history tab
    renderJournalHistory();

    // Get most recent entry to determine theme
    if (journalEntries.length > 0) {
      const sortedEntries = [...journalEntries].sort(
        (a, b) => b.timestamp - a.timestamp
      );
      const latestEntry = sortedEntries[0];
      setMoodTheme(latestEntry.mood);
    }
  }

  // Save current tab state
  saveTabState(tab);
}

/**
 * Set the current theme based on selected mood
 */
function setMoodTheme(mood) {
  // Remove any previous mood theme classes
  document.body.classList.remove(
    "theme--happy",
    "theme--neutral",
    "theme--sad",
    "theme--angry",
    "theme--tired"
  );

  // Add the new mood theme class
  document.body.classList.add(`theme--${mood}`);
}

/**
 * Show motivation message based on selected mood
 */
function showMotivation(mood) {
  const motivationMessages = {
    happy: "✨ Great! Keep up the positive energy today!",
    neutral: "🌊 It's okay to feel neutral, each day has its own story.",
    sad: "🌈 Bad days will pass. Stay strong! You are not alone.",
    angry:
      "💧 Take a moment to calm your mind. Everything will feel easier afterward.",
    tired: "🌙 Remember to rest. Taking care of your health is important.",
  };

  motivationText.textContent = motivationMessages[mood];
  motivationBox.classList.remove("hidden");

  // Animate the motivation box
  motivationBox.style.animation = "none";
  setTimeout(() => {
    motivationBox.style.animation = "fade-in 0.3s ease-in";
  }, 10);
}

/**
 * Check if the user has already created an entry for today
 */
function checkForTodayEntry() {
  if (!currentUser) return;

  const today = getTodayDateString();
  const existingEntry = journalEntries.find(
    (entry) => getDateString(new Date(entry.date)) === today
  );

  if (existingEntry) {
    // Pre-fill the form with today's entry
    journalEntry.value = existingEntry.text;
    charCounter.textContent = existingEntry.text.length;

    // Select the mood
    moodOptions.forEach((option) => {
      if (option.dataset.mood === existingEntry.mood) {
        option.click(); // This will trigger the click event
      }
    });

    showToast(
      "You've already journaled today. You can edit your entry if you wish.",
      "📝"
    );
  }
}

/**
 * Get date string in YYYY-MM-DD format
 */
function getDateString(date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
    2,
    "0"
  )}-${String(date.getDate()).padStart(2, "0")}`;
}

/**
 * Get today's date string in YYYY-MM-DD format
 */
function getTodayDateString() {
  return getDateString(new Date());
}

/**
 * Save a new journal entry or update existing one
 */
function saveJournalEntry() {
  const entryText = journalEntry.value.trim();

  // Validate input
  if (!entryText) {
    showToast("Please write your journal entry first.", "⚠️");
    journalEntry.focus();
    return;
  }

  if (!selectedMood) {
    showToast("Please select your mood for today.", "⚠️");
    return;
  }

  const today = getTodayDateString();
  const existingEntryIndex = journalEntries.findIndex(
    (entry) => getDateString(new Date(entry.date)) === today
  );
  const isNewEntry = existingEntryIndex === -1;

  if (existingEntryIndex !== -1) {
    // Update existing entry
    journalEntries[existingEntryIndex].text = entryText;
    journalEntries[existingEntryIndex].mood = selectedMood;
    journalEntries[existingEntryIndex].timestamp = Date.now();
  } else {
    // Create new journal entry
    const newEntry = {
      id: Date.now().toString(),
      date: new Date(),
      text: entryText,
      mood: selectedMood,
      timestamp: Date.now(),
    };

    // Add to journal entries
    journalEntries.push(newEntry);
  }

  // Save to localStorage
  saveEntriesToLocalStorage();

  // Reset form
  journalEntry.value = "";
  charCounter.textContent = "0";
  moodOptions.forEach((opt) => opt.classList.remove("selected"));
  motivationBox.classList.add("hidden");
  document.body.classList.remove(
    "theme--happy",
    "theme--neutral",
    "theme--sad",
    "theme--angry",
    "theme--tired"
  );

  // Show success toast with confetti for happy mood
  if (selectedMood === "happy") {
    const message = isNewEntry
      ? "Journal saved successfully! See you tomorrow 😊"
      : "Journal updated successfully!";
    showToast(message, "🎉");
    createConfetti();
  } else {
    const message = isNewEntry
      ? "Journal saved successfully!"
      : "Journal updated successfully!";
    showToast(message, getMoodEmoji(selectedMood));
  }

  selectedMood = null;

  // Switch to history tab to show the new entry
  switchTab("history");
}

/**
 * Get mood emoji
 */
function getMoodEmoji(mood) {
  const moodEmojis = {
    happy: "😊",
    neutral: "😐",
    sad: "😔",
    angry: "😠",
    tired: "😴",
  };

  return moodEmojis[mood];
}

/**
 * Create confetti effect
 */
function createConfetti() {
  const confettiEmojis = ["🎉", "✨", "🎊", "⭐", "🌟", "💫"];
  const container = document.createElement("div");
  container.className = "confetti-container";
  document.body.appendChild(container);

  // Create 30 confetti emojis
  for (let i = 0; i < 30; i++) {
    const confetti = document.createElement("div");
    confetti.className = "confetti";
    confetti.textContent =
      confettiEmojis[Math.floor(Math.random() * confettiEmojis.length)];
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.animationDuration = Math.random() * 3 + 2 + "s";
    confetti.style.animationDelay = Math.random() * 5 + "s";
    container.appendChild(confetti);
  }

  // Remove confetti container after animation
  setTimeout(() => {
    document.body.removeChild(container);
  }, 8000);
}

/**
 * Show toast notification
 */
function showToast(message, emoji) {
  toastMessage.textContent = message;
  toastEmoji.textContent = emoji;
  toast.classList.remove("hidden");

  // Auto hide after 4 seconds
  setTimeout(() => {
    toast.classList.add("toast--exit");

    setTimeout(() => {
      toast.classList.add("hidden");
      toast.classList.remove("toast--exit");
    }, 300);
  }, 4000);
}

/**
 * Load journal entries from localStorage
 */
function loadJournalEntries() {
  const username = localStorage.getItem("username");
  if (!username) return;

  const savedEntries = localStorage.getItem(`journal_entries_${username}`);

  if (savedEntries) {
    journalEntries = JSON.parse(savedEntries);
  }
}

/**
 * Save journal entries to localStorage
 */
function saveEntriesToLocalStorage() {
  if (!currentUser) return;

  localStorage.setItem(
    `journal_entries_${currentUser}`,
    JSON.stringify(journalEntries)
  );
}

/**
 * Render journal history in the history section
 */
function renderJournalHistory() {
  // Clear the history list except for the "no entries" message
  while (historyList.children.length > 1) {
    historyList.removeChild(historyList.lastChild);
  }

  // Check if there are no entries
  if (journalEntries.length === 0) {
    noEntriesMessage.classList.remove("hidden");
    return;
  }

  // Hide "no entries" message
  noEntriesMessage.classList.add("hidden");

  // Sort entries by date (newest first)
  const sortedEntries = [...journalEntries].sort(
    (a, b) => b.timestamp - a.timestamp
  );

  // Apply theme from the latest entry
  if (sortedEntries.length > 0) {
    const latestEntry = sortedEntries[0];
    setMoodTheme(latestEntry.mood);
  }

  // Create HTML elements for each journal entry
  sortedEntries.forEach((entry) => {
    const entryElement = document.createElement("div");
    entryElement.classList.add("history-item", `history-item--${entry.mood}`);

    // Format date
    const entryDate = new Date(entry.date);
    const formattedDate = formatDateForHistory(entryDate);

    // Get mood emoji and name
    const moodEmoji = getMoodEmoji(entry.mood);
    const moodName = getMoodName(entry.mood);

    // Add click event to show entry detail modal
    entryElement.addEventListener("click", () => showEntryDetail(entry));

    // Create the entry content
    entryElement.innerHTML = `
            <div class="history-header">
                <div class="history-date">${formattedDate}</div>
                <div class="history-mood-container">
                    <span class="history-mood">${moodEmoji}</span>
                    <span class="history-mood-text">${moodName}</span>
                </div>
            </div>
            <div class="history-entry">${entry.text}</div>
        `;

    historyList.appendChild(entryElement);
  });

  // Update Mood Tracker Stats
  updateMoodTrackerStats();
}

/**
 * Update the mood tracker statistics
 */
function updateMoodTrackerStats() {
  // If there are no entries, don't update the tracker
  if (journalEntries.length === 0) return;

  const moodTracker = document.getElementById("mood-tracker");
  if (!moodTracker) return;

  // Get current month entries
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  const currentMonthEntries = journalEntries.filter((entry) => {
    const entryDate = new Date(entry.date);
    return (
      entryDate.getMonth() === currentMonth &&
      entryDate.getFullYear() === currentYear
    );
  });

  // If no entries this month, hide the tracker
  if (currentMonthEntries.length === 0) {
    moodTracker.classList.add("hidden");
    return;
  } else {
    moodTracker.classList.remove("hidden");
  }

  // Count frequency of each mood
  const moodCounts = {};
  currentMonthEntries.forEach((entry) => {
    moodCounts[entry.mood] = (moodCounts[entry.mood] || 0) + 1;
  });

  // Find dominant mood (most frequent)
  let dominantMood = "neutral";
  let maxCount = 0;

  for (const mood in moodCounts) {
    if (moodCounts[mood] > maxCount) {
      maxCount = moodCounts[mood];
      dominantMood = mood;
    }
  }

  // Check for streak of sad days
  const sortedEntries = [...journalEntries].sort(
    (a, b) => b.timestamp - a.timestamp
  );
  let sadStreak = 0;

  for (const entry of sortedEntries) {
    if (entry.mood === "sad") {
      sadStreak++;
    } else {
      break;
    }
  }

  // Update the UI
  const dominantMoodEmoji = getMoodEmoji(dominantMood);
  const dominantMoodName = getMoodName(dominantMood);

  const trackerInsights = moodTracker.querySelectorAll(
    ".mood-tracker__insight"
  );

  // Update dominant mood
  if (trackerInsights[0]) {
    trackerInsights[0].innerHTML = `
      <span class="mood-tracker__insight-emoji">${dominantMoodEmoji}</span>
      <span>You've felt mostly <strong>${dominantMoodName}</strong> this month.</span>
    `;
  }

  // Hide happiest day section for now
  if (trackerInsights[1]) {
    trackerInsights[1].classList.add("hidden");
  }

  // Update sad streak - only show if there are 3+ sad days in a row
  if (trackerInsights[2]) {
    if (sadStreak >= 3) {
      trackerInsights[2].innerHTML = `
        <span class="mood-tracker__insight-emoji">😔</span>
        <span>You've been <strong>Sad</strong> for ${sadStreak} days in a row. Want to talk?</span>
      `;
      trackerInsights[2].classList.remove("hidden");
    } else {
      trackerInsights[2].classList.add("hidden");
    }
  }

  // Set up click handler for stats button
  const statsButton = moodTracker.querySelector(".mood-tracker__stats-btn");
  if (statsButton) {
    statsButton.addEventListener("click", () => {
      toggleCalendarView();
    });
  }
}

/**
 * Show entry detail in a modal
 */
function showEntryDetail(entry) {
  // Format date
  const entryDate = new Date(entry.date);
  const formattedDate = formatDateForHistory(entryDate);

  // Get mood emoji and name
  const moodEmoji = getMoodEmoji(entry.mood);
  const moodName = getMoodName(entry.mood);

  // Set modal content
  modalDate.innerHTML = formattedDate;
  modalMoodEmoji.textContent = moodEmoji;
  modalMoodText.textContent = moodName;
  modalEntry.textContent = entry.text;

  // Apply the mood theme
  setMoodTheme(entry.mood);

  // Add mood-specific class to modal content
  document.querySelector(
    ".modal-content"
  ).className = `modal-content modal--${entry.mood}`;

  // Show modal
  entryModal.classList.add("visible");

  // Prevent scrolling on the body
  document.body.style.overflow = "hidden";
}

/**
 * Close entry detail modal
 */
function closeEntryModal() {
  entryModal.classList.remove("visible");

  // Re-enable scrolling on the body
  document.body.style.overflow = "";
}

/**
 * Toggle calendar view
 */
function toggleCalendarView() {
  if (moodCalendarCard.classList.contains("hidden")) {
    moodCalendarCard.classList.remove("hidden");
    viewCalendarBtn.innerHTML =
      '<i class="fas fa-calendar-alt"></i> Hide Mood Calendar';

    // Initialize calendar with current month
    calendarCurrentMonth = new Date().getMonth();
    calendarCurrentYear = new Date().getFullYear();
    renderCalendar(calendarCurrentMonth, calendarCurrentYear);
  } else {
    moodCalendarCard.classList.add("hidden");
    viewCalendarBtn.innerHTML =
      '<i class="fas fa-calendar-alt"></i> View Mood Calendar';

    // Hide entry preview
    calendarEntryPreview.classList.add("hidden");
  }
}

/**
 * Go to previous month in calendar
 */
function goToPrevMonth() {
  calendarCurrentMonth--;

  if (calendarCurrentMonth < 0) {
    calendarCurrentMonth = 11;
    calendarCurrentYear--;
  }

  renderCalendar(calendarCurrentMonth, calendarCurrentYear);
}

/**
 * Go to next month in calendar
 */
function goToNextMonth() {
  calendarCurrentMonth++;

  if (calendarCurrentMonth > 11) {
    calendarCurrentMonth = 0;
    calendarCurrentYear++;
  }

  renderCalendar(calendarCurrentMonth, calendarCurrentYear);
}

/**
 * Render calendar for a given month and year
 */
function renderCalendar(month, year) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Update month and year display
  calendarMonthYear.textContent = `${months[month]} ${year}`;

  // Clear previous calendar days
  calendarDays.innerHTML = "";

  // Get first day of month and last day of month
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);

  // Get day of week for first day (0 = Sunday, 6 = Saturday)
  const firstDayOfWeek = firstDay.getDay();

  // Get total days in month
  const totalDays = lastDay.getDate();

  // Get last day of previous month
  const prevMonthLastDay = new Date(year, month, 0).getDate();

  // Get current date for highlighting today
  const now = new Date();
  const currentDate = now.getDate();
  const currentMonth = now.getMonth();
  const currentYear = now.getFullYear();

  // Add days from previous month to fill first row
  for (let i = firstDayOfWeek - 1; i >= 0; i--) {
    const dayElement = document.createElement("div");
    dayElement.classList.add("calendar-day", "outside-month");
    dayElement.textContent = prevMonthLastDay - i;
    calendarDays.appendChild(dayElement);
  }

  // Add days of current month
  for (let i = 1; i <= totalDays; i++) {
    const dayElement = document.createElement("div");
    dayElement.classList.add("calendar-day");
    dayElement.textContent = i;

    // Highlight today
    if (i === currentDate && month === currentMonth && year === currentYear) {
      dayElement.classList.add("today");
    }

    // Check if there's an entry for this day
    const dateString = `${year}-${String(month + 1).padStart(2, "0")}-${String(
      i
    ).padStart(2, "0")}`;
    const entry = journalEntries.find(
      (entry) => getDateString(new Date(entry.date)) === dateString
    );

    if (entry) {
      // Add mood class for styling
      dayElement.classList.add(`mood-${entry.mood}`);

      // Store entry data in the element's dataset
      dayElement.dataset.entryId = entry.id;

      // Add mouseenter event to show entry preview only when hovering the day itself
      dayElement.addEventListener("mouseenter", function (e) {
        // Only show preview if directly hovering the day
        if (e.target === dayElement) {
          showCalendarEntryPreview(entry);
        }
      });

      // Add mouseleave event to hide preview
      dayElement.addEventListener("mouseleave", function (e) {
        // Only hide if we're leaving the day and not entering the preview
        if (
          !e.relatedTarget ||
          !e.relatedTarget.closest(".calendar-entry-preview")
        ) {
          hideCalendarEntryPreview();
        }
      });

      // Add click event to show entry modal
      dayElement.addEventListener("click", () => showEntryDetail(entry));
    }

    calendarDays.appendChild(dayElement);
  }

  // Add days from next month to fill remaining cells
  const totalCells = 42; // 6 rows x 7 days
  const remainingCells = totalCells - (firstDayOfWeek + totalDays);

  for (let i = 1; i <= remainingCells; i++) {
    const dayElement = document.createElement("div");
    dayElement.classList.add("calendar-day", "outside-month");
    dayElement.textContent = i;
    calendarDays.appendChild(dayElement);
  }

  // Add event listener to the preview to prevent it from hiding when hovered
  calendarEntryPreview.addEventListener("mouseenter", () => {
    clearTimeout(window.previewTimeout);
  });

  calendarEntryPreview.addEventListener("mouseleave", () => {
    hideCalendarEntryPreview();
  });
}

/**
 * Show preview of calendar entry on hover
 */
function showCalendarEntryPreview(entry) {
  // Clear any existing timeouts to prevent rapid flickering
  clearTimeout(window.previewTimeout);

  // Don't show preview if it's already visible
  if (!calendarEntryPreview.classList.contains("hidden")) {
    return;
  }

  window.previewTimeout = setTimeout(() => {
    // Format date
    const entryDate = new Date(entry.date);
    const formattedDate = formatDateForHistory(entryDate);

    // Get mood emoji and name
    const moodEmoji = getMoodEmoji(entry.mood);
    const moodName = getMoodName(entry.mood);

    // Set preview content
    calendarEntryPreview.querySelector(".preview-date").innerHTML =
      formattedDate;
    calendarEntryPreview.querySelector(
      ".preview-mood"
    ).innerHTML = `${moodEmoji} ${moodName}`;
    calendarEntryPreview.querySelector(".preview-text").textContent =
      entry.text;

    // Show preview
    calendarEntryPreview.classList.remove("hidden");
  }, 50);
}

/**
 * Hide calendar entry preview
 */
function hideCalendarEntryPreview() {
  clearTimeout(window.previewTimeout);

  window.previewTimeout = setTimeout(() => {
    calendarEntryPreview.classList.add("hidden");
  }, 100);
}

/**
 * Get mood name with first letter capitalized
 */
function getMoodName(mood) {
  return mood.charAt(0).toUpperCase() + mood.slice(1);
}

/**
 * Format date for history display
 */
function formatDateForHistory(date) {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const day = days[date.getDay()];
  const dateNum = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return `<span class="date-month-day">${month} ${dateNum}</span> <span class="date-weekday">${day}</span><span class="date-year">, ${year}</span>`;
}

// Add CSS for confetti animation
const confettiStyle = document.createElement("style");
confettiStyle.textContent = `
.confetti-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 1000;
    pointer-events: none;
}

.confetti {
    position: absolute;
    top: -10vh;
    font-size: 1.5rem;
    animation: fall linear forwards;
}

@keyframes fall {
    0% {
        transform: translateY(0) rotate(0deg);
        opacity: 1;
    }
    100% {
        transform: translateY(100vh) rotate(720deg);
        opacity: 0;
    }
}
`;

document.head.appendChild(confettiStyle);

/**
 * Close export modal
 */
function closeExportModal() {
  exportModal.classList.remove("visible");
  document.body.style.overflow = "";
}

/**
 * Open the export journal modal
 */
function openExportModal() {
  // If there are no entries, show toast and return
  if (journalEntries.length === 0) {
    showToast("You don't have any journal entries to export yet.", "📝");
    return;
  }

  // Show the modal
  exportModal.classList.add("visible");
  document.body.style.overflow = "hidden";

  // Update the export preview list
  updateExportPreview();
}

/**
 * Update the export preview file list
 */
function updateExportPreview() {
  // Clear the current list
  exportFileList.innerHTML = "";

  // Get include mood setting
  const includeMood = includeMoodCheckbox.checked;

  // Sort entries by date (newest first)
  const sortedEntries = [...journalEntries].sort(
    (a, b) => b.timestamp - a.timestamp
  );

  // Create HTML elements for each entry
  sortedEntries.forEach((entry) => {
    const entryDate = new Date(entry.date);
    const formattedDate = formatDateForExport(entryDate);
    const fileName = `journal_${getDateString(entryDate)}.txt`;

    const fileItem = document.createElement("div");
    fileItem.classList.add("export-file-item");

    fileItem.innerHTML = `
      <i class="fas fa-file-alt"></i>
      <span class="export-file-date">${fileName}</span>
      ${
        includeMood
          ? `<span class="export-file-mood">${getMoodEmoji(
              entry.mood
            )} ${getMoodName(entry.mood)}</span>`
          : ""
      }
    `;

    exportFileList.appendChild(fileItem);
  });
}

/**
 * Format date for export files (Jun 17, 2025)
 */
function formatDateForExport(date) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const month = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();

  return `${month} ${day}, ${year}`;
}

/**
 * Download all journal entries as a ZIP file
 */
function downloadJournalZip() {
  try {
    // Create a new JSZip instance
    const zip = new JSZip();

    // Get include mood setting
    const includeMood = includeMoodCheckbox.checked;

    // Sort entries by date
    const sortedEntries = [...journalEntries].sort(
      (a, b) => b.timestamp - a.timestamp
    );

    // Add each entry as a text file
    sortedEntries.forEach((entry) => {
      const entryDate = new Date(entry.date);
      const formattedDate = formatDateForExport(entryDate);
      const fileName = `journal_${getDateString(entryDate)}.txt`;

      // Create content for the text file
      let content = `Date: ${formattedDate}\n`;

      if (includeMood) {
        content += `Mood: ${getMoodEmoji(entry.mood)} ${getMoodName(
          entry.mood
        )}\n`;
      }

      content += `Entry:\n${entry.text}`;

      // Add the file to the zip
      zip.file(fileName, content);
    });

    // Generate the zip file
    zip.generateAsync({ type: "blob" }).then(function (content) {
      // Use FileSaver.js to save the file
      saveAs(
        content,
        `life_is_precious_journal_${getCurrentDateTimeString()}.zip`
      );

      // Close the modal
      closeExportModal();

      // Show success toast
      showToast("Journal exported successfully! 🎉", "📦");
    });
  } catch (error) {
    console.error("Error creating ZIP file:", error);
    showToast("There was an error exporting your journal.", "⚠️");
  }
}

/**
 * Get current date and time string for filename (YYYY-MM-DD_HHMMSS)
 */
function getCurrentDateTimeString() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  return `${year}-${month}-${day}_${hours}${minutes}${seconds}`;
}

// Initialize the application when DOM content is loaded
document.addEventListener("DOMContentLoaded", init);
