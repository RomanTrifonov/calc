// Local analytics helper for future integration.
// Current version does not send personal data anywhere.
// It only prepares safe event names for future Яндекс Метрика, Plausible or other analytics.

window.calcAnalytics = {
  track: function(eventName, payload) {
    try {
      const safePayload = payload || {};
      console.log('[calc:event]', eventName, safePayload);
      if (window.ym && window.CALC_YM_ID) {
        window.ym(window.CALC_YM_ID, 'reachGoal', eventName, safePayload);
      }
      if (window.plausible) {
        window.plausible(eventName, { props: safePayload });
      }
    } catch (e) {
      console.warn('analytics error', e);
    }
  }
};
