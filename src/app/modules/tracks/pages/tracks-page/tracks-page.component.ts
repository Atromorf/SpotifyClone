import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { TrackService } from '@modules/tracks/services/track.service';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css']
})
export class TracksPageComponent implements OnInit, OnDestroy {
  
  tracksTrending:Array<TrackModel> = []
  tracksRandom:Array<TrackModel> = []

  listObservers$:Array<Subscription> = []

  constructor(private trackService: TrackService) { }

  ngOnInit(): void {
/*     this.trackService.getAllTracks$().subscribe((response:TrackModel[]) => {
      this.tracksTrending = response
    })
    this.trackService.getAllRandoms$().subscribe((response:TrackModel[]) => {
      this.tracksRandom = response
    }) */
    this.loadDataAll()
    this.loadDataRandom()
  }
  
  async loadDataAll(): Promise<any>{
    this.tracksTrending = await this.trackService.getAllTracks$().toPromise()
    /* const dataRaw = await this.trackService.getAllTracks$().toPromise()
    console.log("------", dataRaw) */
    /* .then(res => {})
    .catch(err => {
      console.log("Error de conexion", err)
    }) */ /* manejo como promesa */
    /* .subscribe((response:TrackModel[]) => {
      this.tracksTrending = response
    }) */ /* manejo como observable */
  }

  loadDataRandom(): void{
    this.trackService.getAllRandoms$().subscribe((response:TrackModel[]) => {
      this.tracksRandom = response
    }/* , err => {
      Swal.fire({
        icon: 'error',
        title: 'Error de conexión',
        text: 'Hubo un problema al conectarse al servidor',
      });
      console.log("Error de conexion", err)
    } */)
  }

  ngOnDestroy(): void {

  }

}
