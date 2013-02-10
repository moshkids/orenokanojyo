/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

$(function(){

    // 画面遷移
    $('#go_home').click(function(){
        location.href="./index.html";
    });
    $('#new_girlfriend').click(function(){
        location.href="./new_gf.html";
    });
    $('#entry_new_target').click(function(){

    });

    $('#gf_name').on('keydown', function(){
        if ($('#gf_name').val().length > 0) {
            if ($('#kakugo').get(0).checked) {
                $('#entry_new_target').removeAttr('disabled');
            }
        } else {
            $('#entry_new_target').attr('disabled', 'disabled');
        }
    });

    $('#kakugo').on('change', function(){
        if ($('#kakugo').get(0).checked) {
            if ($('#gf_name').val().length > 0) {
                $('#entry_new_target').removeAttr('disabled');
            }
        } else {
            $('#entry_new_target').attr('disabled', 'disabled');
        }
        
    });

});






