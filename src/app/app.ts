import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainNav } from './main-nav/main-nav';
import { ImageBox } from './image-box/image-box';
import { AboutMe } from './about-me/about-me';
import { Skills } from './skills/skills';
import { Project } from './project/project';
import { ContactMe } from './contact-me/contact-me';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,MainNav,ImageBox
    ,AboutMe,Skills,Project,ContactMe,FormsModule
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  protected title = 'MyPort';
}
