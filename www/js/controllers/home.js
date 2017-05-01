angular
    .module('app')
    .controller('homeCtrl', ['$scope','$http','$timeout','$state', function($scope,$http,$timeout,$state) {

        $scope.initHome = function () {
            $scope.getCounts();
            $scope.gotoPOApp = function(){
                $state.go('app.poapp')
            }
        }
        $scope.getCounts = function () {
            $scope.counts = {prSAPApproval:'--',poSAPApproval:'--',VIMApproval:'--'};
            $http({
                method: 'GET',
                url: '/api/pocounts'
            }).then((res)=>{
                $scope.counts.poSAPApproval = res.data
            })
            $http({
                method: 'GET',
                url: '/api/prcounts'
            }).then((res)=>{
                $timeout(()=>{$scope.counts.prSAPApproval = res.data}, 2000)   // this is to simulate API latency
            })
            $http({
                method: 'GET',
                url: '/api/vimcounts'
            }).then((res)=>{
                $scope.counts.VIMApproval = res.data
            })

        };

    }]);