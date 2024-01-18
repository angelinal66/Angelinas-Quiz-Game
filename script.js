let num = 0;

$(".submit").click(function() {
  let count = $(".input1").val();
  let self = $(".input2").val();
  if(self === "studious"){
    $(".pb").show();
       $(".pbout").show();
      $(".counter").show();
      $(".marceyout").hide();
      $(".jakeout").hide();
       $(".lspout").hide();
    $(".jake").hide();
    $(".lps").hide();
    $(".marcey").hide();

  } else if (count >= 3 && count<=5 && self === "adventurous"){
    $(".jake").show();
    $(".jakeout").show();
       $(".pbout").hide();
    $(".pb").hide();
    $(".lps").hide();
    $(".marcey").hide();
  } else if (count >= 7 && count<=8 && self === "adventurous"){
    $(".marcey").show();
      $(".marceyout").show();
      $(".jakeout").hide();
       $(".pbout").hide();
       $(".lspout").hide();
    $(".pb").hide();
    $(".lsp").hide();
    $(".jake").hide();
  } else if (count <= 2 && self === "adventurous"){
    $(".lsp").show();
        $(".lspout").show();
      $(".marceyout").hide();
      $(".jakeout").hide();
       $(".pbout").hide();
    
    $(".pb").hide();
    $(".marcey").hide();
    $(".jake").hide();
  }
  num++; // adds 1 to num
  $(".counter").text("Number of times quiz was taken: " + num); // output:
  });


