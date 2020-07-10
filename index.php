<!DOCTYPE html>
<html lang="en">

<head>
        <meta charset="utf-8">
    <title>Main page</title> 

    <!-- Including CSS styles -->
    <style>
        <?php include 'CSS/Pages.css';
            include 'CSS/logReg.css';
        ?>
    </style> 

</head>

    <body>

        <!-- Header section -->
        <div class="header">
            <h1 id="title"> FLAPPY BIRD</h1>
        </div>

    <!-- Navigation section -->
    <?php
    include ('./PHP/functions.php');
    outputNavigation("LOGIN");
    ?>
    

    <!-- Creating main row and seperating it with 3 blocks -->
    <div class="row">

    <!-- Left side block -->
        <div class="column side"> 
        <?php
            echo '<img id="leftimg" src="Images/Advert.jpg">'
        ?>
        </div>

        <!-- Middle block -->
        <div class="column middle">

        <!-- Creating a container of Log In area in middle column -->
                <div class="container"> 
                    
                    <h1>WELCOME</h1>
                    <p>Please enter your details to log in into your account.</p>

                    <hr>

                    <label for="email"> <b> Email </b></label>
                    <input type="email" placeholder="Enter Email" id="email" required>

                    <br>

                    <label for="password"> <b> Password </b></label>
                    <input type="password" placeholder="Enter Password" id="password" required>
                    
                    <p id="User"></p>
                    

                    <button type="submit" onclick="login()" class="btn"> Log In</button>
                    
                </div>

                <!-- Container for creating an account -->
                <div class="container reg">
                    <p>Do not have an account yet?</p>
                        <a id="reg" href="<?php echo 'registration.php'; ?> " > Register Here </a>
                </div>
        </div>

        <!-- Right side block -->
        <div class="column side">
        <?php
            echo '<img id="rightimg" src="Images/Advert.jpg">'
        ?>
        </div>
    </div>

    <!-- Footer section -->
    <?php
    outputFooter();
    ?>

    <script type="text/JavaScript" src="./JS/Login.js"> </script>


    </body>

</html>