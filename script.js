var playsong = new Audio("audios/SongF.mp3")
var playsong2 = new Audio("audios/SongX.mp3")
var playsong3 = new Audio("audios/SongD.mp3")
var playsong4 = new Audio("audios/SongC.mp3")
var playsong5 = new Audio("audios/SongA.mp3")

function score(){
    var scorr = document.getElementById("input").value
  if (scorr != ""){
    if (scorr >=0 && scorr < 20) {
        displayResult.innerHTML = "FAIL"
        displayResult.style.color="red"
        playsong.play() 
        playsong2.pause()
        playsong3.pause()
        playsong4.pause()
        playsong5.pause()

    }else if (scorr >=20 && scorr< 40){
        displayResult.innerHTML ="GOOD"
        displayResult.style.color="yellow"
        playsong2.play()
        playsong.pause()
        playsong3.pause()
        playsong4.pause()
        playsong5.pause()



    }else if (scorr >=40 && scorr< 60){
        displayResult.innerHTML ="GOOD"
        displayResult.style.color="green"
        playsong3.play()
        playsong2.pause()
        playsong.pause()
        playsong4.pause()
        playsong5.pause()

    }else if (scorr >=60 && scorr< 80){
        displayResult.innerHTML ="GREAT"
        displayResult.style.color="blue"
        playsong4.play()
        playsong2.pause()
        playsong.pause()
        playsong3.pause()
        playsong5.pause()
    
    }else if (scorr >=80 && scorr <= 100){
        displayResult.innerHTML ="EXCELLENCE"
        displayResult.style.color="white"
        playsong5.play()
        playsong2.pause()
        playsong.pause()
        playsong3.pause()
        playsong4.pause()
   

    }else if (scorr >100){
        displayResult.innerHTML ="INVALID"
        displayResult.style.color="black"
    }else if (scorr <0) {
        displayResult.innerHTML ="INVALID"
        displayResult.style.color="black"
    }

  }else {
    displayResult.innerHTML = "INPUT THE GRADE"
  }
}
