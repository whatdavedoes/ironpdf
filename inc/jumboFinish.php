  <body class="lightBack">
    <div class="jumbotron jumbotron-fluid topBack mb-0">
      <div class="container">
          
        <img class="logoNoTxt" src="img/iron_logo_notxt-min.png">
          
         <?php 
         if ($inputPerson == "trainer"){ ?>
      
        <div class="card shadow cardExport mb-0 mt-0 lightBack" style="text-align: center">
            <a style="" class="btn btn-lg btn-dwn mt-2 shadow" href="javascript:genPDF()" role="button"><img class="dwn" src="../img/download_gray-min.png">Download PDF</a>
            <p class="pTxtConfig mb-2 mt-2"><small class="text-muted">(or configure options first below)</small></p>
        </div>
          
        <?php } else { ?>
            <div style="text-align: center;">
              <a style="" class="btn btn-lg btn-dwn mt-2 shadow" href="javascript:genIndPDF()" role="button"><img class="dwn" src="../img/download_gray-min.png">Download PDF</a>
            </div> 
        <?php } ?>
            
          
      </div>
    </div>