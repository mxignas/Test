<!DOCTYPE html>
<html lang="en">

<head>
        <meta charset="utf-8">
    <title>"Flappy Bird"</title> 

    <!-- Including CSS styles -->
    <style>
        <?php 
            include './CSS/Pages.css';
        ?>
        #myCanvas {
            border:1px solid black;
        }
    </style> 
    
</head>


    <body>

    <!-- Header -->
        <div class="header">
            <h1 id="title"> FLAPPY BIRD</h1>
        </div>

    <!-- Navigation section -->
    <?php
    include ('./PHP/functions.php');
    outputNavigation("GAME");
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
        <div style="background-image: url('./Images/Header.jpg'); background-size:cover;" class="column middle">
        <h2>Let's Play!</h2>
        <canvas id="myCanvas" width="700" height="450"></canvas>
        <script type=text/javascript src="./JS/Game.js"></script>
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