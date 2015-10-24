// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
){// your code here
  var recursiveSeach = function(elements){
    var results = [];
    for (var item in elements.childNodes){
      if (elements.childNodes[item].classList == className){
        results.push(elements.childNodes[item]);
      }
      results.concat(recursiveSeach(elements.childNodes[item]));
    }
    return results;
  };
  return recursiveSeach(document.body);
};
