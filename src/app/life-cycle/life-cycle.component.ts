import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.scss']
})
export class LifeCycleComponent implements OnChanges,OnInit {

  @Input() value:string='';
  constructor() { 
    console.log("\nconstructor!")
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges.');
  }
  ngOnChange(){
    console.log("ngOnChange!")
  }
  ngOnInit(): void {
    console.log("ngOnInit!")
  }
  ngDoCheck():void{
    console.log("ngDoCheck!")
  }
  ngAfterContentInit():void{
    console.log("ngAfterContentInit!")
  }
  ngAfterContentChecked():void{
    console.log("ngAfterContentChecked!")
  }
  ngAfterViewInit():void{
    console.log("ngAfterViewInit!")
  }
  ngAfterViewChecked():void{
    console.log("ngAfterViewChecked!\n")
  }
  ngOnDestroy():void{
    console.log("ngOnDestroy!\n")
  }
}
