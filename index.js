var count = 0;
var listOfGif = [
    "https://media.giphy.com/media/vcrq890Ok6LXRnYl7B/giphy.gif",
    "https://media.giphy.com/media/4oJPtYqOQ2xoY/giphy.gif",
    "https://media.giphy.com/media/kfZfVqxRQ39Bu/giphy.gif",
    "https://media.giphy.com/media/aipkSPpcdtYc0/giphy.gif",
    "https://media.giphy.com/media/zQsQ9UDdk2jGU/giphy.gif",
    "https://media.giphy.com/media/nwWKRTtHskhy0/giphy.gif"
]

function next(){
    count++;
    if (count===1){
        var x = prompt("Do you want music to play?\nEnter 'Y' if yes ");
        if (x == "Y"){
            alert("next music will start playing \nplease adjust your device's volume!!");
            var a = new Audio('sounds/happy-birthday.mp3');
            a.play();
        }

        document.querySelector("img").setAttribute("src", listOfGif[0]);
        document.querySelector("img").style.borderRadius = "30%";
        document.querySelector("p").innerHTML = "Happy Birthday!!!";

        
        setTimeout(function() {
            document.querySelector("img").setAttribute("src", listOfGif[1]);
            document.querySelector("img").style.borderRadius = "30%";

            setTimeout(function() {
                document.querySelector("img").setAttribute("src", listOfGif[2]);
                document.querySelector("img").style.borderRadius = "30%";

                setTimeout(function() {
                    document.querySelector("img").setAttribute("src", listOfGif[3]);
                    document.querySelector("img").style.borderRadius = "30%";

                    setTimeout(function() {
                        document.querySelector("img").setAttribute("src", listOfGif[4]);
                        document.querySelector("img").style.borderRadius = "30%";
                        
                        setTimeout(function() {
                            document.querySelector("img").setAttribute("src", listOfGif[5]);
                            document.querySelector("img").style.borderRadius = "30%";
                            document.querySelector("p").innerHTML = "see you then!!";
                        }, 6000);
                    }, 6000);
                }, 6000);
            }, 6000);
        }, 6000);

    }
}