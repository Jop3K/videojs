import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  @ViewChild('videoPlayer', {static: false}) videoplayer: HTMLVideoElement;
  @ViewChild('videoContainer', {static: false}) videocontainer: ElementRef;
  @ViewChild('videoControls', {static: false}) videocontrols: ElementRef;
  @ViewChild('playPause', {static: false}) playpause: ElementRef;
  @ViewChild('stop', {static: false}) stop: ElementRef;
  @ViewChild('mute', {static: false}) mute: ElementRef;
  @ViewChild('volinc', {static: false}) volinc: ElementRef;
  @ViewChild('voldec', {static: false}) voldec: ElementRef;
  @ViewChild('progress', {static: false}) progress: ElementRef;
  @ViewChild('progressBar', {static: false}) progressbar: ElementRef;
  @ViewChild('fullscreen', {static: false}) fullscreen: ElementRef;
  

  constructor() { }

  ngOnInit() {

    //const htmlvideoplayer: HTMLVideoElement = this.videoplayer.nativeElement;
    

    let supportsVideo = !!document.createElement('video').canPlayType;
    if(supportsVideo) {

      // set up custom controls

      //var videoContainer = document.getElementById('videoContainer');
      //var video = document.getElementById('video');
      //var videoControls = document.getElementById('video-controls');


      // Hide the default controls
      this.videoplayer.controls = false;

      // Display the user defined video controls
      this.videocontrols.nativeElement.style.display = 'block';


      // var playpause = document.getElementById('playpause');
      // var stop = document.getElementById('stop');
      // var mute = document.getElementById('mute');
      // var volinc = document.getElementById('volinc');
      // var voldec = document.getElementById('voldec');
      // var progress = document.getElementById('progress');
      // var progressBar = document.getElementById('progress-bar');
      // var fullscreen = document.getElementById('fs');


      this.playpause.nativeElement.addEventListener('click', function(e) {
        if (this.videoplayer.nativeElement.paused || this.videoplayer.nativeElement.ended) this.videoplayer.nativeElement.play();
        else this.videplayer.nativeElement.pause();
     });

     this.stop.nativeElement.addEventListener('click', function(e) {
      this.videoplayer.nativeElement.pause();
      this.videoplayer.nativeElement.currentTime = 0;
      this.progress.nativeElement.value = 0;
   });


   this.mute.nativeElement.addEventListener('click', function(e) {
    this.videoplayer.nativeElement.muted = !this.videoplayer.nativeElement.muted;
 });


 this.volinc.nativeElement.addEventListener('click', function(e) {
  alterVolume('+');
});
this.voldec.nativeElement.addEventListener('click', function(e) {
  alterVolume('-');
});


var alterVolume = function(dir) {
  var currentVolume = Math.floor(this.videoplayer.nativeElement.volume * 10) / 10;
  if (dir === '+') {
     if (currentVolume < 1) this.videoplayer.nativeElement.volume += 0.1;
  }
  else if (dir === '-') {
     if (currentVolume > 0) this.videoplayer.nativeElement.volume -= 0.1;
  }
}
    }

  }

  

}
