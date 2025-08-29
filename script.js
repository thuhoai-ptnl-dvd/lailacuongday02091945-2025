function playMusic() {
  var audio = document.getElementById('bgMusic');
  var button = document.querySelector('.play-button');
  var album = document.getElementById('album');

  audio.play().catch(err => {
    console.log("Không phát được nhạc:", err);
  });

  button.style.display = 'none'; 
  album.style.display = 'block'; 
}
