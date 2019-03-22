(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/_directives/hover-opacity.directive.ts":
/*!********************************************************!*\
  !*** ./src/app/_directives/hover-opacity.directive.ts ***!
  \********************************************************/
/*! exports provided: HoverOpacityDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HoverOpacityDirective", function() { return HoverOpacityDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HoverOpacityDirective = /** @class */ (function () {
    function HoverOpacityDirective(el) {
        this.el = el;
        this.hederDisplay = true;
        // console.log(el.nativeElement.children, el.nativeElement.style.backgroundColor)
    }
    HoverOpacityDirective.prototype.onMouseEnter = function () {
        this.opacity('yellow');
    };
    HoverOpacityDirective.prototype.onMouseLeave = function () {
        this.opacity(null);
    };
    HoverOpacityDirective.prototype.opacity = function (color) {
        var _this = this;
        setTimeout(function () {
            // this.el.nativeElement.children[0].children[0].style.display = this.hederDisplay ? 'block' : 'none'
            _this.hederDisplay = !_this.hederDisplay;
        }, 0);
        this.el.nativeElement.children[0].classList.toggle('show-opacity'), this.bgColor;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HoverOpacityDirective.prototype, "bgColor", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mouseenter'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], HoverOpacityDirective.prototype, "onMouseEnter", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mouseleave'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], HoverOpacityDirective.prototype, "onMouseLeave", null);
    HoverOpacityDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appHoverOpacity]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], HoverOpacityDirective);
    return HoverOpacityDirective;
}());



/***/ }),

/***/ "./src/app/_directives/hover-rotate.directive.ts":
/*!*******************************************************!*\
  !*** ./src/app/_directives/hover-rotate.directive.ts ***!
  \*******************************************************/
/*! exports provided: HoverRotateDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HoverRotateDirective", function() { return HoverRotateDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HoverRotateDirective = /** @class */ (function () {
    function HoverRotateDirective(el) {
        this.el = el;
    }
    HoverRotateDirective.prototype.onMouseEnter = function () {
        this.opacity();
    };
    HoverRotateDirective.prototype.onMouseLeave = function () {
        this.opacity();
    };
    HoverRotateDirective.prototype.opacity = function () {
        console.log(this.el.nativeElement.children[1].children[0].children[0].classList.toggle('show-rotate'));
        // this.el.nativeElement.children[0].classList.toggle('show-opacity');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HoverRotateDirective.prototype, "bgColor", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mouseenter'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], HoverRotateDirective.prototype, "onMouseEnter", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mouseleave'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], HoverRotateDirective.prototype, "onMouseLeave", null);
    HoverRotateDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appHoverRotate]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], HoverRotateDirective);
    return HoverRotateDirective;
}());



/***/ }),

/***/ "./src/app/_services/component.service.ts":
/*!************************************************!*\
  !*** ./src/app/_services/component.service.ts ***!
  \************************************************/
/*! exports provided: ComponentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentService", function() { return ComponentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ComponentService = /** @class */ (function () {
    function ComponentService() {
        this.posts = [
            {
                id: 1,
                title: 'blog 1',
                description: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit dignissimos dolore ducimus eum, excepturi explicabo nostrum obcaecati omnis quod',
                content: 'b1 content',
                image: '',
                createdAt: '2019-05-06',
                updatedAt: '2019-05-06'
            },
            {
                id: 2,
                title: 'blog 2',
                description: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit dignissimos dolore ducimus eum, excepturi explicabo nostrum obcaecati omnis quod',
                content: 'b2 content',
                image: '',
                createdAt: '2019-05-06',
                updatedAt: '2019-05-06'
            },
            {
                id: 3,
                title: 'blog 3',
                description: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit dignissimos dolore ducimus eum, excepturi explicabo nostrum obcaecati omnis quod',
                content: 'b3 content',
                image: '',
                createdAt: '2019-05-06',
                updatedAt: '2019-05-06'
            },
            {
                id: 15,
                title: 'blog 1',
                description: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit dignissimos dolore ducimus eum, excepturi explicabo nostrum obcaecati omnis quod',
                content: 'b3 content',
                image: '',
                createdAt: '2019-05-06',
                updatedAt: '2019-05-06'
            }
        ];
        this.blogContent = [
            this.posts[0],
            this.posts[1],
            this.posts[2]
        ];
        this.blogContent2 = [
            this.posts[3]
        ];
        this.category = ['blog', 'video', 'image', 'image-text', 'bg-image', 'link'];
        this.componentSize = ['small', 'middle', 'large'];
        this.componentBg = ['#ffffff', 'red', 'yellow', 'green', 'brown'];
        this.blocks = [
            { size: 'small', bg: '#B12B2B', category: 'image', content: { img: 'pryanik.PNG', hoverTitle: 'some Title' } },
            { size: 'small', bg: '#ffffff', category: this.category[0], content: this.blogContent },
            { size: 'small', bg: '#FF52B5', category: 'image', content: { img: 'cloud.PNG', hoverTitle: 'click me' } },
            { size: 'middle', bg: 'red', category: this.category[4], content: 'middle.PNG' },
            { size: 'small', bg: '#ffffff', category: this.category[0], content: this.blogContent2 },
            {
                size: 'small',
                bg: '#ffffff',
                category: this.category[1],
                content: { video: 'video.mp4', title: 'some text' }
            },
            { size: 'small', bg: this.componentBg[2], category: this.category[4], content: 'girl.PNG' },
            {
                size: 'small',
                bg: '#ffffff',
                category: this.category[1],
                content: { video: 'video.mp4', title: 'some biger text' }
            },
            { size: 'small', bg: '#5ED6BF', category: 'image', content: { img: 'textimg.PNG', hoverTitle: 'do good' } },
            {
                size: 'large',
                bg: '#C32C5E',
                category: this.category[3],
                content: {
                    img: 'curious.PNG',
                    title: 'good curious',
                    subTitle: 'we\'re a bunch of',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias animi atque consequatur deleniti est expedita impedit ipsum itaque laboriosam molestiae neque, nihil nisi perferendis porro quibusdam ratione repellendus reprehenderit rerum soluta suscipit vel voluptatem. A commodi iure libero magnam!'
                }
            },
            { size: 'middle', bg: '#FF52B5', category: 'image', content: { img: 'middle.PNG', hoverTitle: 'Cloud' } },
            { size: 'small', bg: '#000', category: 'link', content: { title: 'Lorem ipsum dolor sit amet, consectetur adipisicing ?', link: 'contact us', url: 'https://www.facebook.com/' } },
        ];
        this.group = [
            {
                type: 'large',
                data: [this.blocks[0], this.blocks[1], this.blocks[2], this.blocks[6], this.blocks[5], this.blocks[8]]
            },
            { type: 'middle', data: [this.blocks[3]], },
            { type: 'large', data: [this.blocks[9]] },
            { type: 'middle', data: [this.blocks[4], this.blocks[2], this.blocks[7], this.blocks[0]] },
            { type: 'small', data: [this.blocks[11]] }
        ];
    }
    ComponentService.prototype.getGroup = function () {
        return this.group;
    };
    ComponentService.prototype.getPost = function (id) {
        return this.posts.find(function (element) {
            return element.id == id;
        });
    };
    ComponentService.prototype.getBlocks = function () {
        return this.blocks;
    };
    ComponentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ComponentService);
    return ComponentService;
}());



/***/ }),

/***/ "./src/app/_services/contact.service.ts":
/*!**********************************************!*\
  !*** ./src/app/_services/contact.service.ts ***!
  \**********************************************/
/*! exports provided: ContactService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactService", function() { return ContactService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactService = /** @class */ (function () {
    function ContactService() {
    }
    ContactService.prototype.sendMail = function (mail) {
        console.log(mail.value);
    };
    ContactService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactService);
    return ContactService;
}());



/***/ }),

/***/ "./src/app/_services/slider.service.ts":
/*!*********************************************!*\
  !*** ./src/app/_services/slider.service.ts ***!
  \*********************************************/
/*! exports provided: SliderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderService", function() { return SliderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SliderService = /** @class */ (function () {
    function SliderService() {
        this.options = {
            loop: true,
            mouseDrag: true,
            touchDrag: true,
            pullDrag: false,
            dots: false,
            navSpeed: 200,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplaySpeed: 1000,
            // navText: ['', ''],
            responsive: {
                0: {
                    items: 1
                },
                400: {
                    items: 1
                },
                740: {
                    items: 1
                },
                940: {
                    items: 1
                }
            },
            nav: false
        };
        this.images = [
            { url: '../../../../assets/images/banner.PNG', title: 'Electriclmp 1', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing.' },
            { url: '../../../../assets/images/banner.PNG', title: 'Electriclmp 2', description: 'Lorem ipsum dolor sit amet, consectetur ' },
            { url: '../../../../assets/images/banner.PNG', title: 'Electriclmp 3', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing.Csit amet, consectetur adipisicing.' },
            { url: '../../../../assets/images/banner.PNG', title: 'Electriclmp 4', description: 'Lorem ipsum dolor sit amet, consectetur adipis icingc onsectetur adipisicing.Csit amet, consectetur adipisicing.' },
            { url: '../../../../assets/images/banner.PNG', title: 'Electriclmp 5', description: 'Lorem ipsum dolor sit amet.' },
            { url: '../../../../assets/images/banner.PNG', title: 'Electriclmp 6', description: 'Ipsum dolor sit ametL orem ipsum dolor sit amet, consectetur adipisicing.' }
        ];
    }
    SliderService.prototype.getImages = function () {
        return this.images;
    };
    SliderService.prototype.sliderOptions = function () {
        return this.options;
    };
    SliderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SliderService);
    return SliderService;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/pages/home/home.component */ "./src/app/components/pages/home/home.component.ts");
/* harmony import */ var _components_pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/pages/contact/contact.component */ "./src/app/components/pages/contact/contact.component.ts");
/* harmony import */ var _components_pages_about_about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/pages/about/about.component */ "./src/app/components/pages/about/about.component.ts");
/* harmony import */ var _components_pages_work_work_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/pages/work/work.component */ "./src/app/components/pages/work/work.component.ts");
/* harmony import */ var _components_pages_stories_stories_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/pages/stories/stories.component */ "./src/app/components/pages/stories/stories.component.ts");
/* harmony import */ var _components_pages_careers_careers_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/pages/careers/careers.component */ "./src/app/components/pages/careers/careers.component.ts");
/* harmony import */ var _components_pages_about_about_desc_about_desc_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/pages/about/about-desc/about-desc.component */ "./src/app/components/pages/about/about-desc/about-desc.component.ts");
/* harmony import */ var _components_partials_all_blocks_all_blocks_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/partials/all-blocks/all-blocks.component */ "./src/app/components/partials/all-blocks/all-blocks.component.ts");











var child = [];
var routes = [
    { path: '', component: _components_pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], pathMatch: 'full' },
    { path: '', component: _components_partials_all_blocks_all_blocks_component__WEBPACK_IMPORTED_MODULE_10__["AllBlocksComponent"], outlet: 'footer' },
    { path: 'home', component: _components_pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'home', component: _components_partials_all_blocks_all_blocks_component__WEBPACK_IMPORTED_MODULE_10__["AllBlocksComponent"], outlet: 'footer' },
    { path: 'contact', component: _components_pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_4__["ContactComponent"] },
    { path: 'contact', component: _components_partials_all_blocks_all_blocks_component__WEBPACK_IMPORTED_MODULE_10__["AllBlocksComponent"], outlet: 'footer' },
    { path: 'about', component: _components_pages_about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"], outlet: 'footer' },
    { path: 'about', component: _components_pages_about_about_desc_about_desc_component__WEBPACK_IMPORTED_MODULE_9__["AboutDescComponent"] },
    { path: 'work', component: _components_pages_work_work_component__WEBPACK_IMPORTED_MODULE_6__["WorkComponent"] },
    { path: 'all-stories', component: _components_pages_stories_stories_component__WEBPACK_IMPORTED_MODULE_7__["StoriesComponent"] },
    { path: 'stories/:id', component: _components_pages_stories_stories_component__WEBPACK_IMPORTED_MODULE_7__["StoriesComponent"], children: child },
    { path: 'careers', component: _components_pages_careers_careers_component__WEBPACK_IMPORTED_MODULE_8__["CareersComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"custom-container\">\r\n    <div class=\"row p-0 m-0\">\r\n        <div class=\"side-bar col-3 p-0\">\r\n            <app-sidebar></app-sidebar>\r\n        </div>\r\n        <div class=\"col-9 p-0\">\r\n                <router-outlet></router-outlet>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n    <router-outlet name=\"footer\"></router-outlet>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".custom-container {\n  padding: 50px; }\n\n.side-bar {\n  height: calc(100vh - 100px); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxNb2RlbGluZ1xcRGVza3RvcFxcYW5ndWxhclxcbmlrYVxcY2xpZW50L3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhLEVBQUE7O0FBRWY7RUFDRSwyQkFBMkIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jdXN0b20tY29udGFpbmVye1xyXG4gIHBhZGRpbmc6IDUwcHg7XHJcbn1cclxuLnNpZGUtYmFye1xyXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDEwMHB4KTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");




var AppComponent = /** @class */ (function () {
    function AppComponent(location, router) {
        var _this = this;
        this.title = 'nika';
        router.events.subscribe(function (val) {
            if (location.path() != '') {
                _this.route = location.path();
                // console.log(this.route)
            }
            else
                _this.route = '';
        });
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/pages/home/home.component */ "./src/app/components/pages/home/home.component.ts");
/* harmony import */ var _components_pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/pages/contact/contact.component */ "./src/app/components/pages/contact/contact.component.ts");
/* harmony import */ var _components_pages_about_about_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/pages/about/about.component */ "./src/app/components/pages/about/about.component.ts");
/* harmony import */ var _components_partials_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/partials/sidebar/sidebar.component */ "./src/app/components/partials/sidebar/sidebar.component.ts");
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-owl-carousel-o */ "./node_modules/ngx-owl-carousel-o/fesm5/ngx-owl-carousel-o.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _components_pages_work_work_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/pages/work/work.component */ "./src/app/components/pages/work/work.component.ts");
/* harmony import */ var _components_pages_stories_stories_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/pages/stories/stories.component */ "./src/app/components/pages/stories/stories.component.ts");
/* harmony import */ var _components_pages_careers_careers_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/pages/careers/careers.component */ "./src/app/components/pages/careers/careers.component.ts");
/* harmony import */ var _components_partials_block_types_image_block_image_block_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/partials/block-types/image-block/image-block.component */ "./src/app/components/partials/block-types/image-block/image-block.component.ts");
/* harmony import */ var _components_partials_all_blocks_all_blocks_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/partials/all-blocks/all-blocks.component */ "./src/app/components/partials/all-blocks/all-blocks.component.ts");
/* harmony import */ var _components_partials_block_types_blog_block_blog_block_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/partials/block-types/blog-block/blog-block.component */ "./src/app/components/partials/block-types/blog-block/blog-block.component.ts");
/* harmony import */ var _components_partials_block_types_bg_image_block_bg_image_block_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/partials/block-types/bg-image-block/bg-image-block.component */ "./src/app/components/partials/block-types/bg-image-block/bg-image-block.component.ts");
/* harmony import */ var _components_partials_block_types_text_image_block_text_image_block_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/partials/block-types/text-image-block/text-image-block.component */ "./src/app/components/partials/block-types/text-image-block/text-image-block.component.ts");
/* harmony import */ var _components_partials_block_types_video_block_video_block_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/partials/block-types/video-block/video-block.component */ "./src/app/components/partials/block-types/video-block/video-block.component.ts");
/* harmony import */ var _components_pages_all_stories_all_stories_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/pages/all-stories/all-stories.component */ "./src/app/components/pages/all-stories/all-stories.component.ts");
/* harmony import */ var _components_partials_block_types_link_block_link_block_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/partials/block-types/link-block/link-block.component */ "./src/app/components/partials/block-types/link-block/link-block.component.ts");
/* harmony import */ var _directives_hover_opacity_directive__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./_directives/hover-opacity.directive */ "./src/app/_directives/hover-opacity.directive.ts");
/* harmony import */ var _directives_hover_rotate_directive__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./_directives/hover-rotate.directive */ "./src/app/_directives/hover-rotate.directive.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _components_pages_about_about_desc_about_desc_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/pages/about/about-desc/about-desc.component */ "./src/app/components/pages/about/about-desc/about-desc.component.ts");
/* harmony import */ var _components_pages_vacancy_vacancy_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/pages/vacancy/vacancy.component */ "./src/app/components/pages/vacancy/vacancy.component.ts");
/* harmony import */ var _components_pages_vacancy_vacancy_desc_vacancy_desc_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/pages/vacancy/vacancy-desc/vacancy-desc.component */ "./src/app/components/pages/vacancy/vacancy-desc/vacancy-desc.component.ts");





























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _components_pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_6__["ContactComponent"],
                _components_pages_about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"],
                _components_partials_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_8__["SidebarComponent"],
                _components_pages_work_work_component__WEBPACK_IMPORTED_MODULE_11__["WorkComponent"],
                _components_pages_stories_stories_component__WEBPACK_IMPORTED_MODULE_12__["StoriesComponent"],
                _components_pages_careers_careers_component__WEBPACK_IMPORTED_MODULE_13__["CareersComponent"],
                _components_partials_block_types_image_block_image_block_component__WEBPACK_IMPORTED_MODULE_14__["ImageBlockComponent"],
                _components_partials_all_blocks_all_blocks_component__WEBPACK_IMPORTED_MODULE_15__["AllBlocksComponent"],
                _components_partials_block_types_blog_block_blog_block_component__WEBPACK_IMPORTED_MODULE_16__["BlogBlockComponent"],
                _components_partials_block_types_bg_image_block_bg_image_block_component__WEBPACK_IMPORTED_MODULE_17__["BgImageBlockComponent"],
                _components_partials_block_types_text_image_block_text_image_block_component__WEBPACK_IMPORTED_MODULE_18__["TextImageBlockComponent"],
                _components_partials_block_types_video_block_video_block_component__WEBPACK_IMPORTED_MODULE_19__["VideoBlockComponent"],
                _components_pages_all_stories_all_stories_component__WEBPACK_IMPORTED_MODULE_20__["AllStoriesComponent"],
                _components_partials_block_types_link_block_link_block_component__WEBPACK_IMPORTED_MODULE_21__["LinkBlockComponent"],
                _directives_hover_opacity_directive__WEBPACK_IMPORTED_MODULE_22__["HoverOpacityDirective"],
                _directives_hover_rotate_directive__WEBPACK_IMPORTED_MODULE_23__["HoverRotateDirective"],
                _components_pages_about_about_desc_about_desc_component__WEBPACK_IMPORTED_MODULE_26__["AboutDescComponent"],
                _components_pages_vacancy_vacancy_component__WEBPACK_IMPORTED_MODULE_27__["VacancyComponent"],
                _components_pages_vacancy_vacancy_desc_vacancy_desc_component__WEBPACK_IMPORTED_MODULE_28__["VacancyDescComponent"],
            ],
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_9__["CarouselModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_24__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_24__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_25__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_25__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_25__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_25__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_25__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_25__["MatButtonModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/pages/about/about-desc/about-desc.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/pages/about/about-desc/about-desc.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"custom-container custom-page\">\n    <div class=\"about-desc\">\n        <h2 class=\"about-desc-sub-title\">WE’RE A BUNCH OF</h2>\n        <h1 class=\"about-desc-title\">\n            DO GOOD, FEEL GOOD.\n        </h1>\n        <p class=\"about-desc-description\">We love to share our experiences in everyday life, we have some interesting\n            stories to share and pod casts with some good friends with interesting backgrounds and also you will find Big\n            ideas, food for thought and matters of opinion.</p>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/pages/about/about-desc/about-desc.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/components/pages/about/about-desc/about-desc.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".custom-page {\n  border: none !important;\n  padding: 200px; }\n  .custom-page .about-desc-title {\n    font-family: Open Sansf;\n    font-size: 80px;\n    font-weight: 800;\n    line-height: 1.36;\n    letter-spacing: -3.2px; }\n  .custom-page .about-desc-sub-title {\n    font-family: Open Sans;\n    font-size: 22px;\n    font-weight: 600;\n    line-height: 1.45;\n    letter-spacing: -0.4px; }\n  .custom-page .about-desc-description {\n    font-family: Open Sans;\n    font-size: 22px;\n    font-weight: 600;\n    line-height: 1.36;\n    letter-spacing: -0.4px;\n    color: #000a1d; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9hYm91dC9hYm91dC1kZXNjL0M6XFxVc2Vyc1xcTW9kZWxpbmdcXERlc2t0b3BcXGFuZ3VsYXJcXG5pa2FcXGNsaWVudC9zcmNcXGFwcFxcY29tcG9uZW50c1xccGFnZXNcXGFib3V0XFxhYm91dC1kZXNjXFxhYm91dC1kZXNjLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGNBQWMsRUFBQTtFQUZoQjtJQUtJLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixzQkFBc0IsRUFBQTtFQVQxQjtJQWFJLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixzQkFBc0IsRUFBQTtFQWpCMUI7SUFxQkksc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLHNCQUFzQjtJQUN0QixjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BhZ2VzL2Fib3V0L2Fib3V0LWRlc2MvYWJvdXQtZGVzYy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jdXN0b20tcGFnZSB7XHJcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZzogMjAwcHg7XHJcblxyXG4gIC5hYm91dC1kZXNjLXRpdGxlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnNmO1xyXG4gICAgZm9udC1zaXplOiA4MHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjM2O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0zLjJweDtcclxuICB9XHJcblxyXG4gIC5hYm91dC1kZXNjLXN1Yi10aXRsZSB7XHJcbiAgICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjQ1O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcclxuICB9XHJcblxyXG4gIC5hYm91dC1kZXNjLWRlc2NyaXB0aW9ue1xyXG4gICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMS4zNjtcclxuICAgIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XHJcbiAgICBjb2xvcjogIzAwMGExZDtcclxuICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/pages/about/about-desc/about-desc.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/pages/about/about-desc/about-desc.component.ts ***!
  \***************************************************************************/
/*! exports provided: AboutDescComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutDescComponent", function() { return AboutDescComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutDescComponent = /** @class */ (function () {
    function AboutDescComponent() {
    }
    AboutDescComponent.prototype.ngOnInit = function () {
    };
    AboutDescComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about-desc',
            template: __webpack_require__(/*! ./about-desc.component.html */ "./src/app/components/pages/about/about-desc/about-desc.component.html"),
            styles: [__webpack_require__(/*! ./about-desc.component.scss */ "./src/app/components/pages/about/about-desc/about-desc.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutDescComponent);
    return AboutDescComponent;
}());



/***/ }),

/***/ "./src/app/components/pages/about/about.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/pages/about/about.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"custom-container \">\r\n  <!--<h1 style=\"text-align: center;padding: 50px\">-->\r\n    <!--About Us-->\r\n  <!--</h1>-->\r\n\r\n  <div class=\"row\">\r\n\r\n    <div class=\"col-3\">\r\n    <div class=\"img-wrapper img\">\r\n      <img src=\"../../../../assets/images/banner.PNG\" alt=\"image\">\r\n    </div>\r\n    <div class=\"block-title\">Electric imp</div>\r\n  </div>\r\n    <div class=\"col-3\">\r\n      <div class=\"img-wrapper img\">\r\n        <img src=\"../../../../assets/images/banner.PNG\" alt=\"image\">\r\n      </div>\r\n      <div class=\"block-title\">Tanaka</div>\r\n    </div>\r\n    <div class=\"col-3\">\r\n      <div class=\"img-wrapper img\">\r\n        <img src=\"../../../../assets/images/banner.PNG\" alt=\"image\">\r\n      </div>\r\n      <div class=\"block-title\">Some title</div>\r\n    </div>\r\n    <div class=\"col-3\">\r\n      <div class=\"img-wrapper img\">\r\n        <img src=\"../../../../assets/images/banner.PNG\" alt=\"image\">\r\n      </div>\r\n      <div class=\"block-title\">Electric imp</div>\r\n    </div>\r\n    <div class=\"col-3\">\r\n      <div class=\"img-wrapper img\">\r\n        <img src=\"../../../../assets/images/banner.PNG\" alt=\"image\">\r\n      </div>\r\n      <div class=\"block-title\">Other title</div>\r\n    </div>\r\n    <div class=\"col-3\">\r\n      <div class=\"img-wrapper img\">\r\n        <img src=\"../../../../assets/images/banner.PNG\" alt=\"image\">\r\n      </div>\r\n      <div class=\"block-title\">Tanaka</div>\r\n    </div>\r\n    <div class=\"col-3\">\r\n      <div class=\"img-wrapper img\">\r\n        <img src=\"../../../../assets/images/banner.PNG\" alt=\"image\">\r\n      </div>\r\n      <div class=\"block-title\">Electric imp</div>\r\n    </div>\r\n    <div class=\"col-3\">\r\n      <div class=\"img-wrapper img\">\r\n        <img src=\"../../../../assets/images/banner.PNG\" alt=\"image\">\r\n      </div>\r\n      <div class=\"block-title\">Something else</div>\r\n    </div>\r\n    <div class=\"col-3\">\r\n      <div class=\"img-wrapper img\">\r\n        <img src=\"../../../../assets/images/banner.PNG\" alt=\"image\">\r\n      </div>\r\n      <div class=\"block-title\">Electric imp</div>\r\n    </div>\r\n    <div class=\"col-3\">\r\n      <div class=\"img-wrapper img\">\r\n        <img src=\"../../../../assets/images/banner.PNG\" alt=\"image\">\r\n      </div>\r\n      <div class=\"block-title\">Tanaka</div>\r\n    </div>\r\n    <div class=\"col-3\">\r\n      <div class=\"img-wrapper img\">\r\n        <img src=\"../../../../assets/images/banner.PNG\" alt=\"image\">\r\n      </div>\r\n      <div class=\"block-title\">Some title</div>\r\n    </div>\r\n    <div class=\"col-3\">\r\n      <div class=\"img-wrapper img\">\r\n        <img src=\"../../../../assets/images/banner.PNG\" alt=\"image\">\r\n      </div>\r\n      <div class=\"block-title\">Electric imp</div>\r\n    </div>\r\n    <div class=\"col-3\">\r\n      <div class=\"img-wrapper img\">\r\n        <img src=\"../../../../assets/images/banner.PNG\" alt=\"image\">\r\n      </div>\r\n      <div class=\"block-title\">Other title</div>\r\n    </div>\r\n    <div class=\"col-3\">\r\n      <div class=\"img-wrapper img\">\r\n        <img src=\"../../../../assets/images/banner.PNG\" alt=\"image\">\r\n      </div>\r\n      <div class=\"block-title\">Tanaka</div>\r\n    </div>\r\n    <div class=\"col-3\">\r\n      <div class=\"img-wrapper img\">\r\n        <img src=\"../../../../assets/images/banner.PNG\" alt=\"image\">\r\n      </div>\r\n      <div class=\"block-title\">Electric imp</div>\r\n    </div>\r\n    <div class=\"col-3\">\r\n      <div class=\"img-wrapper img\">\r\n        <img src=\"../../../../assets/images/banner.PNG\" alt=\"image\">\r\n      </div>\r\n      <div class=\"block-title\">Something else</div>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/pages/about/about.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/pages/about/about.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img-wrapper {\n  height: 250px; }\n  .img-wrapper img {\n    width: 100%;\n    height: 100%;\n    -o-object-fit: cover;\n       object-fit: cover; }\n  .block-title {\n  margin: 25px 0;\n  font-family: Open Sans;\n  font-size: 22px;\n  font-weight: 600;\n  line-height: 1.45;\n  letter-spacing: -0.4px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9hYm91dC9DOlxcVXNlcnNcXE1vZGVsaW5nXFxEZXNrdG9wXFxhbmd1bGFyXFxuaWthXFxjbGllbnQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHBhZ2VzXFxhYm91dFxcYWJvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSxhQUFhLEVBQUE7RUFGZjtJQUlHLFdBQVc7SUFDWCxZQUFZO0lBQ1osb0JBQWlCO09BQWpCLGlCQUFpQixFQUFBO0VBR3BCO0VBQ0UsY0FBYztFQUNkLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixzQkFBc0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1nLXdyYXBwZXJ7XHJcbiAgLy93aWR0aDogOTUlO1xyXG4gIGhlaWdodDogMjUwcHg7XHJcbiBpbWd7XHJcbiAgIHdpZHRoOiAxMDAlO1xyXG4gICBoZWlnaHQ6IDEwMCU7XHJcbiAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gfVxyXG59XHJcbi5ibG9jay10aXRsZXtcclxuICBtYXJnaW46IDI1cHggMDtcclxuICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjQ1O1xyXG4gIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/pages/about/about.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/pages/about/about.component.ts ***!
  \***********************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/components/pages/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.scss */ "./src/app/components/pages/about/about.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/components/pages/all-stories/all-stories.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/pages/all-stories/all-stories.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  all-stories works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/pages/all-stories/all-stories.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/pages/all-stories/all-stories.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvYWxsLXN0b3JpZXMvYWxsLXN0b3JpZXMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/pages/all-stories/all-stories.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/pages/all-stories/all-stories.component.ts ***!
  \***********************************************************************/
/*! exports provided: AllStoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllStoriesComponent", function() { return AllStoriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AllStoriesComponent = /** @class */ (function () {
    function AllStoriesComponent() {
    }
    AllStoriesComponent.prototype.ngOnInit = function () {
    };
    AllStoriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-all-stories',
            template: __webpack_require__(/*! ./all-stories.component.html */ "./src/app/components/pages/all-stories/all-stories.component.html"),
            styles: [__webpack_require__(/*! ./all-stories.component.scss */ "./src/app/components/pages/all-stories/all-stories.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AllStoriesComponent);
    return AllStoriesComponent;
}());



/***/ }),

/***/ "./src/app/components/pages/careers/careers.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/pages/careers/careers.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"custom-container custom-page\">\r\n  <h1 style=\"text-align: center;padding: 50px\">\r\n    Careers\r\n  </h1>\r\n  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat nostrum obcaecati rerum soluta unde? Consectetur\r\n    dignissimos dolore ducimus eum, excepturi explicabo in iste nostrum obcaecati omnis quod reiciendis sequi suscipit,\r\n    totam vel. Mollitia odit, saepe! A ad, atque beatae consectetur debitis est illum ipsam molestiae non officia quas\r\n    quia quidem repellat! Adipisci aliquid delectus dicta, doloremque dolorum excepturi explicabo impedit quia totam\r\n    vel.\r\n    A aliquid animi asperiores autem commodi corporis delectus deserunt dicta doloribus eum explicabo impedit in iste\r\n    iure\r\n    molestias nobis obcaecati officia officiis quasi quibusdam quis, quisquam quo quod, sed tempore temporibus unde\r\n    voluptas? Ab adipisci aspernatur consectetur, culpa dolor ducimus, explicabo facilis incidunt maxime odit vitae\r\n    voluptate? Accusantium adipisci alias aliquid architecto atque consectetur consequatur culpa dicta dignissimos eaque\r\n    enim est eum id illo illum in inventore nesciunt nihil odit perspiciatis placeat praesentium quidem quisquam quos\r\n    reiciendis, saepe, sapiente similique suscipit tempora temporibus vero voluptate voluptatibus voluptatum. Autem\r\n    dolor\r\n    enim eos fugit nesciunt nisi officia possimus quibusdam ullam. Aliquid aperiam consequatur consequuntur dignissimos\r\n    dolore eaque eligendi ex explicabo fuga harum id, ipsa ipsam itaque maiores modi nam natus nulla numquam obcaecati\r\n    odit omnis optio, placeat praesentium quas recusandae repudiandae saepe sed tenetur veniam voluptates. A commodi et\r\n    eveniet, facilis illo laboriosam libero maxime modi nemo perferendis possimus quaerat reprehenderit, sunt veniam\r\n    voluptas? Amet animi aperiam aspernatur assumenda atque aut consequuntur cumque cupiditate deleniti, dolore ducimus\r\n    eius eligendi error esse et facilis id, impedit ipsum laboriosam libero minus nemo odio quaerat quas quasi quis\r\n    quisquam quod repellendus repudiandae similique sunt veritatis voluptatem voluptatibus! A aspernatur consequuntur\r\n    eligendi ipsum magnam officiis porro rerum voluptatibus. Accusamus assumenda dolor doloremque possimus repellat sed\r\n    ut. Ab ad cupiditate eligendi eveniet magnam quaerat quam quasi recusandae repellendus similique. Magnam modi\r\n    molestias placeat! Adipisci architecto commodi fugiat inventore iste labore maiores nulla obcaecati porro similique.\r\n    A\r\n    at cum, cupiditate error perferendis quisquam temporibus. Ab accusamus ad consequatur dignissimos, doloribus ea\r\n    earum\r\n    explicabo facilis illo ipsam ipsum libero molestias quaerat recusandae repellendus sapiente sequi sunt temporibus\r\n    totam vel vero voluptate voluptates! Ab animi autem cum cupiditate, delectus doloribus excepturi facere, facilis\r\n    illum\r\n    incidunt libero molestias nesciunt saepe sit tempora voluptate, voluptatibus. Aliquam amet consequuntur deleniti\r\n    doloremque molestiae molestias placeat quam tenetur! Dicta dolore eaque exercitationem, libero numquam pariatur\r\n    vero?\r\n    Aspernatur commodi consequuntur cum delectus deserunt dignissimos distinctio ea eius eligendi eos explicabo illum\r\n    ipsam itaque labore laudantium magni minima mollitia natus nemo nesciunt nisi nobis nostrum nulla officiis\r\n    perspiciatis provident quasi quia quisquam quod recusandae reiciendis repellendus, sint unde. A ab assumenda autem\r\n    dignissimos dolor, doloribus est incidunt maiores minus quasi reiciendis reprehenderit saepe veniam, voluptatem\r\n    voluptates! A aliquid amet atque, eos mollitia nemo possimus quidem quisquam ratione repellat? Corporis excepturi\r\n    facere iste omnis quae quam quia repellendus unde. Aliquid architecto aspernatur dicta doloremque dolores dolorum\r\n    est\r\n    eveniet, expedita fuga illo illum minima nam quas quis quisquam repudiandae, suscipit tenetur. A ab asperiores ipsa,\r\n    modi numquam quaerat qui repudiandae sed sint vel! Consequuntur iusto magni minus officia, sequi vitae. At atque\r\n    blanditiis eius esse excepturi facere minus quibusdam ut. Accusantium aut corporis, dolor earum hic nemo placeat,\r\n    quae\r\n    quas repellat sunt, tenetur vel vero voluptate! Atque commodi dicta eaque ex maxime mollitia provident quibusdam\r\n    reiciendis suscipit voluptatum. A ad alias aspernatur, dicta, dolor earum excepturi exercitationem ipsa, ipsam magni\r\n    numquam quasi qui vitae. Consequuntur cumque esse id in magni quo ratione. Aliquid cupiditate debitis dignissimos\r\n    error expedita laboriosam natus, odio pariatur quae quas quos, voluptatem? Adipisci alias aperiam consequatur\r\n    debitis\r\n    earum, enim et, ex expedita facere nulla numquam quisquam quo ratione rem tempora! Modi mollitia possimus quisquam.\r\n    Eaque exercitationem maxime porro quia reprehenderit. Error inventore minima placeat praesentium totam. Aliquam aut\r\n    deserunt doloremque, harum in, magni maxime minima quos sapiente, sed sunt totam. Delectus eaque, veniam? Culpa\r\n    earum\r\n    fuga illo itaque maxime natus quisquam! Ad dolores, doloribus fugiat id nemo nihil porro, quia, quod rem tenetur\r\n    totam\r\n    voluptatem voluptatibus. Debitis excepturi facere optio? Exercitationem fugiat repudiandae velit voluptatibus!\r\n    Accusantium alias aspernatur at autem beatae consequuntur cumque cupiditate dicta et eveniet ex facilis harum,\r\n    magnam,\r\n    necessitatibus neque non odit porro quae quaerat qui quia reprehenderit repudiandae sequi sint tenetur totam veniam\r\n    voluptatibus. Asperiores at dolorem eaque eius fugit illo illum labore laudantium nisi numquam perspiciatis quas,\r\n    quidem tempora. A, aliquam aspernatur at culpa cum doloremque earum enim excepturi fugit harum in ipsam magnam\r\n    molestiae necessitatibus non numquam obcaecati odit omnis pariatur perspiciatis porro quae quisquam quod quos\r\n    repellat\r\n    sed, similique sit totam veritatis vero? Aperiam asperiores at blanditiis cum dicta doloribus exercitationem\r\n    explicabo\r\n    fugiat ipsum, optio quia repellendus sint velit, vero, voluptas. Cumque cupiditate expedita facilis ipsam ipsum\r\n    laborum maiores nesciunt obcaecati odit quaerat rem, rerum unde vero vitae voluptates. Blanditiis dolorem earum eius\r\n    eveniet excepturi expedita, harum laudantium, nostrum omnis perferendis praesentium quibusdam suscipit vitae.\r\n    Aliquam\r\n    commodi debitis eius, error fugiat inventore ipsam minima minus, nobis quam quia quidem quisquam reprehenderit totam\r\n    voluptate! Consequatur doloremque, ipsa minima mollitia nostrum voluptas! Esse ipsum itaque natus non optio\r\n    perferendis tempora. Accusantium amet animi aperiam architecto asperiores assumenda beatae commodi consequatur,\r\n    consequuntur, doloribus et excepturi fugiat illum iste laboriosam magnam neque officia optio, provident quam quasi\r\n    quis quos reiciendis tempore totam velit veniam voluptas. Accusamus aut, eaque eius eum exercitationem, explicabo\r\n    fugiat iure laborum, nihil optio possimus quidem sint tempore tenetur vel vitae voluptatum? Atque dicta dolorem ea,\r\n    exercitationem iste magnam nulla obcaecati possimus ratione sunt. Ab aut consectetur consequuntur culpa hic magni\r\n    officiis, optio reiciendis! At beatae exercitationem harum nostrum quisquam? Ab aliquid eligendi nisi placeat quas\r\n    quibusdam sapiente soluta voluptates! A alias deleniti dolorem eius esse, ex fugit illum ipsa labore minima nihil\r\n    nobis numquam quam quis sunt ullam veniam! A adipisci eius, mollitia nihil nisi perferendis sint velit. Accusantium\r\n    aliquam at blanditiis corporis dicta doloremque ea facere ipsam itaque labore laudantium magnam mollitia nulla\r\n    pariatur praesentium quod quos repellat, repellendus saepe vero voluptas voluptatibus voluptatum. Ad consequuntur\r\n    maxime quidem reprehenderit veritatis voluptas voluptatem? Adipisci amet, architecto dolorem explicabo impedit\r\n    itaque,\r\n    iure maiores minima minus modi molestias natus nesciunt nobis non placeat porro quisquam repellendus vitae.</p>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/pages/careers/careers.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/pages/careers/careers.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvY2FyZWVycy9jYXJlZXJzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/pages/careers/careers.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/pages/careers/careers.component.ts ***!
  \***************************************************************/
/*! exports provided: CareersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CareersComponent", function() { return CareersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CareersComponent = /** @class */ (function () {
    function CareersComponent() {
    }
    CareersComponent.prototype.ngOnInit = function () {
    };
    CareersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-careers',
            template: __webpack_require__(/*! ./careers.component.html */ "./src/app/components/pages/careers/careers.component.html"),
            styles: [__webpack_require__(/*! ./careers.component.scss */ "./src/app/components/pages/careers/careers.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CareersComponent);
    return CareersComponent;
}());



/***/ }),

/***/ "./src/app/components/pages/contact/contact.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/pages/contact/contact.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"contact custom-page\">\r\n    <div class=\"row p-0\">\r\n        <div class=\"contact-title-wrapper col-4\">\r\n            <p class=\"contact-title\">Feeling good about working with us?</p>\r\n            <p class=\"contact-description\">Please provide a brief description of your bussines and well do our best to\r\n                get back to you in a timely\r\n                manner.\r\n            </p>\r\n\r\n        </div>\r\n        <div class=\"col-10\">\r\n            <form [formGroup]=\"form\" (ngSubmit)=\"submit()\" class=\"\">\r\n\r\n                <mat-grid-list cols=\"2\" rowHeight=\"100px\">\r\n                    <!--<input type=\"hidden\" formControlName=\"$key\">-->\r\n\r\n                    <mat-grid-tile [colspan]=\"1\" [rowspan]=\"1\">\r\n                        <mat-form-field>\r\n                            <input formControlName=\"fullName\" matInput placeholder=\"Name\">\r\n                            <mat-error>Name required</mat-error>\r\n                        </mat-form-field>\r\n                    </mat-grid-tile>\r\n\r\n\r\n                    <mat-grid-tile [colspan]=\"1\" [rowspan]=\"1\">\r\n                        <mat-form-field>\r\n                            <input formControlName=\"email\" matInput placeholder=\"Email\">\r\n                            <mat-error *ngIf=\"form.controls['email'].errors?.required\">Email required</mat-error>\r\n                            <mat-error *ngIf=\"form.controls['email'].errors?.email\">Invalid email.</mat-error>\r\n                        </mat-form-field>\r\n                    </mat-grid-tile>\r\n\r\n                    <mat-grid-tile [colspan]=\"1\" [rowspan]=\"1\">\r\n                        <mat-form-field>\r\n                            <input formControlName=\"date\" matInput [matDatepicker]=\"picker\" placeholder=\"Date\">\r\n                            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                            <mat-datepicker #picker></mat-datepicker>\r\n                        </mat-form-field>\r\n\r\n                    </mat-grid-tile>\r\n\r\n                    <mat-grid-tile [colspan]=\"1\" [rowspan]=\"1\">\r\n                        <mat-form-field>\r\n                            <input formControlName=\"eventName\" matInput placeholder=\"EventName\">\r\n                            <mat-error *ngIf=\"form.controls['eventName'].errors\">Event Name required</mat-error>\r\n                        </mat-form-field>\r\n                    </mat-grid-tile>\r\n                </mat-grid-list>\r\n\r\n\r\n                <mat-grid-list cols=\"2\" rowHeight=\"300px\">\r\n                    <mat-grid-tile colspan=\"2\">\r\n                        <div class=\"area\">\r\n                            <label>Short brief</label>\r\n                            <textarea formControlName=\"text\" rows=\"5\" cols=\"100\" matInput></textarea>\r\n                        </div>\r\n                    </mat-grid-tile>\r\n                </mat-grid-list>\r\n\r\n\r\n                <div class=\"button-row text-right\">\r\n                    <button mat-raised-button type=\"submit\" [disabled]=\"form.invalid\">SUBMIT</button>\r\n                </div>\r\n\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n<!--<form [formGroup]=\"myForm\" novalidate (ngSubmit)=\"submit()\">-->\r\n<!--<div class=\"form-group col-6\">-->\r\n\r\n<!--<input class=\"form-control\" name=\"name\" formControlName=\"userName\" />-->\r\n<!--<label>Name</label>-->\r\n<!--<div class=\"alert alert-danger\"-->\r\n<!--*ngIf=\"myForm.controls['userName'].invalid && myForm.controls['userName'].touched\">-->\r\n<!--No name specified-->\r\n<!--</div>-->\r\n<!--</div>-->\r\n<!--<div class=\"form-group col-6\">-->\r\n\r\n<!--<input class=\"form-control\" name=\"email\" formControlName=\"userEmail\" />-->\r\n<!--<label>Email</label>-->\r\n<!--<div class=\"alert alert-danger\"-->\r\n<!--*ngIf=\"myForm.controls['userEmail'].invalid && myForm.controls['userEmail'].touched\">-->\r\n<!--Incorrect email-->\r\n<!--</div>-->\r\n<!--</div>-->\r\n<!--<div class=\"form-group col-6\">-->\r\n\r\n<!--<input class=\"form-control\" formControlName=\"data\" />-->\r\n<!--<label *ngIf=\"myForm.controls['data'].invalid && myForm.controls['data'].touched\">Data</label>-->\r\n<!--<label ></label>-->\r\n<!--</div>-->\r\n<!--<div class=\"form-group col-6\">-->\r\n\r\n<!--<input class=\"form-control\" name=\"name\" formControlName=\"eventName\" />-->\r\n<!--<label>Event name</label>-->\r\n<!--<div class=\"alert alert-danger\"-->\r\n<!--*ngIf=\"myForm.controls['eventName'].invalid && myForm.controls['eventName'].touched\">-->\r\n<!--No event name specified-->\r\n<!--</div>-->\r\n<!--</div>-->\r\n<!--<div class=\"form-group\">-->\r\n<!--<label>Event name</label>-->\r\n<!--<textarea name=\"text\" id=\"\" cols=\"100\" rows=\"5\"></textarea>-->\r\n<!--</div>-->\r\n<!--<div class=\"form-group\">-->\r\n\r\n<!--<button class=\"btn btn-dark\" [disabled]=\"myForm.invalid\">-->\r\n<!--Submit-->\r\n<!--</button>-->\r\n<!--</div>-->\r\n<!--</form>`-->\r\n\r\n\r\n<!--</div>-->\r\n<!--<div class=\"example-container\">-->\r\n<!--<mat-form-field>-->\r\n<!--<input matInput placeholder=\"Input\">-->\r\n<!--</mat-form-field>-->\r\n\r\n<!--<mat-form-field>-->\r\n<!--<textarea matInput placeholder=\"Textarea\"></textarea>-->\r\n<!--</mat-form-field>-->\r\n\r\n<!--<mat-form-field>-->\r\n<!--<mat-select placeholder=\"Select\">-->\r\n<!--<mat-option value=\"option\">Option</mat-option>-->\r\n<!--</mat-select>-->\r\n<!--</mat-form-field>-->\r\n<!--</div>-->\r\n"

/***/ }),

/***/ "./src/app/components/pages/contact/contact.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/pages/contact/contact.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".custom-page {\n  padding: 100px 100px 0 100px; }\n\n.contact-title {\n  font-weight: bold; }\n\n.mat-grid-tile .mat-figure {\n  justify-content: unset !important; }\n\n.area textarea {\n  border: 1px solid grey;\n  width: 97.5%;\n  height: 80%;\n  resize: none;\n  padding: 10px;\n  outline: none; }\n\n.button-row {\n  width: 95%; }\n\nbutton {\n  width: 200px;\n  height: 40px;\n  color: white !important;\n  background: black !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9jb250YWN0L0M6XFxVc2Vyc1xcTW9kZWxpbmdcXERlc2t0b3BcXGFuZ3VsYXJcXG5pa2FcXGNsaWVudC9zcmNcXGFwcFxcY29tcG9uZW50c1xccGFnZXNcXGNvbnRhY3RcXGNvbnRhY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw0QkFBNEIsRUFBQTs7QUFFOUI7RUFDRSxpQkFBaUIsRUFBQTs7QUFLbkI7RUFDRSxpQ0FBaUMsRUFBQTs7QUFFbkM7RUFDRSxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLGFBQWEsRUFBQTs7QUFHZjtFQUNFLFVBQVUsRUFBQTs7QUFFWjtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLDRCQUE0QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3VzdG9tLXBhZ2V7XHJcbiAgcGFkZGluZzogMTAwcHggMTAwcHggMCAxMDBweDtcclxufVxyXG4uY29udGFjdC10aXRsZXtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuXHJcblxyXG4ubWF0LWdyaWQtdGlsZSAubWF0LWZpZ3VyZXtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmFyZWEgdGV4dGFyZWF7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcclxuICB3aWR0aDogOTcuNSU7XHJcbiAgaGVpZ2h0OiA4MCU7XHJcbiAgcmVzaXplOiBub25lO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuXHJcbn1cclxuLmJ1dHRvbi1yb3d7XHJcbiAgd2lkdGg6IDk1JTtcclxufVxyXG5idXR0b257XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kOiBibGFjayAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/pages/contact/contact.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/pages/contact/contact.component.ts ***!
  \***************************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_contact_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../_services/contact.service */ "./src/app/_services/contact.service.ts");




var ContactComponent = /** @class */ (function () {
    function ContactComponent(contactService) {
        this.contactService = contactService;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            fullName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            date: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            eventName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5)]),
            text: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent.prototype.submit = function () {
        this.contactService.sendMail(this.form);
    };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/components/pages/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.scss */ "./src/app/components/pages/contact/contact.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_contact_service__WEBPACK_IMPORTED_MODULE_3__["ContactService"]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/components/pages/home/home.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/pages/home/home.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"home-page bg-light\">\r\n\r\n    <owl-carousel-o [options]=\"options\">\r\n\r\n        <ng-template *ngFor=\"let item of slides, let i = index\" class=\"h-100\" carouselSlide>\r\n            <div class=\"my-slider-item\"\r\n                 [ngStyle]=\"{'background-image': 'url(' + item.url + ')'}\">\r\n                <div class=\"item-content\">\r\n                    <div class=\"row\">\r\n                        <div class=\"item-text col-10\">\r\n                            <div class=\"item-title\">{{item.title}}</div>\r\n                            <div class=\"item-description\">{{ item.description }}</div>\r\n                        </div>\r\n                        <div class=\"items-counter col-2\">\r\n                            <span class=\"float-right\">{{i}}/{{slides.length}}</span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </ng-template>\r\n\r\n\r\n    </owl-carousel-o>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/pages/home/home.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/pages/home/home.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".home-page {\n  height: -webkit-fill-available; }\n\n.my-slider-item {\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: calc(100vh - 100px);\n  padding: 50px; }\n\n.item-content {\n  position: relative;\n  top: 100%;\n  -webkit-transform: translateY(-100%);\n  transform: translateY(-100%); }\n\n.item-title, .items-counter {\n  font-size: 35px;\n  font-weight: bold;\n  color: #ffffff; }\n\n.item-description {\n  font-size: 20px;\n  color: #ffffff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9ob21lL0M6XFxVc2Vyc1xcTW9kZWxpbmdcXERlc2t0b3BcXGFuZ3VsYXJcXG5pa2FcXGNsaWVudC9zcmNcXGFwcFxcY29tcG9uZW50c1xccGFnZXNcXGhvbWVcXGhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw4QkFBOEIsRUFBQTs7QUFHaEM7RUFDRSw0QkFBNEI7RUFDNUIsc0JBQXNCO0VBQ3RCLDJCQUEyQjtFQUMzQixhQUFhLEVBQUE7O0FBRWY7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULG9DQUFvQztFQUlwQyw0QkFBNEIsRUFBQTs7QUFFOUI7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGNBQWMsRUFBQTs7QUFFaEI7RUFDRSxlQUFlO0VBQ2YsY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaG9tZS1wYWdle1xyXG4gIGhlaWdodDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcclxufVxyXG5cclxuLm15LXNsaWRlci1pdGVte1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxMDBweCk7XHJcbiAgcGFkZGluZzogNTBweDtcclxufVxyXG4uaXRlbS1jb250ZW50e1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDEwMCU7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcclxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcclxuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XHJcbn1cclxuLml0ZW0tdGl0bGUsIC5pdGVtcy1jb3VudGVye1xyXG4gIGZvbnQtc2l6ZTogMzVweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG4uaXRlbS1kZXNjcmlwdGlvbntcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/pages/home/home.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/pages/home/home.component.ts ***!
  \*********************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_slider_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../_services/slider.service */ "./src/app/_services/slider.service.ts");



var HomeComponent = /** @class */ (function () {
    function HomeComponent(slider) {
        this.slider = slider;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getParams();
    };
    HomeComponent.prototype.getParams = function () {
        this.options = this.slider.sliderOptions();
        this.slides = this.slider.getImages();
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        this.options = null;
        this.slides = null;
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/pages/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/components/pages/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_slider_service__WEBPACK_IMPORTED_MODULE_2__["SliderService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/pages/stories/stories.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/pages/stories/stories.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div class=\"custom-container custom-page\">\r\n  <h3>{{id}}</h3>\r\n\r\n  <h1 style=\"text-align: center;padding: 50px\">\r\n    {{ blog.title }}\r\n  </h1>\r\n  <div class=\"blog-image\">\r\n    <img [src]=\"blog.image\" alt=\"\">\r\n  </div>\r\n  <div class=\"description\">\r\n    {{blog.description}}\r\n  </div>\r\n  <div class=\"content\">\r\n    {{ blog.content }}\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/pages/stories/stories.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/pages/stories/stories.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvc3Rvcmllcy9zdG9yaWVzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/pages/stories/stories.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/pages/stories/stories.component.ts ***!
  \***************************************************************/
/*! exports provided: StoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoriesComponent", function() { return StoriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_component_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../_services/component.service */ "./src/app/_services/component.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");






var StoriesComponent = /** @class */ (function () {
    function StoriesComponent(document, route, servic) {
        this.document = document;
        this.route = route;
        this.servic = servic;
    }
    StoriesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeSubscription = this.route.params.subscribe(function (params) {
            _this.id = params['id'];
            _this.blog = _this.servic.getPost(_this.id);
            window.scrollTo(0, 0);
        });
    };
    StoriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-stories',
            template: __webpack_require__(/*! ./stories.component.html */ "./src/app/components/pages/stories/stories.component.html"),
            styles: [__webpack_require__(/*! ./stories.component.scss */ "./src/app/components/pages/stories/stories.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Document, _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_component_service__WEBPACK_IMPORTED_MODULE_3__["ComponentService"]])
    ], StoriesComponent);
    return StoriesComponent;
}());



/***/ }),

/***/ "./src/app/components/pages/vacancy/vacancy-desc/vacancy-desc.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/components/pages/vacancy/vacancy-desc/vacancy-desc.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  vacancy-desc works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/pages/vacancy/vacancy-desc/vacancy-desc.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/components/pages/vacancy/vacancy-desc/vacancy-desc.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvdmFjYW5jeS92YWNhbmN5LWRlc2MvdmFjYW5jeS1kZXNjLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/pages/vacancy/vacancy-desc/vacancy-desc.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/pages/vacancy/vacancy-desc/vacancy-desc.component.ts ***!
  \*********************************************************************************/
/*! exports provided: VacancyDescComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VacancyDescComponent", function() { return VacancyDescComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var VacancyDescComponent = /** @class */ (function () {
    function VacancyDescComponent() {
    }
    VacancyDescComponent.prototype.ngOnInit = function () {
    };
    VacancyDescComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-vacancy-desc',
            template: __webpack_require__(/*! ./vacancy-desc.component.html */ "./src/app/components/pages/vacancy/vacancy-desc/vacancy-desc.component.html"),
            styles: [__webpack_require__(/*! ./vacancy-desc.component.scss */ "./src/app/components/pages/vacancy/vacancy-desc/vacancy-desc.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], VacancyDescComponent);
    return VacancyDescComponent;
}());



/***/ }),

/***/ "./src/app/components/pages/vacancy/vacancy.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/pages/vacancy/vacancy.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  vacancy works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/pages/vacancy/vacancy.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/pages/vacancy/vacancy.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvdmFjYW5jeS92YWNhbmN5LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/pages/vacancy/vacancy.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/pages/vacancy/vacancy.component.ts ***!
  \***************************************************************/
/*! exports provided: VacancyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VacancyComponent", function() { return VacancyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var VacancyComponent = /** @class */ (function () {
    function VacancyComponent() {
    }
    VacancyComponent.prototype.ngOnInit = function () {
    };
    VacancyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-vacancy',
            template: __webpack_require__(/*! ./vacancy.component.html */ "./src/app/components/pages/vacancy/vacancy.component.html"),
            styles: [__webpack_require__(/*! ./vacancy.component.scss */ "./src/app/components/pages/vacancy/vacancy.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], VacancyComponent);
    return VacancyComponent;
}());



/***/ }),

/***/ "./src/app/components/pages/work/work.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/pages/work/work.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"custom-container custom-page\">\r\n  <h1 style=\"text-align: center;padding: 50px\">\r\n    Work\r\n  </h1>\r\n  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat nostrum obcaecati rerum soluta unde? Consectetur\r\n    dignissimos dolore ducimus eum, excepturi explicabo in iste nostrum obcaecati omnis quod reiciendis sequi suscipit,\r\n    totam vel. Mollitia odit, saepe! A ad, atque beatae consectetur debitis est illum ipsam molestiae non officia quas\r\n    quia quidem repellat! Adipisci aliquid delectus dicta, doloremque dolorum excepturi explicabo impedit quia totam\r\n    vel.\r\n    A aliquid animi asperiores autem commodi corporis delectus deserunt dicta doloribus eum explicabo impedit in iste\r\n    iure\r\n    molestias nobis obcaecati officia officiis quasi quibusdam quis, quisquam quo quod, sed tempore temporibus unde\r\n    voluptas? Ab adipisci aspernatur consectetur, culpa dolor ducimus, explicabo facilis incidunt maxime odit vitae\r\n    voluptate? Accusantium adipisci alias aliquid architecto atque consectetur consequatur culpa dicta dignissimos eaque\r\n    enim est eum id illo illum in inventore nesciunt nihil odit perspiciatis placeat praesentium quidem quisquam quos\r\n    reiciendis, saepe, sapiente similique suscipit tempora temporibus vero voluptate voluptatibus voluptatum. Autem\r\n    dolor\r\n    enim eos fugit nesciunt nisi officia possimus quibusdam ullam. Aliquid aperiam consequatur consequuntur dignissimos\r\n    dolore eaque eligendi ex explicabo fuga harum id, ipsa ipsam itaque maiores modi nam natus nulla numquam obcaecati\r\n    odit omnis optio, placeat praesentium quas recusandae repudiandae saepe sed tenetur veniam voluptates. A commodi et\r\n    eveniet, facilis illo laboriosam libero maxime modi nemo perferendis possimus quaerat reprehenderit, sunt veniam\r\n    voluptas? Amet animi aperiam aspernatur assumenda atque aut consequuntur cumque cupiditate deleniti, dolore ducimus\r\n    eius eligendi error esse et facilis id, impedit ipsum laboriosam libero minus nemo odio quaerat quas quasi quis\r\n    quisquam quod repellendus repudiandae similique sunt veritatis voluptatem voluptatibus! A aspernatur consequuntur\r\n    eligendi ipsum magnam officiis porro rerum voluptatibus. Accusamus assumenda dolor doloremque possimus repellat sed\r\n    ut. Ab ad cupiditate eligendi eveniet magnam quaerat quam quasi recusandae repellendus similique. Magnam modi\r\n    molestias placeat! Adipisci architecto commodi fugiat inventore iste labore maiores nulla obcaecati porro similique.\r\n    A\r\n    at cum, cupiditate error perferendis quisquam temporibus. Ab accusamus ad consequatur dignissimos, doloribus ea\r\n    earum\r\n    explicabo facilis illo ipsam ipsum libero molestias quaerat recusandae repellendus sapiente sequi sunt temporibus\r\n    totam vel vero voluptate voluptates! Ab animi autem cum cupiditate, delectus doloribus excepturi facere, facilis\r\n    illum\r\n    incidunt libero molestias nesciunt saepe sit tempora voluptate, voluptatibus. Aliquam amet consequuntur deleniti\r\n    doloremque molestiae molestias placeat quam tenetur! Dicta dolore eaque exercitationem, libero numquam pariatur\r\n    vero?\r\n    Aspernatur commodi consequuntur cum delectus deserunt dignissimos distinctio ea eius eligendi eos explicabo illum\r\n    ipsam itaque labore laudantium magni minima mollitia natus nemo nesciunt nisi nobis nostrum nulla officiis\r\n    perspiciatis provident quasi quia quisquam quod recusandae reiciendis repellendus, sint unde. A ab assumenda autem\r\n    dignissimos dolor, doloribus est incidunt maiores minus quasi reiciendis reprehenderit saepe veniam, voluptatem\r\n    voluptates! A aliquid amet atque, eos mollitia nemo possimus quidem quisquam ratione repellat? Corporis excepturi\r\n    facere iste omnis quae quam quia repellendus unde. Aliquid architecto aspernatur dicta doloremque dolores dolorum\r\n    est\r\n    eveniet, expedita fuga illo illum minima nam quas quis quisquam repudiandae, suscipit tenetur. A ab asperiores ipsa,\r\n    modi numquam quaerat qui repudiandae sed sint vel! Consequuntur iusto magni minus officia, sequi vitae. At atque\r\n    blanditiis eius esse excepturi facere minus quibusdam ut. Accusantium aut corporis, dolor earum hic nemo placeat,\r\n    quae\r\n    quas repellat sunt, tenetur vel vero voluptate! Atque commodi dicta eaque ex maxime mollitia provident quibusdam\r\n    reiciendis suscipit voluptatum. A ad alias aspernatur, dicta, dolor earum excepturi exercitationem ipsa, ipsam magni\r\n    numquam quasi qui vitae. Consequuntur cumque esse id in magni quo ratione. Aliquid cupiditate debitis dignissimos\r\n    error expedita laboriosam natus, odio pariatur quae quas quos, voluptatem? Adipisci alias aperiam consequatur\r\n    debitis\r\n    earum, enim et, ex expedita facere nulla numquam quisquam quo ratione rem tempora! Modi mollitia possimus quisquam.\r\n    Eaque exercitationem maxime porro quia reprehenderit. Error inventore minima placeat praesentium totam. Aliquam aut\r\n    deserunt doloremque, harum in, magni maxime minima quos sapiente, sed sunt totam. Delectus eaque, veniam? Culpa\r\n    earum\r\n    fuga illo itaque maxime natus quisquam! Ad dolores, doloribus fugiat id nemo nihil porro, quia, quod rem tenetur\r\n    totam\r\n    voluptatem voluptatibus. Debitis excepturi facere optio? Exercitationem fugiat repudiandae velit voluptatibus!\r\n    Accusantium alias aspernatur at autem beatae consequuntur cumque cupiditate dicta et eveniet ex facilis harum,\r\n    magnam,\r\n    necessitatibus neque non odit porro quae quaerat qui quia reprehenderit repudiandae sequi sint tenetur totam veniam\r\n    voluptatibus. Asperiores at dolorem eaque eius fugit illo illum labore laudantium nisi numquam perspiciatis quas,\r\n    quidem tempora. A, aliquam aspernatur at culpa cum doloremque earum enim excepturi fugit harum in ipsam magnam\r\n    molestiae necessitatibus non numquam obcaecati odit omnis pariatur perspiciatis porro quae quisquam quod quos\r\n    repellat\r\n    sed, similique sit totam veritatis vero? Aperiam asperiores at blanditiis cum dicta doloribus exercitationem\r\n    explicabo\r\n    fugiat ipsum, optio quia repellendus sint velit, vero, voluptas. Cumque cupiditate expedita facilis ipsam ipsum\r\n    laborum maiores nesciunt obcaecati odit quaerat rem, rerum unde vero vitae voluptates. Blanditiis dolorem earum eius\r\n    eveniet excepturi expedita, harum laudantium, nostrum omnis perferendis praesentium quibusdam suscipit vitae.\r\n    Aliquam\r\n    commodi debitis eius, error fugiat inventore ipsam minima minus, nobis quam quia quidem quisquam reprehenderit totam\r\n    voluptate! Consequatur doloremque, ipsa minima mollitia nostrum voluptas! Esse ipsum itaque natus non optio\r\n    perferendis tempora. Accusantium amet animi aperiam architecto asperiores assumenda beatae commodi consequatur,\r\n    consequuntur, doloribus et excepturi fugiat illum iste laboriosam magnam neque officia optio, provident quam quasi\r\n    quis quos reiciendis tempore totam velit veniam voluptas. Accusamus aut, eaque eius eum exercitationem, explicabo\r\n    fugiat iure laborum, nihil optio possimus quidem sint tempore tenetur vel vitae voluptatum? Atque dicta dolorem ea,\r\n    exercitationem iste magnam nulla obcaecati possimus ratione sunt. Ab aut consectetur consequuntur culpa hic magni\r\n    officiis, optio reiciendis! At beatae exercitationem harum nostrum quisquam? Ab aliquid eligendi nisi placeat quas\r\n    quibusdam sapiente soluta voluptates! A alias deleniti dolorem eius esse, ex fugit illum ipsa labore minima nihil\r\n    nobis numquam quam quis sunt ullam veniam! A adipisci eius, mollitia nihil nisi perferendis sint velit. Accusantium\r\n    aliquam at blanditiis corporis dicta doloremque ea facere ipsam itaque labore laudantium magnam mollitia nulla\r\n    pariatur praesentium quod quos repellat, repellendus saepe vero voluptas voluptatibus voluptatum. Ad consequuntur\r\n    maxime quidem reprehenderit veritatis voluptas voluptatem? Adipisci amet, architecto dolorem explicabo impedit\r\n    itaque,\r\n    iure maiores minima minus modi molestias natus nesciunt nobis non placeat porro quisquam repellendus vitae.</p>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/pages/work/work.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/pages/work/work.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvd29yay93b3JrLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/pages/work/work.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/pages/work/work.component.ts ***!
  \*********************************************************/
/*! exports provided: WorkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkComponent", function() { return WorkComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WorkComponent = /** @class */ (function () {
    function WorkComponent() {
    }
    WorkComponent.prototype.ngOnInit = function () {
    };
    WorkComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-work',
            template: __webpack_require__(/*! ./work.component.html */ "./src/app/components/pages/work/work.component.html"),
            styles: [__webpack_require__(/*! ./work.component.scss */ "./src/app/components/pages/work/work.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WorkComponent);
    return WorkComponent;
}());



/***/ }),

/***/ "./src/app/components/partials/all-blocks/all-blocks.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/components/partials/all-blocks/all-blocks.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"all-blocks\">\r\n\r\n    <div *ngFor=\"let group of groups\">\r\n        <div class=\"parent-{{group.type}} block-wrapper mt-0 float-left bg-size-{{group.type}}\">\r\n            <div *ngFor=\"let block of group.data\">\r\n                <div *ngIf=\"block.category == 'blog'\">\r\n                    <div class=\"block-wrapper mt-0 float-left bg-size-{{block.size}}\"\r\n                         [ngStyle]=\"{'background-color' : block.bg}\">\r\n                        <app-blog-block [block]=\"block\"></app-blog-block>\r\n                    </div>\r\n                </div>\r\n\r\n                <div *ngIf=\"block.category == 'image'\">\r\n                    <div class=\"block-wrapper mt-0 float-left bg-size-{{block.size}}\">\r\n\r\n                        <app-image-block [block]=\"block\"></app-image-block>\r\n                    </div>\r\n                </div>\r\n\r\n                <div *ngIf=\"block.category == 'bg-image'\">\r\n                    <div class=\"block-wrapper mt-0 float-left bg-size-{{block.size}}\">\r\n                        <app-bg-image-block [block]=\"block\"></app-bg-image-block>\r\n                    </div>\r\n                </div>\r\n\r\n                <div *ngIf=\"block.category == 'image-text'\">\r\n                    <div class=\"block-wrapper mt-0 float-left bg-size-{{block.size}}\"\r\n                         [ngStyle]=\"{'background-color' : block.bg}\">\r\n                        <app-text-image-block [block]=\"block\"></app-text-image-block>\r\n                    </div>\r\n                </div>\r\n\r\n                <div *ngIf=\"block.category == 'video'\">\r\n                    <div class=\"block-wrapper mt-0 float-left bg-size-{{block.size}}\"\r\n                         [ngStyle]=\"{'background-color' : block.bg}\">\r\n                        <app-video-block [block]=\"block\"></app-video-block>\r\n                    </div>\r\n                </div>\r\n\r\n\r\n\r\n                <div *ngIf=\"block.category == 'link'\">\r\n                    <div class=\"block-wrapper mt-0 float-left bg-size-{{block.size}}\"\r\n                         [ngStyle]=\"{'background-color' : block.bg}\">\r\n                        <app-link-block [block]=\"block\"></app-link-block>\r\n                    </div>\r\n                </div>\r\n\r\n\r\n\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/partials/all-blocks/all-blocks.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/components/partials/all-blocks/all-blocks.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFydGlhbHMvYWxsLWJsb2Nrcy9hbGwtYmxvY2tzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/partials/all-blocks/all-blocks.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/partials/all-blocks/all-blocks.component.ts ***!
  \************************************************************************/
/*! exports provided: AllBlocksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllBlocksComponent", function() { return AllBlocksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_component_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../_services/component.service */ "./src/app/_services/component.service.ts");



var AllBlocksComponent = /** @class */ (function () {
    function AllBlocksComponent(componentService) {
        this.componentService = componentService;
    }
    AllBlocksComponent.prototype.ngOnInit = function () {
        this.getBlocks();
        this.getGroups();
    };
    AllBlocksComponent.prototype.getBlocks = function () {
        this.blocks = this.componentService.getBlocks();
    };
    AllBlocksComponent.prototype.getGroups = function () {
        this.groups = this.componentService.getGroup();
        // console.log(this.groups)
    };
    AllBlocksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-all-blocks',
            template: __webpack_require__(/*! ./all-blocks.component.html */ "./src/app/components/partials/all-blocks/all-blocks.component.html"),
            styles: [__webpack_require__(/*! ./all-blocks.component.scss */ "./src/app/components/partials/all-blocks/all-blocks.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_component_service__WEBPACK_IMPORTED_MODULE_2__["ComponentService"]])
    ], AllBlocksComponent);
    return AllBlocksComponent;
}());



/***/ }),

/***/ "./src/app/components/partials/block-types/bg-image-block/bg-image-block.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/components/partials/block-types/bg-image-block/bg-image-block.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"blog-block h-100\">\r\n\r\n  <div class=\"content h-100\">\r\n    <div class=\"image-wrapper text-center h-100\">\r\n      <img src=\"../../../../assets/images/{{block.content}}\"  alt=\"a\">\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/partials/block-types/bg-image-block/bg-image-block.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/components/partials/block-types/bg-image-block/bg-image-block.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".image-wrapper img {\n  height: 100%;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYXJ0aWFscy9ibG9jay10eXBlcy9iZy1pbWFnZS1ibG9jay9DOlxcVXNlcnNcXE1vZGVsaW5nXFxEZXNrdG9wXFxhbmd1bGFyXFxuaWthXFxjbGllbnQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHBhcnRpYWxzXFxibG9jay10eXBlc1xcYmctaW1hZ2UtYmxvY2tcXGJnLWltYWdlLWJsb2NrLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxvQkFBaUI7S0FBakIsaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BhcnRpYWxzL2Jsb2NrLXR5cGVzL2JnLWltYWdlLWJsb2NrL2JnLWltYWdlLWJsb2NrLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltYWdlLXdyYXBwZXIgaW1ne1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/partials/block-types/bg-image-block/bg-image-block.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/components/partials/block-types/bg-image-block/bg-image-block.component.ts ***!
  \********************************************************************************************/
/*! exports provided: BgImageBlockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BgImageBlockComponent", function() { return BgImageBlockComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BgImageBlockComponent = /** @class */ (function () {
    function BgImageBlockComponent() {
    }
    BgImageBlockComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BgImageBlockComponent.prototype, "block", void 0);
    BgImageBlockComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bg-image-block',
            template: __webpack_require__(/*! ./bg-image-block.component.html */ "./src/app/components/partials/block-types/bg-image-block/bg-image-block.component.html"),
            styles: [__webpack_require__(/*! ./bg-image-block.component.scss */ "./src/app/components/partials/block-types/bg-image-block/bg-image-block.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BgImageBlockComponent);
    return BgImageBlockComponent;
}());



/***/ }),

/***/ "./src/app/components/partials/block-types/blog-block/blog-block.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/components/partials/block-types/blog-block/blog-block.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"blog-block\">\r\n  <div class=\"blog-logo\">\r\n    BLOG\r\n  </div>\r\n  <div class=\"content\" *ngIf=\"block.content.length > 1\">\r\n\r\n    <owl-carousel-o [options]=\"customOptions\">\r\n      <ng-template *ngFor=\"let item of block.content, let i = index\" class=\"h-100\" carouselSlide>\r\n        <a [routerLink]=\"['stories', item.id]\">\r\n        <div class=\"blog-title\">{{item.title}}</div>\r\n        <div class=\"blog-description\">\r\n          <p>{{item.description}}</p>\r\n        </div>\r\n        </a>\r\n      </ng-template>\r\n    </owl-carousel-o>\r\n\r\n  </div>\r\n\r\n\r\n  <div class=\"content\" *ngIf=\"block.content.length == 1\">\r\n    <a [routerLink]=\"['stories', block.content[0].id]\">\r\n        <div class=\"blog-title\">{{block.content[0].title}}</div>\r\n        <div class=\"blog-description\">\r\n          <p>{{block.content[0].description}}</p>\r\n        </div>\r\n    </a>\r\n  </div>\r\n\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/partials/block-types/blog-block/blog-block.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/components/partials/block-types/blog-block/blog-block.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\n  text-decoration: none;\n  color: #000; }\n\n.blog-logo {\n  padding: 20px;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  background: burlywood;\n  font-weight: bold; }\n\n@media (max-width: 1600px) {\n    .blog-logo {\n      padding: 10px; } }\n\n.content {\n  padding: 35px; }\n\n@media (max-width: 1600px) {\n    .content {\n      padding: 0 10px; } }\n\n.blog-title {\n  font-size: 35px;\n  font-weight: bold;\n  padding-top: 10px; }\n\n@media (max-width: 1600px) {\n    .blog-title {\n      font-size: 25px;\n      padding-top: 0px; } }\n\n@media (max-width: 1600px) {\n  .blog-description {\n    font-size: 13px;\n    line-height: 1.2; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYXJ0aWFscy9ibG9jay10eXBlcy9ibG9nLWJsb2NrL0M6XFxVc2Vyc1xcTW9kZWxpbmdcXERlc2t0b3BcXGFuZ3VsYXJcXG5pa2FcXGNsaWVudC9zcmNcXGFwcFxcY29tcG9uZW50c1xccGFydGlhbHNcXGJsb2NrLXR5cGVzXFxibG9nLWJsb2NrXFxibG9nLWJsb2NrLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQXFCO0VBQ3JCLFdBQVcsRUFBQTs7QUFFYjtFQUNFLGFBQWE7RUFDYiwwQkFBa0I7RUFBbEIsdUJBQWtCO0VBQWxCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsaUJBQWlCLEVBQUE7O0FBQ2pCO0lBTEY7TUFNSSxhQUFhLEVBQUEsRUFFaEI7O0FBRUQ7RUFDRSxhQUFhLEVBQUE7O0FBQ2I7SUFGRjtNQUdJLGVBQWUsRUFBQSxFQUVsQjs7QUFFRDtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsaUJBQWlCLEVBQUE7O0FBQ2pCO0lBSkY7TUFLSSxlQUFlO01BQ2YsZ0JBQWdCLEVBQUEsRUFFbkI7O0FBR0M7RUFERjtJQUVJLGVBQWU7SUFDZixnQkFBZ0IsRUFBQSxFQUVuQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFydGlhbHMvYmxvY2stdHlwZXMvYmxvZy1ibG9jay9ibG9nLWJsb2NrLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6ICMwMDA7XHJcbn1cclxuLmJsb2ctbG9nbyB7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgYmFja2dyb3VuZDogYnVybHl3b29kO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxNjAwcHgpIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgcGFkZGluZzogMzVweDtcclxuICBAbWVkaWEgKG1heC13aWR0aDogMTYwMHB4KSB7XHJcbiAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uYmxvZy10aXRsZSB7XHJcbiAgZm9udC1zaXplOiAzNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxNjAwcHgpIHtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uYmxvZy1kZXNjcmlwdGlvbiB7XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDE2MDBweCkge1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/partials/block-types/blog-block/blog-block.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/components/partials/block-types/blog-block/blog-block.component.ts ***!
  \************************************************************************************/
/*! exports provided: BlogBlockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogBlockComponent", function() { return BlogBlockComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BlogBlockComponent = /** @class */ (function () {
    function BlogBlockComponent() {
        this.customOptions = {
            loop: true,
            mouseDrag: true,
            touchDrag: true,
            pullDrag: false,
            dots: true,
            navSpeed: 200,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplaySpeed: 1000,
            autoplayHoverPause: true,
            // navText: ['', ''],
            responsive: {
                0: {
                    items: 1
                },
                400: {
                    items: 1
                },
                740: {
                    items: 1
                },
                940: {
                    items: 1
                }
            },
            nav: false
        };
    }
    BlogBlockComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BlogBlockComponent.prototype, "block", void 0);
    BlogBlockComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-blog-block',
            template: __webpack_require__(/*! ./blog-block.component.html */ "./src/app/components/partials/block-types/blog-block/blog-block.component.html"),
            styles: [__webpack_require__(/*! ./blog-block.component.scss */ "./src/app/components/partials/block-types/blog-block/blog-block.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BlogBlockComponent);
    return BlogBlockComponent;
}());



/***/ }),

/***/ "./src/app/components/partials/block-types/image-block/image-block.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/components/partials/block-types/image-block/image-block.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"image-block h-100\" appHoverRotate [bgColor]=\"block.bg\" [ngStyle]=\"{'background-color' : block.bg}\" >\r\n\r\n        <div class=\"opacity\" routerLink=\"/\"><div class=\"opacity-header\">{{block.content.hoverTitle}}</div></div>\r\n\r\n        <div class=\"content h-100\">\r\n            <div class=\"image-wrapper text-center h-100\">\r\n                <div class=\"h-100 dddd\">\r\n                    <div class=\"img\"><img src=\"../../../../assets/images/{{block.content.img}}\" alt=\"a\"></div>\r\n                    <p class=\"rotate-header\">{{block.content.hoverTitle}}</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/partials/block-types/image-block/image-block.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/components/partials/block-types/image-block/image-block.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".image-block {\n  position: relative; }\n\n.image-wrapper img {\n  position: relative;\n  width: 200px;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%); }\n\n@media (max-width: 1600px) {\n    .image-wrapper img {\n      width: 100px; } }\n\n.opacity {\n  height: 0;\n  width: 0;\n  position: absolute;\n  z-index: 10;\n  cursor: pointer; }\n\n.opacity .opacity-header {\n    width: 100%;\n    position: absolute;\n    top: 50%;\n    font-size: 0;\n    color: #ffffff;\n    font-weight: bold;\n    -webkit-transform: translateY(-50%);\n    transform: translateY(-50%); }\n\n.show-opacity {\n  height: 100%;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.7);\n  transition: all .5s ease; }\n\n.show-opacity .opacity-header {\n    text-align: center;\n    width: 100%;\n    font-size: 2.5vw;\n    -webkit-animation-duration: 1s;\n            animation-duration: 1s;\n    -webkit-animation-name: show;\n            animation-name: show; }\n\n@-webkit-keyframes show {\n  from {\n    font-size: 0;\n    opacity: 0; }\n  to {\n    font-size: 2.5vw;\n    opacity: 1; } }\n\n@keyframes show {\n  from {\n    font-size: 0;\n    opacity: 0; }\n  to {\n    font-size: 2.5vw;\n    opacity: 1; } }\n\n.rotate-header {\n  position: relative;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  font-size: 2.5vw;\n  color: #ffffff; }\n\n@media (max-width: 1600px) {\n    .rotate-header {\n      width: 100px; } }\n\n.dddd {\n  position: relative;\n  -webkit-transform: rotateY(180deg);\n          transform: rotateY(180deg); }\n\n.dddd .img {\n    height: 100%;\n    -webkit-transform: rotateY(180deg);\n            transform: rotateY(180deg);\n    display: none; }\n\n.show-rotate {\n  -webkit-animation-duration: 500ms;\n          animation-duration: 500ms;\n  -webkit-animation-name: rotate;\n          animation-name: rotate;\n  -webkit-transform: rotateY(360deg);\n          transform: rotateY(360deg); }\n\n@-webkit-keyframes rotate {\n  0% {\n    -webkit-transform: rotateY(180deg);\n            transform: rotateY(180deg); }\n  50% {\n    -webkit-transform: rotateY(270deg);\n            transform: rotateY(270deg); }\n  100% {\n    -webkit-transform: rotateY(360deg);\n            transform: rotateY(360deg); } }\n\n@keyframes rotate {\n  0% {\n    -webkit-transform: rotateY(180deg);\n            transform: rotateY(180deg); }\n  50% {\n    -webkit-transform: rotateY(270deg);\n            transform: rotateY(270deg); }\n  100% {\n    -webkit-transform: rotateY(360deg);\n            transform: rotateY(360deg); } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYXJ0aWFscy9ibG9jay10eXBlcy9pbWFnZS1ibG9jay9DOlxcVXNlcnNcXE1vZGVsaW5nXFxEZXNrdG9wXFxhbmd1bGFyXFxuaWthXFxjbGllbnQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHBhcnRpYWxzXFxibG9jay10eXBlc1xcaW1hZ2UtYmxvY2tcXGltYWdlLWJsb2NrLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixRQUFRO0VBQ1IsbUNBQTJCO1VBQTNCLDJCQUEyQixFQUFBOztBQUMzQjtJQUxGO01BTUksWUFBWSxFQUFBLEVBRWY7O0FBR0Q7RUFDRSxTQUFTO0VBQ1QsUUFBUTtFQUNSLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsZUFBZSxFQUFBOztBQUxqQjtJQVFJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFlBQVk7SUFDWixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLG1DQUFtQztJQUluQywyQkFBMkIsRUFBQTs7QUFJL0I7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLG9DQUFtQztFQUVuQyx3QkFBd0IsRUFBQTs7QUFMMUI7SUFRSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGdCQUFnQjtJQUVoQiw4QkFBc0I7WUFBdEIsc0JBQXNCO0lBQ3RCLDRCQUFvQjtZQUFwQixvQkFBb0IsRUFBQTs7QUFHdEI7RUFDRTtJQUNFLFlBQVk7SUFDWixVQUFVLEVBQUE7RUFHWjtJQUNFLGdCQUFnQjtJQUNoQixVQUFVLEVBQUEsRUFBQTs7QUFSZDtFQUNFO0lBQ0UsWUFBWTtJQUNaLFVBQVUsRUFBQTtFQUdaO0lBQ0UsZ0JBQWdCO0lBQ2hCLFVBQVUsRUFBQSxFQUFBOztBQVNoQjtFQUVFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsbUNBQTJCO1VBQTNCLDJCQUEyQjtFQUkzQixnQkFBZ0I7RUFDaEIsY0FBYyxFQUFBOztBQUpkO0lBTEY7TUFNSSxZQUFZLEVBQUEsRUFLZjs7QUFFRDtFQUNFLGtCQUFrQjtFQUNsQixrQ0FBMEI7VUFBMUIsMEJBQTBCLEVBQUE7O0FBRjVCO0lBSUksWUFBWTtJQUNaLGtDQUEwQjtZQUExQiwwQkFBMEI7SUFDMUIsYUFBYSxFQUFBOztBQUdqQjtFQU1JLGlDQUF5QjtVQUF6Qix5QkFBeUI7RUFDekIsOEJBQXNCO1VBQXRCLHNCQUFzQjtFQUV4QixrQ0FBMEI7VUFBMUIsMEJBQTBCLEVBQUE7O0FBRTFCO0VBQ0U7SUFDRSxrQ0FBMEI7WUFBMUIsMEJBQTBCLEVBQUE7RUFFNUI7SUFDRSxrQ0FBMEI7WUFBMUIsMEJBQTBCLEVBQUE7RUFFNUI7SUFDRSxrQ0FBMEI7WUFBMUIsMEJBQTBCLEVBQUEsRUFBQTs7QUFSOUI7RUFDRTtJQUNFLGtDQUEwQjtZQUExQiwwQkFBMEIsRUFBQTtFQUU1QjtJQUNFLGtDQUEwQjtZQUExQiwwQkFBMEIsRUFBQTtFQUU1QjtJQUNFLGtDQUEwQjtZQUExQiwwQkFBMEIsRUFBQSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wYXJ0aWFscy9ibG9jay10eXBlcy9pbWFnZS1ibG9jay9pbWFnZS1ibG9jay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWFnZS1ibG9jayB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uaW1hZ2Utd3JhcHBlciBpbWcge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgdG9wOiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxNjAwcHgpIHtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICB9XHJcbn1cclxuXHJcblxyXG4ub3BhY2l0eSB7XHJcbiAgaGVpZ2h0OiAwO1xyXG4gIHdpZHRoOiAwO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiAxMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gIC5vcGFjaXR5LWhlYWRlciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgZm9udC1zaXplOiAwO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIH1cclxufVxyXG5cclxuLnNob3ctb3BhY2l0eSB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjcpO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsO1xyXG4gIHRyYW5zaXRpb246IGFsbCAuNXMgZWFzZTtcclxuXHJcbiAgLm9wYWNpdHktaGVhZGVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZm9udC1zaXplOiAyLjV2dztcclxuICAgIC8vdHJhbnNmb3JtOiByb3RhdGUoMCk7XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IHNob3c7XHJcbiAgfVxyXG5cclxuICBAa2V5ZnJhbWVzIHNob3cge1xyXG4gICAgZnJvbSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMDtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgLy90cmFuc2Zvcm06IHJvdGF0ZSgwKTtcclxuICAgIH1cclxuICAgIHRvIHtcclxuICAgICAgZm9udC1zaXplOiAyLjV2dztcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgLy90cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuLnJvdGF0ZS1oZWFkZXJ7XHJcblxyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDE2MDBweCkge1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gIH1cclxuICBmb250LXNpemU6IDIuNXZ3O1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIC8vZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmRkZGR7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xyXG4gIC5pbWd7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59XHJcbi5zaG93LXJvdGF0ZSB7XHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogNTAwbXM7XHJcbiAgICBhbmltYXRpb24tbmFtZTogcm90YXRlO1xyXG5cclxuICB0cmFuc2Zvcm06IHJvdGF0ZVkoMzYwZGVnKTtcclxuXHJcbiAgQGtleWZyYW1lcyByb3RhdGUge1xyXG4gICAgMCUge1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcclxuICAgIH1cclxuICAgIDUwJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgyNzBkZWcpO1xyXG4gICAgfVxyXG4gICAgMTAwJXtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDM2MGRlZyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/partials/block-types/image-block/image-block.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/components/partials/block-types/image-block/image-block.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ImageBlockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageBlockComponent", function() { return ImageBlockComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ImageBlockComponent = /** @class */ (function () {
    function ImageBlockComponent() {
        this.hover = false;
    }
    ImageBlockComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ImageBlockComponent.prototype, "block", void 0);
    ImageBlockComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-image-block',
            template: __webpack_require__(/*! ./image-block.component.html */ "./src/app/components/partials/block-types/image-block/image-block.component.html"),
            styles: [__webpack_require__(/*! ./image-block.component.scss */ "./src/app/components/partials/block-types/image-block/image-block.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ImageBlockComponent);
    return ImageBlockComponent;
}());



/***/ }),

/***/ "./src/app/components/partials/block-types/link-block/link-block.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/components/partials/block-types/link-block/link-block.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"link-block h-100\">\r\n\r\n    <div class=\"content h-100\">\r\n        <div class=\"content-wrapper h-100\">\r\n            <div class=\"title h-80\">{{block.content.title}}</div>\r\n            <div class=\"link h-20\">\r\n                <a target=\"_blank\" [href]=\"block.content.url\">{{block.content.link}}</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/partials/block-types/link-block/link-block.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/components/partials/block-types/link-block/link-block.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\n  padding: 20px; }\n  .content .title {\n    width: 80%;\n    font-size: 2em;\n    color: #ffffff; }\n  .content .link a {\n    font-size: 25px;\n    color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYXJ0aWFscy9ibG9jay10eXBlcy9saW5rLWJsb2NrL0M6XFxVc2Vyc1xcTW9kZWxpbmdcXERlc2t0b3BcXGFuZ3VsYXJcXG5pa2FcXGNsaWVudC9zcmNcXGFwcFxcY29tcG9uZW50c1xccGFydGlhbHNcXGJsb2NrLXR5cGVzXFxsaW5rLWJsb2NrXFxsaW5rLWJsb2NrLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYSxFQUFBO0VBRGY7SUFHSSxVQUFVO0lBQ1YsY0FBYztJQUNkLGNBQWMsRUFBQTtFQUxsQjtJQVFJLGVBQWU7SUFFZixZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BhcnRpYWxzL2Jsb2NrLXR5cGVzL2xpbmstYmxvY2svbGluay1ibG9jay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50IHtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIC50aXRsZXtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBmb250LXNpemU6IDJlbTtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gIH1cclxuICAubGluayBhe1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgLy90ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/partials/block-types/link-block/link-block.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/components/partials/block-types/link-block/link-block.component.ts ***!
  \************************************************************************************/
/*! exports provided: LinkBlockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkBlockComponent", function() { return LinkBlockComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LinkBlockComponent = /** @class */ (function () {
    function LinkBlockComponent() {
    }
    LinkBlockComponent.prototype.ngOnInit = function () {
        // console.log(this.block.content);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], LinkBlockComponent.prototype, "block", void 0);
    LinkBlockComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-link-block',
            template: __webpack_require__(/*! ./link-block.component.html */ "./src/app/components/partials/block-types/link-block/link-block.component.html"),
            styles: [__webpack_require__(/*! ./link-block.component.scss */ "./src/app/components/partials/block-types/link-block/link-block.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LinkBlockComponent);
    return LinkBlockComponent;
}());



/***/ }),

/***/ "./src/app/components/partials/block-types/text-image-block/text-image-block.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/components/partials/block-types/text-image-block/text-image-block.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"text-image-block h-100\">\r\n\r\n  <div class=\"content h-100 row\">\r\n    <div class=\"text-wrapper h-100 p-0 col-9\">\r\n      <div class=\"content\">\r\n        <div class=\"sub-title\">{{block.content.subTitle | uppercase}}</div>\r\n        <div class=\"block-title\">{{block.content.title | uppercase}}</div>\r\n        <div class=\"block-description\">{{block.content.description}}</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"image-wrapper h-100 col-3\">\r\n      <img src=\"../../../../assets/images/{{block.content.img}}\" alt=\"a\">\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/partials/block-types/text-image-block/text-image-block.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/components/partials/block-types/text-image-block/text-image-block.component.scss ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text-image-block {\n  color: #ffffff; }\n\n.sub-title {\n  font-size: 2.8vw;\n  font-weight: normal; }\n\n.block-title {\n  font-size: 3.7vw;\n  font-weight: bold; }\n\n.content {\n  padding: 50px;\n  position: relative;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%); }\n\n.image-wrapper img {\n  width: 100%;\n  padding: 20px;\n  position: relative;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYXJ0aWFscy9ibG9jay10eXBlcy90ZXh0LWltYWdlLWJsb2NrL0M6XFxVc2Vyc1xcTW9kZWxpbmdcXERlc2t0b3BcXGFuZ3VsYXJcXG5pa2FcXGNsaWVudC9zcmNcXGFwcFxcY29tcG9uZW50c1xccGFydGlhbHNcXGJsb2NrLXR5cGVzXFx0ZXh0LWltYWdlLWJsb2NrXFx0ZXh0LWltYWdlLWJsb2NrLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYyxFQUFBOztBQUVoQjtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUIsRUFBQTs7QUFFckI7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCLEVBQUE7O0FBRW5CO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsbUNBQTJCO1VBQTNCLDJCQUEyQixFQUFBOztBQUU3QjtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixtQ0FBMkI7VUFBM0IsMkJBQTJCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BhcnRpYWxzL2Jsb2NrLXR5cGVzL3RleHQtaW1hZ2UtYmxvY2svdGV4dC1pbWFnZS1ibG9jay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0LWltYWdlLWJsb2Nre1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcbi5zdWItdGl0bGV7XHJcbiAgZm9udC1zaXplOiAyLjh2dztcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG59XHJcbi5ibG9jay10aXRsZXtcclxuICBmb250LXNpemU6IDMuN3Z3O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5jb250ZW50e1xyXG4gIHBhZGRpbmc6IDUwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxufVxyXG4uaW1hZ2Utd3JhcHBlciBpbWd7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/partials/block-types/text-image-block/text-image-block.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/components/partials/block-types/text-image-block/text-image-block.component.ts ***!
  \************************************************************************************************/
/*! exports provided: TextImageBlockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextImageBlockComponent", function() { return TextImageBlockComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TextImageBlockComponent = /** @class */ (function () {
    function TextImageBlockComponent() {
    }
    TextImageBlockComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TextImageBlockComponent.prototype, "block", void 0);
    TextImageBlockComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-text-image-block',
            template: __webpack_require__(/*! ./text-image-block.component.html */ "./src/app/components/partials/block-types/text-image-block/text-image-block.component.html"),
            styles: [__webpack_require__(/*! ./text-image-block.component.scss */ "./src/app/components/partials/block-types/text-image-block/text-image-block.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TextImageBlockComponent);
    return TextImageBlockComponent;
}());



/***/ }),

/***/ "./src/app/components/partials/block-types/video-block/video-block.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/components/partials/block-types/video-block/video-block.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"video-block h-100\"\r\n     (mouseenter)=\"toggleAutoplay()\"\r\n     (mouseleave)=\"toggleAutoplay()\"\r\n\r\n>\r\n  <video #videoElement\r\n         class=\"h-100 w-100\"\r\n         [loop]=\"true\"\r\n         [volume]=\".8\"\r\n         [autoplay]=\"play\"\r\n         [muted]=false>\r\n    <source src=\"../../../../assets/video/{{block.content.video}}\" type=\"video/mp4\"/>\r\n  </video>\r\n\r\n  <div #videoLogo class=\"on-content w-100\">\r\n    <div class=\"video-title row\">\r\n      <div class=\"logo col-6 text-right\">\r\n        <div class=\"round-border\">\r\n          <i class=\"fa fa-play\" aria-hidden=\"true\"></i>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-6\">\r\n        {{block.content.title | uppercase}}\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/partials/block-types/video-block/video-block.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/components/partials/block-types/video-block/video-block.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".video-block {\n  position: relative; }\n\n.video-block video {\n  -o-object-fit: fill;\n     object-fit: fill; }\n\n.round-border {\n  position: relative;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  float: right;\n  border: 3px solid white;\n  border-radius: 50%;\n  line-height: 70px;\n  height: 80px;\n  width: 80px;\n  text-align: center; }\n\n@media (max-width: 1600px) {\n    .round-border {\n      line-height: 44px;\n      height: 50px;\n      width: 50px; } }\n\n.round-border i {\n  margin-left: 10px; }\n\n@media (max-width: 1600px) {\n    .round-border i {\n      margin-left: 5px; } }\n\n.on-content {\n  position: absolute;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  z-index: 100; }\n\n.video-title {\n  font-size: 35px;\n  font-weight: bold;\n  color: white; }\n\n@media (max-width: 1600px) {\n    .video-title {\n      font-size: 28px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYXJ0aWFscy9ibG9jay10eXBlcy92aWRlby1ibG9jay9DOlxcVXNlcnNcXE1vZGVsaW5nXFxEZXNrdG9wXFxhbmd1bGFyXFxuaWthXFxjbGllbnQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHBhcnRpYWxzXFxibG9jay10eXBlc1xcdmlkZW8tYmxvY2tcXHZpZGVvLWJsb2NrLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCLEVBQUE7O0FBRXBCO0VBQ0UsbUJBQWdCO0tBQWhCLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsbUNBQTJCO1VBQTNCLDJCQUEyQjtFQUMzQixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0IsRUFBQTs7QUFDbEI7SUFYRjtNQVlJLGlCQUFpQjtNQUNqQixZQUFZO01BQ1osV0FBVyxFQUFBLEVBRWQ7O0FBQ0Q7RUFDRSxpQkFBaUIsRUFBQTs7QUFDakI7SUFGRjtNQUdJLGdCQUFnQixFQUFBLEVBRW5COztBQUNEO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixtQ0FBMkI7VUFBM0IsMkJBQTJCO0VBQzNCLFlBQVksRUFBQTs7QUFHZDtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsWUFBWSxFQUFBOztBQUNaO0lBSkY7TUFLSSxlQUFlLEVBQUEsRUFFbEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BhcnRpYWxzL2Jsb2NrLXR5cGVzL3ZpZGVvLWJsb2NrL3ZpZGVvLWJsb2NrLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnZpZGVvLWJsb2Nre1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4udmlkZW8tYmxvY2sgdmlkZW97XHJcbiAgb2JqZWN0LWZpdDogZmlsbDtcclxufVxyXG5cclxuLnJvdW5kLWJvcmRlcntcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBib3JkZXI6IDNweCBzb2xpZCB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgbGluZS1oZWlnaHQ6IDcwcHg7XHJcbiAgaGVpZ2h0OiA4MHB4O1xyXG4gIHdpZHRoOiA4MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBAbWVkaWEgKG1heC13aWR0aDogMTYwMHB4KXtcclxuICAgIGxpbmUtaGVpZ2h0OiA0NHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgfVxyXG59XHJcbi5yb3VuZC1ib3JkZXIgaXtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxuICBAbWVkaWEgKG1heC13aWR0aDogMTYwMHB4KXtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgfVxyXG59XHJcbi5vbi1jb250ZW50e1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgei1pbmRleDogMTAwO1xyXG59XHJcblxyXG4udmlkZW8tdGl0bGV7XHJcbiAgZm9udC1zaXplOiAzNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBAbWVkaWEgKG1heC13aWR0aDogMTYwMHB4KXtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICB9XHJcbn1cclxuLnZpZGVvLXRpdGxlIHB7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/partials/block-types/video-block/video-block.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/components/partials/block-types/video-block/video-block.component.ts ***!
  \**************************************************************************************/
/*! exports provided: VideoBlockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoBlockComponent", function() { return VideoBlockComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var VideoBlockComponent = /** @class */ (function () {
    function VideoBlockComponent() {
        this.play = false;
        this.muted = true;
    }
    VideoBlockComponent.prototype.ngOnInit = function () {
    };
    VideoBlockComponent.prototype.toggleAutoplay = function () {
        this.muted = !this.muted;
        this.play = !this.play;
        this.play ? this.videoElement.nativeElement.play() : this.videoElement.nativeElement.pause();
        this.play ? this.videoLogo.nativeElement.style.display = 'none' : this.videoLogo.nativeElement.style.display = 'block';
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], VideoBlockComponent.prototype, "block", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("videoElement"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], VideoBlockComponent.prototype, "videoElement", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("videoLogo"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], VideoBlockComponent.prototype, "videoLogo", void 0);
    VideoBlockComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-video-block',
            template: __webpack_require__(/*! ./video-block.component.html */ "./src/app/components/partials/block-types/video-block/video-block.component.html"),
            styles: [__webpack_require__(/*! ./video-block.component.scss */ "./src/app/components/partials/block-types/video-block/video-block.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], VideoBlockComponent);
    return VideoBlockComponent;
}());



/***/ }),

/***/ "./src/app/components/partials/sidebar/sidebar.component.html":
/*!********************************************************************!*\
  !*** ./src/app/components/partials/sidebar/sidebar.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"side-bar-content h-100\">\r\n  <div class=\"side-bar-header h-50\" >\r\n\r\n    <div class=\"top-part row h-20\">\r\n      <div class=\"menu-title col-6\">\r\n        <a [routerLink]=\"[{ outlets: { primary: ['home'],footer: ['home'] } }]\" style=\"cursor: pointer;\"><h1>nika</h1></a>\r\n      </div>\r\n      <div class=\"hamburger-logo col-6\">\r\n        <div id=\"toggle-icon\" class=\"hamburger-logo-toggle-img float-right\">\r\n          <div class=\"hamburger-line-1\"></div>\r\n          <div class=\"hamburger-line-2\"></div>\r\n          <div class=\"hamburger-line-3\"></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"bottom-part h-80\">\r\n      <div id=\"menu-content\" class=\"side-bar-about h-75\">\r\n        <div class=\"toggle-content font-weight-bolder\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium dolorum eos\r\n          esse et excepturi ipsam iusto\r\n          natus quibusdam, quo, rerum sit tempore voluptates!\r\n        </div>\r\n        <div class=\"toggle-content font-weight-bolder\" style=\"display:none;\">\r\n          <div class=\"menu-items\"><a [routerLink]=\"[{ outlets: { primary: ['about'],footer: ['about']}}]\">{{ 'about' | uppercase}}</a></div>\r\n          <div class=\"menu-items\"><a routerLink=\"/work\">{{'work' | uppercase}}</a></div>\r\n          <div class=\"menu-items\"><a routerLink=\"/stories\">{{'stories' | uppercase}}</a></div>\r\n          <div class=\"menu-items\"><a routerLink=\"/careers\">{{'careers' | uppercase}}</a></div>\r\n          <div class=\"menu-items\"><a [routerLink]=\"[{ outlets: { primary: ['contact'],footer: ['contact'] } }]\">{{'contact' | uppercase}}</a></div>\r\n        </div>\r\n      </div>\r\n      <div class=\"side-bar-meet-link h-25\">\r\n        <p>Meet Us. <a href=\"\">Click Here</a></p>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"side-bar-logo h-50\" style=\"background: #000a1d;text-align: center;\">\r\n    <div class=\"logo-wrapper h-100\">\r\n      <img class=\"align-self-center\" src=\"../../../../assets/images/logo.PNG\" alt=\"logo\">\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/partials/sidebar/sidebar.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/components/partials/sidebar/sidebar.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".h-20 {\n  height: 20% !important; }\n\n.h-80 {\n  height: 80% !important; }\n\n.menu-title a {\n  text-decoration: none;\n  color: #000; }\n\n.side-bar-header {\n  background: #F7F7F7; }\n\n.menu-items a {\n  cursor: pointer;\n  text-decoration: none;\n  color: black;\n  font-size: 22px;\n  line-height: 1.7; }\n\n@media (max-width: 1600px) {\n    .menu-items a {\n      font-size: 20px;\n      line-height: 1.2; } }\n\n.side-bar-header {\n  padding: 30px; }\n\n@media (max-width: 1600px) {\n    .side-bar-header {\n      padding: 15px; } }\n\n.menu-title h1 {\n  font-size: 50px; }\n\n.side-bar-about {\n  font-size: larger;\n  padding-top: 20px;\n  padding-right: 50px; }\n\n@media (max-width: 1600px) {\n    .side-bar-about {\n      font-size: 13px; } }\n\n.logo-wrapper img {\n  position: relative;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%); }\n\n.side-bar-meet-link p {\n  position: relative;\n  top: 100%;\n  -webkit-transform: translateY(-100%);\n          transform: translateY(-100%); }\n\n.hamburger-line-1, .hamburger-line-2, .hamburger-line-3 {\n  position: relative;\n  width: 40px;\n  border: 3px solid black;\n  margin-top: 8px; }\n\n.hamburger-logo-toggle-img {\n  padding: 10px;\n  cursor: pointer; }\n\n.rotate .hamburger-line-1 {\n  transition: 200ms;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n  top: 14px; }\n\n.rotate .hamburger-line-3 {\n  transition: 200ms;\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg); }\n\n.rotate .hamburger-line-2 {\n  display: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYXJ0aWFscy9zaWRlYmFyL0M6XFxVc2Vyc1xcTW9kZWxpbmdcXERlc2t0b3BcXGFuZ3VsYXJcXG5pa2FcXGNsaWVudC9zcmNcXGFwcFxcY29tcG9uZW50c1xccGFydGlhbHNcXHNpZGViYXJcXHNpZGViYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBc0IsRUFBQTs7QUFHeEI7RUFDRSxzQkFBc0IsRUFBQTs7QUFHeEI7RUFDRSxxQkFBcUI7RUFDckIsV0FBVyxFQUFBOztBQUdiO0VBQ0UsbUJBQW1CLEVBQUE7O0FBSXJCO0VBQ0UsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osZUFBZTtFQUNmLGdCQUFnQixFQUFBOztBQUNoQjtJQU5GO01BT0ksZUFBZTtNQUNmLGdCQUFnQixFQUFBLEVBRW5COztBQUVEO0VBQ0UsYUFBYSxFQUFBOztBQUNiO0lBRkY7TUFHSSxhQUFhLEVBQUEsRUFFaEI7O0FBRUQ7RUFDRSxlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixtQkFBbUIsRUFBQTs7QUFDbkI7SUFKRjtNQUtJLGVBQWUsRUFBQSxFQUVsQjs7QUFFRDtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsbUNBQTJCO1VBQTNCLDJCQUEyQixFQUFBOztBQUc3QjtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1Qsb0NBQTRCO1VBQTVCLDRCQUE0QixFQUFBOztBQUc5QjtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxhQUFhO0VBQ2IsZUFBZSxFQUFBOztBQUdqQjtFQUVJLGlCQUFpQjtFQUNqQixnQ0FBd0I7VUFBeEIsd0JBQXdCO0VBQ3hCLFNBQVMsRUFBQTs7QUFKYjtFQVFJLGlCQUFpQjtFQUNqQixpQ0FBeUI7VUFBekIseUJBQXlCLEVBQUE7O0FBVDdCO0VBYUksYUFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wYXJ0aWFscy9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaC0yMCB7XHJcbiAgaGVpZ2h0OiAyMCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmgtODAge1xyXG4gIGhlaWdodDogODAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tZW51LXRpdGxlIGEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogIzAwMDtcclxufVxyXG5cclxuLnNpZGUtYmFyLWhlYWRlciB7XHJcbiAgYmFja2dyb3VuZDogI0Y3RjdGNztcclxuXHJcbn1cclxuXHJcbi5tZW51LWl0ZW1zIGEge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuICBsaW5lLWhlaWdodDogMS43O1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxNjAwcHgpIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgfVxyXG59XHJcblxyXG4uc2lkZS1iYXItaGVhZGVyIHtcclxuICBwYWRkaW5nOiAzMHB4O1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxNjAwcHgpIHtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgfVxyXG59XHJcblxyXG4ubWVudS10aXRsZSBoMSB7XHJcbiAgZm9udC1zaXplOiA1MHB4O1xyXG59XHJcblxyXG4uc2lkZS1iYXItYWJvdXQge1xyXG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xyXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDUwcHg7XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDE2MDBweCkge1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gIH1cclxufVxyXG5cclxuLmxvZ28td3JhcHBlciBpbWcge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbn1cclxuXHJcbi5zaWRlLWJhci1tZWV0LWxpbmsgcCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogMTAwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xyXG59XHJcblxyXG4uaGFtYnVyZ2VyLWxpbmUtMSwgLmhhbWJ1cmdlci1saW5lLTIsIC5oYW1idXJnZXItbGluZS0zIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XHJcbiAgbWFyZ2luLXRvcDogOHB4O1xyXG59XHJcblxyXG4uaGFtYnVyZ2VyLWxvZ28tdG9nZ2xlLWltZyB7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5yb3RhdGUge1xyXG4gIC5oYW1idXJnZXItbGluZS0xIHtcclxuICAgIHRyYW5zaXRpb246IDIwMG1zO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgdG9wOiAxNHB4O1xyXG4gIH1cclxuXHJcbiAgLmhhbWJ1cmdlci1saW5lLTMge1xyXG4gICAgdHJhbnNpdGlvbjogMjAwbXM7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xyXG4gIH1cclxuXHJcbiAgLmhhbWJ1cmdlci1saW5lLTIge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/partials/sidebar/sidebar.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/partials/sidebar/sidebar.component.ts ***!
  \******************************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");




var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(location, router) {
        router.events.subscribe(function (val) {
            console.log(location.path());
        });
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/components/partials/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/components/partials/sidebar/sidebar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Modeling\Desktop\angular\nika\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map