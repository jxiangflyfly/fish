System.register(["angular2/core", "angular2/router", "./comp1-main.component", "./comp2-sub.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, router_2, comp1_main_component_1, comp2_sub_component_1, router_3;
    var Component1Component;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
                router_3 = router_1_1;
            },
            function (comp1_main_component_1_1) {
                comp1_main_component_1 = comp1_main_component_1_1;
            },
            function (comp2_sub_component_1_1) {
                comp2_sub_component_1 = comp2_sub_component_1_1;
            }],
        execute: function() {
            Component1Component = (function () {
                function Component1Component(_routeParams) {
                    this._routeParams = _routeParams;
                }
                Component1Component.prototype.ngOnInit = function () {
                    this.source = this._routeParams.get('source');
                    this.optional = this._routeParams.get('optional');
                };
                Component1Component = __decorate([
                    core_1.Component({
                        template: "\n\n\n<!DOCTYPE html>\n<html>\n    <head>\n        <title>Images</title>\n        <style type=\"text/css\">\n            body {\n                color: #665544;\n                background-color: #d4d0c6;\n                background-image: url(\"images/backdrop.gif\");\n                font-family: Georgia, \"Times New Roman\", serif;\n                text-align: center;}\n            .wrapper {\n                width: 720px;\n                margin: 0px auto;}\n            .header {\n                margin: 40px 0px 20px 0px;}\n            .entry {\n                width: 220px;\n                float: left;\n                margin: 10px;\n                height: 198px;\n                background-image: url(\"images/shadow.png\");\n                background-repeat: no-repeat;\n                background-position: bottom;}\n            figure {\n                display: block;\n                width: 202px;\n                height: 170px;\n                background-color: #e7e3d8;\n                margin: 0;\n                padding: 9px;\n                text-align: left;}\n            figure img {\n                width: 200px;\n                height: 150px;\n                border: 1px solid #d6d6d6;}\n            figcaption {\n                background-image: url(\"images/icon.png\");\n                padding-left: 20px;\n                background-repeat: no-repeat;}\n        </style>\n    </head>\n    <body>\n        <div class=\"wrapper\">\n            <div class=\"header\">\n                <img src=\"images/title.gif\" alt=\"Galerie Botanique\" width=\"456\" height=\"122\" />\n                <p>Here is a selection of antique botanical prints held in our collection.</p>\n            </div>\n            <div class=\"entry\">\n                <figure><img src=\"\" alt=\"Salmon\" />\n                    <figcaption>Salmon</figcaption>\n                </figure>\n            </div>\n            <div class=\"entry\">\n                <figure><img src=\"\" alt=\"Cod\" />\n                    <figcaption>Cod/figcaption>\n                </figure>\n            </div>\n            <div class=\"entry\">\n                <figure><img src=\"images/print-03.jpg\" alt=\"FatFish\" />\n                    <figcaption>Fatfish</figcaption>\n                </figure>\n            </div>\n            <div class=\"entry\">\n                <figure><img src=\"images/print-04.jpg\" alt=\"Skinny Fish\" />\n                    <figcaption>Skinny Fish</figcaption>\n                </figure>\n            </div>\n            <div class=\"entry\">\n                <figure><img src=\"images/print-05.jpg\" alt=\"SmallFish\" />\n                    <figcaption>SmallFish</figcaption>\n                </figure>\n            </div>\n            <div class=\"entry\">\n                <figure><img src=\"images/print-06.jpg\" alt=\"Huge Fish\" />\n                    <figcaption>Huge Fish/figcaption>\n                </figure>\n            </div>\n        </div>\n    </body>\n</html>\n\n\n\n\n\n        This is Component 1\n        <div>\n            Source was {{source}}\n        </div>\n        <div>\n            Optional: {{optional}}\n        </div>\n        <div><a [routerLink]=\"['Component1Main']\">Main</a></div>\n        <div><a [routerLink]=\"['Component1Sub']\">Sub</a></div>\n        <router-outlet></router-outlet>\n\n\n\n\n\n\n    ",
                        directives: [router_3.ROUTER_DIRECTIVES]
                    }),
                    router_2.RouteConfig([
                        { path: '/', name: 'Component1Main', component: comp1_main_component_1.Comp1MainComponent, useAsDefault: true },
                        { path: '/subroute', name: 'Component1Sub', component: comp2_sub_component_1.Comp1SubComponent },
                    ]), 
                    __metadata('design:paramtypes', [router_1.RouteParams])
                ], Component1Component);
                return Component1Component;
            }());
            exports_1("Component1Component", Component1Component);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudDEuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUF5SEE7Z0JBSUksNkJBQW9CLFlBQXlCO29CQUF6QixpQkFBWSxHQUFaLFlBQVksQ0FBYTtnQkFBRyxDQUFDO2dCQUVqRCxzQ0FBUSxHQUFSO29CQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQzlDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQ3RELENBQUM7Z0JBMUhMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLHF6R0F5R1Q7d0JBQ0QsVUFBVSxFQUFFLENBQUMsMEJBQWlCLENBQUM7cUJBQ2xDLENBQUM7b0JBQ0Qsb0JBQVcsQ0FBQzt3QkFDVCxFQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFLFNBQVMsRUFBRSx5Q0FBa0IsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFDO3dCQUN0RixFQUFDLElBQUksRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQUUsdUNBQWlCLEVBQUM7cUJBQzNFLENBQUM7O3VDQUFBO2dCQVdGLDBCQUFDO1lBQUQsQ0FWQSxBQVVDLElBQUE7WUFWRCxxREFVQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudDEuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5pbXBvcnQge09uSW5pdH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcbmltcG9ydCB7Um91dGVQYXJhbXN9IGZyb20gXCJhbmd1bGFyMi9yb3V0ZXJcIjtcbmltcG9ydCB7Um91dGVDb25maWd9IGZyb20gXCJhbmd1bGFyMi9yb3V0ZXJcIjtcbmltcG9ydCB7Q29tcDFNYWluQ29tcG9uZW50fSBmcm9tIFwiLi9jb21wMS1tYWluLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtDb21wMVN1YkNvbXBvbmVudH0gZnJvbSBcIi4vY29tcDItc3ViLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtST1VURVJfRElSRUNUSVZFU30gZnJvbSBcImFuZ3VsYXIyL3JvdXRlclwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICB0ZW1wbGF0ZTogYFxuXG5cbjwhRE9DVFlQRSBodG1sPlxuPGh0bWw+XG4gICAgPGhlYWQ+XG4gICAgICAgIDx0aXRsZT5JbWFnZXM8L3RpdGxlPlxuICAgICAgICA8c3R5bGUgdHlwZT1cInRleHQvY3NzXCI+XG4gICAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzY2NTU0NDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDRkMGM2O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImltYWdlcy9iYWNrZHJvcC5naWZcIik7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IEdlb3JnaWEsIFwiVGltZXMgTmV3IFJvbWFuXCIsIHNlcmlmO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjt9XG4gICAgICAgICAgICAud3JhcHBlciB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDcyMHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4IGF1dG87fVxuICAgICAgICAgICAgLmhlYWRlciB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiA0MHB4IDBweCAyMHB4IDBweDt9XG4gICAgICAgICAgICAuZW50cnkge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyMjBweDtcbiAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxOThweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJpbWFnZXMvc2hhZG93LnBuZ1wiKTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbTt9XG4gICAgICAgICAgICBmaWd1cmUge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyMDJweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDE3MHB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlN2UzZDg7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDlweDtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O31cbiAgICAgICAgICAgIGZpZ3VyZSBpbWcge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkNmQ2ZDY7fVxuICAgICAgICAgICAgZmlnY2FwdGlvbiB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaW1hZ2VzL2ljb24ucG5nXCIpO1xuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O31cbiAgICAgICAgPC9zdHlsZT5cbiAgICA8L2hlYWQ+XG4gICAgPGJvZHk+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ3cmFwcGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWFnZXMvdGl0bGUuZ2lmXCIgYWx0PVwiR2FsZXJpZSBCb3RhbmlxdWVcIiB3aWR0aD1cIjQ1NlwiIGhlaWdodD1cIjEyMlwiIC8+XG4gICAgICAgICAgICAgICAgPHA+SGVyZSBpcyBhIHNlbGVjdGlvbiBvZiBhbnRpcXVlIGJvdGFuaWNhbCBwcmludHMgaGVsZCBpbiBvdXIgY29sbGVjdGlvbi48L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlbnRyeVwiPlxuICAgICAgICAgICAgICAgIDxmaWd1cmU+PGltZyBzcmM9XCJcIiBhbHQ9XCJTYWxtb25cIiAvPlxuICAgICAgICAgICAgICAgICAgICA8ZmlnY2FwdGlvbj5TYWxtb248L2ZpZ2NhcHRpb24+XG4gICAgICAgICAgICAgICAgPC9maWd1cmU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlbnRyeVwiPlxuICAgICAgICAgICAgICAgIDxmaWd1cmU+PGltZyBzcmM9XCJcIiBhbHQ9XCJDb2RcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8ZmlnY2FwdGlvbj5Db2QvZmlnY2FwdGlvbj5cbiAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVudHJ5XCI+XG4gICAgICAgICAgICAgICAgPGZpZ3VyZT48aW1nIHNyYz1cImltYWdlcy9wcmludC0wMy5qcGdcIiBhbHQ9XCJGYXRGaXNoXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGZpZ2NhcHRpb24+RmF0ZmlzaDwvZmlnY2FwdGlvbj5cbiAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVudHJ5XCI+XG4gICAgICAgICAgICAgICAgPGZpZ3VyZT48aW1nIHNyYz1cImltYWdlcy9wcmludC0wNC5qcGdcIiBhbHQ9XCJTa2lubnkgRmlzaFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxmaWdjYXB0aW9uPlNraW5ueSBGaXNoPC9maWdjYXB0aW9uPlxuICAgICAgICAgICAgICAgIDwvZmlndXJlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZW50cnlcIj5cbiAgICAgICAgICAgICAgICA8ZmlndXJlPjxpbWcgc3JjPVwiaW1hZ2VzL3ByaW50LTA1LmpwZ1wiIGFsdD1cIlNtYWxsRmlzaFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxmaWdjYXB0aW9uPlNtYWxsRmlzaDwvZmlnY2FwdGlvbj5cbiAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVudHJ5XCI+XG4gICAgICAgICAgICAgICAgPGZpZ3VyZT48aW1nIHNyYz1cImltYWdlcy9wcmludC0wNi5qcGdcIiBhbHQ9XCJIdWdlIEZpc2hcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8ZmlnY2FwdGlvbj5IdWdlIEZpc2gvZmlnY2FwdGlvbj5cbiAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2JvZHk+XG48L2h0bWw+XG5cblxuXG5cblxuICAgICAgICBUaGlzIGlzIENvbXBvbmVudCAxXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICBTb3VyY2Ugd2FzIHt7c291cmNlfX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICBPcHRpb25hbDoge3tvcHRpb25hbH19XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PjxhIFtyb3V0ZXJMaW5rXT1cIlsnQ29tcG9uZW50MU1haW4nXVwiPk1haW48L2E+PC9kaXY+XG4gICAgICAgIDxkaXY+PGEgW3JvdXRlckxpbmtdPVwiWydDb21wb25lbnQxU3ViJ11cIj5TdWI8L2E+PC9kaXY+XG4gICAgICAgIDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cblxuXG5cblxuXG5cbiAgICBgLFxuICAgIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFU11cbn0pXG5AUm91dGVDb25maWcoW1xuICAgIHtwYXRoOiAnLycsIG5hbWU6ICdDb21wb25lbnQxTWFpbicsIGNvbXBvbmVudDogQ29tcDFNYWluQ29tcG9uZW50LCB1c2VBc0RlZmF1bHQ6IHRydWV9LFxuICAgIHtwYXRoOiAnL3N1YnJvdXRlJywgbmFtZTogJ0NvbXBvbmVudDFTdWInLCBjb21wb25lbnQ6IENvbXAxU3ViQ29tcG9uZW50fSxcbl0pXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50MUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgc291cmNlOiBzdHJpbmc7XG4gICAgb3B0aW9uYWw6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JvdXRlUGFyYW1zOiBSb3V0ZVBhcmFtcykge31cblxuICAgIG5nT25Jbml0KCk6YW55IHtcbiAgICAgICAgdGhpcy5zb3VyY2UgPSB0aGlzLl9yb3V0ZVBhcmFtcy5nZXQoJ3NvdXJjZScpO1xuICAgICAgICB0aGlzLm9wdGlvbmFsID0gdGhpcy5fcm91dGVQYXJhbXMuZ2V0KCdvcHRpb25hbCcpO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
