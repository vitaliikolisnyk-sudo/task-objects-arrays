
let tv = {
  currentChannel: 1;
  nextChannel() {
    this.currentChannel++;
  };
  previousChannel() {
    if (this.currentChannel > 1) {
      this.currentChannel--;
    }
  };
  setChannel(number) {
    this.currentChannel = number;
  }
};
tv.nextChannel();
console.log(tv.currentChannel); 
tv.setChannel(5);
console.log(tv.currentChannel); 
tv.previousChannel();
console.log(tv.currentChannel); 
