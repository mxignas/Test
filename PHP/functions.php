<?php

    function outputNavigation($pageName) {
    echo '<div class="navigation">';

    $linkNames = array("LOGIN", "GAME", "LEADERBOARD", "REGISTRATION");
    $linkAddresses = array("index.php", "game.php", "leaderboard.php", "registration.php");
    
    //Output navigation
        for($x = 0; $x < count($linkNames); $x++){
            echo '<a ';
            if($linkNames[$x] == $pageName) {
                echo 'class="selected" ';
            }
            echo '<a href="' . $linkAddresses[$x] . '">' . $linkNames[$x] . '</a>';
        }
        echo '<button type="submit" id="userButton" onclick = "logout()"> Log Out</button>';
        echo '<h4 id = "usertxtarea"> </h4>';
        
    echo '</div>';
    }


    //Output footer
    function outputFooter () {
    echo '<div class="footer">';
        echo '<p> This Website was created by Ignas Lamanauskas</p>';
    echo '</div>';
    }
?>