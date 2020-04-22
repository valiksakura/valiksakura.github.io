function calcCustomClearance(){

    let res1 = 0,
        res2 = 0,
        res1Html = document.querySelector('.res1'),
        res2Html = document.querySelector('.res2'),
        fuelVal = +document.querySelector('.js-select-fuel').value,
        age = document.querySelector('.js-select-age').value,
        ageVal = parseInt(age),
        priceVal = +document.querySelector('.js-input-price').value,
        engineVal = +document.querySelector('.js-input-engine').value;

        if(priceVal <= 0 || engineVal <= 0){
            alert("vvedit norm chislo suka tu typa");
            return;
        } 

    let importDuty = priceVal * 0.055, // ввозная пошлая девушка
        baseRate = 0,
        exciseTax = 0,
        nds = 0,
        euroRate = 33.5;
    switch(fuelVal){
        // бензол
        case 1: {
            baseRate = engineVal <= 3000 ? 50 : 100; 
            break;
        }
        // соль
        case 2: {
            baseRate = engineVal <= 3000 ? 75 : 175; 
            break;
        }
    }

    exciseTax = baseRate * (engineVal/1000) * ageVal; // акциз алкоголя
    nds = exciseTax + importDuty + (priceVal*0.2) // NDS

    res1 = Math.ceil(importDuty + exciseTax + nds + priceVal); // res1 = результат

    let priceHrn = euroRate * priceVal;

    let pensionTax = priceHrn <= 316965 ? 0.03 : priceHrn >= 316965 && priceHrn <= 557090 ? 0.04 : 0.05;
   
    res2 = Math.ceil(priceVal * pensionTax);

    res1Html.innerText = res1 ;
    res2Html.innerText = res2;

}

let calcBtn = document.querySelector('#calcBtn');
calcBtn.addEventListener('click', calcCustomClearance);