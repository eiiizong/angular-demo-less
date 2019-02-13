import { Component, OnInit, Input } from "@angular/core";
import { Article } from "./article.model";

@Component({
  selector: "app-article",
  templateUrl: "./article.component.html",
  styleUrls: ["./article.component.less"],
  host: {
    class: "row" // 将会添加一个 row 类名
  }
})
export class ArticleComponent implements OnInit {
  @Input() article: Article;
  constructor() {}

  voteDown(): boolean {
    this.article.voteDown();
    return false;
  }
  voteUp(): boolean {
    this.article.voteUp();
    return false;
  }

  ngOnInit() {}
}
