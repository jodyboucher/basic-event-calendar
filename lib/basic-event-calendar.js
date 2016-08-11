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

	var _templateObject = _taggedTemplateLiteral(['\n        <div class="', '">\n            ', '\n        </div>'], ['\n        <div class="', '">\n            ', '\n        </div>']),
	    _templateObject2 = _taggedTemplateLiteral(['\n            <div class="', '" data-year="', '" data-month="', '" data-day="', '">\n                ', '\n            </div>'], ['\n            <div class="', '" data-year="', '" data-month="', '" data-day="', '">\n                ', '\n            </div>']);

	var _dateHelper = __webpack_require__(1);

	var dateHelper = _interopRequireWildcard(_dateHelper);

	var _jquery = __webpack_require__(3);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _html = __webpack_require__(4);

	var _html2 = _interopRequireDefault(_html);

	var _oneLineTrim = __webpack_require__(84);

	var _oneLineTrim2 = _interopRequireDefault(_oneLineTrim);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

	__webpack_require__(88);

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
	        extractEvents: function extractEvents(data) {
	            return data.data;
	        },
	        eventList: [],
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

	    var doFetch = 'yes';
	    if (Array.isArray(settings.eventList) && settings.eventList.length > 0) {
	        doFetch = 'no';
	    }
	    renderMonth(settings.initialYear, settings.initialMonth, doFetch);
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
	    (0, _jquery2.default)('.' + classSelector).on('click', function (event) {
	        event.preventDefault();

	        var nextMonth = dateHelper.getNextMonth(currentYear, currentMonth);
	        renderMonth(nextMonth.year, nextMonth.month, 'yes');
	    });
	}

	/**
	 * Attach the click handler to the previous month navigation link
	 * @param {string} classSelector The CSS class-name assigned to elements used to navigate to the previous month
	 * @param {int} currentYear The year currently displayed
	 * @param {int} currentMonth The month currently displayed
	 */
	function attachPreviousMonthClickHandler(classSelector, currentYear, currentMonth) {
	    (0, _jquery2.default)('.' + classSelector).on('click', function (event) {
	        event.preventDefault();

	        var previousMonth = dateHelper.getPreviousMonth(currentYear, currentMonth);
	        renderMonth(previousMonth.year, previousMonth.month, 'yes');
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
	    var markupHeader = '<header>' + markupHeaderPrevious + '<h1></h1>' + markupHeaderNext + '</header>';
	    var markupDaysHeader = '<div class="' + settings.classDaysHeader + '"></div>';
	    var weekNumbers = [1, 2, 3, 4, 5, 6];
	    var markupDaysList = (0, _html2.default)(_templateObject, settings.classDaysList, weekNumbers.map(function (weekNumber) {
	        return '<div class="' + settings.classWeek + '" data-week="' + weekNumber + '"></div>';
	    }));
	    var markupDaysContainer = '<div class="' + settings.classDaysContainer + '">' + markupDaysHeader + markupDaysList + '</div>';
	    var markupEvents = '<div class="' + settings.classEventsList + '"></div>';

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
	        $firstWeek.append('<div class="' + settings.classDay + '" ></div>');
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
	            var markupDay = (0, _oneLineTrim2.default)(_templateObject2, settings.classDay, year, month, dayNumber, dayNumber);
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
	        $lastWeek.append('<div class="' + settings.classDay + '" ></div>');
	    }
	}

	/**
	 * Render the events
	 * @param {Array} events The events to render
	 */
	function renderEvents(events) {
	    events.forEach(function (element) {
	        var markup = settings.markupEvent()(element);
	        (0, _jquery2.default)('.' + settings.classEventsList).append(markup);
	    });
	}

	/**
	 * Renders the specified year/month
	 * @param {int} year The 4-digit year of the year/month to render, i.e. 2016
	 * @param {int} month The month of the year/month to render: January = 0, December = 11
	 * @param {string} fetch Should eventList for month be fetched: 'yes' = fetch eventList
	 */
	function renderMonth(year, month, fetch) {
	    renderBase(settings);
	    renderDaysHeader(year, month);
	    renderDaysList(year, month);

	    markCurrentDay(year, month);

	    attachPreviousMonthClickHandler(settings.classMonthPrevious, year, month);
	    attachNextMonthClickHandler(settings.classMonthNext, year, month);
	    attachDayClickHandler();

	    var promise = new Promise(function (resolve) {
	        if (fetch === 'yes') {
	            _jquery2.default.ajax({
	                url: settings.eventsUrl,
	                data: { year: year, month: month + 1 },
	                type: 'GET',
	                cache: false
	            }).done(function (data) {
	                settings.eventList = settings.extractEvents(data);
	                resolve();
	            }).fail(function () {
	                settings.eventList = [];
	                resolve();
	            });
	        } else {
	            resolve();
	        }
	    });
	    promise.then(function () {
	        renderEvents(settings.eventList);
	        markEventDays(year, month);
	    });
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
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _html = __webpack_require__(5);

	var _html2 = _interopRequireDefault(_html);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	exports.default = _html2.default;
	module.exports = exports['default'];

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _TemplateTag = __webpack_require__(6);

	var _TemplateTag2 = _interopRequireDefault(_TemplateTag);

	var _stripIndentTransformer = __webpack_require__(53);

	var _stripIndentTransformer2 = _interopRequireDefault(_stripIndentTransformer);

	var _inlineArrayTransformer = __webpack_require__(78);

	var _inlineArrayTransformer2 = _interopRequireDefault(_inlineArrayTransformer);

	var _trimResultTransformer = __webpack_require__(80);

	var _trimResultTransformer2 = _interopRequireDefault(_trimResultTransformer);

	var _splitStringTransformer = __webpack_require__(82);

	var _splitStringTransformer2 = _interopRequireDefault(_splitStringTransformer);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var html = new _TemplateTag2.default((0, _splitStringTransformer2.default)('\n'), _inlineArrayTransformer2.default, _stripIndentTransformer2.default, _trimResultTransformer2.default);

	exports.default = html;
	module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _TemplateTag = __webpack_require__(7);

	var _TemplateTag2 = _interopRequireDefault(_TemplateTag);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	exports.default = _TemplateTag2.default;
	module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * @class TemplateTag
	 * @classdesc Consumes a pipeline of composeable transformer plugins and produces a template tag.
	 */

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _taggedTemplateLiteral2 = __webpack_require__(8);

	var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

	var _classCallCheck2 = __webpack_require__(48);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(49);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _templateObject = (0, _taggedTemplateLiteral3.default)(['', ''], ['', '']);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var TemplateTag = function () {
	  /**
	   * constructs a template tag
	   * @constructs TemplateTag
	   * @param  {...Object} [...transformers] - an array or arguments list of transformers
	   * @return {Function}                    - a template tag
	   */

	  function TemplateTag() {
	    for (var _len = arguments.length, transformers = Array(_len), _key = 0; _key < _len; _key++) {
	      transformers[_key] = arguments[_key];
	    }

	    (0, _classCallCheck3.default)(this, TemplateTag);

	    // if first argument is an array, extrude it as a list of transformers
	    if (transformers.length && Array.isArray(transformers[0])) {
	      transformers = transformers[0];
	    }

	    // if any transformers are functions, this means they are not initiated - automatically initiate them
	    this.transformers = transformers.map(function (transformer) {
	      return typeof transformer === 'function' ? transformer() : transformer;
	    });

	    // return an ES2015 template tag
	    return this.tag.bind(this);
	  }

	  /**
	   * Applies all transformers to a template literal tagged with this method.
	   * If a function is passed as the first argument, assumes the function is a template tag
	   * and applies it to the template, returning a template tag.
	   * @param  {(Function|Array<String>)} args[0] - Either a template tag or an array containing template strings separated by identifier
	   * @param  {...*} [args[1]]                   - Optional list of substitution values.
	   * @return {(String|Function)}                - Either an intermediary tag function or the results of processing the template.
	   */

	  (0, _createClass3.default)(TemplateTag, [{
	    key: 'tag',
	    value: function tag() {
	      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	        args[_key2] = arguments[_key2];
	      }

	      // if the first argument passed is a function, assume it is a template tag and return
	      // an intermediary tag that processes the template using the aforementioned tag, passing the
	      // result to our tag
	      if (typeof args[0] === 'function') {
	        return this.interimTag.bind(this, args.shift());
	      }

	      // else, return a transformed end result of processing the template with our tag
	      return this.transformEndResult(args.shift().reduce(this.processSubstitutions.bind(this, args)));
	    }

	    /**
	     * An intermediary template tag that receives a template tag and passes the result of calling the template with the received
	     * template tag to our own template tag.
	     * @param  {Function}        nextTag          - the received template tag
	     * @param  {Array<String>}   template         - the template to process
	     * @param  {...*}            ...substitutions - `substitutions` is an array of all substitutions in the template
	     * @return {*}                                - the final processed value
	     */

	  }, {
	    key: 'interimTag',
	    value: function interimTag(previousTag, template) {
	      for (var _len3 = arguments.length, substitutions = Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
	        substitutions[_key3 - 2] = arguments[_key3];
	      }

	      return this.tag(_templateObject, previousTag.apply(undefined, [template].concat(substitutions)));
	    }

	    /**
	     * Performs bulk processing on the tagged template, transforming each substitution and then
	     * concatenating the resulting values into a string.
	     * @param  {Array<*>} substitutions - an array of all remaining substitutions present in this template
	     * @param  {String}   resultSoFar   - this iteration's result string so far
	     * @param  {String}   remainingPart - the template chunk after the current substitution
	     * @return {String}                 - the result of joining this iteration's processed substitution with the result
	     */

	  }, {
	    key: 'processSubstitutions',
	    value: function processSubstitutions(substitutions, resultSoFar, remainingPart) {
	      var substitution = this.transformSubstitution(substitutions.shift(), resultSoFar);
	      return resultSoFar + substitution + remainingPart;
	    }

	    /**
	     * When a substitution is encountered, iterates through each transformer and applies the transformer's
	     * `onSubstitution` method to the substitution.
	     * @param  {*}      substitution - The current substitution
	     * @param  {String} resultSoFar  - The result up to and excluding this substitution.
	     * @return {*}                   - The final result of applying all substitution transformations.
	     */

	  }, {
	    key: 'transformSubstitution',
	    value: function transformSubstitution(substitution, resultSoFar) {
	      var cb = function cb(res, transform) {
	        return transform.onSubstitution ? transform.onSubstitution(res, resultSoFar) : res;
	      };
	      return this.transformers.reduce(cb, substitution);
	    }

	    /**
	     * Iterates through each transformer, applying the transformer's `onEndResult` method to the
	     * template literal after all substitutions have finished processing.
	     * @param  {String} endResult - The processed template, just before it is returned from the tag
	     * @return {String}           - The final results of processing each transformer
	     */

	  }, {
	    key: 'transformEndResult',
	    value: function transformEndResult(endResult) {
	      var cb = function cb(res, transform) {
	        return transform.onEndResult ? transform.onEndResult(res) : res;
	      };
	      return this.transformers.reduce(cb, endResult);
	    }
	  }]);
	  return TemplateTag;
	}();

	exports.default = TemplateTag;
	module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _defineProperties = __webpack_require__(9);

	var _defineProperties2 = _interopRequireDefault(_defineProperties);

	var _freeze = __webpack_require__(43);

	var _freeze2 = _interopRequireDefault(_freeze);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	exports.default = function (strings, raw) {
	  return (0, _freeze2.default)((0, _defineProperties2.default)(strings, {
	    raw: {
	      value: (0, _freeze2.default)(raw)
	    }
	  }));
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	module.exports = { "default": __webpack_require__(10), __esModule: true };

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(11);
	var $Object = __webpack_require__(14).Object;
	module.exports = function defineProperties(T, D) {
	  return $Object.defineProperties(T, D);
	};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var $export = __webpack_require__(12);
	// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
	$export($export.S + $export.F * !__webpack_require__(22), 'Object', { defineProperties: __webpack_require__(27) });

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var global = __webpack_require__(13),
	    core = __webpack_require__(14),
	    ctx = __webpack_require__(15),
	    hide = __webpack_require__(17),
	    PROTOTYPE = 'prototype';

	var $export = function $export(type, name, source) {
	  var IS_FORCED = type & $export.F,
	      IS_GLOBAL = type & $export.G,
	      IS_STATIC = type & $export.S,
	      IS_PROTO = type & $export.P,
	      IS_BIND = type & $export.B,
	      IS_WRAP = type & $export.W,
	      exports = IS_GLOBAL ? core : core[name] || (core[name] = {}),
	      expProto = exports[PROTOTYPE],
	      target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE],
	      key,
	      own,
	      out;
	  if (IS_GLOBAL) source = name;
	  for (key in source) {
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if (own && key in exports) continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? function (C) {
	      var F = function F(a, b, c) {
	        if (this instanceof C) {
	          switch (arguments.length) {
	            case 0:
	              return new C();
	            case 1:
	              return new C(a);
	            case 2:
	              return new C(a, b);
	          }return new C(a, b, c);
	        }return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	      // make static versions for prototype methods
	    }(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if (IS_PROTO) {
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1; // forced
	$export.G = 2; // global
	$export.S = 4; // static
	$export.P = 8; // proto
	$export.B = 16; // bind
	$export.W = 32; // wrap
	$export.U = 64; // safe
	$export.R = 128; // real proto method for `library`
	module.exports = $export;

/***/ },
/* 13 */
/***/ function(module, exports) {

	'use strict';

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

/***/ },
/* 14 */
/***/ function(module, exports) {

	'use strict';

	var core = module.exports = { version: '2.4.0' };
	if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// optional / simple context binding
	var aFunction = __webpack_require__(16);
	module.exports = function (fn, that, length) {
	  aFunction(fn);
	  if (that === undefined) return fn;
	  switch (length) {
	    case 1:
	      return function (a) {
	        return fn.call(that, a);
	      };
	    case 2:
	      return function (a, b) {
	        return fn.call(that, a, b);
	      };
	    case 3:
	      return function (a, b, c) {
	        return fn.call(that, a, b, c);
	      };
	  }
	  return function () /* ...args */{
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 16 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function (it) {
	  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var dP = __webpack_require__(18),
	    createDesc = __webpack_require__(26);
	module.exports = __webpack_require__(22) ? function (object, key, value) {
	  return dP.f(object, key, createDesc(1, value));
	} : function (object, key, value) {
	  object[key] = value;
	  return object;
	};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var anObject = __webpack_require__(19),
	    IE8_DOM_DEFINE = __webpack_require__(21),
	    toPrimitive = __webpack_require__(25),
	    dP = Object.defineProperty;

	exports.f = __webpack_require__(22) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if (IE8_DOM_DEFINE) try {
	    return dP(O, P, Attributes);
	  } catch (e) {/* empty */}
	  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
	  if ('value' in Attributes) O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var isObject = __webpack_require__(20);
	module.exports = function (it) {
	  if (!isObject(it)) throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 20 */
/***/ function(module, exports) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	module.exports = function (it) {
	  return (typeof it === 'undefined' ? 'undefined' : _typeof(it)) === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = !__webpack_require__(22) && !__webpack_require__(23)(function () {
	  return Object.defineProperty(__webpack_require__(24)('div'), 'a', { get: function get() {
	      return 7;
	    } }).a != 7;
	});

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(23)(function () {
	  return Object.defineProperty({}, 'a', { get: function get() {
	      return 7;
	    } }).a != 7;
	});

/***/ },
/* 23 */
/***/ function(module, exports) {

	"use strict";

	module.exports = function (exec) {
	  try {
	    return !!exec();
	  } catch (e) {
	    return true;
	  }
	};

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var isObject = __webpack_require__(20),
	    document = __webpack_require__(13).document
	// in old IE typeof document.createElement is 'object'
	,
	    is = isObject(document) && isObject(document.createElement);
	module.exports = function (it) {
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(20);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function (it, S) {
	  if (!isObject(it)) return it;
	  var fn, val;
	  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
	  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
	  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 26 */
/***/ function(module, exports) {

	"use strict";

	module.exports = function (bitmap, value) {
	  return {
	    enumerable: !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable: !(bitmap & 4),
	    value: value
	  };
	};

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var dP = __webpack_require__(18),
	    anObject = __webpack_require__(19),
	    getKeys = __webpack_require__(28);

	module.exports = __webpack_require__(22) ? Object.defineProperties : function defineProperties(O, Properties) {
	  anObject(O);
	  var keys = getKeys(Properties),
	      length = keys.length,
	      i = 0,
	      P;
	  while (length > i) {
	    dP.f(O, P = keys[i++], Properties[P]);
	  }return O;
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys = __webpack_require__(29),
	    enumBugKeys = __webpack_require__(42);

	module.exports = Object.keys || function keys(O) {
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var has = __webpack_require__(30),
	    toIObject = __webpack_require__(31),
	    arrayIndexOf = __webpack_require__(35)(false),
	    IE_PROTO = __webpack_require__(39)('IE_PROTO');

	module.exports = function (object, names) {
	  var O = toIObject(object),
	      i = 0,
	      result = [],
	      key;
	  for (key in O) {
	    if (key != IE_PROTO) has(O, key) && result.push(key);
	  } // Don't enum bug & hidden keys
	  while (names.length > i) {
	    if (has(O, key = names[i++])) {
	      ~arrayIndexOf(result, key) || result.push(key);
	    }
	  }return result;
	};

/***/ },
/* 30 */
/***/ function(module, exports) {

	"use strict";

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function (it, key) {
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(32),
	    defined = __webpack_require__(34);
	module.exports = function (it) {
	  return IObject(defined(it));
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(33);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 33 */
/***/ function(module, exports) {

	"use strict";

	var toString = {}.toString;

	module.exports = function (it) {
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 34 */
/***/ function(module, exports) {

	"use strict";

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function (it) {
	  if (it == undefined) throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(31),
	    toLength = __webpack_require__(36),
	    toIndex = __webpack_require__(38);
	module.exports = function (IS_INCLUDES) {
	  return function ($this, el, fromIndex) {
	    var O = toIObject($this),
	        length = toLength(O.length),
	        index = toIndex(fromIndex, length),
	        value;
	    // Array#includes uses SameValueZero equality algorithm
	    if (IS_INCLUDES && el != el) while (length > index) {
	      value = O[index++];
	      if (value != value) return true;
	      // Array#toIndex ignores holes, Array#includes - not
	    } else for (; length > index; index++) {
	        if (IS_INCLUDES || index in O) {
	          if (O[index] === el) return IS_INCLUDES || index || 0;
	        }
	      }return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(37),
	    min = Math.min;
	module.exports = function (it) {
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 37 */
/***/ function(module, exports) {

	"use strict";

	// 7.1.4 ToInteger
	var ceil = Math.ceil,
	    floor = Math.floor;
	module.exports = function (it) {
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var toInteger = __webpack_require__(37),
	    max = Math.max,
	    min = Math.min;
	module.exports = function (index, length) {
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var shared = __webpack_require__(40)('keys'),
	    uid = __webpack_require__(41);
	module.exports = function (key) {
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var global = __webpack_require__(13),
	    SHARED = '__core-js_shared__',
	    store = global[SHARED] || (global[SHARED] = {});
	module.exports = function (key) {
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 41 */
/***/ function(module, exports) {

	'use strict';

	var id = 0,
	    px = Math.random();
	module.exports = function (key) {
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 42 */
/***/ function(module, exports) {

	'use strict';

	// IE 8- don't enum bug keys
	module.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	module.exports = { "default": __webpack_require__(44), __esModule: true };

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(45);
	module.exports = __webpack_require__(14).Object.freeze;

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// 19.1.2.5 Object.freeze(O)
	var isObject = __webpack_require__(20),
	    meta = __webpack_require__(46).onFreeze;

	__webpack_require__(47)('freeze', function ($freeze) {
	  return function freeze(it) {
	    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
	  };
	});

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var META = __webpack_require__(41)('meta'),
	    isObject = __webpack_require__(20),
	    has = __webpack_require__(30),
	    setDesc = __webpack_require__(18).f,
	    id = 0;
	var isExtensible = Object.isExtensible || function () {
	  return true;
	};
	var FREEZE = !__webpack_require__(23)(function () {
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function setMeta(it) {
	  setDesc(it, META, { value: {
	      i: 'O' + ++id, // object ID
	      w: {} // weak collections IDs
	    } });
	};
	var fastKey = function fastKey(it, create) {
	  // return primitive with prefix
	  if (!isObject(it)) return (typeof it === 'undefined' ? 'undefined' : _typeof(it)) == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if (!has(it, META)) {
	    // can't set metadata to uncaught frozen object
	    if (!isExtensible(it)) return 'F';
	    // not necessary to add metadata
	    if (!create) return 'E';
	    // add missing metadata
	    setMeta(it);
	    // return object ID
	  }return it[META].i;
	};
	var getWeak = function getWeak(it, create) {
	  if (!has(it, META)) {
	    // can't set metadata to uncaught frozen object
	    if (!isExtensible(it)) return true;
	    // not necessary to add metadata
	    if (!create) return false;
	    // add missing metadata
	    setMeta(it);
	    // return hash weak collections IDs
	  }return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function onFreeze(it) {
	  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY: META,
	  NEED: false,
	  fastKey: fastKey,
	  getWeak: getWeak,
	  onFreeze: onFreeze
	};

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(12),
	    core = __webpack_require__(14),
	    fails = __webpack_require__(23);
	module.exports = function (KEY, exec) {
	  var fn = (core.Object || {})[KEY] || Object[KEY],
	      exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function () {
	    fn(1);
	  }), 'Object', exp);
	};

/***/ },
/* 48 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;

	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _defineProperty = __webpack_require__(50);

	var _defineProperty2 = _interopRequireDefault(_defineProperty);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	exports.default = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
	    }
	  }

	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	module.exports = { "default": __webpack_require__(51), __esModule: true };

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(52);
	var $Object = __webpack_require__(14).Object;
	module.exports = function defineProperty(it, key, desc) {
	  return $Object.defineProperty(it, key, desc);
	};

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var $export = __webpack_require__(12);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(22), 'Object', { defineProperty: __webpack_require__(18).f });

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _stripIndentTransformer = __webpack_require__(54);

	var _stripIndentTransformer2 = _interopRequireDefault(_stripIndentTransformer);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	exports.default = _stripIndentTransformer2.default;
	module.exports = exports['default'];

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * strips indentation from a template literal
	 * @param  {String} type = 'initial' - whether to remove all indentation or just leading indentation. can be 'all' or 'initial'
	 * @return {Object}                  - a TemplateTag transformer
	 */

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _toConsumableArray2 = __webpack_require__(55);

	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var stripIndentTransformer = function stripIndentTransformer() {
	  var type = arguments.length <= 0 || arguments[0] === undefined ? 'initial' : arguments[0];
	  return {
	    onEndResult: function onEndResult(endResult) {
	      if (type === 'initial') {
	        // remove the shortest leading indentation from each line
	        var match = endResult.match(/^[ \t]*(?=\S)/gm);
	        var indent = Math.min.apply(Math, (0, _toConsumableArray3.default)(match.map(function (el) {
	          return el.length;
	        })));
	        var regexp = new RegExp('^[ \\t]{' + indent + '}', 'gm');
	        endResult = indent > 0 ? endResult.replace(regexp, '') : endResult;
	      } else if (type === 'all') {
	        // remove all indentation from each line
	        endResult = endResult.split('\n').map(function (line) {
	          return line.trimLeft();
	        }).join('\n');
	      } else {
	        throw new Error('Unknown type: ' + type);
	      }
	      return endResult;
	    }
	  };
	};

	exports.default = stripIndentTransformer;
	module.exports = exports['default'];

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _from = __webpack_require__(56);

	var _from2 = _interopRequireDefault(_from);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	exports.default = function (arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
	      arr2[i] = arr[i];
	    }

	    return arr2;
	  } else {
	    return (0, _from2.default)(arr);
	  }
	};

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	module.exports = { "default": __webpack_require__(57), __esModule: true };

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(58);
	__webpack_require__(71);
	module.exports = __webpack_require__(14).Array.from;

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var $at = __webpack_require__(59)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(60)(String, 'String', function (iterated) {
	  this._t = String(iterated); // target
	  this._i = 0; // next index
	  // 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function () {
	  var O = this._t,
	      index = this._i,
	      point;
	  if (index >= O.length) return { value: undefined, done: true };
	  point = $at(O, index);
	  this._i += point.length;
	  return { value: point, done: false };
	});

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var toInteger = __webpack_require__(37),
	    defined = __webpack_require__(34);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function (TO_STRING) {
	  return function (that, pos) {
	    var s = String(defined(that)),
	        i = toInteger(pos),
	        l = s.length,
	        a,
	        b;
	    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var LIBRARY = __webpack_require__(61),
	    $export = __webpack_require__(12),
	    redefine = __webpack_require__(62),
	    hide = __webpack_require__(17),
	    has = __webpack_require__(30),
	    Iterators = __webpack_require__(63),
	    $iterCreate = __webpack_require__(64),
	    setToStringTag = __webpack_require__(67),
	    getPrototypeOf = __webpack_require__(69),
	    ITERATOR = __webpack_require__(68)('iterator'),
	    BUGGY = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	,
	    FF_ITERATOR = '@@iterator',
	    KEYS = 'keys',
	    VALUES = 'values';

	var returnThis = function returnThis() {
	  return this;
	};

	module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function getMethod(kind) {
	    if (!BUGGY && kind in proto) return proto[kind];
	    switch (kind) {
	      case KEYS:
	        return function keys() {
	          return new Constructor(this, kind);
	        };
	      case VALUES:
	        return function values() {
	          return new Constructor(this, kind);
	        };
	    }return function entries() {
	      return new Constructor(this, kind);
	    };
	  };
	  var TAG = NAME + ' Iterator',
	      DEF_VALUES = DEFAULT == VALUES,
	      VALUES_BUG = false,
	      proto = Base.prototype,
	      $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT],
	      $default = $native || getMethod(DEFAULT),
	      $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined,
	      $anyNative = NAME == 'Array' ? proto.entries || $native : $native,
	      methods,
	      key,
	      IteratorPrototype;
	  // Fix native
	  if ($anyNative) {
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
	    if (IteratorPrototype !== Object.prototype) {
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if (DEF_VALUES && $native && $native.name !== VALUES) {
	    VALUES_BUG = true;
	    $default = function values() {
	      return $native.call(this);
	    };
	  }
	  // Define iterator
	  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG] = returnThis;
	  if (DEFAULT) {
	    methods = {
	      values: DEF_VALUES ? $default : getMethod(VALUES),
	      keys: IS_SET ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if (FORCED) for (key in methods) {
	      if (!(key in proto)) redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 61 */
/***/ function(module, exports) {

	"use strict";

	module.exports = true;

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(17);

/***/ },
/* 63 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {};

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var create = __webpack_require__(65),
	    descriptor = __webpack_require__(26),
	    setToStringTag = __webpack_require__(67),
	    IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(17)(IteratorPrototype, __webpack_require__(68)('iterator'), function () {
	  return this;
	});

	module.exports = function (Constructor, NAME, next) {
	  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject = __webpack_require__(19),
	    dPs = __webpack_require__(27),
	    enumBugKeys = __webpack_require__(42),
	    IE_PROTO = __webpack_require__(39)('IE_PROTO'),
	    Empty = function Empty() {/* empty */},
	    PROTOTYPE = 'prototype';

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var _createDict = function createDict() {
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(24)('iframe'),
	      i = enumBugKeys.length,
	      lt = '<',
	      gt = '>',
	      iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(66).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  _createDict = iframeDocument.F;
	  while (i--) {
	    delete _createDict[PROTOTYPE][enumBugKeys[i]];
	  }return _createDict();
	};

	module.exports = Object.create || function create(O, Properties) {
	  var result;
	  if (O !== null) {
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty();
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = _createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(13).document && document.documentElement;

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var def = __webpack_require__(18).f,
	    has = __webpack_require__(30),
	    TAG = __webpack_require__(68)('toStringTag');

	module.exports = function (it, tag, stat) {
	  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
	};

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var store = __webpack_require__(40)('wks'),
	    uid = __webpack_require__(41),
	    _Symbol = __webpack_require__(13).Symbol,
	    USE_SYMBOL = typeof _Symbol == 'function';

	var $exports = module.exports = function (name) {
	  return store[name] || (store[name] = USE_SYMBOL && _Symbol[name] || (USE_SYMBOL ? _Symbol : uid)('Symbol.' + name));
	};

	$exports.store = store;

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has = __webpack_require__(30),
	    toObject = __webpack_require__(70),
	    IE_PROTO = __webpack_require__(39)('IE_PROTO'),
	    ObjectProto = Object.prototype;

	module.exports = Object.getPrototypeOf || function (O) {
	  O = toObject(O);
	  if (has(O, IE_PROTO)) return O[IE_PROTO];
	  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
	    return O.constructor.prototype;
	  }return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(34);
	module.exports = function (it) {
	  return Object(defined(it));
	};

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var ctx = __webpack_require__(15),
	    $export = __webpack_require__(12),
	    toObject = __webpack_require__(70),
	    call = __webpack_require__(72),
	    isArrayIter = __webpack_require__(73),
	    toLength = __webpack_require__(36),
	    createProperty = __webpack_require__(74),
	    getIterFn = __webpack_require__(75);

	$export($export.S + $export.F * !__webpack_require__(77)(function (iter) {
	  Array.from(iter);
	}), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike /*, mapfn = undefined, thisArg = undefined*/) {
	    var O = toObject(arrayLike),
	        C = typeof this == 'function' ? this : Array,
	        aLen = arguments.length,
	        mapfn = aLen > 1 ? arguments[1] : undefined,
	        mapping = mapfn !== undefined,
	        index = 0,
	        iterFn = getIterFn(O),
	        length,
	        result,
	        step,
	        iterator;
	    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
	      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
	        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
	      }
	    } else {
	      length = toLength(O.length);
	      for (result = new C(length); length > index; index++) {
	        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(19);
	module.exports = function (iterator, fn, value, entries) {
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	    // 7.4.6 IteratorClose(iterator, completion)
	  } catch (e) {
	    var ret = iterator['return'];
	    if (ret !== undefined) anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// check on default Array iterator
	var Iterators = __webpack_require__(63),
	    ITERATOR = __webpack_require__(68)('iterator'),
	    ArrayProto = Array.prototype;

	module.exports = function (it) {
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var $defineProperty = __webpack_require__(18),
	    createDesc = __webpack_require__(26);

	module.exports = function (object, index, value) {
	  if (index in object) $defineProperty.f(object, index, createDesc(0, value));else object[index] = value;
	};

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var classof = __webpack_require__(76),
	    ITERATOR = __webpack_require__(68)('iterator'),
	    Iterators = __webpack_require__(63);
	module.exports = __webpack_require__(14).getIteratorMethod = function (it) {
	  if (it != undefined) return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
	};

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(33),
	    TAG = __webpack_require__(68)('toStringTag')
	// ES3 wrong here
	,
	    ARG = cof(function () {
	  return arguments;
	}()) == 'Arguments';

	// fallback for IE11 Script Access Denied error
	var tryGet = function tryGet(it, key) {
	  try {
	    return it[key];
	  } catch (e) {/* empty */}
	};

	module.exports = function (it) {
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	  // @@toStringTag case
	  : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	  // builtinTag case
	  : ARG ? cof(O)
	  // ES3 arguments fallback
	  : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var ITERATOR = __webpack_require__(68)('iterator'),
	    SAFE_CLOSING = false;

	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function () {
	    SAFE_CLOSING = true;
	  };
	  Array.from(riter, function () {
	    throw 2;
	  });
	} catch (e) {/* empty */}

	module.exports = function (exec, skipClosing) {
	  if (!skipClosing && !SAFE_CLOSING) return false;
	  var safe = false;
	  try {
	    var arr = [7],
	        iter = arr[ITERATOR]();
	    iter.next = function () {
	      return { done: safe = true };
	    };
	    arr[ITERATOR] = function () {
	      return iter;
	    };
	    exec(arr);
	  } catch (e) {/* empty */}
	  return safe;
	};

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _inlineArrayTransformer = __webpack_require__(79);

	var _inlineArrayTransformer2 = _interopRequireDefault(_inlineArrayTransformer);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	exports.default = _inlineArrayTransformer2.default;
	module.exports = exports['default'];

/***/ },
/* 79 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var defaults = {
	  separator: ''
	};

	/**
	 * Converts an array substitution to a string containing a list
	 * @param  {String} opts.separator = '' - the character that separates each item
	 * @param  {String} [opts.conjunction]  - replace the last separator with this
	 * @return {Object}                     - a TemplateTag transformer
	 */
	var inlineArrayTransformer = function inlineArrayTransformer() {
	  var opts = arguments.length <= 0 || arguments[0] === undefined ? defaults : arguments[0];
	  return {
	    onSubstitution: function onSubstitution(substitution, resultSoFar) {
	      // only operate on arrays
	      if (Array.isArray(substitution)) {
	        var separator = opts.separator;
	        var conjunction = opts.conjunction;
	        // join each item in the array into a string where each item is separated by separator
	        // be sure to maintain indentation
	        var indent = resultSoFar.match(/(\s+)$/);
	        if (indent) {
	          substitution = substitution.join(separator + indent[1]);
	        } else {
	          substitution = substitution.join(separator + ' ');
	        }
	        // if conjunction is set, replace the last separator with conjunction
	        if (conjunction) {
	          var separatorIndex = substitution.lastIndexOf(separator);
	          substitution = substitution.substr(0, separatorIndex) + ' ' + conjunction + substitution.substr(separatorIndex + 1);
	        }
	      }
	      return substitution;
	    }
	  };
	};

	exports.default = inlineArrayTransformer;
	module.exports = exports['default'];

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _trimResultTransformer = __webpack_require__(81);

	var _trimResultTransformer2 = _interopRequireDefault(_trimResultTransformer);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	exports.default = _trimResultTransformer2.default;
	module.exports = exports['default'];

/***/ },
/* 81 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * TemplateTag transformer that trims whitespace on the end result of a tagged template
	 * @param  {String} side = '' - The side of the string to trim. Can be 'left' or 'right'
	 * @return {Object}           - a TemplateTag transformer
	 */

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var trimResultTransformer = function trimResultTransformer() {
	  var side = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
	  return {
	    onEndResult: function onEndResult(endResult) {
	      side = side.toLowerCase();
	      // uppercase the first letter of side value
	      if (side === 'left' || side === 'right') {
	        side = side.charAt(0).toUpperCase() + side.slice(1);
	      } else if (side !== '') {
	        throw new Error('Side not supported: ' + side);
	      }
	      return endResult['trim' + side]();
	    }
	  };
	};

	exports.default = trimResultTransformer;
	module.exports = exports['default'];

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _splitStringTransformer = __webpack_require__(83);

	var _splitStringTransformer2 = _interopRequireDefault(_splitStringTransformer);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	exports.default = _splitStringTransformer2.default;
	module.exports = exports['default'];

/***/ },
/* 83 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var splitStringTransformer = function splitStringTransformer(splitBy) {
	  return {
	    onSubstitution: function onSubstitution(substitution, resultSoFar) {
	      if (splitBy != null && typeof splitBy === 'string') {
	        if (typeof substitution === 'string' && substitution.includes(splitBy)) {
	          substitution = substitution.split(splitBy);
	        }
	      } else {
	        throw new Error('You need to specify a string character to split by.');
	      }
	      return substitution;
	    }
	  };
	};

	exports.default = splitStringTransformer;
	module.exports = exports['default'];

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _oneLineTrim = __webpack_require__(85);

	var _oneLineTrim2 = _interopRequireDefault(_oneLineTrim);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	exports.default = _oneLineTrim2.default;
	module.exports = exports['default'];

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _TemplateTag = __webpack_require__(6);

	var _TemplateTag2 = _interopRequireDefault(_TemplateTag);

	var _trimResultTransformer = __webpack_require__(80);

	var _trimResultTransformer2 = _interopRequireDefault(_trimResultTransformer);

	var _replaceResultTransformer = __webpack_require__(86);

	var _replaceResultTransformer2 = _interopRequireDefault(_replaceResultTransformer);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var oneLineTrim = new _TemplateTag2.default((0, _replaceResultTransformer2.default)(/(?:\n\s+)/g, ''), _trimResultTransformer2.default);

	exports.default = oneLineTrim;
	module.exports = exports['default'];

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _replaceResultTransformer = __webpack_require__(87);

	var _replaceResultTransformer2 = _interopRequireDefault(_replaceResultTransformer);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	exports.default = _replaceResultTransformer2.default;
	module.exports = exports['default'];

/***/ },
/* 87 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * Replaces tabs, newlines and spaces with the chosen value when they occur in sequences
	 * @param  {(String|RegExp)} replaceWhat - the value or pattern that should be replaced
	 * @param  {*}               replaceWith - the replacement value
	 * @return {Object}                      - a TemplateTag transformer
	 */

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var replaceResultTransformer = function replaceResultTransformer(replaceWhat, replaceWith) {
	  return {
	    onEndResult: function onEndResult(endResult) {
	      if (replaceWhat == null || replaceWith == null) {
	        throw new Error('replaceResultTransformer requires at least 2 arguments.');
	      }
	      return endResult.replace(replaceWhat, replaceWith);
	    }
	  };
	};

	exports.default = replaceResultTransformer;
	module.exports = exports['default'];

/***/ },
/* 88 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ])
});
;