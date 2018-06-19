/* tslint:disable no-console */
import Component from "@ember/component";

export default class TestStyles extends Component {

    public list = [
      { name: "Item 1" },
      { name: "Item 2" },
      { name: "Item 3" },
    ];
    public listTwo = [
      { name: "Item 4" },
      { name: "Item 5" },
      { name: "Item 6" },
    ];

    public actions = {
      dropped() {
        console.log("Item Dropped");
      },

      dragged() {
        console.log("Item Dragged");
      },
    };
}
