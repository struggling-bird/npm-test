#!/usr/bin/env bash
read -p 'name: ' name
if [ $name ];then
  echo $name
else
  echo 'name is empty'
fi
