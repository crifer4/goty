import { Component, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-grafico-barra-horizontal',
  templateUrl: './grafico-barra-horizontal.component.html',
  styleUrls: ['./grafico-barra-horizontal.component.css']
})
export class GraficoBarraHorizontalComponent implements OnDestroy{

  @Input() results: any[] = [];

  /* results: any[] = [
    {
      "name": "Teto",
      "value": 69
    },
    {
      "name": "Tiburon",
      "value": 24
    },
    {
      "name": "Katana Zero",
      "value": 92
    },
    {
      "name": "Formula 9",
      "value": 47
    }
  ]; */

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Juegos';
  showYAxisLabel = true;
  yAxisLabel = 'Votos';

  colorScheme = 'nightLights';

  //intervalo;

  constructor() {

    //const newResults = [...this.results];

    /* this.intervalo = setInterval(() => {
      for( let i in newResults){
        newResults[i].value = Math.round( Math.random() * 500 );
      }
      this.results = [...newResults];
    }, 1500); */
  }
  ngOnDestroy(): void {
    //clearInterval( this.intervalo );
  }

  onSelect(event: any) {
    console.log(event);
  }
}
