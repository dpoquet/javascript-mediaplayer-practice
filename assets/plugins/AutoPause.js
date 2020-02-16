class AutoPause {
    constructor() {
        this.threshold = 0.25;
    }

    init(mediaPlayer) {
        this.player = mediaPlayer;

        const observer = new IntersectionObserver(this.handlerIntersection.bind(this), {
            threshold: this.threshold
        });

        observer.observe(this.player.media);

        document.addEventListener("visibilitychange", this.handlerVisibilityChange.bind(this));
    }

    handlerIntersection(entries) {
        const entry = entries[0];
       const isVisible = entry.intersectionRatio >= this.threshold;

       if(isVisible) {
           this.player.play();
       } else {
           this.player.pause();
       }
    }

    handlerVisibilityChange() {
        const isVisible = document.visibilityState === "visible";

        if(isVisible) {
            this.player.play();
        } else {
            this.player.pause();
        }
    }
}

export default AutoPause;