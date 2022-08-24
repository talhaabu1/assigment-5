function comoin(){
    const totalePlayears = document.getElementById('totale-name');
    const totalePlayearsText = parseInt(totalePlayears.innerText);

    const perPlayer = document.getElementById('per-player');
    const perPlayerValue = parseFloat(perPlayer.value);

    perPlayer.value = '';

    const playersSum = document.getElementById('players-sum');
    const playersSumText = parseFloat(playersSum.innerText);

    const totalePlayearsSum = totalePlayearsText * perPlayerValue;

    playersSum.innerText = totalePlayearsSum;
}
document.getElementById('btn-calculate').addEventListener('click', function(){
    comoin()
})
document.getElementById('calculat-total').addEventListener('click', function(){
    const playersSum = document.getElementById('players-sum');
    const playersSumText = parseFloat(playersSum.innerText);

    

    const managerInput = document.getElementById('manager-input');
    const managerInputValue = parseFloat(managerInput.value);

    managerInput.value = '';

    const coachInput = document.getElementById('coach-input');
    const coachInputValue = parseFloat(coachInput.value);

    coachInput.value = '';

    const totaleSum = playersSumText + managerInputValue + coachInputValue;

    const totaleTaka = document.getElementById('totale-taka');

    totaleTaka.innerText = totaleSum;

})
