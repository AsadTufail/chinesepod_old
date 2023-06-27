const http = require("http");
const path = require("path");
const ejs = require("ejs");
const fs = require("fs");

http
  .createServer(function (req, res) {
    // This you do not need for simple web requests:
    let fieldname;
    let data = {};
    req.rawHeaders.forEach((item, c) => {
      if (!(c % 2)) {
        fieldname = item;
      } else {
        if (fieldname == "Host") req.hostname = item;
        if (fieldname == "Accept-Language") req.acceptLanguage = item;
        if (fieldname == "User-Agent") req.userAgent = item;
      }
    });

    console.log(`Request received: ${req.method} to ${req.hostname}${req.url}`);

    if (req.method !== "GET" || req.url !== "/test") {
      res.write("Not found");
      res.end();
      console.log(req.method, "Not found:", req.hostname + req.url);
    }

    fs.readFile(
      path.join(__dirname, "old.ejs"),
      "utf8",
      function (err, content) {
        let data = {
          course: "1234",
          level: "newbie",
          lesson: "1234",
          title: "Intro to All the Way to Intermediate series",
          lessonDetails:
            'Welcome to our new course code named "All the Way to Intermediate" or #ATWTI for short. In this new series, we hope to teach a complete beginner everything they need to know to get to an intermediate level. Each video will be a short and focused lesson on daily phrases, common grammar, or cultural insights. The series is designed to be watched from beginning to end, and after each lesson, we will recommend some lessons from our library that supplements the topic and boost your learning even further See you in the next video.',
          video: {
            source: "AWS",
            poster:
              "https://s3contents.chinesepod.com/4627/382bda1d90b77322a0caad3edb8de2085d23c6ae/images/1c4e3344a844bd7ace207db188dc4f16d013c770.png",
            link: "https://d2arcxjkuir81y.cloudfront.net/assets/BV0002.TourForHomePage/HLS/BV0002.TourForHomePage.m3u8",
          },
          categories: [
            "show",
            "drama",
            "video",
          ],
          supplementaryTabs: {
            comments: [
              {
                username: "John",
                userPicture: "https://chinesepod.com/data/avatar/default.svg",
                commentDate: "Mar 21, 2022",
                commentMessage: "This is the comment message.",
                label: "TEAM",
                replies: [
                  {
                    username: "Alice",
                    label: "PREMUIM",
                    userPicture: "https://freesvg.org/img/1687419304monk2.png",
                    commentDate: "May 21, 2022",
                    commentMessage: "Reply from Alice.",
                  },
                  {
                    username: "Bob",
                    label: "TEAM",
                    userPicture:
                      "https://chinesepod.com/data/avatar/default.svg",
                    commentDate: "May 21, 2022",
                    commentMessage: "Reply from BOB.",
                  },
                ],
              },
              {
                username: "Emily",
                userPicture: "https://freesvg.org/img/1687419304monk2.png",
                commentDate: "May 21, 2022",
                commentMessage: "This is the comment message.",
                label: "PREMUIM",
                replies: [
                  {
                    username: "Mike",
                    label: "TEAM",
                    userPicture:
                      "https://chinesepod.com/data/avatar/default.svg",
                    commentDate: "May 21, 2022",
                    commentMessage: "This is the comment message.",
                  },
                ],
              },
            ],
            dialogues: [
              {
                traditional: "你好。",
                pinyin: "nǐhǎo。",
                english: "Hello00!",
                audio:
                  "https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3",
              },
              {
                traditional: "1你好。",
                pinyin: "1nǐhǎo。",
                english: "1Hello!",
                audio:
                  "https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3",
              },
            ],
            vocabulary: [
              {
                traditional: "老年痴呆症",
                pinyin: "lǎoniánchīdāizhèng",
                english: "senile dementia",
                audio:
                  "https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3",
              },
              {
                traditional: "鏡頭",
                pinyin: "jìngtóu",
                english: "camera lens; camera shot (in a movie etc); scene",
                audio:
                  "https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3",
              },
            ],
            expansion: [
              {
                word: "历历在目",
                traditional: "離 鄉 多 年 了 但 家鄉 的 風景 依然 歷歷在目",
                pinyin:
                  "lí xiāng duō nián le ， dàn jiāxiāng de fēngjǐng yīrán lìlìzàimù 。",
                english:
                  "Although he has been away from home for many years, the scenery of his hometown is still vivid in his mind.",
                audio:
                  "https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3",
              },
              {
                word: "历历在目",
                traditional: "離 鄉 多 年 了 但 家鄉 的 風景 依然 歷歷在目",
                pinyin:
                  "lí xiāng duō nián le ， dàn jiāxiāng de fēngjǐng yīrán lìlìzàimù 。",
                english:
                  "Although he has been away from home for many years, the scenery of his hometown is still vivid in his mind.",
                audio:
                  "https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3",
              },
            ],
            exercises: [
              {
                chinese: [
                  { text:"辗转反侧", tag: 2 },
                  { text:"潜意识", tag: 1 },
                  { text:"放纵", tag: 3 }
                ],
                english: [
                  { text: "binge watching", tag: 1 },
                  { text: "unconscious mind;subconscious mind;", tag: 3 },
                  { text: "to indulge; to pamper;", tag: 2 }
                ],
              },
              {
                sentences: [
                  "刷剧这种行为其实不只是放松，有的时候也可能变成一种放纵哦",
                  "	绝对不是。",
                  "	你跟我一起去吗？",
                ],
              },
              {
                dictation: [
                  "http://commondatastorage.googleapis.com/codeskulptor-assets/Epoq-Lepidoptera.ogg",
                  "http://commondatastorage.googleapis.com/codeskulptor-assets/week7-brrring.m4a",
                  "http://commondatastorage.googleapis.com/codeskulptor-assets/week7-brrring.m4a",
                  "http://s3.amazonaws.com/chinesepod.com/4627/382bda1d90b77322a0caad3edb8de2085d23c6ae/mp3/64/chinesepod_8448_expansion_108173_prototype_1652466439.mp3",
                ],
              },
              {
                MCQs: [
                  {
                    question: "夜深了，我_____难以入睡",
                    options: ["辗转反侧", "刷剧", "潜意识", "放纵"],
                  },
                  {
                    question: "夜深了，我_____难以入睡",
                    options: ["辗转反侧", "刷剧", "潜意识", "放纵"],
                  },
                ],
              },
            ],
          },
          related: [
            {
              title: "Turndown Service",
              level: "Newbie",
              image: "https://s3contents.chinesepod.com/4628/a691c036f298090058033e02dfb2565e2ad55584/images/e2723ed6915c04a42f1fd723fcdde54b5bd407c7.jpg" 
            },
            {
              title: "Turndown Service",
              level: "Newbie",
              image: "https://s3contents.chinesepod.com/4628/a691c036f298090058033e02dfb2565e2ad55584/images/e2723ed6915c04a42f1fd723fcdde54b5bd407c7.jpg" 
            },
            {
              title: "Turndown Service",
              level: "Newbie",
              image: "https://s3contents.chinesepod.com/4628/a691c036f298090058033e02dfb2565e2ad55584/images/e2723ed6915c04a42f1fd723fcdde54b5bd407c7.jpg" 
            },
            {
              title: "Turndown Service",
              level: "Newbie",
              image: "https://s3contents.chinesepod.com/4628/a691c036f298090058033e02dfb2565e2ad55584/images/e2723ed6915c04a42f1fd723fcdde54b5bd407c7.jpg" 
            }
          ]
        };

        if (err) {
          content =
            "<h1><%= title %></h3><p>This is lesson no. <%= lesson %></p>";
        }

        res.write(ejs.render(String(content), data));
        res.end();
      }
    );
  })
  .listen(9000);

console.log("Listening ...");
