const allPlayers = () => {
    const searchValue = document.getElementById("search-box").value;
    const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchValue}`;
    // console.log(url);
    fetch(url)
        .then((response) => response.json())
        // .then((data) => console.log(data));
        // To access first player
        // .then((data) => console.log(data.player));
        .then((data) => showPlayerDetails(data.player));
    // console.log(searchValue);
};

const showPlayerDetails = (players) => {
    for (const player of players) {
        // console.log(player);
        // }


        const parent = document.getElementById("player-container");
        const div = document.createElement("div");
        div.innerHTML = `
        <div class="card border p-5 mb-3">
         <div class="pro-pic">
          <img class="w-50" src="${player.strThumb}" alt="">
         </div>
         <h2>Name: ${player.strPlayer}</h2>
         <h3>Country: ${player.strNationality}</h3>
         <p></p>
         <div class="all-button">
           <button onclick="details('${player.idPlayer}')" class="btn btn-success">Details</button>
           <button class="btn btn-danger"> Delete</button>
         </div>
        </div>`;
        parent.appendChild(div);
        console.log(player);
    }
};

const details = (id) => {
    // console.log("OK", info);
    // console.log(info);
    const url = `https://www.thesportsdb.com/api/v1/json/2/lookupplayer.php?id=${id}`;
    fetch(url)
        .then((response) => response.json())
        // .then((data) => console.log(data.players[0]));
        .then((data) => setDetails(data.players[0]));

};


// Set Player Details

const setDetails = (info) => {
    // console.log(info);
    document.getElementById("details-container").innerHTML = `
      <div>
      <img src="" alt="">
      <h1>Name: ${info.strPlayer}        
      `
}