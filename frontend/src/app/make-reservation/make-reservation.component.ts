import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CategoryModel } from '../_models/category.model';
import { CategoriesService } from '../_services/categories.service';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-make-reservation',
  templateUrl: './make-reservation.component.html',
  styleUrls: ['./make-reservation.component.scss']
})
export class MakeReservationComponent implements OnInit {

  categories: CategoryModel[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private categoriesService: CategoriesService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
      this.categoriesService.getCategories()
      .then(
        categories => {
          this.categories = categories;
      });
  }

}

