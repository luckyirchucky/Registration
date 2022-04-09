<?php	
	$email = $_POST['email'];
	if (filter_var($email, FILTER_VALIDATE_EMAIL) === false){
		exit("Неправильный формат email");
	}
	
	$phone = $_POST['phone'];
	$pattern = '/\+7\(\d{3}\)\d{3}-\d{2}-\d{2}/';
	if (!preg_match($pattern, $phone)) {
		exit("Неверный формат телефона");
	}

	$password1 = $_POST['password1'];
	$password2 = $_POST['password2'];
	if ($password1 != $password2){
		exit("Неправильный повтор пароля");
	}
	
	$name = $_POST['name'];
	if (!empty($name)){
		if(preg_match('/[A-Z]$/',$name[0])==false){
			exit("Первая буква должна быть заглавной");
		}
	} 
	
	if (empty($name)){
		exit("Заполните все поля");
	}
	
	if (empty($phone)){
		exit("Заполните все поля");
	}
	
	if (empty($email)){
		exit("Заполните все поля");
	}
	
	if (empty($password1)){
		exit("Заполните все поля");
	}
	
	if (empty($password2)){
		exit("Заполните все поля");
	}

    $request = $_REQUEST; //супер глобальная переменная PHP, которая использовалась для сбора данных после отправки их из формы
    $name = $request['name']; 
    $phone = $request['phone'];
	$email = $request['email'];
    $password1 = $request['password1'];

    $servername = "localhost"; 
    $username = "root"; 
    $password = ""; 
    $dbname = "registration"; 

    $mysqli = new mysqli($servername, $username, $password, $dbname);

    if ($mysqli->connect_errno) {
      echo "Нет подключения с MySQL: " . $mysqli->connect_error;
      exit();
    }

    //вставка данных SQL 
    $sql = "INSERT INTO users (name, phone, email, password)
    VALUES ('".$name."', '".$phone."', '".$email."', '".$password1."')";

    if ($mysqli->query($sql)) {
      echo "Вы успешно зарегистрировались!";
    } else {
      return "Ошибка: " . $sql . "<br>" . $mysqli->error;
    }

    $mysqli->close();
?>