# H2Over/Under — A charity: water Awareness Game

A browser-based Higher/Lower guessing game built to raise awareness about global water usage. Players compare water consumption facts and guess whether the hidden number is **higher** or **lower** than the one shown. One wrong guess and it's game over.

Built with vanilla HTML, CSS, and JavaScript — no frameworks, no build step.

## How It Works

1. Two cards are shown side by side (desktop) or stacked (mobile)
2. The left card displays a water usage fact with its number revealed
3. The right card shows a different fact with the number hidden
4. Guess whether the hidden number is **higher** or **lower**
5. Correct guesses advance your score; one wrong guess ends the game
6. A 20-second timer counts down for each guess — if it runs out, game over
7. At game over, you see your score, your best score, and a water crisis awareness fact

## Features

- **100 water usage facts** — 50 charity: water impact/crisis facts and 50 casual everyday water usage facts, all measured in gallons
- **Animated card transitions** — cards slide, swap, and pop in with smooth multi-phase animations
- **Water-themed background animations** — falling droplets and a scrolling wave at the bottom of the screen
- **Responsive design** — fully playable on desktop and mobile with adaptive layouts
- **Local high score** — best score is saved to `localStorage`
- **Share functionality** — copy your score to the clipboard to share with friends
- **Accessibility** — ARIA attributes on interactive elements, keyboard support (Enter to start/restart, arrow keys to guess)

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Markup | HTML5 (semantic elements, ARIA roles) |
| Styling | CSS3 (custom properties, flexbox, keyframe animations, media queries) |
| Logic | Vanilla JavaScript (ES6+, no dependencies) |
| Fonts | Kazimir Text (headings), Proxima Nova (body) |
| Assets | SVG logo, inline SVG icons |

## Project Structure

```
charity-water-game/
├── index.html              # Single-page HTML with 3 screens (splash, game, game over)
├── styles.css              # Complete responsive stylesheet (~950 lines)
├── script.js               # Game logic, animations, event handling (~610 lines)
├── charity-water-logo.svg  # Official charity: water logo
└── README.md               # This file
```

## Running Locally

No build tools required. Open `index.html` in any modern browser:

```bash
# Option 1: Open the file directly
open index.html

# Option 2: Serve with any static server
npx serve .
# or
python3 -m http.server 8000
```

## Design Decisions

- **No frameworks** — the game is intentionally lightweight and dependency-free so it loads instantly and can be embedded anywhere
- **CSS custom properties** — a full design token system (`--text-hero`, `--weight-black`, `--blue`, etc.) makes the visual language easy to adjust
- **GPU-accelerated animations** — all animations use `transform` and `opacity` to stay on the compositor thread and run at 60fps
- **Facts are hardcoded** — no API calls means zero loading time, offline support, and no CORS issues

## Customization

| What | Where |
|------|-------|
| Add/edit water facts | `script.js` → `charityWaterFacts[]` and `casualFacts[]` arrays |
| Change colors | `styles.css` → `:root` CSS variables |
| Adjust font sizes | `styles.css` → `--text-hero` through `--text-small` variables |
| Timer duration | `script.js` → `TIMER_SECONDS` constant |
| Wave animation speed | `styles.css` → `.wave-back` / `.wave-front` animation duration |
| Number of droplets | `index.html` → add/remove `.droplet` divs |

## Credits

- Game concept inspired by the [Higher Lower Game](https://www.higherlowergame.com/)
- Built to support [charity: water](https://www.charitywater.org/) — a nonprofit bringing clean and safe drinking water to people in developing countries
- Water usage data sourced from USGS, EPA, Water Footprint Network, and charity: water reports

## License

This project is for educational and awareness purposes. charity: water brand assets are used under fair use for nonprofit awareness.