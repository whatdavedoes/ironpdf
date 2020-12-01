



/*Total calories burned = Duration(in minutes)*(MET*3.5*weight in kg)/200*/

function exerciseDurationToGoal(met, currentLbs, goalLbs) {
    let totalMinutes = 0;
    let lbsToBurn = currentLbs - goalLbs;
    let weightArray = [];
    
    // Creates an array of current weight decreased by one until goal weight
    for(i = currentLbs; i > goalLbs; i--) {
        weightArray.push(i);
    }
    //console.log(weightArray);
    
    // Loops through array
    for (i = 0; i < weightArray.length; i++) {
        let x = 3500;
        let z;
        
        if (inputUnit == "standard") {
            z = (met * 3.5 * (weightArray[i] * 0.453592))/200;
        } else if (inputUnit == "metric") {
            z = (met * 3.5 * weightArray[i])/200;
        }
        
        let y = x / z;
        totalMinutes += y;
        //console.log(y);
        //console.log(totalMinutes);
    }
    
    return totalMinutes;

}

let activityArray = 
    [
     ['img', '<strong>Bicycling</strong> 12-13.9 mph (leisure, moderate effort)', 8.0], 
     ['img', '<strong>Bicycling</strong> mountain-biking, uphill, vigorous effort', 14],
     ['img', '<strong>Stationary cycling</strong> (moderate-to-vigorous effort / 90-100 watts)', 6.8],
     ['img', '<strong>Circuit training</strong>, including kettlebells, vigorous intensity, minimal rest', 8.0],
     ['img', '<strong>Resistance</strong> (weight) training – squats, explosive effort', 5.0],
     ['img', '<strong>Resistance</strong> (weight) training – multiple exercises, 8-15 reps', 3.5],
     ['img', '<strong>Jumping rope</strong>', 12.3],
     ['img', '<strong>Hatha Yoga</strong>', 2.5],
     ['img', '<strong>Home activity</strong> – cleaning, sweeping, moderate effort', 3.5],
     ['img', '<strong>Home activity</strong> – laundry – folding, putting away clothes (incl. walking)', 2.3],
     ['img', '<strong>Playing w/children</strong>, moderate effort (only active periods)', 3.5],
     ['img', '<strong>Yardwork</strong> – mowing lawn, moderate-to-vigorous effort', 5],
     ['img', '<strong>Gardening</strong> – general, moderate effort', 3.8],
     ['img', '<strong>Running</strong> – 6 mph (10 min./mile)', 9.8],
     ['img', '<strong>Running</strong> – 14 mph (4.3 min./mile)', 23],
     ['img', '<strong>Golf</strong> – walking (carrying clubs)', 4.3],
     ['img', '<strong>Tennis</strong> – singles', 8.0],
     ['img', '<strong>Basketball</strong> – general', 6.5],
     ['img', '<strong>Walking</strong> for exercise – brisk pace (3.5 mph)', 4.3],
     ['img', '<strong>Swimming</strong> laps – freestyle/crawl light – moderate effort', 5.8],
     ['img', '<strong>Hiking</strong> (hills w/10-20lb. load)', 7.3],
     ['img', '<strong>Exercise/activity-based video game</strong> – moderate effort (e.g. Wii Fit)a', 3.8],
     ['img', '<strong>Video-exercise</strong> (DVD/TV) cardio-resistance, moderate effort', 4],
     ['img', '<strong>Sitting</strong> – at desk / watching TV / reading', 1.3],
     ['img', '<strong>Standing</strong> – working on computer / reading / talking on phone', 1.8],
    ];

function populateEquivList(aArray) {
    let output;
    let weight;
    let goal;
    
    if (inputUnit == "standard") {
        weight = clientWeightLbs;
        goal = clientGoalLbs;
    } else if (inputUnit == "metric") {
        weight = clientWeightKg;
        goal = clientGoalKg;       
    }
    
    for(j = 0; j < aArray.length; j++) {
      
        
        output += '<li class="noListStyle"><input class="form-check-input" type="checkbox" id="activity' + j + '" value="' + j + '"><label class="form-check-label" for="activity' + j + '">' +
            
        aArray[j][1] + ' for <strong>' + Math.round(exerciseDurationToGoal(aArray[j][2], weight, goal) / 60) + ' hours</strong>.</label></li>';

    }
    
    if ( ( person == "trainer" && clientGoalKg !== "" && inputUnit == "metric") || ( person == "trainer" && clientGoalLbs !== "" && inputUnit == "standard")) {
        document.getElementById('insertEquivList').innerHTML = output;
    }
    
}

if ((clientGoalKg !== "" && inputUnit == "metric" && clientGoalKg < clientWeightKg) || (clientGoalLbs !== "" && inputUnit == "standard" && clientGoalLbs < clientWeightLbs)) { 
    populateEquivList(activityArray);
}

/*BMI--------------------------------------------------------------------*/

function calcBmi() {
    let bmi;
    
    if (inputUnit == "standard") {
        let heightIn = Number(clientHeightFt * 12);
        heightIn += Number(clientHeightIn);
        //console.log(heightIn);
        bmi = (703 * clientWeightLbs) / (heightIn * heightIn);
        
    } else if (inputUnit == "metric") {
        
        let heightM = clientHeightCm * .01;
        
        bmi = clientWeightKg / (heightM * heightM);
        
    }
       //console.log(bmi);
    bmi = Math.round(bmi);
    
    return bmi;

}

function calcBmiStatus() {
    let status;
    
   let bmi = calcBmi();
    
    if (clientAge >= 20){
        if (bmi < 18.5) {
            status = 'Underweight';
        } else if(bmi >= 18.5 && bmi <= 24.9) {
            status = 'Normal or Healthy Weight';           
        } else if(bmi >= 25 && bmi <= 29.9) {
            status = 'Overweight';      
        } else if(bmi >= 30) {
            status = 'Obese';      
        }
    }
    
    return status;

}


function populateBMI() {
    
    if (person == "trainer" && clientAge >= 20){
        document.getElementById("insertBmi").innerHTML = calcBmi() + ' (' + calcBmiStatus() + ')';
    }
    
}

populateBMI();

/*BMR--------------------------------------------------------------------*/

function calcBmr() {
    let w;
    let h;
    let a = Number(clientAge);
    let bmr;
    
    if (inputUnit == "standard") {
        
        w = Number(clientWeightLbs) * 0.453592;
        
        let heightIn = (Number(clientHeightFt) * 12) + Number(clientHeightIn);
        h = Number(heightIn) * 2.54;
        
        if (clientGender == "male") {
            bmr = (10 * w) + (6.25 * h) - (5 * a) + 5;
        } else {
            bmr = (10 * w) + (6.25 * h) - (5 * a) - 161;
        }
       
    } else if (inputUnit == "metric") {
        
       w = Number(clientWeightKg);
       h = Number(clientHeightCm);
        
       if (clientGender == "male") {
            bmr = (10 * w) + (6.25 * h) - (5 * a) + 5;
       } else {
            bmr = (10 * w) + (6.25 * h) - (5 * a) - 161;
       }
       
    }
    
    bmr = Math.round(bmr);
    
    return bmr;    
}

function populateBmr() {
    if (person == "trainer"){
    document.getElementById('insertBmr').innerHTML = calcBmr() + ' calories';
    }
}

populateBmr();

/*AMR--------------------------------------------------------------------*/

function calcAmr(activityFactor) {
    let amr;
    let bmr = calcBmr();
    
    if(activityFactor == "sedentary") {
        amr = Number(bmr) * 1.2;
    } else if(activityFactor == "light") {
        amr = Number(bmr) * 1.375;
    } else if(activityFactor == "moderate") {
        amr = Number(bmr) * 1.55;
    } else if(activityFactor == "very") {
        amr = Number(bmr) * 1.725;
    } else if(activityFactor == "extra") {
        amr = Number(bmr) * 1.9;
    }
    
    amr = Math.round(amr);
    
    return amr;
    
}

function populateAmr() {
    if (person == "trainer"){
    document.getElementById('insertSedentaryAmr').innerHTML = calcAmr('sedentary') + ' calories';
    
    document.getElementById('insertLightAmr').innerHTML = calcAmr('light') + ' calories';
    
    document.getElementById('insertModerateAmr').innerHTML = calcAmr('moderate') + ' calories';
    
    document.getElementById('insertVeryAmr').innerHTML = calcAmr('very') + ' calories';
    
    document.getElementById('insertExtraAmr').innerHTML = calcAmr('extra') + ' calories';
    }
}

populateAmr();

/*IBW--------------------------------------------------------------------*/

function calcIbw(range) {
    let ibw;
    let hIn;
    let wKg;
    let wLbs;
    let wUpper;
    let wLower;
    let output;
    
    if (clientGender == "male") {
        if(inputUnit == "standard"){
           hIn = (Number(clientHeightFt)*12) + Number(clientHeightIn);
            
           if (hIn > 60) {
               wKg = 50 + (2.3 * (hIn - 60));
               wLbs = wKg * 2.20462;
               wLower = wLbs * .9;
               wUpper = wLbs * 1.1;
           }
        } else if (inputUnit == "metric") {
            hIn = Number(clientHeightCm) * 0.393701;
            
            if (hIn > 60) {
               wKg = 50 + (2.3 * (hIn - 60));
               wLower = wKg * .9;
               wUpper = wKg * 1.1;
           }
        }   
        
    } else if (clientGender == "female") {
        if(inputUnit == "standard"){
           hIn = (Number(clientHeightFt)*12) + Number(clientHeightIn);
            
           if (hIn > 60) {
               wKg = 45.5 + (2.3 * (hIn - 60));
               wLbs = wKg * 2.20462;
               wLower = wLbs * .85;
               wUpper = wLbs * 1.15;
           }
        } else if (inputUnit == "metric") {
            hIn = Number(clientHeightCm) * 0.393701;
            
            if (hIn > 60) {
               wKg = 45.5 + (2.3 * (hIn - 60));
               wLower = wKg * .85;
               wUpper = wKg * 1.15;
           }
        }
    }
    
        
    if(range == "center"){    
        if(inputUnit == "standard"){
            output = Math.round(wLbs) + " lbs";
        } else if (inputUnit == "metric") {
            output = Math.round(wKg) + " kg";
        }
    } else if(range == "lower"){
        if(inputUnit == "standard"){
            output = Math.round(wLower) + " lbs";
        } else if (inputUnit == "metric") {
            output = Math.round(wLower) + " kg";
        }
    } else if(range == "upper"){
        if(inputUnit == "standard"){
            output = Math.round(wUpper) + " lbs";
        } else if (inputUnit == "metric") {
            output = Math.round(wUpper) + " kg";
        }
    }
        
    return output;
}

function populateIbw(){
    if (person == "trainer"){
        document.getElementById('insertIbw').innerHTML = calcIbw('center') + '<br>Upper Range: ' + calcIbw('upper') + '<br>Lower Range: ' + calcIbw('lower');
    }
}

populateIbw();

