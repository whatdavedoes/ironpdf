<?php 
    $formInput = ['inputPerson', 'trainerName', 'inputUnit', 'pdfTitle', 'introNotes', 'clientName', 'clientAge', 'clientGender', 'clientHeightFt', 'clientHeightIn', 'clientWeightLbs', 'clientGoalLbs', 'clientHeightCm', 'clientWeightKg', 'clientGoalKg', 'outroNotes'];
    
    $date = date('m') . '/' . date('d') . '/' . date('Y');
    
    if ($trainerName !== ""){
        echo '<p class="mb-0" style="font-size:30px; text-align: center;">Hello ' . $trainerName . ',</p>';
    }  
?>  

<div style="text-align: center;" class="container mt-4">
    
    <div class="boxCtn shadow pb-3">
    
            <p style="font-size: 36px" class="supportPara lead mt-2">Did you find this application useful?</p>
    <p class="supportPara lead mt-0 pt-0 mb-3">Support Maintanance &amp; Added Functionality</p>
            
    
            <div style="display: inline-block;" class="pr-2">
                <div style="position: relative; top: -10px;">
                    <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                    <input type="hidden" name="cmd" value="_s-xclick" />
                    <input type="hidden" name="hosted_button_id" value="D272M3442A6NY" />
                    <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                    <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                    </form>
                </div>
            </div>
    
    
            <div class="pl-3 border-left" style="display: inline-block;">
                
                <p class="supportPara lead"><a target="_blank" class="nbLink" href="https://www.nibtrek.com"><span class="nib"><img class="nbLogo" src="img/logo-ico-min.png"></span>Nibtrek</a></p>
                
                <span class="badge badge-secondary topPill mb-2">Websites</span>
                
                <span class="badge badge-secondary topPill mb-2">Graphic Design</span>
                
                
            </div>
        
      </div>  
    
    <a style="" class="btn btnSuggest mt-3 mb-5 shadow" href="https://www.nibtrek.com/feedback.php?about=ironpdf" target="_blank" role="button">Suggest a Feature</a>
    
</div>
