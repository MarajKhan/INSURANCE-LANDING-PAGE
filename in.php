<?php
	   $servername="localhost";
	   $username="root";
	   $password="";
	   $dbname="insurance";

	   $conn=new mysqli($servername,$username,$password,$dbname);
		if ($conn->connect_error)
		{
		  	die("connection fail");
		  } 
	      $name=$_POST['name'];
		  $email=$_POST['email'];
		  $mobile=$_POST['mobile'];
		  $city=$_POST['city'];
		  $income=$_POST['income'];
		  $age=$_POST['age'];
		  $sql="INSERT INTO insurance_page(name,email,mobile,city,income,age) VALUE ('$name','$email','$mobile','$city','$income','$age')";
		 if($conn->query($sql)==true)
		 {
		  	echo "new record added";
		  }

		  else{
		  
		  	echo"error in this code";
		  }
		  $conn->close();
	?>