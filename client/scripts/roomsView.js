// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {
  $addRoom: $('#addRoom button'),
  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function (data) {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    //update the rooms._data array and the dom room list drop down menu
    Rooms._updateList(data);
  },

  render: function () {
    // TODO: Render out the list of rooms.
  },

  renderRoom: function (roomname) {
    var node = _.template(`
    <option value=\"<%-roomname%>\" >
      <%-roomname%>
    </option>`)({ roomname: roomname });
    //console.log(node);
    this.$select.append(node);
    Rooms._addRoom(roomname);
  },

  handleChange: function (event) {
    // TODO: Handle a user selecting a different room.

  },

  handleClick: function (event) {
    let inputRoom = prompt("💩  Add Room ✨", "input a valid room name here");
    if (inputRoom == null || inputRoom === "" || inputRoom === "input a valid room name here") {
      window.alert('🚨 null or empty input 🚨');
    } else {
      RoomsView.renderRoom(inputRoom);
    }
    console.log('accessing handle click function in roomsView');
    // TODO: Handle the user clicking the "Add Room" button.
  }

};
