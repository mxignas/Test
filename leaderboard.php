<!DOCTYPE html>
<html lang="en">

<head>
        <meta charset="utf-8">
    <title>Leaderboard</title> 

    <!-- Including CSS styles -->
    <style>
        <?php 
            include './CSS/Pages.css';
        ?>
    </style> 
    
</head>


    <body   >

    <!-- Header -->
        <div class="header">
            <h1 id="title"> FLAPPY BIRD</h1>
        </div>

        <!-- Navigation section -->
    <?php
    include ('./PHP/functions.php');
    outputNavigation("LEADERBOARD");
    ?>



    <!-- Main 3 blocks -->
    <div class="row">

    <!-- Left side block -->
        <div class="column side">
        <?php
            echo '<img id="leftimg" src="Images/Advert.jpg">'
        ?>
        </div>

        <!-- Middle block -->
        <div class="column middle" style="background-image: url('./Images/Header.jpg'); background-size:cover;">
            <div id="ranking" style="text-align:center">
            </div>   
        </div>

        <!-- Right side block -->
        <div class="column side">
        <?php
            echo '<img id="rightimg" src="Images/Advert.jpg">'
        ?>
        </div>
    </div>

    <!-- Footer -->
    <?php
    outputFooter();
    ?>

    <script type="text/JavaScript" src="./JS/Login.js"> </script>
    <script type="text/JavaScript" src="./JS/Ranking.js"> </script>
    </body>

</html>