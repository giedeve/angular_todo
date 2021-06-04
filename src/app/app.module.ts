import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { TodosComponent } from './todo/todos/todos.component';
import { TodoItemComponent } from './todo/todo-item/todo-item.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { AddTodoComponent } from './todo/add-todo/add-todo.component';
// import { ErrorPageComponent } from './error-page/error-page.component';

@NgModule({
  declarations: [AppComponent, NavigationComponent, TodosComponent, TodoItemComponent, AddTodoComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
