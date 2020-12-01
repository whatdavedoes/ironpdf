<?php 
include 'inc/head.php';

// If form was submitted
    // Initialize PHP variables
    // Filter Input
    // Check for errors
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    // Initialize variables
    $errorMessage = "";

    $inputPerson = "";
    $trainerName = "";
    $inputUnit = "";
    $pdfTitle = "";
    $introNotes = "";
    $clientName = "";
    $clientAge = "";
    $clientGender = "";
    $clientHeightFt = "";
    $clientHeightIn = "";
    $clientWeightLbs = "";
    $clientGoalLbs = "";
    $clientHeightCm = "";
    $clientWeightKg = "";
    $clientGoalKg = "";
    $outroNotes = "";
    
    // Filters input and updates variables above
    require 'procedures/submit.php'; 

}

// If no error message and form submitted
    // Save to JavaScript variables for use with jsPDF
    // Include generate PDF button
    // If trainer
        // include configuration cards
        // Additional generate PDF button
// Else
    // User data form
if ($errorMessage == "" && $_SERVER["REQUEST_METHOD"] == "POST"){
      
    // Saves to JavaScript variables for use with jsPDF
    echo '<script>';
    echo 'let inputPerson = "' . $inputPerson . '";';
    echo 'let trainerName = "' . $trainerName . '";';
    echo 'let inputUnit = "' . $inputUnit . '";';
    echo 'let pdfTitle = "' . $pdfTitle . '";';
    echo 'let introNotes = "' . $introNotes . '";';
    echo 'let clientName = "' . $clientName . '";';
    echo 'let clientAge = "' . $clientAge . '";';
    echo 'let clientGender = "' . $clientGender . '";';

    echo 'let clientHeightFt = "' . $clientHeightFt . '";';
    echo 'let clientHeightIn = "' . $clientHeightIn . '";';
    echo 'let clientWeightLbs = "' . $clientWeightLbs . '";';
    echo 'let clientGoalLbs = "' . $clientGoalLbs . '";';
    echo 'let clientHeightCm = "' . $clientHeightCm . '";';
    echo 'let clientWeightKg = "' . $clientWeightKg . '";';
    echo 'let clientGoalKg = "' . $clientGoalKg . '";';

    echo 'let outroNotes = "' . $outroNotes . '";';

    echo '</script>';
    
    
    // display data and create PDF
    include 'inc/jumboFinish.php';
    
    if ($inputPerson == "trainer"){
        include 'inc/trainerFinish.php';
    } else {
        include 'inc/individualFinish.php';
    }


} else { 

  include 'inc/jumboStart.php'; 
?>
      
      
    <div class="container">
        <form class="formCtn" method="post" action="index.php">
            
        <?php include 'inc/formContent.php'; ?>     
      
        </form>
        
        <!--<img class="logoNoTxt" src="img/iron_logo_notxt-min.png">-->
     
    </div>  
      
  <?php } 

include 'inc/foot.php'; ?>


