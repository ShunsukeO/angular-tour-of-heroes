import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: string[] = []; // string型の配列を初期値ブランクで定義

  add(message: string): void {
    this.messages.push(message); // pushメソッドによりmessages配列に要素を追加
  }

  clear() {
    this.messages = []; // 配列の中身をブランクにする
  }
}
