import { animateScroll } from 'react-scroll';

export const scrollToBottom = (id) => {
  setTimeout(() => {
    animateScroll.scrollToBottom({
      duration: 0,
      containerId: id,
      offset: 50, // Scrolls to element + 50 pixels down the page
    });
  }, 10);
};

export const scrollToBottomAnimated = (id) => {
  setTimeout(() => {
    animateScroll.scrollToBottom({
      duration: 250,
      delay: 100,
      smooth: true,
      containerId: id,
      offset: 50, // Scrolls to element + 50 pixels down the page
    });
  }, 10);
};
