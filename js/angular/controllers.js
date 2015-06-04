'use strict'
angular.module('myApp.controllers', ['ngRoute','myApp.services'])
    .controller('DashboardCtrl',
        ['$scope','DashboardSrv','$location','$routeParams',
            function($scope, DashboardSrv, $location, $routeParams){
                $scope.nome = "Ennio 10";

                $scope.load = function(){
                    $scope.registros = DashboardSrv.query();
                }
                $scope.load();

                $scope.get = function(){
                    $scope.item = DashboardSrv.get({id: $routeParams.id});

                }

                $scope.add = function(item){
                    $scope.result = DashboardSrv.save(
                        {},
                        item,
                        function(data, status, headers, config){
                            $location.path('/dashboard/');
                        },
                        function(data, status, headers, config){
                            alert('Erro ao inserir registro: '+data.messages[0]);
                        }
                    )
                }
                $scope.editar = function(item){
                    $scope.result = DashboardSrv.update(
                        {id: $routeParams.id},
                        item,
                        function(data, status, headers, config){
                            $location.path('/dashboard/');
                        },
                        function(data, status, headers, config){
                            alert('Erro ao editar registro: '+data.messages[0]);
                        }                                    
                    )
                }
                $scope.delete = function(id){
                    if(confirm('Deseja realmente excluir este registro?')){
                        DashboardSrv.remove(
                            {id: id},
                            {},
                            function(data, status, headers, config){
                                $location.path('/dashboard/');
                            },
                            function(data, status, headers, config){
                                alert('Erro ao deletar registro: '+data.messages[0]);
                            }                                
                        )
                    }
                }

            }
        ]
    )
    .controller('CategoriasCtrl',
        ['$scope','CategoriasSrv','$location','$routeParams',
            function($scope, CategoriasSrv, $location, $routeParams){
                $scope.nome = "Ennio 10";

                $scope.load = function(){
                    $scope.registros = CategoriasSrv.query();
                }
                $scope.load();

                $scope.get = function(){
                    $scope.item = CategoriasSrv.get({id: $routeParams.id});

                }

                $scope.add = function(item){
                    $scope.result = CategoriasSrv.save(
                        {},
                        item,
                        function(data, status, headers, config){
                            $location.path('/categorias/');
                        },
                        function(data, status, headers, config){
                            alert('Erro ao inserir registro: '+data.messages[0]);
                        }
                    )
                }
                $scope.editar = function(item){
                    $scope.result = CategoriasSrv.update(
                        {id: $routeParams.id},
                        item,
                        function(data, status, headers, config){
                            $location.path('/categorias/');
                        },
                        function(data, status, headers, config){
                            alert('Erro ao editar registro: '+data.messages[0]);
                        }                                    
                    )
                }
                $scope.delete = function(id){
                    if(confirm('Deseja realmente excluir este registro?')){
                        CategoriasSrv.remove(
                            {id: id},
                            {},
                            function(data, status, headers, config){
                                $location.path('/categorias/');
                            },
                            function(data, status, headers, config){
                                alert('Erro ao deletar registro: '+data.messages[0]);
                            }                                
                        )
                    }
                }

            }
        ]
    )
    .controller('ProdutosCtrl',
            ['$scope','ProdutosSrv','CategoriasSrv','$location','$routeParams',
            function($scope, ProdutosSrv,CategoriasSrv,$location, $routeParams){
                $scope.nome = "Ennio 10";

                $scope.load = function(){
                    $scope.registros = ProdutosSrv.query();
                }

                $scope.getCategorias = function(){
                    $scope.categorias = CategoriasSrv.query();
                }
                $scope.getCategorias();
               //$scope.load();

                $scope.get = function(){
                    $scope.item = ProdutosSrv.get({id: $routeParams.id});

                }

                $scope.add = function(item){
                    $scope.result = ProdutosSrv.save(
                        {},
                        item,
                        function(data, status, headers, config){
                            $location.path('/produtos/');
                        },
                        function(data, status, headers, config){
                            alert('Erro ao inserir registro: '+data.messages[0]);
                        }
                    )
                }
                $scope.editar = function(item){
                    $scope.result = ProdutosSrv.update(
                        {id: $routeParams.id},
                        item,
                        function(data, status, headers, config){
                            $location.path('/produtos/');
                        },
                        function(data, status, headers, config){
                            alert('Erro ao editar registro: '+data.messages[0]);
                        }                                    
                    )
                }
                $scope.delete = function(id){
                    if(confirm('Deseja realmente excluir este registro?')){
                        ProdutosSrv.remove(
                            {id: id},
                            {},
                            function(data, status, headers, config){
                                $location.path('/produtos/');
                            },
                            function(data, status, headers, config){
                                alert('Erro ao deletar registro: '+data.messages[0]);
                            }                                
                        )
                    }
                }

            }
        ]
    )
    .controller('BasicExampleCtrl', ['$scope', function ($scope) {
      $scope.remove = function(scope) {
        scope.remove();
      };

      $scope.toggle = function(scope) {
        scope.toggle();
      };

      $scope.moveLastToTheBeginning = function () {
        var a = $scope.data.pop();
        $scope.data.splice(0,0, a);
      };

      $scope.newSubItem = function(scope) {
        var nodeData = scope.$modelValue;
        nodeData.nodes.push({
          id: nodeData.id * 10 + nodeData.nodes.length,
          title: nodeData.title + '.' + (nodeData.nodes.length + 1),
          nodes: []
        });
      };

      $scope.collapseAll = function() {
        $scope.$broadcast('collapseAll');
      };

      $scope.expandAll = function() {
        $scope.$broadcast('expandAll');
      };

      $scope.data = [
          {
        "id": 1,
        "title": "node1",
        "nodes": [
          {
            "id": 11,
            "title": "node1.1",
            "nodes": [
              {
                "id": 111,
                "title": "node1.1.1",
                "nodes": []
              }
            ]
          },
          {
            "id": 12,
            "title": "node1.2",
            "nodes": []
          }
        ],
      }, {
        "id": 2,
        "title": "node2",
        "nodes": [
          {
            "id": 21,
            "title": "node2.1",
            "nodes": []
          },
          {
            "id": 22,
            "title": "node2.2",
            "nodes": []
          }
        ],
      }, {
        "id": 3,
        "title": "node3",
        "nodes": [
          {
            "id": 31,
            "title": "node3.1",
            "nodes": []
          }
        ],
      }];
    }]) 
;