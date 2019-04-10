<?php
$val1 =    '52343245623456243574657436754356754367';
$val2 = '79687945834597259348572398562395826735209';

/**
 * return $val1 + $val2
 * @param string $val1
 * @param string $val2
 * @return string
 */
function sumBigNumber($val1, $val2)
{
    $val1 = strrev($val1);
    $val2 = strrev($val2);
    $increment = 0;
    $result = '';
    while(!empty($val1) || !empty($val2) || !empty($increment)) {
        $val2[0] = $val2[0] ?? 0;
        $val1[0] = $val1[0] ?? 0;
        $sum = $val1[0] + $val2[0] + $increment;
        $result .= $sum > 9 ? $sum-10 : $sum;
        $increment = $sum > 9;
        $val1 = substr($val1, 1);
        $val2 = substr($val2, 1);
    }
    return strrev($result);
}

$result = sumBigNumber($val1, $val2);
var_dump($result);