# Valentine Ask - Interactive Valentine's Day Experience

A beautiful multi-page Valentine's Day website with animations, interactive elements, and a romantic flow.

## 🎯 Project Structure

```
valentine-ask-main/
├── hi.html              # Entry page - Greeting with animated text
├── welcome.html         # Welcome page with images and message
├── index.html           # Main Valentine question page
├── style.css            # Main stylesheet
├── script.js            # Main JavaScript file
├── PART2/
│   ├── part2.html       # Love letter with envelope animation
│   ├── part2.css        # Part 2 stylesheet
│   └── part2.js         # Part 2 JavaScript
└── [Images]             # heart-bg.jpg, envelope.png, cat_heart.gif, etc.
```

## 🚀 User Flow

1. **hi.html** - Greeting page displays "Hiiii My Love !! Anshuuuu ❤️" with letter-by-letter animation
   - Click anywhere or press spacebar to continue

2. **welcome.html** - Welcome page with floating emojis and message
   - Click "Continue ♡" button

3. **index.html** - Valentine question with envelope
   - Click envelope to open letter
   - "Will you be my Valentine?" with Yes/No buttons
   - No button moves away on hover
   - Yes button shows success message and "Continue to Letter" button

4. **PART2/part2.html** - Beautiful full-page love letter
   - Romantic letter with heartfelt messages
   - Floating hearts background animation
   - Paragraphs fade in with animations
   - "Play Clip" button for video link

## 💻 Deployment

### For GitHub Pages:
1. Upload all files maintaining the folder structure
2. Set `hi.html` as the entry point (rename to `index.html` if needed)
3. Ensure all image assets are uploaded

### For Other Hosting:
1. Upload entire folder structure as-is
2. Point domain to `hi.html` or rename it to `index.html`
3. All relative paths are configured correctly

## 🎨 Customization

### Changing Text Content:
- **hi.html**: Line 252-256 (greeting text)
- **welcome.html**: Line 278 (welcome message)
- **index.html**: Line 28 (question), Line 41 (date details)
- **PART2/part2.html**: Lines 20-24 (letter content)

### Adding Images:
In `welcome.html`, replace emoji boxes (lines 270-272) with:
```html
<div class="image-box" style="background-image: url('your-image.jpg');"></div>
```

### Adding Video Link:
In `PART2/part2.html`, line 87, replace `YOUR_VIDEO_URL_HERE` with your video link:
```html
<a href="https://youtube.com/watch?v=YOUR_VIDEO_ID" target="_blank" class="play-clip-btn">
```
Or use any other video hosting platform (Vimeo, Google Drive, etc.)

### Colors:
Main pink theme colors in CSS files:
- `#ff1493` - Deep pink
- `#ff69b4` - Medium pink
- `#ffc0cb` - Light pink

## 📦 Dependencies

- Google Fonts: Pixelify Sans, Chewy, Pacifico, Dancing Script, Great Vibes, Playfair Display
- Pure JavaScript (no external libraries required)

## ✨ Features

- Letter-by-letter text animation
- Floating hearts background
- Interactive button animations
- Full-page romantic love letter with heartfelt messages
- Paragraph fade-in animations
- Glowing paper effect
- Heart beat animations
- Video clip button with hover effects
- Responsive design for all devices
- Click and keyboard navigation
- Smooth transitions between pages

## 🎭 Browser Support

Works on all modern browsers:
- Chrome/Edge (recommended)
- Firefox
- Safari
- Mobile browsers

---

Made with ❤️ for Anshu
