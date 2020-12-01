<?php

//INPUTS:
$inputPerson = trim(filter_input(INPUT_POST,"inputPerson",FILTER_SANITIZE_STRING));
$trainerName = trim(filter_input(INPUT_POST,"trainerName",FILTER_SANITIZE_STRING));
$inputUnit = trim(filter_input(INPUT_POST,"inputUnit",FILTER_SANITIZE_STRING));

$pdfTitle = trim(filter_input(INPUT_POST,"pdfTitle",FILTER_SANITIZE_STRING));
$introNotes = trim(filter_input(INPUT_POST,"introNotes",FILTER_SANITIZE_STRING));

//CLIENT DATA:
$clientName = trim(filter_input(INPUT_POST,"clientName",FILTER_SANITIZE_STRING));
$clientAge = preg_replace('/[^0-9]/', '', $_POST['clientAge']);
$clientGender = trim(filter_input(INPUT_POST,"clientGender",FILTER_SANITIZE_STRING));
$clientHeightFt = preg_replace('/[^0-9]/', '', $_POST['clientHeightFt']);
$clientHeightIn = preg_replace('/[^0-9]/', '', $_POST['clientHeightIn']);
$clientWeightLbs = preg_replace('/[^0-9]/', '', $_POST['clientWeightLbs']);
$clientGoalLbs = preg_replace('/[^0-9]/', '', $_POST['clientGoalLbs']);
$clientHeightCm = preg_replace('/[^0-9]/', '', $_POST['clientHeightCm']);
$clientWeightKg = preg_replace('/[^0-9]/', '', $_POST['clientWeightKg']);
$clientGoalKg = preg_replace('/[^0-9]/', '', $_POST['clientGoalKg']);

$outroNotes = trim(filter_input(INPUT_POST,"outroNotes",FILTER_SANITIZE_STRING));

$errorMessage = "";

if (strtolower($clientGender) !== 'male' && strtolower($clientGender) !== 'female') {
    $errorMessage = "Please select a <strong>gender</strong>. ";
}

if ($inputUnit == "standard") {
    if ($clientHeightFt == "") {
        $errorMessage .= "Please fill out the <strong>height in feet</strong> field. ";
    }
    /*if ($clientHeightIn == "") {
        $errorMessage .= "Please fill out the <strong>height in inches</strong> field. ";
    }*/
    if ($clientWeightLbs == "") {
        $errorMessage .= "Please fill out the <strong>weight</strong> field. ";
    }
}

if ($inputUnit == "metric") {
    if ($clientHeightCm == "") {
        $errorMessage .= "Please fill out the <strong>height in centimeters</strong> field. ";
    }
    if ($clientWeightKg == "") {
        $errorMessage .= "Please fill out the <strong>weight</strong> field. ";
    }
}