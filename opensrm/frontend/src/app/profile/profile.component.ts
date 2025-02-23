import { Component, inject, OnInit } from '@angular/core';
import { UserRes, UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {

  constructor(private userService: UserService) {}

  email = ''

  ngOnInit(): void {
      this.userService.U().subscribe((v: UserRes) => {
        this.email = JSON.parse(JSON.stringify(v["user"])).email
      })
  }

}
