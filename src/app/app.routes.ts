import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./components/home.component";
import {AboutComponent} from "./components/about.component";

import {NavbarComponent} from "./components/navbar.component";
import {PostsComponent} from "./components/posts.component";
import {FooterComponent} from "./components/footer.component";

export const allAppComponents = [HomeComponent, AboutComponent, NavbarComponent, PostsComponent,FooterComponent];

export const routes: Routes = [
	{path: "about",component:AboutComponent},
	{path: "footer",component:FooterComponent},
	{path: "navbar",component:NavbarComponent},
	{path: "posts",component:PostsComponent},
	{path: "", component: HomeComponent},
	{path: "**", redirectTo: ""}
];

export const appRoutingProviders: any[] = [];

export const routing = RouterModule.forRoot(routes);