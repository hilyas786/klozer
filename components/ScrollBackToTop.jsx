import { useEffect, useState, React } from 'react';
import { BiArrowFromBottom } from 'react-icons/bi';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-10 right-5">
      <button
        type="button"
        onClick={scrollToTop}
        className={
          (isVisible ? 'opacity-100' : 'opacity-0',
          'bg-white inline-flex items-center rounded-full p-2 text-purple-900 shadow-3xl  ')
        }
      >
        <BiArrowFromBottom className="h-8 w-8" aria-hidden="true" />
      </button>
    </div>
  );
}
