<?php

$name=$_POST["uname"];
$address=$_POST["uaddress"];
$email=$_POST["email"];
$street=$_POST["street"];
$country=$_POST["country"];
$telephone=$_POST["tel"];
$comment=$_POST["com"];

echo $name."<br>".$address."<br>".$email."<br>".$street."<br>".$country."<br>".$telephone."<br>".$comment."<br>".;

$servername="localhost";
$username="root";
$password="";
$dbname="booking";

$conn=mysqli_connect($servername,$username,$password,$dbname);

if(!$conn){
    die("not connected".mysqli_connect_error());
}

$sql="INSERT INTO room (Name,Address,Email,Street,Country,Telephone,Comments) VALUES ('$name','$address','$email','$street','$country','$telephone','$comment')";

if(mysqli_query($conn,$sql)){
    echo "Data added successfully";
}
?>