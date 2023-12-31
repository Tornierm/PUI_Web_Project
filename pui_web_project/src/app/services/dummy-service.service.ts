import { Injectable, WritableSignal, signal } from '@angular/core';
import { UrlSerializer } from '@angular/router';
import { Article } from '../interfaces/article';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class DummyServiceService {

  constructor() { }
  articles: Article[] = [];
     //{id: 1, id_user: 1, abstract: "Abstarct 1", subtitle: "Subtitle 1", body: "Body artikel 1", update_date: new Date(), category: "Economy", title: "Titel 1", image_data: "???", image_media_type: "Type 1", isImageSaved: true, imageError:"", cardImageBase64:""}
  //];

  //   {id: 2, id_user: 1, abstract: "Abstarct 2", subtitle: "Subtitle 2", body: "Body artikel 2", update_date: new Date(), category: "National", title: "Titel 2", thumbnail_image: "???", thumbnail_media_type: "Type 1"},
  //   {id: 3, id_user: 1, abstract: "Abstarct 3", subtitle: "Subtitle 3", body: "Body artikel 3", update_date: new Date(), category: "International", title: "Titel 3", thumbnail_image: "???", thumbnail_media_type: "Type 1"},
  //   {id: 4, id_user: 1, abstract: "Abstarct 4", subtitle: "Subtitle 4", body: "Body artikel 4", update_date: new Date(), category: "Sports", title: "Titel 4", thumbnail_image: "???", thumbnail_media_type: "Type 1"},
  //   {id: 5, id_user: 1, abstract: "Abstarct 5", subtitle: "Subtitle 5", body: "Body artikel 5", update_date: new Date(), category: "Technology", title: "Titel 5", thumbnail_image: "???", thumbnail_media_type: "Type 1"},
  //   {id: 6, id_user: 1, abstract: "Abstarct 6", subtitle: "Subtitle 6", body: "Body artikel 6", update_date: new Date(), category: "Economy", title: "Titel 6", thumbnail_image: "???", thumbnail_media_type: "Type 1"},
  

  user1: User = {
    Authorization: "",
    expires: "",
    apikey: "",
    group: 1,
    user: 1,
    username: "admin",
    passwd: "admin"
  }

  user: WritableSignal<User | null> = signal(null);

  login(username: string, passwd: string){
    if(username == "admin" && passwd == "admin"){
      this.user.set(this.user1);
      this.isLogged.set(true)
    }
    else {
      this.user.set(null);
    }
  }

  isLogged = signal(false)

  getUser() {
    return this.user;
  }

  logout() {
    this.user.set(null);
    this.isLogged.set(false)
  }

  getArticles(): Article[] {
    return this.articles;
  }

  getArticle(id: number): Article{
    let index = this.articles.findIndex(article => {return article.id == id})
    return this.articles[index];
  }

}
