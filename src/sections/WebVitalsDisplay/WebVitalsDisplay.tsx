import { Metric } from "web-vitals";
import './WebVitalsDisplay.scss';
import { useWebVitals } from "utils-react";

const orderedMetrics: Metric['name'][] = ['TTFB', 'FCP', 'LCP', 'CLS', 'FID'];

const WebVitalsDisplay = () => {
  const metrics = useWebVitals();

  return (
    <div className="web-vitals show-above-720">
      <u><b>Web Vitals</b></u>
      <ul>
        {orderedMetrics.map(
          (key) =>
            key in metrics && (
              <li key={key}>
                {key}: {metrics[key]?.toFixed(key === 'CLS' ? 3 : 0)}
                {key === 'CLS' ? '' : ' ms'}
              </li>
            )
        )}
      </ul>
    </div>
  );
};

export default WebVitalsDisplay;