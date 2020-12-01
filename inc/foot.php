    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
      
      
     <script src="js/bootstrap.min.js"></script> 

    <script>
        let units = '<?php if(!empty($inputUnit)){echo $inputUnit;} else {echo 'standard';} ?>';
        let person = '<?php if(!empty($inputPerson)){echo $inputPerson;} else {echo 'trainer';} ?>';
    </script>
      
     <script src="js/script.js"></script>


    <?php 
    if($errorMessage !== ""){
        
        
        
      /*  if ($inputPerson == "individual" ) {*/
            echo '<script>updatePerson(); updateUnits();</script>';
    /*}*/
        
        
        if (strtolower($clientGender) == "male" || strtolower($clientGender) == "female") {
            echo "<script>updateSelectClr('clientGender');</script>";
        }
        
        
    }


if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    echo '<script src="js/populate.js"></script>';
    
    if ( $inputPerson == 'trainer' ) {
        
    ?>

    <script>
        
        if ( (clientGoalKg !== "" && inputUnit == "metric" && clientGoalKg < clientWeightKg) || (clientGoalLbs !== "" && inputUnit == "standard" && clientGoalLbs < clientWeightLbs)) {
            updateLoss(document.getElementById('tGoalInput').value, <?php if ($inputUnit == "standard") { echo 'clientGoalLbs'; } else { echo 'clientGoalKg';} ?>, <?php if ($inputUnit == "standard") { echo 'clientWeightLbs'; } else { echo 'clientWeightKg';} ?>);
        }
        
        if ( (clientGoalKg !== "" && inputUnit == "metric" && clientGoalKg > clientWeightKg) || (clientGoalLbs !== "" && inputUnit == "standard" && clientGoalLbs > clientWeightLbs)) {
            updateGain(document.getElementById('tGoalInput').value, <?php if ($inputUnit == "standard") { echo 'clientGoalLbs'; } else { echo 'clientGoalKg';} ?>, <?php if ($inputUnit == "standard") { echo 'clientWeightLbs'; } else { echo 'clientWeightKg';} ?>);
        }
        
    </script>
    <?php } ?>



    <script type="text/javascript" src="../js/jspdf.min.js"></script>
    <script type="text/javascript" src="../js/pdf.js"></script>
<?php } ?>

<script>
          updatePerson();
        </script>
  </body>
</html>