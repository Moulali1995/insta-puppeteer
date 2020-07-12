const puppeteer = require("puppeteer-core");

(async () => {
  const browser = await puppeteer.launch({
    product: "chrome",
    executablePath:
      "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
    dumpio: true,
  });
  const page = await browser.newPage();
  await page.goto("https://www.instagram.com/p/B_H_Cb2pZLi/");

  // Get the "viewport" of the page, as reported by the page.
  let dimensions = await page.evaluate(() => {
    let map1 = [];
    const post = document.getElementsByClassName("C4VMK");
    console.log(post.length);
    for (let i = 1; i < post.length; i++) {
      map1.push({
        username: document.getElementsByClassName(
          "sqdOP yWX7d     _8A5w5   ZIAjV "
        )[i].innerText,
        comment: document.getElementsByClassName("C4VMK")[i].childNodes[1]
          .innerText,
        timestamp: document
          .getElementsByClassName("FH9sR Nzb55")
          [i].getAttribute("datetime"),
      });
    }
    let likes = document.getElementsByClassName(
        "                    Igw0E   rBNOH        eGOV_     ybXk5    _4EzTm                                                                                   XfCBB          HVWg4                 "
      ),
      likes_arr = [];
    for (let i = 1; i < likes.length; i++) {
      likes_arr.push(likes[i].childNodes[0].innerText);
    }
    map1.push({
      likes: likes_arr,
    });
    return map1;
  });
  console.log(dimensions);

  await browser.close();
})();
