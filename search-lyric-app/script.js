const form = document.getElementById('form');
const search = document.getElementById('search');
const result = document.getElementById('result');
const more = document.getElementById('more');

const apiUrl = "https://api.lyrics.ovh/";

form.addEventListener('submit',e=>{
    e.preventDefault;
    const songtext = search.value.trim();

    if(!songtext){
        alert('Entered incorrect information');
    }else{
        searchLyric();
    }
});

async function searchLyric(song){
    const res = await fetch(`${apiUrl}/suggest${song}`);
    const allSongs = await res.json();
    showData(allSongs);
}

function showData(songs){
    result.innerHTML = `
    <ul class="song">
        ${songs.data.map(song =>
                `<li><span>
                <strong>${song.artist.name}</strong> - ${song.title}
                </span>
                <button class="btn"
                data-artist="${song.artist.name}"
                data-songs =${song.title}"
                >Lyric</button>
                </li>`
            ).join("")}
    </ul>
    `;
    if(songs.next || songs.prev){
        more.innerHTML = `
        ${songs.prev ? `<button class="btn" onclick="getMoreSongs(${songs.prev})">prev</button>`:''}
        ${songs.next ? `<button class="btn" onclick="getMoreSongs(${songs.next})">next</button>`:''}
        `
    }else{
        more.innerHTML = "";
    }
}

async function getMoreSongs(songsUrl){
    const res = await fetch(`${songsUrl}`);
    const allSongs = await res.json();
    showData(allSongs);
}

result.addEventListener('click',e=>{
    const clickEl = e.target;

    if(clickEl.textName == "BUTTON"){
        const artist = clickEl.getAttribute('data-artist');
        const songName = clickEl.getAttribute('data-songs');
        getLyric(artist,songName);
    }
});

async function getLyric(artist,songName){
    const res = await fetch(`${apiUrl}/v1${artist}/${songName}`);
    const data = await res.json();
    const lyrics = data.lyrics.replace(/(\r\n|\r|\n)/g,"<br>");

    if(lyrics){
        result.innerHTML = `<h2><span>
        <strong>${artist}</strong> - ${song.title}
        </span></h2>
        <span><${lyrics}</span>
        `;
    }else{
        result.innerHTML = `<h2><span>
        <strong>${artist}</strong> - ${song.title}
        </span></h2>
        <span><No data</span>
        `;
    }
    more.innerHTML = "";
}
