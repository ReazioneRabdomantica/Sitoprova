const html = document.documentElement;
const canvas = document.querySelector('.spider-crawling');
const context = canvas.getContext ('2d');

const currentFrame = index =>(
    `/risorse/frame${index.toString().padStart(1, '0')}.png`);

const frameCount = 9;

const preloadImages = () => {
    for (let i = 1; i < frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
    }
  };

canvas.height = 867;
canvas.width = 1655;
const img = new Image();
img.src = currentFrame(1);
img.onload = function(){
    context.drawImage(img, 0,0);
}

const updateImage = index => {
    img.src = currentFrame (index);
    context.drawImage(img, 0, 0);
}

window.addEventListener('scroll', () => {
    const scrollTop = html.scrollTop;
    const maxScrollTop = html.scrollHeight - window.innerHeight;
    const scrollFraction = scrollTop/ maxScrollTop;
    const frameIndex = Math.min(frameCount - 1, Math.floor
        (scrollFraction * frameCount));
    
    requestAnimationFrame(()=> updateImage(frameIndex + 1))
    context.clearRect (0, 0, context.canvas.width, context.canvas.height);
    console.log(frameIndex)
})
