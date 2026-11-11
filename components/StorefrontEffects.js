'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function StorefrontEffects({ children, locale }) {
  const shellRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    const shell = shellRef.current;
    if (!shell) return undefined;

    const media = gsap.matchMedia();
    media.add('(prefers-reduced-motion: no-preference)', () => {
      const cleanups = [];
      const revealTweens = new Set();
      const context = gsap.context(() => {
        const main = shell.querySelector('main');
        if (main) {
          gsap.fromTo(
            main,
            { autoAlpha: 0, y: 8 },
            { autoAlpha: 1, y: 0, duration: 0.42, ease: 'power2.out' },
          );
        }

        const revealTargets = shell.querySelectorAll(
          '.section-heading, .page-intro, .collection-intro, .detail-grid, .prose, .trust-point, .category-card, .story-grid > *, .review-strip-inner > *, .related-products',
        );
        revealTargets.forEach((element) => {
          gsap.fromTo(
            element,
            { autoAlpha: 0, y: 20 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.65,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: element,
                start: 'top 90%',
                once: true,
              },
            },
          );
        });

        shell.querySelectorAll('.product-grid').forEach((grid) => {
          const cards = grid.querySelectorAll('.product-card');
          if (!cards.length) return;

          gsap.set(cards, { autoAlpha: 0, y: 22 });
          ScrollTrigger.batch(cards, {
            start: 'top 92%',
            once: true,
            onEnter: (visibleCards) => {
              const tween = gsap.to(visibleCards, {
                autoAlpha: 1,
                y: 0,
                duration: 0.55,
                ease: 'power2.out',
                stagger: 0.08,
                onComplete: () => revealTweens.delete(tween),
              });
              revealTweens.add(tween);
            },
          });
        });

        const heroPhoto = shell.querySelector('.hero-photo');
        if (heroPhoto) {
          gsap.to(heroPhoto, {
            yPercent: 8,
            scale: 1.035,
            ease: 'none',
            scrollTrigger: {
              trigger: heroPhoto.closest('.hero'),
              start: 'top top',
              end: 'bottom top',
              scrub: 0.6,
            },
          });
        }

        shell.querySelectorAll('.collection-intro-image').forEach((image) => {
          gsap.to(image, {
            yPercent: 4,
            ease: 'none',
            scrollTrigger: {
              trigger: image,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 0.8,
            },
          });
        });

        shell.querySelectorAll('.product-image, .detail-image').forEach((container) => {
          const image = container.querySelector('img');
          if (!image) return;

          const zoomIn = () => gsap.to(image, {
            scale: 1.045,
            duration: 0.55,
            ease: 'power2.out',
            overwrite: 'auto',
          });
          const zoomOut = () => gsap.to(image, {
            scale: 1,
            duration: 0.55,
            ease: 'power2.out',
            overwrite: 'auto',
          });

          container.addEventListener('pointerenter', zoomIn);
          container.addEventListener('pointerleave', zoomOut);
          container.addEventListener('focusin', zoomIn);
          container.addEventListener('focusout', zoomOut);
          cleanups.push(() => {
            container.removeEventListener('pointerenter', zoomIn);
            container.removeEventListener('pointerleave', zoomOut);
            container.removeEventListener('focusin', zoomIn);
            container.removeEventListener('focusout', zoomOut);
          });
        });
      }, shell);

      return () => {
        cleanups.forEach((cleanup) => cleanup());
        revealTweens.forEach((tween) => tween.kill());
        context.revert();
      };
    });

    return () => media.revert();
  }, [pathname, locale]);

  return (
    <div className="storefront-shell" lang={locale} ref={shellRef}>
      {children}
    </div>
  );
}
