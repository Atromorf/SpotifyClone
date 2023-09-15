import { Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { Observable, observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, tap, catchError, mergeMap } from 'rxjs/operators';
import Swal from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})
export class TrackService {

  private readonly URL = environment.api;

  constructor(private http: HttpClient) {
    
  }

  private skipById(listTracks: TrackModel[], id: number ): Promise<TrackModel[]> {
    return new Promise((resolve, reject) => {
      const listTmp = listTracks.filter(a => a._id != id)
      resolve(listTmp)
    })
  }

  /**
   * 
   * @returns Devolver todas las canciones
   */
  getAllTracks$(): Observable<any> {
    return this.http.get(`${this.URL}/tracks`)
    .pipe(
      map(({data}: any) => {
        return data
      })
    )
  }

  getAllRandoms$(): Observable<any> {
    return this.http.get(`${this.URL}/tracks`)
    .pipe(
      mergeMap(({data}: any) => this.skipById( data, 2 )),
    /*map((dataRevertida) => {
        return dataRevertida.filter((track: TrackModel) => track._id != 1)
      }) */
      tap(data => console.log("iwefiw", data)),
      catchError(err => {
        const {status, statusText} = err;
        Swal.fire({
          icon: 'error',
          title: 'Error de conexión',
          text: 'Hubo un problema al conectarse al servidor',
        });
        console.log("Error de conexion", [status, statusText])
        return of([])
      })
    )
  }
}
