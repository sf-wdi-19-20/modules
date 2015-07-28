

function filter(arr, truthTest){
  var outputArr = [];
  for (var i=0; i<arr.length; i++){
    if truthTest(arr[i]){
      outputArr.push(arr[i]);
    }
  }
  return outputArr;
}


function partition(arr, truthTest){
  var trueArr = [];
  var falseArr = [];
  for (var i=0; i<arr.length; i++){
    if truthTest(arr[i]){
      trueArr.push(arr[i]);
    } else {
      falseArr.push(arr[i]);
    }
  }
  return [trueArr, falseArr];
}


function pluck(arr, key){
  var outputArr = [];
  for (var i=0; i<arr.length; i++){
    outputArr.push(arr[i][key]);
  }
  return outputArr;
}

function where(arr, properties){
  var outputArr = [];
  var obj;
  for (var i=0; i<arr.length; i++){
    obj = arr[i];
    for (key in obj){
      if (obj.hasOwnProperty(key) && obj[key] === properties[key]){
          outputArr.push(obj);
      }
    }
  }
  return outputArr;
}
