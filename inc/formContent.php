<?php 
    if($errorMessage !== ""){
        echo '<div class="alert alert-warning mt-2 shadow" role="alert">' . $errorMessage . '</div>';
        //var_dump($errorMessage);
        /*
        THIS WAS PUT IN INC/FOOT.PHP AFTER FUNCTION WAS DEFINED:
        if ($inputPerson == "individual") {
            echo '<script>updatePerson(); updateUnits();</script>';
        }*/
    }

    
?>

<div class="row centerText border-bottom pb-2 mb-3">
    
                <h2 class="beba">I am <span id="grammar">a</span></h2>
              
              <!--inputPerson-->
              <select id="inputPerson" name="inputPerson" class="form-control ml-3 mt-3 startInput" onchange="updatePerson()">
                <option value="trainer" <?php 
                        if(!isset($errorMessage) || $inputPerson == "trainer"){ echo 'selected';}  
                ?>>Trainer</option>
                <option value="individual"<?php 
                        if(isset($errorMessage) && $inputPerson == "individual"){ echo ' selected';}  
                ?>>Individual</option>
              </select>
                
                <!--trainerName-->
                <h2 id="tNameTxt" class="beba ml-3">named </h2>
               <div id="tNameCtn">
                    <input type="text" class="ml-2 mt-3 startInputAlt" id="trainerName" name="trainerName" value="<?php if (isset($trainerName)){echo $trainerName;} ?>">
                </div>
                
                <h2 id="usingTxt" class="beba ml-3">using </h2>
                <!--inputUnit-->
                 <select name="inputUnit" id="inputUnit" class="form-control ml-3 mt-3 startInput" onchange="updateUnits()">
                <option value="standard" <?php 
                        if(!isset($errorMessage) || $inputUnit == "standard"){ echo 'selected';}  
                ?>>Standard</option>
                <option value="metric" <?php 
                        if(isset($errorMessage) && $inputUnit == "metric"){ echo 'selected';}  
                ?>>Metric</option>
                </select>
                <h2 class="beba ml-3">units <span class="txtSm" id="insertUnits">(feet, inches, pounds)</span>.</h2>
                
                
            </div>
            
              <div id="titleIntro">
                  <!--pdfTitle-->
                  <input type="text" class="ml-2 startInputTxt" name="pdfTitle" id="pdfTitle" placeholder="PDF Title" value="<?php if (isset($pdfTitle)){echo $pdfTitle;} ?>">
                    <br/><br/>

                  <!--introNotes-->
                  <textarea class="form-control startInputArea" name="introNotes" id="introNotes" rows="3" placeholder="Intro Comments"><?php if (isset($introNotes)){echo $introNotes;} ?></textarea>
              </div> 
              
             <div id="cDataTxt">
                <h2 class="bebaSm mt-3">Client Data:</h2>
             </div>
            
              <div class="card p-2 shadow mb-3">
                
              
              <div class="row">
                  
                <div class="col">
                  <!--clientName-->
                  <input name="clientName" id="clientName" type="text" class="form-control startInputTxt mt-2" placeholder="Name" value="<?php if (isset($clientName)){echo $clientName;} ?>" required>
                </div>
                  
                <div class="col">
                  <!--clientAge-->
                  <input name="clientAge" id="clientAge" type="number" class="form-control startInputTxt mt-2" placeholder="Age" min="0" max="200" value="<?php if (isset($clientAge)){echo $clientAge;} ?>" required>
                </div>
                <div class="col">
                  <!--clientGender-->
                  <select name="clientGender" id="clientGender" class="form-control mt-2 startInputTxt selectStyle" onchange="updateSelectClr('clientGender')">
                    <option class="" value="gender" <?php 
                        if($errorMessage == ""){ echo 'selected';}  
                ?> disabled>Gender</option>
                    <option value="male"<?php 
                        if(isset($errorMessage) && $clientGender == "male"){ echo ' selected';}  
                ?>>Male</option>
                    <option value="female"<?php 
                        if(isset($errorMessage) && $clientGender == "female"){ echo ' selected';}  
                ?>>Female</option>
                  </select>
                </div>
              </div>
                  
              <!--STANDARD------------------------------------------------------>
              <div id="standardCtn">
              <div class="row mt-3">
                  
                  <div class="col">
                      <h2 class="bebaXSm">Height:</h2>
                     <!--clientHeightFt-->
                     <input name="clientHeightFt" id="clientHeightFt" type="number" class="form-control startInputTxt" placeholder="feet" value="<?php if (isset($clientHeightFt)){echo $clientHeightFt;} ?>" min="1" max="9">
                     <!--clientHeightIn-->
                     <input name="clientHeightIn" id="clientHeightIn" type="number" class="form-control startInputTxt" placeholder="inches" value="<?php if (isset($clientHeightIn)){echo $clientHeightIn;} ?>" min="0" max="11"> 
                  
                  </div>
                
              </div>
                  
              <div class="row mt-3">
                  
                  <div class="col">
                      <h2 class="bebaXSm">Current Weight:</h2>
                     <!--clientWeightLbs-->
                     <input name="clientWeightLbs" id="clientWeightLbs" type="number" class="form-control startInputTxt" placeholder="lbs" value="<?php if (isset($clientWeightLbs)){echo $clientWeightLbs;} ?>" min="1" max="999">
                  
                  </div>
                  
                  <div class="col">
                      <h2 class="bebaXSm">Goal Weight:</h2>
                     <!--clientWeightLbs-->
                     <input name="clientGoalLbs" id="clientGoalLbs" type="number" class="form-control startInputTxt" placeholder="lbs" value="<?php if (isset($clientGoalLbs)){echo $clientGoalLbs;} ?>" min="1" max="999">
                  
                  </div>
                
              </div>
                  
                  
              </div>    
              <!--METRIC------------------------------------------------------>
              <div id="metricCtn" class="noVis">
                 <div class="row mt-3">
                  
                  <div class="col">
                      <h2 class="bebaXSm">Height:</h2>
                      <!--clientHeightCm-->
                     <input name="clientHeightCm" id="clientHeightCm" type="number" class="form-control startInputTxt" placeholder="cm" value="<?php if (isset($clientHeightCm)){echo $clientHeightCm;} ?>" min="1" max="400">
                  </div>
                
              </div>
                  
              <div class="row mt-3">
                  
                  <div class="col">
                      <h2 class="bebaXSm">Current Weight:</h2>
                      <!--clientWeightKg-->
                     <input name="clientWeightKg" id="clientWeightKg" type="number" class="form-control startInputTxt" placeholder="kg" value="<?php if (isset($clientWeightKg)){echo $clientWeightKg;} ?>" min="1" max="999">
                  
                  </div>
                  
                  <div class="col">
                      <h2 class="bebaXSm">Goal Weight:</h2>
                      <!--clientWeightKg-->
                     <input name="clientGoalKg" id="clientGoalKg" type="number" class="form-control startInputTxt" placeholder="kg" value="<?php if (isset($clientGoalKg)){echo $clientGoalKg;} ?>" min="1" max="999">
                  
                  </div>
                
              </div>
              </div>                      
                  
              <!--END OF CLIENT DATA CARD--> 
              </div>  
                
              <div id="outroCtn">
                  <!--outroNotes-->
                  <textarea class="form-control startInputArea" name="outroNotes" id="outroNotes" rows="3" placeholder="Outro Comments"><?php if (isset($outroNotes)){echo $outroNotes;} ?></textarea>
              </div>
            
            <button id="cBtn" onmouseover="gear('green')" onmouseout="gear('gray')" type="sumbit" class="btn btn-gear btn-ouline btn-lg shadow"><img id="grayGear" class="gearCtn" src="img/gear-min.png"><img id="greenGear" class="gearCtn noVis" src="img/gear-green-min.png"> Continue &amp; Configure</button>