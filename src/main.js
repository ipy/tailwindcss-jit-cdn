import observerScript from "./observer";
import throttle from "./modules/throttle";

(() => {
  const config = {
    attributes: true,
    attributeFilter: ["class"],
    childList: true,
    subtree: true,
  };

  const throttledObserver = throttle(observerScript(false), 3000);

  new MutationObserver(throttledObserver).observe(
    document.documentElement,
    config
  );

  observerScript();

  window.tailwindCSS = {
    refresh: observerScript(true),
  };
})();
