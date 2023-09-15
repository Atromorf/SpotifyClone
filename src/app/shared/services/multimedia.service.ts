import { EventEmitter, Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { BehaviorSubject, Observable, Observer, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MultimediaService {

  callback:EventEmitter<any> = new EventEmitter<any>()

  public trackInfo$: BehaviorSubject<any> = new BehaviorSubject(undefined)
  public audio!: HTMLAudioElement
  public timeElapsed$: BehaviorSubject<string> = new BehaviorSubject('00:00')
  public timeRemainin$: BehaviorSubject<string> = new BehaviorSubject('-00:00')
  public playerStatus$: BehaviorSubject<string> = new BehaviorSubject('paused')
  public playerPercentage$: BehaviorSubject<number> = new BehaviorSubject(0)

/*   myObservable1$ : BehaviorSubject<any> = new BehaviorSubject('Que onda') */

  constructor() {
    this.audio = new Audio()
    this.trackInfo$.subscribe(responseOk => {
      if (responseOk) {
        this.SetAudio(responseOk)
      }
    })
/*     setTimeout(() => {
      this.myObservable1$.next('Que onda')
    }, 1000) */
/*     this.myObservable1$ = new Observable((observer: Observer<any>) => {
      observer.next('Que onda')

      setTimeout(() => {
        observer.complete()
      }, 1000)

      setTimeout(() => {
        observer.next('Que onda 2')
      }, 2500)

      setTimeout(() => {
        observer.error('Que onda 3')
      }, 3500)
    }) */
    this.listenAllEvents()
  }

  private listenAllEvents(): void {
    this.audio.addEventListener('timeupdate',this.calculateTime, false)

    this.audio.addEventListener('playing', this.setPlayerStatus, false)

    this.audio.addEventListener('play', this.setPlayerStatus, false)

    this.audio.addEventListener('pause', this.setPlayerStatus, false)

    this.audio.addEventListener('ended', this.setPlayerStatus, false)
  }

  private setPlayerStatus = (state: any) => {
    console.log('Cambiando estado', state);
    switch(state.type) {
      case 'playing':
        this.playerStatus$.next('playing')
      break;
      case 'play':
        this.playerStatus$.next('playing')
      break;
      case 'pause':
        this.playerStatus$.next('paused')
      break;
      case 'ended':
        this.playerStatus$.next('ended')
      break;
      default:
        this.playerStatus$.next('paused')
      break;
    }
  }

  private calculateTime = () =>  {
    const {duration, currentTime} = this.audio

    this.setTimeElapsed(currentTime)
    this.setTimeRemainin(currentTime, duration)
    this.setPlayerPercentage(currentTime, duration)
  }

  private setPlayerPercentage(currentTime: number, duration:number): void {
    let percentage = (currentTime * 100) / duration
    this.playerPercentage$.next(percentage)
  }

  private setTimeElapsed(currentTime: number): void {
    let seconds = Math.floor(currentTime % 60) //TODO 1,2,3
    let minutes = Math.floor((currentTime / 60) % 60)
    //TODO  00:00 ---> 01:05 --> 10:15
    const displaySeconds = (seconds < 10) ? `0${seconds}` : seconds;
    const displayMinutes = (minutes < 10) ? `0${minutes}` : minutes;
    const displayFormat = `${displayMinutes}:${displaySeconds}`
    this.timeElapsed$.next(displayFormat)
  }

  private setTimeRemainin(currentTime: number, duration:number): void {
    let timeLeft = duration - currentTime

    let seconds = Math.floor(timeLeft % 60)
    let minutes = Math.floor((timeLeft / 60) % 60)

    const displaySeconds = (seconds < 10) ? `0${seconds}` : seconds;
    const displayMinutes = (minutes < 10) ? `0${minutes}` : minutes;

    const displayFormat = `-${displayMinutes}:${displaySeconds}`
    this.timeRemainin$.next(displayFormat)
  }

  public SetAudio(track:TrackModel): void {
    console.log('Todo funciona perfecto', track)
    this.audio.src = track.url
    this.audio.play()
  }

  public togglePlayer(): void {
    (this.audio.paused) ? this.audio.play() : this.audio.pause()
  }

  public seekAudio(percentage:number): void {
    const {duration} = this.audio
    const newTime = (percentage * duration) / 100
    this.audio.currentTime = newTime
  }

}
