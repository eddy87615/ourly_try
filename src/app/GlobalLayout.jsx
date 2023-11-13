'use client';
import { GlobalCanvas, SmoothScrollbar } from '@14islands/r3f-scroll-rig';

function GlobalLayout({ children }) {
  return (
    <>
      <GlobalCanvas
        style={{
          zIndex: -1,
        }}
      />
      <SmoothScrollbar>
        {(bind) => <div {...bind}>{children}</div>}
      </SmoothScrollbar>
    </>
  );
}

export default GlobalLayout;
