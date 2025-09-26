export let totalStartTime;
export let totalInterval;

const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${minutes}:${secs.toString().padStart(2, '0')}`;
};

export const startTotalTimer = () => {
  if (!totalStartTime) {
    totalStartTime = Date.now();
    totalInterval = setInterval(() => {
      const totalElapsed = Math.floor((Date.now() - totalStartTime) / 1000);
      const el = document.getElementById('total-timer');
      if (el) el.textContent = `Total: ${formatTime(totalElapsed)}`;
    }, 1000);
  }
};

export const stopTotalTimer = () => {
  clearInterval(totalInterval);
  totalStartTime = null;
};
