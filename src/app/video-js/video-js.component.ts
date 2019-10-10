import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

import videojs from 'video.js';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-video-js',
  templateUrl: './video-js.component.html',
  styleUrls: ['./video-js.component.css']
})
export class VideoJsComponent implements OnInit, AfterViewInit {

  playerHeight = new FormControl('');
  playerWidth = new FormControl('');
  playerAutoplay = new FormControl('');
  playerLoop = new FormControl('');
  playerMuted = new FormControl('');
  playerPoster = new FormControl('');
  playerSource = new FormControl('');
  playerStyle = new FormControl('');

  pWidth;
  pHeight;

  private videoJSplayer: any;

  customVideoClass: string;
  customPlayerStyle;

  constructor() {
  }

  ngOnInit() {

    // var style = document.createElement('style');
    // style.type = 'text/css';
    // style.innerHTML = 'vjs-matrix'
  }

  ngAfterViewInit(): void {



    this.initVideoJs();

  }

  initVideoJs() {

    //this.customVideoClass = 'vjs-matrix';


    this.videoJSplayer = videojs('video_player', {
      controlBar: {
        fullscreenToggle: false,
        currentTimeDisplay: true
      },
      width: '500'
    });

       // Color onInit
      this.videoJSplayer.addClass(this.customVideoClass);



  }

  getId(url) {
    //var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
    var match = url.match(regExp);
  
    if (match && match[2].length == 11) {
      return match[2];
    } else {
      return false;
    }
  }

  vsgLoadVideo(vidURL, poster) {

    var type = this.getType(vidURL);
  
    console.log(type);
  
    if (this.getId(vidURL))
      poster = "http://img.youtube.com/vi/" + this.getId(vidURL) + "/hqdefault.jpg";
  
    this.videoJSplayer.src({
      "src": vidURL,
      "type": type
    });
    if (poster)
      this.videoJSplayer.poster(poster);
    else
      this.videoJSplayer.poster("//i.imgur.com/aE0LoTe.png");
  
    // play seem to trigger to fast before Youtube is ready
    
    //vgsPlayer.pause();
  //	vgsPlayer.load();
    this.videoJSplayer.play();
  /*   setTimeout(function() {
      vgsPlayer.play();
    }, 500); */
    
    return false;
  
  }

  getType(url) {

    var rtmp_suffix = /^rtmp:\/\//;
    var hls_suffix = /\.m3u8/;
    var mp4_suffix = /\.(mp4|m4p|m4v|mov)/i;
    var hds_suffix = /\.f4m/;
    var dash_suffix = /\.mpd/;
    var flv_suffix = /\.flv/;
    var webm_suffix = /\.webm/;
    /* AUDIO */
    //var mp3_suffix = /\.mp3/;
    var mpeg_suffix = /\.(mp3|m4a)/i;
    var ogg_suffix = /\.ogg/;
    
    //var youtube_suffix = /\.youtube.com/;
    //var yt_suffix = /^(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?(?=.*v=((\w|-){11}))(?:\S+)?$/;
    var yt_suffix = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    var dm_suffix = /\.?dailymotion.com/;
    var vm_suffix = /\.?vimeo.com/;


    /* AUDIO */
    if (mpeg_suffix.test(url))
      return 'audio/mpeg';
    if (ogg_suffix.test(url))
      return 'audio/ogg';
    if (dash_suffix.test(url))
      return 'application/dash+xml';
    if (rtmp_suffix.test(url))
      return 'rtmp/mp4';
    if (hls_suffix.test(url))
      return 'application/x-mpegurl';
    if (mp4_suffix.test(url))
      return 'video/mp4';
    if (hds_suffix.test(url))
      return 'application/adobe-f4m';
    if (flv_suffix.test(url))
      return 'video/flv';
    if (webm_suffix.test(url))
      return 'video/webm';
    if (yt_suffix.test(url)) {
      return 'video/youtube';
    }
    if (dm_suffix.test(url))
      return 'video/dailymotion';
    if (vm_suffix.test(url))
      return 'video/vimeo';
  
    console.log('could not guess link type: "' + url + '" assuming mp4');
    return 'video/mp4';
  };




  refresh(){

    // Get type, so the player can assume which type to play
    var type = this.getType(this.playerSource.value);

    this.videoJSplayer.width(this.playerWidth.value)
    this.pWidth = this.playerWidth.value;

    this.videoJSplayer.height(this.playerHeight.value)
    this.pHeight = this.playerHeight.value;

    this.videoJSplayer.autoplay(this.playerAutoplay.value)

    this.videoJSplayer.loop(this.playerLoop.value)

    this.videoJSplayer.muted(this.playerMuted.value)

    this.videoJSplayer.poster(this.playerPoster.value);

    // if(this.playerStyle.value == true){
    //   this.customPlayerStyle = true;
    // } else if ( this.playerStyle.value == false) {
    //   this.customPlayerStyle = false;
    // }

    //this.videoJSplayer.src(this.playerSource.value);

    console.log(type);
    this.videoJSplayer.src({
      "src": this.playerSource.value,
      "type": type
    });


    this.videoJSplayer.pause();
    this.videoJSplayer.load();
    //this.videoJSplayer.dispose();

    //this.videoJSplayer.addClass(this.customVideoClass);

    this.initVideoJs();

   
  }

  ngOnDestroy() {
    this.videoJSplayer.dispose();
  }
}
