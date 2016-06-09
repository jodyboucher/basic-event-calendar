import * as dateHelper from 'date-helper';
import $ from 'jquery';

require('../scss/basic-event-calendar.scss');

let defaults = {};
let settings = {};


/**
 * Initialize and show events calendar
 * @param {Object} options An Options object
 */
function show(options) {
    const currentDate = new Date();

    defaults = {
        initialYear: currentDate.getFullYear(),
        initialMonth: currentDate.getMonth(),
        eventsUrl: 'events-data.json',
        monthNames: [],
        dayNames: [],
        dayNamesAbbreviated: [],
        dayNamesMinimum: [],
        dayNamesShort: [],
        classContainer: 'bec-container',
        classDay: 'bec-day',
        classDayLabel: 'bec-day-label',
        classDaysContainer: 'bec-days-container',
        classDaysHeader: 'bec-days-header',
        classDaysList: 'bec-days',
        classEvent: 'bec-event',
        classEventsList: 'bec-events',
        classMonthNext: 'bec-button-next',
        classMonthPrevious: 'bec-button-prev',
        classWeek: 'bec-week',
        markupDayHeaderSunday: () => getDefaultDayHeaderMarkup(dateHelper.dayIndexSunday),
        markupDayHeaderMonday: () => getDefaultDayHeaderMarkup(dateHelper.dayIndexMonday),
        markupDayHeaderTuesday: () => getDefaultDayHeaderMarkup(dateHelper.dayIndexTuesday),
        markupDayHeaderWednesday: () => getDefaultDayHeaderMarkup(dateHelper.dayIndexWednesday),
        markupDayHeaderThursday: () => getDefaultDayHeaderMarkup(dateHelper.dayIndexThursday),
        markupDayHeaderFriday: () => getDefaultDayHeaderMarkup(dateHelper.dayIndexFriday),
        markupDayHeaderSaturday: () => getDefaultDayHeaderMarkup(dateHelper.dayIndexSaturday),
        markupEvent: getDefaultRenderEvent
    };
    settings = Object.assign({}, defaults, typeof options === 'object' && options);

    if (settings.monthNames.length === 12) {
        dateHelper.monthNames = settings.monthNames;
    }

    if (settings.dayNames.length === 7) {
        dateHelper.dayNames = settings.dayNames;
    }

    if (settings.dayNamesAbbreviated.length === 7) {
        dateHelper.dayNamesAbbreviated = settings.dayNamesAbbreviated;
    }

    if (settings.dayNamesMinimum.length === 7) {
        dateHelper.dayNamesMinimum = settings.dayNamesMinimum;
    }

    if (settings.dayNamesShort.length === 7) {
        dateHelper.dayNamesShort = settings.dayNamesShort;
    }

    renderMonth(settings.initialYear, settings.initialMonth);
}

/**
 * Attach the click handler to the days
 */
function attachDayClickHandler() {
    $('.' + settings.classDay)
        // add 'selected day' styling
        .on('click', function(event) {
            $('.' + settings.classDay).removeClass('active');
            $(event.target).addClass('active');
        })
        // display events for day
        .on('click', function(event) {
            const $target = $(event.target);
            const eventYear = $target.data('year');
            const eventMonth = $target.data('month');
            const eventDay = $target.data('day');
            displayEventsForDay(settings.classEvent, eventYear, eventMonth, eventDay);
        });
}

/**
 * Attach the click handler to the next month navigation link
 * @param {string} classSelector The CSS class-name assigned to elements used to navigate to the next month
 * @param {int} currentYear The year currently displayed
 * @param {int} currentMonth The month currently displayed
 */
function attachNextMonthClickHandler(classSelector, currentYear, currentMonth) {
    $('.' + classSelector).on('click', function() {
        const nextMonth = dateHelper.getNextMonth(currentYear, currentMonth);
        renderMonth(nextMonth.year, nextMonth.month);
    });
}

/**
 * Attach the click handler to the previous month navigation link
 * @param {string} classSelector The CSS class-name assigned to elements used to navigate to the previous month
 * @param {int} currentYear The year currently displayed
 * @param {int} currentMonth The month currently displayed
 */
function attachPreviousMonthClickHandler(classSelector, currentYear, currentMonth) {
    $('.' + classSelector).on('click', function() {
        const previousMonth = dateHelper.getPreviousMonth(currentYear, currentMonth);
        renderMonth(previousMonth.year, previousMonth.month);
    });
}

/**
 * Remove all calendar markup
 * @param {object} options Settings object
 */
function clearCalendar(options) {
    $('.' + options.classContainer).empty();
}

/**
 * Display events for date
 * @param {string} classSelector The CSS class-name assigned to event elements
 * @param {int} year The year of the events to display
 * @param {int} month The month of the events to display
 * @param {int} day The day of the events to display
 */
function displayEventsForDay(classSelector, year, month, day) {
    $('.' + classSelector).slideUp('slow');

    const selector = `.${classSelector}[data-year="${year}"][data-month="${month}"][data-day="${day}"]`;
    $(selector).slideDown('slow');
}

/**
 * Get the default day header markup for the specified day
 * @param {int} dayIndex The index of day
 * @returns {string} The markup for the specified day's header
 */
function getDefaultDayHeaderMarkup(dayIndex) {
    const dayName = dateHelper.getDayName(dayIndex);
    const dayDisplay = dateHelper.getDayNameMinimum(dayIndex);

    return `<div class="${settings.classDayLabel}"><abbr title="${dayName}">${dayDisplay}</abbr></div>`;
}

/**
 * Return the default event rendering function
 * @returns {function} Function that renders the event
 */
function getDefaultRenderEvent() {
    return (event) => `
            <div class="${settings.classEvent}" data-year="${event.year}" data-month="${event.month}" 
                 data-day="${event.day}">
                <h2>${event.title}</h2>
                <p>${event.description}</p>
            </div>`;
}

/**
 * Mark the current day if in the displayed month
 * @param {int} displayYear The year displayed
 * @param {int} displayMonth The month displayed
 */
function markCurrentDay(displayYear, displayMonth) {
    const today = new Date();
    const todayYear = today.getFullYear();
    const todayMonth = today.getMonth();
    const todayDay = today.getDate();

    if (parseInt(displayYear, 10) === todayYear) {
        if (parseInt(displayMonth, 10) === todayMonth) {
            const $days = $('.' + settings.classDay);
            $days.filter('[data-day="' + todayDay + '"]').addClass('current-day');
        }
    }
}

/**
 * Mark the days that have associated events
 * @param {int} displayYear The year displayed
 * @param {int} displayMonth The month displayed
 */
function markEventDays(displayYear, displayMonth) {
    $('.' + settings.classEvent).each(function(index, element) {
        const year = $(element).data('year');
        const month = $(element).data('month');

        if (parseInt(year, 10) === parseInt(displayYear, 10)
            && parseInt(month, 10) === parseInt(displayMonth, 10)) {
            const day = $(element).data('day');
            const selector = `.${settings.classDay}[data-year="${year}"][data-month="${month}"][data-day="${day}"]`;
            $(selector).addClass('event');
        }
    });
}

/**
 * Renders the base markup for the calendar
 */
function renderBase() {
    const markupHeaderPrevious = `<a class="${settings.classMonthPrevious}" href="#" title="Previous month" role="button">&lsaquo;</a>`;
    const markupHeaderNext = `<a class="${settings.classMonthNext}" href="#" title="Next month" role="button">&rsaquo;</a>`;
    const markupHeader = `<header>${markupHeaderPrevious}<h1 />${markupHeaderNext}</header>`;
    const markupDaysHeader = `<div class="${settings.classDaysHeader}" />`;
    const markupDaysList = `<div class="${settings.classDaysList}"><div class="${settings.classWeek}" data-week="1" /><div class="${settings.classWeek}" data-week="2" /><div class="${settings.classWeek}" data-week="3" /><div class="${settings.classWeek}" data-week="4" /><div class="${settings.classWeek}" data-week="5" /><div class="${settings.classWeek}" data-week="6" /></div>`;
    const markupDaysContainer = `<div class="${settings.classDaysContainer}">${markupDaysHeader}${markupDaysList}</div>`;
    const markupEvents = `<div class="${settings.classEventsList}" />`;

    const markup = `
            <section>
                ${markupHeader}
                ${markupDaysContainer}
                ${markupEvents}
            </section>`;

    clearCalendar(settings);
    $('.' + settings.classContainer).append(markup);
}

/**
 * Renders the days header for the specified year/month
 * @param {int} year The 4-digit year of the year/month to render, i.e. 2016
 * @param {int} month The month of the year/month to render: January = 0, December = 11
 */
function renderDaysHeader(year, month) {
    const $monthControl = $('.' + settings.classContainer + ' header');
    $monthControl.find('h1').text(dateHelper.getMonthName(month) + ' ' + year);

    const $monthHeader = $('.' + settings.classDaysHeader);
    $monthHeader.append(
        settings.markupDayHeaderSunday(),
        settings.markupDayHeaderMonday(),
        settings.markupDayHeaderTuesday(),
        settings.markupDayHeaderWednesday(),
        settings.markupDayHeaderThursday(),
        settings.markupDayHeaderFriday(),
        settings.markupDayHeaderSaturday());
}

/**
 * Renders the days list for the specified year/month
 * @param {int} year
 * @param {int} month
 */
function renderDaysList(year, month) {
    const $display = $('.' + settings.classDaysList);
    $display.data('year', year).data('month', month);

    const $weekRows = $display.find('[data-week]');
    const daysInMonth = dateHelper.getDaysInMonth(year, month);

    // first, populate the pre-month cells
    const firstDayOfMonthOffset = daysInMonth[0].getDay();
    const $firstWeek = $weekRows.filter('[data-week=1]');
    for (let index = 0; index < firstDayOfMonthOffset; index = index + 1) {
        $firstWeek.append('<div class="' + settings.classDay + '" />');
    }

    // second, populate the month cells
    let weekNumber = 1;
    let dayOfWeek = firstDayOfMonthOffset;
    for (const currentDate of daysInMonth) {
        const dayNumber = currentDate.getDate();
        const markupDay = `<div class="${settings.classDay}" data-year="${year}" data-month="${month}" data-day="${dayNumber}">${dayNumber}</div>`;
        const $week = $weekRows.filter('[data-week=' + weekNumber + ']');
        $week.append(markupDay);

        dayOfWeek = dayOfWeek + 1;
        if (dayOfWeek > 6) {
            dayOfWeek = 0;
            weekNumber = weekNumber + 1;
        }
    }

    // third, populate the post-month cells
    const lastDayOfMonthOffset = daysInMonth[daysInMonth.length - 1].getDay();
    const $lastWeek = $weekRows.filter('[data-week=' + weekNumber + ']');
    for (let index = lastDayOfMonthOffset + 1; index <= 6; index = index + 1) {
        $lastWeek.append('<div class="' + settings.classDay + '" />');
    }
}

/**
 * Render the events
 * @param {int} year The 4-digit year of the events to render, i.e. 2016
 * @param {int} month The month of the events to render: January = 0, December = 11
 */
function renderEvents(year, month) {
    $.ajax({
        url: settings.eventsUrl,
        type: 'GET'
    })
        .done(function(data) {
            const events = data.events;

            events.forEach(function(element) {
                const markup = settings.markupEvent(element);
                $('.' + settings.classEventsList).append(markup);
            });

            markEventDays(year, month);
        })
        .fail(function() {});
}

/**
 * Renders the specified year/month
 * @param {int} year The 4-digit year of the year/month to render, i.e. 2016
 * @param {int} month The month of the year/month to render: January = 0, December = 11
 */
function renderMonth(year, month) {
    renderBase(settings);
    renderDaysHeader(year, month);
    renderDaysList(year, month);
    renderEvents(year, month);

    markCurrentDay(year, month);

    attachPreviousMonthClickHandler(settings.classMonthPrevious, year, month);
    attachNextMonthClickHandler(settings.classMonthNext, year, month);
    attachDayClickHandler();
}

export { show };
