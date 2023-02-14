const fadeIn = (target, time) => {
    target.style.zIndex = '202';
    target.style.opacity = '0';
    target.style.transition = 'opacity ' + time + 'ms ease-out';
    target.style.opacity = '1';
    target.style.zIndex = '205';
}

const fadeOut = (target, time) => {
    target.style.zIndex = '0';
    target.style.transition = 'opacity ' + time + 'ms ease-out';
    target.style.opacity = '0';
}

