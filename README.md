#basic-event-calendar
basic-event-calendar is a javascript library that provides a very basic lightweight interface for displaying events on a monthly calendar view.

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

## Options
### `initialYear`
The initial year to display.

Value: integer, 4 digit year, i.e. 2016

Default: current year

### `initialMonth`
The initial month to display.

Value: integer, 0 = January, 11 = December

Default: current month number

### `eventsUrl`
The base URL where month events can be retrieved.

Value: string URL

Default: `'events-data.json'`

### `eventList`
The events for the initially displayed month.

Value: array of events.
```
[
    {
      "year": "2016",
      "month": "0",
      "day": "1",
      "title": "New Year's Day",
      "description": "First day of the year."
    },
    {
      "year": "2016",
      "month": "11",
      "day": "31",
      "title": "New Year's Eve",
      "description": "Last day of the year."
    },
    ...
  ]
```

Default value: `[]`

### `extractEvents`
A function that extracts the events array from the response obtained from `eventsUrl`.

Value: Function

Default: `(data) => return data.data`

### `monthNames`
An array of month names.  Allows month names to be specified in an alternative language or to be abbreviated.

Value: array of string

Default: `[ 'January', 'February', 'March', 'April',' May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ]`

### `dayNames`
An array of day names.  Allows day names to be specified in an alternative language. The default renderer for the days header uses these values in the `abbr` tag (i.e. `<div class="bec-day-label"><abbr title="Monday">M</abbr></div>`).

Value: array of string

Default: `[ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ]`

### `dayNamesAbbreviated`
An array of abbreviated day names. Allows abbreviated day names to be specified in an alternative language. The default render for the days header does not currently use these values.

Value: array of string

Default: `[ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ]`

### `dayNamesMinimum`
An array of minimum day names. Allows minimum day names to be specified in an alternative language. The default renderer for the days header uses these values as the displayed day name (i.e. `<div class="bec-day-label"><abbr title="Monday">M</abbr></div>`).

Value: array of string

Default: `[ 'S', 'M', 'T', 'W', 'T', 'F', 'S' ]`

### `dayNamesShort`
An array of short day names. Allows short day names to be specified in an alternative language. The default render for the days header does not currently use these values.

Value: array of string

Default: `[ 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa' ]`

### `classContainer`
The CSS class assigned to the event calendar container.  This class must match the class of the container manually defined in the HTML - see *Usage* for example.

Value: string

Default: `'bec-container'`

### `classDay`
The CSS class assigned to the container for each day by the default renderer.

Value: string

Default: `'bec-day'`

### `classDayLabel`
The CSS class assigned to the container for each day label in the days header by the default renderer.

Value: string

Default: `'bec-day-label'`

### `classDaysContainer`
The CSS class assigned to the container of the day headers and all the days by the default renderer.

Value: string

Default: `'bec-days-container'`

### `classDaysHeader`
The CSS class assigned to the container of the day headers by the default renderer.

Value: string

Default: `'bec-days-header'`

### `classDaysList`
The CSS class assigned to the container of all the days by the default renderer.

Value: string

Default: `'bec-days'`

### `classEvent`
The CSS class assigned to the container of each event by the default renderer.

Value: string

Default: `'bec-event'`

### `classEventsList`
The CSS class assigned to the container of all the events by the default renderer.

Value: string

Default: `'bec-events'`

### `classMonthNext`
The CSS class assigned to the link that moves the event calendar to the next month.

Value: string

Default: `'bec-button-next'`

### `classMonthPrevious`
The CSS class assigned to the link that moves the event calendar to the previous month.

Value: string

Default: `'bec-button-prev'`

### `classWeek`
The CSS class assigned to the container of all the days in a week by the default renderer.

Value: string

Default: `'bec-week'`

### `markupDayHeaderSunday`
The function that renders the header markup for Sunday.

Value: Function

Default: `() => getDefaultDayHeaderMarkup(dateHelper.dayIndexSunday)`

### `markupDayHeaderMonday`
The function that renders the header markup for Monday.

Value: Function

Default: `() => getDefaultDayHeaderMarkup(dateHelper.dayIndexMonday)`

### `markupDayHeaderTuesday`
The function that renders the header markup for Tuesday.

Value: Function

Default: `() => getDefaultDayHeaderMarkup(dateHelper.dayIndexTuesday)`

### `markupDayHeaderWednesday`
The function that renders the header markup for Wednesday.

Value: Function

Default: `() => getDefaultDayHeaderMarkup(dateHelper.dayIndexWednesday)`

### `markupDayHeaderThursday`
The function that renders the header markup for Thursday.

Value: Function

Default: `() => getDefaultDayHeaderMarkup(dateHelper.dayIndexThursday)`

### `markupDayHeaderFriday`
The function that renders the header markup for Friday.

Value: Function

Default value: `() => getDefaultDayHeaderMarkup(dateHelper.dayIndexFriday)`

### `markupDayHeaderSaturday`
The function that renders the header markup for Saturday.

Value: Function

Default: `() => getDefaultDayHeaderMarkup(dateHelper.dayIndexSaturday)`

### `markupEvent`
The function that renders the markup for each event.

Value: Function

Default: `getDefaultRenderEvent`

## Authors
  - [Jody Boucher](http://github.com/jodyboucher)

## License
Copyright (c) 2016 Jody Boucher <[https://jodyboucher.com/](https://jodyboucher.com/)>
Released under [The MIT License](http://opensource.org/licenses/MIT)
