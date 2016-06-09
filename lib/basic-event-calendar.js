(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("jQuery"));
	else if(typeof define === 'function' && define.amd)
		define("BasicEventCalendar", ["jQuery"], factory);
	else if(typeof exports === 'object')
		exports["BasicEventCalendar"] = factory(require("jQuery"));
	else
		root["BasicEventCalendar"] = factory(root["jQuery"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.show = undefined;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _dateHelper = __webpack_require__(1);

	var dateHelper = _interopRequireWildcard(_dateHelper);

	var _jquery = __webpack_require__(3);

	var _jquery2 = _interopRequireDefault(_jquery);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	__webpack_require__(4);

	var defaults = {};
	var settings = {};

	/**
	 * Initialize and show events calendar
	 * @param {Object} options An Options object
	 */
	function show(options) {
	    var currentDate = new Date();

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
	        markupDayHeaderSunday: function markupDayHeaderSunday() {
	            return getDefaultDayHeaderMarkup(dateHelper.dayIndexSunday);
	        },
	        markupDayHeaderMonday: function markupDayHeaderMonday() {
	            return getDefaultDayHeaderMarkup(dateHelper.dayIndexMonday);
	        },
	        markupDayHeaderTuesday: function markupDayHeaderTuesday() {
	            return getDefaultDayHeaderMarkup(dateHelper.dayIndexTuesday);
	        },
	        markupDayHeaderWednesday: function markupDayHeaderWednesday() {
	            return getDefaultDayHeaderMarkup(dateHelper.dayIndexWednesday);
	        },
	        markupDayHeaderThursday: function markupDayHeaderThursday() {
	            return getDefaultDayHeaderMarkup(dateHelper.dayIndexThursday);
	        },
	        markupDayHeaderFriday: function markupDayHeaderFriday() {
	            return getDefaultDayHeaderMarkup(dateHelper.dayIndexFriday);
	        },
	        markupDayHeaderSaturday: function markupDayHeaderSaturday() {
	            return getDefaultDayHeaderMarkup(dateHelper.dayIndexSaturday);
	        },
	        markupEvent: getDefaultRenderEvent
	    };
	    settings = Object.assign({}, defaults, (typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object' && options);

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
	    (0, _jquery2.default)('.' + settings.classDay)
	    // add 'selected day' styling
	    .on('click', function (event) {
	        (0, _jquery2.default)('.' + settings.classDay).removeClass('active');
	        (0, _jquery2.default)(event.target).addClass('active');
	    })
	    // display events for day
	    .on('click', function (event) {
	        var $target = (0, _jquery2.default)(event.target);
	        var eventYear = $target.data('year');
	        var eventMonth = $target.data('month');
	        var eventDay = $target.data('day');
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
	    (0, _jquery2.default)('.' + classSelector).on('click', function () {
	        var nextMonth = dateHelper.getNextMonth(currentYear, currentMonth);
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
	    (0, _jquery2.default)('.' + classSelector).on('click', function () {
	        var previousMonth = dateHelper.getPreviousMonth(currentYear, currentMonth);
	        renderMonth(previousMonth.year, previousMonth.month);
	    });
	}

	/**
	 * Remove all calendar markup
	 * @param {object} options Settings object
	 */
	function clearCalendar(options) {
	    (0, _jquery2.default)('.' + options.classContainer).empty();
	}

	/**
	 * Display events for date
	 * @param {string} classSelector The CSS class-name assigned to event elements
	 * @param {int} year The year of the events to display
	 * @param {int} month The month of the events to display
	 * @param {int} day The day of the events to display
	 */
	function displayEventsForDay(classSelector, year, month, day) {
	    (0, _jquery2.default)('.' + classSelector).slideUp('slow');

	    var selector = '.' + classSelector + '[data-year="' + year + '"][data-month="' + month + '"][data-day="' + day + '"]';
	    (0, _jquery2.default)(selector).slideDown('slow');
	}

	/**
	 * Get the default day header markup for the specified day
	 * @param {int} dayIndex The index of day
	 * @returns {string} The markup for the specified day's header
	 */
	function getDefaultDayHeaderMarkup(dayIndex) {
	    var dayName = dateHelper.getDayName(dayIndex);
	    var dayDisplay = dateHelper.getDayNameMinimum(dayIndex);

	    return '<div class="' + settings.classDayLabel + '"><abbr title="' + dayName + '">' + dayDisplay + '</abbr></div>';
	}

	/**
	 * Return the default event rendering function
	 * @returns {function} Function that renders the event
	 */
	function getDefaultRenderEvent() {
	    return function (event) {
	        return '\n            <div class="' + settings.classEvent + '" data-year="' + event.year + '" data-month="' + event.month + '" \n                 data-day="' + event.day + '">\n                <h2>' + event.title + '</h2>\n                <p>' + event.description + '</p>\n            </div>';
	    };
	}

	/**
	 * Mark the current day if in the displayed month
	 * @param {int} displayYear The year displayed
	 * @param {int} displayMonth The month displayed
	 */
	function markCurrentDay(displayYear, displayMonth) {
	    var today = new Date();
	    var todayYear = today.getFullYear();
	    var todayMonth = today.getMonth();
	    var todayDay = today.getDate();

	    if (parseInt(displayYear, 10) === todayYear) {
	        if (parseInt(displayMonth, 10) === todayMonth) {
	            var $days = (0, _jquery2.default)('.' + settings.classDay);
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
	    (0, _jquery2.default)('.' + settings.classEvent).each(function (index, element) {
	        var year = (0, _jquery2.default)(element).data('year');
	        var month = (0, _jquery2.default)(element).data('month');

	        if (parseInt(year, 10) === parseInt(displayYear, 10) && parseInt(month, 10) === parseInt(displayMonth, 10)) {
	            var day = (0, _jquery2.default)(element).data('day');
	            var selector = '.' + settings.classDay + '[data-year="' + year + '"][data-month="' + month + '"][data-day="' + day + '"]';
	            (0, _jquery2.default)(selector).addClass('event');
	        }
	    });
	}

	/**
	 * Renders the base markup for the calendar
	 */
	function renderBase() {
	    var markupHeaderPrevious = '<a class="' + settings.classMonthPrevious + '" href="#" title="Previous month" role="button">&lsaquo;</a>';
	    var markupHeaderNext = '<a class="' + settings.classMonthNext + '" href="#" title="Next month" role="button">&rsaquo;</a>';
	    var markupHeader = '<header>' + markupHeaderPrevious + '<h1 />' + markupHeaderNext + '</header>';
	    var markupDaysHeader = '<div class="' + settings.classDaysHeader + '" />';
	    var markupDaysList = '<div class="' + settings.classDaysList + '"><div class="' + settings.classWeek + '" data-week="1" /><div class="' + settings.classWeek + '" data-week="2" /><div class="' + settings.classWeek + '" data-week="3" /><div class="' + settings.classWeek + '" data-week="4" /><div class="' + settings.classWeek + '" data-week="5" /><div class="' + settings.classWeek + '" data-week="6" /></div>';
	    var markupDaysContainer = '<div class="' + settings.classDaysContainer + '">' + markupDaysHeader + markupDaysList + '</div>';
	    var markupEvents = '<div class="' + settings.classEventsList + '" />';

	    var markup = '\n            <section>\n                ' + markupHeader + '\n                ' + markupDaysContainer + '\n                ' + markupEvents + '\n            </section>';

	    clearCalendar(settings);
	    (0, _jquery2.default)('.' + settings.classContainer).append(markup);
	}

	/**
	 * Renders the days header for the specified year/month
	 * @param {int} year The 4-digit year of the year/month to render, i.e. 2016
	 * @param {int} month The month of the year/month to render: January = 0, December = 11
	 */
	function renderDaysHeader(year, month) {
	    var $monthControl = (0, _jquery2.default)('.' + settings.classContainer + ' header');
	    $monthControl.find('h1').text(dateHelper.getMonthName(month) + ' ' + year);

	    var $monthHeader = (0, _jquery2.default)('.' + settings.classDaysHeader);
	    $monthHeader.append(settings.markupDayHeaderSunday(), settings.markupDayHeaderMonday(), settings.markupDayHeaderTuesday(), settings.markupDayHeaderWednesday(), settings.markupDayHeaderThursday(), settings.markupDayHeaderFriday(), settings.markupDayHeaderSaturday());
	}

	/**
	 * Renders the days list for the specified year/month
	 * @param {int} year
	 * @param {int} month
	 */
	function renderDaysList(year, month) {
	    var $display = (0, _jquery2.default)('.' + settings.classDaysList);
	    $display.data('year', year).data('month', month);

	    var $weekRows = $display.find('[data-week]');
	    var daysInMonth = dateHelper.getDaysInMonth(year, month);

	    // first, populate the pre-month cells
	    var firstDayOfMonthOffset = daysInMonth[0].getDay();
	    var $firstWeek = $weekRows.filter('[data-week=1]');
	    for (var index = 0; index < firstDayOfMonthOffset; index = index + 1) {
	        $firstWeek.append('<div class="' + settings.classDay + '" />');
	    }

	    // second, populate the month cells
	    var weekNumber = 1;
	    var dayOfWeek = firstDayOfMonthOffset;
	    var _iteratorNormalCompletion = true;
	    var _didIteratorError = false;
	    var _iteratorError = undefined;

	    try {
	        for (var _iterator = daysInMonth[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            var currentDate = _step.value;

	            var dayNumber = currentDate.getDate();
	            var markupDay = '<div class="' + settings.classDay + '" data-year="' + year + '" data-month="' + month + '" data-day="' + dayNumber + '">' + dayNumber + '</div>';
	            var $week = $weekRows.filter('[data-week=' + weekNumber + ']');
	            $week.append(markupDay);

	            dayOfWeek = dayOfWeek + 1;
	            if (dayOfWeek > 6) {
	                dayOfWeek = 0;
	                weekNumber = weekNumber + 1;
	            }
	        }

	        // third, populate the post-month cells
	    } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	    } finally {
	        try {
	            if (!_iteratorNormalCompletion && _iterator.return) {
	                _iterator.return();
	            }
	        } finally {
	            if (_didIteratorError) {
	                throw _iteratorError;
	            }
	        }
	    }

	    var lastDayOfMonthOffset = daysInMonth[daysInMonth.length - 1].getDay();
	    var $lastWeek = $weekRows.filter('[data-week=' + weekNumber + ']');
	    for (var _index = lastDayOfMonthOffset + 1; _index <= 6; _index = _index + 1) {
	        $lastWeek.append('<div class="' + settings.classDay + '" />');
	    }
	}

	/**
	 * Render the events
	 * @param {int} year The 4-digit year of the events to render, i.e. 2016
	 * @param {int} month The month of the events to render: January = 0, December = 11
	 */
	function renderEvents(year, month) {
	    _jquery2.default.ajax({
	        url: settings.eventsUrl,
	        type: 'GET'
	    }).done(function (data) {
	        var events = data.events;

	        events.forEach(function (element) {
	            var markup = settings.markupEvent(element);
	            (0, _jquery2.default)('.' + settings.classEventsList).append(markup);
	        });

	        markEventDays(year, month);
	    }).fail(function () {});
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

	exports.show = show;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	(function webpackUniversalModuleDefinition(root, factory) {
		if (( false ? 'undefined' : _typeof(exports)) === 'object' && ( false ? 'undefined' : _typeof(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') exports["date-helper"] = factory();else root["date-helper"] = factory();
	})(undefined, function () {
		return (/******/function (modules) {
				// webpackBootstrap
				/******/ // The module cache
				/******/var installedModules = {};

				/******/ // The require function
				/******/function __webpack_require__(moduleId) {

					/******/ // Check if module is in cache
					/******/if (installedModules[moduleId])
						/******/return installedModules[moduleId].exports;

					/******/ // Create a new module (and put it into the cache)
					/******/var module = installedModules[moduleId] = {
						/******/exports: {},
						/******/id: moduleId,
						/******/loaded: false
						/******/ };

					/******/ // Execute the module function
					/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

					/******/ // Flag the module as loaded
					/******/module.loaded = true;

					/******/ // Return the exports of the module
					/******/return module.exports;
					/******/
				}

				/******/ // expose the modules object (__webpack_modules__)
				/******/__webpack_require__.m = modules;

				/******/ // expose the module cache
				/******/__webpack_require__.c = installedModules;

				/******/ // __webpack_public_path__
				/******/__webpack_require__.p = "";

				/******/ // Load entry module and return exports
				/******/return __webpack_require__(0);
				/******/
			}(
			/************************************************************************/
			/******/[
			/* 0 */
			/***/function (module, exports) {

				'use strict';

				Object.defineProperty(exports, "__esModule", {
					value: true
				});
				var dayIndexSunday = exports.dayIndexSunday = 0;
				var dayIndexMonday = exports.dayIndexMonday = 1;
				var dayIndexTuesday = exports.dayIndexTuesday = 2;
				var dayIndexWednesday = exports.dayIndexWednesday = 3;
				var dayIndexThursday = exports.dayIndexThursday = 4;
				var dayIndexFriday = exports.dayIndexFriday = 5;
				var dayIndexSaturday = exports.dayIndexSaturday = 6;

				var dayNames = exports.dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

				var dayNamesMinimum = exports.dayNamesMinimum = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

				var dayNamesShort = exports.dayNamesShort = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

				var dayNamesAbbreviated = exports.dayNamesAbbreviated = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

				var monthNames = exports.monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

				/**
	    * Gets the name of the specified day
	    * @param {int} day The day (zero based, Sunday=0)
	    * @returns {string} The name of the day
	    */
				var getDayName = exports.getDayName = function getDayName(day) {
					return dayNames[day];
				};

				/**
	    * Gets the abbreviated name of the specified day.
	    * This is a three character abbreviated day name.
	    * @param {int} day The day (zero based, Sunday=0)
	    * @returns {string} The abbreviated name of the day
	    */
				var getDayNameAbbreviated = exports.getDayNameAbbreviated = function getDayNameAbbreviated(day) {
					return dayNamesAbbreviated[day];
				};

				/**
	    * Gets the minimum name of the specified day.
	    * This is a single character representation of the day name.
	    * @param {int} day The day (zero based, Sunday=0)
	    * @returns {string} The minimum name of the day
	    */
				var getDayNameMinimum = exports.getDayNameMinimum = function getDayNameMinimum(day) {
					return dayNamesMinimum[day];
				};

				/**
	    * Gets the short name of the specified day.
	    * This is a 2 character representation of the day name.
	    * @param {int} day The day (zero based, Sunday=0)
	    * @returns {string} The short name of the day
	    */
				var getDayNameShort = exports.getDayNameShort = function getDayNameShort(day) {
					return dayNamesShort[day];
				};

				/**
	    * Gets an array of the days in the specified month
	    * @param {int} year The four digit year
	    * @param {int} month The month (zero based, January=0)
	    * @returns {date[]} The days in the specified month
	    */
				var getDaysInMonth = exports.getDaysInMonth = function getDaysInMonth(year, month) {
					var date = new Date(year, month, 1);
					var days = [];
					while (date.getMonth() === month) {
						days.push(new Date(date));
						date.setDate(date.getDate() + 1);
					}

					return days;
				};

				/**
	    * Gets the name of the specified month
	    * @param {int} month The month (zero based, January=0)
	    * @returns {string} The name of the month
	    */
				var getMonthName = exports.getMonthName = function getMonthName(month) {
					return monthNames[month];
				};

				/**
	    * Calculate the next year/month
	    * @param {int} year The year of the date the next month is calculated from
	    * @param {int} month The month of the date the next month is calculated from (0 based, January=0)
	    * @returns {{year: int, month: int}} Object containing the next year and month
	    */
				var getNextMonth = exports.getNextMonth = function getNextMonth(year, month) {
					var nextYear = year;
					var nextMonth = month + 1;
					if (nextMonth > 11) {
						nextYear = nextYear + 1;
						nextMonth = 0;
					}

					return { year: nextYear, month: nextMonth };
				};

				/**
	    * Calculate the previous year/month
	    * @param {int} year The year of the date the previous month is calculated from
	    * @param {int} month The month of the date the previous month is calculated from (0 based, January=0)
	    * @returns {{year: int, month: int}} Object containing the previous year and month
	    */

				var getPreviousMonth = exports.getPreviousMonth = function getPreviousMonth(year, month) {
					var prevYear = year;
					var prevMonth = month - 1;
					if (prevMonth < 0) {
						prevYear = prevYear - 1;
						prevMonth = 11;
					}

					return { year: prevYear, month: prevMonth };
				};

				/***/
			}
			/******/])
		);
	});
	;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	module.exports = function (module) {
		if (!module.webpackPolyfill) {
			module.deprecate = function () {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	};

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ])
});
;