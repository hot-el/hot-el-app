import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CategoryModel } from './category.model';
import { CategoriesService } from '../_services/categories.service';
import { NewRoomFormComponent } from './new-room/new-room-form.component';
import { MatDialog } from '@angular/material';

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

    openNewRoomForm() {
      this.dialog.open(NewRoomFormComponent);
    }
}
