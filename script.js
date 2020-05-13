// TODO: add code here
window.addEventListener("load", function(){
    let URL = "https://handlers.education.launchcode.org/static/astronauts.json";
    fetch(URL).then(function(response){
        response.json().then(function(json){
            console.log(json.length);
            const container = document.getElementById("container");
            const sortedAstronauts = json.sort((a,b) => b.hoursInSpace > a.hoursInSpace ? 1 : -1);
            for (let astronaut of sortedAstronauts) {
                let greenClassIfActive = (astronaut.active === true) ? ` class="greenActive"` : "";
                container.innerHTML += `
                    <div class="astronaut">
                        <div class="bio">
                            <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
                            <ul>
                                <li>Hours in space: ${astronaut.hoursInSpace}</li>
                                <li${greenClassIfActive}>Active: ${astronaut.active}</li>
                                <li>Skills: ${astronaut.skills.join(", ")}</li>
                            </ul>
                        </div>
                        <img class="avatar" src="${astronaut.picture}">
                    </div>
                `;
            };
            container.innerHTML += `Total astronauts: ${json.length}`;
        });
    });
})
