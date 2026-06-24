import { useEffect, useRef } from 'react';

const Oneko = () => {
  const nekoRef = useRef(null);

  useEffect(() => {
    const isReducedMotion =
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReducedMotion) return;

    const nekoEl = nekoRef.current;
    if (!nekoEl) return;

    let nekoPosX = 32;
    let nekoPosY = 32;
    let mousePosX = 0;
    let mousePosY = 0;
    let frameCount = 0;
    let idleTime = 0;
    let idleAnimation = null;
    let idleAnimationFrame = 0;
    const nekoSpeed = 10;

    const spriteSets = {
      idle: [[-3, -3]],
      alert: [[-7, -3]],
      scratchSelf: [[-5, 0], [-6, 0], [-7, 0]],
      scratchWallN: [[0, 0], [0, -1]],
      scratchWallS: [[-7, -1], [-6, -2]],
      scratchWallE: [[-2, -2], [-2, -3]],
      scratchWallW: [[-4, 0], [-4, -1]],
      tired: [[-3, -2]],
      sleeping: [[-2, 0], [-2, -1]],
      N: [[-1, -2], [-1, -3]],
      NE: [[0, -2], [0, -3]],
      E: [[-3, 0], [-3, -1]],
      SE: [[-5, -1], [-5, -2]],
      S: [[-6, -3], [-7, -2]],
      SW: [[-5, -3], [-6, -1]],
      W: [[-4, -2], [-4, -3]],
      NW: [[-1, 0], [-1, -1]],
    };

    function setSprite(name, frame) {
      const sprite = spriteSets[name][frame % spriteSets[name].length];
      nekoEl.style.backgroundPosition = `${sprite[0] * 32}px ${sprite[1] * 32}px`;
    }

    function resetIdleAnimation() {
      idleAnimation = null;
      idleAnimationFrame = 0;
    }

    function idle() {
      idleTime += 1;

      // After 1 second, alert
      if (idleTime > 10 && Math.floor(Math.random() * 200) === 0 && idleAnimation == null) {
        const availableIdleAnimations = ['sleeping', 'scratchSelf'];
        idleAnimation = availableIdleAnimations[Math.floor(Math.random() * availableIdleAnimations.length)];
      }

      switch (idleAnimation) {
        case 'sleeping':
          if (idleAnimationFrame < 8) {
            setSprite('tired', 0);
            break;
          }
          setSprite('sleeping', Math.floor(idleAnimationFrame / 4));
          if (idleAnimationFrame > 192) {
            resetIdleAnimation();
          }
          break;
        case 'scratchSelf':
          setSprite('scratchSelf', idleAnimationFrame);
          if (idleAnimationFrame > 9) {
            resetIdleAnimation();
          }
          break;
        default:
          setSprite('idle', 0);
          return;
      }
      idleAnimationFrame += 1;
    }

    function frame() {
      frameCount += 1;
      const diffX = nekoPosX - mousePosX;
      const diffY = nekoPosY - mousePosY;
      const dist = Math.sqrt(diffX ** 2 + diffY ** 2);

      if (dist < nekoSpeed || dist < 48) {
        idle();
        return;
      }

      idleAnimation = null;
      idleAnimationFrame = 0;

      if (idleTime > 1) {
        setSprite('alert', 0);
        idleTime = 0;
        return;
      }

      let direction = '';
      direction += diffY / dist > 0.5 ? 'N' : '';
      direction += diffY / dist < -0.5 ? 'S' : '';
      direction += diffX / dist > 0.5 ? 'W' : '';
      direction += diffX / dist < -0.5 ? 'E' : '';

      setSprite(direction, frameCount);

      nekoPosX -= (diffX / dist) * nekoSpeed;
      nekoPosY -= (diffY / dist) * nekoSpeed;

      nekoEl.style.left = `${nekoPosX - 16}px`;
      nekoEl.style.top = `${nekoPosY - 16}px`;
    }

    const handleMouseMove = (e) => {
      mousePosX = e.clientX;
      mousePosY = e.clientY;
    };

    document.addEventListener('mousemove', handleMouseMove);

    nekoEl.style.left = `${nekoPosX - 16}px`;
    nekoEl.style.top = `${nekoPosY - 16}px`;

    const intervalId = setInterval(frame, 100);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div
      ref={nekoRef}
      aria-hidden="true"
      style={{
        width: '32px',
        height: '32px',
        position: 'fixed',
        pointerEvents: 'none',
        imageRendering: 'pixelated',
        backgroundImage: 'url(/oneko.gif)',
        backgroundRepeat: 'no-repeat',
        zIndex: 9999,
        left: '16px',
        top: '16px',
      }}
    />
  );
};

export default Oneko;
