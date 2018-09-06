import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServers = false;
  serverCreationStatus = 'No Server was created';
  serverName = 'Test Server';
  serverCreated = false;
  servers = ['Test Server', 'Test Server 1']


  constructor() {
    setTimeout(() =>{
      this.allowNewServers = true;
    },2000)
   }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created with name '+ this.serverName;
  }

  // onUpdateServerName(event : Event){
  //   this.serverName = (<HTMLInputElement>event.target).value;
  // }

}
