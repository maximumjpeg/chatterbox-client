// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Rooms = {
  $button: $('#rooms button'),
  $select: $('#rooms select'),
  // TODO: Define how you want to store the list of rooms
  _data: [],

  // TODO: Define methods which allow you to add rooms, update the list,
  // mark a room as selected, etc.

  _addRoom: function (roomName) {
    if (!this._data.includes(roomName)) {
      this._data.push(roomName);
      // console.log('current list of room names:', this._data);
    }
  },

  _updateList: function (data) {
    //console.log('updateList called, logging data:', data);
    //iterate over data
    for (var message in data) {
      //console.log('should be 1 message', data[message]);
      var roomname = _.template(`<%- roomname %>`)({ roomname: data[message].roomname });
      if (!this._data.includes(roomname)) {
        this._data.push(roomname);
        RoomsView.renderRoom(roomname);
      }
    }
    //console.log('current list of room names:', this._data);
  },

  _markSelected: function (event) {
    var roomName = $("#rooms select option");
  }

};