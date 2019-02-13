import { Component } from "@angular/core";
import { Article } from "./article/article.model";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.less"]
})
export class AppComponent {
  article: Article[];

  constructor() {
    this.article = [
      new Article("eiiizong1", "http://eiiizong.top/test", 1),
      new Article("eiiizong2", "http://eiiizong.top", 2),
      new Article("eiiizong3", "http://eiiizong.top", 3)
    ];
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    this.article.push(new Article(title.value, link.value));
    title.value = "";
    link.value = "";
    return false;
  }
  sortedArticles(): Article[] {
    return this.article.sort((a: Article, b: Article) => b.votes - a.votes);
  }
}
