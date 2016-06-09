#simple-event-calendar
simple-event-calendar provides a very basic lightweight interface for displaying events on a monthly calendar view.

##Usage
```html
<!-- include the styles for the calendar -->
<link rel="stylesheet" href="basic-event-calendar.css">

<!-- create the container for the calendar at the appropriate location in the page markup -->
<div class="bec-container"></div>

<!-- Include jquery on the page -->
<script src="https://code.jquery.com/jquery-2.2.4.min.js"
		integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44="
		crossorigin="anonymous"></script>

<!-- include the calendar javascript -->
<script src="lib/basic-event-calendar.js"></script>

<!-- show the calendar, any of the default options can be overridden when calling .show(options) -->
<script>
    BasicEventCalendar.show({
        initialYear: 2016,
        initialMonth: 0,
        eventsUrl: 'test-data.json'
    });
</script>
```

## Authors
  - [Jody Boucher](http://github.com/jodyboucher)

## License
Copyright (c) 2016 Jody Boucher <[https://jodyboucher.com/](https://jodyboucher.com/)>
Released under [The MIT License](http://opensource.org/licenses/MIT)
