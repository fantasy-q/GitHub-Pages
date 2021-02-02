function howManyArgs() {
  console.log(arguments.length);
}
                   
howManyArgs("string", 45);    // 2
howManyArgs();                // 0
howManyArgs(12);              // 1

howManyArgs(12,2,34,45,5,6);              // 1
