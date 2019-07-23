import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FavoritesPage } from './favorites.page';
var routes = [
    {
        path: '',
        component: FavoritesPage
    }
];
var FavoritesPageModule = /** @class */ (function () {
    function FavoritesPageModule() {
    }
    FavoritesPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [FavoritesPage]
        })
    ], FavoritesPageModule);
    return FavoritesPageModule;
}());
export { FavoritesPageModule };
//# sourceMappingURL=favorites.module.js.map