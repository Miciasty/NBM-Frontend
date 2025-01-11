import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
import { QualityGraphComponent } from './content/layout/panel/widgets/quality-graph/quality-graph.component';
import { UsageGraphComponent } from './content/layout/panel/widgets/usage-graph/usage-graph.component';
import { CategoryButtonComponent } from './content/layout/panel/widgets/category-button/category-button.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccessmanagerComponent } from './content/layout/panel/widgets/accessmanager/accessmanager.component';
import { RoomManagerComponent } from './content/layout/panel/widgets/room-manager/room-manager.component';

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
    QualityGraphComponent,
    UsageGraphComponent,
    CategoryButtonComponent,
    AccessmanagerComponent,
    RoomManagerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    BrowserAnimationsModule, 
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
