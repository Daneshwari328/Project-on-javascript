const generateMemeBtn = document.querySelector(".meme-generator .generate-meme-btn");
const memeImage = document.getElementsByClassName(".meme-generator .img")
const memeTitle = document.querySelector(".meme-generator .meme-title")
const memeAuthor = document.querySelector(".meme-generator .meme-author");


function updateDetails(src,title,author){
    if(src==null){
    
    memeImage.setAttribute("src",url);
   memeImage.innerHTML = url;
}
    memeTitle.innerHTML = title;
    memeAuthor.innerHTML = `Meme by : ${author}`;
};

  const generateMeme = ()=>{
    fetch(" https://meme-api.com/gimme")
    .then((response)=>response.json())
    .then((data)=>{
        console.log(data);
       updateDetails(data.url,data.title,data.author);
    });
 }
generateMemeBtn.addEventListener("click",generateMeme);
 generateMeme();

