import { Component, OnInit } from '@angular/core';
import { ThemeServiceService } from 'src/app/theming/theme-service.service';
import {SidebarService} from "../services/sidebar/sidebar.service";
import {FileUploadComponent} from "../../features/file-upload/file-upload.component";
import {MatDialog} from "@angular/material/dialog";
import {ChatService} from "../services/chat/chat.service";
import {SynthesisService} from "../services/text-speech-synth/synthesis.service"
import {SharedService} from "../services/shared/shared.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit{
  chatId!: string
  constructor(
    public sidebarService: SidebarService,
    private themeService:ThemeServiceService,
    private chatService: ChatService,
    public sharedService: SharedService,
    public synthesisService: SynthesisService,
    public dialog: MatDialog,
  ) {}

  isDarkMode: Boolean = false;

  toggleDarkMode(event: any) {
    this.isDarkMode = event.target.checked;
    if (this.isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }

  disabilities: string[] = [
    "Color Blindness", "Dyslexia", "Autism"
  ];
  selectedDisability: string =  "Here";

  ngOnInit(){
    this.changeTheme('Default')
    }

  changeTheme(name:any) {
    console.log("disability");
    console.log(name);
    this.themeService.setTheme(name);
  }

  openUploadFileDialog() {
    this.chatService.getChatId().subscribe((res) => {
      localStorage.setItem('chat_id', res.chat_id)
      this.sharedService.chatId = res.chat_id
    })
    this.dialog.open(FileUploadComponent, {width: '450px'});
  }

  textToSpeech(text:string){
    this.sharedService.textToSpeech(text, "en")
  }

  // speechToText(){
  //   // this.sharedService.speechToText()
  // }

  getChatLists(){

  }
}
