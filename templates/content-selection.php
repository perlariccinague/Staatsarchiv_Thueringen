<?php
  echo $_SERVER['QUERY_STRING'];

  $server = "mysql5.data-al-dente.de";

  $user = "db94126_539";
  $dbname ="db94126_539";
  $pass = "dhsadW5aPR9pBJb";

  $db = new mysqli($server,$user,$pass, $dbname);

  if($db->connect_error){
    die("Verbindung fehlgeschlagen; " . $db->connect_error);
  }else{
    //echo "DB Verbindung steht!" . "<br>";
    count_n_print($db);
  }

function get_all_map_articles($db) {

}

function count_n_print($db){
  $sql_erg = ("SELECT COUNT(*) FROM tl_content WHERE id = 60");

  if($db->query($sql_erg) == TRUE){
    foreach($db->query('SELECT COUNT(*) FROM tl_content WHERE id = 60') as $row) {
      echo "<p class='anzahl'> Anzahl der Maps insgesamt: " . $row['COUNT(*)'] . "</p><br><br>";
    }
    //daten_darstellen($db);
    tabelle_ausgeben($db);
  }
  else{
    echo "keine Daten in DB gezählt";
  }
}


function tabelle_ausgeben($db){
  $y = "SELECT rsce_data FROM tl_content WHERE id = 60";
  echo "<div class='teilnehmer_wrapper'>";
  foreach ($db->query($y) as $row) {
    echo "<pre style='color:black'>";
    echo json_decode($row["rsce_data"])->name . "\n";
    echo json_decode($row["rsce_data"])->yCoords . "\n";
    echo json_decode($row["rsce_data"])->xCoords . "\n";
    echo '</pre>';
  }
  echo "</div>";
}
