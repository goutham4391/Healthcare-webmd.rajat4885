/* Object to make a div with scrolling text scroll automatically */
function Autoscroller(settings) {	
	/* save the settings */
	this.settings = settings;
	
	/* look up our node */
	this.scroller = document.getElementById(this.settings.id);
	
	/* reset the scroller position on load if true */
	this.settings.reset_position_on_load ? this.reset_scroller() : null;
	
	/* start the scroller if the auto setting is true */
	this.settings.scroll_on_load ? this.start_autoscroll() : null;
}

/* start the autoscroll */
Autoscroller.prototype.start_autoscroll = function() {
	/* shortcut to the object settings */
	var s = this.settings;
	
	/* stop the scroller to reset vars */
	this.stop_autoscroll();
	
	/* delay the start to smooth the animation */
	var self = this;
	this.settings.autoscroll_delayed_exec = setTimeout(function() {
		self.create_autoscroll_interval();															
	}, s.delay);
};

/* create the autoscroll interval */
Autoscroller.prototype.create_autoscroll_interval = function() {
	/* the object is running */
	this.settings.autoscroll_is_scrolling = true;
	
	/* shortcut to the object settings */
	var s = this.settings;
	
	/* build and execute the interval code */
	var self = this;
	this.settings.autoscroll_interval = setInterval(function() {
		self.autoscroll();									 
	}, s.interval);
};

/* this function runs at a specified interval to actually do the scrolling */
Autoscroller.prototype.autoscroll = function() {
	var scroller = this.scroller;
	if (scroller) {
		/* if we're at the end and the config says to do so, reset the scroller */
		if (scroller.scrollTop >= (scroller.scrollHeight-scroller.clientHeight)) {
			this.settings.reset_position_on_end ? this.reset_scroller() : null;
			this.stop_autoscroll();
		}
		/* stop the autoscroller if scrollTop has changed since the last interval, indicating user has moved the scrollbar */
		if (this.settings.autoscroll_last_scrolltop != scroller.scrollTop) {
			this.stop_autoscroll();
		}
		/* do the scroll if is_scrolling is set to true */
		if ((scroller.scrollTop < scroller.scrollHeight) && this.settings.autoscroll_is_scrolling) {
			scroller.scrollTop += 1;
			this.settings.autoscroll_last_scrolltop = scroller.scrollTop;
		}
	}
};

/* stop the scroller */
Autoscroller.prototype.stop_autoscroll = function() {
	var scroller = this.scroller;
	clearInterval(this.settings.autoscroll_interval);
	clearTimeout(this.settings.autoscroll_delayed_exec);
	if (scroller) {
		this.settings.autoscroll_last_scrolltop = scroller.scrollTop;
		this.settings.autoscroll_is_scrolling = false;
	}
};

/* make sure the box starts at the top on page load */
Autoscroller.prototype.reset_scroller = function() {
	var scroller = this.scroller;
	if (scroller) {
		scroller.scrollTop = 0;
	}
};