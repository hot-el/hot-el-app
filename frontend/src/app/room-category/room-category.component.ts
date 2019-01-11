import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CategoryModel } from './category.model';
import { CategoriesService } from '../_services/categories.service';

@Component({
  selector: 'app-room-category',
  templateUrl: './room-category.component.html',
  styleUrls: ['./room-category.component.scss']
})

export class RoomCategoryComponent implements OnInit {

  categories: CategoryModel[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private categoriesService: CategoriesService
  ) {}

  ngOnInit(): void {
      this.categoriesService.getCategories()
      .then(
        categories => {
          this.categories = categories;
      });
      console.log(this.categories);
    }
}
