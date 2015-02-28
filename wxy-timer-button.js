(function() {
  Polymer({
    raised: true,
    z: 3,
    eventDelegates: {
      tap: 'onTap'
    },
    attached: function() {
      this.width = this.clientWidth;
      this.radius = this.width / 2 - 5;
      this.center = this.width / 2;
    },
    onTap: function() {
      if (!this.raised) {
        return;
      } else {
        this.raised = false;
        this.$.shadow.setZ(0);
      }
      this.fire('start');
      this._StartTimer();
    },
    addTime: function() {
      this.time += 15;
    },
    subtractTime: function() {
      this.time -= 15;
      if (this.time < 0) {
        this.time = 0;
      }
    },
    reset: function() {
      this.raised = true;
      this.$.shadow.setZ(3);
    },
    _StartTimer: function() {
      if (this.time > 0) {
        this.job('time', function() {
          this.time--;
          if (this.time < 0) {
            this.time = 0;
          }
          this._StartTimer();
        }, 1000);
      } else {
        this.fire('complete');
      }
    }
  });

}).call(this);
