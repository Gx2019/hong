<?php
   include('db.php');
   $id=$_POST['id'];
   $phone =$_POST['phone'];
   $pwd =$_POST['password'];
   $con =$_POST['confirm'];

   $sqlSelect = "select * from hong_data where phone='$phone'";
   $result = $mysqli->query($sqliSelect);
   if($result->num_row>0){
       die('电话已存在');
   }
   $sql ="insert into hong_data (phone,password,confirm) values('$id','$phone','$pwd','$con')"
   echo $sql;
   $res = $mysqli->query($sql);
   if($res){
       echo '<script>alert("注册成功");location.href="./login.html"</script>';

   }
    $mysqli->console();
?>