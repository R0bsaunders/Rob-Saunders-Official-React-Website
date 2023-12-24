import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop () {
  const location = useLocation();
  const headerHeight = 70;

  useEffect(() => {

    // Scroll to an anchor point if a hash is included
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));

      if (element) {
        // Offset the fixed header height
        const offsetTop = element.getBoundingClientRect().top + window.scrollY - headerHeight;
        window.scrollTo({top: offsetTop});
      }

    // Otherwise, just scroll to the top of the page
    } else {
      window.scrollTo(0, 0);

    }

  }, [location, headerHeight]);

  return null;
};
