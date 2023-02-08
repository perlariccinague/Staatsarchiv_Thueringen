const fadeIn = (target, time) => {
    target.style.zIndex = '1500';
    target.style.opacity = '0';
    target.style.transition = 'opacity ' + time + 'ms ease-out';
    target.style.opacity = '1';
}

const fadeOut = (target, time) => {
    target.style.zIndex = '0';
    target.style.transition = 'opacity ' + time + 'ms ease-out';
    target.style.opacity = '0';
}

