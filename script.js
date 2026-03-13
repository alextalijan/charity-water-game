// ─── WATER FACTS DATA ──────────────────────────────────────────────────────────
// Every fact is measured in GALLONS so the Higher/Lower comparison always hits.
// 50 serious (charity: water + water crisis) + 50 casual (college-life water usage)
const waterFacts = {
  charityWaterFacts: [
    { fact: "Minimum water to survive one day", number: 0.5, unit: "gallons" },
    { fact: "Water one person rehydrates with to recover from illness", number: 1, unit: "gallons" },
    { fact: "Water a mom in South Sudan boils daily to make it safer for her kids", number: 2, unit: "gallons" },
    { fact: "All the water a family in Mozambique uses in one day", number: 2.6, unit: "gallons" },
    { fact: "All the water one person in Ethiopia gets for a whole day", number: 3, unit: "gallons" },
    { fact: "Water one Jerry can hold — a rural family's whole trip", number: 5, unit: "gallons" },
    { fact: "Water a kid in Madagascar carries home on their head daily", number: 5, unit: "gallons" },
    { fact: "Water a girl in Kenya saves each day once a well is built", number: 5, unit: "gallons" },
    { fact: "Water a woman in Haiti walks 3 hours to collect", number: 5, unit: "gallons" },
    { fact: "Water allowed per person during Cape Town's Day Zero crisis", number: 6.6, unit: "gallons" },
    { fact: "Water a family in Bangladesh carries from a dirty pond daily", number: 7, unit: "gallons" },
    { fact: "Water one family in India uses for everything in a day", number: 8, unit: "gallons" },
    { fact: "Water a school hand-washing station uses per day", number: 10, unit: "gallons" },
    { fact: "WHO recommended water per person per day", number: 13, unit: "gallons" },
    { fact: "Water one biosand filter cleans daily — no electricity needed", number: 15, unit: "gallons" },
    { fact: "Water an American uses in a 6-min shower — more than some families get all day", number: 15, unit: "gallons" },
    { fact: "Water lost daily from an uncovered village water tank", number: 15, unit: "gallons" },
    { fact: "Water one hand-dug well pumps per hour", number: 15, unit: "gallons" },
    { fact: "Water saved daily when a well replaces a long walk to a river", number: 20, unit: "gallons" },
    { fact: "Water one person in sub-Saharan Africa uses in a whole week", number: 25, unit: "gallons" },
    { fact: "Water a school needs just for hand-washing each day", number: 25, unit: "gallons" },
    { fact: "Water a refugee gets for one whole week", number: 28, unit: "gallons" },
    { fact: "Water a family saves per week when they don't walk 5 miles to a river", number: 35, unit: "gallons" },
    { fact: "Water 200 students drink during one school day", number: 50, unit: "gallons" },
    { fact: "Water a spring protection captures per hour", number: 50, unit: "gallons" },
    { fact: "Water a small farmer needs daily to keep crops alive", number: 50, unit: "gallons" },
    { fact: "Water a rope pump delivers per hour", number: 60, unit: "gallons" },
    { fact: "Water a community tap delivers per hour after install", number: 80, unit: "gallons" },
    { fact: "Water a rural health clinic needs daily to stay open", number: 130, unit: "gallons" },
    { fact: "Water drip irrigation saves a small farm vs flooding the field", number: 200, unit: "gallons" },
    { fact: "Water a solar-powered pump delivers to a school each day", number: 300, unit: "gallons" },
    { fact: "Water one charity: water well pumps for a village daily", number: 350, unit: "gallons" },
    { fact: "Water one charity: water sensor tracks flowing through a well each day", number: 350, unit: "gallons" },
    { fact: "Water an entire school in Cambodia gets per day from a new well", number: 500, unit: "gallons" },
    { fact: "Water a solar desalination unit makes from saltwater daily", number: 600, unit: "gallons" },
    { fact: "Water a restored spring delivers daily", number: 700, unit: "gallons" },
    { fact: "Water a protected spring gives a community for free, every day", number: 700, unit: "gallons" },
    { fact: "Water a hospital in rural Ethiopia needs daily but often can't get", number: 1500, unit: "gallons" },
    { fact: "Water a village of 250 people uses daily once they have a well", number: 2000, unit: "gallons" },
    { fact: "Water a piped gravity system delivers to a community daily", number: 2500, unit: "gallons" },
    { fact: "Water that $40 to charity: water gives one person in a year", number: 4745, unit: "gallons" },
    { fact: "Water one rainwater tank collects in a rainy season", number: 5000, unit: "gallons" },
    { fact: "Water lost when a community's only well breaks for a month", number: 10500, unit: "gallons" },
    { fact: "Water one gravity-fed system delivers to 10 villages per day", number: 25000, unit: "gallons" },
    { fact: "Water one well has delivered over 10 years", number: 1277500, unit: "gallons" },
    { fact: "Water one borehole delivers in its 20-year lifespan", number: 2555000, unit: "gallons" },
    { fact: "Water charity: water has delivered worldwide since 2006", number: 5000000000, unit: "gallons" },
    { fact: "Water a broken pump delivers — literally nothing", number: 0, unit: "gallons" },
    { fact: "Water a composting toilet uses per flush — literally zero", number: 0, unit: "gallons" },
    { fact: "Water spilled per mile when girls carry buckets home", number: 0.5, unit: "gallons" }
  ],

  casualFacts: [
    { fact: "Growing one almond", number: 1.1, unit: "gallons" },
    { fact: "One flush of the dorm toilet", number: 1.6, unit: "gallons" },
    { fact: "Brushing teeth with the tap running", number: 4, unit: "gallons" },
    { fact: "Running the dishwasher once", number: 6, unit: "gallons" },
    { fact: "Making one slice of bread", number: 11, unit: "gallons" },
    { fact: "Growing one bag of chips worth of potatoes", number: 12, unit: "gallons" },
    { fact: "A quick 5-min shower before your 8am", number: 12.5, unit: "gallons" },
    { fact: "Growing one orange", number: 13, unit: "gallons" },
    { fact: "Growing one apple", number: 18, unit: "gallons" },
    { fact: "Growing one banana", number: 18, unit: "gallons" },
    { fact: "Brewing one pint of beer", number: 20, unit: "gallons" },
    { fact: "Hand-washing dishes after cooking", number: 20, unit: "gallons" },
    { fact: "One gym shower after a workout", number: 20, unit: "gallons" },
    { fact: "A 10-min 'thinking about life' shower", number: 25, unit: "gallons" },
    { fact: "Making one glass of milk", number: 30, unit: "gallons" },
    { fact: "Making one glass of wine", number: 32, unit: "gallons" },
    { fact: "Making one bagel", number: 36, unit: "gallons" },
    { fact: "Filling a bathtub for self-care night", number: 36, unit: "gallons" },
    { fact: "Growing & brewing one cup of coffee", number: 37, unit: "gallons" },
    { fact: "Making one roll of toilet paper", number: 37, unit: "gallons" },
    { fact: "One load of laundry", number: 40, unit: "gallons" },
    { fact: "Making one late-night pizza slice", number: 42, unit: "gallons" },
    { fact: "Making one scoop of ice cream", number: 42, unit: "gallons" },
    { fact: "Making one burrito bowl's worth of beans", number: 43, unit: "gallons" },
    { fact: "Making one glass of OJ", number: 45, unit: "gallons" },
    { fact: "Growing the sugarcane in one soda can", number: 46, unit: "gallons" },
    { fact: "Producing one egg", number: 53, unit: "gallons" },
    { fact: "Growing one avocado", number: 60, unit: "gallons" },
    { fact: "Washing a car by hand", number: 80, unit: "gallons" },
    { fact: "Water the average American uses per day", number: 82, unit: "gallons" },
    { fact: "Making one textbook", number: 95, unit: "gallons" },
    { fact: "Making one disposable diaper", number: 144, unit: "gallons" },
    { fact: "A running toilet wastes this much every day", number: 200, unit: "gallons" },
    { fact: "Making one chocolate bar", number: 450, unit: "gallons" },
    { fact: "Growing one pound of rice", number: 449, unit: "gallons" },
    { fact: "Making one pound of chicken", number: 518, unit: "gallons" },
    { fact: "Making one car tire", number: 518, unit: "gallons" },
    { fact: "Making one pound of pork", number: 576, unit: "gallons" },
    { fact: "Making one hamburger", number: 660, unit: "gallons" },
    { fact: "Making one cotton t-shirt", number: 700, unit: "gallons" },
    { fact: "Sprinklers running one hour on the quad", number: 1020, unit: "gallons" },
    { fact: "Topping off the campus pool for a week", number: 1000, unit: "gallons" },
    { fact: "Making one pair of jeans", number: 1800, unit: "gallons" },
    { fact: "Growing one pound of almonds", number: 1929, unit: "gallons" },
    { fact: "Making one pair of leather shoes", number: 2113, unit: "gallons" },
    { fact: "Making one bedsheet set", number: 2839, unit: "gallons" },
    { fact: "A leaky faucet dripping for one year", number: 3000, unit: "gallons" },
    { fact: "Making one pound of chocolate", number: 3170, unit: "gallons" },
    { fact: "Making one smartphone", number: 3190, unit: "gallons" },
    { fact: "Making one laptop", number: 4679, unit: "gallons" }
  ]
};

// ─── IMPACT FACTS (shown on game-over screen) ─────────────────────────────────
const impactFacts = [
  {
    stat: "17 million",
    text: "people now have clean water thanks to charity: water donors since 2006. That's a whole lot of wins."
  },
  {
    stat: "$40",
    text: "can give one person clean water for life through charity: water. That's less than your monthly streaming subs."
  },
  {
    stat: "137,000+",
    text: "water projects funded by charity: water across 29 countries — and every single one is tracked with real data."
  },
  {
    stat: "100%",
    text: "of public donations to charity: water go straight to funding clean water projects. Every cent. No exceptions."
  },
  {
    stat: "350 gallons",
    text: "of clean water pumped daily from a single charity: water well — enough to change a whole village's day."
  },
  {
    stat: "130,000",
    text: "remote sensors are monitoring water flow in real time right now so communities always have working water."
  },
  {
    stat: "3 gallons",
    text: "is what some families get for an entire day — drinking, cooking, cleaning, everything. Your shower alone uses 25."
  },
  {
    stat: "250 people",
    text: "can be served by one single well. That's your whole lecture hall — with clean water, for years."
  }
];

// ─── DOM REFERENCES ────────────────────────────────────────────────────────────
const $ = (sel) => document.querySelector(sel);

const dom = {
  // Screens
  splashScreen:   $('#splash-screen'),
  gameScreen:     $('#game-screen'),
  resultsScreen:  $('#results-screen'),

  // Header
  hamburgerBtn:   $('#hamburger-btn'),
  headerNav:      $('#header-nav'),

  // Splash
  difficultyEasyBtn:   $('#difficulty-easy'),
  difficultyMediumBtn: $('#difficulty-medium'),
  difficultyHardBtn:   $('#difficulty-hard'),
  difficultyExpertBtn: $('#difficulty-expert'),
  bestEasyEl:          $('#best-easy'),
  bestMediumEl:        $('#best-medium'),
  bestHardEl:          $('#best-hard'),
  bestExpertEl:        $('#best-expert'),

  // Game sub-header
  topbarHomeBtn:   $('#topbar-home-btn'),
  topbarDifficulty: $('#topbar-difficulty'),
  topbarLives:      $('#topbar-lives'),
  scoreEl:        $('#score'),
  timerEl:        $('#timer'),
  timerPill:      $('#timer-pill'),

  // Left card (reference)
  leftLabel:      $('#left-label'),
  leftNumber:     $('#left-number'),
  leftUnit:       $('#left-unit'),

  // Right card (guess)
  rightLabel:     $('#right-label'),
  rightNumber:    $('#right-number'),
  rightUnit:      $('#right-unit'),

  // Cards themselves
  cardLeft:       $('#card-left'),
  cardRight:      $('#card-right'),

  // Guess buttons
  guessButtons:   $('#guess-buttons'),
  btnHigher:      $('#btn-higher'),
  btnLower:       $('#btn-lower'),

  // Results / game-over
  gameoverMode:   $('#gameover-mode'),
  bestCaption:    $('#best-score-caption'),
  finalScore:     $('#final-score'),
  finalHighScore: $('#final-high-score'),
  newRecord:      $('#new-record'),
  awarenessStat:  $('#awareness-stat'),
  awarenessText:  $('#awareness-text'),
  playAgainBtn:   $('#play-again-btn'),
  resultsHomeBtn: $('#results-home-btn'),
  shareBtn:       $('#share-btn'),

  // Confirm modal
  leaveConfirmOverlay: $('#leave-confirm-overlay'),
  leaveConfirmCancelBtn: $('#leave-confirm-cancel'),
  leaveConfirmAcceptBtn: $('#leave-confirm-accept'),
};

// ─── GAME STATE ────────────────────────────────────────────────────────────────
let currentScore = 0;
let factsPool = [];
let topCardFact = null;
let bottomCardFact = null;
let currentDifficulty = null;
let livesRemaining = 1;
let timerDuration = 10;
let timeLeft = 10;
let timerInterval = null;
let isGuessing = false; // locks input while revealing
let leaveConfirmOpen = false;

const bestScores = {
  easy: parseInt(localStorage.getItem('bestScore_easy')) || 0,
  medium: parseInt(localStorage.getItem('bestScore_medium')) || 0,
  hard: parseInt(localStorage.getItem('bestScore_hard')) || 0,
  expert: parseInt(localStorage.getItem('bestScore_expert')) || 0,
};

const difficultyConfig = {
  easy: { timer: 20, lives: 3 },
  medium: { timer: 15, lives: 1 },
  hard: { timer: 10, lives: 1 },
  expert: { timer: 6, lives: 1 },
};

const difficultyLabel = {
  easy: 'EASY',
  medium: 'MEDIUM',
  hard: 'HARD',
  expert: 'EXPERT',
};

// ─── SCREEN MANAGEMENT ─────────────────────────────────────────────────────────
const dropletsEl = document.querySelector('.droplets');

function showScreen(screen) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  screen.classList.add('active');
  hideLeaveConfirm();

  // Hide droplets during gameplay (keep on splash & game over)
  if (screen === dom.gameScreen) {
    dropletsEl.style.display = 'none';
  } else {
    dropletsEl.style.display = '';
  }
}

// ─── HAMBURGER MENU (mobile) ───────────────────────────────────────────────────
if (dom.hamburgerBtn && dom.headerNav) {
  dom.hamburgerBtn.addEventListener('click', () => {
    dom.hamburgerBtn.classList.toggle('open');
    dom.headerNav.classList.toggle('open');
  });

  dom.headerNav.querySelectorAll('.header-nav-link').forEach(link => {
    link.addEventListener('click', () => {
      dom.hamburgerBtn.classList.remove('open');
      dom.headerNav.classList.remove('open');
    });
  });
}

// ─── UTILITY HELPERS ───────────────────────────────────────────────────────────
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function formatNumber(n) {
  if (n >= 1_000_000_000) return (n / 1_000_000_000).toFixed(n % 1_000_000_000 === 0 ? 0 : 1) + ' billion';
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(n % 1_000_000 === 0 ? 0 : 1) + ' million';
  if (n % 1 !== 0) return n.toString();
  return n.toLocaleString();
}

function getBestElementForDifficulty(difficulty) {
  if (difficulty === 'easy') return dom.bestEasyEl;
  if (difficulty === 'medium') return dom.bestMediumEl;
  if (difficulty === 'hard') return dom.bestHardEl;
  return dom.bestExpertEl;
}

function refreshSplashBestScores() {
  Object.keys(bestScores).forEach((difficulty) => {
    const value = bestScores[difficulty];
    const bestEl = getBestElementForDifficulty(difficulty);
    if (!bestEl) return;

    bestEl.textContent = value > 0 ? `Best: ${value.toLocaleString()}` : '';
  });
}

function updateBestScore(difficulty, score) {
  if (!difficulty) return false;
  if (score > bestScores[difficulty]) {
    bestScores[difficulty] = score;
    localStorage.setItem(`bestScore_${difficulty}`, score);
    return true;
  }
  return false;
}

function updateDifficultyDisplay() {
  const label = difficultyLabel[currentDifficulty] || 'EASY';
  dom.topbarDifficulty.textContent = `- ${label}`;
}

function updateLivesDisplay() {
  if (currentDifficulty !== 'easy') {
    dom.topbarLives.classList.add('hidden');
    return;
  }

  const totalLives = difficultyConfig.easy.lives;
  const fullHearts = '❤️'.repeat(Math.max(livesRemaining, 0));
  const emptyHearts = '🖤'.repeat(Math.max(totalLives - livesRemaining, 0));
  dom.topbarLives.textContent = `${fullHearts}${emptyHearts}`;
  dom.topbarLives.classList.remove('hidden');
}

// ─── INIT FACTS POOL ───────────────────────────────────────────────────────────
function buildFactsPool() {
  const combined = currentDifficulty === 'expert'
    ? [...waterFacts.charityWaterFacts]
    : [...waterFacts.charityWaterFacts, ...waterFacts.casualFacts];

  factsPool = shuffle(combined);
}

function getRandomFact() {
  if (factsPool.length === 0) {
    // Reshuffle if somehow exhausted (very long run)
    buildFactsPool();
  }
  return factsPool.pop();
}

// ─── CARD LOADING ──────────────────────────────────────────────────────────────
function loadCards() {
  // Reset card visual states
  dom.cardLeft.classList.remove('correct', 'wrong', 'card-enter');
  dom.cardRight.classList.remove('correct', 'wrong', 'card-enter');
  dom.rightNumber.classList.remove('reveal');
  dom.rightNumber.classList.add('card-number--hidden');
  dom.rightNumber.textContent = '???';

  // Populate left (reference) card
  dom.leftLabel.textContent = topCardFact.fact;
  dom.leftNumber.textContent = formatNumber(topCardFact.number);
  dom.leftUnit.textContent = topCardFact.unit || '';

  // Populate right (guess) card
  dom.rightLabel.textContent = bottomCardFact.fact;
  dom.rightUnit.textContent = bottomCardFact.unit || '';

  // Trigger entrance animation
  requestAnimationFrame(() => {
    dom.cardLeft.classList.add('card-enter');
    dom.cardRight.classList.add('card-enter');
  });

  // Re-enable guess buttons
  dom.guessButtons.classList.remove('hidden', 'fade-out');
  dom.timerPill.classList.remove('fade-out');
  dom.btnHigher.disabled = false;
  dom.btnLower.disabled = false;
  dom.btnHigher.removeAttribute('aria-disabled');
  dom.btnLower.removeAttribute('aria-disabled');
  isGuessing = false;
}

// ─── TIMER ─────────────────────────────────────────────────────────────────────
function startTimer() {
  timeLeft = timerDuration;
  updateTimerDisplay();

  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    timeLeft--;
    updateTimerDisplay();

    if (timeLeft <= 0) {
      stopTimer();
      if (isGuessing) return;
      isGuessing = true;

      dom.btnHigher.disabled = true;
      dom.btnLower.disabled = true;
      dom.btnHigher.setAttribute('aria-disabled', 'true');
      dom.btnLower.setAttribute('aria-disabled', 'true');
      dom.guessButtons.classList.add('fade-out');
      dom.timerPill.classList.add('fade-out');

      dom.rightNumber.classList.remove('card-number--hidden');
      dom.rightNumber.classList.add('reveal');
      dom.rightNumber.textContent = formatNumber(bottomCardFact.number);
      dom.cardRight.classList.add('wrong');

      setTimeout(() => {
        handleWrongAnswer();
      }, 600);
    }
  }, 1000);
}

function updateTimerDisplay() {
  dom.timerEl.textContent = timeLeft;

  // Visual warning when running low
  if (timeLeft <= 3 && timeLeft > 0) {
    dom.timerPill.classList.add('warning');
    playWaterDrip();
  } else {
    dom.timerPill.classList.remove('warning');
  }
}

function stopTimer() {
  clearInterval(timerInterval);
}

function showLeaveConfirm() {
  leaveConfirmOpen = true;
  dom.leaveConfirmOverlay.classList.remove('hidden');
  dom.leaveConfirmOverlay.setAttribute('aria-hidden', 'false');
  dom.leaveConfirmCancelBtn.focus();
}

function hideLeaveConfirm() {
  leaveConfirmOpen = false;
  dom.leaveConfirmOverlay.classList.add('hidden');
  dom.leaveConfirmOverlay.setAttribute('aria-hidden', 'true');
}

// ─── HANDLE GUESS ──────────────────────────────────────────────────────────────
function handleGuess(guessedHigher) {
  if (isGuessing) return;
  isGuessing = true;
  stopTimer();

  // Disable buttons immediately to prevent double-clicks
  dom.btnHigher.disabled = true;
  dom.btnLower.disabled = true;
  dom.btnHigher.setAttribute('aria-disabled', 'true');
  dom.btnLower.setAttribute('aria-disabled', 'true');

  // Fade out buttons + timer
  dom.guessButtons.classList.add('fade-out');
  dom.timerPill.classList.add('fade-out');

  const topVal = topCardFact.number;
  const bottomVal = bottomCardFact.number;

  // Determine correctness
  let correct = false;
  if (guessedHigher && bottomVal >= topVal) correct = true;
  if (!guessedHigher && bottomVal <= topVal) correct = true;

  // Step 1: Reveal the number with animation
  dom.rightNumber.classList.remove('card-number--hidden');
  dom.rightNumber.classList.add('reveal');
  dom.rightNumber.textContent = formatNumber(bottomCardFact.number);

  // Step 2: After a beat, flash the card green/red
  setTimeout(() => {
    if (correct) {
      dom.cardRight.classList.add('correct');
      currentScore++;
      dom.scoreEl.textContent = currentScore;
    } else {
      dom.cardRight.classList.add('wrong');
    }

    // Step 3: After flash settles, advance or end game
    setTimeout(() => {
      if (correct) {
        advanceCards();
      } else {
        handleWrongAnswer();
      }
    }, 600);
  }, 400);
}

function handleWrongAnswer() {
  if (currentDifficulty === 'easy') {
    livesRemaining--;
    updateLivesDisplay();

    if (livesRemaining > 0) {
      setTimeout(() => {
        advanceCards();
      }, 1500);
      return;
    }
  }

  endGame();
}

// ─── ADVANCE CARDS (correct answer — animated shift) ───────────────────────────
function advanceCards() {
  const gameArea = document.querySelector('.game-area');
  const vsColumn = document.querySelector('.vs-column');
  const isMobile = window.innerWidth <= 768;

  // Measure how far the right card needs to slide to reach left card position
  // First, clear card-enter's `forwards` fill — it overrides inline transforms
  dom.cardLeft.classList.remove('card-enter');
  dom.cardRight.classList.remove('card-enter');

  const leftRect = dom.cardLeft.getBoundingClientRect();
  const rightRect = dom.cardRight.getBoundingClientRect();
  const dx = leftRect.left - rightRect.left;
  const dy = leftRect.top - rightRect.top;

  // Phase 1: fade out left card + VS, slide right card to left position
  dom.cardLeft.classList.add('fade-out');
  vsColumn.classList.add('fade-out');
  gameArea.classList.add(isMobile ? 'swapping-vertical' : 'swapping');
  dom.cardRight.style.transform = `translate(${dx}px, ${dy}px)`;

  // After slide completes (~400ms)
  setTimeout(() => {
    // Swap data
    topCardFact = bottomCardFact;
    bottomCardFact = getRandomFact();

    // Capture the right card's current rendered height BEFORE clearing transforms
    const tallHeight = dom.cardRight.getBoundingClientRect().height;

    // Reset transforms and classes
    dom.cardRight.style.transform = '';
    dom.cardRight.style.transition = 'none';
    gameArea.classList.remove('swapping', 'swapping-vertical');
    dom.cardLeft.classList.remove('fade-out');
    vsColumn.classList.remove('fade-out');

    // Populate left card with what was the right card
    dom.leftLabel.textContent = topCardFact.fact;
    dom.leftNumber.textContent = formatNumber(topCardFact.number);
    dom.leftUnit.textContent = topCardFact.unit || '';
    dom.cardLeft.classList.remove('correct', 'wrong', 'card-enter', 'fade-out');
    dom.cardLeft.style.opacity = '1';

    // ─── MOBILE: animate height shrink, THEN show new card ───
    if (isMobile) {
      // Measure natural (short) height of left card with new content
      const shortHeight = dom.cardLeft.getBoundingClientRect().height;

      // Lock left card at the tall height (matching the old right card)
      dom.cardLeft.style.height = tallHeight + 'px';
      dom.cardLeft.style.overflow = 'hidden';
      dom.cardLeft.style.transition = 'none';

      // Hide new right card + VS until shrink is done
      dom.cardRight.style.opacity = '0';
      dom.cardRight.style.pointerEvents = 'none';
      vsColumn.style.opacity = '0';

      // Double-rAF ensures the browser commits the tall height paint
      requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        // Now animate to the short height
        dom.cardLeft.style.transition = 'height 0.6s ease-in-out';
        dom.cardLeft.style.height = shortHeight + 'px';

        // When shrink finishes → show new card + VS
        function onShrinkDone() {
          // Clean up left card inline styles
          dom.cardLeft.style.height = '';
          dom.cardLeft.style.overflow = '';
          dom.cardLeft.style.transition = '';

          // Populate & pop in new right card + VS
          populateAndShowNewCard();
        }

        dom.cardLeft.addEventListener('transitionend', function handler(e) {
          if (e.propertyName !== 'height') return;
          dom.cardLeft.removeEventListener('transitionend', handler);
          onShrinkDone();
        });

        // Safety timeout in case transitionend never fires
        setTimeout(() => {
          if (dom.cardLeft.style.height !== '') onShrinkDone();
        }, 800);
      });
      });
    } else {
      // Desktop: cards have fixed height, no shrink needed
      populateAndShowNewCard();
    }

    function populateAndShowNewCard() {
      // Populate new right card (hidden number)
      dom.rightLabel.textContent = bottomCardFact.fact;
      dom.rightUnit.textContent = bottomCardFact.unit || '';
      dom.rightNumber.classList.remove('reveal');
      dom.rightNumber.classList.add('card-number--hidden');
      dom.rightNumber.textContent = '???';
      dom.cardRight.classList.remove('correct', 'wrong', 'card-enter');

      // Restore right card + VS visibility
      dom.cardRight.style.opacity = '';
      dom.cardRight.style.pointerEvents = '';
      vsColumn.style.opacity = '';

      // Force reflow then pop in the new right card + VS
      void dom.cardRight.offsetHeight;
      dom.cardRight.style.transition = '';
      dom.cardRight.classList.add('pop-in');
      vsColumn.classList.add('pop-in');

      // Re-enable guess buttons
      dom.guessButtons.classList.remove('hidden', 'fade-out');
      dom.timerPill.classList.remove('fade-out');
      dom.btnHigher.disabled = false;
      dom.btnLower.disabled = false;
      dom.btnHigher.removeAttribute('aria-disabled');
      dom.btnLower.removeAttribute('aria-disabled');
      isGuessing = false;

      // Clean up pop-in class after animation
      setTimeout(() => {
        dom.cardRight.classList.remove('pop-in');
        vsColumn.classList.remove('pop-in');
      }, 350);

      startTimer();
    }
  }, 450);
}

// ─── START GAME ────────────────────────────────────────────────────────────────
function startGame(difficulty = currentDifficulty) {
  hideLeaveConfirm();
  currentDifficulty = difficulty || 'easy';
  const config = difficultyConfig[currentDifficulty] || difficultyConfig.easy;

  timerDuration = config.timer;
  livesRemaining = config.lives;

  currentScore = 0;
  dom.scoreEl.textContent = '0';

  updateDifficultyDisplay();
  updateLivesDisplay();

  // Build pool & pick first two facts
  buildFactsPool();
  topCardFact = getRandomFact();
  bottomCardFact = getRandomFact();

  // Switch screen
  showScreen(dom.gameScreen);
  loadCards();
  startTimer();
}

// ─── DISPLAY IMPACT FACT ────────────────────────────────────────────────────────
function displayImpactFact() {
  const impact = impactFacts[Math.floor(Math.random() * impactFacts.length)];
  dom.awarenessStat.textContent = impact.stat;
  dom.awarenessText.textContent = impact.text;
}

// ─── END GAME ──────────────────────────────────────────────────────────────────
function endGame() {
  stopTimer();
  hideLeaveConfirm();

  // Check and update best score
  const isNewRecord = updateBestScore(currentDifficulty, currentScore);
  const modeLabel = difficultyLabel[currentDifficulty] || 'EASY';
  const modeBestScore = bestScores[currentDifficulty] || 0;

  // Populate results screen
  dom.finalScore.textContent = currentScore;
  dom.finalHighScore.textContent = modeBestScore.toLocaleString();
  dom.gameoverMode.textContent = `${modeLabel} MODE`;
  dom.bestCaption.textContent = `BEST (${modeLabel})`;

  // Show or hide NEW RECORD banner + celebrate
  if (isNewRecord && currentScore > 0) {
    dom.newRecord.classList.remove('hidden');
    playCelebration();
    triggerConfetti();
  } else {
    dom.newRecord.classList.add('hidden');
  }

  // Show random charity:water impact fact
  displayImpactFact();
  refreshSplashBestScores();

  showScreen(dom.resultsScreen);
}

// ─── SHARE FUNCTIONALITY ───────────────────────────────────────────────────────
function showToast(message) {
  // Remove any existing toast
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  toast.setAttribute('role', 'status');
  toast.setAttribute('aria-live', 'polite');
  document.body.appendChild(toast);

  // Auto-dismiss after 2s
  setTimeout(() => {
    toast.classList.add('toast-out');
    toast.addEventListener('animationend', () => toast.remove());
  }, 2000);
}

function shareScore() {
  const shareText = `💧 I scored ${currentScore} on H2Over/Under! Can you beat me? ${window.location.href}`;

  // Try native share API first (mostly mobile)
  if (navigator.share) {
    navigator.share({
      title: 'H2Over/Under',
      text: shareText,
      url: window.location.href
    }).catch(() => {});
    return;
  }

  // Fallback: copy to clipboard
  navigator.clipboard.writeText(shareText).then(() => {
    showToast('✓ Copied to clipboard!');
  }).catch(() => {
    // Final fallback: open Twitter intent
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`;
    window.open(tweetUrl, '_blank');
  });
}

function returnToMenu() {
  if (!dom.gameScreen.classList.contains('active')) return;
  showLeaveConfirm();
}

function confirmLeaveToMenu() {
  hideLeaveConfirm();
  stopTimer();
  isGuessing = false;
  currentScore = 0;
  currentDifficulty = null;
  livesRemaining = 1;
  dom.scoreEl.textContent = '0';
  dom.topbarLives.classList.add('hidden');
  showScreen(dom.splashScreen);
}

// ─── EVENT LISTENERS ───────────────────────────────────────────────────────────
dom.difficultyEasyBtn.addEventListener('click', () => startGame('easy'));
dom.difficultyMediumBtn.addEventListener('click', () => startGame('medium'));
dom.difficultyHardBtn.addEventListener('click', () => startGame('hard'));
dom.difficultyExpertBtn.addEventListener('click', () => startGame('expert'));

// Topbar menu button → confirm + return to splash
dom.topbarHomeBtn.addEventListener('click', returnToMenu);

dom.btnHigher.addEventListener('click', () => handleGuess(true));
dom.btnLower.addEventListener('click', () => handleGuess(false));
dom.playAgainBtn.addEventListener('click', () => startGame(currentDifficulty));
dom.resultsHomeBtn.addEventListener('click', () => {
  hideLeaveConfirm();
  currentScore = 0;
  dom.scoreEl.textContent = '0';
  showScreen(dom.splashScreen);
});
dom.shareBtn.addEventListener('click', shareScore);
dom.leaveConfirmCancelBtn.addEventListener('click', hideLeaveConfirm);
dom.leaveConfirmAcceptBtn.addEventListener('click', confirmLeaveToMenu);
dom.leaveConfirmOverlay.addEventListener('click', (e) => {
  if (e.target === dom.leaveConfirmOverlay) hideLeaveConfirm();
});

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
  // Handle Enter on splash screen
  if (e.key === 'Enter' && dom.splashScreen.classList.contains('active')) {
    if (document.activeElement && document.activeElement.classList.contains('difficulty-btn')) {
      document.activeElement.click();
    } else {
      dom.difficultyEasyBtn.click();
    }
    return;
  }

  // Handle Enter on results screen
  if (e.key === 'Enter' && dom.resultsScreen.classList.contains('active')) {
    dom.playAgainBtn.click();
    return;
  }

  if (leaveConfirmOpen) {
    if (e.key === 'Escape') {
      hideLeaveConfirm();
    }
    return;
  }

  // Only respond to game shortcuts during game screen
  if (!dom.gameScreen.classList.contains('active')) return;
  if (isGuessing) return;

  if (e.key === 'ArrowUp' || e.key.toLowerCase() === 'h') {
    handleGuess(true);
  } else if (e.key === 'ArrowDown' || e.key.toLowerCase() === 'l') {
    handleGuess(false);
  }
});

// ─── INIT ──────────────────────────────────────────────────────────────────────
// ─── AUDIO SYSTEM ──────────────────────────────────────────────────────────────
let audioCtx = null;
let isMuted = localStorage.getItem('soundMuted') === 'true';

function getAudioContext() {
  if (isMuted) return null;
  if (!audioCtx) {
    try {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    } catch (e) { return null; }
  }
  if (audioCtx.state === 'suspended') audioCtx.resume();
  return audioCtx;
}

// Water drip: filtered noise burst with descending frequency sweep
function playWaterDrip() {
  const ctx = getAudioContext();
  if (!ctx) return;
  const duration = 0.16;
  const buf = ctx.createBuffer(1, Math.floor(ctx.sampleRate * duration), ctx.sampleRate);
  const data = buf.getChannelData(0);
  for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1;

  const src = ctx.createBufferSource();
  src.buffer = buf;

  const bpf = ctx.createBiquadFilter();
  bpf.type = 'bandpass';
  bpf.frequency.setValueAtTime(2200, ctx.currentTime);
  bpf.frequency.exponentialRampToValueAtTime(500, ctx.currentTime + duration);
  bpf.Q.value = 1.5;

  const gain = ctx.createGain();
  gain.gain.setValueAtTime(0.32, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);

  src.connect(bpf); bpf.connect(gain); gain.connect(ctx.destination);
  src.start(ctx.currentTime);
  src.stop(ctx.currentTime + duration + 0.01);
}

// Celebration: rising C major arpeggio + noise splash layer
function playCelebration() {
  const ctx = getAudioContext();
  if (!ctx) return;

  // Ascending arpeggio C5 → E5 → G5 → C6
  [523.25, 659.25, 783.99, 1046.5].forEach((freq, i) => {
    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    osc.connect(g); g.connect(ctx.destination);
    osc.type = 'sine';
    osc.frequency.value = freq;
    const t = ctx.currentTime + i * 0.1;
    g.gain.setValueAtTime(0.001, t);
    g.gain.linearRampToValueAtTime(0.12, t + 0.05);
    g.gain.exponentialRampToValueAtTime(0.001, t + 0.55);
    osc.start(t); osc.stop(t + 0.6);
  });

  // Noise splash layer for water texture
  const splashDur = 0.55;
  const splashBuf = ctx.createBuffer(1, Math.floor(ctx.sampleRate * splashDur), ctx.sampleRate);
  const splashData = splashBuf.getChannelData(0);
  for (let i = 0; i < splashData.length; i++) splashData[i] = Math.random() * 2 - 1;

  const splashSrc = ctx.createBufferSource();
  splashSrc.buffer = splashBuf;

  const hpf = ctx.createBiquadFilter();
  hpf.type = 'highpass'; hpf.frequency.value = 3000;

  const splashGain = ctx.createGain();
  splashGain.gain.setValueAtTime(0.06, ctx.currentTime);
  splashGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + splashDur);

  splashSrc.connect(hpf); hpf.connect(splashGain); splashGain.connect(ctx.destination);
  splashSrc.start(ctx.currentTime); splashSrc.stop(ctx.currentTime + splashDur + 0.01);
}

function toggleMute() {
  isMuted = !isMuted;
  localStorage.setItem('soundMuted', isMuted);
  updateMuteButton();
}

function updateMuteButton() {
  const btn = document.getElementById('mute-toggle');
  if (!btn) return;
  btn.classList.toggle('is-muted', isMuted);
  btn.setAttribute('aria-label', isMuted ? 'Unmute sounds' : 'Mute sounds');
  btn.setAttribute('aria-pressed', String(isMuted));
}

// ─── CANVAS CONFETTI ───────────────────────────────────────────────────────────
function triggerConfetti() {
  const canvas = document.createElement('canvas');
  canvas.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:9999;';
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  document.body.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  const COLORS = ['#FFC907', '#003366', '#77A8BB', '#FED8C1', '#BF6C46', '#ffffff'];
  const pieces = [];

  for (let i = 0; i < 140; i++) {
    const side = Math.random();
    let x, y, vx, vy;
    if (side < 0.5) {
      // burst from left side
      x = Math.random() * canvas.width * 0.15;
      y = canvas.height * 0.2 + Math.random() * canvas.height * 0.6;
      vx = Math.random() * 9 + 3;
      vy = Math.random() * -10 - 3;
    } else {
      // burst from right side
      x = canvas.width - Math.random() * canvas.width * 0.15;
      y = canvas.height * 0.2 + Math.random() * canvas.height * 0.6;
      vx = -(Math.random() * 9 + 3);
      vy = Math.random() * -10 - 3;
    }
    pieces.push({
      x, y, vx, vy,
      gravity:       0.28 + Math.random() * 0.12,
      drag:          0.985,
      rotation:      Math.random() * Math.PI * 2,
      rotSpeed:      (Math.random() - 0.5) * 0.18,
      color:         COLORS[Math.floor(Math.random() * COLORS.length)],
      w:             Math.random() * 10 + 5,
      h:             Math.random() * 6 + 3,
      shape:         Math.floor(Math.random() * 3), // 0=rect 1=circle 2=triangle
      opacity:       1,
    });
  }

  const DURATION = 4200;
  let start = null;

  function draw(ts) {
    if (!start) start = ts;
    const elapsed = ts - start;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let alive = false;

    for (const p of pieces) {
      p.vx *= p.drag;
      p.vy += p.gravity;
      p.x  += p.vx;
      p.y  += p.vy;
      p.rotation += p.rotSpeed;
      if (elapsed > DURATION - 1200) p.opacity = Math.max(0, p.opacity - 0.018);

      if (p.y < canvas.height + 30 && p.opacity > 0.01) {
        alive = true;
        ctx.save();
        ctx.globalAlpha = p.opacity;
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.fillStyle = p.color;
        if (p.shape === 0) {
          ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        } else if (p.shape === 1) {
          ctx.beginPath(); ctx.ellipse(0, 0, p.w / 2, p.h / 2, 0, 0, Math.PI * 2); ctx.fill();
        } else {
          ctx.beginPath();
          ctx.moveTo(0, -p.h); ctx.lineTo(p.w / 2, p.h / 2); ctx.lineTo(-p.w / 2, p.h / 2);
          ctx.closePath(); ctx.fill();
        }
        ctx.restore();
      }
    }

    if (alive && elapsed < DURATION + 500) {
      requestAnimationFrame(draw);
    } else {
      canvas.remove();
    }
  }

  requestAnimationFrame(draw);
}

// ─── INIT ──────────────────────────────────────────────────────────────────────
(function init() {
  refreshSplashBestScores();
  dom.finalHighScore.textContent = bestScores.easy.toLocaleString();
  dom.gameoverMode.textContent = 'EASY MODE';
  dom.bestCaption.textContent = 'BEST (EASY)';

  // Set ARIA labels for interactive elements
  dom.btnHigher.setAttribute('aria-label', 'Guess higher');
  dom.btnLower.setAttribute('aria-label', 'Guess lower');
  dom.difficultyEasyBtn.setAttribute('aria-label', 'Start Easy mode');
  dom.difficultyMediumBtn.setAttribute('aria-label', 'Start Medium mode');
  dom.difficultyHardBtn.setAttribute('aria-label', 'Start Hard mode');
  dom.difficultyExpertBtn.setAttribute('aria-label', 'Start Expert mode');
  dom.playAgainBtn.setAttribute('aria-label', 'Play again');
  dom.resultsHomeBtn.setAttribute('aria-label', 'Return to difficulty menu');
  dom.shareBtn.setAttribute('aria-label', 'Share your score');
  dom.leaveConfirmCancelBtn.setAttribute('aria-label', 'Keep playing');
  dom.leaveConfirmAcceptBtn.setAttribute('aria-label', 'Leave the current game');

  updateDifficultyDisplay();
  updateLivesDisplay();
  dom.difficultyEasyBtn.focus();

  // Mute toggle
  updateMuteButton();
  const muteBtn = document.getElementById('mute-toggle');
  if (muteBtn) muteBtn.addEventListener('click', toggleMute);
})();
