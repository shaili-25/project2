const canvas = document.getElementById("canvas");
const addTextBtn = document.getElementById("addText");
const addImageBtn = document.getElementById("addImage");
const addVideoBtn = document.getElementById("addVideo");

addTextBtn.addEventListener("click", () => {
    const textElement = document.createElement("p");
    textElement.textContent = "Your text goes here";
    canvas.appendChild(textElement);
});

addImageBtn.addEventListener("click", () => {
    const imageElement = document.createElement("img");
    imageElement.src = "nannenti.jpeg"; 
    canvas.appendChild(imageElement);
});

addVideoBtn.addEventListener("click", () => {
    const videoElement = document.createElement("video");
    videoElement.src = "vecteezy_flying-in-jungle-for-summer-hawaii-is-motion-footage-for-adventure-films-and-cinematic-in-jungle-scene-also-good-background-for-scene-and-titles-logos-4k-seamless-loop_1626994.mov";
    videoElement.controls = true;
    canvas.appendChild(videoElement);
});
