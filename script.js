
// КАСКО START
function Gokasko() {
  var car_price=document.getElementById('carPrice').value
  var car_birth=document.getElementById('birthavto').value
  var date = new Date();

  var car_price_procent = car_price / 100 * 2.5;
  var driver_ex = car_price / 100 * 1;
  var car_birth_procent = car_price_procent / 100 * 10;

  if (driver_ex < 7000) {
    driver_ex = 7000
  }else{

  }

  if (car_birth < date.getFullYear() - 12) {
    car_price_procent = +car_price_procent + +car_birth_procent
  }else{

  }
  var obj=document.getElementById("respop");
  obj.value= ((Math.ceil(car_price_procent) +" Сом"));
  var objex=document.getElementById("resexsee");
  objex.value= ((Math.ceil(driver_ex) +" Сом"));

  $('.resultblock').css('display', 'block');
  $('.result').text(Math.ceil(car_price_procent) +" Сом");
  $('.resultex').text(Math.ceil(driver_ex) +" Сом");
}
// КАСКО END

// TPL START
function Gotpl() {
  var i = 0;
  while (i < 2) {

  var target_limit=document.getElementById('targetLimit').value
  var responsibility_limit=document.getElementById('responsibilityLimit').value
  var car_birth_tpl=document.getElementById('carBirthTpl').value
  var driver_exp_tpl=document.getElementById('driverExpTpl').value
  var driver_old_tpl=document.getElementById('driverOldTpl').value

  if (target_limit == 0 || car_birth_tpl == 0 || driver_exp_tpl == 0 || driver_old_tpl == 0 ) {
    $('.resultblocktpl').css('display', 'block');
    $('.result').text("Ошибка, введите корректную информацию");
  } else {

  var date = new Date();

  var obj=document.getElementById("respop");
  obj.value= ((Math.ceil(responsibility_limit) +" Сом"));

  var driver_exp_procent = responsibility_limit / 100 * 15;
  var car_birth_procent = responsibility_limit / 100 * 10;
  var driver_old_procent = responsibility_limit / 100 * 10;
  var driver_old_procent_min = responsibility_limit / 100 * 15;


  if (target_limit == 2) {
    var target_1=document.getElementById("car-target1");
        target_1.value= ("2800");

    var target_2=document.getElementById("car-target2");
        target_2.value= ("3500");

    var target_3=document.getElementById("car-target3");
        target_3.value= ("7000");

    var target_4=document.getElementById("car-target4");
        target_4.value= ("10500");
  }else {

  }

  if (target_limit == 1) {
    var target_1=document.getElementById("car-target1");
        target_1.value= ("1800");

    var target_2=document.getElementById("car-target2");
        target_2.value= ("2500");

    var target_3=document.getElementById("car-target3");
        target_3.value= ("5300");

    var target_4=document.getElementById("car-target4");
        target_4.value= ("8800");
  }else {

  }


  if (car_birth_tpl < date.getFullYear() - 12) {
    responsibility_limit = +car_birth_procent + +responsibility_limit;
  } else {}

  if (driver_old_tpl > 65) {
    responsibility_limit = +driver_old_procent + +responsibility_limit;
  } else {}

  if (driver_old_tpl < 23) {
    responsibility_limit = +driver_old_procent_min + +responsibility_limit;
  } else {}

  if (driver_exp_tpl < 3) {
    responsibility_limit = +driver_exp_procent + +responsibility_limit;
  } else {}

  $('.resultblocktpl').css('display', 'block');
  $('.result').text(Math.ceil(responsibility_limit) +" Сом");
i++;
  }
i++;
}
}

// TPL END


// MED START
function Gomed() {
  var i = 0
  while (i < 2) {

  var responsibility_limit_med=document.getElementById('responsibilityLimitMed').value
  var target_limit=document.getElementById('targetLimitMed').value
  var car_birth_med=document.getElementById('carBirthMed').value
  var driver_exp_med=document.getElementById('driverExpMed').value
  var driver_old_med=document.getElementById('driverOldMed').value
  var car_place_med=document.getElementById('carPlaceMed').value


  var date = new Date();

  if (target_limit == 2) {
    var target_1=document.getElementById("med_target1");
        target_1.value= ("840");

    var target_2=document.getElementById("med_target2");
        target_2.value= ("1400");

    var target_3=document.getElementById("med_target3");
        target_3.value= ("2450");

    var target_4=document.getElementById("med_target4");
        target_4.value= ("6300");
  }else {

  }

  if (target_limit == 1) {
    var target_1=document.getElementById("med_target1");
        target_1.value= ("700");

    var target_2=document.getElementById("med_target2");
        target_2.value= ("1190");

    var target_3=document.getElementById("med_target3");
        target_3.value= ("2100");

    var target_4=document.getElementById("med_target4");
        target_4.value= ("5600");
  }else {

  }

  var driver_exp_procent = responsibility_limit_med / 100 * 15;
  var car_birth_procent = responsibility_limit_med / 100 * 10;
  var driver_old_procent = responsibility_limit_med / 100 * 10;

  if (car_birth_med < date.getFullYear() - 12) {
    responsibility_limit_med = +car_birth_procent + +responsibility_limit_med;
  } else {}

  if (driver_old_med > 65) {
    responsibility_limit_med = +driver_old_procent + +responsibility_limit_med;
  } else {}

  if (driver_exp_med < 3) {
    responsibility_limit_med = +driver_exp_procent + +responsibility_limit_med;
  } else {}


  $('.resultblockmed').css('display', 'block');
  $('.result').text(Math.ceil(responsibility_limit_med * car_place_med) +" Сом");
  i++;
}
}
// MED END

// PA START
function Gopa() {
  var i = 0;
  while (i < 2) {
  var responsibility_limit_pa=document.getElementById('responsibilityLimitpa').value
  var target_limit_pa=document.getElementById('targetLimitPa').value
  var car_birth_pa=document.getElementById('carBirthPa').value
  var driver_exp_pa=document.getElementById('driverExpPa').value
  var driver_old_pa=document.getElementById('driverOldPa').value
  var car_place_pa=document.getElementById('carPlacePa').value

  var date = new Date();

  if (target_limit_pa == 1) {
    var target_1=document.getElementById("pa_target1");
        target_1.value= ("350");

    var target_2=document.getElementById("pa_target2");
        target_2.value= ("700");

    var target_3=document.getElementById("pa_target3");
        target_3.value= ("1750");

  }else {

  }

  if (target_limit_pa == 2) {
    var target_1=document.getElementById("pa_target1");
        target_1.value= ("420");

    var target_2=document.getElementById("pa_target2");
        target_2.value= ("840");

    var target_3=document.getElementById("pa_target3");
        target_3.value= ("2100");

  }else {

  }

  var driver_exp_procent = responsibility_limit_pa / 100 * 15;
  var car_birth_procent = responsibility_limit_pa / 100 * 10;
  var driver_old_procent = responsibility_limit_pa / 100 * 10;

  if (car_birth_pa < date.getFullYear() - 12) {
    responsibility_limit_pa = +car_birth_procent + +responsibility_limit_pa;
  } else {}

  if (driver_old_pa > 65) {
    responsibility_limit_pa = +driver_old_procent + +responsibility_limit_pa;
  } else {}

  if (driver_exp_pa < 3) {
    responsibility_limit_pa = +driver_exp_procent + +responsibility_limit_pa;
  } else {}

  $('.resultblockpa').css('display', 'block');
  $('.result').text(Math.ceil(responsibility_limit_pa * car_place_pa) +" Сом");

  i++;
  }
}

// PA END


// DANGER OBJECT

function Godao() {
  var type_objects=document.getElementById('type_object').value

  $('.resultblockdo').css('display', 'block');
  $('.result').text(type_objects +" Сом");
}
// DANGER OBJECT END

// passengers

function Gopassen() {
  var type_race=document.getElementById('type_race').value
  var passengers_num=document.getElementById('passengers_num').value

  $('.resultblockpas').css('display', 'block');
  $('.result').text(Math.ceil(type_race * passengers_num) +" Сом");
}
// passengers END

// dangerous goods
function Gogoods() {
  var i = 0;
  while (i < 2) {

var goodsmass=document.getElementById('goodsmass').value
var riskclass=document.getElementById('riskclass').value
var goodstime=document.getElementById('goodstime').value

if (goodsmass == 2000000) {
  var rclass1=document.getElementById("rclass1").value= ("1000000");
  var rclass4=document.getElementById("rclass4").value= ("1000000");
  var rclass5=document.getElementById("rclass5").value= ("1000000");
  var rclass6=document.getElementById("rclass6").value= ("1000000");
  var rclass7=document.getElementById("rclass7").value= ("2000000");
  var rclass8=document.getElementById("rclass8").value= ("1000000");
  var rclass9=document.getElementById("rclass9").value= ("1000000");
} else if (goodsmass == 5000000) {
  var rclass1=document.getElementById("rclass1").value= ("3000000");
  var rclass4=document.getElementById("rclass4").value= ("3000000");
  var rclass5=document.getElementById("rclass5").value= ("2000000");
  var rclass6=document.getElementById("rclass6").value= ("3000000");
  var rclass7=document.getElementById("rclass7").value= ("5000000");
  var rclass8=document.getElementById("rclass8").value= ("2000000");
  var rclass9=document.getElementById("rclass9").value= ("2000000");
} else if (goodsmass == 8000000) {
  var rclass1=document.getElementById("rclass1").value= ("5000000");
  var rclass4=document.getElementById("rclass4").value= ("5000000");
  var rclass5=document.getElementById("rclass5").value= ("3000000");
  var rclass6=document.getElementById("rclass6").value= ("5000000");
  var rclass7=document.getElementById("rclass7").value= ("8000000");
  var rclass8=document.getElementById("rclass8").value= ("3000000");
  var rclass9=document.getElementById("rclass9").value= ("2000000");
} else if (goodsmass == 10000000) {
  var rclass1=document.getElementById("rclass1").value= ("7000000");
  var rclass4=document.getElementById("rclass4").value= ("7000000");
  var rclass5=document.getElementById("rclass5").value= ("3000000");
  var rclass6=document.getElementById("rclass6").value= ("7000000");
  var rclass7=document.getElementById("rclass7").value= ("10000000");
  var rclass8=document.getElementById("rclass8").value= ("3000000");
  var rclass9=document.getElementById("rclass9").value= ("3000000");
}else if (goodsmass == 12000000) {
  var rclass1=document.getElementById("rclass1").value= ("8000000");
  var rclass4=document.getElementById("rclass4").value= ("8000000");
  var rclass5=document.getElementById("rclass5").value= ("4000000");
  var rclass6=document.getElementById("rclass6").value= ("8000000");
  var rclass7=document.getElementById("rclass7").value= ("12000000");
  var rclass8=document.getElementById("rclass8").value= ("4000000");
  var rclass9=document.getElementById("rclass9").value= ("4000000");
} else {
  alert( "Ошибка, введите корректную информацию" );
}

var resultmass = +goodsmass + +riskclass;
resultmass = resultmass / 100 * goodstime;


$('.resultblockgoods').css('display', 'block');
$('.result').text( resultmass +" Сом");

i++
}
}

function GoHome() {
  var homePrice1 = document.getElementById("homePrice1").value
  var homeTarif = document.getElementById("homeTarif").value

  var homeProcent = homePrice1 / 100 * homeTarif;

  $('.resultblockHome').css('display', 'block');
  $('.result').text(homeProcent + " Сом");
}

function Gojob() {
  var fond_number = document.getElementById("fond_number").value
  var money_person = document.getElementById("money_person").value
  var type_job = document.getElementById("type_job").value
  var money_admin = document.getElementById("money_admin").value
  var asist_person = document.getElementById("asist_person").value
  var timer = document.getElementById("timer").value

  var person_procent = money_person / 100 * type_job ;

  var admin_procent = money_admin / 100 * 0.03;

  var asist_procent = asist_person / 100 * 0.12;

  var res_job = +person_procent + +admin_procent + +asist_procent * fond_number / 100 * timer;



  $('.resultblockJob').css('display', 'block');
  $('.result').text(Math.ceil(res_job) +" Сом");

}

function Gojob2()  {
  var i = 0;
  while (i < 2) {

  var fond_number = document.getElementById("fond_number").value
  var money_person = document.getElementById("money_person").value
  var type_job = document.getElementById("type_job").value
  var money_admin = document.getElementById("money_admin").value
  var asist_person = document.getElementById("asist_person").value
  var timer = document.getElementById("timer").value

  if (money_person != 0) {
    var person_procent = money_person / 100 * type_job;
  } else {
    var person_procent = 0;
  }

  if (money_admin != 0) {
    var admin_procent = money_admin / 100 * 0.03;
  } else {
    var admin_procent = 0;
  }

  if (asist_person != 0) {
    var asist_procent = asist_person / 100 * 0.12;
  } else {
    var asist_procent = 0;
  }

  var res_job_sum = +person_procent + +admin_procent + +asist_procent;

  var res_job = res_job_sum * fond_number / 100 * timer;

  $('.resultblockJob').css('display', 'block');
  $('.result').text(Math.ceil(res_job) +" Сом");

  i++
  }

}

function Goshengen() {
  var i = 0;
  while (i < 2) {

  var risksoul =  document.getElementById("risksoul").value
  var timerriskcom = document.getElementById("timerriskcom").value

  if (risksoul == 7) {
    var timerclass1=document.getElementById("timerisk1").value= ("0");
    var timerclass2=document.getElementById("timerisk2").value= ("6");
    var timerclass3=document.getElementById("timerisk3").value= ("14");
    var timerclass4=document.getElementById("timerisk4").value= ("19");
    var timerclass5=document.getElementById("timerisk5").value= ("28");
    var timerclass6=document.getElementById("timerisk6").value= ("49");
    var timerclass7=document.getElementById("timerisk7").value= ("74");
    var timerclass8=document.getElementById("timerisk8").value= ("87");
    var timerclass9=document.getElementById("timerisk9").value= ("122");
    var timerclass10=document.getElementById("timerisk10").value= ("154");
  } else if (risksoul == 11) {
    var timerclass1=document.getElementById("timerisk1").value= ("0");
    var timerclass2=document.getElementById("timerisk2").value= ("13");
    var timerclass3=document.getElementById("timerisk3").value= ("24");
    var timerclass4=document.getElementById("timerisk4").value= ("32");
    var timerclass5=document.getElementById("timerisk5").value= ("54");
    var timerclass6=document.getElementById("timerisk6").value= ("82");
    var timerclass7=document.getElementById("timerisk7").value= ("122");
    var timerclass8=document.getElementById("timerisk8").value= ("146");
    var timerclass9=document.getElementById("timerisk9").value= ("201");
    var timerclass10=document.getElementById("timerisk10").value= ("256");
  } else if (risksoul == 13) {
    var timerclass1=document.getElementById("timerisk1").value= ("0");
    var timerclass2=document.getElementById("timerisk2").value= ("18");
    var timerclass3=document.getElementById("timerisk3").value= ("32");
    var timerclass4=document.getElementById("timerisk4").value= ("42");
    var timerclass5=document.getElementById("timerisk5").value= ("70");
    var timerclass6=document.getElementById("timerisk6").value= ("106");
    var timerclass7=document.getElementById("timerisk7").value= ("155");
    var timerclass8=document.getElementById("timerisk8").value= ("186");
    var timerclass9=document.getElementById("timerisk9").value= ("254");
    var timerclass10=document.getElementById("timerisk10").value= ("323");
  } else if (risksoul == 15) {
    var timerclass1=document.getElementById("timerisk1").value= ("0");
    var timerclass2=document.getElementById("timerisk2").value= ("18");
    var timerclass3=document.getElementById("timerisk3").value= ("33");
    var timerclass4=document.getElementById("timerisk4").value= ("45");
    var timerclass5=document.getElementById("timerisk5").value= ("76");
    var timerclass6=document.getElementById("timerisk6").value= ("116");
    var timerclass7=document.getElementById("timerisk7").value= ("171");
    var timerclass8=document.getElementById("timerisk8").value= ("205");
    var timerclass9=document.getElementById("timerisk9").value= ("282");
    var timerclass10=document.getElementById("timerisk10").value= ("359");
  } else if (risksoul == 17) {
    var timerclass1=document.getElementById("timerisk1").value= ("0");
    var timerclass2=document.getElementById("timerisk2").value= ("21");
    var timerclass3=document.getElementById("timerisk3").value= ("38");
    var timerclass4=document.getElementById("timerisk4").value= ("51");
    var timerclass5=document.getElementById("timerisk5").value= ("87");
    var timerclass6=document.getElementById("timerisk6").value= ("132");
    var timerclass7=document.getElementById("timerisk7").value= ("195");
    var timerclass8=document.getElementById("timerisk8").value= ("235");
    var timerclass9=document.getElementById("timerisk9").value= ("322");
    var timerclass10=document.getElementById("timerisk10").value= ("410");
  } else if (risksoul == 18) {
    var timerclass1=document.getElementById("timerisk1").value= ("0");
    var timerclass2=document.getElementById("timerisk2").value= ("22");
    var timerclass3=document.getElementById("timerisk3").value= ("41");
    var timerclass4=document.getElementById("timerisk4").value= ("54");
    var timerclass5=document.getElementById("timerisk5").value= ("93");
    var timerclass6=document.getElementById("timerisk6").value= ("141");
    var timerclass7=document.getElementById("timerisk7").value= ("207");
    var timerclass8=document.getElementById("timerisk8").value= ("250");
    var timerclass9=document.getElementById("timerisk9").value= ("342");
    var timerclass10=document.getElementById("timerisk10").value= ("436");
  }else {
    alert( "Ошибка, введите корректную информацию" );
  }

  var res_shengen = +risksoul + +timerriskcom * 70 ;

  $('.resultblockShengen').css('display', 'block');
  $('.result').text(Math.ceil(res_shengen) +" Сом");

  i++
  }
}


function Goworld1() {
  var i = 0;
  while (i < 2) {

  var risksoul1 =  document.getElementById("risksoul1").value
  var timerriskcom1 = document.getElementById("timerriskcom1").value

  if (risksoul1 == 18) {
    var w1timerclass1=document.getElementById("timerisk1").value= ("0");
    var w1timerclass2=document.getElementById("timerisk2").value= ("14");
    var w1timerclass3=document.getElementById("timerisk3").value= ("35");
    var w1timerclass4=document.getElementById("timerisk4").value= ("46");
    var w1timerclass5=document.getElementById("timerisk5").value= ("70");
    var w1timerclass6=document.getElementById("timerisk6").value= ("121");
    var w1timerclass7=document.getElementById("timerisk7").value= ("197");
    var w1timerclass8=document.getElementById("timerisk8").value= ("219");
    var w1timerclass9=document.getElementById("timerisk9").value= ("257");
    var w1timerclass10=document.getElementById("timerisk10").value= ("384");
  } else if (risksoul1 == 27) {
    var w1timerclass1=document.getElementById("timerisk1").value= ("0");
    var w1timerclass2=document.getElementById("timerisk2").value= ("32");
    var w1timerclass3=document.getElementById("timerisk3").value= ("58");
    var w1timerclass4=document.getElementById("timerisk4").value= ("75");
    var w1timerclass5=document.getElementById("timerisk5").value= ("134");
    var w1timerclass6=document.getElementById("timerisk6").value= ("203");
    var w1timerclass7=document.getElementById("timerisk7").value= ("299");
    var w1timerclass8=document.getElementById("timerisk8").value= ("363");
    var w1timerclass9=document.getElementById("timerisk9").value= ("490");
    var w1timerclass10=document.getElementById("timerisk10").value= ("637");
  } else if (risksoul1 == 33) {
    var w1timerclass1=document.getElementById("timerisk1").value= ("0");
    var w1timerclass2=document.getElementById("timerisk2").value= ("40");
    var w1timerclass3=document.getElementById("timerisk3").value= ("74");
    var w1timerclass4=document.getElementById("timerisk4").value= ("94");
    var w1timerclass5=document.getElementById("timerisk5").value= ("168");
    var w1timerclass6=document.getElementById("timerisk6").value= ("255");
    var w1timerclass7=document.getElementById("timerisk7").value= ("374");
    var w1timerclass8=document.getElementById("timerisk8").value= ("455");
    var w1timerclass9=document.getElementById("timerisk9").value= ("647");
    var w1timerclass10=document.getElementById("timerisk10").value= ("797");
  } else if (risksoul1 == 37) {
    var w1timerclass1=document.getElementById("timerisk1").value= ("0");
    var w1timerclass2=document.getElementById("timerisk2").value= ("45");
    var w1timerclass3=document.getElementById("timerisk3").value= ("83");
    var w1timerclass4=document.getElementById("timerisk4").value= ("106");
    var w1timerclass5=document.getElementById("timerisk5").value= ("188");
    var w1timerclass6=document.getElementById("timerisk6").value= ("285");
    var w1timerclass7=document.getElementById("timerisk7").value= ("419");
    var w1timerclass8=document.getElementById("timerisk8").value= ("509");
    var w1timerclass9=document.getElementById("timerisk9").value= ("687");
    var w1timerclass10=document.getElementById("timerisk10").value= ("892");
  } else if (risksoul1 == 42) {
    var w1timerclass1=document.getElementById("timerisk1").value= ("0");
    var w1timerclass2=document.getElementById("timerisk2").value= ("52");
    var w1timerclass3=document.getElementById("timerisk3").value= ("103");
    var w1timerclass4=document.getElementById("timerisk4").value= ("121");
    var w1timerclass5=document.getElementById("timerisk5").value= ("215");
    var w1timerclass6=document.getElementById("timerisk6").value= ("326");
    var w1timerclass7=document.getElementById("timerisk7").value= ("479");
    var w1timerclass8=document.getElementById("timerisk8").value= ("582");
    var w1timerclass9=document.getElementById("timerisk9").value= ("786");
    var w1timerclass10=document.getElementById("timerisk10").value= ("1020");
  } else if (risksoul1 == 45) {
    var w1timerclass1=document.getElementById("timerisk1").value= ("0");
    var w1timerclass2=document.getElementById("timerisk2").value= ("55");
    var w1timerclass3=document.getElementById("timerisk3").value= ("100");
    var w1timerclass4=document.getElementById("timerisk4").value= ("128");
    var w1timerclass5=document.getElementById("timerisk5").value= ("228");
    var w1timerclass6=document.getElementById("timerisk6").value= ("346");
    var w1timerclass7=document.getElementById("timerisk7").value= ("509");
    var w1timerclass8=document.getElementById("timerisk8").value= ("618");
    var w1timerclass9=document.getElementById("timerisk9").value= ("834");
    var w1timerclass10=document.getElementById("timerisk10").value= ("1083");
  } else {
    alert( "Ошибка, введите корректную информацию" );
  }

  var res_world1 = +risksoul1 + +timerriskcom1 * 70 ;

  $('.resultblockWorld1').css('display', 'block');
  $('.result').text(Math.ceil(res_world1) +" Сом");

  i++
  }
}


function Goworld2() {
  var i = 0;
  while (i < 2) {

  var risksoul2 =  document.getElementById("risksoul2").value
  var timerriskcom2 = document.getElementById("timerriskcom2").value

  if (risksoul2 == 6) {
    var w1timerclass1=document.getElementById("timerisk1").value= ("0");
    var w1timerclass2=document.getElementById("timerisk2").value= ("2");
    var w1timerclass3=document.getElementById("timerisk3").value= ("6");
    var w1timerclass4=document.getElementById("timerisk4").value= ("10");
    var w1timerclass5=document.getElementById("timerisk5").value= ("24");
    var w1timerclass6=document.getElementById("timerisk6").value= ("54");
    var w1timerclass7=document.getElementById("timerisk7").value= ("77");
    var w1timerclass8=document.getElementById("timerisk8").value= ("101");
    var w1timerclass9=document.getElementById("timerisk9").value= ("138");
    var w1timerclass10=document.getElementById("timerisk10").value= ("176");
  } else if (risksoul2 == 9) {
    var w1timerclass1=document.getElementById("timerisk1").value= ("0");
    var w1timerclass2=document.getElementById("timerisk2").value= ("4");
    var w1timerclass3=document.getElementById("timerisk3").value= ("10");
    var w1timerclass4=document.getElementById("timerisk4").value= ("11");
    var w1timerclass5=document.getElementById("timerisk5").value= ("35");
    var w1timerclass6=document.getElementById("timerisk6").value= ("81");
    var w1timerclass7=document.getElementById("timerisk7").value= ("111");
    var w1timerclass8=document.getElementById("timerisk8").value= ("143");
    var w1timerclass9=document.getElementById("timerisk9").value= ("196");
    var w1timerclass10=document.getElementById("timerisk10").value= ("248");
  } else if (risksoul2 == 12) {
    var w1timerclass1=document.getElementById("timerisk1").value= ("0");
    var w1timerclass2=document.getElementById("timerisk2").value= ("4");
    var w1timerclass3=document.getElementById("timerisk3").value= ("11");
    var w1timerclass4=document.getElementById("timerisk4").value= ("13");
    var w1timerclass5=document.getElementById("timerisk5").value= ("44");
    var w1timerclass6=document.getElementById("timerisk6").value= ("100");
    var w1timerclass7=document.getElementById("timerisk7").value= ("139");
    var w1timerclass8=document.getElementById("timerisk8").value= ("178");
    var w1timerclass9=document.getElementById("timerisk9").value= ("245");
    var w1timerclass10=document.getElementById("timerisk10").value= ("310");
  } else if (risksoul2 == 13) {
    var w1timerclass1=document.getElementById("timerisk1").value= ("0");
    var w1timerclass2=document.getElementById("timerisk2").value= ("5");
    var w1timerclass3=document.getElementById("timerisk3").value= ("13");
    var w1timerclass4=document.getElementById("timerisk4").value= ("15");
    var w1timerclass5=document.getElementById("timerisk5").value= ("49");
    var w1timerclass6=document.getElementById("timerisk6").value= ("113");
    var w1timerclass7=document.getElementById("timerisk7").value= ("156");
    var w1timerclass8=document.getElementById("timerisk8").value= ("200");
    var w1timerclass9=document.getElementById("timerisk9").value= ("275");
    var w1timerclass10=document.getElementById("timerisk10").value= ("347");
  } else if (risksoul2 == 15) {
    var w1timerclass1=document.getElementById("timerisk1").value= ("0");
    var w1timerclass2=document.getElementById("timerisk2").value= ("5");
    var w1timerclass3=document.getElementById("timerisk3").value= ("15");
    var w1timerclass4=document.getElementById("timerisk4").value= ("17");
    var w1timerclass5=document.getElementById("timerisk5").value= ("56");
    var w1timerclass6=document.getElementById("timerisk6").value= ("129");
    var w1timerclass7=document.getElementById("timerisk7").value= ("178");
    var w1timerclass8=document.getElementById("timerisk8").value= ("228");
    var w1timerclass9=document.getElementById("timerisk9").value= ("314");
    var w1timerclass10=document.getElementById("timerisk10").value= ("397");
  } else if (risksoul2 == 16) {
    var w1timerclass1=document.getElementById("timerisk1").value= ("0");
    var w1timerclass2=document.getElementById("timerisk2").value= ("6");
    var w1timerclass3=document.getElementById("timerisk3").value= ("15");
    var w1timerclass4=document.getElementById("timerisk4").value= ("19");
    var w1timerclass5=document.getElementById("timerisk5").value= ("60");
    var w1timerclass6=document.getElementById("timerisk6").value= ("136");
    var w1timerclass7=document.getElementById("timerisk7").value= ("189");
    var w1timerclass8=document.getElementById("timerisk8").value= ("242");
    var w1timerclass9=document.getElementById("timerisk9").value= ("333");
    var w1timerclass10=document.getElementById("timerisk10").value= ("421");
  } else {
    alert( "Ошибка, введите корректную информацию" );
  }

  var res_world2 = +risksoul2 + +timerriskcom2 * 70;

  $('.resultblockWorld2').css('display', 'block');
  $('.result').text(Math.ceil(res_world2) +" Сом");

  i++
  }
}
