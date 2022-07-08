const animateValue = (obj: Element) => {
  const start: number = 0
  let end: number = 0
  const duration: number = 1000

  if (obj) {
    let textStarting = obj.innerHTML;
    end = end || parseInt(textStarting.replace(/\D/g, ""));
    let range = end - start;
    let minTimer = 50;
    let stepTime = Math.abs(Math.floor(duration / range));
    stepTime = Math.max(stepTime, minTimer);
    let startTime = new Date().getTime();
    let endTime = startTime + duration;
    let timer: any;

    const run = () => {
      let now = new Date().getTime();
      let remaining = Math.max((endTime - now) / duration, 0);
      let value: any = Math.round(end - (remaining * range));
      if(textStarting === "10+") {
        obj.innerHTML = textStarting.replace(/([0-9]+)/g, value.toFixed(3));
      } else {
        obj.innerHTML = textStarting.replace(/([0-9]+)/g, value);
      }
      if (value == end) {
        clearInterval(timer);
      }
    }
    timer = setInterval(run, stepTime);
    run();
  }
}

function isVisible(el: Element) {
  let rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

const numbersCountUp = (() => {
  const init = ( selector: string ) => {
    const toAnimate = document.querySelectorAll( selector );

    const checkElements = () => {
      toAnimate.forEach((el) => {
        if (isVisible(el) && el.getAttribute('data-animated') != "true") {
          animateValue(el);
          el.setAttribute('data-animated', 'true');
        }
      })
    }

    document.addEventListener("scroll", checkElements);
    checkElements();

  }

  init('[data-animated]')

})();

export default numbersCountUp