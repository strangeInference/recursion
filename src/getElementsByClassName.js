// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
// your code here
  var results = [];
  var recursiveSeach = function(elements){
    
    var children = elements.childNodes;
    for (var item in children){
      var classes = children[item].classList;
      var exists = false;
      for (var ele in classes){
        if (classes[ele] == className){
          exists = true;
        }
      }
      if (exists){
        results.push(children[item]);
      }
      recursiveSeach(children[item]);
    }
    
  };
  recursiveSeach(document);
  return results;
};
