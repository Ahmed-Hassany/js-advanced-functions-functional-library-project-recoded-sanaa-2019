const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      for(var key in collection){
        callback(collection[key])
      }
      return collection;
    },

    map: function(collection, callback) {
      let arr = [];
      for(var key in collection){
        arr.push(collection[key])
      }
      let newArr = arr.map(callback);
      return newArr;
    },

    reduce: function(collection, callback, acc) {
      let result = 0;
      if(acc != null){
        result = collection.reduce(callback,acc);
      }else{
        result = collection.reduce(callback);
      }
      return result;
    },

    find: function(collection, predicate) {
      let arr = [];
      for(var key in collection){
          arr.push(collection[key])
      }
      return arr.find(predicate);
    },
    filter: function(collection,predicate){
      return collection.filter(predicate);
    },
    size: function(collection){
      let arr = [];
      for(var key in collection){
          arr.push(collection[key])
      }
      return arr.length;
    },
    first: function(collection, n) {
      if(n != null){
        return collection.slice(0,n);
      }
      return collection[0];
    },
    last:function(collection,n){
      if(n != null){
        return collection.slice(-n);
      }
      return collection[collection.length -1];
    },
    compact: function(collection) {
      return collection.filter(Boolean);
    },
    sortBy: function(collection,callback){
      let arr = [...collection];
      return arr.sort((a,b)=>{
          if(typeof a === 'string'){
              return a.localeCompare(b);
          }
          return callback(a) - callback(b)
      });
    },
    flatten: function(collection, shallow) {
      if(shallow == null){
        function flatten(arr) {
          return arr.reduce(function (flat, toFlatten) {
            return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
          }, []);
        }
        return flatten(collection);
      }
      return collection.reduce((acc, val) => acc.concat(val), []);
    },
    uniq:function(collection,isSorted, callback){
      if(isSorted != null){
        const cond = collection.map(val=>callback(val)).filter((v,i,col)=>{
            return col.indexOf(v) === i;
        });

        let res = collection.map((x,i,col)=>{
            // console.log(cond[cond.indexOf(callback(x))])
            if(cond.includes(callback(x)) === true){
                cond[cond.indexOf(callback(x))] = -1;
                return x
            }
            return false

        });
        return res.filter(Boolean);
    }
      return collection.filter((v,i,col)=>{
        return col.indexOf(v) === i;
      });
    },
    keys: function(object) {
      return Object.keys(object);
    },
    values: function(object) {
      return Object.values(object);
    },
    

    functions:function(obj){
      let final =  [];
      for(var key in obj){
          if(typeof obj[key] == 'function'){
              final.push(key)
          }
      }
      return final.sort();
    },
  };
})();

fi.libraryMethod()
