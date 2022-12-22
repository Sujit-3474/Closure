1.   function counter(){
    var counter = 0;

    function IncreaseCounter() {
        return counter += 1;
    };

    return IncreaseCounter;
}

var counter = counter();
alert(counter());
alert(counter());
alert(counter());
alert(counter());


Answer: Alert get 4 times (first time 1 , second time 2 ,third time 3 and fourth time
4)totally four times popup. 



2. Let count = 0;
  (function func() {
  if (count === 0) {
    const count = 1;
    console.log(count);
  }
  console.log(count);
  })();
    
 Answer: inside if condition it will = 1
            ouside condition it will = 0



  3. for (var i = 0; i < 3; i++) {
      setTimeout(function log() {
        console.log(i);
      }, 1000);
    }
Answer: 3 
        3 
        3 
  It will give the updated value of i as per times loop run 
( here updated value is 3 and loop runs upto three times with 1000 millisecond )




4.Write a code to calculate area of a rectangle using inner function. In this case outer function should accept parameter length and 
 inner function should accept parameter breadth.


Answer:function outer(length){
          return function inner(breadth){
              let area=length*breadth;
              console.log(area);
          }
      }
      let ans=outer(5);
      ans(2);
Note:sample input : length = 5;(length is for outer-Function) 

                     breadth = 2;(breadth is for inner-Function) 



5.Take a variable in outer function and create an inner function to increase the counter every time it is called.
Answer:function counter(){
          var count= 1;
              function IncreaseCounter() {
                      return count++;
                  };
              return IncreaseCounter;
          }
          var ans = counter();
          console.log(ans());
          console.log(ans());
          console.log(ans());
          console.log(ans());
Note:Initially "count" value is "1" when we console after one by one it will get "count++" 




6.var a = 12;
      (function () {
        alert(a);
      })();
Answer: It will popup(ALERT) the ans "a" as 12.



7.var a = 10;
      var x = (function () {
        var a = 12;
        return function () {
          alert(a);
        };
      })();
      x();
Answer: It will popup(ALERT) the ans updated "a" as 12.


8.var globalVar = "xyz";

      (function outerFunc(outerArg) {
          var outerVar = 'a';
          
          (function innerFunc(innerArg) {
          var innerVar = 'b';
          
          console.log(
              `outerArg = ${outerArg}\n
               innerArg = ${innerArg}\n
               outerVar = ${outerVar}\n
               innerVar = ${innerVar}\n
              globalVar = ${globalVar}`);
          
          })(456);
      })(123);
Answer: outerArg = 123;
        innerArg = 456;
        outerVar = a;
        innerVar = b; 
        globalVar = xyz;