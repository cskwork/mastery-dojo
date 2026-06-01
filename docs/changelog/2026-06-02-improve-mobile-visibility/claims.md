## CLAIM S1
what: Add Viewport export to layout.tsx with width=device-width, initialScale=1, viewportFit=cover, themeColor; add 100dvh fallback pairs on body/.kana-page/.kana-home/.kana-app-page; switch clamp inner 100vh to 100dvh; add safe-area side padding on .kana-page and .kana-app-page
files: app/layout.tsx, app/globals.css
run-to-prove: grep -q 'viewport-fit=cover' out/index.html && ! grep -q 'user-scalable\|maximum-scale' out/index.html && grep -q '100dvh' app/globals.css && grep -q 'safe-area-inset-left' app/globals.css && echo PASS
expected: PASS

## CLAIM S2
what: Add overflow-x:hidden to .kana-app-page; add @media (max-width:360px) block after 520px block with drill pre overflow containment, compact switcher 2-col, action-bar font reduction; add env(safe-area-inset-bottom) to .kana-action-bar at <=900px; add env(safe-area-inset-top/right) to .kana-floating-action
files: app/globals.css
run-to-prove: grep -q 'overflow-x: hidden' app/globals.css && awk '/max-width: 520px/{f=1} f && /max-width: 360px/{print "PASS"; exit}' app/globals.css && grep -q 'safe-area-inset-bottom' app/globals.css && grep -q 'safe-area-inset-top' app/globals.css
expected: PASS (printed by awk when 360px block is found after 520px block)

## CLAIM S3
what: Raise .kana-controls button to min 44x44 at all widths (including fixing the 760px shrink); add .kana-lang-toggle rule with flex layout, min 44x44, auto width; add global :where(button,a,input,[role=button],[tabindex]):focus-visible ring with var(--kd-accent); add .kana-drill-input:focus-visible replacement ring
files: app/globals.css
run-to-prove: grep -q 'min-height: 44px' app/globals.css && grep -q ':focus-visible' app/globals.css && grep -q 'kana-lang-toggle' app/globals.css && echo PASS
expected: PASS

## CLAIM S4
what: Add --fs-body/--fs-h1/--fs-h2 clamp tokens at :root; apply --fs-body to body font-size (floor 1rem=16px); apply --fs-h1 to .kana-header h1 (was 36px); apply --fs-h2 to .kana-welcome h2 (was 32px)
files: app/globals.css
run-to-prove: grep -q '\-\-fs-body: clamp' app/globals.css && grep -q 'var(--fs-body)' app/globals.css && grep -q 'var(--fs-h1)' app/globals.css && grep -q 'var(--fs-h2)' app/globals.css && echo PASS
expected: PASS

## CLAIM S5
what: Add @media (prefers-reduced-motion: reduce) block at end of globals.css neutralizing html transition, all 3D-button transitions, hover/active transforms, token-backdrop animation, with catch-all * near-zero durations
files: app/globals.css
run-to-prove: grep -q 'prefers-reduced-motion: reduce' app/globals.css && grep -q 'animation-duration: 0.001ms' app/globals.css && grep -q 'transition-duration: 0.001ms' app/globals.css && echo PASS
expected: PASS
