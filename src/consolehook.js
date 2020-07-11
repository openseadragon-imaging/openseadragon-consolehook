import OpenSeadragon from 'openseadragon';

/**
 * @file openseadragon-consolehook.js
 * @version <%= pkg.version %>
 * @author Mark Salsbery <msalsbery@hotmail.com>
 *
 */

/**
 * @module openseadragon-consolehook
 * @version <%= pkg.version %>
 * @requires module:openseadragon
 *
 */

export default (function (OSD, $) {
	// if (!OSD.version || OSD.version.major < 1) {
	// 	throw new Error(
	// 		'OpenSeadragonConsoleHook requires OpenSeadragon version 1.0.0+'
	// 	);
	// }

	/**
	 * Creates a new ConsoleHook.
	 *
	 * @method addConsoleHook
	 * @memberof external:"OpenSeadragon.Viewer"#
	 * @param {Object} options
	 * @param {Function} [options.log] - console.log function. Function can return true to prevent original function call.
	 * @param {Function} [options.debug] - console.debug function. Function can return true to prevent original function call.
	 * @param {Function} [options.info] - console.info function. Function can return true to prevent original function call.
	 * @param {Function} [options.warn] - console.warn function. Function can return true to prevent original function call.
	 * @param {Function} [options.error] - console.error function. Function can return true to prevent original function call.
	 * @returns {OpenSeadragonImaging.ConsoleHook}
	 *
	 **/
	OSD.Viewer.prototype.addConsoleHook = function (options) {
		options = options || {};
		return new $.ConsoleHook(options);
	};

	/**
	 * Creates a new OpenSeadragonImaging.ConsoleHook.
	 *
	 * @class ConsoleHook
	 * @classdesc Provides hooks into the OpenSeadragon console pipeline.
	 * @memberof OpenSeadragonImaging
	 * @param {Object} options
	 * @param {Function} [options.log] - console.log function. Function can return true to prevent original function call.
	 * @param {Function} [options.debug] - console.debug function. Function can return true to prevent original function call.
	 * @param {Function} [options.info] - console.info function. Function can return true to prevent original function call.
	 * @param {Function} [options.warn] - console.warn function. Function can return true to prevent original function call.
	 * @param {Function} [options.error] - console.error function. Function can return true to prevent original function call.
	 *
	 **/
	$.ConsoleHook = function (options) {
		options = options || {};

		this.origHandlers = {};

		for (let key in options) {
			if (Object.prototype.hasOwnProperty.call(options, key)) {
				this.origHandlers[key] = OSD.console[key] || null;
				/*jshint loopfunc:true*/
				// eslint-disable-next-line no-loop-func
				(function (handler) {
					let origHandler = OSD.console[key];
					OSD.console[key] = function () {
						if (!handler.apply(this, arguments) && origHandler) {
							origHandler.apply(this, arguments);
						}
					};
				})(options[key]);
				/*jshint loopfunc:false*/
			}
		}
	};

	/**
	 * ConsoleHook version.
	 * @member {Object} OpenSeadragonImaging.ConsoleHook.version
	 * @static
	 * @property {String} versionStr - The version number as a string ('major.minor.revision').
	 * @property {Number} major - The major version number.
	 * @property {Number} minor - The minor version number.
	 * @property {Number} revision - The revision number.
	 */
	$.ConsoleHook.version = '<%= pkg.version.obj %>';

	/**
	 * Remove hooks and OpenSeadragon.console references. Call before
	 * OpenSeadragon.Viewer.destroy().
	 * @function OpenSeadragonImaging.ConsoleHook.prototype#destroy
	 * @since 2.2.0
	 */
	$.ConsoleHook.prototype.destroy = function () {
		for (let key in this.origHandlers) {
			OSD.console[key] = this.origHandlers[key];
		}
		this.origHandlers = {};
	};

	return $.ConsoleHook;
})(
	OpenSeadragon || window.OpenSeadragon,
	(window.OpenSeadragonImaging = window.OpenSeadragonImaging || {})
);
