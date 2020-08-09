var musiclength=document.querySelectorAll(".start").length;
console.log(musiclength);

for(var i=0;i<musiclength;i++)
{
    document.querySelectorAll(".start")[i].addEventListener("click",go);
    document.querySelectorAll(".start")[i].addEventListener("dblclick",pause);
}


var song1=new Audio();
song1.src="music/03 Duffermasti - Hum Chaar (SongsMp3.Com).mp3";

 var song2=new Audio();
song2.src="music/Illegal Weapon 2 - Street Dancer 3D.mp3";

var song3=new Audio();
song3.src="music/Humraah - Malang.mp3";

var song4=new Audio();
song4.src="music/lalbindi.mp3";

var song5=new Audio();
song5.src="music/tenu.mp3";

var song6=new Audio();
song6.src="music/pal.mp3";

var song7=new Audio();
song7.src="music/sardar.mp3";

var song8=new Audio();
song8.src="music/koka.mp3";
function go()
{
    var song_id=this.alt;
    console.log(song_id);


    switch(song_id)
    {
        case "a":
            {
                var check=`image/play${2}.jfif`;
                document.getElementById('a').setAttribute('src',check);
                var check=`image/play${1}.jfif`;
                document.getElementById('b').setAttribute('src',check);
                var check=`image/play${1}.jfif`;
                document.getElementById('c').setAttribute('src',check);
                var check=`image/play${1}.jfif`;
                document.getElementById('d').setAttribute('src',check);
                var check=`image/play${1}.jfif`;
                document.getElementById('e').setAttribute('src',check);
                var check=`image/play${1}.jfif`;
                document.getElementById('f').setAttribute('src',check);
                var check=`image/play${1}.jfif`;
                document.getElementById('g').setAttribute('src',check);

                var check=`image/play${1}.jfif`;
                document.getElementById('h').setAttribute('src',check);
           
                song2.pause();
                song5.pause();
                song5.load();
                song7.pause();
                song7.load();
                song3.pause();
                song2.load();
                song8.pause();
                song8.load();
                song3.load();
                song4.pause();
                song6.load();
                song6.pause();
                song4.load();
                song1.play();

               
                document.querySelector(".music_name").innerHTML="Duffermasti-Hum Char";
                document.querySelector(".song_duration").innerHTML="4:23";
            
                break;
            }
        case "b":
            {
                var check=`image/play${2}.jfif`;
                document.getElementById('b').setAttribute('src',check);
                var check=`image/play${1}.jfif`;
                document.getElementById('a').setAttribute('src',check);
                var check=`image/play${1}.jfif`;
                document.getElementById('c').setAttribute('src',check);
                var check=`image/play${1}.jfif`;
                document.getElementById('d').setAttribute('src',check);
                var check=`image/play${1}.jfif`;
                document.getElementById('e').setAttribute('src',check);
                var check=`image/play${1}.jfif`;
                document.getElementById('f').setAttribute('src',check);
                var check=`image/play${1}.jfif`;
                document.getElementById('g').setAttribute('src',check);

                var check=`image/play${1}.jfif`;
                document.getElementById('h').setAttribute('src',check);
           
           
                song1.pause();
                song3.pause();
                song5.pause();
                song5.load();
                song7.pause();
                song7.load();
                song1.load();
                song3.load();
                song6.load();
                song6.pause();
                song4.pause();
                song4.load();
                song2.play();
                song8.pause();
                song8.load();
              
                document.querySelector(".music_name").innerHTML="Illegal Weapon 2";
                document.querySelector(".song_duration").innerHTML="4:23";
            



                break;
            }
        case "c":
            {
                var check=`image/play${2}.jfif`;
                document.getElementById('c').setAttribute('src',check);
                var check=`image/play${1}.jfif`;
                document.getElementById('a').setAttribute('src',check);
                var check=`image/play${1}.jfif`;
                document.getElementById('b').setAttribute('src',check);
                var check=`image/play${1}.jfif`;
                document.getElementById('d').setAttribute('src',check);
                var check=`image/play${1}.jfif`;
                document.getElementById('e').setAttribute('src',check);
                var check=`image/play${1}.jfif`;
                document.getElementById('f').setAttribute('src',check);
                var check=`image/play${1}.jfif`;
                document.getElementById('g').setAttribute('src',check);

                var check=`image/play${1}.jfif`;
                document.getElementById('h').setAttribute('src',check);
                        
                song1.pause();
                song2.pause();
                song5.pause();
                song5.load();
                song7.pause();
                song7.load();
                song8.pause();
                song8.load();
                song6.load();
                song6.pause();
                song1.load();
                song2.load();
                song4.pause();
                song4.load();
                song3.play();
             
                document.querySelector(".music_name").innerHTML="Humraah";
                document.querySelector(".song_duration").innerHTML="4:23";
            
                break;
            }
        case 'd':
        {
            var check=`image/play${2}.jfif`;
            document.getElementById('d').setAttribute('src',check);
            var check=`image/play${1}.jfif`;
            document.getElementById('a').setAttribute('src',check);
            var check=`image/play${1}.jfif`;
            document.getElementById('c').setAttribute('src',check);
            var check=`image/play${1}.jfif`;
            document.getElementById('b').setAttribute('src',check);
            var check=`image/play${1}.jfif`;
            document.getElementById('e').setAttribute('src',check);
            var check=`image/play${1}.jfif`;
            document.getElementById('f').setAttribute('src',check);
            var check=`image/play${1}.jfif`;
            document.getElementById('g').setAttribute('src',check);

            var check=`image/play${1}.jfif`;
            document.getElementById('h').setAttribute('src',check);

            song1.pause();
            song2.pause();
            song3.pause();
            song1.load();
            song5.pause();
            song7.pause();
            song7.load();
            song6.load();
            song6.pause();
            song5.load();
            song2.load();
            song3.load();
            song4.play();
            song8.pause();
            song8.load();
            
            document.querySelector(".music_name").innerHTML="Humraah";
            document.querySelector(".song_duration").innerHTML="4:23";
        
            break;
       
        }
        case 'e':
        {
            var check=`image/play${2}.jfif`;
            document.getElementById('e').setAttribute('src',check);
            var check=`image/play${1}.jfif`;
            document.getElementById('a').setAttribute('src',check);
            var check=`image/play${1}.jfif`;
            document.getElementById('c').setAttribute('src',check);
            var check=`image/play${1}.jfif`;
            document.getElementById('d').setAttribute('src',check);
            var check=`image/play${1}.jfif`;
            document.getElementById('b').setAttribute('src',check);
            var check=`image/play${1}.jfif`;
            document.getElementById('f').setAttribute('src',check);
            var check=`image/play${1}.jfif`;
            document.getElementById('g').setAttribute('src',check);

            var check=`image/play${1}.jfif`;
            document.getElementById('h').setAttribute('src',check);
            song2.pause();
            song3.pause();
            song2.load();
            song3.load();
            song4.pause();
            song4.load();
            song7.pause();
            song7.load();
            song1.pause();
            song6.load();
            song6.pause();
            song1.load();
            song5.play();
            song8.pause();
            song8.load();
        
            document.querySelector(".music_name").innerHTML="Tenu Na Bol Pawaan";
            document.querySelector(".song_duration").innerHTML="4:23";
        
            break;
        }
        case 'f':
        {
            var check=`image/play${2}.jfif`;
            document.getElementById('f').setAttribute('src',check);
            var check=`image/play${1}.jfif`;
            document.getElementById('a').setAttribute('src',check);
            var check=`image/play${1}.jfif`;
            document.getElementById('c').setAttribute('src',check);
            var check=`image/play${1}.jfif`;
            document.getElementById('d').setAttribute('src',check);
            var check=`image/play${1}.jfif`;
            document.getElementById('e').setAttribute('src',check);
            var check=`image/play${1}.jfif`;
            document.getElementById('b').setAttribute('src',check);
            var check=`image/play${1}.jfif`;
            document.getElementById('g').setAttribute('src',check);

            var check=`image/play${1}.jfif`;
            document.getElementById('h').setAttribute('src',check);

            song2.pause();
            song3.pause();
            song2.load();
            song3.load();
            song4.pause();
            song4.load();
            song1.pause();
            song1.load();
            song5.pause();
            song5.load();
            song7.pause();
            song7.load();
            song6.play();
            song8.pause();
            song8.load();
        
            document.querySelector(".music_name").innerHTML="pal-jalebi";
            document.querySelector(".song_duration").innerHTML="4:23";
        
            break;
       
        }
        case 'g':
        {
            var check=`image/play${2}.jfif`;
            document.getElementById('g').setAttribute('src',check);
            var check=`image/play${1}.jfif`;
            document.getElementById('a').setAttribute('src',check);
            var check=`image/play${1}.jfif`;
            document.getElementById('c').setAttribute('src',check);
            var check=`image/play${1}.jfif`;
            document.getElementById('d').setAttribute('src',check);
            var check=`image/play${1}.jfif`;
            document.getElementById('e').setAttribute('src',check);
            var check=`image/play${1}.jfif`;
            document.getElementById('f').setAttribute('src',check);
            var check=`image/play${1}.jfif`;
            document.getElementById('b').setAttribute('src',check);

            var check=`image/play${1}.jfif`;
            document.getElementById('h').setAttribute('src',check);

            song2.pause();
            song3.pause();
            song2.load();
            song3.load();
            song4.pause();
            song4.load();
            song1.pause();
            song1.load();
            song5.pause();
            song5.load();
            song6.pause();
            song6.load();
            song7.play();
            song8.pause();
            song8.load();
        
            document.querySelector(".music_name").innerHTML="Mere Wala Sardar";
            document.querySelector(".song_duration").innerHTML="4:23";
        
            break;
       

        }
        case 'h':
        {
            var check=`image/play${2}.jfif`;
            document.getElementById('h').setAttribute('src',check);
            var check=`image/play${1}.jfif`;
            document.getElementById('a').setAttribute('src',check);
            var check=`image/play${1}.jfif`;
            document.getElementById('c').setAttribute('src',check);
            var check=`image/play${1}.jfif`;
            document.getElementById('d').setAttribute('src',check);
            var check=`image/play${1}.jfif`;
            document.getElementById('e').setAttribute('src',check);
            var check=`image/play${1}.jfif`;
            document.getElementById('f').setAttribute('src',check);
            var check=`image/play${1}.jfif`;
            document.getElementById('g').setAttribute('src',check);

            var check=`image/play${1}.jfif`;
            document.getElementById('b').setAttribute('src',check);

            song2.pause();
            song3.pause();
            song2.load();
            song3.load();
            song4.pause();
            song4.load();
            song1.pause();
            song1.load();
            song5.pause();
            song5.load();
            song6.pause();
            song6.load();
            song8.play();
            song7.pause();
            song7.load();
            
        
            document.querySelector(".music_name").innerHTML="Koka - Khandaani Shafakhana";
            document.querySelector(".song_duration").innerHTML="4:23";
        
        }

       
    }
    
}
function pause()
{
    var song_id=this.alt;
    switch(song_id)
    {
        case 'a':
            {
                var check=`image/play${1}.jfif`;
                document.getElementById('a').setAttribute('src',check);
                song1.pause();
                song1.load();
                break;
            }
        case 'b':
            {
                var check=`image/play${1}.jfif`;
                document.getElementById('b').setAttribute('src',check);
                song2.pause();
                song2.load();
                break;
            }
        case 'c':
            {
                var check=`image/play${1}.jfif`;
                document.getElementById('c').setAttribute('src',check);
                song3.pause();
                song3.load();
                break;
            }
        case 'd':
            {
                var check=`image/play${1}.jfif`;
                document.getElementById('d').setAttribute('src',check);
                song4.pause();
                song4.load();
                break;
            }
        case 'e':
        {
            var check=`image/play${1}.jfif`;
                document.getElementById('e').setAttribute('src',check);
                song5.pause();
                song5.load();
                break;
        }
        case 'f':
            {
                var check=`image/play${1}.jfif`;
                document.getElementById('f').setAttribute('src',check);
                song6.pause();
                song6.load();
                break;
            }
        case 'g':
            {
                var check=`image/play${1}.jfif`;
                document.getElementById('g').setAttribute('src',check);
                song7.pause();
                song7.load();
                break;
            }
            case 'h':
                {
                    var check=`image/play${1}.jfif`;
                    document.getElementById('h').setAttribute('src',check);
                    song8.pause();
                    song8.load();
                    break;
                }
    }
}