'use strict';

var url1 = "https://teamtreehouse.com/iuliamarialungu.json";
var url2 = "https://teamtreehouse.com/iulialungu.json";
app.service('dataService', function ($http, $q) {
    return {
        getAllData: function () {
            return $q.all([
                // $q will keep the list of promises in a array
                $http.get(url1),
                $http.get(url2)
            ]).then(function (results) {
            // once all the promises are completed .then() will be executed
            // and results will have the object that contains the data
                var aggregatedData = [];
                results.forEach( function (result) {
                    aggregatedData = aggregatedData.concat(result.data.badges);
                });
                return aggregatedData;
            });
        }
     };
 });
