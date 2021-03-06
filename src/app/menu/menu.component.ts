import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  dishes : Dish[];
  constructor(private dishservice : DishService) { }

  selectedDish : Dish;

  onselect(dish:Dish)
  {
    this.selectedDish = dish;
  }

  ngOnInit() {
this.dishes = this.dishservice.getDishes();    
  }

}
