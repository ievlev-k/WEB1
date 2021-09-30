<?php

session_start();
$start = microtime(true);
$r = $_POST["r"];
$x = $_POST["x"];
$y = $_POST["y"];
date_default_timezone_set("Europe/Moscow");
$nowTime = date("H:i:s");
$result = '';


//if ((is_string($r))&& (is_string($y))&&( is_string($x))){
//
//    $isInvalid = true;
//    if ($r >= 5 || $r <=2) $isInvalid = false;
//    if ($y >= 5 || $y <=-5) $isInvalid = false;
//    if ($x >= 3 || $x <=-3) $isInvalid = false;
//    if ($isInvalid){
//        if (((-$r <= $x && $x <= 0) && ($y >= 0 && $y <= ($r / 2))) || (
//                ($y <= (-1 / 2) * $r + $r / 2) && ($y <= $r / 2 && $y >= 0 && $x <= $r && $x >= 0)) ||
//            ($x * $x + $y * $y <= $r * $r) && $x >= -$r && $x <= 0 && $y >= -$r && $y <= 0) {
//            $result = "Да";
//        } else {
//            $result = "Нет";
//        }
//    }else{$result = "Неверные значения";}
//}else{$result = "Неверные значения";}


if (is_numeric($r) && (is_numeric($x)) && (is_numeric($y))){
    $isInvalid = true;
    if ($r >= 5 || $r<=2) {$isInvalid = false;}
    if ($x >= 3 || $x<=-3) {$isInvalid = false;}
    if ($y >= 5 || $y<=-5) {$isInvalid = false;}
    if ($isInvalid){
        if (((-$r <= $x && $x <= 0) && ($y >= 0 && $y <= ($r / 2))) || (
                ($y <= (-1 / 2) * $r + $r / 2) && ($y <= $r / 2 && $y >= 0 && $x <= $r && $x >= 0)) ||
            ($x * $x + $y * $y <= $r * $r) && $x >= -$r && $x <= 0 && $y >= -$r && $y <= 0) {
            $result = "Да";
        } else {
            $result = "Нет";
        }
    }

}else{$result = "Неверные значения";}










$work_time = round( (microtime(true) - $start)*1000000 , 9);
$result_line = array($x, $y, $r, $result, $work_time, $nowTime);
if (!isset($_SESSION['result_line'])) {
    $_SESSION['result_line'] = array();
}
array_push($_SESSION['result_line'], $result_line);

print_r('<tr><td>' . $x . '</td><td>' . $y . '</td><td>' . $r . '</td><td >' . $result . '</td><td>' . $work_time. '</td><td>' . $nowTime . '</td></tr>');

?>