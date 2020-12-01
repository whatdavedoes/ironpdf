<?php

/*WEIGHTLOSS***************************************************************************/
    
    if(($clientGoalLbs !== "" && $inputUnit == 'standard' && $clientGoalLbs < $clientWeightLbs) || ($clientGoalKg !== "" && $inputUnit == 'metric' && $clientGoalKg < $clientWeightKg)) { ?>


<!--CLIENT GOAL/CURRENT WEIGHT CARD-->
<div class="card configCard shadow mt-2">    
    <div class="custom-control custom-switch configSwitch">
      <input type="checkbox" class="custom-control-input" id="sClientGoal" checked>
        <label class="custom-control-label" for="sClientGoal">Your current weight is <strong><?php if($inputUnit == "standard"){echo $clientWeightLbs . ' lbs';} else {echo $clientWeightKg . ' kg';} ?></strong> and your goal weight is <strong><?php if($inputUnit == "standard"){echo $clientGoalLbs . ' lbs';} else {echo $clientGoalKg . ' kg';} ?></strong>. To meet this goal you must loose <strong><?php
        
        if ($inputUnit == "standard") {
            echo ($clientWeightLbs - $clientGoalLbs) . ' lbs';
        } else {
            echo ($clientWeightKg - $clientGoalKg) . ' kg';
        }
            
        ?></strong>.</label>
    </div>   
</div>
    
<!--CLIENT WEIGHT LOSS CARD-->    
<div class="card configCard shadow mt-2">  
    <div class="custom-control custom-switch configSwitch">
      <input type="checkbox" class="custom-control-input" id="sWeightChange" checked>
      <label class="custom-control-label" for="sWeightChange"></label>
    </div>
    
    <label id="tGoal" for="tGoalInput">Weightloss Rate: <?php 
    
    if ($inputUnit == "standard") {
            echo '<strong>2</strong> lbs/week';
        } else {
            echo '<strong>.91</strong> kg/week';
        }
       
    ?></label>
    <input onchange="updateLoss(document.getElementById('tGoalInput').value, <?php if ($inputUnit == "standard") {echo 'clientGoalLbs';} else { echo 'clientGoalKg'; } ?>, <?php if ($inputUnit == "standard") { echo 'clientWeightLbs'; } else { echo 'clientWeightKg'; } ?>)" type="range" value="<?php 
    if($inputUnit == "standard"){ echo 2; } else {echo .91;} ?>" class="custom-range" min="<?php if($inputUnit == "standard"){ echo .1; } else {echo .05;} ?>" max="<?php if($inputUnit == "standard"){ echo 5; } else {echo 2.27;} ?>" step="<?php if($inputUnit == "standard"){ echo 0.1; } else {echo .05;} ?>" id="tGoalInput">
    <p class="pTxt" id="lossProject">You are projected to reach your goal weight on with an average calorie deficit of</p>
    <p class="pTxt text-muted configCard"><small>*Based on the 3,500 calories equals a pound logic.</small></p>
</div>

<?php } elseif(($clientGoalLbs == "" && $inputUnit == 'standard') || ($clientGoalKg == "" && $inputUnit == 'metric')) { ?>
        <!--CLIENT GOAL/CURRENT WEIGHT CARD-->
        <div class="card configCard shadow mt-2">    
            <div class="custom-control custom-switch configSwitch">
              <input type="checkbox" class="custom-control-input" id="sClientGoal" checked>
              <label class="custom-control-label" for="sClientGoalLbs">Your current weight is <?php echo $clientWeightLbs; ?>lbs.</label>
            </div>   
        </div>
<?php } elseif(($clientGoalLbs !== "" && $inputUnit == 'standard' && $clientGoalLbs > $clientWeightLbs) || ($clientGoalKg !== "" && $inputUnit == 'metric' && $clientGoalKg > $clientWeightKg)) { 

/*WEIGHTGAIN***************************************************************************/
?>

<!--CLIENT GOAL/CURRENT WEIGHT CARD-->
<div class="card configCard shadow mt-2">    
    <div class="custom-control custom-switch configSwitch">
      <input type="checkbox" class="custom-control-input" id="sClientGoal" checked>
        <label class="custom-control-label" for="sClientGoal">Your current weight is <strong><?php if($inputUnit == "standard"){echo $clientWeightLbs . ' lbs';} else {echo $clientWeightKg . ' kg';} ?></strong> and your goal weight is <strong><?php if($inputUnit == "standard"){echo $clientGoalLbs . ' lbs';} else {echo $clientGoalKg . ' kg';} ?></strong>. To meet this goal you must gain <strong><?php
        
        if ($inputUnit == "standard") {
            echo ($clientGoalLbs - $clientWeightLbs) . ' lbs';
        } else {
            echo ($clientGoalKg - $clientWeightKg) . ' kg';
        }
            
        ?></strong>.</label>
    </div>   
</div>
    
<!--CLIENT WEIGHT LOSS CARD-->    
<div class="card configCard shadow mt-2">  
    <div class="custom-control custom-switch configSwitch">
      <input type="checkbox" class="custom-control-input" id="sWeightChange" checked>
      <label id="tGoal" class="custom-control-label" for="sWeightChange"></label>
    </div>
    
    <label for="tGoalInput"><?php 
    
    /*if ($inputUnit == "standard") {
            echo '<strong>2</strong> lbs/week';
        } else {
            echo '<strong>.91</strong> kg/week';
        }*/
       
    ?></label>
    <input onchange="updateGain(document.getElementById('tGoalInput').value, <?php if ($inputUnit == "standard") {echo 'clientGoalLbs';} else { echo 'clientGoalKg'; } ?>, <?php if ($inputUnit == "standard") { echo 'clientWeightLbs'; } else { echo 'clientWeightKg'; } ?>)" type="range" value="<?php 
    if($inputUnit == "standard"){ echo 2; } else {echo .91;} ?>" class="custom-range" min="<?php if($inputUnit == "standard"){ echo .1; } else {echo .05;} ?>" max="<?php if($inputUnit == "standard"){ echo 5; } else {echo 2.27;} ?>" step="<?php if($inputUnit == "standard"){ echo 0.1; } else {echo .05;} ?>" id="tGoalInput">
    <p class="pTxt" id="gainProject">You are projected to reach your goal weight on with an average calorie surplus of</p>
    <p class="pTxt text-muted configCard"><small>*Based on the 3,500 calories equals a pound logic.</small></p>
</div>

<?php } ?>

























