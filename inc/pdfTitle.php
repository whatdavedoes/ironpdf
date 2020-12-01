<?php if ($pdfTitle !== ""){ ?>
    <!--PDF Title-->    
    <div class="card configCard shadow mt-2">    
        <div class="custom-control custom-switch configSwitch">
          <p class="pTxt mb-0"><?php echo $pdfTitle; ?></p>
        </div>   
    </div>
<?php } ?>

<?php if ($pdfTitle == ""){ ?>
    <!--PDF Title-->    
    <div class="card configCard shadow mt-2">    
        <div class="custom-control custom-switch configSwitch">
          <p class="pTxt mb-0"><strong><?php echo $clientName; ?>'s Health Snapshot PDF</strong></p>
          <?php if($trainerName !== ""){ ?>
          <p class="pTxt mb-0">Prepared by <?php echo $trainerName; ?></p>
          <?php } ?>
        </div>   
    </div>
    <p class="pTxt text-muted configCard"><small>*Overwrite this title by filling out the PDF Title field on the Previous Page</small></p>
<?php } ?>