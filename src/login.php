<?php
header("Access-Control-Allow-Origin: *");
class stdObject {
  public function __construct(array $arguments = array()) {
      if (!empty($arguments)) {
          foreach ($arguments as $property => $argument) {
              $this->{$property} = $argument;
          }
      }
  }

  public function __call($method, $arguments) {
      $arguments = array_merge(array("stdObject" => $this), $arguments); // Note: method argument 0 will always referred to the main class ($this).
      if (isset($this->{$method}) && is_callable($this->{$method})) {
          return call_user_func_array($this->{$method}, $arguments);
      } else {
          throw new Exception("Fatal error: Call to undefined method stdObject::{$method}()");
      }
  }
}

    $conn = new mysqli("sql7.freemysqlhosting.net","sql7375195","By5JsVF2C7","sql7375195");
    $rp = json_decode(file_get_contents('php://input'), true);
    $username = $rp["address"];
    $password = $rp["password"];
    $responseObj = new stdObject();
    $result = $conn->query("SELECT * FROM users WHERE address='". $username. "'");
    if ($result->num_rows > 0) {
        $followingdata = $result->fetch_assoc();
        $goodPassword = $followingdata["password"];
        if($goodPassword == $password){
          $responseObj->statut = 'connected';
          $responseObj->id = '823802389';
        }
        else{
          $responseObj->statut = 'disconnected';
          $responseObj->error = 'badPassword';

        }

      } else {
        $responseObj->error = 'undefinedAccount';
        $responseObj->statut = 'disconnected';
      }
      $myJSON = json_encode($responseObj);
      echo $myJSON;
      $conn->close();   
?>