import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  pictureCover:string = "";
  contentTitle:string = "";
  contentDescrition = "";
  private id:string | null = "0";

  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      this.id = value.get("id"))

      this.setValueToComponets(this.id)
  }

  setValueToComponets(id:string | null){
    const result = dataFake.filter( a => a.id == id)[0]

   this.contentTitle = result.title
   this.contentDescrition = result.description
   this.pictureCover = result.pictureCover

  }
}
