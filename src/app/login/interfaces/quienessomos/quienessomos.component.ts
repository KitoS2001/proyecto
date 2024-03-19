import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-quienessomos',
  templateUrl: './quienessomos.component.html',
  styleUrls: ['./quienessomos.component.css']
})
export class QuienessomosComponent implements OnInit {
  
  imageSize: number = 100; // Tamaño inicial de la imagen
  largerImageSize: number = 150; // Tamaño de la imagen al hacer clic/tocar

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
  }

  handleTouchStart() {
    // Cuando el usuario toca la imagen, aumenta su tamaño
    this.imageSize = this.largerImageSize;
  }

  showMission: boolean = false;

    toggleMission() {
        this.showMission = !this.showMission;
    }

    play() {
      const video = document.getElementById('video') as HTMLVideoElement;
      video.play();
    }
  
    pause() {
      const video = document.getElementById('video') as HTMLVideoElement;
      video.pause();
    }
}


