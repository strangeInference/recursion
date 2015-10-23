// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  var result = '';// your code goes here
  if (typeof obj === "undefined"){
    return '{}';
  }
  if (typeof obj === "string"){
    return '"' + obj + '"';
  }
  if (typeof obj === "number"){
    return String(obj);
  }
  if (obj === null){
    return 'null';
  }
  if (typeof obj === "boolean"){
    return String(obj);
  }
  if (Array.isArray(obj)){
    for (var i = 0; i < obj.length; i++){
      if (obj[i] !== undefined){
        result += stringifyJSON(obj[i]) + ','; 
      }
    }
    result = result.slice(0, result.length - 1);
    return '[' + result + ']';
  }
  if (typeof obj === "object"){
    for (var item in obj){
      if (obj[item] !== undefined && typeof obj[item] !== "function"){
        result += stringifyJSON(item) + ':' + stringifyJSON(obj[item]) + ',';
      }
    }
    result = result.slice(0, result.length - 1);
    result = '{' + result + '}'
  }
  return result
};
console.log(stringifyJSON({functions: function(){}}));
