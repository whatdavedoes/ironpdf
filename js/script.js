function updatePerson() {
   person = document.getElementById("inputPerson").value;
   if(person == "trainer") {
       document.getElementById("grammar").innerHTML = "a";
       document.getElementById("tNameCtn").classList.remove("noVis");
       document.getElementById("tNameTxt").innerHTML = "named ";
       
       document.getElementById("usingTxt").classList.add("ml-3");
       document.getElementById("usingTxt").classList.remove("ml-0");
       
       document.getElementById("titleIntro").classList.remove("noVis");
       
       document.getElementById("outroCtn").classList.remove("noVis");
       
       document.getElementById("cBtn").innerHTML = '<img id="grayGear" class="gearCtn" src="img/gear-min.png"><img id="greenGear" class="gearCtn noVis" src="img/gear-green-min.png"> Continue &amp; Configure';
       
       document.getElementById("cDataTxt").classList.remove("noVis");
   } else {
       document.getElementById("grammar").innerHTML = "an";
       document.getElementById("tNameCtn").classList.add("noVis");
       document.getElementById("tNameTxt").innerHTML = "";
       
       document.getElementById("usingTxt").classList.add("ml-0");
       document.getElementById("usingTxt").classList.remove("ml-3");
       
       document.getElementById("titleIntro").classList.add("noVis");
       
       document.getElementById("outroCtn").classList.add("noVis");
       
       document.getElementById("cBtn").innerHTML = "Submit";
       
       document.getElementById("cDataTxt").classList.add("noVis");
   }
}

function updateUnits() {
   units = document.getElementById("inputUnit").value;
   if(units == "standard") {
       document.getElementById("insertUnits").innerHTML = "(feet, inches, pounds)";
       
       document.getElementById("metricCtn").classList.add("noVis");
       document.getElementById("standardCtn").classList.remove("noVis");
   } else if(units == "metric") {
       document.getElementById("insertUnits").innerHTML = "(centimeters, kilograms)";
       
       document.getElementById("standardCtn").classList.add("noVis");
       document.getElementById("metricCtn").classList.remove("noVis");
   }
}

function updateSelectClr(idVar) {
    document.getElementById(idVar).classList.remove("selectStyle");
}

function gear(clr) {
    if (clr == "green" && person == "trainer") {
        document.getElementById("grayGear").classList.add("noVis");
        document.getElementById("greenGear").classList.remove("noVis");
    } else if (clr == "gray" && person == "trainer") {
        document.getElementById("grayGear").classList.remove("noVis");
        document.getElementById("greenGear").classList.add("noVis");
    }
}

function calcLossGoalDay(lossRate, goal, current) {
       let toLoose = current - goal;
    
       let numOfWeeks = toLoose / lossRate;
       let days = numOfWeeks * 7;
       return days;
}

function updateLoss(lossRate, goal, current) {
    //console.log(units);
    if (units == "standard") {
        output = "Weightloss Rate: <strong>" + document.getElementById('tGoalInput').value + "</strong> lbs/week";
    } else {
       output = "Weightloss Rate: <strong>" + document.getElementById('tGoalInput').value + "</strong> kg/week"; 
    }
    
    document.getElementById('tGoal').innerHTML = output;
    
    let daysToGoal = calcLossGoalDay(lossRate, goal, current);
    
    let d = new Date();
    d.setDate(d.getDate() + daysToGoal);
    
    let dd = d.getDate();
    
    let mm = d.getMonth() + 1;
    
    let yyyy = d.getFullYear();
    
    let formatDate = mm + "/" + dd + "/" + yyyy;
    
    let outputStatement = "";
    
    if (units == "standard") {
        outputStatement = "You are projected to reach your <strong>goal weight on " + formatDate + " in " + Math.round(daysToGoal) + " days</strong> with an average <strong>deficit of " + Math.round(((lossRate * 3500)/7)) + " calories/day</strong>.";
    } else {
        outputStatement = "You are projected to reach your <strong>goal weight on " + formatDate + " in " + Math.round(daysToGoal) + " days</strong> with an average <strong>deficit of " + Math.round((((lossRate * 2.20462) * 3500)/7)) + " calories/day</strong>.";
    }
    
    
    if ((clientGoalKg !== "" && inputUnit == "metric" && clientGoalKg < clientWeightKg) || (clientGoalLbs !== "" && inputUnit == "standard" && clientGoalLbs < clientWeightLbs)) { 
        document.getElementById('lossProject').innerHTML = outputStatement;
    }
    
}

function calcGainGoalDay(gainRate, goal, current) {
       let toGain = goal - current;
    
       let numOfWeeks = toGain / gainRate;
       let days = numOfWeeks * 7;
       return days;
}

function updateGain(gainRate, goal, current) {
    //console.log(units);
    if (units == "standard") {
        output = "Weight Gain Rate: <strong>" + document.getElementById('tGoalInput').value + "</strong> lbs/week";
    } else {
       output = "Weight Gain Rate: <strong>" + document.getElementById('tGoalInput').value + "</strong> kg/week"; 
    }
    
    document.getElementById('tGoal').innerHTML = output;
    
    let daysToGoal = calcGainGoalDay(gainRate, goal, current);
    
    let d = new Date();
    d.setDate(d.getDate() + daysToGoal);
    
    let dd = d.getDate();
    
    let mm = d.getMonth() + 1;
    
    let yyyy = d.getFullYear();
    
    let formatDate = mm + "/" + dd + "/" + yyyy;
    
    let outputStatement = "";
    
    if (units == "standard") {
        outputStatement = "You are projected to reach your <strong>goal weight on " + formatDate + " in " + Math.round(daysToGoal) + " days</strong> with an average <strong>surplus of " + Math.round(((gainRate * 3500)/7)) + " calories/day</strong>.";
    } else {
        outputStatement = "You are projected to reach your <strong>goal weight on " + formatDate + " in " + Math.round(daysToGoal) + " days</strong> with an average <strong>surplus of " + Math.round((((gainRate * 2.20462) * 3500)/7)) + " calories/day</strong>.";
    }
    
    document.getElementById('gainProject').innerHTML = outputStatement;
}

