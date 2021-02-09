// 月は予定している月-1を入れる。(12月に入れたい場合→11)
// {'Date': new Date(年, 月-1, 日), 'Title': '内容', 'Link':'サイトURL'},
var events = [
    {'Date': new Date(2020, 11, 23), 'Title': '練習'},
    {'Date': new Date(2021, 0, 7), 'Title': '紅白戦'},
    {'Date': new Date(2021, 1, 15), 'Title': '練習'},
    {'Date': new Date(2021, 1, 17), 'Title': '練習'},
    {'Date': new Date(2021, 1, 24), 'Title': '練習'},
    {'Date': new Date(2021, 2, 3), 'Title': '練習'},
    {'Date': new Date(2021, 2, 10), 'Title': '練習'},
    {'Date': new Date(2021, 2, 17), 'Title': '練習'},
    {'Date': new Date(2021, 2, 19), 'Title': '練習試合'},
    {'Date': new Date(2021, 2, 20), 'Title': '公式戦'},
    {'Date': new Date(2021, 2, 22), 'Title': '練習'},
    {'Date': new Date(2021, 2, 24), 'Title': '練習'},
    {'Date': new Date(2021, 2, 27), 'Title': '公式戦'},
    {'Date': new Date(2021, 2, 29), 'Title': '練習'},
    {'Date': new Date(2021, 2, 31), 'Title': '練習'},
    {'Date': new Date(2021, 3, 7), 'Title': '練習'},
    {'Date': new Date(2021, 3, 10), 'Title': '練習'},
    {'Date': new Date(2021, 3, 14), 'Title': '練習'},
    {'Date': new Date(2021, 3, 18), 'Title': '公式戦'},
    {'Date': new Date(2021, 3, 21), 'Title': '練習'},
    {'Date': new Date(2021, 3, 28), 'Title': '練習'},
    {'Date': new Date(2021, 4, 1), 'Title': '公式戦'},
    {'Date': new Date(2021, 4, 2), 'Title': '公式戦'},
];
  
var settings = {};
var element = document.getElementById('caleandar');
caleandar(element, events, settings);