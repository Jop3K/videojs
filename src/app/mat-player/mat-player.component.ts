// import { Component, OnInit, ViewChild, Renderer2 } from '@angular/core';
// import { MatVideoComponent } from 'mat-video/app/video/video.component';

// @Component({
//   selector: 'app-mat-player',
//   templateUrl: './mat-player.component.html',
//   styleUrls: ['./mat-player.component.css']
// })
// export class MatPlayerComponent implements OnInit {
//   @ViewChild('video', {static: false}) matVideo : MatVideoComponent;
//   video: HTMLVideoElement;
 
//   constructor(private renderer: Renderer2) { }
 
//   ngOnInit(): void {
   
//     this.video = this.matVideo.getVideoTag();
//     //this.video = this.matVideo;
 
//     // Use Angular renderer or addEventListener to listen for standard HTML5 video events
    
//     setTimeout(() =>     this.renderer.listen(this.video, 'ended', () => console.log('video ended'))
//     , 100);

//     // setTimeout(() =>     this.matVideo.addEventListener('ended', () => console.log('video ended'))

//     // , 100);

//   }
// }
