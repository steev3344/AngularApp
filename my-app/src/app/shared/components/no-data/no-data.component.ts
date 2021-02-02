import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-no-data',
  templateUrl: './no-data.component.html',
  styleUrls: ['./no-data.component.scss']
})
export class NoDataComponent implements OnInit {

  @Input()
  title!: string;
  @Input()
  message!: string;
  @Input()
  icon!: string;
  @Input()
  actionText!: string;
  @Input() showAction = true;
  @Output() action = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

}
