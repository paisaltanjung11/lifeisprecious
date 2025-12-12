/**
 * Localization/Translation System
 * Supported languages: Indonesian (id), English (en), Japanese (ja), Korean (ko)
 */

const translations = {
  // Indonesian
  id: {
    // Header
    appTitle: "Life is Precious",
    appSubtitle: "Jurnal Syukur Harian",
    logout: "Keluar",

    // Auth Section
    authWelcome: "Hei, selamat datang kembali!",
    authInstruction:
      "Ambil secangkir teh, mari tulis satu hal kecil dari harimu 🌱",
    authPlaceholder: "Siapa namamu hari ini?",
    authButton: "Mulai Menulis",
    authExtraText: "Ceritamu aman di sini ✨",

    // Tab Navigation
    tabJournal: "Jurnal Hari Ini",
    tabHistory: "Riwayat",

    // Journal Section
    journalGreeting: "Halo",
    journalLabel: "Bagaimana rasanya hari ini? Hal kecil pun berarti.",
    journalPlaceholder: "Tidak ada tekanan, hanya kamu dan pikiranmu...",
    journalMoodLabel: "Bagaimana perasaanmu hari ini?",
    journalSaveButton: "Simpan Jurnal",

    // Moods
    moodHappy: "Senang",
    moodNeutral: "Netral",
    moodSad: "Sedih",
    moodAngry: "Marah",
    moodTired: "Lelah",

    // Motivation Messages
    motivationHappy: "✨ Bagus! Pertahankan energi positifmu hari ini!",
    motivationNeutral: "🌊 Tidak apa-apa merasa netral, setiap hari punya ceritanya sendiri.",
    motivationSad: "🌈 Hari buruk akan berlalu. Tetap kuat! Kamu tidak sendirian.",
    motivationAngry: "💧 Luangkan waktu untuk menenangkan pikiranmu. Semuanya akan terasa lebih mudah setelahnya.",
    motivationTired: "🌙 Ingat untuk beristirahat. Menjaga kesehatanmu itu penting.",

    // Info Card
    infoTitle: "Tahukah Kamu?",
    infoText:
      "Menulis jurnal syukur hanya 5 menit sehari dapat meningkatkan kebahagiaan dan kesejahteraanmu secara signifikan!",

    // History Section
    historyTitle: "Riwayat Jurnal",
    historyEmpty: "Belum ada entri. Hari ini adalah awal yang baik! ✨",
    historyExportButton: "Ekspor Jurnal",
    historyViewCalendar: "Lihat Kalender Mood",
    historyHideCalendar: "Sembunyikan Kalender Mood",

    // Streak Counter
    streakDayLabel: "Hari Beruntun",
    streakDaysLabel: "Hari Beruntun",
    streakMessageStart: "Mulai beruntunmu hari ini!",
    streakMessage1: "Awal yang bagus! Pertahankan!",
    streakMessageWeek: "Kamu sedang hebat! 🔥",
    streakMessageMonth: "Konsistensi yang luar biasa! 🌟",
    streakMessageLegend: "Beruntun legendaris! 🏆",

    // Mood Tracker
    moodTrackerTitle: "Mood Dominanmu",
    moodTrackerText: "Kamu kebanyakan merasa",
    moodTrackerMonth: "bulan ini.",
    moodTrackerButton: "Lihat Statistik Mood Lengkap",

    // Mood Filter
    filterLabel: "Filter berdasarkan Mood:",
    filterAll: "Semua",
    filterNoEntries: "Tidak ada entri",
    filterTryDifferent: "ditemukan. Coba filter lain.",

    // Calendar
    calendarTitle: "Kalender Tren Mood",
    calendarWeekdays: ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"],
    calendarMonths: [
      "Januari",
      "Februari",
      "Maret",
      "April",
      "Mei",
      "Juni",
      "Juli",
      "Agustus",
      "September",
      "Oktober",
      "November",
      "Desember",
    ],
    calendarMonthsShort: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "Mei",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Okt",
      "Nov",
      "Des",
    ],

    // Toast Messages
    toastUsernameTooShort: "Nama pengguna harus minimal 3 karakter!",
    toastLoggedOut: "Kamu telah keluar dengan sukses!",
    toastWelcome: "Siap untuk merefleksikan harimu?",
    toastGreetingMorning: "Selamat pagi",
    toastGreetingAfternoon: "Selamat siang",
    toastGreetingEvening: "Selamat malam",
    toastEntryEmpty: "Silakan tulis entri jurnalmu terlebih dahulu.",
    toastMoodEmpty: "Silakan pilih moodmu untuk hari ini.",
    toastEntrySaved: "Jurnal berhasil disimpan! Sampai jumpa besok 😊",
    toastEntryUpdated: "Jurnal berhasil diperbarui!",
    toastAlreadyJournaled:
      "Kamu sudah membuat jurnal hari ini. Kamu bisa mengedit entrimu jika mau.",
    toastNoEntriesToExport: "Kamu belum punya entri jurnal untuk diekspor.",
    toastExportSuccess: "Jurnal berhasil diekspor! 🎉",
    toastExportError: "Terjadi kesalahan saat mengekspor jurnalmu.",

    // Export Modal
    exportTitle: "Ekspor Jurnalmu",
    exportDescription:
      "Unduh semua entri jurnalmu sebagai file teks dalam satu file ZIP.",
    exportIncludeMood: "Sertakan mood dalam ekspor",
    exportFileNote:
      "File akan disimpan dalam format .txt dengan satu entri per file.",
    exportCancel: "Batal",
    exportDownload: "Unduh ZIP",

    // Footer
    footerCopyright: "2025 Life is Precious - Jurnal Syukur Harian",

    // Celebration Modal
    celebrationTitle: "Selamat!",
    celebrationMessage: "Kamu telah mencapai",
    celebrationDayStreak: "hari beruntun!",
    celebrationContinue: "Lanjutkan",
  },

  // English
  en: {
    // Header
    appTitle: "Life is Precious",
    appSubtitle: "Daily Gratitude Journal",
    logout: "Logout",

    // Auth Section
    authWelcome: "Hey, welcome back!",
    authInstruction:
      "Grab a cup of tea, let's write one small thing from your day 🌱",
    authPlaceholder: "What's your name today?",
    authButton: "Start Writing",
    authExtraText: "Your story is safe here ✨",

    // Tab Navigation
    tabJournal: "Today's Journal",
    tabHistory: "History",

    // Journal Section
    journalGreeting: "Hello",
    journalLabel: "What did today feel like? Even small things matter.",
    journalPlaceholder: "No pressure, just you and your thoughts...",
    journalMoodLabel: "How are you feeling today?",
    journalSaveButton: "Save Journal",

    // Moods
    moodHappy: "Happy",
    moodNeutral: "Neutral",
    moodSad: "Sad",
    moodAngry: "Angry",
    moodTired: "Tired",

    // Motivation Messages
    motivationHappy: "✨ Great! Keep up the positive energy today!",
    motivationNeutral: "🌊 It's okay to feel neutral, each day has its own story.",
    motivationSad: "🌈 Bad days will pass. Stay strong! You are not alone.",
    motivationAngry:
      "💧 Take a moment to calm your mind. Everything will feel easier afterward.",
    motivationTired: "🌙 Remember to rest. Taking care of your health is important.",

    // Info Card
    infoTitle: "Did You Know?",
    infoText:
      "Writing in a gratitude journal for just 5 minutes a day can significantly boost your happiness and well-being!",

    // History Section
    historyTitle: "Journal History",
    historyEmpty: "No entries yet. Today is a good start! ✨",
    historyExportButton: "Export Journal",
    historyViewCalendar: "View Mood Calendar",
    historyHideCalendar: "Hide Mood Calendar",

    // Streak Counter
    streakDayLabel: "Day Streak",
    streakDaysLabel: "Days Streak",
    streakMessageStart: "Start your streak today!",
    streakMessage1: "Great start! Keep it up!",
    streakMessageWeek: "You're on fire! 🔥",
    streakMessageMonth: "Amazing consistency! 🌟",
    streakMessageLegend: "Legendary streak! 🏆",

    // Mood Tracker
    moodTrackerTitle: "Your Dominant Mood",
    moodTrackerText: "You've felt mostly",
    moodTrackerMonth: "this month.",
    moodTrackerButton: "See Full Mood Stats",

    // Mood Filter
    filterLabel: "Filter by Mood:",
    filterAll: "All",
    filterNoEntries: "No",
    filterTryDifferent: "entries found. Try a different filter.",

    // Calendar
    calendarTitle: "Mood Trend Calendar",
    calendarWeekdays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    calendarMonths: [
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
    ],
    calendarMonthsShort: [
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
    ],

    // Toast Messages
    toastUsernameTooShort: "Username must be at least 3 characters!",
    toastLoggedOut: "You have been logged out successfully!",
    toastWelcome: "Ready to reflect on your day?",
    toastGreetingMorning: "Good morning",
    toastGreetingAfternoon: "Good afternoon",
    toastGreetingEvening: "Good evening",
    toastEntryEmpty: "Please write your journal entry first.",
    toastMoodEmpty: "Please select your mood for today.",
    toastEntrySaved: "Journal saved successfully! See you tomorrow 😊",
    toastEntryUpdated: "Journal updated successfully!",
    toastAlreadyJournaled:
      "You've already journaled today. You can edit your entry if you wish.",
    toastNoEntriesToExport: "You don't have any journal entries to export yet.",
    toastExportSuccess: "Journal exported successfully! 🎉",
    toastExportError: "There was an error exporting your journal.",

    // Export Modal
    exportTitle: "Export Your Journal",
    exportDescription:
      "Download all your journal entries as text files in a single ZIP file.",
    exportIncludeMood: "Include mood in export",
    exportFileNote:
      "Files will be saved in .txt format with one entry per file.",
    exportCancel: "Cancel",
    exportDownload: "Download ZIP",

    // Footer
    footerCopyright: "2025 Life is Precious - Daily Gratitude Journal",

    // Celebration Modal
    celebrationTitle: "Congratulations!",
    celebrationMessage: "You've reached a",
    celebrationDayStreak: "day streak!",
    celebrationContinue: "Continue",
  },

  // Japanese
  ja: {
    // Header
    appTitle: "Life is Precious",
    appSubtitle: "日々の感謝日記",
    logout: "ログアウト",

    // Auth Section
    authWelcome: "おかえりなさい！",
    authInstruction:
      "お茶を一杯飲みながら、今日の小さな出来事を書いてみましょう 🌱",
    authPlaceholder: "今日のお名前は？",
    authButton: "書き始める",
    authExtraText: "あなたの物語はここで安全です ✨",

    // Tab Navigation
    tabJournal: "今日の日記",
    tabHistory: "履歴",

    // Journal Section
    journalGreeting: "こんにちは",
    journalLabel: "今日はどんな一日でしたか？小さなことでも大切です。",
    journalPlaceholder: "気楽に、あなたの思いを書いてください...",
    journalMoodLabel: "今日の気分はいかがですか？",
    journalSaveButton: "日記を保存",

    // Moods
    moodHappy: "嬉しい",
    moodNeutral: "普通",
    moodSad: "悲しい",
    moodAngry: "怒り",
    moodTired: "疲れた",

    // Motivation Messages
    motivationHappy: "✨ 素晴らしい！今日もポジティブなエネルギーを保ちましょう！",
    motivationNeutral: "🌊 普通の気分でも大丈夫、毎日には独自の物語があります。",
    motivationSad: "🌈 悪い日も過ぎ去ります。強くいてください！あなたは一人ではありません。",
    motivationAngry:
      "💧 心を落ち着かせる時間を取りましょう。その後、すべてが楽になります。",
    motivationTired: "🌙 休息を忘れずに。健康を大切にすることが重要です。",

    // Info Card
    infoTitle: "ご存知ですか？",
    infoText:
      "感謝日記を1日たった5分書くだけで、幸福感と健康が大幅に向上します！",

    // History Section
    historyTitle: "日記履歴",
    historyEmpty: "まだエントリーがありません。今日が良いスタートです！ ✨",
    historyExportButton: "日記をエクスポート",
    historyViewCalendar: "気分カレンダーを表示",
    historyHideCalendar: "気分カレンダーを非表示",

    // Streak Counter
    streakDayLabel: "日連続",
    streakDaysLabel: "日連続",
    streakMessageStart: "今日から連続記録を始めましょう！",
    streakMessage1: "素晴らしいスタート！続けましょう！",
    streakMessageWeek: "燃えています！ 🔥",
    streakMessageMonth: "素晴らしい継続性！ 🌟",
    streakMessageLegend: "伝説的な連続記録！ 🏆",

    // Mood Tracker
    moodTrackerTitle: "あなたの主な気分",
    moodTrackerText: "今月は主に",
    moodTrackerMonth: "の気分でした。",
    moodTrackerButton: "詳細な気分統計を見る",

    // Mood Filter
    filterLabel: "気分でフィルター：",
    filterAll: "すべて",
    filterNoEntries: "",
    filterTryDifferent: "のエントリーが見つかりません。別のフィルターを試してください。",

    // Calendar
    calendarTitle: "気分トレンドカレンダー",
    calendarWeekdays: ["日", "月", "火", "水", "木", "金", "土"],
    calendarMonths: [
      "1月",
      "2月",
      "3月",
      "4月",
      "5月",
      "6月",
      "7月",
      "8月",
      "9月",
      "10月",
      "11月",
      "12月",
    ],
    calendarMonthsShort: [
      "1月",
      "2月",
      "3月",
      "4月",
      "5月",
      "6月",
      "7月",
      "8月",
      "9月",
      "10月",
      "11月",
      "12月",
    ],

    // Toast Messages
    toastUsernameTooShort: "ユーザー名は3文字以上である必要があります！",
    toastLoggedOut: "正常にログアウトしました！",
    toastWelcome: "今日を振り返る準備はできていますか？",
    toastGreetingMorning: "おはようございます",
    toastGreetingAfternoon: "こんにちは",
    toastGreetingEvening: "こんばんは",
    toastEntryEmpty: "まず日記のエントリーを書いてください。",
    toastMoodEmpty: "今日の気分を選択してください。",
    toastEntrySaved: "日記が正常に保存されました！また明日 😊",
    toastEntryUpdated: "日記が正常に更新されました！",
    toastAlreadyJournaled:
      "今日はすでに日記を書いています。必要に応じてエントリーを編集できます。",
    toastNoEntriesToExport: "エクスポートする日記エントリーがまだありません。",
    toastExportSuccess: "日記が正常にエクスポートされました！ 🎉",
    toastExportError: "日記のエクスポート中にエラーが発生しました。",

    // Export Modal
    exportTitle: "日記をエクスポート",
    exportDescription:
      "すべての日記エントリーを1つのZIPファイルのテキストファイルとしてダウンロードします。",
    exportIncludeMood: "エクスポートに気分を含める",
    exportFileNote:
      "ファイルは.txt形式で保存され、1つのエントリーごとに1つのファイルになります。",
    exportCancel: "キャンセル",
    exportDownload: "ZIPをダウンロード",

    // Footer
    footerCopyright: "2025 Life is Precious - 日々の感謝日記",

    // Celebration Modal
    celebrationTitle: "おめでとうございます！",
    celebrationMessage: "",
    celebrationDayStreak: "日連続を達成しました！",
    celebrationContinue: "続ける",
  },

  // Korean
  ko: {
    // Header
    appTitle: "Life is Precious",
    appSubtitle: "일일 감사 일기",
    logout: "로그아웃",

    // Auth Section
    authWelcome: "안녕하세요, 다시 오신 것을 환영합니다!",
    authInstruction: "차 한 잔 하시면서, 오늘의 작은 일을 적어볼까요? 🌱",
    authPlaceholder: "오늘 당신의 이름은?",
    authButton: "쓰기 시작",
    authExtraText: "당신의 이야기는 여기서 안전합니다 ✨",

    // Tab Navigation
    tabJournal: "오늘의 일기",
    tabHistory: "기록",

    // Journal Section
    journalGreeting: "안녕하세요",
    journalLabel: "오늘은 어떤 하루였나요? 작은 것도 중요합니다.",
    journalPlaceholder: "부담 없이, 당신의 생각을 적어주세요...",
    journalMoodLabel: "오늘 기분이 어떠세요?",
    journalSaveButton: "일기 저장",

    // Moods
    moodHappy: "행복",
    moodNeutral: "보통",
    moodSad: "슬픔",
    moodAngry: "화남",
    moodTired: "피곤",

    // Motivation Messages
    motivationHappy: "✨ 좋아요! 오늘도 긍정적인 에너지를 유지하세요!",
    motivationNeutral: "🌊 보통 기분이어도 괜찮아요, 매일은 각자의 이야기가 있습니다.",
    motivationSad: "🌈 나쁜 날도 지나갈 거예요. 힘내세요! 당신은 혼자가 아닙니다.",
    motivationAngry:
      "💧 마음을 진정시킬 시간을 가지세요. 그러면 모든 것이 더 쉬워질 거예요.",
    motivationTired: "🌙 휴식을 잊지 마세요. 건강을 돌보는 것이 중요합니다.",

    // Info Card
    infoTitle: "알고 계셨나요?",
    infoText:
      "하루 단 5분 감사 일기를 쓰는 것만으로도 행복과 웰빙이 크게 향상될 수 있습니다!",

    // History Section
    historyTitle: "일기 기록",
    historyEmpty: "아직 항목이 없습니다. 오늘이 좋은 시작입니다! ✨",
    historyExportButton: "일기 내보내기",
    historyViewCalendar: "기분 달력 보기",
    historyHideCalendar: "기분 달력 숨기기",

    // Streak Counter
    streakDayLabel: "일 연속",
    streakDaysLabel: "일 연속",
    streakMessageStart: "오늘부터 연속 기록을 시작하세요!",
    streakMessage1: "좋은 시작이에요! 계속하세요!",
    streakMessageWeek: "불타오르고 있어요! 🔥",
    streakMessageMonth: "놀라운 일관성! 🌟",
    streakMessageLegend: "전설적인 연속 기록! 🏆",

    // Mood Tracker
    moodTrackerTitle: "당신의 주요 기분",
    moodTrackerText: "이번 달에는 주로",
    moodTrackerMonth: "기분이었습니다.",
    moodTrackerButton: "전체 기분 통계 보기",

    // Mood Filter
    filterLabel: "기분으로 필터:",
    filterAll: "전체",
    filterNoEntries: "",
    filterTryDifferent: "항목을 찾을 수 없습니다. 다른 필터를 시도해보세요.",

    // Calendar
    calendarTitle: "기분 트렌드 달력",
    calendarWeekdays: ["일", "월", "화", "수", "목", "금", "토"],
    calendarMonths: [
      "1월",
      "2월",
      "3월",
      "4월",
      "5월",
      "6월",
      "7월",
      "8월",
      "9월",
      "10월",
      "11월",
      "12월",
    ],
    calendarMonthsShort: [
      "1월",
      "2월",
      "3월",
      "4월",
      "5월",
      "6월",
      "7월",
      "8월",
      "9월",
      "10월",
      "11월",
      "12월",
    ],

    // Toast Messages
    toastUsernameTooShort: "사용자 이름은 최소 3자 이상이어야 합니다!",
    toastLoggedOut: "성공적으로 로그아웃되었습니다!",
    toastWelcome: "오늘을 되돌아볼 준비가 되셨나요?",
    toastGreetingMorning: "좋은 아침",
    toastGreetingAfternoon: "좋은 오후",
    toastGreetingEvening: "좋은 저녁",
    toastEntryEmpty: "먼저 일기를 작성해주세요.",
    toastMoodEmpty: "오늘의 기분을 선택해주세요.",
    toastEntrySaved: "일기가 성공적으로 저장되었습니다! 내일 봐요 😊",
    toastEntryUpdated: "일기가 성공적으로 업데이트되었습니다!",
    toastAlreadyJournaled:
      "오늘 이미 일기를 작성했습니다. 원하시면 항목을 편집할 수 있습니다.",
    toastNoEntriesToExport: "아직 내보낼 일기 항목이 없습니다.",
    toastExportSuccess: "일기가 성공적으로 내보내졌습니다! 🎉",
    toastExportError: "일기를 내보내는 중 오류가 발생했습니다.",

    // Export Modal
    exportTitle: "일기 내보내기",
    exportDescription:
      "모든 일기 항목을 하나의 ZIP 파일에 텍스트 파일로 다운로드합니다.",
    exportIncludeMood: "내보내기에 기분 포함",
    exportFileNote:
      "파일은 .txt 형식으로 저장되며 항목당 하나의 파일이 생성됩니다.",
    exportCancel: "취소",
    exportDownload: "ZIP 다운로드",

    // Footer
    footerCopyright: "2025 Life is Precious - 일일 감사 일기",

    // Celebration Modal
    celebrationTitle: "축하합니다!",
    celebrationMessage: "",
    celebrationDayStreak: "일 연속을 달성했습니다!",
    celebrationContinue: "계속하기",
  },
};

// Current language (default: English)
let currentLanguage = "en";

/**
 * Get translation for a key
 * @param {string} key - Translation key
 * @returns {string|array} - Translated text
 */
function __(key) {
  return translations[currentLanguage][key] || key;
}

/**
 * Set current language
 * @param {string} lang - Language code (id, en, ja, ko)
 */
function setLanguage(lang) {
  if (translations[lang]) {
    currentLanguage = lang;
    localStorage.setItem("language", lang);
    return true;
  }
  return false;
}

/**
 * Get current language
 * @returns {string} - Current language code
 */
function getCurrentLanguage() {
  return currentLanguage;
}

/**
 * Initialize language from localStorage
 */
function initLanguage() {
  const savedLang = localStorage.getItem("language");
  if (savedLang && translations[savedLang]) {
    currentLanguage = savedLang;
  }
}

