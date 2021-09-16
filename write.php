<?php
session_start();
if (isset($_SESSION['result_line'])) {
    foreach ($_SESSION['result_line'] as $result_line) {
        print_r('<tr><td>' . $result_line[0] . '</td><td>' . $result_line[1] . '</td><td>' . $result_line[2] . '</td><td >' . $result_line[3] . '</td><td>' . $result_line[4]. '</td><td>' . $result_line[5] . '</td></tr>');
     }} ?>