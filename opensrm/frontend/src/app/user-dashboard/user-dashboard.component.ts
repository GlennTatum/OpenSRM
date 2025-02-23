import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { QuestionService, Question } from '../question.service';
import { UserService, UserRes, User } from '../user.service';

@Component({
  selector: 'app-user-dashboard',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.css'
})
export class UserDashboardComponent {

   private userService = inject(UserService);
   private questionService = inject(QuestionService);
 
   active_user = ''
   study_topics: string[] = []
   mmr: string[] = []

   study_map: Map<string | undefined, string> = new Map();

   avatar = ''
 
   constructor(private http: HttpClient, private route: ActivatedRoute) {}
 
   ngOnInit(): void {
       this.userService.U().subscribe((v: UserRes) => {
         let user: User = JSON.parse(JSON.stringify(v["user"]))
 
         this.active_user = user.email;

         this.avatar = `https://api.dicebear.com/9.x/identicon/svg?seed=${user._id}`
         
         this.study_topics = Object.keys(user.topics)
         this.mmr = Object.values(user.topics)

         let t = JSON.parse(JSON.stringify(user.topics))
         let topics = JSON.parse(JSON.stringify(t));

      })
   }
}
