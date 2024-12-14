import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ContentComponent } from './content/content.component';
import { StatusBarComponent } from './status-bar/status-bar.component';
import { ContentTitleComponent } from './content/content-title/content-title.component';
import { RoomStatusComponent } from './status-bar/room-status/room-status.component';
import { StatusListComponent } from './status-bar/status-list/status-list.component';
import { ListCategoryComponent } from './status-bar/list-category/list-category.component';
import { NavButtonComponent } from './nav-bar/nav-button/nav-button.component';
import { LayoutComponent } from './content/layout/layout.component';
import { PanelComponent } from './content/layout/panel/panel.component';
import { TerminalComponent } from './content/layout/panel/widgets/terminal/terminal.component';
import { ButtonComponent } from './content/layout/panel/widgets/button/button.component';
import { EventComponent } from './content/layout/panel/widgets/event/event.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ContentComponent,
    StatusBarComponent,
    ContentTitleComponent,
    RoomStatusComponent,
    StatusListComponent,
    ListCategoryComponent,
    NavButtonComponent,
    LayoutComponent,
    PanelComponent,
    TerminalComponent,
    ButtonComponent,
    EventComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
