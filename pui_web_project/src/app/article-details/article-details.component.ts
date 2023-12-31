import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article, IndividualArticle } from '../interfaces/article';
import { NewsService } from '../services/news.service';
import { DummyServiceService } from '../services/dummy-service.service';
import { User } from '../interfaces/user';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})

export class ArticleDetailsComponent implements OnInit {
  article: IndividualArticle | null = null;
  user: User | null = null;

  constructor(
    private route: ActivatedRoute,
    private newsService: NewsService
  ) {}

  handleError(err: HttpErrorResponse): void{
    window.alert("An Error occured:" + err.message);
  }

  ngOnInit(): void {
    // Retrieve the article ID from the route parameter
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam !== null) {
      const articleId = parseInt(idParam); // Convert the ID to a number
  
      // Fetch article details based on the ID
      this.newsService.getArticle(articleId).subscribe(
        (article) => {
          this.article = article;
        },
        (error) => {
          this.handleError(error);
        },
        () => {
          console.log("process completed");
        }
      );
    }
  }
}





/*
export class ArticleDetailsComponent {
  article: Article = {id:99, id_user:77, abstract: "Abstract X", subtitle:"Subtitle of article", body: "Test", update_date: new Date, category:"Sport", title:"Test title", thumbnail_image:"", thumbnail_media_type:""}; // Assumption: We have the interface. Right now, it still need to be filled

  constructor(
    private route: ActivatedRoute,
  //  private newsService: NewsService, // Assumption: Service for data queries
    private dummyService: DummyServiceService
  ) {}

  ngOnInit() {

    this.article = this.dummyService.getArticle(1);
  }

  //  const articleId = this.route.snapshot.params['id'];
  //  this.newsService.getArticle(articleId).subscribe((article) => {
  //    this.article = article;
  //  });
  }
  */