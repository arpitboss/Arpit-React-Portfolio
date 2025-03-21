# Developer Portfolio

## 🚀 Overview

A modern, responsive developer portfolio built with React.js and Tailwind CSS, featuring a striking dark/light mode, smooth animations, and a custom cursor. This portfolio showcases my projects, skills, and professional journey in an engaging, interactive format.

## ✨ Features

- **Responsive Design**: Fully responsive layout optimized for all device sizes
- **Dark/Light Mode**: Toggle between themes with smooth transition effects
- **Custom Cursor**: Unique cursor animation for an enhanced browsing experience
- **Animated Typography**: Dynamic typewriter effect for key text elements
- **Project Showcase**: Interactive project cards with detailed information
- **Performance Optimized**: Fast loading times and smooth scrolling
- **Accessibility Focused**: WCAG compliant design elements
- **Contact Form**: Integrated contact functionality

## 🛠️ Technologies

- **React.js** - Frontend framework
- **Tailwind CSS** - Styling and responsive design
- **Framer Motion** - Animations and transitions
- **React Router** - Navigation and routing
- **JetBrains Mono & Space Mono** - Typography
- **Vite** - Build tool and development server

## 🚦 Getting Started

### Prerequisites

- Node.js (v14.0 or later)
- npm or yarn

### Installation

1. Clone the repository
    ```bash
    git clone https://github.com/yourusername/portfolio.git
    ```

2. Navigate to the project directory
    ```bash
    cd portfolio
    ```

3. Install dependencies
    ```bash
    npm install
    # or
    yarn install
    ```

4. Start the development server
    ```bash
    npm run dev
    # or
    yarn dev
    ```

5. Open your browser and visit `http://localhost:5173`

## 📋 Project Structure

```
portfolio/
├── public/
│   ├── assets/
│   │   ├── images/
│   │   └── resume.pdf
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Header/
│   │   ├── Footer/
│   │   ├── Hero/
│   │   ├── Projects/
│   │   ├── About/
│   │   ├── Contact/
│   │   └── UI/
│   ├── hooks/
│   ├── context/
│   ├── data/
│   ├── styles/
│   ├── utils/
│   ├── App.jsx
│   └── main.jsx
├── .gitignore
├── package.json
├── README.md
└── tailwind.config.js
```

## 🔧 Customization

### Theme Colors

Edit the `tailwind.config.js` file to customize the color palette:

```js
module.exports = {
    theme: {
        extend: {
        colors: {
            'primary-light': '#007bff',
            'primary-dark': '#00d8ff',
            'light': '#f8f9fa',
            'light-300': '#e9ecef',
            'dark': '#0a192f',
            'dark-700': '#112240',
        }
        }
    }
}
```

### Typography

Change font settings in the CSS file as needed:

```css
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&family=Space+Mono:wght@400;700&display=swap');

body {
    font-family: 'JetBrains Mono', monospace;
}

h1, h2, h3, h4, h5, h6 {
    font-family: 'Space Mono', monospace;
}
```

## 📱 Contact

- Email: workother001@gmail.com
- LinkedIn: [linkedin.com/in/yourusername](https://www.linkedin.com/in/arpit-verma-545819226/)
- GitHub: [github.com/yourusername](https://github.com/arpitboss)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.