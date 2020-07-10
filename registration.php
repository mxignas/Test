<!DOCTYPE html>
<html lang="en">

<head>
        <meta charset="utf-8">
    <title>Registration page</title> 

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    <!-- Including CSS styles -->
    <style>
        <?php 
        include './CSS/Pages.css';
            include './CSS/logReg.css';
        ?>
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
    outputNavigation("REGISTRATION");
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
        <div class="column middle">

        <!-- Registration form -->
        <form onsubmit="return Validate();">
                <div class="container"> 
                    
                    <p id="regTopText">Please enter your details to register.</p>

                    <hr>

                    <!-- Inserting all the fields for registration -->

                    <div id="username_div">

                        <label for="username"> <b> Username </b></label>
                        <input type="text" id="username" placeholder="Enter Username" class="textInput" required>

                        <div id="name_error"></div>

                    </div>


                    <br>

                    <div id="password_div">

                        <label for="password"> <b> Password </b></label>
                        <input type="password" placeholder="Enter Password" id="password" class="textInput" required>

                        <div id="password_error"></div>

                    </div>
                    <br>

                    <div id="email_div">

                        <label for="email"> <b> Email </b></label>
                        <input type="text" placeholder="Enter Email" id="email" class="textInput" required>

                        <div id="email_error"></div>

                    </div>

                    <br>

                    <div id="number_div">

                        <label for="number"> <b> Phone number </b></label>
                        <input type="tel" pattern="[0-9]{9}" placeholder="Format: 07123456789" id="number" class="textInput" required>

                        <div id="number_error"></div>
                
                    </div>
                    <div>

                    <input type="button" onclick="storeUser(); validTrue();" id="register" value="Register" class="btn">

                    </div>
                </div>

        </form>
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

    <script type="text/JavaScript" src="./JS/Validating.js"> </script>
    <script type="text/JavaScript" src="./JS/Registration.js"> </script>
    <script type="text/JavaScript" src="./JS/Login.js"> </script>


    </body>

</html>
