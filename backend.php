<?php
$name = $_POST['name'];
$password = $_POST['password'];
$path = '/images/';
if ($name == 'mark' && $password == 'kim') {
$path = $path . 'cookies.jpg';
$out_put = '<h1> Hello Newb</h1>';
} else if ($name == 'zoe' && $password == 'star') {
  $path = $path . 'candy.jpg';
  $out_put = '<h1> Hello NSA</h1>';

} else if ($name == 'majed' && $password == 'w00t') {
  $path = $path . 'icecream.jpg';
  $out_put = '<h1> Hello MAster</h1>';

} else {
  $path = $path . 'peace.jpg';
  $out_put = '<h1 style="color=red"> Un authorized </h1>';
}
$out_put = $out_put . '<img src="'.$path.'" />';
echo $out_put;
 ?>
