gratitudeList = [];
listContainer = document.getElementById('gratitudeList');
numDislplayed = 0;
addGratitude = () =>{
    newGrat = document.getElementById('grat').value;
    if(newGrat != ''){
        gratitudeList.push(newGrat);
        displayGratitudes();
        numDislplayed += 1;
    }
    document.getElementById('grat').value = '';
}
displayGratitudes = () =>{
    for(let i = numDislplayed; i < gratitudeList.length; i++){
        console.log(gratitudeList[i]);
        const li = document.createElement("li");
        li.textContent = gratitudeList[i];
        console.log(li);
        listContainer.appendChild(li);
    }
}