// check Whether both passwords are same or not.
function checkPassword() {
    var value1 = document.getElementById("password").value;
    var value2 = document.getElementById("cpassword").value;
            
    if (value1 === value2) {
        location.href = "main.html";
    } else {
        alert("Wrong Password");
    }
    
}

/**second page */
let galleryImages = document.querySelectorAll(".gallery-img");
let getLatestOpenedImg;
let windowWidth = window.innerWidth;

if(galleryImages){
    galleryImages.forEach(function(image, index){
        image.onclick = function(){
            let getElementCss = window.getComputedStyle(image);
            let getFullImgUrl = getElementCss.getPropertyValue("background-image");
            let getImgUrlPosition = getFullImgUrl.split("/img/images/");
            let setNewImgUrl = getImgUrlPosition[1].replace('")', '');
            
            getLatestOpenedImg = index + 1; //count current index of image

           /*popup window*/ 
            let container = document.body;
            let newImgWindow = document.createElement("div"); //created element for window
            container.appendChild(newImgWindow); //applying div to the body
            /* attributes for a div */
            newImgWindow.setAttribute("class", "img-window"); //return to css file
            newImgWindow.setAttribute("onclick", "closeImg()"); //close image by function closeImg()

            let newImg = document.createElement("img");
            newImgWindow.appendChild(newImg); //applying image to the div block
            newImg.setAttribute("src", "img/" + setNewImgUrl); 
            newImg.setAttribute("id", "current-img");            

            /**onload so that this function will load after image */
            newImg.onload = function(){
            let imgWidth = this.width;
            let calcImgToEdge = ((windowWidth - imgWidth) / 2) - 80; //half, 80 is px
            
            /**change the images */
            let newNextBtn = document.createElement("a"); //link 
            let btnNextText = document.createTextNode("Next");
            newNextBtn.appendChild(btnNextText); //apply the text to the button
            container.appendChild(newNextBtn); //apply button to the body
            newNextBtn.setAttribute("class", "img-btn-next");
            newNextBtn.setAttribute("onclick", "changeImg(1)");
            newNextBtn.style.cssText = "right: " + calcImgToEdge + "px;";
            
            let newPrevBtn = document.createElement("a"); //link
            let btnPrevText = document.createTextNode("Prev");
            newPrevBtn.appendChild(btnPrevText); //apply the text to the button
            container.appendChild(newPrevBtn);
            newPrevBtn.setAttribute("class", "img-btn-prev");
            newPrevBtn.setAttribute("onclick", "changeImg(0)");
            newPrevBtn.style.cssText = "left: " + calcImgToEdge + "px;";
            }
        }
    });
}

/**function for close image */
function closeImg(){
    document.querySelector(".img-window").remove(); //queryselector is used to grab element
    document.querySelector(".img-btn-next").remove(); 
    document.querySelector(".img-btn-prev").remove(); 
}
/**function for changing images */
function changeImg(changeDirection){
    document.querySelector("#current-img").remove();

    /**just creating new image */
    let getImgWindow = document.querySelector(".img-window");
    let newImg = document.createElement("img");
    getImgWindow.appendChild(newImg);

    /**attribute link to the new image */
    let calcNewImg;
    if(changeDirection === 1){
        calcNewImg = getLatestOpenedImg + 1;
        if(calcNewImg > galleryImages.length){
            calcNewImg = 1;
        }
    }
    else if(changeDirection === 0){
        calcNewImg = getLatestOpenedImg - 1;
        if(calcNewImg < 1){
            calcNewImg = galleryImages.length;
        }
    }
    newImg.setAttribute("src", "img/img" + calcNewImg + ".jpg");
    newImg.setAttribute("id", "current-img");
    
    getLatestOpenedImg = calcNewImg;

    /*change the position of button */
    newImg.onload = function(){
        let imgWidth = this.width;
        let calcImgToEdge = ((windowWidth - imgWidth) / 2) - 80; //half, 80 is px

        let nextBtn = document.querySelector(".img-btn-next");
        nextBtn.style.cssText = "right: " + calcImgToEdge + "px;";

        let prevBtn = document.querySelector(".img-btn-prev");
        prevBtn.style.cssText = "left: " + calcImgToEdge + "px;";
    }
}
// Open the Modal
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
  $(document).ready(function() {
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'Chlorine.mp3');
    
    audioElement.addEventListener('ended', function() {
        this.play();
    }, false);
    
    audioElement.addEventListener("canplay",function(){
        $("#status").text("Status: Ready to play").css("color","green");
    });
    
    
    $('#play').click(function() {
        audioElement.play();
        $("#status").text("Status: Playing");
    });
    
    $('#pause').click(function() {
        audioElement.pause();
        $("#status").text("Status: Paused");
    });
    
    $('#restart').click(function() {
        audioElement.currentTime = 0;
    });
    $('#play').on('mouseover', function() {
        $(this).css('background-color', 'lightblue');
    });
    
    $('#play').on('mouseout', function() {
        $(this).css('background-color', '');
    });
    
    $('#pause').on('mouseover', function() {
        $(this).css('background-color', 'lightblue');
    });
    
    $('#pause').on('mouseout', function() {
        $(this).css('background-color', ''); 
    });
    
    $('#restart').on('mouseover', function() {
        $(this).css('background-color', 'lightblue');
    });
    
    $('#restart').on('mouseout', function() {
        $(this).css('background-color', ''); 
    });    
});
const modal = document.getElementById('myModal');

function closeModal() {
    modal.style.display = 'none';
}

function openModal() {
    modal.style.display = 'block';
}
document.addEventListener('keypress', function(event) {
    if (event.key === "Enter" && modal.style.display === 'block') {
        closeModal();
    }
});
