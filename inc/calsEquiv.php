<?php

/*WEIGHTLOSS***************************************************************************/
    
    if(
        ($clientGoalLbs !== "" && $inputUnit == 'standard' && $clientGoalLbs < $clientWeightLbs) || ($clientGoalKg !== "" && $inputUnit == 'metric' && $clientGoalKg < $clientWeightKg)
    ) { ?>

<!--CALS EQUIVALENT CARD-->
<div class="card configCard shadow mt-2">    
    <div class="custom-control custom-switch configSwitch">
      <input type="checkbox" class="custom-control-input" id="sCalsEquiv">
        <label class="custom-control-label" for="sCalsEquiv">
            <p class="pTxt">
              <a class="btn btn-primary" data-toggle="collapse" href="#collapseEquiv" role="button">
                  That's the equivalent of:
              </a>
            </p>
        </label>
        
        <div class="collapse" id="collapseEquiv">
          <div class="card card-body">
            <ul id="insertEquivList">
                <!--FUNCTION FROM POPULATE.PHP-->
            </ul>
          </div>
        </div>
        
    </div>   
    <p class="pTxt text-muted configCard"><small>*Based on the equation: <span style="font-style: italic;">Total calories burned = Duration (in minutes)*(MET*3.5*weight in kg)/200</span> and MET values from the 2011 Compendium of Physical Activities.</small></p>
</div>



<?php } ?>