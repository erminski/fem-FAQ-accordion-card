# Frontend Mentor - FAQ accordion card solution

This is a solution to the [FAQ accordion card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See hover states for all interactive elements on the page
- Hide/Show the answer to a question when the question is clicked

### Screenshot

![](./screenshot.png)

### Links

- Solution URL: [My solution](https://www.frontendmentor.io/solutions/faqaccordioncard-kOqrr-_ebJ)
- Live Site URL: [Live site](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

I've improved my usage of the pseude elements `::before` & `::after` to help me add the illustrations and learned about the pointer-events. Also, my mistakte was to wrap the background illustrations in `img` elements instead of making use of the background properties.

```html
<h1>Some HTML code I'm proud of</h1>
```

```css
.card {
  background: url(./images/illustration-woman-online-desktop.svg) no-repeat -18%
      55%, url(./images/bg-pattern-desktop.svg) no-repeat left -36rem
      bottom -8rem;
}

.card::after {
  content: '';
  background: url(./images/bg-pattern-mobile.svg) no-repeat;
  width: 14.75rem;
  height: 100%;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  pointer-events: none;
}
```

### Continued development

What I'm not comfortable with yet:

- working with background
- padding-block and padding-inline (new properties)
- using pseudo elements
- DOM manipulation

### Useful resources

- [Fluffy Kas' solution](https://github.com/FluffyKas/faq-accordion-card/tree/main) - This helped me to style illustrations properly. This is also where I've learned about padding-block & padding-inline
- [John Smilga's Project on collapsing questions](https://vanilla-js-basic-project-7-questions.netlify.app/) - I've used this project to help me structure my HTML.

## Author

- GitHub - [GitHub Profile](https://github.com/erminski)
- Frontend Mentor - [@erminski](https://www.frontendmentor.io/profile/erminski)

## Acknowledgments

Thanks to Fluffy Kas and John Smilga.
