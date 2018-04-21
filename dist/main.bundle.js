webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup_component__ = __webpack_require__("./src/app/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__search_search_component__ = __webpack_require__("./src/app/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__recipes_recipes_component__ = __webpack_require__("./src/app/recipes/recipes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__recipe_editor_recipe_editor_component__ = __webpack_require__("./src/app/recipe-editor/recipe-editor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__recipe_detail_recipe_detail_component__ = __webpack_require__("./src/app/recipe-detail/recipe-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__articles_articles_component__ = __webpack_require__("./src/app/articles/articles.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__article_editor_article_editor_component__ = __webpack_require__("./src/app/article-editor/article-editor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__article_detail_article_detail_component__ = __webpack_require__("./src/app/article-detail/article-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__recipe_collection_recipe_collection_component__ = __webpack_require__("./src/app/recipe-collection/recipe-collection.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__auth_guard__ = __webpack_require__("./src/app/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__personal_article_personal_article_component__ = __webpack_require__("./src/app/personal-article/personal-article.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__saved_recipe_saved_recipe_component__ = __webpack_require__("./src/app/saved-recipe/saved-recipe.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__saved_article_saved_article_component__ = __webpack_require__("./src/app/saved-article/saved-article.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__user_detail_user_detail_component__ = __webpack_require__("./src/app/user-detail/user-detail.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_4__home_home_component__["a" /* HomeComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */] },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_3__signup_signup_component__["a" /* SignupComponent */] },
    { path: 'search/:name', component: __WEBPACK_IMPORTED_MODULE_5__search_search_component__["a" /* SearchComponent */] },
    { path: 'articles', component: __WEBPACK_IMPORTED_MODULE_9__articles_articles_component__["a" /* ArticlesComponent */] },
    { path: 'article/:id', component: __WEBPACK_IMPORTED_MODULE_11__article_detail_article_detail_component__["a" /* ArticleDetailComponent */] },
    { path: 'recipes', component: __WEBPACK_IMPORTED_MODULE_6__recipes_recipes_component__["a" /* RecipesComponent */] },
    { path: 'recipe/:id', component: __WEBPACK_IMPORTED_MODULE_8__recipe_detail_recipe_detail_component__["a" /* RecipeDetailComponent */] },
    { path: 'create-article', component: __WEBPACK_IMPORTED_MODULE_10__article_editor_article_editor_component__["a" /* ArticleEditorComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_13__auth_guard__["a" /* AuthGuard */]] },
    { path: 'create-recipe', component: __WEBPACK_IMPORTED_MODULE_7__recipe_editor_recipe_editor_component__["a" /* RecipeEditorComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_13__auth_guard__["a" /* AuthGuard */]] },
    { path: 'my-recipe-collection', component: __WEBPACK_IMPORTED_MODULE_12__recipe_collection_recipe_collection_component__["a" /* RecipeCollectionComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_13__auth_guard__["a" /* AuthGuard */]] },
    { path: 'update-recipe/:id', component: __WEBPACK_IMPORTED_MODULE_7__recipe_editor_recipe_editor_component__["a" /* RecipeEditorComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_13__auth_guard__["a" /* AuthGuard */]] },
    { path: 'update-article/:id', component: __WEBPACK_IMPORTED_MODULE_10__article_editor_article_editor_component__["a" /* ArticleEditorComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_13__auth_guard__["a" /* AuthGuard */]] },
    { path: 'my-article-collection', component: __WEBPACK_IMPORTED_MODULE_14__personal_article_personal_article_component__["a" /* PersonalArticleComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_13__auth_guard__["a" /* AuthGuard */]] },
    { path: 'saved-recipe', component: __WEBPACK_IMPORTED_MODULE_15__saved_recipe_saved_recipe_component__["a" /* SavedRecipeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_13__auth_guard__["a" /* AuthGuard */]] },
    { path: 'saved-article', component: __WEBPACK_IMPORTED_MODULE_16__saved_article_saved_article_component__["a" /* SavedArticleComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_13__auth_guard__["a" /* AuthGuard */]] },
    { path: ':name', component: __WEBPACK_IMPORTED_MODULE_17__user_detail_user_detail_component__["a" /* UserDetailComponent */] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]],
            providers: [__WEBPACK_IMPORTED_MODULE_13__auth_guard__["a" /* AuthGuard */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<app-navbar></app-navbar>\r\n<router-outlet></router-outlet>\r\n<!--<div class=\"footer\">-->\r\n  <!--<app-footer></app-footer>-->\r\n<!--</div>-->\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'makanmakan';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__navbar_navbar_component__ = __webpack_require__("./src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__signup_signup_component__ = __webpack_require__("./src/app/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__footer_footer_component__ = __webpack_require__("./src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__search_search_component__ = __webpack_require__("./src/app/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__recipe_detail_recipe_detail_component__ = __webpack_require__("./src/app/recipe-detail/recipe-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__article_detail_article_detail_component__ = __webpack_require__("./src/app/article-detail/article-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__recipes_recipes_component__ = __webpack_require__("./src/app/recipes/recipes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__articles_articles_component__ = __webpack_require__("./src/app/articles/articles.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__article_service__ = __webpack_require__("./src/app/article.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__article_editor_article_editor_component__ = __webpack_require__("./src/app/article-editor/article-editor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__recipe_editor_recipe_editor_component__ = __webpack_require__("./src/app/recipe-editor/recipe-editor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__user_service__ = __webpack_require__("./src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__recipe_service__ = __webpack_require__("./src/app/recipe.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__recipe_collection_recipe_collection_component__ = __webpack_require__("./src/app/recipe-collection/recipe-collection.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_angularfire2__ = __webpack_require__("./node_modules/angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_angularfire2_auth__ = __webpack_require__("./node_modules/angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__saved_recipe_saved_recipe_component__ = __webpack_require__("./src/app/saved-recipe/saved-recipe.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__personal_article_personal_article_component__ = __webpack_require__("./src/app/personal-article/personal-article.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__saved_article_saved_article_component__ = __webpack_require__("./src/app/saved-article/saved-article.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__user_detail_user_detail_component__ = __webpack_require__("./src/app/user-detail/user-detail.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_8__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_9__signup_signup_component__["a" /* SignupComponent */],
                __WEBPACK_IMPORTED_MODULE_10__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_11__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_12__search_search_component__["a" /* SearchComponent */],
                __WEBPACK_IMPORTED_MODULE_13__recipe_detail_recipe_detail_component__["a" /* RecipeDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_14__article_detail_article_detail_component__["a" /* ArticleDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_15__recipes_recipes_component__["a" /* RecipesComponent */],
                __WEBPACK_IMPORTED_MODULE_16__articles_articles_component__["a" /* ArticlesComponent */],
                __WEBPACK_IMPORTED_MODULE_18__article_editor_article_editor_component__["a" /* ArticleEditorComponent */],
                __WEBPACK_IMPORTED_MODULE_19__recipe_editor_recipe_editor_component__["a" /* RecipeEditorComponent */],
                __WEBPACK_IMPORTED_MODULE_22__recipe_collection_recipe_collection_component__["a" /* RecipeCollectionComponent */],
                __WEBPACK_IMPORTED_MODULE_28__saved_recipe_saved_recipe_component__["a" /* SavedRecipeComponent */],
                __WEBPACK_IMPORTED_MODULE_29__personal_article_personal_article_component__["a" /* PersonalArticleComponent */],
                __WEBPACK_IMPORTED_MODULE_30__saved_article_saved_article_component__["a" /* SavedArticleComponent */],
                __WEBPACK_IMPORTED_MODULE_31__user_detail_user_detail_component__["a" /* UserDetailComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_24_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_27__environments_environment__["a" /* environment */].firebase),
                __WEBPACK_IMPORTED_MODULE_25_angularfire2_database__["a" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_26_angularfire2_auth__["a" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_17__article_service__["a" /* ArticleService */], __WEBPACK_IMPORTED_MODULE_20__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_21__recipe_service__["a" /* RecipeService */], __WEBPACK_IMPORTED_MODULE_23__angular_common__["d" /* DatePipe */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/article-detail/article-detail.component.css":
/***/ (function(module, exports) {

module.exports = "*{\r\n\tfont-family: 'Montserrat', sans-serif\r\n}\r\n\r\n/*Article*/\r\n\r\n.container {\r\n  margin-top:0px;\r\n  margin-bottom:0px;\r\n}\r\n\r\n.white-space-pre {\r\n  white-space: pre-wrap;\r\n}\r\n\r\n#article{\r\n\tmargin-top:25px;\r\n}\r\n\r\n#article h1{\r\n\tfont-weight: 700;\r\n}\r\n\r\n#article h6 span{\r\n\tcolor: #ff6200;\r\n}\r\n\r\n#article img{\r\n\tmax-width: 52vw;\r\n\theight: auto;\r\n}\r\n\r\n#article .images{\r\n\tbackground-image:url('pic1.10ce2c4a6462c3670a8c.jpg');\r\n\tbackground-size: 120vh;\r\n\tbackground-position: center;\r\n\tbackground-repeat: no-repeat;\r\n\r\n\tmin-height: 50vh;\r\n}\r\n\r\n.tags span:hover{\r\n\tcolor:#ff6200;\r\n\tcursor: pointer;\r\n}\r\n\r\na {\r\n  font-weight: bold;\r\n  color: #ff6200;\r\n  text-decoration: none;\r\n}\r\n"

/***/ }),

/***/ "./src/app/article-detail/article-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\r\n<br>\r\n<div class=\"container\" *ngIf=\"article\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12\" id=\"article\">\r\n      <h1>{{article.title}}</h1>\r\n      <h6>created by <a routerLink=\"/{{article.username}}\">{{ article.username }}</a> at {{ article.dateCreated | date:'longDate' }}</h6>\r\n      <div *ngIf=\"isLoggedIn; else disabledSaveButton\">\r\n        <div *ngIf=\"user.id != article.user_id; else editArticle\">\r\n          <div *ngIf=\"isArticleSaved; else notSaved\">\r\n            <button type=\"button\" class=\"btn btn-info\" (click)=\"unsaveArticle()\">SAVED</button>\r\n          </div>\r\n          <ng-template #notSaved>\r\n            <button type=\"button\" class=\"btn btn-warning\" (click)=\"saveArticle()\">SAVE ARTICLE</button>\r\n          </ng-template>\r\n        </div>\r\n        <ng-template #editArticle>\r\n          <button type=\"button\" class=\"btn btn-warning\" routerLink=\"/update-article/{{article.id}}\"> Edit</button>\r\n        </ng-template>\r\n      </div>\r\n      <ng-template #disabledSaveButton>\r\n        <button type=\"button\" class=\"btn btn-warning\" title=\"You need to log in first :(\" disabled>SAVE ARTICLE</button>\r\n      </ng-template>\r\n      <br>\r\n      <div *ngIf=\"article.imageURL!='default.jpg'\">\r\n        <img src=\"{{article.imageURL}}\"> <br>\r\n      </div>\r\n      <hr>\r\n      <div class=\"white-space-pre\">{{ article.content }}</div>\r\n      <br>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/article-detail/article-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticleDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__article_service__ = __webpack_require__("./src/app/article.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_service__ = __webpack_require__("./src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_User__ = __webpack_require__("./src/app/models/User.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ArticleDetailComponent = /** @class */ (function () {
    function ArticleDetailComponent(route, articleService, userService) {
        this.route = route;
        this.articleService = articleService;
        this.userService = userService;
        this.user = new __WEBPACK_IMPORTED_MODULE_4__models_User__["a" /* User */]();
        this.isArticleSaved = false;
    }
    ArticleDetailComponent.prototype.ngOnInit = function () {
        this.getArticle();
        if (localStorage.getItem('token')) {
            this.isLoggedIn = true;
            this.user = this.userService.getUser();
            this.isSaved();
        }
        else {
            this.isLoggedIn = false;
        }
    };
    ArticleDetailComponent.prototype.getArticle = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.articleService.getArticleByID(id).subscribe(function (article) {
            _this.article = article;
        });
    };
    ArticleDetailComponent.prototype.saveArticle = function () {
        var _this = this;
        var _obj = {
            'user_id': this.user.id,
            'article_id': this.article.id
        };
        this.articleService.saveArticle(_obj).subscribe(function () { _this.isArticleSaved = true; });
    };
    ArticleDetailComponent.prototype.isSaved = function () {
        var _this = this;
        var arr = new Array();
        this.articleService.getSavedArticles(this.user.id).subscribe(function (articles) {
            arr = articles;
        });
        var result = arr.filter(function (x) { return x.id == _this.article.id; });
        if (result.length == 0) {
            this.isArticleSaved = false;
        }
        else {
            this.isArticleSaved = true;
        }
    };
    ArticleDetailComponent.prototype.unsaveArticle = function () {
        var _this = this;
        var _obj = {
            'user_id': this.user.id,
            'article_id': this.article.id
        };
        this.articleService.removeSavedArticle(_obj).subscribe(function () { _this.isArticleSaved = false; });
    };
    ArticleDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-article-detail',
            template: __webpack_require__("./src/app/article-detail/article-detail.component.html"),
            styles: [__webpack_require__("./src/app/article-detail/article-detail.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__article_service__["a" /* ArticleService */],
            __WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */]])
    ], ArticleDetailComponent);
    return ArticleDetailComponent;
}());



/***/ }),

/***/ "./src/app/article-editor/artice-editor.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h1>Create Your Article</h1>\r\n  <hr>\r\n  <div class=\"alert alert-danger\" *ngIf=\"message\">\r\n    {{ message }}\r\n  </div>\r\n  <form>\r\n    <div class=\"form-group\">\r\n      <div class=\"row\">\r\n        <div class=\"col\">\r\n          <label>Article Title*</label>\r\n        </div>\r\n        <div class=\"col\">\r\n          <p align=\"right\"><strong>*required fields</strong></p>\r\n        </div>\r\n      </div>\r\n      <input [(ngModel)]=\"article.title\" name=\"articleTitle\" type=\"text\" class=\"form-control form-control-lg\" required>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label>Article Content*</label>\r\n      <textarea [(ngModel)]=\"article.content\" class=\"form-control\" rows=\"10\" name=\"recipeAbout\" required></textarea>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"image\">Upload Picture</label>\r\n      <br>\r\n      <div class=\"form-inline\">\r\n        <button type=\"button\" (click)=\"fileInput.click()\">Choose image</button>\r\n        <p style=\"margin:0px 5px\" id=\"filename\">No file chosen</p>\r\n      </div>\r\n      <input type=\"file\" class=\"form-control-file\" name=\"articleImg\" id=\"image\" style=\"display:none\" (change)=\"onFileSelected()\" #fileInput>\r\n    </div>\r\n    <div id=\"saveButton\" class=\"btn btn-warning ld-over-full\" (click)=\"save()\"> Save\r\n      <div class=\"ld ld-ring ld-spin\"></div>\r\n    </div>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/article-editor/article-editor.component.css":
/***/ (function(module, exports) {

module.exports = ".container{\r\n\tmargin-top: 10vh;\r\n\tmargin-bottom: 5vh;\r\n}\r\n\r\nh1{\r\n\tcolor: #ff6200;\r\n\tfont-weight: 800;\r\n}"

/***/ }),

/***/ "./src/app/article-editor/article-editor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticleEditorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_Article__ = __webpack_require__("./src/app/models/Article.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__article_service__ = __webpack_require__("./src/app/article.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_service__ = __webpack_require__("./src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jquery__ = __webpack_require__("./node_modules/jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2__ = __webpack_require__("./node_modules/angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_firebase_storage__ = __webpack_require__("./node_modules/firebase/storage/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_firebase_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_firebase_storage__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ArticleEditorComponent = /** @class */ (function () {
    function ArticleEditorComponent(route, router, http, articleService, location, userService, datepipe, firebase) {
        this.route = route;
        this.router = router;
        this.http = http;
        this.articleService = articleService;
        this.location = location;
        this.userService = userService;
        this.datepipe = datepipe;
        this.firebase = firebase;
        this.res = {};
        this.selectedFile = null;
    }
    ArticleEditorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.element = document.getElementById("saveButton");
        this.user = this.userService.getUser();
        this.article = new __WEBPACK_IMPORTED_MODULE_3__models_Article__["a" /* Article */]();
        this.route.params.subscribe(function (params) {
            var id = +params['id'];
            if (params.id != null) {
                _this.articleService.getArticleByID(id).subscribe(function (article) {
                    _this.article = article;
                    if (_this.article.imageURL != "default.jpg") {
                        var tempurl = _this.article.imageURL;
                        tempurl = tempurl.substr(75, 40);
                        __WEBPACK_IMPORTED_MODULE_6_jquery__('p#filename').text(tempurl);
                    }
                    else {
                        __WEBPACK_IMPORTED_MODULE_6_jquery__('p#filename').text('No file chosen');
                    }
                });
            }
        });
    };
    ArticleEditorComponent.prototype.createUUID = function () {
        var dt = new Date().getTime();
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (dt + Math.random() * 16) % 16 | 0;
            dt = Math.floor(dt / 16);
            return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
        return uuid + '.jpg';
    };
    ArticleEditorComponent.prototype.onFileSelected = function () {
        __WEBPACK_IMPORTED_MODULE_6_jquery__(document).ready(function () {
            __WEBPACK_IMPORTED_MODULE_6_jquery__('p#filename').text(__WEBPACK_IMPORTED_MODULE_6_jquery__('#image')[0].files[0].name);
        });
    };
    ArticleEditorComponent.prototype.uploadImage = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var _url;
            var temp = _this.createUUID();
            _this.selectedFile = __WEBPACK_IMPORTED_MODULE_6_jquery__('#image')[0].files[0];
            var fd = new FormData();
            fd.append('image', _this.selectedFile, temp);
            _this.http.post('https://us-central1-makanmakan-e28a1.cloudfunctions.net/uploadFile', fd)
                .subscribe(function (res) {
                console.log(res);
            }, function (error) {
                console.log(error);
            }, function () {
                var storage = _this.firebase.storage();
                var storageRef = storage.ref();
                var spaceRef = storageRef.child(temp);
                spaceRef.getDownloadURL().then(function (url) {
                    _url = url;
                    resolve(_url);
                }).catch(function (error) {
                    console.log(error);
                });
            });
        });
    };
    ArticleEditorComponent.prototype.save = function () {
        var _this = this;
        this.element.classList.add("running");
        /* CREATING NEW ARTICLE */
        if (this.article.id == null) {
            var p = new Promise(function (resolve, reject) {
                if (__WEBPACK_IMPORTED_MODULE_6_jquery__('#image')[0].files[0] == null || _this.article.title == null || _this.article.content == null) {
                    resolve('default.jpg');
                }
                else {
                    resolve(_this.uploadImage().then(function (res) { resolve(res); }));
                }
            }).then(function (res) {
                _this.article.imageURL = res.toString();
                console.log(_this.article.imageURL);
            }).then(function () {
                _this.article.user_id = _this.user.id;
                _this.article.dateCreated = _this.datepipe.transform(new Date(), 'yyyy-MM-dd HH:mm:ss');
                _this.articleService.addArticle(_this.article).subscribe(function (res) {
                    _this.article = res;
                    // console.log(this.article);
                    _this.router.navigate(['/article/' + _this.article.id]);
                }, function (err) {
                    _this.res = err;
                    // console.log(this.res);
                    _this.element.classList.remove("running");
                    _this.message = _this.res.error.error;
                    window.scrollTo(0, 0);
                });
            });
        }
        else {
            var p = new Promise(function (resolve, reject) {
                if (__WEBPACK_IMPORTED_MODULE_6_jquery__('#image')[0].files[0] == null) {
                    resolve(_this.article.imageURL);
                }
                else {
                    resolve(_this.uploadImage().then(function (res) { resolve(res); }));
                }
            }).then(function (res) {
                _this.article.imageURL = res.toString();
            }).then(function () {
                _this.articleService.updateArticle(_this.article, _this.article.id).subscribe(function () {
                    _this.router.navigate(['/article/' + _this.article.id]);
                });
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__models_Article__["a" /* Article */])
    ], ArticleEditorComponent.prototype, "article", void 0);
    ArticleEditorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-article-editor',
            template: __webpack_require__("./src/app/article-editor/artice-editor.component.html"),
            styles: [__webpack_require__("./src/app/article-editor/article-editor.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_4__article_service__["a" /* ArticleService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["g" /* Location */],
            __WEBPACK_IMPORTED_MODULE_5__user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["d" /* DatePipe */],
            __WEBPACK_IMPORTED_MODULE_8_angularfire2__["b" /* FirebaseApp */]])
    ], ArticleEditorComponent);
    return ArticleEditorComponent;
}());



/***/ }),

/***/ "./src/app/article.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticleService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + localStorage.token
    }),
};
var ArticleService = /** @class */ (function () {
    function ArticleService(http) {
        this.http = http;
        this.articlesUrl = 'https://api.makanmakan.me/api/Article'; // URL to web api
    }
    ArticleService.prototype.getArticles = function () {
        return this.http.get(this.articlesUrl);
    };
    ArticleService.prototype.getArticleByID = function (id) {
        var url = this.articlesUrl + "/" + id;
        return this.http.get(url).map(function (res) {
            // console.log(res);
            return res;
        });
    };
    ArticleService.prototype.addArticle = function (article) {
        return this.http.post(this.articlesUrl, article, httpOptions)
            .map(function (res) { console.log(res); return res; });
    };
    ArticleService.prototype.getPersonalArticle = function (id) {
        var url = this.articlesUrl + "/personal-article/" + id;
        return this.http.get(url, httpOptions).map(function (res) {
            // console.log(res);
            return res;
        });
    };
    ArticleService.prototype.updateArticle = function (article, id) {
        var url = this.articlesUrl + "/" + id;
        return this.http.put(url, article, httpOptions);
    };
    ArticleService.prototype.deletePersonalArticle = function (id) {
        var url = this.articlesUrl + "/" + id;
        console.log(url);
        return this.http.delete(url, httpOptions).map(function (res) {
            console.log(res);
        });
    };
    /* SAVE SOMEONE'S ARTICLE */
    ArticleService.prototype.saveArticle = function (obj) {
        var url = this.articlesUrl + "/saved-article";
        return this.http.post(url, obj, httpOptions).map(function (res) { return res; });
    };
    /* REMOVE AN ARTICLE FROM SAVED ARTICLE TABLE */
    ArticleService.prototype.removeSavedArticle = function (obj) {
        var url = this.articlesUrl + "/saved-article/" + obj.user_id + "/" + obj.article_id;
        return this.http.delete(url, httpOptions).map(function (res) { return res; });
    };
    /* GET USER'S SAVED ARTICLE(S) */
    ArticleService.prototype.getSavedArticles = function (id) {
        var url = this.articlesUrl + "/saved-article/" + id;
        return this.http.get(url, httpOptions).map(function (res) {
            return res;
        });
    };
    /* GET USER'S ARTICLE(S) */
    ArticleService.prototype.getUserArticles = function (username) {
        var url = this.articlesUrl + "/user/" + username;
        return this.http.get(url, httpOptions).map(function (res) {
            return res;
        });
    };
    ArticleService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ArticleService);
    return ArticleService;
}());



/***/ }),

/***/ "./src/app/articles/articles.component.css":
/***/ (function(module, exports) {

module.exports = "*{\r\n\tfont-family: 'Montserrat', sans-serif\r\n}\r\n\r\n/*.container{*/\r\n\r\n/*margin-top:15vh;*/\r\n\r\n/*margin-bottom: 10vh;*/\r\n\r\n/*min-height: 75vh;*/\r\n\r\n/*}*/\r\n\r\n#article-container h1{\r\n\tcolor:#FF6200;\r\n\tfont-weight: 700;\r\n}\r\n\r\n#article-container div div{\r\n\tmargin:0;\r\n\tpadding: 0;\r\n\ttext-align: center;\r\n}\r\n\r\nimg {\r\n  alignment: center;\r\n\twidth: 38vh;\r\n\theight: 23vh;\r\n}\r\n\r\n.row {\r\n  text-align: center;\r\n}\r\n\r\n.article-food {\r\n  margin: 5px 0 0 !important;\r\n  display: block;\r\n}\r\n\r\nh4{\r\n\tmargin-bottom: 0;\r\n}\r\n\r\nh4 a{\r\n\tcolor:#ff6200;\r\n\tfont-weight: 700;\r\n\ttext-decoration: none;\r\n}\r\n\r\np a{\r\n\tcolor:black;\r\n\ttext-decoration: none;\r\n}\r\n"

/***/ }),

/***/ "./src/app/articles/articles.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" id=\"article-container\">\r\n  <h1> Articles </h1>\r\n  <hr>\r\n  <div class=\"row\" *ngIf=\"isArticleAvailable; else noArticle\">\r\n    <div class=\"col-3 article-food\" *ngFor=\"let article of articles \">\r\n      <div *ngIf=\"article.imageURL!='default.jpg';else noImage\">\r\n        <img src=\"{{article.imageURL}}\"> <br>\r\n      </div>\r\n      <ng-template #noImage>\r\n        <img src=\"../../assets/default.jpg\"> <br>\r\n      </ng-template>\r\n      <h4><a routerLink=\"/article/{{article.id}}\">{{article.title}}</a></h4>\r\n      <p>by {{ article.username }}</p>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #noArticle>\r\n  <p>Sorry.. No articles available..</p>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./src/app/articles/articles.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticlesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__article_service__ = __webpack_require__("./src/app/article.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ArticlesComponent = /** @class */ (function () {
    function ArticlesComponent(articleService) {
        this.articleService = articleService;
        this.isArticleAvailable = true;
    }
    ArticlesComponent.prototype.ngOnInit = function () {
        this.getArticles();
    };
    ArticlesComponent.prototype.getArticles = function () {
        var _this = this;
        this.articleService.getArticles()
            .subscribe(function (articles) {
            if (articles.length != 0) {
                _this.isArticleAvailable = true;
                _this.articles = articles;
                // console.log(this.articles);
            }
            else {
                _this.isArticleAvailable = false;
            }
        });
    };
    ArticlesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-articles',
            template: __webpack_require__("./src/app/articles/articles.component.html"),
            styles: [__webpack_require__("./src/app/articles/articles.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__article_service__["a" /* ArticleService */]])
    ], ArticlesComponent);
    return ArticlesComponent;
}());



/***/ }),

/***/ "./src/app/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__("./src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__recipe_service__ = __webpack_require__("./src/app/recipe.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__article_service__ = __webpack_require__("./src/app/article.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, userService, recipeService, articleService) {
        this.router = router;
        this.userService = userService;
        this.recipeService = recipeService;
        this.articleService = articleService;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.userService.isLogin()) {
            if (window.location.pathname.includes('update')) {
                var _user_id = this.userService.getUser().id;
                var user_id;
                var id = parseInt(window.location.href.substr(window.location.href.lastIndexOf('/') + 1));
                if (window.location.pathname.includes('article')) {
                    this.articleService.getArticleByID(id).subscribe(function (res) { user_id = res.user_id; });
                }
                else if (window.location.pathname.includes('recipe')) {
                    this.recipeService.getRecipe(id).subscribe(function (res) { user_id = res.user_id; });
                }
                if (user_id == _user_id) {
                    return true;
                }
                else {
                    this.router.navigate(['/home']);
                    return false;
                }
            }
            ;
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__recipe_service__["a" /* RecipeService */],
            __WEBPACK_IMPORTED_MODULE_4__article_service__["a" /* ArticleService */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/***/ (function(module, exports) {

module.exports = "*{\r\n\tfont-family: 'Montserrat', sans-serif\r\n}\r\n\r\nfooter{\r\n\ttext-align: center;\r\n\tbackground-color: darkgrey;\r\n\tpadding: 5px 0;\r\n\tmargin: 0;\r\n}\r\n\r\nfooter h6{\r\n\tcolor:white;\r\n\tfont-size:15px;\r\n\tmargin: 0;\r\n}"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer>\r\n\t<h6>Copyright to makanmakan.me</h6>\r\n</footer>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = "*{\r\n\tfont-family: 'Montserrat', sans-serif\r\n}\r\n\r\n/*.container{*/\r\n\r\n/*margin-bottom: 7.5vh;*/\r\n\r\n/*}*/\r\n\r\n/*Part 1*/\r\n\r\n.jumbotron{\r\n\tbackground-image:-webkit-gradient(linear, left top, left bottom, from(rgba(255,98,0,.5)), to(rgba(255,98,0,.5))),url('pic1.10ce2c4a6462c3670a8c.jpg');\r\n\tbackground-image:linear-gradient(rgba(255,98,0,.5), rgba(255,98,0,.5)),url('pic1.10ce2c4a6462c3670a8c.jpg');\r\n\tbackground-size: cover;\r\n\theight: 100vh;\r\n\tbackground-position: center;\r\n\tpadding-top: 30vh;\r\n\tmargin-bottom: 0;\r\n}\r\n\r\n.jumbotron .container-fluid{\r\n\ttext-align: center;\r\n}\r\n\r\n.jumbotron h1{\r\n\tfont-family: 'Righteous', cursive;\r\n\tcolor: white;\r\n\tfont-size: 100px;\r\n}\r\n\r\nform{\r\n\tmargin-left: 20vw;\r\n}\r\n\r\nform .form-group .form-control{\r\n\twidth: 40vw;\r\n}\r\n\r\nform button{\r\n\tborder:none !important;\r\n\tbackground-color: #FF6200 !important;\r\n\twidth: 10vw;\r\n\tfont-weight: 700 !important;\r\n\tcolor: white !important;\r\n\t-webkit-box-shadow: 2px 2px 1px #020202 !important;\r\n\t        box-shadow: 2px 2px 1px #020202 !important;\r\n}\r\n\r\nform button:hover{\r\n\tcolor: #FF6200 !important;\r\n\tbackground-color: white !important;\r\n}\r\n\r\n.container-fluid p{\r\n\tfont-size: 20px;\r\n\tcolor: white;\r\n\tcursor: pointer;\r\n}\r\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\r\n\t<div class=\"container-fluid\">\r\n\t\t<h1>makanmakan</h1>\r\n\t\t<form class=\"form-inline\">\r\n\t\t\t<div class=\"form-group mx-sm-3 mb-2\">\r\n    \t\t\t<input [(ngModel)]=\"name\" type=\"text\" name=\"search-food\" class=\"form-control form-control-lg\" id=\"inputOption\" placeholder=\"What to cook today?\">\r\n\t\t\t</div>\r\n\t\t\t<button type=\"submit\" class=\"btn btn-warning btn-lg mb-2 hvr-sweep-to-right\" (click)=\"search()\">Search</button>\r\n\t\t</form>\r\n\t</div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(router) {
        var _this = this;
        this.router = router;
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        };
        this.router.events.subscribe(function (evt) {
            if (evt instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */]) {
                _this.router.navigated = false;
                window.scrollTo(0, 0);
            }
        });
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.search = function () {
        this.router.navigate(['/search/' + this.name]);
    };
    ;
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], HomeComponent.prototype, "name", void 0);
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = "*{\r\n\tfont-family: 'Montserrat', sans-serif\r\n}\r\n\r\n/*Part 1*/\r\n\r\n.jumbotron{\r\n\tbackground-image:-webkit-gradient(linear, left top, left bottom, from(rgba(255,98,0,.5)), to(rgba(255,98,0,.5))),url('pic1.10ce2c4a6462c3670a8c.jpg');\r\n\tbackground-image:linear-gradient(rgba(255,98,0,.5), rgba(255,98,0,.5)),url('pic1.10ce2c4a6462c3670a8c.jpg');\r\n\tbackground-size: cover;\r\n\tmin-height: 100vh;\r\n\tbackground-position: center;\r\n\tpadding-top: 20vh;\r\n\tmargin-bottom: 0;\r\n}\r\n\r\n#sign-up{\r\n\tpadding-top: 10vh;\r\n}\r\n\r\n.jumbotron .container-fluid{\r\n\ttext-align: center;\r\n}\r\n\r\n.jumbotron h1{\r\n\tfont-family: 'Righteous', cursive;\r\n\tcolor: white;\r\n\tfont-size: 100px;\r\n}\r\n\r\n.form-group, .form-row{\r\n\ttext-align: left;\r\n}\r\n\r\n.form-row{\r\n\tmargin-bottom: 1vh;\r\n}\r\n\r\n.form-group label,.form-row .col label{\r\n\ttext-align:left;\r\n\tcolor: white;\r\n}\r\n\r\n.form-group input{\r\n\twidth: 45vw;\r\n}\r\n\r\nform button{\r\n\tbackground-color: #ff6200 !important;\r\n\tcolor: white !important;\r\n\tborder: none !important;\r\n}\r\n\r\nform button:hover{\r\n\tcolor:#ff6200 !important;\r\n  background-color: white !important;\r\n}\r\n\r\np{\r\n\tmargin-top: 2.5vh;\r\n\tcolor: white;\r\n}\r\n\r\np span{\r\n\tfont-weight: 700;\r\n}\r\n\r\na {\r\n  color:#ff6200 !important;\r\n  text-decoration: none;\r\n}\r\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\r\n  <div class=\"container-fluid\">\r\n    <h1>sign in</h1>\r\n    <div class=\"col-6 offset-xl-3\">\r\n      <div class=\"alert alert-danger\" *ngIf=\"message\">\r\n        {{ message }}\r\n      </div>\r\n      <form>\r\n        <div class=\"form-group\">\r\n          <label for=\"signin-email\">Email*</label>\r\n          <input [(ngModel)]=\"login.email\" name=\"email\" type=\"email\" class=\"form-control form-control-lg\"\r\n                 id=\"signin-email\" aria-describedby=\"emailHelp\" placeholder=\"Email\" required>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"signin-password\">Password *</label>\r\n          <input [(ngModel)]=\"login.password\" name=\"password\" type=\"password\" class=\"form-control form-control-lg\"\r\n                 id=\"signin-password\" placeholder=\"Password\" required>\r\n        </div>\r\n        <button type=\"submit\" class=\"btn btn-lg btn-warning hvr-sweep-to-right\" (click)=\"signIn()\">Submit</button>\r\n      </form>\r\n    </div>\r\n    <p>Don't have an account? <span><a routerLink=\"/signup\">Sign up now!</a></span></p>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_Login__ = __webpack_require__("./src/app/models/Login.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__("./src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.res = {};
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.login = new __WEBPACK_IMPORTED_MODULE_1__models_Login__["a" /* Login */]();
    };
    LoginComponent.prototype.signIn = function () {
        var _this = this;
        this.userService.login(this.login).subscribe(function (res) {
            _this.res = res;
            _this.message = null;
            // console.log(this.res);
            _this.router.navigate(['']);
            location.reload();
        }, function (err) {
            _this.res = err;
            // console.log(this.res.error);
            _this.message = _this.res.error.error;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_Login__["a" /* Login */])
    ], LoginComponent.prototype, "login", void 0);
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/models/Article.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Article; });
var Article = /** @class */ (function () {
    function Article() {
    }
    return Article;
}());



/***/ }),

/***/ "./src/app/models/Ingredient.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ingredient; });
var Ingredient = /** @class */ (function () {
    function Ingredient(id, name, qty, unit) {
        this.id = id;
        this.name = name;
        this.quantity = qty;
        this.unit = unit;
    }
    return Ingredient;
}());



/***/ }),

/***/ "./src/app/models/Login.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Login; });
var Login = /** @class */ (function () {
    function Login() {
    }
    return Login;
}());



/***/ }),

/***/ "./src/app/models/Recipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Recipe; });
var Recipe = /** @class */ (function () {
    function Recipe() {
        this["tag_details"] = {};
        this["ingredient_details"] = {};
        this["reviews"] = {};
    }
    return Recipe;
}());



/***/ }),

/***/ "./src/app/models/Report.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Report; });
var Report = /** @class */ (function () {
    function Report() {
    }
    return Report;
}());



/***/ }),

/***/ "./src/app/models/Review.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Review; });
var Review = /** @class */ (function () {
    function Review() {
    }
    return Review;
}());



/***/ }),

/***/ "./src/app/models/Signup.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Signup; });
var Signup = /** @class */ (function () {
    function Signup() {
    }
    return Signup;
}());



/***/ }),

/***/ "./src/app/models/User.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = "*{\r\n\tfont-family: 'Montserrat', sans-serif\r\n}\r\n\r\n\r\n.navbar {\r\n   background-color: #ff6200 !important;\r\n   height: 70px;\r\n}\r\n\r\n\r\n.navbar-brand{\r\n\tfont-family: 'Righteous', cursive;\r\n\tcolor: white;\r\n}\r\n\r\n\r\n.nav-link{\r\n\tfont-size:20px;\r\n\tmargin: 0 5px;\r\n\tfont-weight: 500;\r\n}\r\n\r\n\r\n.container{\r\n\tmargin-top:10vh;\r\n}\r\n\r\n\r\nform button{\r\n\tbackground-color: #FF6200 !important;\r\n\twidth: 7.5vw;\r\n\tfont-weight: 700 !important;\r\n\tcolor: white !important;\r\n\tborder: 2px solid white;\r\n}\r\n\r\n\r\nform button:hover{\r\n\tcolor: #FF6200 !important;\r\n\tbackground-color: white !important;\r\n}\r\n\r\n\r\n.dropdown-menu{\r\n  background-color:rgba(255, 255, 255, 1);\r\n}\r\n\r\n\r\n.dropdown-menu.columns-3 {\r\n\twidth: 750px;\r\n}\r\n\r\n\r\n.dropdown-menu li a {\r\n\tpadding: 5px 15px;\r\n\tfont-weight: 300;\r\n}\r\n\r\n\r\n.multi-column-dropdown {\r\n\tlist-style: none;\r\n  margin: 0px;\r\n  padding: 0px;\r\n}\r\n\r\n\r\n.multi-column-dropdown li a {\r\n\tdisplay: block;\r\n\tclear: both;\r\n\r\n\tcolor: #333;\r\n\twhite-space: normal;\r\n}\r\n\r\n\r\n.multi-column-dropdown li a:hover {\r\n\ttext-decoration: none;\r\n\tcolor: white;\r\n\tbackground-color: #ff6200;\r\n}\r\n\r\n\r\n.topic{\r\n\tcolor: #ff6200;\r\n}\r\n\r\n\r\n#showAll{\r\n\ttext-align: center;\r\n}\r\n\r\n\r\n.showAll a{\r\n\tcolor:#ff6200;\r\n\tfont-weight: 700 !important;\r\n\tfont-size: 25px;\r\n}\r\n\r\n\r\n.btn-login{\r\n\twidth: 250px !important;\r\n\tfont-weight: 700;\r\n\tbackground-color: #ff6200 !important;\r\n\tcolor: white !important;\r\n\tborder: none !important;\r\n\ttext-align: right !important;\r\n}\r\n\r\n\r\n.btn-login:active, .btn-login:hover, .btn-login:focus{\r\n\tborder:none !important;\r\n\t-webkit-box-shadow: none !important;\r\n\t        box-shadow: none !important;\r\n}\r\n\r\n\r\n.dropdown-login{\r\n\twidth: 250px;\r\n}\r\n\r\n\r\n.dropdown-login li{\r\n\tpadding: 5px 0;\r\n\tmargin: 0;\r\n}\r\n\r\n\r\n.dropdown-login li a{\r\n\tcolor: black;\r\n\tfont-weight: 500;\r\n}\r\n\r\n\r\n.dropdown-login li a:hover{\r\n\tcursor: pointer;\r\n\t-webkit-text-decoration-line: none;\r\n\t        text-decoration-line: none;\r\n}\r\n\r\n\r\n@media (max-width: 767px) {\r\n\t.dropdown-menu.multi-column {\r\n\t\tmin-width: 240px !important;\r\n\t\toverflow-x: hidden;\r\n\t}\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar fixed-top navbar-expand-lg navbar-dark bg-company-blue\">\r\n  <a class=\"navbar-brand\" routerLink=\"\">makanmakan</a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarArea\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n  <div class=\"collapse navbar-collapse float-right\" id=\"navbarArea\">\r\n    <ul class=\"navbar-nav mr-auto\" id=\"navbarOption\">\r\n\r\n      <li class=\"nav-item disabled\">\r\n        <a class=\"nav-link\">|</a>\r\n      </li>\r\n\r\n      <li class=\"nav-item active dropdown\">\r\n          <a href=\"#\" class=\"nav-link dropdown-toggle\" data-toggle=\"dropdown\">Recipe</a>\r\n          <ul class=\"dropdown-menu multi-column columns-3\">\r\n            <div class=\"row\">\r\n              <div class=\"col-12\" id=\"showAll\">\r\n                <li class=\"showAll\"><a routerLink=\"/recipes\"> Show All </a></li>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-4\" *ngFor=\"let tag of tags\">\r\n                <ul class=\"multi-column-dropdown\">\r\n                  <li class=\"topic\"> {{ tag.name }} </li>\r\n                  <li *ngFor=\"let detail of tag.tag_header\"><a routerLink=\"/search/{{detail.name}}\">{{ detail.name }}</a></li>\r\n                </ul>\r\n              </div>\r\n            </div>\r\n          </ul>\r\n      </li>\r\n\r\n      <li class=\"nav-item active\">\r\n        <a class=\"nav-link hvr-underline-from-center\" routerLink=\"/articles\">Article</a>\r\n      </li>\r\n\r\n  <form class=\"form-inline\">\r\n    <input [(ngModel)]=\"name\" name=\"search-food\" class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\r\n    <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\" (click)=\"search()\">Search</button>\r\n  </form>\r\n    </ul>\r\n\r\n    <div *ngIf=\"isLoggedIn; else noLoggedIn\">\r\n      <div class=\"dropdown\">\r\n        <button class=\"btn btn-login btn-warning dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">{{user.firstName}} {{user.lastName}}\r\n          <span class=\"caret\"></span></button>\r\n        <ul class=\"dropdown-menu dropdown-login\">\r\n          <li><a routerLink=\"/create-recipe\">Create Recipe</a></li>\r\n          <li><a routerLink=\"/create-article\">Create Article</a></li>\r\n          <li><a routerLink=\"/my-recipe-collection\">Open Personal Recipe</a></li>\r\n          <li><a routerLink=\"/my-article-collection\">Open Personal Article</a></li>\r\n          <li><a routerLink=\"/saved-recipe\">Open Saved Recipe</a></li>\r\n          <li><a routerLink=\"/saved-article\">Open Saved Article</a></li>\r\n          <li><a (click)=\"logout()\">Log Out</a></li>\r\n\r\n        </ul>\r\n      </div>\r\n    </div>\r\n    <ng-template #noLoggedIn>\r\n      <ul class=\"navbar-nav ml-auto\" id=\"navbarOption\">\r\n\r\n        <li class=\"nav-item active\">\r\n          <a class=\"nav-link hvr-underline-from-center\" routerLink=\"/login\">Sign In</a>\r\n        </li>\r\n\r\n        <li class=\"nav-item disabled\">\r\n          <a class=\"nav-link\" disabled>or</a>\r\n        </li>\r\n\r\n        <li class=\"nav-item active\">\r\n          <a class=\"nav-link hvr-underline-from-center\" routerLink=\"/signup\">Sign Up</a>\r\n        </li>\r\n      </ul>\r\n    </ng-template>\r\n\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("./src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__recipe_service__ = __webpack_require__("./src/app/recipe.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(userService, recipeService, router) {
        var _this = this;
        this.userService = userService;
        this.recipeService = recipeService;
        this.router = router;
        this.tags = [];
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        };
        this.router.events.subscribe(function (evt) {
            if (evt instanceof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* NavigationEnd */]) {
                // trick the Router into believing it's last link wasn't previously loaded
                _this.router.navigated = false;
                // if you need to scroll back to top, here is the right place
                window.scrollTo(0, 0);
            }
        });
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.isLogin();
        this.getTags();
    };
    NavbarComponent.prototype.isLogin = function () {
        this.isLoggedIn = this.userService.isLogin();
        if (this.userService.isLogin()) {
            this.user = this.userService.getUser();
        }
    };
    NavbarComponent.prototype.getTags = function () {
        var _this = this;
        this.recipeService.getTags().subscribe(function (res) {
            _this.tags = res;
        });
    };
    NavbarComponent.prototype.search = function () {
        this.router.navigate(['/search/' + this.name]);
    };
    ;
    NavbarComponent.prototype.logout = function () {
        this.userService.logout();
        this.isLoggedIn = false;
        location.reload();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], NavbarComponent.prototype, "name", void 0);
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2__recipe_service__["a" /* RecipeService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/personal-article/personal-article.component.css":
/***/ (function(module, exports) {

module.exports = ".container-fluid{\r\n  padding: 0;\r\n  margin-top:70px;\r\n  margin-bottom: 0vh;\r\n  min-height: 100vh;\r\n  overflow-x: hidden;\r\n}\r\n\r\n.recipe-collection-topic{\r\n  background-color: #ff6200;\r\n  min-height: 10vh;\r\n  text-align: center;\r\n}\r\n\r\n.recipe-collection-topic h3{\r\n  color:white;\r\n  font-weight: 500;\r\n  display: inline;\r\n}\r\n\r\n#row-article{\r\n  margin-top:1vw;\r\n  margin-left: 5vw;\r\n  margin-right: 5vw;\r\n}\r\n\r\n#recipe-collection-all col-2, #recipe-collection-all col-10{\r\n  max-height: 20vh;\r\n  padding-left: 2vw;\r\n  -webkit-box-shadow: 2px 2px 2px #888888;\r\n          box-shadow: 2px 2px 2px #888888;\r\n  -ms-flex-line-pack: center;\r\n      align-content: center;\r\n  margin-right: 0;\r\n  margin-top:10px;\r\n}\r\n\r\n#recipe-collection-all col-2{\r\n  text-align: center;\r\n}\r\n\r\nh1{\r\n  color: white;\r\n  font-weight: 800;\r\n}\r\n\r\nimg{\r\n  max-width: 13vw;\r\n  max-height: 20vh;\r\n  margin:auto;\r\n}\r\n\r\n#recipe-collection-data h3{\r\n  color: #ff6200;\r\n  font-weight: 700;\r\n  border-bottom: 2px solid darkgrey;\r\n}\r\n\r\n#recipe-button button{\r\n  margin: 10px 0;\r\n  width: 100px;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: #ff6200;\r\n\r\n}\r\n"

/***/ }),

/***/ "./src/app/personal-article/personal-article.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-12 recipe-collection-topic\">\n      <h1>Your Personal Article Collection</h1>\n    </div>\n  </div>\n\n  <div class=\"row\" id=\"row-article\">\n    <div class=\"col-12 recipe-col\" id=\"personal-article\" *ngIf=\"isArticleAvailable; else noArticle\">\n      <div class=\"row\" id=\"recipe-collection-all\" *ngFor=\"let article of articles\">\n        <div class=\"col-2\" *ngIf=\"article.imageURL!='default.jpg'; else noImage\">\n          <img src=\"{{article.imageURL}}\">\n        </div>\n        <ng-template #noImage>\n          <img src=\"../../assets/default.jpg\">\n        </ng-template>\n        <div class=\"col-9\" id=\"recipe-collection-data\">\n          <h3><a routerLink=\"/recipe/{{article.id}}\">{{article.title}}</a></h3>\n          <h4>{{article.username}}</h4>\n          <h4>{{article.dateCreated | date:'longDate' }}</h4>\n        </div>\n        <div class=\"col-1\" id=\"recipe-button\">\n          <button type=\"button\" class=\"btn btn-success\" routerLink=\"/update-article/{{article.id}}\">Update</button>\n          <button type=\"button\" class=\"btn btn-danger\" (click)=\"setSelectedArticle(article.id)\" data-toggle=\"modal\"\n                  data-target=\"#exampleModal\">Delete\n          </button>\n        </div>\n      </div>\n    </div>\n    <ng-template #noArticle>\n      <h5>You haven't created any article.. Why don't you start writing one? <a routerLink=\"/create-article\"> Click here\n        ❤</a></h5>\n    </ng-template>\n  </div>\n</div>\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\"\n     aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-body\" style=\"text-align: center\">\n        <p>Are you sure you want to delete this article?</p>\n        <button type=\"button\" class=\"btn\" data-dismiss=\"modal\">No</button>\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"deleteArticle()\">Yes</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/personal-article/personal-article.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonalArticleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__article_service__ = __webpack_require__("./src/app/article.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_service__ = __webpack_require__("./src/app/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PersonalArticleComponent = /** @class */ (function () {
    function PersonalArticleComponent(router, route, articleService, location, userService) {
        this.router = router;
        this.route = route;
        this.articleService = articleService;
        this.location = location;
        this.userService = userService;
        this.isArticleAvailable = true;
    }
    PersonalArticleComponent.prototype.ngOnInit = function () {
        this.user = this.userService.getUser();
        this.getPersonalArticles();
    };
    PersonalArticleComponent.prototype.getPersonalArticles = function () {
        var _this = this;
        this.articleService.getPersonalArticle(this.user.id).
            subscribe(function (articles) {
            if (articles.length != 0) {
                _this.articles = articles;
                console.log(_this.articles);
                _this.isArticleAvailable = true;
            }
            else {
                _this.isArticleAvailable = false;
            }
        });
    };
    PersonalArticleComponent.prototype.setSelectedArticle = function (id) {
        this.selectedArticle = id;
    };
    PersonalArticleComponent.prototype.deleteArticle = function () {
        this.articleService.deletePersonalArticle(this.selectedArticle).subscribe(function (article) { location.reload(); });
    };
    PersonalArticleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-personal-article',
            template: __webpack_require__("./src/app/personal-article/personal-article.component.html"),
            styles: [__webpack_require__("./src/app/personal-article/personal-article.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__article_service__["a" /* ArticleService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["g" /* Location */],
            __WEBPACK_IMPORTED_MODULE_4__user_service__["a" /* UserService */]])
    ], PersonalArticleComponent);
    return PersonalArticleComponent;
}());



/***/ }),

/***/ "./src/app/recipe-collection/recipe-collection.component.css":
/***/ (function(module, exports) {

module.exports = ".container-fluid{\r\n  padding: 0;\r\n  margin-top:70px;\r\n  margin-bottom: 0vh;\r\n  min-height: 100vh;\r\n  overflow-x: hidden;\r\n}\r\n\r\n.recipe-collection-topic{\r\n  background-color: #ff6200;\r\n  min-height: 10vh;\r\n  text-align: center;\r\n}\r\n\r\n.recipe-collection-topic h3{\r\n  color:white;\r\n  font-weight: 500;\r\n  display: inline;\r\n}\r\n\r\n#row-article{\r\n  margin-top:1vw;\r\n  margin-left: 5vw;\r\n  margin-right: 5vw;\r\n}\r\n\r\n#recipe-collection-all col-2, #recipe-collection-all col-10{\r\n  max-height: 20vh;\r\n  padding-left: 2vw;\r\n  -webkit-box-shadow: 2px 2px 2px #888888;\r\n          box-shadow: 2px 2px 2px #888888;\r\n  -ms-flex-line-pack: center;\r\n      align-content: center;\r\n  margin-right: 0;\r\n  margin-top:10px;\r\n}\r\n\r\n#recipe-collection-all col-2{\r\n  text-align: center;\r\n}\r\n\r\nh1{\r\n  color: white;\r\n  font-weight: 800;\r\n}\r\n\r\nimg{\r\n  max-width: 15vw;\r\n  max-height: 20vh;\r\n  margin:auto;\r\n}\r\n\r\n#recipe-collection-data h3{\r\n  color: #ff6200;\r\n  font-weight: 700;\r\n  border-bottom: 2px solid darkgrey;\r\n}\r\n\r\n#recipe-button button{\r\n  width: 100px;\r\n  margin: 5px 0;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: #ff6200;\r\n}\r\n"

/***/ }),

/***/ "./src/app/recipe-collection/recipe-collection.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12 recipe-collection-topic\">\r\n      <h1>Your Personal Recipe Collection</h1>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div class=\"row\" id=\"row-article\">\r\n    <div class=\"col-12 recipe-col\" id=\"personal-article\" *ngIf=\"isRecipeAvailable; else noRecipe\">\r\n      <div class=\"row\" id=\"recipe-collection-all\" *ngFor=\"let recipe of recipes\">\r\n        <div class=\"col-2\" *ngIf=\"recipe.pictureURL!='default.jpg'; else noImage\">\r\n          <img src=\"{{recipe.pictureURL}}\">\r\n        </div>\r\n        <ng-template #noImage>\r\n          <img src=\"../../assets/default.jpg\">\r\n        </ng-template>\r\n        <div class=\"col-9\" id=\"recipe-collection-data\">\r\n          <h3><a routerLink=\"/recipe/{{recipe.id}}\">{{recipe.title}}</a></h3>\r\n          <h4>{{recipe.username}}</h4>\r\n          <h4>{{recipe.dateCreated | date:'longDate' }}</h4>\r\n        </div>\r\n        <div class=\"col-1\" id=\"recipe-button\">\r\n          <button type=\"button\" class=\"btn btn-success\" routerLink=\"/update-recipe/{{recipe.id}}\">Update</button>\r\n          <button type=\"button\" class=\"btn btn-danger\" data-toggle=\"modal\" data-target=\"#exampleModal\" (click)=\"setSelectedRecipe(recipe.id)\">Delete</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <ng-template #noRecipe>\r\n      <h5>You haven't created any recipe.. Why don't you start writing one? <a routerLink=\"/create-recipe\"> Click here\r\n        ❤</a></h5>\r\n    </ng-template>\r\n  </div>\r\n</div>\r\n\r\n<!-- Modal -->\r\n<div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\"\r\n     aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-body\" style=\"text-align: center\">\r\n        <p>Are you sure you want to delete this recipe?</p>\r\n        <button type=\"button\" class=\"btn\" data-dismiss=\"modal\">No</button>\r\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"deleteRecipe()\">Yes</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/recipe-collection/recipe-collection.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipeCollectionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__article_service__ = __webpack_require__("./src/app/article.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__recipe_service__ = __webpack_require__("./src/app/recipe.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_service__ = __webpack_require__("./src/app/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RecipeCollectionComponent = /** @class */ (function () {
    function RecipeCollectionComponent(router, route, articleService, userService, location, recipeService) {
        this.router = router;
        this.route = route;
        this.articleService = articleService;
        this.userService = userService;
        this.location = location;
        this.recipeService = recipeService;
        this.articles = [];
        this.recipes = [];
        this.isRecipeAvailable = true;
    }
    RecipeCollectionComponent.prototype.ngOnInit = function () {
        this.user = this.userService.getUser();
        this.getPersonalRecipes();
    };
    RecipeCollectionComponent.prototype.setSelectedRecipe = function (id) {
        this.selectedRecipe = id;
    };
    RecipeCollectionComponent.prototype.deleteRecipe = function () {
        this.recipeService.deletePersonalRecipe(this.selectedRecipe).subscribe(function () {
            location.reload();
        });
    };
    RecipeCollectionComponent.prototype.getPersonalRecipes = function () {
        var _this = this;
        this.recipeService.getPersonalRecipe(this.user.id).subscribe(function (recipes) {
            if (recipes.length != 0) {
                _this.recipes = recipes;
                _this.isRecipeAvailable = true;
            }
            else {
                _this.isRecipeAvailable = false;
            }
        });
    };
    RecipeCollectionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-recipe-collection',
            template: __webpack_require__("./src/app/recipe-collection/recipe-collection.component.html"),
            styles: [__webpack_require__("./src/app/recipe-collection/recipe-collection.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__article_service__["a" /* ArticleService */],
            __WEBPACK_IMPORTED_MODULE_5__user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common__["g" /* Location */],
            __WEBPACK_IMPORTED_MODULE_2__recipe_service__["a" /* RecipeService */]])
    ], RecipeCollectionComponent);
    return RecipeCollectionComponent;
}());



/***/ }),

/***/ "./src/app/recipe-detail/recipe-detail.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n.white-space-pre {\r\n  white-space: pre-wrap;\r\n}\r\n\r\n\r\n*{\r\n  font-family: 'Montserrat', sans-serif\r\n}\r\n\r\n\r\n.textButton {\r\n  background:none!important;\r\n  border:none;\r\n  padding:0!important;\r\n  cursor:pointer;\r\n  color: darksalmon;\r\n}\r\n\r\n\r\n/*Recipe.ts*/\r\n\r\n\r\n#recipe{\r\n  /*margin-top:10vh;*/\r\n}\r\n\r\n\r\n#recipe h1{\r\n  font-weight: 700;\r\n}\r\n\r\n\r\n#recipe h6 span{\r\n  color: #ff6200;\r\n}\r\n\r\n\r\n#recipe img{\r\n  max-width: 52vw;\r\n  height: auto;\r\n}\r\n\r\n\r\n/*Comment area*/\r\n\r\n\r\n.comments p{\r\n  margin: 0;\r\n}\r\n\r\n\r\n.comments{\r\n  margin: 10px 0;\r\n}\r\n\r\n\r\n.comments .name{\r\n  color:#ff6200;\r\n  font-weight: 700;\r\n}\r\n\r\n\r\nform{\r\n  text-align: right;\r\n}\r\n\r\n\r\nform .form-group{\r\n  text-align: left;\r\n}\r\n\r\n\r\n.tags span:hover{\r\n  color:#ff6200;\r\n  cursor: pointer;\r\n}\r\n\r\n\r\na {\r\n  font-weight: bold;\r\n  color: #ff6200;\r\n  text-decoration: none;\r\n}\r\n"

/***/ }),

/***/ "./src/app/recipe-detail/recipe-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"recipe\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12\" id=\"recipe\">\r\n      <h1>{{recipe.title}}</h1>\r\n      <h6>created by <a routerLink=\"/{{recipe.username}}\">{{ recipe.username }}</a> at {{ recipe.dateCreated |date:'longDate'}}</h6>\r\n      <div *ngIf=\"isLoggedIn; else disabledSaveButton\">\r\n        <div *ngIf=\"user.id != recipe.user_id; else editRecipe\">\r\n          <div *ngIf=\"isRecipeSaved; else notSaved\">\r\n            <button type=\"button\" class=\"btn btn-info\" (click)=\"unsaveRecipe()\">SAVED</button>\r\n          </div>\r\n          <ng-template #notSaved>\r\n            <button type=\"button\" class=\"btn btn-warning\" (click)=\"saveRecipe()\">SAVE RECIPE</button>\r\n          </ng-template>\r\n        </div>\r\n        <ng-template #editRecipe>\r\n          <button type=\"button\" class=\"btn btn-warning\" routerLink=\"/update-recipe/{{recipe.id}}\">Edit</button>\r\n        </ng-template>\r\n      </div>\r\n      <ng-template #disabledSaveButton>\r\n        <button type=\"button\" class=\"btn btn-warning\" title=\"You need to log in first :(\" disabled>SAVE RECIPE</button>\r\n      </ng-template>\r\n      <br>\r\n      <div *ngIf=\"recipe.pictureURL != 'default.jpg'\">\r\n        <img src=\"{{recipe.pictureURL}}\"> <br>\r\n      </div>\r\n      <div *ngIf=\"recipe.servingQty != null\">\r\n        <h6><b>Servings:</b> {{recipe.servingQty}} {{recipe.servingUnit}}</h6>\r\n      </div>\r\n      <div *ngIf=\"recipe.about != null\">\r\n        <h6><b>About the Recipe: </b>{{recipe.about}}</h6>\r\n      </div>\r\n      <hr>\r\n      <h1> Ingredients </h1>\r\n      <div *ngFor=\"let ingredient of ingredients\">\r\n        <p>{{ingredient.quantity}} {{ingredient.unit}} {{ingredient.name}}</p>\r\n      </div>\r\n\r\n      <div id=\"preparation\">\r\n        <hr>\r\n        <h1> Preparation </h1>\r\n        <div class=\"white-space-pre\">{{ recipe.preparation }}</div>\r\n        <hr>\r\n      </div>\r\n\r\n      <div id=\"review\" *ngIf=\"recipe.tag_details.length!=0\">\r\n        <h1>Tags:</h1>\r\n        <div class=\"row\">\r\n          <div *ngFor=\"let tag of tags\">\r\n            <div class=\"col-1\" *ngFor=\"let t of tag.tag_header\">\r\n              <button type=\"button\" (click)=\"search(t.name)\" class=\"btn btn-outline-warning\">{{t.name}}</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <hr>\r\n      </div>\r\n\r\n\r\n      <h1>Leave a Review</h1>\r\n      <div *ngIf=\"isLoggedIn; else disabledForm\">\r\n        <div class=\"alert alert-danger\" *ngIf=\"reviewErrorMessage\">\r\n          {{ reviewErrorMessage }}\r\n        </div>\r\n        <form>\r\n          <div class=\"form-group\">\r\n            <textarea class=\"form-control\" name=\"content\" id=\"comment-area\" rows=\"3\" [(ngModel)]=\"review.content\"\r\n                      #content=\"ngModel\"></textarea>\r\n          </div>\r\n          <button type=\"submit\" class=\"btn btn-primary\" (click)=\"addReview()\">Submit</button>\r\n        </form>\r\n      </div>\r\n\r\n\r\n      <ng-template #disabledForm>\r\n        <form>\r\n          <div class=\"form-group\">\r\n            <textarea class=\"form-control\" id=\"comment-area\" rows=\"3\" disabled>Log in first if you want to leave a review..</textarea>\r\n          </div>\r\n          <button type=\"submit\" class=\"btn btn-primary\" disabled>Submit</button>\r\n        </form>\r\n      </ng-template>\r\n      <hr>\r\n\r\n      <h1>Reviews</h1>\r\n      <div *ngIf=\"isReviewAvailable; else noReview\">\r\n        <div *ngFor=\"let review of reviews\" class=\"comments\">\r\n          <div class=\"row\">\r\n            <div class=\"name\">{{review.user.username}}</div>\r\n            <p class=\"comment\">&nbsp;says, \"{{review.content}}\"&nbsp;</p>\r\n            <div *ngIf=\"isLoggedIn; else disabledButton\">\r\n              <button type=\"button\" class=\"btn btn-light textButton\" data-toggle=\"modal\" data-target=\"#exampleModal\"\r\n                      (click)=\"getReportedReview(review)\">\r\n                / report if inappropriate\r\n              </button>\r\n            </div>\r\n            <ng-template #disabledButton>\r\n              <button type=\"button\" class=\"btn btn-light textButton\" title=\"You need to log in first :(\" disabled>\r\n                / report if inappropriate\r\n              </button>\r\n            </ng-template>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <ng-template #noReview>\r\n        <p class=\"comment\"> Be the first to review this recipe! </p>\r\n      </ng-template>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Modal -->\r\n<div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\"\r\n     aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\" id=\"modalTitle\">Report The Review</h5>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <div class=\"alert alert-danger\" *ngIf=\"reportedReviewErrorMessage\">\r\n          {{ reportedReviewErrorMessage }}\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <div id=\"thankYouMessage\"></div>\r\n          <textarea [(ngModel)]=\"report.reason\" #reason=\"ngModel\" class=\"form-control\" name=\"reason\"\r\n                    id=\"reportReason\" rows=\"3\" placeholder=\"Why do you want to report this review?\"></textarea>\r\n        </div>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-light\" data-dismiss=\"modal\">Close</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" id=\"addReportButton\" (click)=\"addReport()\">Report this review\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/recipe-detail/recipe-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipeDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_User__ = __webpack_require__("./src/app/models/User.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_service__ = __webpack_require__("./src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_Recipe__ = __webpack_require__("./src/app/models/Recipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__recipe_service__ = __webpack_require__("./src/app/recipe.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_Review__ = __webpack_require__("./src/app/models/Review.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_Report__ = __webpack_require__("./src/app/models/Report.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_jquery__ = __webpack_require__("./node_modules/jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var RecipeDetailComponent = /** @class */ (function () {
    function RecipeDetailComponent(route, router, userService, recipeService, datepipe) {
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.recipeService = recipeService;
        this.datepipe = datepipe;
        this.recipe = new __WEBPACK_IMPORTED_MODULE_4__models_Recipe__["a" /* Recipe */]();
        this.reviewErrorMessage = null;
        this.reportedReviewErrorMessage = null;
        this.review = new __WEBPACK_IMPORTED_MODULE_6__models_Review__["a" /* Review */]();
        this.reviews = new Array();
        this.tags = new Array();
        this.ingredients = new Array();
        this.report = new __WEBPACK_IMPORTED_MODULE_8__models_Report__["a" /* Report */]();
        this.user = new __WEBPACK_IMPORTED_MODULE_2__models_User__["a" /* User */]();
        this.isRecipeSaved = false;
    }
    RecipeDetailComponent.prototype.ngOnInit = function () {
        this.getRecipe();
        if (localStorage.getItem('token')) {
            this.isLoggedIn = true;
            this.user = this.userService.getUser();
            this.isSaved();
        }
        else {
            this.isLoggedIn = false;
        }
    };
    RecipeDetailComponent.prototype.getRecipe = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.recipeService.getRecipe(id)
            .subscribe(function (recipe) {
            _this.recipe = recipe;
            _this.tags = _this.recipe.tag_details;
            _this.ingredients = _this.recipe.ingredient_details;
            if (_this.recipe.reviews.length != 0) {
                _this.isReviewAvailable = true;
                _this.reviews = _this.recipe.reviews;
            }
            else {
                _this.isReviewAvailable = false;
            }
        });
    };
    RecipeDetailComponent.prototype.search = function ($name) {
        this.router.navigate(['/search/' + $name]);
    };
    RecipeDetailComponent.prototype.addReview = function () {
        var _this = this;
        this.review.recipe_id = this.recipe.id;
        this.review.datePosted = this.datepipe.transform(new Date(), 'yyyy-MM-dd HH:mm:ss');
        this.review.user_id = this.user.id;
        this.userService.addReview(this.review).subscribe(function (res) {
            location.reload();
        }, function (err) {
            _this.reviewErrorMessage = err.error.error;
            console.log(err);
        });
    };
    RecipeDetailComponent.prototype.getReportedReview = function (review) {
        this.reportedReviewErrorMessage = null;
        __WEBPACK_IMPORTED_MODULE_9_jquery__('#thankYouMessage').html('');
        __WEBPACK_IMPORTED_MODULE_9_jquery__('#reportReason').show();
        __WEBPACK_IMPORTED_MODULE_9_jquery__('#reportReason').val("");
        __WEBPACK_IMPORTED_MODULE_9_jquery__('#addReportButton').show();
        this.report.review_id = review.id;
        this.report.dateReported = this.datepipe.transform(new Date(), 'yyyy-MM-dd HH:mm:ss');
    };
    RecipeDetailComponent.prototype.addReport = function () {
        var _this = this;
        this.report.user_id = this.user.id;
        this.userService.addReport(this.report).subscribe(function (res) {
            _this.reportedReviewErrorMessage = null;
            __WEBPACK_IMPORTED_MODULE_9_jquery__('#thankYouMessage').html('Review has been reported. Our team will immediately check on that.');
            __WEBPACK_IMPORTED_MODULE_9_jquery__('#reportReason').hide();
            __WEBPACK_IMPORTED_MODULE_9_jquery__('#addReportButton').hide();
        }, function (err) {
            console.log(err);
            if (err.error.error === "The reason field is required.") {
                _this.reportedReviewErrorMessage = "Please input a valid reason ❤";
            }
            else {
                _this.reportedReviewErrorMessage = "You have already reported this review. Please be patient ❤";
                __WEBPACK_IMPORTED_MODULE_9_jquery__('#reportReason').hide();
                __WEBPACK_IMPORTED_MODULE_9_jquery__('#addReportButton').hide();
            }
        });
    };
    RecipeDetailComponent.prototype.saveRecipe = function () {
        var _this = this;
        var _obj = {
            'user_id': this.user.id,
            'recipe_id': this.recipe.id
        };
        this.recipeService.saveRecipe(_obj).subscribe(function () { _this.isRecipeSaved = true; });
    };
    RecipeDetailComponent.prototype.isSaved = function () {
        var _this = this;
        var arr = new Array();
        this.recipeService.getSavedRecipes(this.user.id).subscribe(function (recipes) {
            arr = recipes;
        });
        var result = arr.filter(function (x) { return x.id == _this.recipe.id; });
        if (result.length == 0) {
            this.isRecipeSaved = false;
        }
        else {
            this.isRecipeSaved = true;
        }
    };
    RecipeDetailComponent.prototype.unsaveRecipe = function () {
        var _this = this;
        var _obj = {
            'user_id': this.user.id,
            'recipe_id': this.recipe.id
        };
        this.recipeService.removeSavedRecipe(_obj).subscribe(function () { _this.isRecipeSaved = false; });
    };
    RecipeDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-recipe-detail',
            template: __webpack_require__("./src/app/recipe-detail/recipe-detail.component.html"),
            styles: [__webpack_require__("./src/app/recipe-detail/recipe-detail.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_5__recipe_service__["a" /* RecipeService */],
            __WEBPACK_IMPORTED_MODULE_7__angular_common__["d" /* DatePipe */]])
    ], RecipeDetailComponent);
    return RecipeDetailComponent;
}());



/***/ }),

/***/ "./src/app/recipe-editor/recipe-editor.component.css":
/***/ (function(module, exports) {

module.exports = ".container{\r\n  margin-top: 10vh;\r\n  margin-bottom: 5vh;\r\n}\r\n\r\nh1{\r\n  color: #ff6200;\r\n  font-weight: 800;\r\n}\r\n"

/***/ }),

/***/ "./src/app/recipe-editor/recipe-editor.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h1>Create Your Recipe</h1>\r\n  <hr>\r\n  <div class=\"alert alert-danger\" *ngIf=\"message\">\r\n    {{ message }}\r\n  </div>\r\n  <form>\r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n        <label>Recipe Title*</label>\r\n      </div>\r\n      <div class=\"col\">\r\n        <p align=\"right\"><strong>*required fields</strong></p>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <input [(ngModel)]=\"recipe.title\" name=\"recipeTitle\" type=\"text\" class=\"form-control\" required>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label>About Recipe</label>\r\n      <textarea [(ngModel)]=\"recipe.about\" class=\"form-control\" id=\"recipeAbout\" rows=\"3\" name=\"articleContent\" required></textarea>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label>Serving Quantity</label>\r\n      <input [(ngModel)]=\"recipe.servingQty\" name=\"recipeQty\" type=\"number\" class=\"form-control\" required>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label>Serving Unit</label>\r\n      <select class=\"form-control\" [(ngModel)]=\"recipe.servingUnit\" name=\"recipeUnit\">\r\n        <option *ngFor=\"let unit of servingUnits\" value=\"{{unit}}\">{{unit}}</option>\r\n      </select>\r\n    </div>\r\n    <hr>\r\n\r\n    <div class=\"form-group\">\r\n      <label>Ingredient</label>\r\n    </div>\r\n    <div class=\"form-group\" *ngIf=\"ingredients.length!=0\">\r\n      <div *ngFor=\"let ing of ingredients\">\r\n        <div class=\"form-inline\">\r\n          <input class=\"col-7 form-control ingredientName\" type=\"text\"  value=\"{{ing.name}}\" (change)=\"editIngredient(ing.id,1)\">\r\n          <input class=\"col-2 form-control ingredientQty\" type=\"number\" min=\"0\" value=\"{{ing.quantity}}\" (change)=\"editIngredient(ing.id,0)\">\r\n          <select class=\"col-2 form-control ingredientUnit\" (change)=\"editIngredient(ing.id,0)\" value=\"{{ing.unit}}\">\r\n            <option value=\"select\">select</option>\r\n            <option *ngFor=\"let unit of ingredientUnits\">{{unit}}</option>\r\n          </select>\r\n          <button class=\"btn btn-danger\" (click)=\"deleteIngredient(ing.name)\">-</button>\r\n        </div>\r\n      </div>\r\n      <hr>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label>Name*</label>\r\n      <input id=\"_ingredientName\" class=\"form-control\" type=\"text\">\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n        <label>Quantity*</label>\r\n      </div>\r\n      <div class=\"col\">\r\n        <label>Unit</label>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-row\">\r\n      <div class=\"col\">\r\n        <input id=\"_ingredientQty\" class=\"form-control\" type=\"number\" min=\"0\" placeholder=\"eg., 2 or 0.5\">\r\n      </div>\r\n      <div class=\"col\">\r\n        <select class=\"form-control\" id=\"_ingredientUnit\">\r\n          <option value=\"select\">select</option>\r\n          <option *ngFor=\"let unit of ingredientUnits\" value=\"{{unit}}\">{{unit}}</option>\r\n        </select>\r\n      </div>\r\n    </div>\r\n    <div class=\"text-center\">\r\n      <br>\r\n      <button class=\"btn\" (click)=\"addIngredient()\">ADD INGREDIENT</button>\r\n    </div>\r\n    <br>\r\n    <hr>\r\n    <div class=\"form-group\">\r\n      <label>Preparation*</label>\r\n      <textarea [(ngModel)]=\"recipe.preparation\" class=\"form-control\" rows=\"5\" name=\"recipePreparation\" required></textarea>\r\n    </div>\r\n    <hr>\r\n    <div class=\"form-group\">\r\n      <label>Details (hold ctrl (Windows) or command (Mac) button to pick more than one)</label>\r\n      <br>\r\n      <select class=\"form-control\" style=\"width:100%;height: 150px;\" multiple id=\"recipeDetails\" tabindex=\"5\">\r\n        <optgroup *ngFor=\"let tag of tags\" label={{tag.name}}>\r\n          <option *ngFor=\"let detail of tag.tag_header\" value=\"{{detail.id}}\">{{detail.name}}</option>\r\n        </optgroup>\r\n      </select>\r\n    </div>\r\n    <hr>\r\n    <div class=\"form-group\">\r\n      <p>Upload an image</p>\r\n    </div>\r\n    <div class=\"form-inline\">\r\n      <button type=\"button\" (click)=\"fileInput.click()\">Choose image</button>\r\n      <p style=\"margin:0px 5px\" id=\"filename\">No file chosen</p>\r\n    </div>\r\n    <input type=\"file\" class=\"form-control-file\" name=\"articleImg\" id=\"image\" style=\"display:none\"\r\n           (change)=\"onFileSelected()\" #fileInput>\r\n    <br>\r\n    <div id=\"saveButton\" class=\"btn btn-warning ld-over-full\" (click)=\"save()\"> Save\r\n      <div class=\"ld ld-ring ld-spin\"></div>\r\n    </div>\r\n  </form>\r\n</div>\r\n\r\n\r\n<!-- Modal -->\r\n<div id=\"myModal\" class=\"modal fade\" role=\"dialog\">\r\n  <div class=\"modal-dialog\">\r\n    <!-- Modal content-->\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/recipe-editor/recipe-editor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipeEditorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_Recipe__ = __webpack_require__("./src/app/models/Recipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__recipe_service__ = __webpack_require__("./src/app/recipe.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_service__ = __webpack_require__("./src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jquery__ = __webpack_require__("./node_modules/jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2__ = __webpack_require__("./node_modules/angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_firebase_storage__ = __webpack_require__("./node_modules/firebase/storage/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_firebase_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_firebase_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__models_Ingredient__ = __webpack_require__("./src/app/models/Ingredient.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var RecipeEditorComponent = /** @class */ (function () {
    function RecipeEditorComponent(route, router, recipeService, location, http, firebase, userService, datepipe) {
        this.route = route;
        this.router = router;
        this.recipeService = recipeService;
        this.location = location;
        this.http = http;
        this.firebase = firebase;
        this.userService = userService;
        this.datepipe = datepipe;
        this._ingredients = new Array(); // HOLDS OLD INGREDIENTS' DETAILS
        this._tagDetails = new Array(); // HOLDS OLD TAG DETAILS
        this.message = null; // HOLDS UNPROCESSABLE ENTITY MESSAGE. E.G.: WHEN USER LEFT NAME FIELD EMPTY, "THE NAME FIELD IS REQUIRED" WILL SHOW UP IN THE ALERT BOX
        this.selectedFile = null; // HOLDS FILE FOR RECIPE'S IMAGE THAT USER WANTS TO UPLOAD
        this.ingredients = new Array(); // HOLDS THE NEWEST INGREDIENTS' DETAILS
        this.tagDetails = new Array(); // HOLDS THE NEWEST TAG DETAILS
        this.servingUnits = ['select', 'person', 'people', 'serving', 'servings', 'cup', 'cups', 'quart', 'quarts', 'gallon', 'gallons', 'dozen', 'liter', 'liters'];
        this.ingredientUnits = ['g', 'grams', 'kg', 'bottle', 'bottles', 'box', 'boxes', 'can', 'cans', 'ounce', 'ounces', 'cup', 'cups', 'gallon', 'gallons', 'dozen', 'dozens', 'liter', 'liters', 'ml', 'milliliters', 'pound', 'pounds', 'tablespoon', 'tablespoons', 'teaspoon', 'teaspoons'];
        this.tags = []; // TAG OPTIONS
    }
    RecipeEditorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.element = document.getElementById("saveButton");
        this.getTags(); // GET TAG DETAILS FOR <SELECT> TAG
        this.user = this.userService.getUser(); // GET USER'S DETAILS
        /* IF USER IS CREATING NEW RECIPE */
        this.recipe = new __WEBPACK_IMPORTED_MODULE_3__models_Recipe__["a" /* Recipe */]();
        if (this.recipe.servingUnit == null) {
            this.recipe.servingUnit = 'select';
        }
        /* IF USER IS EDITING EXISTING RECIPE */
        this.route.params.subscribe(function (params) {
            var id = +params['id'];
            if (params.id != null) {
                _this.recipeService.getRecipe(id).subscribe(function (recipe) {
                    _this.recipe = recipe;
                    _this.recipe.user_id = _this.user.id;
                    _this.ingredients = _this.recipe.ingredient_details;
                    /* GET OLD INGREDIENTS - FOR COMPARING IT WITH NEWEST INGREDIENTS IF USER'S UPDATING THE INGREDIENTS LATER */
                    _this.recipeService.getIngredients(_this.recipe.id).subscribe(function (res) {
                        _this._ingredients = res;
                    });
                    if (_this.recipe.servingUnit == null) {
                        _this.recipe.servingUnit = 'select';
                    }
                    for (var i = 0; i < _this.ingredients.length; i++) {
                        if (_this.ingredients[i].unit == null) {
                            _this.ingredients[i].unit = 'select';
                        }
                    }
                    /* GET TAG DETAILS' ID FOR <SELECT> TAG*/
                    var arr = new Array();
                    for (var i = 0; i < _this.recipe.tag_details.length; i++) {
                        arr.push(_this.recipe.tag_details[i].tag_id);
                    }
                    _this._tagDetails = arr.map(function (e) {
                        return e.toString();
                    });
                    /* SET SELECTED RECIPE'S TAG DETAILS */
                    __WEBPACK_IMPORTED_MODULE_6_jquery__('#recipeDetails').val(arr);
                    /* SET UPLOADED IMAGE PATH  */
                    if (_this.recipe.pictureURL != 'default.jpg') {
                        var tempurl = _this.recipe.pictureURL;
                        tempurl = tempurl.substr(75, 40);
                        __WEBPACK_IMPORTED_MODULE_6_jquery__('p#filename').text(tempurl);
                    }
                    else {
                        __WEBPACK_IMPORTED_MODULE_6_jquery__('p#filename').text('No file chosen');
                    }
                });
            }
        });
    };
    /* GET TAG DETAILS FOR <SELECT> TAG */
    RecipeEditorComponent.prototype.getTags = function () {
        var _this = this;
        this.recipeService.getTags().subscribe(function (res) {
            _this.tags = res;
        });
    };
    /* CREATE UUID FOR RECIPE'S IMAGE PATH SO IT DOESN'T OVERWRITE ANOTHER IMAGE WITH THE SAME ID IN FIREBASE STORAGE */
    RecipeEditorComponent.prototype.createUUID = function () {
        var dt = new Date().getTime();
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (dt + Math.random() * 16) % 16 | 0;
            dt = Math.floor(dt / 16);
            return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
        return uuid + '.jpg';
    };
    /* SET SELECTED IMAGE PATH TO <p> WITH ID 'filename' IF USER SELECTED AN IMAGE FILE */
    RecipeEditorComponent.prototype.onFileSelected = function () {
        __WEBPACK_IMPORTED_MODULE_6_jquery__(document).ready(function () {
            __WEBPACK_IMPORTED_MODULE_6_jquery__('p#filename').text(__WEBPACK_IMPORTED_MODULE_6_jquery__('#image')[0].files[0].name);
        });
    };
    /* UPLOAD AN IMAGE TO FIREBASE STORAGE AND RETURNS ITS URL IN FIREBASE STORAGE */
    RecipeEditorComponent.prototype.uploadImage = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var _url;
            var temp = _this.createUUID();
            _this.selectedFile = __WEBPACK_IMPORTED_MODULE_6_jquery__('#image')[0].files[0];
            var fd = new FormData();
            fd.append('image', _this.selectedFile, temp);
            _this.http.post('https://us-central1-makanmakan-e28a1.cloudfunctions.net/uploadFile', fd)
                .subscribe(function (res) {
                // console.log(res);
            }, function (error) {
                console.log(error);
            }, function () {
                var storage = _this.firebase.storage();
                var storageRef = storage.ref();
                var spaceRef = storageRef.child(temp);
                spaceRef.getDownloadURL().then(function (url) {
                    _url = url;
                    resolve(_url);
                }).catch(function (error) {
                    console.log(error);
                });
            });
        });
    };
    /* ADD AN INGREDIENT TO 'ingredients' ARRAY */
    RecipeEditorComponent.prototype.addIngredient = function () {
        /* VALIDATOR */
        var result = this.ingredients.filter(function (x) { return x.name === __WEBPACK_IMPORTED_MODULE_6_jquery__('#_ingredientName').val(); });
        if (result.length != 0) {
            alert('You already input ' + __WEBPACK_IMPORTED_MODULE_6_jquery__('#_ingredientName').val() + ' in your list of ingredients ❤');
        }
        else if (__WEBPACK_IMPORTED_MODULE_6_jquery__('#_ingredientName').val().length == 0) {
            alert('The Name field is required ❤');
        }
        else if ((__WEBPACK_IMPORTED_MODULE_6_jquery__('#_ingredientQty').val() < 0) || (__WEBPACK_IMPORTED_MODULE_6_jquery__('#_ingredientQty').val().length == 0)) {
            alert('Please insert a whole or decimal number such as 2 or 0.5 in Quantity field ❤');
        }
        else {
            var id = 1;
            if (this.ingredients.length != 0) {
                id = this.ingredients[this.ingredients.length - 1].id + 1;
            }
            var _ingredient = new __WEBPACK_IMPORTED_MODULE_10__models_Ingredient__["a" /* Ingredient */](id, __WEBPACK_IMPORTED_MODULE_6_jquery__('#_ingredientName').val(), __WEBPACK_IMPORTED_MODULE_6_jquery__('#_ingredientQty').val(), __WEBPACK_IMPORTED_MODULE_6_jquery__('#_ingredientUnit').val());
            this.ingredients.push(_ingredient);
            //console.log(this.ingredients);
        }
    };
    /* REMOVE ONE SPECIFIC INGREDIENT FROM 'ingredients' ARRAY */
    RecipeEditorComponent.prototype.deleteIngredient = function (name) {
        this.ingredients = __WEBPACK_IMPORTED_MODULE_6_jquery__["grep"](this.ingredients, function (o, i) {
            return o.name === name;
        }, true);
    };
    /* UPDATE INGREDIENT DETAILS FROM 'ingredients' ARRAY */
    RecipeEditorComponent.prototype.editIngredient = function (id, status) {
        var index = this.ingredients.findIndex(function (x) { return x.id === id; });
        var name = __WEBPACK_IMPORTED_MODULE_6_jquery__('.ingredientName');
        var qty = __WEBPACK_IMPORTED_MODULE_6_jquery__('.ingredientQty');
        var unit = __WEBPACK_IMPORTED_MODULE_6_jquery__('.ingredientUnit');
        if (status) {
            var result = this.ingredients.filter(function (x) { return x.name === __WEBPACK_IMPORTED_MODULE_6_jquery__(name[index]).val(); });
            if (result.length != 0) {
                alert('You already input ' + __WEBPACK_IMPORTED_MODULE_6_jquery__('.ingredientName').val() + ' in your list of ingredients ❤');
                __WEBPACK_IMPORTED_MODULE_6_jquery__(name[index]).val(this.ingredients[index].name);
            }
        }
        this.ingredients[index].name = __WEBPACK_IMPORTED_MODULE_6_jquery__(name[index]).val();
        this.ingredients[index].quantity = __WEBPACK_IMPORTED_MODULE_6_jquery__(qty[index]).val();
        this.ingredients[index].unit = __WEBPACK_IMPORTED_MODULE_6_jquery__(unit[index]).val();
    };
    /* CALLING RECIPE SERVICE IF USER EITHER WANTS TO UPDATE OR CREATE A NEW RECIPE */
    RecipeEditorComponent.prototype.setRecipe = function (status) {
        var _this = this;
        return new Promise(function (resolve) {
            if (_this.recipe.servingUnit == 'select') {
                _this.recipe.servingUnit = null;
            }
            /* IF USER WANTS TO CREATE A NEW RECIPE */
            if (status === 'add') {
                _this.recipe.user_id = _this.user.id;
                _this.recipe.dateCreated = _this.datepipe.transform(new Date(), 'yyyy-MM-dd HH:mm:ss');
                _this.recipeService.addRecipe(_this.recipe).subscribe(function (res) {
                    _this.recipe = res;
                    resolve(res);
                }, function (err) {
                    // console.log(this.res);
                    _this.element.classList.remove("running");
                    _this.message = err.error.error;
                    window.scrollTo(0, 0);
                });
            }
            else {
                _this.recipeService.updateRecipe(_this.recipe, _this.recipe.id).subscribe(function (res) {
                    // console.log(res);
                    _this.recipe = res;
                    resolve(res);
                }, function (err) {
                    _this.element.classList.remove("running");
                    _this.message = err.error.error;
                    window.scrollTo(0, 0);
                });
            }
        });
    };
    /* ADDING NEW INGREDIENT TO INGREDIENTS DATABASE */
    RecipeEditorComponent.prototype.updateIngredient = function (obj) {
        var _this = this;
        return new Promise(function (resolve) {
            var _obj = {
                'name': obj.name
            };
            _this.recipeService.addIngredients(_obj).subscribe(function (res) {
                obj.id = res;
            }, function () {
            }, function () {
                resolve(true);
            });
        });
    };
    /* THIS FUNCTION WILL CALL updateIngredient FUNCTION RECURSIVELY UNTIL ALL INGREDIENTS IN 'ingredients' ARRAY ARE ADDED TO INGREDIENTS TABLE */
    RecipeEditorComponent.prototype.addIngredients = function (i) {
        var _this = this;
        return new Promise(function (resolve) {
            if (i < _this.ingredients.length) {
                _this.updateIngredient(_this.ingredients[i]).then(function () {
                    resolve(_this.addIngredients(i + 1).then(function () { resolve(true); }));
                });
            }
            else {
                resolve(true);
            }
        });
    };
    /* FUNCTION TO UPDATE OR ADD NEW INGREDIENT DETAILS TO INGREDIENT_DETAILS TABLE */
    RecipeEditorComponent.prototype.updateIngredientDetails = function (obj) {
        var _this = this;
        return new Promise(function (resolve) {
            if (obj.unit == 'select') {
                obj.unit = null;
            }
            var _ingredient = {
                'recipe_id': _this.recipe.id,
                'ingredient_id': obj.id,
                'quantity': obj.quantity,
                'unit': obj.unit
            };
            /*
            ** RETURNS AN ARRAY OF INGREDIENT OBJECT IF THE INGREDIENT IS ALREADY EXIST IN THE RECIPE BEFORE
            ** OTHERWISE, IT WILL RETURN AN EMPTY ARRAY IF IT IS A NEW INGREDIENT
            */
            var result = _this._ingredients.filter(function (x) { return x.id === obj.id; });
            /* ADD NEW INGREDIENT DETAILS TO INGREDIENT_DETAILS TABLE */
            if (result.length == 0) {
                _this.recipeService.addIngredientDetails(_ingredient).subscribe(function (res) {
                    // console.log(res);
                }, function (err) {
                    console.log(err);
                }, function () {
                    resolve(true);
                });
            }
            else {
                _this.recipeService.updateIngredientDetails(_ingredient).subscribe(function (res) {
                    // console.log(res);
                }, function (err) {
                    console.log(err);
                }, function () {
                    resolve(true);
                });
            }
        });
    };
    /* THIS IS A RECURSIVE FUNCTION THAT WILL CALL updateIngredientDetals FUNCTION UNTIL ALL INGREDIENTS IN 'ingredients' ARRAY ARE ADDED TO INGREDIENT_DETAILS TABLE */
    RecipeEditorComponent.prototype.addIngredientDetails = function (i) {
        var _this = this;
        return new Promise(function (resolve) {
            if (i < _this.ingredients.length) {
                _this.updateIngredientDetails(_this.ingredients[i]).then(function () {
                    resolve(_this.addIngredientDetails(i + 1).then(function () {
                        resolve(true);
                    }));
                });
            }
            else {
                resolve(true);
            }
        });
    };
    /*
    ** DELETE INGREDIENT DETAILS THAT IS NO LONGER EXIST IN THE RECIPE
    ** FROM INGREDIENT_DETAILS TABLE IN DB
    */
    RecipeEditorComponent.prototype.deleteIngredientDetails = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.recipeService.deleteIngredientDetails(id, _this.recipe.id).subscribe(function (res) {
            }, function () {
            }, function () {
                resolve(true);
            });
        });
    };
    /*
    ** THIS IS A RECURSIVE FUNCTION THAT WILL CALL deleteIngredientDetails FUNCTION
    ** IF THERE IS AN INGREDIENT IN '_ingredients' ARRAY (OLD INGREDIENTS)
    ** THAT IS NOT IN 'ingredients' ARRAY (UPDATED INGREDIENTS)
    */
    RecipeEditorComponent.prototype.deleteIngredients = function (i) {
        var _this = this;
        return new Promise(function (resolve) {
            if (i < _this._ingredients.length) {
                var result = _this.ingredients.filter(function (x) { return x.id === _this._ingredients[i].id; });
                if (result.length == 0) {
                    _this.deleteIngredientDetails(_this._ingredients[i].id).then(function () {
                        resolve(_this.deleteIngredients(i + 1).then(function () {
                            resolve(true);
                        }));
                    });
                }
                else {
                    _this.deleteIngredients(i + 1).then(function () {
                        resolve(true);
                    });
                }
            }
            else {
                resolve(true);
            }
        });
    };
    /*
    ** DELETE TAG DETAILS THAT IS NO LONGER EXIST IN THE RECIPE
    ** FROM TAG_DETAILS TABLE IN DB
    */
    RecipeEditorComponent.prototype.deleteTagDetails = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.recipeService.deleteTagDetails(id, _this.recipe.id).subscribe(function (res) {
            }, function () {
            }, function () {
                resolve(true);
            });
        });
    };
    /*
    ** THIS IS A RECURSIVE FUNCTION THAT WILL CALL deleteTagDetails FUNCTION
    ** IF THERE IS A TAG IN '_tagDetails' ARRAY (OLD TAGS)
    ** THAT IS NOT IN 'tagDetails' ARRAY (UPDATED TAGS)
    */
    RecipeEditorComponent.prototype.deleteTags = function (i) {
        var _this = this;
        return new Promise(function (resolve) {
            if (i < _this._tagDetails.length) {
                var result = _this.tagDetails.includes(_this._tagDetails[i]);
                if (!result) {
                    _this.deleteTagDetails(_this._tagDetails[i]).then(function () {
                        resolve(_this.deleteTags(i + 1).then(function () {
                            resolve(true);
                        }));
                    });
                }
                else {
                    _this.deleteTags(i + 1).then(function () {
                        resolve(true);
                    });
                }
            }
            else {
                resolve(true);
            }
        });
    };
    /* FUNCTION TO ADD NEW TAG DETAILS TO TAG_DETAILS TABLE */
    RecipeEditorComponent.prototype.updateTagDetails = function (obj) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var result = _this._tagDetails.includes(obj);
            if (!result) {
                var _obj = {
                    'recipe_id': _this.recipe.id,
                    'tag_id': obj
                };
                _this.recipeService.addTagDetails(_obj).subscribe(function (res) {
                }, function () {
                }, function () {
                    resolve(true);
                });
            }
            else {
                resolve(true);
            }
        });
    };
    /* THIS IS A RECURSIVE FUNCTION THAT WILL CALL updateTagDetails FUNCTION UNTIL ALL TAGS IN 'tagDetails' ARRAY ARE ADDED TO TAG_DETAILS TABLE */
    RecipeEditorComponent.prototype.addTags = function (i) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (i < _this.tagDetails.length) {
                _this.updateTagDetails(_this.tagDetails[i]).then(function () {
                    resolve(_this.addTags(i + 1).then(function () {
                        resolve(true);
                    }));
                });
            }
            else {
                resolve(true);
            }
        });
    };
    /* WHEN USER CLICKS SAVE BUTTON */
    RecipeEditorComponent.prototype.save = function () {
        var _this = this;
        this.element.classList.add("running");
        var p = new Promise(function (resolve, reject) {
            if (_this.ingredients.length == 0) {
                reject('Please enter ingredients ❤');
            }
            else if (__WEBPACK_IMPORTED_MODULE_6_jquery__('#image')[0].files[0] == null || _this.recipe.title == null || _this.recipe.preparation == null) {
                resolve('default.jpg');
            }
            else {
                resolve(_this.uploadImage().then(function (res) {
                    resolve(res); // RETURNS THE FULL IMAGE URL IN FIREBASE STORAGE THAT WILL BE STORED IN DATABASE
                }));
            }
        });
        p.catch(function (res) {
            _this.message = res;
            _this.element.classList.remove("running");
            window.scrollTo(0, 0);
        });
        p.then(function (res) {
            _this.recipe.pictureURL = res.toString();
            _this.tagDetails = __WEBPACK_IMPORTED_MODULE_6_jquery__('#recipeDetails').val();
        }).then(function () {
            /* IF USER IS CREATING A NEW RECIPE (makanmakan.me/create-recipe) */
            if (_this.recipe.id == null) {
                _this.setRecipe('add').then(function () {
                    _this.addIngredients(0).then(function () {
                        _this.addIngredientDetails(0).then(function () {
                            if (_this.tagDetails.length != 0) {
                                _this.addTags(0).then(function () {
                                    document.body.style.cursor = '';
                                    _this.router.navigate(['/recipe/' + _this.recipe.id]);
                                });
                            }
                            else {
                                document.body.style.cursor = '';
                                _this.router.navigate(['/recipe/' + _this.recipe.id]);
                            }
                        });
                    });
                });
            }
            else {
                _this.setRecipe('update').then(function () {
                    _this.addIngredients(0).then(function () {
                        _this.addIngredientDetails(0).then(function () {
                            _this.deleteIngredients(0).then(function () {
                                if (_this.tagDetails.length != 0) {
                                    _this.addTags(0).then(function () {
                                        _this.deleteTags(0).then(function () {
                                            document.body.style.cursor = '';
                                            _this.router.navigate(['/recipe/' + _this.recipe.id]);
                                        });
                                    });
                                }
                                else {
                                    document.body.style.cursor = '';
                                    _this.router.navigate(['/recipe/' + _this.recipe.id]);
                                }
                            });
                        });
                    });
                });
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__models_Recipe__["a" /* Recipe */])
    ], RecipeEditorComponent.prototype, "recipe", void 0);
    RecipeEditorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-recipe-editor',
            template: __webpack_require__("./src/app/recipe-editor/recipe-editor.component.html"),
            styles: [__webpack_require__("./src/app/recipe-editor/recipe-editor.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__recipe_service__["a" /* RecipeService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["g" /* Location */],
            __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_8_angularfire2__["b" /* FirebaseApp */],
            __WEBPACK_IMPORTED_MODULE_5__user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["d" /* DatePipe */]])
    ], RecipeEditorComponent);
    return RecipeEditorComponent;
}());



/***/ }),

/***/ "./src/app/recipe.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + localStorage.token
    }),
};
var RecipeService = /** @class */ (function () {
    function RecipeService(http) {
        this.http = http;
        this.recipesUrl = 'https://api.makanmakan.me/api/Recipe';
    }
    /* GET RECIPES FROM EVERYONE */
    RecipeService.prototype.getRecipes = function () {
        return this.http.get(this.recipesUrl).map(function (res) { return res; });
    };
    /* GET A SPECIFIC RECIPE BY ID FOR RECIPE-DETAIL COMPONENT */
    RecipeService.prototype.getRecipe = function (id) {
        var url = this.recipesUrl + "/" + id;
        return this.http.get(url).map(function (res) { return res; });
    };
    /* SEARCH FOR RECIPE(S) THAT MATCH USER'S CRITERIA */
    RecipeService.prototype.searchRecipe = function (name) {
        var url = this.recipesUrl + "/search/" + name;
        return this.http.get(url).map(function (res) { return res; });
    };
    /* GET ALL RECIPE TAGS / CATEGORIES */
    RecipeService.prototype.getTags = function () {
        var url = 'http://localhost:8000/api/TagCategory';
        return this.http.get(url).map(function (res) { return res; });
    };
    /* GET INGREDIENT DETAILS FROM A SPECIFIC RECIPE */
    RecipeService.prototype.getIngredients = function (recipe_id) {
        var url = this.recipesUrl + "/IngredientDetails/" + recipe_id;
        return this.http.get(url, httpOptions).map(function (res) { return res; });
    };
    /* ADD NEW INGREDIENT NAME TO INGREDIENTS TABLE */
    RecipeService.prototype.addIngredients = function (obj) {
        var url = this.recipesUrl + "/Ingredient";
        return this.http.post(url, obj, httpOptions).map(function (res) { return res; });
    };
    /* DELETE INGREDIENT DETAILS FROM INGREDIENTS_DETAILS TABLE */
    RecipeService.prototype.deleteIngredientDetails = function (ingredient_id, recipe_id) {
        var url = this.recipesUrl + "/IngredientDetails/" + ingredient_id + "/" + recipe_id;
        return this.http.delete(url, httpOptions).map(function (res) { return res; });
    };
    /* UPDATE INGREDIENT DETAILS (e.g.: Name, Quantity, or Unit) IN INGREDIENT_DETAILS TABLE */
    RecipeService.prototype.updateIngredientDetails = function (ingredient) {
        var url = this.recipesUrl + "/IngredientDetails/" + ingredient.ingredient_id;
        return this.http.put(url, ingredient, httpOptions).map(function (res) { return res; });
    };
    /* ADD INGREDIENT DETAILS TO INGREDIENT_DETAILS TABLE */
    RecipeService.prototype.addIngredientDetails = function (obj) {
        var url = this.recipesUrl + "/IngredientDetails";
        return this.http.post(url, obj, httpOptions).map(function (res) { return res; });
    };
    /* ADD TAG DETAILS TO A SPECIFIC RECIPE */
    /* obj CONTAINS RECIPE ID AND TAG ID */
    RecipeService.prototype.addTagDetails = function (obj) {
        var url = this.recipesUrl + "/TagDetails";
        return this.http.post(url, obj, httpOptions).map(function (res) { return res; });
    };
    /* DELETE A TAG DETAIL FROM A SPECIFIC RECIPE WHERE ITS TAG_ID == tag_id */
    RecipeService.prototype.deleteTagDetails = function (tag_id, recipe_id) {
        var url = this.recipesUrl + "/TagDetails/" + tag_id + "/" + recipe_id;
        return this.http.delete(url, httpOptions).map(function (res) { return res; });
    };
    /* GET USER'S PERSONAL RECIPE(S) */
    RecipeService.prototype.getPersonalRecipe = function (id) {
        var url = this.recipesUrl + "/personal-recipe/" + id;
        return this.http.get(url, httpOptions).map(function (res) {
            console.log(res);
            return res;
        });
    };
    /* ADD A PERSONAL RECIPE */
    RecipeService.prototype.addRecipe = function (recipe) {
        return this.http.post(this.recipesUrl, recipe, httpOptions).map(function (res) { return res; });
    };
    /* UPDATE USER'S PERONAL RECIPE */
    RecipeService.prototype.updateRecipe = function (recipe, id) {
        var url = this.recipesUrl + "/" + id;
        return this.http.put(url, recipe, httpOptions);
    };
    /* DELETE USER'S PERSONAL RECIPE */
    RecipeService.prototype.deletePersonalRecipe = function (id) {
        var url = this.recipesUrl + "/" + id;
        return this.http.delete(url, httpOptions).map(function (res) {
            console.log(res);
        });
    };
    /* SAVE SOMEONE'S RECIPE */
    RecipeService.prototype.saveRecipe = function (obj) {
        var url = this.recipesUrl + "/saved-recipe";
        return this.http.post(url, obj, httpOptions).map(function (res) { return res; });
    };
    /* REMOVE A RECIPE FROM SAVED RECIPE COLLECTION */
    RecipeService.prototype.removeSavedRecipe = function (obj) {
        var url = this.recipesUrl + "/saved-recipe/" + obj.user_id + "/" + obj.recipe_id;
        return this.http.delete(url, httpOptions).map(function (res) { return res; });
    };
    /* GET USER'S SAVED RECIPE(S) */
    RecipeService.prototype.getSavedRecipes = function (id) {
        var url = this.recipesUrl + "/saved-recipe/" + id;
        return this.http.get(url, httpOptions).map(function (res) {
            console.log(res);
            return res;
        });
    };
    /* GET USER'S RECIPE(S) */
    RecipeService.prototype.getUserRecipes = function (username) {
        var url = this.recipesUrl + "/user/" + username;
        return this.http.get(url, httpOptions).map(function (res) {
            return res;
        });
    };
    RecipeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], RecipeService);
    return RecipeService;
}());



/***/ }),

/***/ "./src/app/recipes/recipes.component.css":
/***/ (function(module, exports) {

module.exports = "*{\r\n\tfont-family: 'Montserrat', sans-serif\r\n}\r\n\r\n/*.container{*/\r\n\r\n/*margin-top:10vh;*/\r\n\r\n/*}*/\r\n\r\n#article-container h1{\r\n\tcolor:#FF6200;\r\n\tfont-weight: 700;\r\n}\r\n\r\n#article-container div div{\r\n\tmargin:0;\r\n\tpadding: 0;\r\n\ttext-align: center;\r\n}\r\n\r\nimg {\r\n  alignment: center;\r\n  width: 38vh;\r\n  height: 23vh;\r\n}\r\n\r\n.row {\r\n  text-align: center;\r\n}\r\n\r\n.article-food {\r\n  margin: 5px 0 0 !important;\r\n  display: block;\r\n}\r\n\r\nh4{\r\n\tmargin-bottom: 0;\r\n}\r\n\r\nh4 a{\r\n\tcolor:#ff6200;\r\n\tfont-weight: 700;\r\n\ttext-decoration: none;\r\n}\r\n\r\np a{\r\n\tcolor:black;\r\n\ttext-decoration: none;\r\n}\r\n"

/***/ }),

/***/ "./src/app/recipes/recipes.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container\" id=\"article-container\">\r\n  <h1> Recipes </h1>\r\n  <hr>\r\n  <div class=\"row\" *ngIf=\"isRecipeAvailable; else noRecipe\">\r\n    <div class=\"col-3 article-food\" *ngFor=\"let recipe of recipes \">\r\n      <div *ngIf=\"recipe.pictureURL!='default.jpg';else noImage\">\r\n        <img src=\"{{recipe.pictureURL}}\"> <br>\r\n      </div>\r\n      <ng-template #noImage>\r\n        <img src=\"../../assets/default.jpg\">\r\n        <br>\r\n      </ng-template>\r\n      <h4><a routerLink=\"/recipe/{{recipe.id}}\">{{recipe.title}}</a></h4>\r\n      <p>by {{ recipe.username }}</p>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #noRecipe>\r\n  <p>Sorry.. No recipes available..</p>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./src/app/recipes/recipes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__recipe_service__ = __webpack_require__("./src/app/recipe.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RecipesComponent = /** @class */ (function () {
    function RecipesComponent(recipeService) {
        this.recipeService = recipeService;
        this.recipes = [];
        this.isRecipeAvailable = true;
    }
    RecipesComponent.prototype.ngOnInit = function () {
        this.getRecipes();
    };
    RecipesComponent.prototype.getRecipes = function () {
        var _this = this;
        this.recipeService.getRecipes()
            .subscribe(function (recipes) {
            if (recipes.length != 0) {
                _this.recipes = recipes;
                _this.isRecipeAvailable = true;
            }
            else {
                _this.isRecipeAvailable = false;
            }
        });
    };
    RecipesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-recipes',
            template: __webpack_require__("./src/app/recipes/recipes.component.html"),
            styles: [__webpack_require__("./src/app/recipes/recipes.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__recipe_service__["a" /* RecipeService */]])
    ], RecipesComponent);
    return RecipesComponent;
}());



/***/ }),

/***/ "./src/app/saved-article/saved-article.component.css":
/***/ (function(module, exports) {

module.exports = ".container-fluid{\r\n  padding: 0;\r\n  margin-top:70px;\r\n  margin-bottom: 0vh;\r\n  min-height: 100vh;\r\n  overflow-x: hidden;\r\n}\r\n\r\n.recipe-collection-topic{\r\n  background-color: #ff6200;\r\n  min-height: 10vh;\r\n  text-align: center;\r\n}\r\n\r\n.recipe-collection-topic h3{\r\n  color:white;\r\n  font-weight: 500;\r\n  display: inline;\r\n}\r\n\r\n#row-article{\r\n  margin-top:1vw;\r\n  margin-left: 5vw;\r\n  margin-right: 5vw;\r\n}\r\n\r\n#recipe-collection-all col-2, #recipe-collection-all col-10{\r\n  max-height: 20vh;\r\n  padding-left: 2vw;\r\n  -webkit-box-shadow: 2px 2px 2px #888888;\r\n          box-shadow: 2px 2px 2px #888888;\r\n  -ms-flex-line-pack: center;\r\n      align-content: center;\r\n  margin-right: 0;\r\n  margin-top:10px;\r\n}\r\n\r\n#recipe-collection-all col-2{\r\n  text-align: center;\r\n}\r\n\r\nh1{\r\n  color: white;\r\n  font-weight: 800;\r\n}\r\n\r\nimg{\r\n  max-width: 15vw;\r\n  max-height: 20vh;\r\n  margin:auto;\r\n}\r\n\r\n#recipe-collection-data h3{\r\n  color: #ff6200;\r\n  font-weight: 700;\r\n  border-bottom: 2px solid darkgrey;\r\n}\r\n\r\n#recipe-button button{\r\n  width: 100px;\r\n  margin: 5px 0;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: #ff6200;\r\n}\r\n"

/***/ }),

/***/ "./src/app/saved-article/saved-article.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-12 recipe-collection-topic\">\n      <h1>Your Saved Article Collection</h1>\n    </div>\n  </div>\n\n\n  <div class=\"row\" id=\"row-article\">\n    <div class=\"col-12 recipe-col\" id=\"personal-article\" *ngIf=\"isArticleAvailable; else noArticle\">\n      <div class=\"row\" id=\"recipe-collection-all\" *ngFor=\"let article of articles\">\n        <div class=\"col-2\" *ngIf=\"article.imageURL!='default.jpg'; else noImage\">\n          <img src=\"{{article.imageURL}}\">\n        </div>\n        <ng-template #noImage>\n          <img src=\"../../assets/default.jpg\">\n        </ng-template>\n        <div class=\"col-9\" id=\"recipe-collection-data\">\n          <h3><a routerLink=\"/article/{{article.id}}\">{{article.title}}</a></h3>\n          <h4>{{article.username}}</h4>\n        </div>\n        <div class=\"col-1\" id=\"recipe-button\">\n          <button type=\"button\" class=\"btn btn-danger\" (click)=\"setSelectedArticle(article.id)\" data-toggle=\"modal\" data-target=\"#exampleModal\">Delete</button>\n        </div>\n      </div>\n    </div>\n    <ng-template #noArticle>\n      <h5>You haven't saved any article..<a routerLink=\"/articles\"> Click here</a> to browse more articles ❤</h5>\n    </ng-template>\n  </div>\n</div>\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\"\n     aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-body\" style=\"text-align: center\">\n        <p>Are you sure you want to remove this article?</p>\n        <button type=\"button\" class=\"btn\" data-dismiss=\"modal\">No</button>\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"deleteArticle()\">Yes</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/saved-article/saved-article.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SavedArticleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__article_service__ = __webpack_require__("./src/app/article.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_service__ = __webpack_require__("./src/app/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SavedArticleComponent = /** @class */ (function () {
    function SavedArticleComponent(router, route, articleService, userService) {
        this.router = router;
        this.route = route;
        this.articleService = articleService;
        this.userService = userService;
        this.articles = [];
        this.isArticleAvailable = true;
        this.selectedArticle = null;
    }
    SavedArticleComponent.prototype.ngOnInit = function () {
        this.user = this.userService.getUser();
        this.getSavedArticles();
    };
    SavedArticleComponent.prototype.deleteArticle = function () {
        var _obj = {
            'user_id': this.user.id,
            'article_id': this.selectedArticle
        };
        this.articleService.removeSavedArticle(_obj).subscribe(function () { location.reload(); });
    };
    SavedArticleComponent.prototype.setSelectedArticle = function (id) {
        this.selectedArticle = id;
    };
    SavedArticleComponent.prototype.getSavedArticles = function () {
        var _this = this;
        this.articleService.getSavedArticles(this.user.id).subscribe(function (articles) {
            if (articles.length != 0) {
                _this.articles = articles;
                _this.isArticleAvailable = true;
            }
            else {
                _this.isArticleAvailable = false;
            }
        });
    };
    SavedArticleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-saved-article',
            template: __webpack_require__("./src/app/saved-article/saved-article.component.html"),
            styles: [__webpack_require__("./src/app/saved-article/saved-article.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__article_service__["a" /* ArticleService */],
            __WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */]])
    ], SavedArticleComponent);
    return SavedArticleComponent;
}());



/***/ }),

/***/ "./src/app/saved-recipe/saved-recipe.component.css":
/***/ (function(module, exports) {

module.exports = ".container-fluid{\r\n  padding: 0;\r\n  margin-top:70px;\r\n  margin-bottom: 0vh;\r\n  min-height: 100vh;\r\n  overflow-x: hidden;\r\n}\r\n\r\n.recipe-collection-topic{\r\n  background-color: #ff6200;\r\n  min-height: 10vh;\r\n  text-align: center;\r\n}\r\n\r\n.recipe-collection-topic h3{\r\n  color:white;\r\n  font-weight: 500;\r\n  display: inline;\r\n}\r\n\r\n#row-article{\r\n  margin-top:1vw;\r\n  margin-left: 5vw;\r\n  margin-right: 5vw;\r\n}\r\n\r\n#recipe-collection-all col-2, #recipe-collection-all col-10{\r\n  max-height: 20vh;\r\n  padding-left: 2vw;\r\n  -webkit-box-shadow: 2px 2px 2px #888888;\r\n          box-shadow: 2px 2px 2px #888888;\r\n  -ms-flex-line-pack: center;\r\n      align-content: center;\r\n  margin-right: 0;\r\n  margin-top:10px;\r\n}\r\n\r\n#recipe-collection-all col-2{\r\n  text-align: center;\r\n}\r\n\r\nh1{\r\n  color: white;\r\n  font-weight: 800;\r\n}\r\n\r\nimg{\r\n  max-width: 15vw;\r\n  max-height: 20vh;\r\n  margin:auto;\r\n}\r\n\r\n#recipe-collection-data h3{\r\n  color: #ff6200;\r\n  font-weight: 700;\r\n  border-bottom: 2px solid darkgrey;\r\n}\r\n\r\n#recipe-button button{\r\n  width: 100px;\r\n  margin: 5px 0;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: #ff6200;\r\n}\r\n"

/***/ }),

/***/ "./src/app/saved-recipe/saved-recipe.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-12 recipe-collection-topic\">\n      <h1>Your Saved Article Collection</h1>\n    </div>\n  </div>\n\n\n  <div class=\"row\" id=\"row-article\">\n    <div class=\"col-12 recipe-col\" id=\"personal-article\" *ngIf=\"isRecipeAvailable; else noRecipe\">\n      <div class=\"row\" id=\"recipe-collection-all\" *ngFor=\"let recipe of recipes\">\n        <div class=\"col-2\" *ngIf=\"recipe.pictureURL!='default.jpg'; else noImage\">\n          <img src=\"{{recipe.pictureURL}}\">\n        </div>\n        <ng-template #noImage>\n          <img src=\"../../assets/default.jpg\">\n        </ng-template>\n        <div class=\"col-9\" id=\"recipe-collection-data\">\n          <h3><a routerLink=\"/recipe/{{recipe.id}}\">{{recipe.title}}</a></h3>\n          <h4>{{recipe.username}}</h4>\n        </div>\n        <div class=\"col-1\" id=\"recipe-button\">\n          <button type=\"button\" class=\"btn btn-danger\" (click)=\"setSelectedRecipe(recipe.id)\" data-toggle=\"modal\" data-target=\"#exampleModal\">Delete</button>\n        </div>\n      </div>\n    </div>\n    <ng-template #noRecipe>\n      <h5>You haven't saved any recipe..<a routerLink=\"/recipes\"> Click here</a> to browse more recipes ❤</h5>\n    </ng-template>\n  </div>\n</div>\n\n<!-- Trigger the modal with a button -->\n<!-- Modal -->\n<div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\"\n     aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n        <div class=\"modal-body\" style=\"text-align: center\">\n          <p>Are you sure you want to remove this recipe?</p>\n          <button type=\"button\" class=\"btn\" data-dismiss=\"modal\">No</button>\n          <button type=\"button\" class=\"btn btn-danger\" (click)=\"deleteRecipe()\">Yes</button>\n        </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/saved-recipe/saved-recipe.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SavedRecipeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__recipe_service__ = __webpack_require__("./src/app/recipe.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__("./src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SavedRecipeComponent = /** @class */ (function () {
    function SavedRecipeComponent(router, route, userService, location, recipeService) {
        this.router = router;
        this.route = route;
        this.userService = userService;
        this.location = location;
        this.recipeService = recipeService;
        this.recipes = [];
        this.isRecipeAvailable = true;
        this.selectedRecipe = null;
    }
    SavedRecipeComponent.prototype.ngOnInit = function () {
        this.user = this.userService.getUser();
        this.getSavedRecipes();
    };
    SavedRecipeComponent.prototype.deleteRecipe = function () {
        var _obj = {
            'user_id': this.user.id,
            'recipe_id': this.selectedRecipe
        };
        this.recipeService.removeSavedRecipe(_obj).subscribe(function () { location.reload(); });
    };
    SavedRecipeComponent.prototype.setSelectedRecipe = function (id) {
        this.selectedRecipe = id;
    };
    SavedRecipeComponent.prototype.getSavedRecipes = function () {
        var _this = this;
        this.recipeService.getSavedRecipes(this.user.id).subscribe(function (recipes) {
            if (recipes.length != 0) {
                _this.recipes = recipes;
                _this.isRecipeAvailable = true;
            }
            else {
                _this.isRecipeAvailable = false;
            }
        });
    };
    SavedRecipeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-saved-recipe',
            template: __webpack_require__("./src/app/saved-recipe/saved-recipe.component.html"),
            styles: [__webpack_require__("./src/app/saved-recipe/saved-recipe.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["g" /* Location */],
            __WEBPACK_IMPORTED_MODULE_1__recipe_service__["a" /* RecipeService */]])
    ], SavedRecipeComponent);
    return SavedRecipeComponent;
}());



/***/ }),

/***/ "./src/app/search/search.component.css":
/***/ (function(module, exports) {

module.exports = "*{\r\n  font-family: 'Montserrat', sans-serif\r\n}\r\n\r\n/*.container{*/\r\n\r\n/*margin-top:10vh;*/\r\n\r\n/*}*/\r\n\r\n#article-container h1{\r\n  color:#FF6200;\r\n  font-weight: 700;\r\n}\r\n\r\n#article-container div div{\r\n  margin:0;\r\n  padding: 0;\r\n  text-align: center;\r\n}\r\n\r\nimg {\r\n  alignment: center;\r\n  width: 38vh;\r\n  height: 23vh;\r\n}\r\n\r\n.row {\r\n  text-align: center;\r\n}\r\n\r\n.article-food {\r\n  margin: 5px 0 0 !important;\r\n  display: block;\r\n}\r\n\r\nh4{\r\n  margin-bottom: 0;\r\n}\r\n\r\nh4 a{\r\n  color:#ff6200;\r\n  font-weight: 700;\r\n  text-decoration: none;\r\n}\r\n\r\np a{\r\n  color:black;\r\n  text-decoration: none;\r\n}\r\n"

/***/ }),

/***/ "./src/app/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" id=\"article-container\">\n  <h1> Search on {{ name }} </h1>\n  <hr>\n  <div class=\"row\" *ngIf=\"isAvailable; else noRecipe\">\n    <div class=\"col-3 article-food\" *ngFor=\"let recipe of recipes \">\n      <div *ngIf=\"recipe.pictureURL!='default.jpg';else noImage\">\n        <img src=\"{{recipe.pictureURL}}\"> <br>\n      </div>\n      <ng-template #noImage>\n        <img src=\"../../assets/default.jpg\">\n        <br>\n      </ng-template>\n      <h4><a routerLink=\"/recipe/{{recipe.id}}\">{{recipe.title}}</a></h4>\n      <p>by {{ recipe.username }}</p>\n    </div>\n  </div>\n</div>\n\n<ng-template #noRecipe>\n  <p>Sorry.. No recipes available..</p>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__recipe_service__ = __webpack_require__("./src/app/recipe.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchComponent = /** @class */ (function () {
    function SearchComponent(route, recipeService) {
        this.route = route;
        this.recipeService = recipeService;
        this.recipes = [];
        this.isAvailable = true;
    }
    SearchComponent.prototype.ngOnInit = function () {
        this.searchRecipe();
    };
    SearchComponent.prototype.searchRecipe = function () {
        var _this = this;
        this.name = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);
        this.recipeService.searchRecipe(this.name)
            .subscribe(function (recipes) {
            if (recipes.length != 0) {
                _this.isAvailable = true;
                _this.recipes = recipes;
                //  console.log(recipes);
            }
            else {
                _this.isAvailable = false;
            }
        });
    };
    SearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-search',
            template: __webpack_require__("./src/app/search/search.component.html"),
            styles: [__webpack_require__("./src/app/search/search.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__recipe_service__["a" /* RecipeService */]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.css":
/***/ (function(module, exports) {

module.exports = "*{\r\n\tfont-family: 'Montserrat', sans-serif\r\n}\r\n\r\n/*Part 1*/\r\n\r\n.jumbotron{\r\n\tbackground-image:-webkit-gradient(linear, left top, left bottom, from(rgba(255,98,0,.5)), to(rgba(255,98,0,.5))),url('pic1.10ce2c4a6462c3670a8c.jpg');\r\n\tbackground-image:linear-gradient(rgba(255,98,0,.5), rgba(255,98,0,.5)),url('pic1.10ce2c4a6462c3670a8c.jpg');\r\n\tbackground-size: cover;\r\n\tmin-height: 100vh;\r\n\tbackground-position: center;\r\n\tpadding-top: 20vh;\r\n\tmargin-bottom: 0;\r\n}\r\n\r\n#sign-up{\r\n\tpadding-top: 10vh;\r\n}\r\n\r\n.jumbotron .container-fluid{\r\n\ttext-align: center;\r\n}\r\n\r\n.jumbotron h1{\r\n\tfont-family: 'Righteous', cursive;\r\n\tcolor: white;\r\n\tfont-size: 100px;\r\n}\r\n\r\n.form-group, .form-row{\r\n\ttext-align: left;\r\n}\r\n\r\n.form-row{\r\n\tmargin-bottom: 1vh;\r\n}\r\n\r\n.form-group label,.form-row .col label{\r\n\ttext-align:left;\r\n\tcolor: white;\r\n}\r\n\r\n.form-group input{\r\n\twidth: 45vw;\r\n}\r\n\r\nform button{\r\n\tbackground-color: #ff6200 !important;\r\n\tcolor: white !important;\r\n\tborder: none !important;\r\n}\r\n\r\nform button:hover{\r\n  color: #ff6200 !important;\r\n  background-color: white !important;\r\n}\r\n\r\na {\r\n  color:#ff6200 !important;\r\n  text-decoration: none;\r\n}\r\n\r\np{\r\n\tmargin-top: 2.5vh;\r\n\tcolor: white;\r\n}\r\n\r\np span{\r\n\tfont-weight: 700;\r\n}\r\n"

/***/ }),

/***/ "./src/app/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\" id=\"sign-up\">\r\n\t<div class=\"container-fluid\">\r\n\t\t<h1>sign up</h1>\r\n\t\t<div class=\"col-6 offset-xl-3\">\r\n    <div class=\"alert alert-danger\" *ngIf=\"isError; else noError\">\r\n        {{ error }}\r\n      </div>\r\n\t\t<form>\r\n      <div class=\"form-row\">\r\n        <div class=\"col\">\r\n          <label for=\"signup-firstname\">First Name *</label>\r\n          <input [(ngModel)]=\"signup.firstName\" name=\"firstname\"\r\n          type=\"text\" class=\"form-control form-control-lg\" id=\"signup-firstname\" aria-describedby=\"firstnameHelp\" placeholder=\"First name\" required>\r\n        </div>\r\n        <div class=\"col\">\r\n          <label for=\"signup-lastname\">Last Name *</label>\r\n          <input [(ngModel)]=\"signup.lastName\" name=\"lastname\" type=\"text\" class=\"form-control form-control-lg\" id=\"signup-lastname\" aria-describedby=\"lastnameHelp\" placeholder=\"Last name\" required>\r\n        </div>\r\n      </div>\r\n\r\n\t\t\t<div class=\"form-group\">\r\n\t\t    \t<label for=\"signup-username\">Username *</label>\r\n    \t\t\t<input [(ngModel)]=\"signup.username\" name=\"username\" type=\"text\" class=\"form-control form-control-lg\" id=\"signup-username\" aria-describedby=\"usernameHelp\" placeholder=\"Username\" required>\r\n\t\t\t</div>\r\n      <div class=\"form-group\">\r\n          <label for=\"signup-email\">Email *</label>\r\n          <input [(ngModel)]=\"signup.email\" name=\"email\" type=\"email\" class=\"form-control form-control-lg\" id=\"signup-email\" aria-describedby=\"emailHelp\" placeholder=\"Email\" required>\r\n      </div>\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t    <label for=\"signup-password\">Password *</label>\r\n\t\t\t    <input [(ngModel)]=\"signup.password\" name=\"password\" type=\"password\" class=\"form-control form-control-lg\" id=\"signup-password\" placeholder=\"Password\" required>\r\n\t\t\t</div>\r\n\t\t\t<button type=\"submit\" class=\"btn btn-lg btn-warning hvr-sweep-to-right\"  (click)=\"register()\" data-toggle=\"modal\" data-target=\"#myModal\" >Sign Up</button>\r\n\t\t</form>\r\n\t\t</div>\r\n    <p>Have an account?  <span><a routerLink=\"/login\">Log in!</a></span></p>\r\n\t</div>\r\n</div>\r\n\r\n<ng-template #noError>\r\n  <div class=\"alert alert-success\" *ngIf=\"message\">\r\n    {{ message }}\r\n  </div>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_Signup__ = __webpack_require__("./src/app/models/Signup.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__("./src/app/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignupComponent = /** @class */ (function () {
    function SignupComponent(userService) {
        this.userService = userService;
        this.res = {};
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.signup = new __WEBPACK_IMPORTED_MODULE_1__models_Signup__["a" /* Signup */]();
        this.isError = false;
    };
    SignupComponent.prototype.register = function () {
        var _this = this;
        this.userService.register(this.signup).subscribe(function (res) {
            _this.res = res;
            _this.isError = false;
            _this.message = _this.res.message;
            // console.log(this.message);
        }, function (err) {
            _this.res = err;
            _this.isError = true;
            _this.error = _this.res.error.message;
            // console.log(this.message);
            // console.error(err); alert(this.res.error.message);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_Signup__["a" /* Signup */])
    ], SignupComponent.prototype, "signup", void 0);
    SignupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-signup',
            template: __webpack_require__("./src/app/signup/signup.component.html"),
            styles: [__webpack_require__("./src/app/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/user-detail/user-detail.component.css":
/***/ (function(module, exports) {

module.exports = "*{\r\n  font-family: 'Montserrat', sans-serif\r\n}\r\n\r\n/*.container{*/\r\n\r\n/*margin-top:15vh;*/\r\n\r\n/*margin-bottom: 10vh;*/\r\n\r\n/*min-height: 75vh;*/\r\n\r\n/*}*/\r\n\r\n#article-container h1{\r\n  color:#FF6200;\r\n  font-weight: 700;\r\n}\r\n\r\n#article-container div div{\r\n  margin:0;\r\n  padding: 0;\r\n  text-align: center;\r\n}\r\n\r\nimg {\r\n  alignment: center;\r\n  width: 38vh;\r\n  height: 23vh;\r\n}\r\n\r\n.row {\r\n  text-align: center;\r\n}\r\n\r\n.article-food {\r\n  margin: 5px 0 0 !important;\r\n  display: block;\r\n}\r\n\r\nh4{\r\n  margin-bottom: 0;\r\n}\r\n\r\nh4 a{\r\n  color:#ff6200;\r\n  font-weight: 700;\r\n  text-decoration: none;\r\n}\r\n\r\np a{\r\n  color:black;\r\n  text-decoration: none;\r\n}\r\n"

/***/ }),

/***/ "./src/app/user-detail/user-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" id=\"article-container\">\n  <h1>{{username}}'s profile</h1>\n  <hr>\n  <div *ngIf=\"isRecipeAvailable\">\n    <h3>Recipes</h3>\n    <div class=\"row\">\n      <div class=\"col-3 article-food\" *ngFor=\"let recipe of recipes \">\n        <div *ngIf=\"recipe.pictureURL!='default.jpg';else noImage\">\n          <img src=\"{{recipe.pictureURL}}\"> <br>\n        </div>\n        <ng-template #noImage>\n          <img src=\"../../assets/default.jpg\">\n          <br>\n        </ng-template>\n        <h4><a routerLink=\"/recipe/{{recipe.id}}\">{{recipe.title}}</a></h4>\n        <p>by {{ recipe.username }}</p>\n      </div>\n    </div>\n  </div>\n  <div *ngIf=\"isArticleAvailable\">\n    <hr>\n    <h3>Articles</h3>\n    <div class=\"row\">\n\n      <div class=\"col-3 article-food\" *ngFor=\"let article of articles \">\n        <div *ngIf=\"article.imageURL!='default.jpg';else noImage\">\n          <img src=\"{{article.imageURL}}\"> <br>\n        </div>\n        <ng-template #noImage>\n          <img src=\"../../assets/default.jpg\"> <br>\n        </ng-template>\n        <h4><a routerLink=\"/article/{{article.id}}\">{{article.title}}</a></h4>\n        <p>by {{ article.username }}</p>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/user-detail/user-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__article_service__ = __webpack_require__("./src/app/article.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__recipe_service__ = __webpack_require__("./src/app/recipe.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserDetailComponent = /** @class */ (function () {
    function UserDetailComponent(articleService, recipeService) {
        this.articleService = articleService;
        this.recipeService = recipeService;
        this.isArticleAvailable = true;
        this.isRecipeAvailable = true;
    }
    UserDetailComponent.prototype.ngOnInit = function () {
        this.username = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);
        this.getArticles();
        this.getRecipes();
    };
    UserDetailComponent.prototype.getArticles = function () {
        var _this = this;
        this.articleService.getUserArticles(this.username)
            .subscribe(function (articles) {
            if (articles.length != 0) {
                _this.isArticleAvailable = true;
                _this.articles = articles;
                // console.log(this.articles);
            }
            else {
                _this.isArticleAvailable = false;
            }
        });
    };
    UserDetailComponent.prototype.getRecipes = function () {
        var _this = this;
        this.recipeService.getUserRecipes(this.username)
            .subscribe(function (recipes) {
            if (recipes.length != 0) {
                _this.isRecipeAvailable = true;
                _this.recipes = recipes;
            }
            else {
                _this.isArticleAvailable = false;
            }
        });
    };
    UserDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-user-detail',
            template: __webpack_require__("./src/app/user-detail/user-detail.component.html"),
            styles: [__webpack_require__("./src/app/user-detail/user-detail.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__article_service__["a" /* ArticleService */], __WEBPACK_IMPORTED_MODULE_2__recipe_service__["a" /* RecipeService */]])
    ], UserDetailComponent);
    return UserDetailComponent;
}());



/***/ }),

/***/ "./src/app/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': "Bearer " + localStorage.token
    }),
};
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.url = 'https://api.makanmakan.me/api'; // URL to web api
        this.token = localStorage.getItem('token');
        this.user = JSON.parse(localStorage.getItem('user'));
    }
    UserService.prototype.isLogin = function () {
        if (this.token != null) {
            return true;
        }
        else {
            return false;
        }
    };
    UserService.prototype.getUser = function () {
        return this.user;
    };
    UserService.prototype.register = function (signup) {
        var registerUrl = this.url + "/register";
        return this.http.post(registerUrl, signup, httpOptions).map(function (res) {
            console.log(res);
            return res;
        });
    };
    UserService.prototype.login = function (login) {
        var _this = this;
        var loginUrl = this.url + "/login";
        return this.http.post(loginUrl, login, httpOptions).map(function (res) {
            localStorage.setItem('token', res['data']['token']);
            localStorage.setItem('user', JSON.stringify(res['data']['user']));
            _this.token = localStorage.getItem('token');
            _this.user = JSON.parse(localStorage.getItem('user'));
            return res;
        });
    };
    UserService.prototype.logout = function () {
        var logoutUrl = this.url + "/logout";
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        return this.http.get(logoutUrl, httpOptions);
    };
    UserService.prototype.addReview = function (review) {
        var reviewUrl = this.url + "/Review";
        return this.http.post(reviewUrl, review, httpOptions).map(function (res) { return res; });
    };
    UserService.prototype.addReport = function (report) {
        var reportUrl = this.url + "/ReportedReview";
        return this.http.post(reportUrl, report, httpOptions)
            .map(function (res) { console.log(res); return res; })
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(err); });
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyClpV-XPMvvLhj4JRO_vytdbPSULlxgGd8",
        authDomain: "makanmakan-e28a1.firebaseapp.com",
        databaseURL: "https://makanmakan-e28a1.firebaseio.com",
        projectId: "makanmakan-e28a1",
        storageBucket: "makanmakan-e28a1.appspot.com",
        messagingSenderId: "511323239353"
    }
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map