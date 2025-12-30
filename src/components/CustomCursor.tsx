import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const CustomCursor = () => {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check if touch device
    if (typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0)) {
      setIsTouchDevice(true);
      return;
    }

    const cursorDot = cursorDotRef.current;
    const cursorRing = cursorRingRef.current;

    if (!cursorDot || !cursorRing) return;

    // Set initial position off-screen
    gsap.set([cursorDot, cursorRing], { xPercent: -50, yPercent: -50 });

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const mouse = { x: pos.x, y: pos.y };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    // Smooth animation loop using GSAP
    const updateCursor = () => {
      // Lerp for smooth following
      pos.x += (mouse.x - pos.x) * 0.15;
      pos.y += (mouse.y - pos.y) * 0.15;

      gsap.set(cursorDot, { x: mouse.x, y: mouse.y });
      gsap.set(cursorRing, { x: pos.x, y: pos.y });

      requestAnimationFrame(updateCursor);
    };

    const addHoverListeners = () => {
      const interactiveElements = document.querySelectorAll('a, button, [role="button"], input, textarea, select, [data-cursor-hover]');
      
      interactiveElements.forEach((el) => {
        el.addEventListener("mouseenter", handleMouseEnter);
        el.addEventListener("mouseleave", handleMouseLeave);
      });
    };

    const handleMouseEnter = () => {
      gsap.to(cursorDot, {
        scale: 0,
        duration: 0.2,
        ease: "power2.out",
      });
      gsap.to(cursorRing, {
        scale: 1.8,
        borderWidth: 1,
        backgroundColor: "hsl(var(--primary) / 0.1)",
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(cursorDot, {
        scale: 1,
        duration: 0.2,
        ease: "power2.out",
      });
      gsap.to(cursorRing, {
        scale: 1,
        borderWidth: 2,
        backgroundColor: "transparent",
        duration: 0.3,
        ease: "power2.out",
      });
    };

    document.addEventListener("mousemove", handleMouseMove);
    updateCursor();

    // Add hover listeners after a delay
    const timeout = setTimeout(addHoverListeners, 500);

    // Re-add listeners when DOM changes
    const observer = new MutationObserver(() => {
      addHoverListeners();
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timeout);
      observer.disconnect();
    };
  }, []);

  // Don't render on touch devices
  if (isTouchDevice) {
    return null;
  }

  return (
    <>
      {/* Main dot */}
      <div
        ref={cursorDotRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-primary"
        style={{
          width: 10,
          height: 10,
          marginLeft: -5,
          marginTop: -5,
        }}
      />
      {/* Outer ring */}
      <div
        ref={cursorRingRef}
        className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full border-2 border-primary"
        style={{
          width: 40,
          height: 40,
          marginLeft: -20,
          marginTop: -20,
        }}
      />
    </>
  );
};

export default CustomCursor;
