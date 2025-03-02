import { Component } from "@angular/core";

@Component({
    selector: 'app-about-page',
    templateUrl: './about.component.html',
})

export class AboutMe {
    private audio = new Audio();

    constructor() {
        this.audio.src = 'assets/idl.mp3';
        this.audio.load();
    }

    playSong() {
        if (this.audio.paused) {
            this.audio.play();
        } else {
            this.audio.pause();
            this.audio.currentTime = 0;
        }
    }
}