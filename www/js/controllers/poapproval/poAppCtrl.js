angular
    .module('app')
    .controller('poAppCtrl', ['$scope', '$http', '$timeout', '$stateParams', '$state', function ($scope, $http, $timeout, $stateParams,$state) {

        $scope.initPOApp = function () {
            $scope.poAppList = []
            $scope.getPOList()

            $scope.navToDetail = (index) =>{
               $state.go('app.poappdetail/:poid',{poid:$scope.poAppList[index].PoNumber})
            }
        }
        $scope.initPODetail = () => {
            $scope.poid = $stateParams.poid ? $stateParams.poid : 'none';
            $scope.wipDetail = {}

            // get details. 
            $scope.getPODetail($scope.poid)
        }
        $scope.getPOList = () => {
            $http({
                method: 'GET',
                url: '/api/polist'
            }).then((res) => {
                $scope.poAppList = res.data
            })

        }
        $scope.getPODetail = (id) => {
            $http({
                method: 'GET',
                url: '/api/podetail/' + id
            }).then((res) => {
                $scope.wipDetail = res.data
            })

        }

    }]);