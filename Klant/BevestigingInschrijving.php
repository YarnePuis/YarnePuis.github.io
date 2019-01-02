<body>
<?php 
$voornaam = $_POST["Voornaam"];
$achternaam = $_POST["Achternaam"];
$email = $_POST["Email"]; 
$gender = $_POST["Gender"];
$to_email = Yarne.puis@gmail.com';
$subject = 'Inschrijving Scouts';
$message = 'Nieuwe inschrijving van: $voornaam $achternaam is bevestigd. het is een $gender';
$headers = 'From: noreply @ company . com';
mail($to_email,$subject,$message,$headers);
echo "test";
?>
</body>
