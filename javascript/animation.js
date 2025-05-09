export function Animationfinish(element){
    const animationPo = element.getAnimations().map(animation => animation.finished)
    return Promise.allSettled(animationPo);
} //all animation resolve