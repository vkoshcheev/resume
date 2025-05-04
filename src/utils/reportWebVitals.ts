import { onCLS, onFID, onLCP, onFCP, onTTFB } from 'web-vitals';

const reportWebVitals = (onPerfEntry?: (metric: any) => void) => {
  if (onPerfEntry && typeof onPerfEntry === 'function') {
    onCLS(onPerfEntry);
    onFID(onPerfEntry);
    onLCP(onPerfEntry);
    onFCP(onPerfEntry);
    onTTFB(onPerfEntry);

    // In May 2024, the Chrome team officially replaced First Input Delay (FID)
    // with Interaction to Next Paint (INP) as the Core Web Vitals metric
    // for measuring interaction responsiveness
  }
};

export default reportWebVitals;